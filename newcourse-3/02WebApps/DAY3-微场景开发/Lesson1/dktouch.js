
	function DKTouch(_args1){
		var defalut = {
			element: null,
			toLeft: null,
			toRight: null,
			toUp: null,
			toBottom: null
		}

		this.opts = {};

		for(var key in defalut){
			if(typeof _args1 == 'object' &&  _args1[key]){
				this.opts[key] = _args1[key];
			} else{
				this.opts[key] = defalut[key];
			}
		}

		var startX = 0;
		var startY = 0;
		document.addEventListener('touchstart', function(event){
			startX = event.touches[0].pageX;
			startY = event.touches[0].pageY;
		});

		var self = this;
		document.addEventListener('touchmove', function(event){
			if(startX - event.touches[0].pageX < 0){
				self.toRight();
			} else {
				self.toLeft();
			}

			if(startY - event.touches[0].pageY < 0 ){
				self.toBottom();
			} else {
				self.toUp();
			}
		});

		document.addEventListener('touchend', function(event){

		})
	}

	DKTouch.prototype.toLeft = function(){
		if(typeof this.opts.toLeft == 'function'){
			this.opts.toLeft();
		}
	}
	DKTouch.prototype.toRight = function(_callback){
		if(typeof this.opts.toRight == 'function'){
			this.opts.toRight();
		}
	}
	DKTouch.prototype.toBottom = function(_callback){
		if(typeof this.opts.toBottom == 'function'){
			this.opts.toBottom();
		}
	}
	DKTouch.prototype.toUp = function(_callback){
		if(typeof this.opts.toUp == 'function'){
			this.opts.toUp();
		}
	}	
