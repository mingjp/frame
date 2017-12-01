import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { HeroComponent } from './components/hero/hero.component';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import {Utils} from './utils/utils';


import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'range'})
export class RangePipe implements PipeTransform {
  transform(value: Array<any>, range: Number): Array<Number> {
    for(var i = 0; i < range; i++){
      value.push(i);
    }
    return value;
  }
}

@Pipe({name: 'format'})
export class FoarmatPipe implements PipeTransform {
  transform(value: String, formatObj: Object): String {
    if(!formatObj || !value){
      return value;
    }

    switch(formatObj['Handle']){
      case 'replace':
        value = value.replace(formatObj['Format'], formatObj['Result']);
        break;
      case 'date':
        value = Utils.dateFormat(new Date(), formatObj['Format']);
        break
    }
    return value;
  }
}
import {DictionayService} from './service/dictionary.service';
import { DataformComponent } from './components/dataform/dataform.component';
import { ListoptionDirective } from './directives/listoption.directive';
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HeroComponent,
    DatagridComponent,
    RangePipe,
    FoarmatPipe,
    DataformComponent,
    ListoptionDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DictionayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }