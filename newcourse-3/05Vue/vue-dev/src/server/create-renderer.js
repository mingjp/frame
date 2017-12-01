/* @flow */

import RenderStream from './render-stream'
import TemplateRenderer from './template-renderer/index'
import { createWriteFunction } from './write'
import { createRenderFunction } from './render'
import type { ClientManifest, ServerManifest } from './template-renderer/index'

export type Renderer = {
  renderToString: (component: Component, cb: (err: ?Error, res: ?string) => void) => void;
  renderToStream: (component: Component) => stream$Readable;
};

type RenderCache = {
  get: (key: string, cb?: Function) => string | void;
  set: (key: string, val: string) => void;
  has?: (key: string, cb?: Function) => boolean | void;
};

export type RenderOptions = {
  modules?: Array<(vnode: VNode) => string>;
  directives?: Object;
  isUnaryTag?: Function;
  cache?: RenderCache;
  template?: string;
  basedir?: string;
  shouldPreload?: Function;
  serverManifest?: ServerManifest;
  clientManifest?: ClientManifest;
};

export function createRenderer ({
  modules = [],
  directives = {},
  isUnaryTag = (() => false),
  template,
  cache,
  shouldPreload,
  serverManifest,
  clientManifest
}: RenderOptions = {}): Renderer {
  const render = createRenderFunction(modules, directives, isUnaryTag, cache)
  const templateRenderer = new TemplateRenderer({
    template,
    shouldPreload,
    serverManifest,
    clientManifest
  })

  return {
    renderToString (
      component: Component,
      done: (err: ?Error, res: ?string) => any,
      context?: ?Object
    ): void {
      if (!template && context && clientManifest) {
        exposeAssetRenderFns(context, templateRenderer)
      }
      let result = ''
      const write = createWriteFunction(text => {
        result += text
        return false
      }, done)
      try {
        render(component, write, () => {
          if (template) {
            result = templateRenderer.renderSync(result, context)
          }
          done(null, result)
        })
      } catch (e) {
        done(e)
      }
    },

    renderToStream (
      component: Component,
      context?: ?Object
    ): stream$Readable {
      const renderStream = new RenderStream((write, done) => {
        render(component, write, done)
      })
      if (!template) {
        if (context && clientManifest) {
          exposeAssetRenderFns(context, templateRenderer)
        }
        return renderStream
      } else {
        const templateStream = templateRenderer.createStream(context)
        renderStream.on('error', err => {
          templateStream.emit('error', err)
        })
        renderStream.pipe(templateStream)
        return templateStream
      }
    }
  }
}

// Expose preload/prefetch and script render fns when client manifest is
// available.
function exposeAssetRenderFns (context: Object, renderer: TemplateRenderer) {
  context.renderPreloadLinks = renderer.renderPreloadLinks.bind(renderer, context)
  context.renderPrefetchLinks = renderer.renderPrefetchLinks.bind(renderer, context)
  context.renderScripts = renderer.renderScripts.bind(renderer, context)
}