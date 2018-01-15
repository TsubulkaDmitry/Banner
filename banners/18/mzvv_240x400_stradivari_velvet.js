(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.back111 = function() {
	this.initialize(img.back111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,484);


(lib.l4 = function() {
	this.initialize(img.l4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,91);


(lib.l6 = function() {
	this.initialize(img.l6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,148);


(lib.Layer2 = function() {
	this.initialize(img.Layer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,43);


(lib.Layer3 = function() {
	this.initialize(img.Layer3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,55);


(lib.Layer4 = function() {
	this.initialize(img.Layer4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,55);


(lib.Layer5 = function() {
	this.initialize(img.Layer5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,48);


(lib.Layer6 = function() {
	this.initialize(img.Layer6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,55);


(lib.Layer7 = function() {
	this.initialize(img.Layer7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,52);


(lib.logo1 = function() {
	this.initialize(img.logo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,58);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,151);


(lib.shad = function() {
	this.initialize(img.shad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,185);


(lib.skripka = function() {
	this.initialize(img.skripka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,311);


(lib.smyk = function() {
	this.initialize(img.smyk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,282,113);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer7();
	this.instance.parent = this;
	this.instance.setTransform(-19.5,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-26,39,52);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer6();
	this.instance.parent = this;
	this.instance.setTransform(-17.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-27.5,35,55);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer5();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-24,31,48);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer4();
	this.instance.parent = this;
	this.instance.setTransform(-17,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-27.5,34,55);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer3();
	this.instance.parent = this;
	this.instance.setTransform(-19,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-27.5,38,55);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer2();
	this.instance.parent = this;
	this.instance.setTransform(-16,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-21.5,32,43);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.smyk();
	this.instance.parent = this;
	this.instance.setTransform(-141,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-56.5,282,113);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo1();
	this.instance.parent = this;
	this.instance.setTransform(-74.5,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-29,149,58);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFAzIAAgDIACAAQAGAAACgCQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIgBgDIgCgFIgFgNIgiAAIgFAKQgCAFAAADQAAAEAEACIAJACIAAADIghAAIAAgDQAGgBADgDQAEgEAFgLIAihPIACAAIAjBRQAGALADADQACADAFAAIAAADgAgXARIAdAAIgOghg");
	this.shape.setTransform(44.2,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASAyIgTgmIgFgIIgHgBIAAAhQAAAIADACQADACAHAAIAAACIgzAAIAAgCQAJgBADgCQACgCAAgIIAAhCQAAgIgCgDQgCgDgIAAIgCAAIAAgDIAzAAIAAADIgBAAQgHAAgCACQgDADAAAHIAAAeQAKAAADgBQADAAACgEQADgDACgJIAGgRQACgGAFgDQAFgDAHAAQAHAAAEAEQAEAEAAAGQAAAEgCADQgDACgEAAQgJAAAAgJQgBgFgDAAQgDAAgCAEQgDADgDAKIgEAOQgCAFgDADQAEABADABIAEAFIAJAQIAKASQADAEADACQADACAFAAIAAACg");
	this.shape_1.setTransform(33,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADAyIAAgDIADAAQAHAAACgDQADgCAAgJIAAg1IgiA2QgBAHACADQACADAHAAIAEAAIAAADIg1AAIAAgDIADAAQAHAAADgDQABgCAAgJIAAhBQAAgJgBgCQgCgDgIAAIgDAAIAAgDIA1AAIAAADIgEAAQgGAAgDADQgBADAAAIIAAA2IAig2QAAgIgDgDQgCgDgHAAIgDAAIAAgDIA1AAIAAADIgDAAQgIAAgBADQgDACAAAJIAABBQAAAJADACQACADAHAAIADAAIAAADg");
	this.shape_2.setTransform(21.4,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAuQgLgHgIgMQgGgMAAgNQAAgNAHgNQAIgNAMgHQANgHANAAQALAAAMAEIAIADQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCABgDIACAAIAAAjIgCAAQgEgOgJgIQgIgGgLgBQgKAAgHAGQgHAFgEAJQgFALAAANQAAANAEALQADAKAHAHQAHAFALAAQAJAAAIgEQAIgFAJgKIAAAJQgJAJgJAEQgJAEgMAAQgPAAgNgGg");
	this.shape_3.setTransform(9.6,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAuQgLgHgIgMQgGgMAAgNQAAgNAHgNQAIgNAMgHQANgHANAAQALAAAMAEIAIADQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCABgDIACAAIAAAjIgCAAQgEgOgJgIQgIgGgMgBQgJAAgHAGQgHAFgEAJQgFALAAANQAAANAEALQADAKAHAHQAHAFALAAQAJAAAIgEQAIgFAJgKIAAAJQgJAJgJAEQgJAEgMAAQgPAAgNgGg");
	this.shape_4.setTransform(-1.7,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAFAzIAAgDIACAAQAGAAACgCQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIgBgDIgCgFIgFgNIgiAAIgFAKQgCAFAAADQAAAEAEACIAJACIAAADIghAAIAAgDQAGgBADgDQAEgEAFgLIAihPIACAAIAjBRQAGALADADQACADAFAAIAAADgAgXARIAdAAIgOghg");
	this.shape_5.setTransform(-12.9,19.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwAvQgEgEgBgGQAAgEADgDQACgDAFAAQAIAAABAKQABAFADAAQAFAAAEgGQAFgGADgLQABgLAAgUIAAgSIgBgLQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBgBAAQgDgBgHAAIAAgDIBQAAIAAADQgIAAgDACQgBADAAAHIAABEQAAAIABACQADACAIABIAAACIgxAAIAAgCIAIgBIADgEIABgIIAAhNIgWAAIAAAeIgCAbQgBAKgDAJQgEAJgHAEQgGAEgJAAQgGAAgEgDg");
	this.shape_6.setTransform(-24.4,19.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASAyIgTgmIgFgIIgHgBIAAAhQAAAIADACQADACAHAAIAAACIgzAAIAAgCQAJgBADgCQACgCAAgIIAAhCQAAgIgCgDQgCgDgIAAIgCAAIAAgDIAzAAIAAADIgBAAQgHAAgCACQgDADAAAHIAAAeQAKAAADgBQADAAACgEQADgDACgJIAGgRQACgGAFgDQAFgDAHAAQAHAAAEAEQAEAEAAAGQAAAEgCADQgDACgEAAQgJAAAAgJQgBgFgDAAQgDAAgCAEQgDADgDAKIgEAOQgCAFgDADQAEABADABIAEAFIAJAQIAKASQADAEADACQADACAFAAIAAACg");
	this.shape_7.setTransform(-35.7,19.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AADAyIAAgDQAGAAADgBQABAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBQABgCAAgIIAAgcIgHAAIgfAuIgfAAIAAgDQAEAAADgCIAHgJIAXghQgJgCgFgEQgIgHAAgLQAAgJAFgHQAGgHAIgCQAIgDASAAIAuAAIAAADIgJABIgEAEQgBACAAAIIAAA/QAAAIABACIAEAEQABABAIAAIAAADgAgHgmQgFAGgBALQAAAIADAFQADAFAFABQAEACAKAAIAFAAIAAgrIgIAAQgLAAgFAFg");
	this.shape_8.setTransform(24.7,4.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAFAzIAAgDIACAAQAGAAACgCQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIgBgDIgCgFIgFgNIgiAAIgFAKQgCAFAAADQAAAEAEACIAJACIAAADIghAAIAAgDQAGgBADgDQAEgEAFgLIAihPIACAAIAjBRQAGALADADQACADAFAAIAAADgAgXARIAdAAIgOghg");
	this.shape_9.setTransform(13.7,4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AADAyIAAgDIAEAAQAEAAADgBIADgEIABgJIAAgfIgiAAIAAAfQAAAHAAACQABABAAAAQAAABAAAAQABABAAAAQABAAAAABQADABAEAAIADAAIAAADIgzAAIAAgDIADAAQAEAAADgBIADgEIAAgJIAAhBIAAgJIgDgDQgDgCgEAAIgDAAIAAgDIAzAAIAAADIgDAAQgEAAgDACQAAAAAAAAQgBABAAAAQgBABAAAAQAAABgBAAQAAACAAAHIAAAdIAiAAIAAgdIgBgJIgEgDQgCgCgEAAIgEAAIAAgDIA1AAIAAADIgEAAQgEAAgCACQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAAAQgCACAAAHIAABBQAAAHACACQAAABAAAAQAAABABAAQAAABAAAAQABAAABABQACABAEAAIAEAAIAAADg");
	this.shape_10.setTransform(2.1,4.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAvBAQAAgNgJgIQgIgIgPAAIgaAAQgQAAgJAIQgJAHgCAOIgCAAIAAgfQASgEAIgVQAHgUAAgjQAAgIgCgDQgDgCgKAAIAAgDIBRAAIAAADQgJAAgCACQgDADAAAIIAABBIABAJQABACADACQADACAGAAIAAAfgAgJgwQAAASgDARQgCAQgEAJQgEAKgHAHIAiAAQAHAAACgBQABgBAAgGIAAhOIgYAAg");
	this.shape_11.setTransform(-9.4,5.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgoAhQgMgOAAgTQAAgWAPgPQAPgOAWABQAXgBAPAOQAPAPAAAWQAAASgLAOQgPAUgbAAQgaAAgOgTgAgUggQgFAMAAAUQAAAZAIANQAHAIAKAAQAHAAAGgEQAGgEAEgLQADgKAAgQQAAgTgEgKQgDgKgGgEQgGgEgHAAQgNAAgHAOg");
	this.shape_12.setTransform(-20.6,4.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQAyIAAgDIADAAQAEAAADgBIADgEQABgCAAgHIAAhJIglBaIgCAAIgmhZIAABFIAAAJQABADADADQADACAHAAIAAADIgiAAIAAgDIABAAIAGgBIAEgDIADgFIAAgIIAAg+QAAgHgBgCIgDgDQgDgCgEAAIgDAAIAAgDIAoAAIAbBBIAbhBIApAAIAAADIgEAAQgEAAgCACIgEADIAAAJIAABBIAAAJIAEAEQACABAEAAIAEAAIAAADg");
	this.shape_13.setTransform(-33.9,4.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAIAaQgDgDAAgHIgCgGIgDgGIgCAGIgBAGQgBAHgDADQgCACgDAAQgDAAgDgCQgCgCAAgDQAAgDACgCIAGgFIAGgEIAFgEIgIAAIgEAAIgGAAQgEAAgDgCQgCgCAAgDQAAgDACgCQACgCAEAAQAEAAAFAEIAFAGIAFACIAAgGIgDgHQgDgEAAgDQAAgDADgDQACgCACAAQADAAADACQACACAAAEQAAADgCAEIgDAHIgCAGIAGgCIAGgFQAEgFAFAAQADAAACACQACACAAADQAAADgDACQgCACgFAAIgFAAIgEAAIgIAAIAFAFIAGAEQAFACABACQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAADgDACQgCACgCAAQgDAAgDgCg");
	this.shape_14.setTransform(-45.2,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CD3E49").s().p("AAFAzIAAgDIACAAQAGAAACgCQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIgBgDIgCgFIgFgNIgiAAIgFAKQgCAFAAADQAAAEAEACIAJACIAAADIghAAIAAgDQAGgBADgDQAEgEAFgLIAihPIACAAIAjBRQAGALADADQACADAFAAIAAADgAgXARIAdAAIgOghg");
	this.shape_15.setTransform(45.8,20.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CD3E49").s().p("AASAyIgTgmIgFgIIgHgBIAAAhQAAAIADACQADACAHAAIAAACIgzAAIAAgCQAJgBADgCQACgCAAgIIAAhCQAAgIgCgDQgCgDgIAAIgCAAIAAgDIAzAAIAAADIgBAAQgHAAgCACQgDADAAAHIAAAeQAKAAADgBQADAAACgEQADgDACgJIAGgRQACgGAFgDQAFgDAHAAQAHAAAEAEQAEAEAAAGQAAAEgCADQgDACgEAAQgJAAAAgJQgBgFgDAAQgDAAgCAEQgDADgDAKIgEAOQgCAFgDADQAEABADABIAEAFIAJAQIAKASQADAEADACQADACAFAAIAAACg");
	this.shape_16.setTransform(34.6,20.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CD3E49").s().p("AADAyIAAgDIADAAQAHAAACgDQACgCAAgJIAAg1IghA2QAAAHABADQACADAIAAIADAAIAAADIg1AAIAAgDIADAAQAHAAADgDQACgCAAgJIAAhBQAAgJgCgCQgCgDgIAAIgDAAIAAgDIA1AAIAAADIgDAAQgHAAgCADQgCADAAAIIAAA2IAhg2QAAgIgCgDQgCgDgHAAIgDAAIAAgDIA1AAIAAADIgEAAQgHAAgCADQgCACAAAJIAABBQAAAJACACQADADAGAAIAEAAIAAADg");
	this.shape_17.setTransform(23,20.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CD3E49").s().p("AgVAtQgMgGgGgMQgHgMAAgNQAAgNAHgNQAIgNAMgHQANgHANAAQALAAAMAEIAIADQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCAAgDIADAAIAAAiIgDAAQgDgNgJgIQgJgGgKgBQgKAAgGAGQgJAFgDAJQgEALgBANQAAANADALQAEAKAHAHQAHAFALAAQAJAAAIgEQAIgEAIgLIAAAJQgIAJgJAEQgJAEgMAAQgPAAgNgHg");
	this.shape_18.setTransform(11.2,20.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CD3E49").s().p("AgVAtQgMgGgGgMQgHgMAAgNQAAgNAHgNQAIgNAMgHQANgHANAAQALAAAMAEIAIADQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCAAgDIADAAIAAAiIgDAAQgDgNgJgIQgIgGgLgBQgKAAgGAGQgJAFgDAJQgEALgBANQAAANADALQAEAKAHAHQAHAFALAAQAJAAAIgEQAIgEAIgLIAAAJQgIAJgJAEQgJAEgMAAQgPAAgNgHg");
	this.shape_19.setTransform(-0.1,20.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CD3E49").s().p("AAFAzIAAgDIACAAQAGAAACgCQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAgBIgBgDIgCgFIgFgNIgiAAIgFAKQgCAFAAADQAAAEAEACIAJACIAAADIghAAIAAgDQAGgBADgDQAEgEAFgLIAihPIACAAIAjBRQAGALADADQACADAFAAIAAADgAgXARIAdAAIgOghg");
	this.shape_20.setTransform(-11.3,20.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CD3E49").s().p("AgwAvQgFgEAAgGQABgEACgDQACgDAFAAQAIAAABAKQAAAFAEAAQAEAAAGgGQAEgGADgLQABgLAAgUIAAgSIgBgLQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBgBAAQgDgBgHAAIAAgDIBQAAIAAADQgIAAgCACQgCADAAAHIAABEQAAAIACACQACACAIABIAAACIgxAAIAAgCIAIgBIAEgEIAAgIIAAhNIgXAAIAAAeIgBAbQgBAKgDAJQgFAJgGAEQgHAEgHAAQgIAAgDgDg");
	this.shape_21.setTransform(-22.8,20.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CD3E49").s().p("AASAyIgTgmIgFgIIgHgBIAAAhQAAAIADACQADACAHAAIAAACIgzAAIAAgCQAJgBADgCQACgCAAgIIAAhCQAAgIgCgDQgCgDgIAAIgCAAIAAgDIAzAAIAAADIgBAAQgHAAgCACQgDADAAAHIAAAeQAKAAADgBQADAAACgEQADgDACgJIAGgRQACgGAFgDQAFgDAHAAQAHAAAEAEQAEAEAAAGQAAAEgCADQgDACgEAAQgJAAAAgJQgBgFgDAAQgDAAgCAEQgDADgDAKIgEAOQgCAFgDADQAEABADABIAEAFIAJAQIAKASQADAEADACQADACAFAAIAAACg");
	this.shape_22.setTransform(-34.1,20.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CD3E49").s().p("AADAyIAAgDQAGAAADgBQABAAAAgBQABAAAAgBQABAAAAgBQAAAAAAgBQACgCAAgIIAAgcIgHAAIgfAuIgfAAIAAgDQADAAAEgCIAGgJIAYghQgJgCgFgEQgIgHAAgLQAAgJAFgHQAFgHAJgCQAIgDASAAIAuAAIAAADIgJABIgEAEQgBACAAAIIAAA/QAAAIABACIAEAEQABABAIAAIAAADgAgHgmQgGAGAAALQABAIACAFQADAFAFABQAEACAKAAIAFAAIAAgrIgIAAQgLAAgFAFg");
	this.shape_23.setTransform(26.3,4.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CD3E49").s().p("AAFAzIAAgDIACAAQAGAAACgCQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAgBIgBgDIgCgFIgFgNIgiAAIgFAKQgCAFAAADQAAAEAEACIAJACIAAADIghAAIAAgDQAGgBADgDQAEgEAFgLIAihPIACAAIAjBRQAGALADADQACADAFAAIAAADgAgXARIAdAAIgOghg");
	this.shape_24.setTransform(15.3,4.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CD3E49").s().p("AADAyIAAgDIAEAAQAEAAADgBIADgEIABgJIAAgfIgiAAIAAAfQAAAHABACQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQADABAFAAIACAAIAAADIg0AAIAAgDIAEAAQAFAAACgBIADgEIAAgJIAAhBIAAgJIgDgDQgDgCgEAAIgEAAIAAgDIA0AAIAAADIgCAAQgFAAgDACQAAAAAAAAQgBABAAAAQgBABAAAAQAAABAAAAQgBACAAAHIAAAdIAiAAIAAgdIgBgJIgEgDQgCgCgEAAIgEAAIAAgDIA1AAIAAADIgEAAQgEAAgCACQgBAAAAAAQgBABAAAAQgBABAAAAQAAABgBAAQgBACAAAHIAABBQAAAHABACQABABAAAAQAAABAAAAQABABAAAAQABAAABABQACABAEAAIAEAAIAAADg");
	this.shape_25.setTransform(3.7,4.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CD3E49").s().p("AAvBAQAAgNgJgIQgIgIgPAAIgaAAQgQAAgJAIQgJAHgCAOIgCAAIAAgfQASgEAIgVQAHgUAAgjQAAgIgCgDQgDgCgKAAIAAgDIBRAAIAAADQgJAAgCACQgDADAAAIIAABBIABAJQABACADACQADACAGAAIAAAfgAgJgwQAAASgDARQgCAQgEAJQgEAKgHAHIAiAAQAHAAACgBQABgBAAgGIAAhOIgYAAg");
	this.shape_26.setTransform(-7.8,6.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CD3E49").s().p("AgoAhQgMgOAAgTQAAgWAPgPQAPgOAWABQAXgBAPAOQAPAPAAAWQAAASgLAOQgPAUgbAAQgaAAgOgTgAgUggQgFAMAAAUQAAAZAIANQAHAIAKAAQAHAAAGgEQAGgEAEgLQADgKAAgQQAAgTgEgKQgDgKgGgEQgGgEgHAAQgNAAgHAOg");
	this.shape_27.setTransform(-19,5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CD3E49").s().p("AAQAyIAAgDIADAAQAFAAACgBIADgEQABgCAAgHIAAhJIglBaIgCAAIgmhZIAABFIAAAJQABADADADQADACAHAAIAAADIgiAAIAAgDIABAAIAGgBIAFgDIACgFIAAgIIAAg+QAAgHgBgCIgDgDQgCgCgFAAIgDAAIAAgDIAoAAIAbBBIAbhBIApAAIAAADIgEAAQgDAAgEACIgDADIAAAJIAABBIAAAJIAEAEQACABAEAAIAEAAIAAADg");
	this.shape_28.setTransform(-32.3,4.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CD3E49").s().p("AAIAaQgCgDgBgHIgCgGIgDgGIgCAGIgBAGQgCAHgCADQgDACgCAAQgEAAgCgCQgCgCAAgDQAAgDACgCIAGgFIAGgEIAFgEIgIAAIgEAAIgFAAQgFAAgDgCQgCgCAAgDQAAgDACgCQACgCAEAAQAEAAAFAEIAFAGIAGACIgBgGIgDgHQgCgEgBgDQABgDACgDQACgCACAAQADAAADACQACACAAAEQAAADgCAEIgEAHIgBAGIAHgCIAEgFQAGgFADAAQAEAAACACQACACAAADQAAADgDACQgCACgFAAIgFAAIgEAAIgIAAIAFAFIAGAEQAEACACACQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAADgDACQgBACgDAAQgDAAgDgCg");
	this.shape_29.setTransform(-43.6,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.9,-6.2,104.9,37.1);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.logo, null, new cjs.Matrix2D(0.451,0,0,0.451,-50.3,-34.2)).s().p("Ak0FRQgwgNgqgvQhFhNgViJQgbjIAphrQASgrAhAGQAUAKATgGIAGgCQCLg6AiAGQArAHAWAZQBCgEBLAFQA5gHBGACQAcglBFADQAtgCB2AyQAkgTAZASQAhAgARCGQAFB8gNBZQgYB5hHBIQglApgzACQg6ADhOg4Qhhg3huAQQggABhEAmIhnA3QgZALgeAAIgPgBg");
	this.shape.setTransform(0.2,110.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.skripka, null, new cjs.Matrix2D(1,0,0,1,-56.7,-154.3)).s().p("AghX8QiugFhjgcQjIhvglijQghjJBii2QAOgvgLghIgHgQQgCgDAAgEQAAgIAKgIQAJgHAGAAIAuAOQBGgJAdheQA3i/gkhXQgehIg9AOIgCAAIgKACQgIAAgFgIQgFgGAAgJQAAgLAFgDIABAAIAEgBQAUgZgIgnQhWjtBti9QB6iTC2gCIARqzIgBgMIAAgFIgDgYIABgIQAAgRAFgbIACgIIAAgDQAAghABgPQgSgMgDAAIgLADQgkAAgBALQAAAKgXAAQgKAAgNgFQgOgFgFgGQgFgGgOgFQgLgDAAgJQAAgGAJgCIANAAQAFAAACgHIAEgKQALgNAIgDIAYAAIATAAQAGACAAAKIgCAFQgBAEAAACIBDACQAAgOANgKQAEgDAAgZIABgZQABgQgGgCQgQgBAFghQgZgBgGgCQgNgFAAgSQAAgSADgEQAEgFATABQAMABAFgNQAFgOAGgCQAQgEADgJQABgGgBgQQABgTAfAAQAWAAAGAEQAHAFAAASIgBAMIgCAJQAAAEAJADIANADQAGAAAAAGQABAJABACQACAEAQADQAOADAAAJQAAALgGASQgCAJgGADQgEACgJABQgHABgDAFIgEAOQgBAEgKAEQgIADgHACIgBACQAMAPgBAvQAKgCAKgBQAUABAMgCIAfgFIAYgFQARAAANANQANANAWAAQAAAHgGACIgOgBQgGAAgDAFQgDAFgGABIgXAEIgaADQgEAAgBgEIgBgJIg9gBIgCASIgCATIgBASQAAAYAJAFQAGADAfAAIAWgBQAFAAAAgHIABgIQAOgXANAAQAUAAANANQAOAPgFATIAVAAQACAAACAGIADAIQgRgDgHAIQgFAFgFARQgDALgUADIgXAAQgIAAgBgLQAAgPgHgFQgHgGgRABIgTACIggACIAAAoIAAARIABAXQAAADgCACIAWKrQDLAWBcCGQB/CkhhDlQgRBCAWAZIAEACQANAFAAACQAAAJgJALQgJALgHAAIgKgBQg2gTgkA1QgiCJAkCbQAsB4BegOIAIgCIAPgFQAIAAAJAIQAKAJAAAKQAAAJgCAHIgEAMIgCAFQgLAYAIA7QA9BwAACFQAFCuhaBxQiGCCitALQhAACg6AAIhHgCg");
	this.shape_1.setTransform(-0.6,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-155.5,114,311);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shad();
	this.instance.parent = this;
	this.instance.setTransform(-137,-92.5,1.142,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137,-92.5,274,185);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.logo, null, new cjs.Matrix2D(1,0,0,1,-111.6,-75.7)).s().p("AqsLrQhqgdhehnQiZirgukvQg8m9BcjuQAohfBJAOQArAWAsgPIAMgDQE1iABKAMQBgAQAwA4QCTgJCoAKQB+gOCbAEQA+hTCYAIQBkgFEGBvQBPgqA3AnQBKBHAlEpQALEUgbDGQg2ELieCfQhSBchxAEQh/AIivh+QjVh6j3AjQhGAEiXBTIjjB7Qg4AYhCAAIgigCg");
	this.shape.setTransform(0.3,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.5,-75.5,223,151);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.back111();
	this.instance.parent = this;
	this.instance.setTransform(-285.9,-346,1.43,1.43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-285.9,-346,571.9,692);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.l6();
	this.instance.parent = this;
	this.instance.setTransform(-128,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-74,256,148);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.l4();
	this.instance.parent = this;
	this.instance.setTransform(-31,-45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-45.5,62,91);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A44F/IAAr8MAxxAAAIAAL8g");
	this.shape.setTransform(159.3,38.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,318.6,76.5), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,-18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(0,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-32.5,230,65);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(8,31,1,1,0,0,0,-120,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:3.7},83,cjs.Ease.get(1)).to({rotation:0},72,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256,148);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(53,6.5,1,1,0,0,0,22,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:22.1,rotation:5.9,x:53.2},61,cjs.Ease.get(1)).to({regX:22,rotation:0,x:53},55,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,91);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// l4
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(241,103.6,1,1,-15.7,0,0,31.1,45.6);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88.6,167.5,1,1,-47.4,0,0,31,45.6);

	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(324,366.5,1,1,0,0,0,31,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// l6
	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(284.8,504,1,1,0,-13.6,166.4,128,74);

	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(394,127,1,1,0,-13.6,166.4,128,74);

	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(60,439,1,1,0,90,-90,128,74);

	this.instance_6 = new lib.Symbol4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(191,74,1,1,0,0,0,128,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-14,0,549.8,605.9), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// back
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(212,292,1.22,1.22);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},146,cjs.Ease.get(1)).to({scaleX:0.76,scaleY:0.76,y:336},24,cjs.Ease.get(1)).wait(79).to({startPosition:0},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:320.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:305.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:292.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:279.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:269.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,y:259.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:252},0).wait(1).to({y:245.4},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:239.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:235.2},0).wait(1).to({x:212.1,y:231.4},0).wait(1).to({y:228.2},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:225.5},0).wait(1).to({y:223.3},0).wait(1).to({y:221.5},0).wait(1).to({y:220},0).wait(1).to({y:218.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:217.9},0).wait(1).to({y:217.2},0).wait(1).to({y:216.7},0).wait(1).to({y:216.4},0).wait(1).to({y:216.2},0).wait(1).to({regX:0.1,regY:0.2},0).wait(283));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.8,-129.9,697.5,844);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// leaves
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(200,241.8,1.816,1.816,0,0,0,200,241.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:242,scaleX:1,scaleY:1,y:242},26,cjs.Ease.get(1)).wait(223).to({alpha:0},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.6,-197.5,998.4,1100.3);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(442.5,170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.5,regY:12.4,x:404.2,y:182.4},0).wait(1).to({x:373.3},0).wait(1).to({x:349.9},0).wait(1).to({x:332.2},0).wait(1).to({x:318.5},0).wait(1).to({x:307.7},0).wait(1).to({x:299.1},0).wait(1).to({x:292.3},0).wait(1).to({x:286.7},0).wait(1).to({x:282.2},0).wait(1).to({x:278.5},0).wait(1).to({x:275.6},0).wait(1).to({x:273.2},0).wait(1).to({x:271.3},0).wait(1).to({x:269.8},0).wait(1).to({x:268.7},0).wait(1).to({x:267.9},0).wait(1).to({x:267.3},0).wait(1).to({regX:0,regY:0,x:265.5,y:170},0).wait(51));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_25 = new cjs.Graphics().p("AkNEgQjBAAiJiIQiIiJAAjAIAAhuIW/AAIAAI/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_graphics_25,x:248.9,y:132.7}).wait(45));

	// Layer 10
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(163.9,69.4,1.324,1,-15.2,0,0,159.3,38.3);
	this.instance_1.alpha = 0.672;
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(68, 68, 1)];
	this.instance_1.cache(-2,-2,323,81);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({x:303.3,y:196.1,alpha:0.391},41,cjs.Ease.get(1)).wait(4));

	// logo
	this.instance_2 = new lib.Tween8("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(426.5,133);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:386.7},0).wait(1).to({x:355.8},0).wait(1).to({x:332.4},0).wait(1).to({x:314.7},0).wait(1).to({x:301},0).wait(1).to({x:290.2},0).wait(1).to({x:281.6},0).wait(1).to({x:274.8},0).wait(1).to({x:269.2},0).wait(1).to({x:264.7},0).wait(1).to({x:261},0).wait(1).to({x:258.1},0).wait(1).to({x:255.7},0).wait(1).to({x:253.8},0).wait(1).to({x:252.3},0).wait(1).to({x:251.2},0).wait(1).to({x:250.4},0).wait(1).to({x:249.8},0).wait(1).to({x:249.5},0).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(352,104,149,96.8);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(193,254.5,0.437,0.437);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:50.1,y:130.5},100,cjs.Ease.get(-1)).to({_off:true},1).wait(46));

	// Layer 3
	this.instance_1 = new lib.Tween11("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(230,268.5,0.355,0.355);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,x:372,y:200.5},100,cjs.Ease.get(-1)).to({_off:true},1).wait(37));

	// Layer 4
	this.instance_2 = new lib.Tween12("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(192,318.5,0.285,0.285);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({scaleX:1,scaleY:1,x:29.1,y:233.5},100,cjs.Ease.get(-1)).to({_off:true},1).wait(28));

	// Layer 5
	this.instance_3 = new lib.Tween13("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(202.4,205.9,0.358,0.358);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:61.6,y:186.7},100,cjs.Ease.get(-1)).to({_off:true},1).wait(20));

	// Layer 6
	this.instance_4 = new lib.Tween14("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(176.5,360.5,0.254,0.254);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({_off:false},0).to({scaleX:1,scaleY:1,x:55.6,y:390},100,cjs.Ease.get(-1)).to({_off:true},1).wait(11));

	// Layer 7
	this.instance_5 = new lib.Tween15("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(228.5,349,0.354,0.354);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(46).to({_off:false},0).to({scaleX:1,scaleY:1,x:389.8,y:347},100,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(186,245.1,14,18.8);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// smyk
	this.instance = new lib.Tween9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-213.8,327.6,1,1,-14,0,0,-124,-45.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122).to({_off:false},0).to({rotation:-30.4,x:91.1,y:335.6},58,cjs.Ease.get(1)).to({regX:-123.9,regY:-45.8,rotation:-3.5,x:-23.9,y:259.4},48,cjs.Ease.get(1)).to({regX:-124,regY:-45.9,rotation:-35.4,x:71.1,y:355.6},50,cjs.Ease.get(1)).to({regX:-123.9,regY:-46,rotation:-20.5,x:-225.9,y:391.2},38,cjs.Ease.get(1)).wait(93));

	// Слой 2
	this.instance_1 = new lib.Символ2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(11,32);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).wait(229));

	// skripka
	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(205,286.5,0.141,0.141);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.2,regY:0.1,scaleX:0.57,scaleY:0.57,rotation:0.5,x:195.3,y:295.2},24,cjs.Ease.get(-1)).to({regX:0.1,scaleX:0.9,scaleY:0.9,rotation:-8,x:195.2,y:294.9},79,cjs.Ease.get(1)).to({rotation:0.5,x:204.2,y:273.9},25,cjs.Ease.get(1)).wait(281));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(197.1,264.7,15.6,43.3);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-3.6,-16.9,1,1,32.7);

	this.instance_1 = new lib.Tween11("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-44.5,-6.5);

	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-85.4,8.6,1,1,-15.7,0,0,31.1,45.6);

	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(36.8,0.1,0.642,0.642,0,-13.6,166.4,128,74.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.6,-65.4,255.4,130.9);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.Tween16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(217.7,355,1.535,1.535);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-1.2,regY:4.4,scaleX:1.51,scaleY:1.51,x:215.9,y:361.6,alpha:0.047},0).wait(1).to({scaleX:1.49,scaleY:1.49,y:361.5,alpha:0.094},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:216,y:361.4,alpha:0.14},0).wait(1).to({scaleX:1.45,scaleY:1.45,y:361.3,alpha:0.187},0).wait(1).to({scaleX:1.43,scaleY:1.43,y:361.2,alpha:0.232},0).wait(1).to({scaleX:1.41,scaleY:1.41,alpha:0.278},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:216.1,y:361.1,alpha:0.323},0).wait(1).to({scaleX:1.36,scaleY:1.36,y:361,alpha:0.368},0).wait(1).to({scaleX:1.34,scaleY:1.34,y:360.9,alpha:0.412},0).wait(1).to({scaleX:1.32,scaleY:1.32,y:360.8,alpha:0.456},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:216.2,y:360.7,alpha:0.5},0).wait(1).to({scaleX:1.28,scaleY:1.28,y:360.6,alpha:0.543},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:360.5,alpha:0.586},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:360.4,alpha:0.629},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:216.3,y:360.3,alpha:0.672},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.714},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:360.2,alpha:0.756},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:360.1,alpha:0.797},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:216.4,y:360,alpha:0.838},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:359.9,alpha:0.879},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:359.8,alpha:0.92},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:216.5,y:359.7,alpha:0.96},0).wait(1).to({regX:0,regY:0,scaleX:1.07,scaleY:1.07,x:217.7,y:355,alpha:1},0).wait(103).to({startPosition:0},0).to({scaleX:0.34,scaleY:0.34,x:197.8,y:365,alpha:0},24).wait(385));

	// Layer 50 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("AqVL3QABgBgogMQgogNABgBQABgCg7gnQg8goABgBQABgCgkgpQgkgqABgBQABgCgog+Qgog/ABgCQABgBgehkQgfhkABgCQABgBgUhiQgVhiABgCQABgBgIhtQgJhuABgBQABgCAFhUQAFhVABgBQACgDAhiGQACgDAdhTIAjgjQABgBAgABQAgACABgCQABgBAZADQAYAEABgCQABgBAXgBQAWAAABgCQABgBBZgmQBYglABgCQABgBBIgSQBHgSABgCQABgBAmABQAmACABgCQABgBAaAJQAbAJABgBQABgCASAOQATANABgCQABgBAMAPQANAPABgBQABgCEmgCQEkgDABgBQABgCAugZQAugaABgCQABgBAggMQAggNABgBQABgCAjAEQAiADABgBQABgCAiAKQAiAJABgCQABgBAwAPQAvAPABgBQABgCBRAjQBRAjABgCQABgBAXAFQAWAFABgBQABgCAXgMQAWgMABgBQABgCAXAEQAWADABgCQABgBAaAfQAbAeABgBQABgCAYBIQAYBIABgCQABgBARBXQAQBYABgCQABgBABBTQABBUABgCQABgBgDBfQgDBeABgBIgPBOIgQBOIgTBGIgUBGIhCB5Ig/BpQhEBCACgDQABgCgqAbIgpAaQABgCguARQguARABgBQABgCgtAAQgugBABgBQABgCg0gTQg0gUABgCQABgBg9gkQg+gkABgBQABgChFgbQhGgcABgCQABgBgmgKQgmgLABgBQABgCgxgEQgygEABgCQABgBgwgBQgvAAABgCQABgBgsAHQgsAHABgBQABgCgxAUQgyATABgCQABgBhPAqQhQArABgCIguAgIgvAfQABgCgsAZQgsAZABgCQABgBg2AHQgtAHgHAAIgBgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:201.4,y:286.6}).wait(476));

	// Layer 51
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(163.9,144.8,1.324,1,-15.2,0,0,159.3,38.3);
	this.instance_1.alpha = 0.391;
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.BlurFilter(68, 68, 1)];
	this.instance_1.cache(-2,-2,323,81);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({x:331.7,y:424.7},53,cjs.Ease.get(1)).wait(423));

	// logo
	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(201.5,286.7,2.192,2.192,0,0,0,0,0.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0.3,regY:0.4,scaleX:2.01,scaleY:2.01,x:202.1,y:287.3,alpha:0.152},0).wait(1).to({scaleX:1.85,scaleY:1.85,y:287.2,alpha:0.287},0).wait(1).to({scaleX:1.71,scaleY:1.71,x:202,alpha:0.405},0).wait(1).to({scaleX:1.59,scaleY:1.59,y:287.1,alpha:0.505},0).wait(1).to({scaleX:1.49,scaleY:1.49,y:287,alpha:0.59},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:201.9,alpha:0.661},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.721},0).wait(1).to({scaleX:1.27,scaleY:1.27,y:286.9,alpha:0.771},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.813},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.848},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.878},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.903},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.924},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:201.8,alpha:0.941},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:286.8,alpha:0.956},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.968},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.977},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.985},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.991},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.995},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.999},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:201.5,y:286.5,alpha:1},0).to({startPosition:0},103).to({regX:0.8,regY:0.6,scaleX:0.26,scaleY:0.26,rotation:0.8,x:194.9,y:359.5},24,cjs.Ease.get(-1)).to({regY:0.7,scaleX:0.29,scaleY:0.29,rotation:-0.3,x:197,y:364.6,alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(378));

	// shad
	this.instance_3 = new lib.Tween5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(201,305.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({alpha:1},20).to({startPosition:0},95).to({regX:0.7,regY:0.6,scaleX:0.24,scaleY:0.24,rotation:0.8,x:194.7,y:364.3,alpha:0},24,cjs.Ease.get(-1)).to({_off:true},1).wait(384));

	// violin
	this.instance_4 = new lib.Символ1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2.8,-4.8,1.015,1.014,0,0,0,0.2,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(126).to({_off:false},0).wait(409));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.7,123.3,485.7,332.2);


// stage content:
(lib.mzvv_240x400_stradivari_velvet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EgcbAvCIAAn0I0UAAMAAAhRjIRMAAIAAksMBQTAAAIAAQGIjwAAMAAAA+LIC+AAIAAPygAo5fQMAlLAAAMAAAg+LMglLAAAg");
	this.shape.setTransform(58,199);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(500));

	// blank
	this.instance = new lib.Символ6("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-90.9,-81.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(489).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(-1)).wait(1));

	// red_rulers
	this.instance_1 = new lib.Символ9("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.2,362.8,1,1.077,0,0,0,0,0.1);
	this.instance_1.alpha = 0.801;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AyvF8IAAr3MAlfAAAIAAL3g");
	this.shape_1.setTransform(120,362.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1}]}).wait(500));

	// pl_txt
	this.instance_2 = new lib.Символ3("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-81.4,-78.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(249).to({_off:false},0).wait(251));

	// leaves
	this.instance_3 = new lib.Символ4("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-74.9,-102.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(500));

	// logo
	this.instance_4 = new lib.Символ5("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-80.9,-105.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).wait(481));

	// bg
	this.instance_5 = new lib.Символ6("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-90.9,-81.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(500));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.6,-100.4,998.4,1100.2);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/back111.jpg", id:"back111"},
		{src:"images/l4.png", id:"l4"},
		{src:"images/l6.png", id:"l6"},
		{src:"images/Layer2.png", id:"Layer2"},
		{src:"images/Layer3.png", id:"Layer3"},
		{src:"images/Layer4.png", id:"Layer4"},
		{src:"images/Layer5.png", id:"Layer5"},
		{src:"images/Layer6.png", id:"Layer6"},
		{src:"images/Layer7.png", id:"Layer7"},
		{src:"images/logo1.png", id:"logo1"},
		{src:"images/logo.jpg", id:"logo"},
		{src:"images/shad.png", id:"shad"},
		{src:"images/skripka.jpg", id:"skripka"},
		{src:"images/smyk.png", id:"smyk"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;