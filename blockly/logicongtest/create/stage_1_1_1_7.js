(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 476,
	height: 340,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.sprite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAbIAAgUQAAgRALgQIAAArQAAAEgDADQgDACgCABg");
	this.shape.setTransform(34,44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8BA273").s().p("AgcAHQgHAAAAgHQAAgBACgCQACgDADAAIA5AAQAHAAAAAGQAAAHgHAAg");
	this.shape_1.setTransform(37.3,36.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66C25C").s().p("AgLAOQgIgBgGgFQgGgHAAgGQAAgFABgDIA7AAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAIgdAVg");
	this.shape_2.setTransform(46.6,25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#57A74F").s().p("AgkgdIBGAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIhIA1g");
	this.shape_3.setTransform(46.1,26.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#57A74F").s().p("AgjgWQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIBGAAIAAA7g");
	this.shape_4.setTransform(19.8,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7CAA50").s().p("AgtADQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBgBAAAAQAAAAABAAQAAgBAAAAQABgBAAAAQABAAABAAIBbAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAAAQAAAAAAABQAAABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_5.setTransform(33,20.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7CAA50").s().p("AgtADQgBAAgBAAQAAAAgBgBQAAAAAAgBQgBgBAAAAQAAAAABAAQAAgBAAAAQABgBAAAAQABAAABAAIBbAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAAAQAAAAAAABQAAABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_6.setTransform(33,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#89624E").s().p("AgWAKQgFAAgDgDQgDgDAAgEQAAgDADgDQADgDAFAAIAtAAQAFAAADADQADADAAADQAAAEgDADQgDADgFAAg");
	this.shape_7.setTransform(36.8,24.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#89624E").s().p("AgXAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIAuAAQAFAAADADQADADAAADQAAAEgDADQgDADgFAAg");
	this.shape_8.setTransform(29.4,24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9B6E58").s().p("AguALQgIAAgGgGQgFgFAAgHIAAgDICDAAQAAALgGAKg");
	this.shape_9.setTransform(39.7,31.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#815942").s().p("AATAXQgIAAgGgFQgFgGAAgIQAAAIgEAGQgFAFgJAAIhDAAQgUAAgNgOQgOgLAAgUIEJAAQAAAUgNALQgOAOgUAAg");
	this.shape_10.setTransform(33,32.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCAHQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgJQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAFAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAJQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_11.setTransform(37.9,26.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgIAQIAAgeQAAgEACgDQADgDADAAQADAAADADQADADAAAEIAAAeQAAADgDADQgDADgDAAQgIAAAAgJg");
	this.shape_12.setTransform(37,27.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCAHQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAgJQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAEAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAAJQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAg");
	this.shape_13.setTransform(29.9,26.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgFAWQgDgDAAgDIAAgeQAAgEADgDQADgDACAAQAEAAADADQACADAAAEIAAAeQAAAJgJAAQgCAAgDgDg");
	this.shape_14.setTransform(28.9,27.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8BA273").s().p("AgtAWIAAgcIAAAAQA0AAAngPIAAArg");
	this.shape_15.setTransform(37.7,29.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7B9066").s().p("AhIAyQgIAAgHgGQgFgGAAgIIAAhPQAmAQA2AAQA2AAAogQIAABPQgBAIgGAGQgFAGgJAAg");
	this.shape_16.setTransform(33,32.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8BBE5A").s().p("AhIAeQgIAAgHgGQgFgGAAgJIAAgmIC6AAIAAAmQgBAJgGAGQgFAGgJAAg");
	this.shape_17.setTransform(33,34.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7B9066").s().p("AgHAEQgDgDAAgCIAAgFIAVAAIAAAFQAAACgDADQgEADgEAAQgDAAgEgDg");
	this.shape_18.setTransform(20,53);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7B9066").s().p("AgHAEQgDgDAAgCIAAgFIAVAAIAAAFQAAACgEADQgCADgFAAQgDAAgEgDg");
	this.shape_19.setTransform(16.5,53.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7B9066").s().p("AgFAEQgDgDAAgCIAAgFIARAAIAAAFQAAACgDADQgCADgEAAQgDAAgCgDg");
	this.shape_20.setTransform(13.2,51.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9AD264").s().p("AAOAjQgWAAgQgRQgQgQAAgVQAAgJABgGIBAAAQAHAAAFAEQAEAEAAAFIAAA4g");
	this.shape_21.setTransform(17.5,45.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8BBE5A").s().p("AgEA/QgGAAgEgDQgEgFAAgGIAAglIgBgBIAAAAIgBABIAAAcQAAAEgEAEQgDADgFAAIgEAAQgFAAgDgDQgEgEAAgEIAAhdQAAgDAEgDQAEgEAFAAIBDAAQAHABAFADQAFAEAAAFIAABiQAAAFgEAFQgFADgGAAIgEAAQgGAAgEgDQgEgFAAgFIAAgkIgCgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIAAAlQAAAGgEAFQgFADgEAAg");
	this.shape_22.setTransform(16.7,48);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7CAA50").s().p("AAAAdQgGAAgGgGQgGgGAAgJIAAggQAAgEAEAAIAQAAQAHAAAFAFQAFAFAAAIIAAAcQAAAFgDADQgDADgEAAg");
	this.shape_23.setTransform(21,46.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1A1111").s().p("AgrAFIAAgJIBXAAIAAAJg");
	this.shape_24.setTransform(38,61.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1A1111").s().p("AgrAFIAAgJIBXAAIAAAJg");
	this.shape_25.setTransform(28.1,61.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFF1DA").s().p("AgDA8QgEAAgDgDQgCgDAAgEIAAhkQAAgDACgEQADgCAEAAIAHAAQAEAAADACQACAEAAADIAABkQAAAEgCADQgDADgEAAg");
	this.shape_26.setTransform(33.2,41.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EB8751").s().p("AgsBoIAAiYQAAgWARgRQAQgQAVAAQAUAAAPALIAADEg");
	this.shape_27.setTransform(37.9,50.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D27748").s().p("AhcCQIAAkfIC6AAIAAEfg");
	this.shape_28.setTransform(33,46.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8BBE5A").s().p("AgFAJQgEAAgDgCQgDgDAAgEQAAgCADgEQADgDAEAAIALAAQAEAAADADQADAEAAACQAAAEgDADQgDACgEAAg");
	this.shape_29.setTransform(52.3,46.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8BBE5A").s().p("AgFALQgEAAgDgEQgEgDAAgEQAAgDAEgDQADgEAEAAIALAAQAEAAAEAEQADADAAADQAAAEgDADQgEAEgEAAg");
	this.shape_30.setTransform(53.9,43.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9AD264").s().p("AgFALQgEAAgDgEQgEgDAAgEQAAgDAEgDQADgEAEAAIALAAQAEAAAEAEQADADAAADQAAAEgDADQgEAEgEAAg");
	this.shape_31.setTransform(53.9,39.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9AD264").s().p("AAHAYQgIAAgHgGQgGgHAAgKIAAgSQAGgGAIAAQAFAAAFAFQAFAGAAAGIAAAeg");
	this.shape_32.setTransform(49,42.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8BBE5A").s().p("AAAAgQgHAAgHgGQgGgHAAgKIAAgjQAAgFAEAAIASAAQAJAAAFAFQAGAGAAAJIAAAfQAAAGgEACQgDAEgFAAg");
	this.shape_33.setTransform(49.7,41.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7CAA50").s().p("AgNAPQgFAAgEgEQgEgEAAgFIAAgDQAAgFAEgEQAEgEAFAAIAbAAQAFAAAEAEQAEAEAAAFIAAADQAAAFgEAEQgEAEgFAAg");
	this.shape_34.setTransform(52.6,46.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7CAA50").s().p("AgQASQgGAAgFgFQgFgFABgGIAAgDQgBgHAFgEQAFgFAGAAIAgAAQAHAAAFAFQAEAEAAAHIAAADQAAAGgEAFQgFAFgHAAg");
	this.shape_35.setTransform(53.5,43.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7CAA50").s().p("AgQASQgHAAgEgFQgFgFABgGIAAgDQgBgHAFgEQAEgFAHAAIAhAAQAHAAAEAFQAEAEABAHIAAADQgBAGgEAFQgEAFgHAAg");
	this.shape_36.setTransform(53.3,40.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FD797B").s().p("AgCA1QgdgIgUgXIAAg4QABgIAFgFQAFgFAIAAIBCAAQAHAAAFAFQAFAFABAIIAABGQgBAGgFAGQgFAFgHAAgAgcgYIAAA2QAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAIA0AAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAg2QAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIg0AAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAABg");
	this.shape_37.setTransform(50.6,10.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FC4F52").s().p("AggA1QgIAAgFgFQgFgGgBgGIAAhGQABgIAFgFQAFgFAIAAIBCAAQAHAAAFAFQAFAFABAIIAABGQgBAGgFAGQgFAFgHAAgAgcgYIAAA2QAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAIA0AAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAg2QAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIg0AAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAABg");
	this.shape_38.setTransform(50.6,10.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FD797B").s().p("AgCBjQgFgGAAgHIAAi/IAPAAIAADTQgHgBgDgGg");
	this.shape_39.setTransform(51,26.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FC4F52").s().p("AgLDjIAAnFIAXAAIAAHFg");
	this.shape_40.setTransform(50.6,38.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#688E43").s().p("AgRAgQgJgHABgMIAAgZQgBgLAJgIQAHgIAKAAQALAAAIAIQAIAIAAALIAAAZQAAAMgIAHQgIAIgLAAQgKAAgHgIg");
	this.shape_41.setTransform(49.8,43.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#8BBE5A").s().p("AgDAxQgFAAgEgEQgEgEAAgFIAAhEQAAgGAEgFQAFgFAHAAIARAAIAABhg");
	this.shape_42.setTransform(47.9,43);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9AD264").s().p("AgDAaQgRAAgMgMQgNgNAAgPIAAgLIBGAAQAJAAAGAGQAGAGAAAIIAAAfg");
	this.shape_43.setTransform(37.7,19.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8BBE5A").s().p("AhcBCIAAhuQAAgJAFgFQAHgHAIAAICRAAQAJAAAFAHQAGAFABAJIAABIIhVAAQgEAAgDADQgCADAAAEIAAAcg");
	this.shape_44.setTransform(33,23.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9AD264").s().p("AhcAoIAAhPIC6AAIAABPg");
	this.shape_45.setTransform(33,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.8,5.5,45,56.3);


(lib.obstacle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9EFCF").s().p("AhMAAQAAgVAUAAIBwAAQAVAAAAAVQAAAVgSAAIh1ABQgSgBAAgVg");
	this.shape.setTransform(34,39.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D3C2B").s().p("AA9AtIhNAAQg8AAgKgKQgLgKgDg4QAEgHAKgDIARgEIB3AAQACABAZABQAQAAAIAMIgCAUIAAASQACAVgJAJQgJAJgSAAIgEgBg");
	this.shape_1.setTransform(34,39.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DB523D").s().p("AgcAXQgDgtAfAAQAgAAgDAtg");
	this.shape_2.setTransform(25,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DF523F").s().p("AgcAXQgDgsAfAAQAggBgDAtg");
	this.shape_3.setTransform(43,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2BE33").s().p("Ah7BFQAIgKA6g3QApglAQgiIAGgJQAdgZAeAZQAHAHAXABQAVAAAIAMIh+B9QgdAUggAAQgfAAgdgUg");
	this.shape_4.setTransform(39.4,28.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3D413E").s().p("AgPAKIgCgcIAjAPQgDAKgNAEIgSAIg");
	this.shape_5.setTransform(48.7,50.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3B3D3C").s().p("AgDAOQgKgFgEgJQAFgIAMgDIASgHIgCAlIgTgFg");
	this.shape_6.setTransform(19.4,50.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3BE34").s().p("AhEASIACg2QALgMAXgCQAbgEAHgFQAdgZAdAZIAJAJIiAB7QgKgWABghg");
	this.shape_7.setTransform(21.8,26.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7DB8D").s().p("AgpBIQgOgBgLgJQgHgJADgEQAegwAZgYQAggjArgNIAKAEIABAOQACBCgJAPQgJAPg3AZIgPAAQgPAEgJAAIgCAAg");
	this.shape_8.setTransform(45.8,29.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#414142").s().p("AiBAWQgEgEACgDIACgEIAWADQAMABAEgIQAZgpA0AEIApAGQAaADAQgEQAGgCAGAEQAFAFAAAHQACASANAFQAHACAVgCQAFADgCADQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQhAALhBAAQg/AAhCgKg");
	this.shape_9.setTransform(34,50.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9F9E9E").s().p("ABUBIQhKgqhTAoQgfAPgbgLQgKgRAPgMQAKgXgCgkQgBgvACgOIASAAIAEADQAJAHACAbQACAYASACQA2AHBNgGQANgBADgVIADgWQACgNAIgHQAMgIAKAIQADAOgCAvQgCAkALAXQAOAMgLARQgLAGgLAAQgNAAgMgIg");
	this.shape_10.setTransform(34,44.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8DD8E").s().p("Ag3BHQgHgLgZgBQgYAAgHgPQAyhfBOgcIBoABQAJARgIAPQgEAGgRASQg9A/giAbQgNAIgWAEQgLAAgIgJg");
	this.shape_11.setTransform(27.8,29.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#263420").s().p("AgqAsQgKgDgJgJQgUgfgHAAQgHAAgUAeQgjAbglgOIgLgMQALgMAggUQAfgRAMgTQALgRAVAGQAUAFAOAVQAVAdAZAAQAZAAAWgdQAPgUAUgGQAVgHAKASQANASAeASQAhAUAKAMIgKANQgIAEgHAAQgagDgFgCQgRgEgLgMQgTgcgHABQgHABgRAeQgIAJgLAEQgZAFgVAAQgWAAgUgGg");
	this.shape_12.setTransform(34,18.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#19291A").s().p("AhaCkQgfgEg0gOQgagHACgUQABgKAHgGQAHgHAIgBQAfgEAEgYQgBgeACgOQAFgXgOgGIgfgKQgMgEgIgIQgIgJAAgKQgEgpAAgUQgBgkANgYQALgDAIANQAIAQAAAhQABAiAGAPQAFAHAbAMQAVAKAFARQAAARAEAlQABAhgJAXQACADgOAKQgKAIAUAIQBlALB6gLQAYgGgKgJQgPgMABgCQgJgYABghQAEglAAgRQABgBAAgBQABAAAAgBQAAAAgBAAQAAAAAAAAIABgBQAngUAQgnQAKgaAFg1QAIgNAMACQANAYgBAkQAAAUgEApQAAAUgdAMQgUAEgIADQgPAHAEAUQADAPgCAfQADAaAgAGQAJABAGAHQAHAHgBAJQgBANgLAHQgIAGgQAEQhJAThSAAQgtAAgygGg");
	this.shape_13.setTransform(34,38.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.8,13.4,42.3,42.4);


(lib.mainBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D8F30").s().p("AgIgBIAEgEQADgCABAAIAFABQAEACAAACQABACgCACIgDAGg");
	this.shape.setTransform(192.1,230.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B8C2D").s().p("AgUACQAKgJAKAAQAHAAAOAHQgKAHgLAAIAAABQgHAAgNgGg");
	this.shape_1.setTransform(190.1,250.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E9D35").s().p("AgLAAQAEgEALgCQAEgBADADQADADgCABQgCADgFACIgFACQgQgBAFgGg");
	this.shape_2.setTransform(364.5,297.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E9D35").s().p("AgHAFQgEgCAAgBQAAgGALgBIAMACQgBAIgLABIgHgBg");
	this.shape_3.setTransform(160.6,93.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E9D35").s().p("AgHAFQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAgDAFgCIAJgDIAFADQAEACAAABQAAAGgMABIgHgCg");
	this.shape_4.setTransform(364.6,93.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E9D35").s().p("AgFAGIgHgBIAAgHIAMgDQAGgCACACQAIAGgFADIgLACIgBABIgEgBg");
	this.shape_5.setTransform(432.5,229.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#31932F").s().p("AjbEpQgqgBgTgWQgTgVAAgsQgBjRABjQQAAgsATgVQATgWAqgBQDhgEDZAFQBMABABBTIAADVIAADSQgBBThMABQhyADhzAAQhpAAhsgCg");
	this.shape_6.setTransform(34.1,306);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7BBE72").s().p("AAAAEQgRgBgKgGIA3gCIAAAKIgcgBg");
	this.shape_7.setTransform(65.1,272.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7BBE72").s().p("AgmgEIBNAAQgUAJgTAAQgSAAgUgJg");
	this.shape_8.setTransform(18.1,272.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7BBE72").s().p("AgmgEIBNAAQgUAJgTAAQgSAAgUgJg");
	this.shape_9.setTransform(34.1,272.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7BBE72").s().p("AgmgEIBNAAQgUAJgTAAQgSAAgUgJg");
	this.shape_10.setTransform(50.1,272.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEF7DF").s().p("AgDghIAHAAIAAAhQgBAUgFAOg");
	this.shape_11.setTransform(204.6,208.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEF7DF").s().p("AgDgiIAHABIAAAhQAAAVgGANg");
	this.shape_12.setTransform(68.6,208.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7D6B4").s().p("AgVAAQAVgIAWAIQgLAFgLAAQgJAAgMgFg");
	this.shape_13.setTransform(292,136.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E8D8BC").s().p("AgBAAIADgRIAAAkQgEgJABgKg");
	this.shape_14.setTransform(272.3,184.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E8D8BC").s().p("AgCgWQAFAOgBAKQAAAJgEAMg");
	this.shape_15.setTransform(204.6,183.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E8D8BC").s().p("AAAgUQAKAUgKAVQgIgUAIgVg");
	this.shape_16.setTransform(136.6,184.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E8D8BC").s().p("AAAgUQAKAUgKAVQgIgVAIgUg");
	this.shape_17.setTransform(68.6,184.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E8D8BC").s().p("AgBATIAAglIADAAIAAAlg");
	this.shape_18.setTransform(272.5,168.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E8D8BC").s().p("AAAgUQAJAVgJAUQgIgVAIgUg");
	this.shape_19.setTransform(204.5,168.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E8D8BC").s().p("AAAgUQAKAXgKASQgIgWAIgTg");
	this.shape_20.setTransform(136.6,168.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E8D8BC").s().p("AAAgUQAKAVgKAUQgJgVAJgUg");
	this.shape_21.setTransform(68.6,168.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E8D8BC").s().p("AAAgUQAKAUgKAVQgJgUAJgVg");
	this.shape_22.setTransform(272.5,152.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E8D8BC").s().p("AAAgUQAKAUgKAVQgIgUAIgVg");
	this.shape_23.setTransform(204.5,152.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E8D8BC").s().p("AgBgBQAAgJAEgMIAAAtQgFgOABgKg");
	this.shape_24.setTransform(136.5,152.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E8D8BC").s().p("AAAgUQAJAUgJAVQgJgVAJgUg");
	this.shape_25.setTransform(68.6,152.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E7D6B4").s().p("AgVAAQAVgJAVAJQgKAFgLAAQgJAAgMgFg");
	this.shape_26.setTransform(324.1,136.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E7D6B4").s().p("AgSACQAJgEAJABQAHABAMACg");
	this.shape_27.setTransform(307.8,136.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E8D8BB").s().p("AAAAIQgIgRgDAAIAQgCQAEgBADADQgDAVgFAAQgDAAgBgEg");
	this.shape_28.setTransform(135.8,273.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E8D8BC").s().p("AAAgUQAKAUgKAVQgIgVAIgUg");
	this.shape_29.setTransform(204.5,288.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FEF7DF").s().p("AgDgmQAQAmgQAng");
	this.shape_30.setTransform(204.6,240);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FEF7DF").s().p("AgDgmQAQAmgQAng");
	this.shape_31.setTransform(68.7,240);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E7D6B4").s().p("AgUAAQAUgJAVAJQgLAEgKAAQgKAAgKgEg");
	this.shape_32.setTransform(224.1,272.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E7D6B4").s().p("AgUAAQAVgIAUAIQgLAFgKAAQgKAAgKgFg");
	this.shape_33.setTransform(240,272.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E7D6B4").s().p("AgSACIAAgDIAlAAIAAADg");
	this.shape_34.setTransform(256,272.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E8D8BC").s().p("AgBAAIADgSIAAAkQgEgHABgLg");
	this.shape_35.setTransform(136.4,320.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E8D8BC").s().p("AAAgUQAKAVgKAUQgJgVAJgUg");
	this.shape_36.setTransform(272.5,288);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E8D8BC").s().p("AgDAAQAAgCACgYQAFAOAAAMIgCAbQgFgOAAgNg");
	this.shape_37.setTransform(136.6,304);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E8D8BC").s().p("AAAgUQAKAUgKAVQgIgVAIgUg");
	this.shape_38.setTransform(204.5,320.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEF7DF").s().p("AgDgmQAQAmgQAng");
	this.shape_39.setTransform(68.7,256);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FEF7DF").s().p("AgDgmQAQAmgQAng");
	this.shape_40.setTransform(204.6,256);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E8D8BC").s().p("AAAgUQAKAVgKAUQgJgVAJgUg");
	this.shape_41.setTransform(272.5,320);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E8D8BC").s().p("AAAgUQAJAWgJATQgJgWAJgTg");
	this.shape_42.setTransform(136.6,288.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E7D6B4").s().p("AgUAAQAVgIAUAIQgLAFgKAAQgKAAgKgFg");
	this.shape_43.setTransform(88,272.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E7D6B4").s().p("AgUAAQAUgJAVAJQgLAEgKAAQgKAAgKgEg");
	this.shape_44.setTransform(104.1,272.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E7D6B4").s().p("AgUAAQAUgIAWAIQgMAFgKAAQgKAAgKgFg");
	this.shape_45.setTransform(120.1,272.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E7D6B4").s().p("AgaADQANgGANAAIAbABQgNAGgOAAIgagBg");
	this.shape_46.setTransform(256,204.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E7D6B4").s().p("AgaADQANgGANAAIAbABQgNAGgOAAIgagBg");
	this.shape_47.setTransform(240,204.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E7D6B4").s().p("AADAEQgTgBgGABQAMgHALAAIATAAIADADQgGAEgLAAIgDAAg");
	this.shape_48.setTransform(223.6,204.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E7D6B4").s().p("AgUAAQAUgJAWAJQgLAFgLAAQgJAAgLgFg");
	this.shape_49.setTransform(120.1,204.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E7D6B4").s().p("AgUAAQAXgIATAIQgNAEgJAAQgLAAgJgEg");
	this.shape_50.setTransform(104.1,204.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E7D6B4").s().p("AgVAAQAYgIASAIQgLAEgKAAQgLAAgKgEg");
	this.shape_51.setTransform(88.1,204.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E8D8BC").s().p("AAAgUQAKAVgKAUQgIgVAIgUg");
	this.shape_52.setTransform(204.5,304.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E8D8BC").s().p("AAAgUQAKAVgKAUQgJgVAJgUg");
	this.shape_53.setTransform(272.5,304);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E8D8BC").s().p("AgBgbIAHAAIAAA3IgKAAg");
	this.shape_54.setTransform(272.5,201.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E8D8BC").s().p("AgEgbIAIgBIAAA4IgIABg");
	this.shape_55.setTransform(136.6,201.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FEF7DF").s().p("AgDgmQAQAmgQAng");
	this.shape_56.setTransform(204.6,224);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FEF7DF").s().p("AgDgmQAQAmgQAng");
	this.shape_57.setTransform(68.7,224);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FEF8E4").s().p("AAAAFQgdAAgTgGIBhgDIgBAJIglAAIgLAAg");
	this.shape_58.setTransform(199,272.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FEF8E4").s().p("AgwgDIBhAAQgYAHgZAAQgXAAgZgHg");
	this.shape_59.setTransform(183.1,272.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FEF8E4").s().p("AgwgDIBhAAQgYAHgZAAQgXAAgZgHg");
	this.shape_60.setTransform(167.1,272.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FEF8E4").s().p("AgwgDIBhAAQgZAHgYAAQgXAAgZgHg");
	this.shape_61.setTransform(151.1,272.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E6D6B7").s().p("AgcABIACgIIA3AAIgdALQgFAEgGAAQgKAAgHgHg");
	this.shape_62.setTransform(274.9,136.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E6D6B7").s().p("AgZABQgLgFAMgEIgBABIA4AAQgHAAgVALQgGAFgHAAQgIAAgHgIg");
	this.shape_63.setTransform(206.5,272.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E6D6B7").s().p("AgbgHQgIgGAHgGIADABIA5AAQgYAIgJAFQgRAHgGASg");
	this.shape_64.setTransform(70.8,274);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E8D8B9").s().p("AgbAeQgDgDACgEIAAg5QAIANAIAcQAMAXAegEIgZAEIgXABQgCAEgCAAQgDAAgCgFg");
	this.shape_65.setTransform(71,202);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E8D8B9").s().p("AgbAfIgBgJIAAg5QANAmADAFQAMAVAdACIgvAAQgCAFgCAAQgCAAgDgFg");
	this.shape_66.setTransform(207,202);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FCE6BA").s().p("AhYAmQglgBgCgkQgBgmAoAAICxAAQAlABACAjQABAmgoABIhZABIhYgBg");
	this.shape_67.setTransform(306,170.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FCE6BA").s().p("AhXAmQgoAAAAgmQABglAqgBIBUAAIBYABQAoABAAAlQgBAkglABIhZABIhYgBg");
	this.shape_68.setTransform(238,170.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FCE6BA").s().p("AhaAmQglgBAAglQAAglAkAAQBbgBBbABQAlAAAAAlQAAAlgkABIhaAAIhcAAg");
	this.shape_69.setTransform(170.1,170.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FCE6BA").s().p("AhZAmQglgBgBgkQgBgmAogBICyAAQAlACABAjQABASgLALQgKAKgTAAIhZAAIhZAAg");
	this.shape_70.setTransform(306,306.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FCE6BA").s().p("AhZAmQglgBgBgkQAAglAogBIBdgBIBPAAQAqABABAlQABAmgpAAIhYABIhZgBg");
	this.shape_71.setTransform(238,306);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FCE6BA").s().p("AhbAmQgkgBAAglQAAgRAKgKQAJgKASAAQBagBBcABQAkAAAAAlQAAAlglABIhcAAIhaAAg");
	this.shape_72.setTransform(170.1,306);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FCE6BA").s().p("AhbAmQgkgBAAglQAAglAlAAQBagBBcABQAkAAAAAlQAAAlglABIhcAAIhaAAg");
	this.shape_73.setTransform(102.1,306);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FCE5B9").s().p("Ah/ABQAAgmAoAAICxAAQAlABABAkQAAAlgoABIisABQgqgBgBglg");
	this.shape_74.setTransform(102.1,170.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FCE6BA").s().p("AhYAmQgogBABgmQABgjAlgBICyAAQAoAAgBAnQgCAjgkABg");
	this.shape_75.setTransform(34.1,170.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FCE5B9").s().p("AAACAQglgBgBgqIABisQABgoAlAAQAkABABAlQABBZgBBYQAAAogmAAIAAAAg");
	this.shape_76.setTransform(102.1,238);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FCE5B9").s().p("AgbB2QgKgJAAgSQgBhbABhbQAAgkAlAAQAlAAABAlIAABcIAABaQgBAkglAAQgRAAgKgKg");
	this.shape_77.setTransform(238,238);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FCE5B9").s().p("AAACAQgkgCAAggQgChvAChMQAAgjAmABQAiACACAgIAAC7QgCAigkAAIAAAAg");
	this.shape_78.setTransform(306,102.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#50A945").s().p("ABNFVIg9AAQgvAIgygIIg9AAQgxAIgygIIhbgBQgFAFgBgHIgDqkQAEgLAGAKIKbACQAGAGgBAIIAAAgQABAUgEAMIAABQQAIAogIAoIAABQQAIAmgIAoIAABQQAIAogIAoIgDB3IgHAFIguABQgbABgTgEIg8AAQgYAEgZAAQgZAAgZgEg");
	this.shape_79.setTransform(170.4,238.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#7CBE73").s().p("AgCAAIABgHIAEACIgBANIgEgIg");
	this.shape_80.setTransform(136.5,70.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E7D6B4").s().p("AgPAEQADgEAGgBIAKgBQAFgJAHAJIgBACIgIAHg");
	this.shape_81.setTransform(271.5,204.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E7D6B4").s().p("AgLACIAAgEIAVgBIACAFIgDACg");
	this.shape_82.setTransform(339.1,136.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FEF8E5").s().p("AAAAFQgQgCgNgEQAKAAATgDQASgBAMAKIgeAAg");
	this.shape_83.setTransform(65.2,136.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#7BBE72").s().p("AgKgDIAVADQgEAEgFAAQgEAAgIgHg");
	this.shape_84.setTransform(65.1,68.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#7BBE72").s().p("AgXgDIAuAAIABAFIgvACg");
	this.shape_85.setTransform(207.5,68.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#41982E").s().p("AgLAAQAJgFACAAQAAgBAEADIAIADIgMAGIgLgGg");
	this.shape_86.setTransform(429.7,289.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#98CD8C").s().p("AgJAOIACgSQACgMAFgHIAKAtIgRACIgCgKg");
	this.shape_87.setTransform(440,307.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3D8F30").s().p("AgCAEIgJgEIALgFQACAAAKAFIgJAFIgBABIgEgCg");
	this.shape_88.setTransform(463.9,162.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#7BBE72").s().p("AgXgDIAvAAIAAAFIgvACg");
	this.shape_89.setTransform(411.5,68.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3D8F30").s().p("AgHADQgDgDADgCQACgDAFABQAKAAAAAHIgLADQgEgBgCgCg");
	this.shape_90.setTransform(396.1,230.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#7BBE72").s().p("AgDAdIgBgJIAAgvIAJgBIAAA3IgFACg");
	this.shape_91.setTransform(136.6,134.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#7BBE72").s().p("AAAgVQAKAVgKAWQgIgWAIgVg");
	this.shape_92.setTransform(68.6,129.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FEF7DF").s().p("AgDgmQAQAmgQAng");
	this.shape_93.setTransform(272.6,122.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#7BBE72").s().p("AgEAAIADgUQAGAJAAALIgEAVQgFgJAAgMg");
	this.shape_94.setTransform(408.5,120.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#7BBE72").s().p("AAAgVQAJAWgJAVQgJgWAJgVg");
	this.shape_95.setTransform(204.5,120.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#7BBE72").s().p("AgCgTQAHAJgDAKIgEAUg");
	this.shape_96.setTransform(136.7,117.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#7BBE72").s().p("AAAgRIABgBIAAAkIgBABg");
	this.shape_97.setTransform(68.7,112.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FEF7DF").s().p("AgDgmQAQAmgQAng");
	this.shape_98.setTransform(272.6,106.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#7BBE72").s().p("AgDgPIADgEQAKASgNAVg");
	this.shape_99.setTransform(408.6,104);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#7BBE72").s().p("AgDgCQgBgNAEgJQAFALAAAMQgBAIgEASQgDgXAAgEg");
	this.shape_100.setTransform(204.5,104.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#7BBE72").s().p("AgDADQAAgJADgSQAEAXAAAEQABANgFAJQgEgLABgLg");
	this.shape_101.setTransform(136.6,100.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#7BBE72").s().p("AAAgVQAJAYgJATQgIgYAIgTg");
	this.shape_102.setTransform(68.6,97);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FEF7DF").s().p("AgDgmQAQAmgQAng");
	this.shape_103.setTransform(272.6,90.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#7BBE72").s().p("AgDAAQADgOgBgGQAFAHAAANIAAAVQgIgJABgMg");
	this.shape_104.setTransform(408.6,88.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#7BBE72").s().p("AAAgVQAJAVgJAWQgJgWAJgVg");
	this.shape_105.setTransform(408.5,185);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#7BBE72").s().p("AAEgTIAAAjIgEAEQgJgSANgVg");
	this.shape_106.setTransform(408.4,169.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#7BBE72").s().p("AgEAAQAAgFAEgPQAFAJAAALIgDAVQgGgJAAgMg");
	this.shape_107.setTransform(408.5,153);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#7BBE72").s().p("AgSgDIAiAAIADADQgHAEgJAAQgJAAgMgHg");
	this.shape_108.setTransform(466.1,136.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#7BBE72").s().p("AgSAAQAJgEAJABQAHAAAMADQgLAEgIAAQgJAAgJgEg");
	this.shape_109.setTransform(449.8,136.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#7BBE72").s().p("AgYAAQAVgIAcAJIgbADQgNAAgJgEg");
	this.shape_110.setTransform(434.4,136.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#7BBE72").s().p("AgVAAQAVgIAWAIQgLAEgLAAQgKAAgLgEg");
	this.shape_111.setTransform(418,136.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#7BBE72").s().p("AgVAAQAVgIAWAIQgLAEgLAAQgKAAgLgEg");
	this.shape_112.setTransform(402,136.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#7BBE72").s().p("AgUACQAJgGALAAIAVAEQgJAFgMAAIgUgDg");
	this.shape_113.setTransform(386.1,136.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#7BBE72").s().p("AgYAAQAVgIAcAJIgbADQgNAAgJgEg");
	this.shape_114.setTransform(370.4,136.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#7BBE72").s().p("AgYAAQAVgIAcAJIgbADQgNAAgJgEg");
	this.shape_115.setTransform(354.4,136.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#7BBE72").s().p("AgPAEIgDgEQARgJAUANg");
	this.shape_116.setTransform(18,68.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#7BBE72").s().p("AgDACQAAgJAEgRIAEAbQAAANgFAJQgEgLABgMg");
	this.shape_117.setTransform(408.5,55.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#7BBE72").s().p("AgDAAQAAgDACgYQAFAOAAANIgCAcQgFgPAAgNg");
	this.shape_118.setTransform(340.5,56.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#7BBE72").s().p("AgCgVQAEANABAIQABAKgGAMg");
	this.shape_119.setTransform(272.6,56.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#7BBE72").s().p("AAAgVQAJAWgJAVQgJgWAJgVg");
	this.shape_120.setTransform(204.5,56.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#7BBE72").s().p("AgDAAIAFgVIACArQgJgLACgLg");
	this.shape_121.setTransform(136.6,56.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#7BBE72").s().p("AAAgVQAJAYgJATQgIgYAIgTg");
	this.shape_122.setTransform(68.6,56);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#3D8E2F").s().p("AgBAGQgCAAgJgGIAIgDIAGgDQADAAADACIAGAEQgEAHgJAAIgCgBg");
	this.shape_123.setTransform(312.4,44.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#3D8E2F").s().p("AgLAAQAAAAAEgDIAFgDIAJAAQAFACAAAEQAAACgEACIgHACIgDABQgJAAAAgHg");
	this.shape_124.setTransform(176.4,44.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#7BBE72").s().p("AgDAAQAAgCACgYQAFAOAAAMIgCAbQgFgOAAgNg");
	this.shape_125.setTransform(408.5,40.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#7BBE72").s().p("AgCgeQAFAQAAANQAAAKgFAVg");
	this.shape_126.setTransform(340.7,40.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#7BBE72").s().p("AAAgVQAJAVgJAWQgJgWAJgVg");
	this.shape_127.setTransform(272.5,40);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#7BBE72").s().p("AAAgVQAKAVgKAWQgIgWAIgVg");
	this.shape_128.setTransform(204.5,40.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#7BBE72").s().p("AAAgVQAJAVgJAWQgJgWAJgVg");
	this.shape_129.setTransform(136.6,40);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#7BBE72").s().p("AgEAAQAAgFAEgQQAFALAAAKIgDAWQgGgKAAgMg");
	this.shape_130.setTransform(68.6,40);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#7BBE72").s().p("AgBgTQAEAKgBAJQgBAIgCAMg");
	this.shape_131.setTransform(408.7,23.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#7BBE72").s().p("AgDgPIADgEQAFAJgCAKIgGAUg");
	this.shape_132.setTransform(340.6,24);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#7BBE72").s().p("AgDAAQAAgCACgZQAFAPAAAMIgCAcQgFgOAAgOg");
	this.shape_133.setTransform(272.5,24);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#7BBE72").s().p("AgBgTQAEAKgBAJQgBAIgCAMg");
	this.shape_134.setTransform(204.7,23.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#7BBE72").s().p("AgBAAQABgHACgMIAAAnQgEgKABgKg");
	this.shape_135.setTransform(136.4,24.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#7BBE72").s().p("AAAgVQAJAWgJAVQgJgWAJgVg");
	this.shape_136.setTransform(68.6,24.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#7BBE72").s().p("AgCACQAAgKAFgVIAAA8QgFgQAAgNg");
	this.shape_137.setTransform(408.4,7.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#7BBE72").s().p("AAAgVQAJAWgJAVQgJgWAJgVg");
	this.shape_138.setTransform(340.5,8.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#7BBE72").s().p("AgDgCQgBgNAEgJQAFALAAAMQgBAIgEASQgDgXAAgEg");
	this.shape_139.setTransform(272.5,8.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#7BBE72").s().p("AgBgXQAFASAAAIQgBALgGAKg");
	this.shape_140.setTransform(204.5,7.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#7BBE72").s().p("AgDAAIADgTQAJAXgJAQQgEgJABgLg");
	this.shape_141.setTransform(136.5,8.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#7BBE72").s().p("AgBAAIADgSIAAAlQgEgIABgLg");
	this.shape_142.setTransform(68.4,8.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#7BBE72").s().p("AAAgVQAKAVgKAWQgIgWAIgVg");
	this.shape_143.setTransform(204.5,88.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#7BBE72").s().p("AgCgTQAHAJgDAKIgEAUg");
	this.shape_144.setTransform(136.7,85.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#7BBE72").s().p("AgEAAIADgVQAGAKAAALQAAAGgFAPQgEgJAAgMg");
	this.shape_145.setTransform(68.6,81.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FEF7DF").s().p("AgDgmQAQAmgQAng");
	this.shape_146.setTransform(272.6,74.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#7BBE72").s().p("AgbACQANgFAOAAIAcABQgPAFgNABIgBAAIgagCg");
	this.shape_147.setTransform(460.1,68.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#7BBE72").s().p("AgVAAQAYgIATAIQgMAEgKAAQgLAAgKgEg");
	this.shape_148.setTransform(444.1,68.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#7BBE72").s().p("AAAAEQgGAAgMgEQATgHASAHQgIAEgKAAIgBAAg");
	this.shape_149.setTransform(428.3,68.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#7BBE72").s().p("AACgcQAKAFgKAFIAAAvQgRggARgZg");
	this.shape_150.setTransform(408.8,71.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#7BBE72").s().p("AAAAEIgTgEQAXgIAQAIQgIAEgKAAIgCAAg");
	this.shape_151.setTransform(398.2,68.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#7BBE72").s().p("AAAADIgTgGIAjAAIAEADQgHAEgHAAIgGgBg");
	this.shape_152.setTransform(382.1,68.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#7BBE72").s().p("AACAEQgJAAgRgEIAbgEQANAAAJAEQgKAFgKAAIgDgBg");
	this.shape_153.setTransform(365.7,68.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#7BBE72").s().p("AgBACQgKAAgMgEIAvAAQgNAFgLAAIgBgBg");
	this.shape_154.setTransform(350.4,68.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#7BBE72").s().p("AgbACQAOgFANAAIAcACQgPAFgNAAIgbgCg");
	this.shape_155.setTransform(256.1,68.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#7BBE72").s().p("AAAAFIgUgEQAJgFALAAIAWADQgJAGgMAAIgBAAg");
	this.shape_156.setTransform(240,68.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#7BBE72").s().p("AgYAAQALgEAMABQAIAAASADQgXAEgEAAIgCAAQgMAAgIgEg");
	this.shape_157.setTransform(224.4,68.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#7BBE72").s().p("AACgcQAKAFgKAFIAAAvQgRggARgZg");
	this.shape_158.setTransform(204.8,71.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#7BBE72").s().p("AgSACQAPgIAXAIg");
	this.shape_159.setTransform(193.8,68.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#7BBE72").s().p("AgVAAQAVgIAWAIQgLAEgLAAQgKAAgLgEg");
	this.shape_160.setTransform(178,68.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#7BBE72").s().p("AgVAAQAYgIATAIQgMAEgKAAQgLAAgKgEg");
	this.shape_161.setTransform(162,68.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#7BBE72").s().p("AgbACQAOgFANAAIAcACQgPAFgNAAIgbgCg");
	this.shape_162.setTransform(146.1,68.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#7BBE72").s().p("AAAAFQgFAAgPgFQAKgEAKAAIAWADQgJAGgMAAIgBAAg");
	this.shape_163.setTransform(130,68.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#7BBE72").s().p("AgTAAQAJgEAKABIAUADQgNAEgIAAQgKAAgIgEg");
	this.shape_164.setTransform(113.9,68.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#7BBE72").s().p("AgVAAQAWgJAVAJQgMAFgKAAQgKAAgLgFg");
	this.shape_165.setTransform(98.1,68.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#7BBE72").s().p("AgXABQASgFAJABQAKABAKAGg");
	this.shape_166.setTransform(81.6,68.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#7BBE72").s().p("AgYAAQAXgDAEAAQANgBAJAEQgLAFgLAAQgJgBgSgEg");
	this.shape_167.setTransform(49.7,68.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#7BBE72").s().p("AgSAAQAJgEAJABQAHAAAMADQgLAEgIAAQgJAAgJgEg");
	this.shape_168.setTransform(33.8,68.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#7BBE72").s().p("AgDgPIADgDQAKARgNAUg");
	this.shape_169.setTransform(408.6,237);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#7BBE72").s().p("AgDgDQABgLAGgIIgDAtQgFgQABgKg");
	this.shape_170.setTransform(340.6,237.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#E8D8BB").s().p("AgPgFIAYgCQAEgCADADQgFAPgDAAQgEAAgTgOg");
	this.shape_171.setTransform(271.4,272.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#7BBE72").s().p("AAAAFQgFAAgPgFQAJgEALAAIAWADQgJAGgMAAIgBAAg");
	this.shape_172.setTransform(350,272.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#7BBE72").s().p("AgSAAQAJgEAJABQAHAAAMADQgKAEgJAAQgJAAgJgEg");
	this.shape_173.setTransform(365.8,272.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#7BBE72").s().p("AAAAEQgGAAgMgEQATgHASAHQgIAEgKAAIgBAAg");
	this.shape_174.setTransform(382.3,272.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#7BBE72").s().p("AAAgVQAKAWgKAVQgIgWAIgVg");
	this.shape_175.setTransform(408.5,301);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#7BBE72").s().p("AAAgVQAKAWgKAVQgIgWAIgVg");
	this.shape_176.setTransform(340.5,253);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#7BBE72").s().p("AgBAAIADgSIAAAlQgEgIABgLg");
	this.shape_177.setTransform(408.3,253.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#7BBE72").s().p("AgDAAIADgTQAJAXgJAQQgEgJABgLg");
	this.shape_178.setTransform(408.5,269.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#7BBE72").s().p("AgDAAQAAgDACgYQAFAOAAANIgCAcQgFgPAAgNg");
	this.shape_179.setTransform(408.5,333.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#7BBE72").s().p("AgEAAIADgVQAGAKAAALQAAAGgFAPQgEgKAAgLg");
	this.shape_180.setTransform(408.5,285.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#7BBE72").s().p("AgVAAQAYgIATAIQgMAEgKAAQgLAAgKgEg");
	this.shape_181.setTransform(366,204.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#7BBE72").s().p("AAAAFIgUgEQAKgFAKAAIAWADQgJAGgMAAIgBAAg");
	this.shape_182.setTransform(350,204.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#7BBE72").s().p("AgVAAQAWgIAVAIQgLAFgLAAQgKAAgLgFg");
	this.shape_183.setTransform(398.1,272.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#7BBE72").s().p("AgSAAQAJgEAJABQAHAAAMADQgLAEgIAAQgJAAgJgEg");
	this.shape_184.setTransform(417.8,272.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#7BBE72").s().p("AgdADQAPgFANAAQAKAAAWAFg");
	this.shape_185.setTransform(434.4,272.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#7BBE72").s().p("AgVAAQAYgIATAIQgMAEgKAAQgLAAgKgEg");
	this.shape_186.setTransform(450.1,272.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#7BBE72").s().p("AgDAEQgKgBgKgGIAvACQgQAFgJAAIgCAAg");
	this.shape_187.setTransform(466.6,272.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#7BBE72").s().p("AAAgVQAJAYgJATQgIgYAIgTg");
	this.shape_188.setTransform(408.5,317.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#7BBE72").s().p("AgCADQAAgLAFgVIAAA8QgFgPAAgNg");
	this.shape_189.setTransform(408.4,220.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#7BBE72").s().p("AAAgVQAJAYgJATQgIgYAIgTg");
	this.shape_190.setTransform(340.5,221);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#7BBE72").s().p("AgPAEIgDgEQARgJAUANg");
	this.shape_191.setTransform(382,204.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#7BBE72").s().p("AgVAAQAYgIATAIQgMAEgKAAQgLAAgKgEg");
	this.shape_192.setTransform(398,204.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#7BBE72").s().p("AgVACQAKgGALAAQAGAAAPAEQgKAFgLAAIgVgDg");
	this.shape_193.setTransform(418.1,204.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#7BBE72").s().p("AgTgDIAjAAIAEADQgIAEgJAAQgJAAgNgHg");
	this.shape_194.setTransform(434.1,204.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#7BBE72").s().p("AACAEQgJAAgRgEIAbgEQANAAAJAEQgKAFgKAAIgDgBg");
	this.shape_195.setTransform(449.7,204.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#7BBE72").s().p("AACAEQgJAAgRgEIAbgEQANAAAJAEQgKAFgKAAIgDgBg");
	this.shape_196.setTransform(465.7,204.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#73BB67").s().p("AgIgQQADgVAPARIgCAMQgEAFABANQABANgGAGQgMgXAEgWg");
	this.shape_197.setTransform(439,306.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#7CBE72").s().p("AACgYIAAAyQgIgXAIgbg");
	this.shape_198.setTransform(408.4,137);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FEF8E4").s().p("AgwgDIBhAAQgYAHgZAAQgXAAgZgHg");
	this.shape_199.setTransform(303,272.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FEF8E4").s().p("AgwgDIBhAAQgZAHgYAAQgXAAgZgHg");
	this.shape_200.setTransform(319,272.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FEF8E4").s().p("AgwgDIBhAAQgYAHgZAAQgXAAgZgHg");
	this.shape_201.setTransform(287,272.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FEF8E4").s().p("AgwgCIBhgBQABADgCAEIgwAAQgdAAgTgGg");
	this.shape_202.setTransform(335,272.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FEF8E4").s().p("AgBAFQgdAAgUgHIBigCIAAABQAEADgCACQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIgkABIgLAAg");
	this.shape_203.setTransform(267.2,136.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FEF8E4").s().p("AgwgDIBhAAQgYAHgZAAQgXAAgZgHg");
	this.shape_204.setTransform(251,136.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FEF8E4").s().p("AgwgDIBhAAQgYAHgZAAQgXAAgZgHg");
	this.shape_205.setTransform(235,136.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FEF8E4").s().p("AgwgDIBhAAQgZAHgYAAQgXAAgZgHg");
	this.shape_206.setTransform(219,136.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FEF9E5").s().p("AgwgDIBhAAQgZAHgYAAQgXAAgZgHg");
	this.shape_207.setTransform(183.1,136.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FEF8E4").s().p("AgwgDIBhAAQgYAHgZAAQgXAAgZgHg");
	this.shape_208.setTransform(167.1,136.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FEF8E4").s().p("AgwgDIBhAAQgZAHgYAAQgXAAgZgHg");
	this.shape_209.setTransform(151.1,136.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FEF8E4").s().p("AgygCIBhgBQAGACgCABQAAABgBABQAAAAAAABQgBAAAAABQgBAAAAAAIgwAAQgeAAgUgGg");
	this.shape_210.setTransform(131.3,136.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FEF9E5").s().p("AgwgDIBhAAQgZAHgYAAQgXAAgZgHg");
	this.shape_211.setTransform(115.1,136.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FEF8E4").s().p("AgwgDIBhAAQgZAHgYAAQgXAAgZgHg");
	this.shape_212.setTransform(99.1,136.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#3A8B2C").s().p("AgUABQAKgIAKAAQAHAAAOAGQgJAJgLAAQgFAAgQgHg");
	this.shape_213.setTransform(314,24.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FEF8E4").s().p("AgwgDIBhAAQgYAHgZAAQgXAAgZgHg");
	this.shape_214.setTransform(83.1,136.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FEF8E4").s().p("AgwgDIBhAAQgYAHgZAAQgXAAgZgHg");
	this.shape_215.setTransform(51.1,136.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FEF8E4").s().p("AgwgDIBhAAQgZAHgYAAQgXAAgZgHg");
	this.shape_216.setTransform(35.1,136.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FEF8E4").s().p("AgwgDIBhAAQgYAHgZAAQgXAAgZgHg");
	this.shape_217.setTransform(19.1,136.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#3B8C2D").s().p("AAAAHQgMgFgGAAQAHgIALAAQAGgBANAEQgGAKgLAAIgCAAg");
	this.shape_218.setTransform(394.1,250.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#3A8B2C").s().p("AAAAHQgMgFgHAAQAIgHALgBQAHgBANAFQgHAJgKAAIgDAAg");
	this.shape_219.setTransform(178.1,24.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#3B8C2D").s().p("AgXABQANgHAKAAQAKAAAOAGQgNAHgLAAQgJAAgOgGg");
	this.shape_220.setTransform(462.1,182.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FEF8E4").s().p("Ag2gBQATABAjgEQAhgCAWALIg3ABQggAAgWgHg");
	this.shape_221.setTransform(199.6,136.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#7BBE72").s().p("AgBAmIAAhLIADAEIAABHg");
	this.shape_222.setTransform(408.6,203.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#7BBE72").s().p("AgCAIQgIgGAJgCIAAgvQAGAhACAOQACAbgJAVg");
	this.shape_223.setTransform(340.2,272.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#65B454").s().p("AgDAdQgZgWAGgXQACgHAHgFQAcATAKAmg");
	this.shape_224.setTransform(441.5,307);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#76BC69").s().p("AgJAeIAAhDIAJgCIAJACIABBNg");
	this.shape_225.setTransform(446,307);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#F06EBD").s().p("AgTgcIASgKQAIgFAHAFQAIAFgCALQgBAHgFANIgOAsg");
	this.shape_226.setTransform(451.1,294.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#96CC88").s().p("AgYAQQAFgFARgcQAKgVARgHQAAAXgJAXQgFAPgOAeg");
	this.shape_227.setTransform(449.5,309.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#67B555").s().p("AgXAjQgEgXALgYIAVgsQARgMACAKIgBASQgIA+gVApQgPgGgCgWg");
	this.shape_228.setTransform(451.5,310.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#3D7636").s().p("AgmATQAEgNgGgLIgOgXIAtgBQAXACASAHIAQAHQAHAGAAAHQgBAKgHAGQgFADgKAEQgTAHgOAAQgUAAgRgLg");
	this.shape_229.setTransform(456.7,320);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#F84DAC").s().p("AgaBDIAAiJQAKgCAHAKQAJANACABQAVAMADAUQACANgFAZQgBAjgmANIgEABQgEAAgCgEg");
	this.shape_230.setTransform(448.8,296.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#F588CB").s().p("AANBGQgegQgLgqQgHgvgKgXQAEgBAiAEQAUADAKgSQATApADAaQAFAjgUAgQgEAHgHAAIgGgBg");
	this.shape_231.setTransform(443.6,296.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#149157").s().p("AhDAsQgOgBgFgCQgKgDgEgLQgDgJAFgIQABgEAJgIQAjgoA7AAQA9AAAZAoQAPAXgIALQgGALgbABg");
	this.shape_232.setTransform(319.5,235.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#149057").s().p("AgjArQgYgBgQgDQgQgCgHgJQgHgLAJgQQAYgoBEgEQBDgEAbAmQARAXgHANQgGALgbADQgNACgTgBIghAAIAAACIglgBg");
	this.shape_233.setTransform(47.5,35.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#98C452").s().p("Ah4BLQgfAAgIgZQgEgMAGgLIARgSQAcgcASgJQAcgOAhAKQAMAEANgMIAWgVQAKgLAKgCQANgCAQANIAKABQAKgBAKALIAAACQAVACALAWQACAFAAANQABAJADAGIADgBQAXAQACAEQAJAMgSASQgVATgSAAg");
	this.shape_234.setTransform(437.7,316.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#97C353").s().p("ABRBFIhSAAIAAAAIhzgBQggAAgGgZQgFgXAVgQQAfgcARgKQAegTAhAPQAIAEAIgHIAMgLQAggVAdAGQAdAFAWAgQAEAHAIAPQAGAIASAOQANAPgJASQgKAUgWACIgoAAg");
	this.shape_235.setTransform(31.9,48);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#98C452").s().p("AgDBHIAAgBIhtAAQggAAgIgYQgFgNAFgLQAEgJAMgKQAhgeANgIQAcgQAgALQAKADALgIIARgNQAhgRAbAHQAcAIASAfIAFALQADAHADAEQAHAHARAPQAMAPgKASQgJASgUADIglACg");
	this.shape_236.setTransform(303.8,248.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#7CB94D").s().p("AjcEpQgpgBgTgWQgTgWAAgrIAAmiQAAgrATgVQAUgWApgBQDVgEDgAEQArABAUAXQATAVAAAuIAAGcQAAAsgSAWQgTAXgpAAQhyADhzAAQhpAAhsgCg");
	this.shape_237.setTransform(374,306);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#7BB94D").s().p("AjbEpQgpgBgUgWQgSgVgBgsIAAmhQABgsASgVQAUgWApgBQDigEDYAFQBMABABBTIAADVIAADSQgBBThMABQhyADhzAAQhpAAhsgCg");
	this.shape_238.setTransform(170,102.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#7CB94D").s().p("AjbEpQgqgBgTgWQgTgVAAgsIAAmhQAAgsATgVQATgWAqgBQDhgEDZAFQBMABABBTIAADVIAADSQgBBThMABQhyADhzAAQhpAAhsgCg");
	this.shape_239.setTransform(374,102.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#7CB94D").s().p("AjdEoQgpAAgTgXQgSgWAAgsIAAmgQABhVBQgCQDagEDbAEQArABATAXQATAWAAAtIAAGcQgBAsgSAWQgSAXgpAAQhvADhvAAQhtAAhwgDg");
	this.shape_240.setTransform(442,238.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#31932F").s().p("AjPErQhhgBgCheQgEjMAEjLQAChdBhgCQBGgBCKABIDMAAQBlACABBfQAEDJgEDKQgBBghlABIjNAAIjPAAg");
	this.shape_241.setTransform(34.1,102.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#31932F").s().p("AjNErQhkgCgBhgQgEjJAEjJQAChgBkgBQDMgBDMABQAzABAaAYQAaAZABAzQADDFgDDIQgBAygbAZQgaAXg0ABIjKAAIjNAAg");
	this.shape_242.setTransform(442,34.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#31932F").s().p("AjPErQhhgBgCheQgEjMAEjLQAChdBhgCIDQAAIDNAAQBkACABBfQAEDJgEDKQgBBghlABIjNAAIjPAAg");
	this.shape_243.setTransform(238,34.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#7BBE72").s().p("AgcgDIA5AAQgLAGgSABQgSgBgKACg");
	this.shape_244.setTransform(3,272.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#7BBE72").s().p("AgTAEIAAgIIAnAAIAAAIg");
	this.shape_245.setTransform(2.1,68.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FEF9E5").s().p("AgmAEIAAgIIBNACQgQAGgXABIgmgBg");
	this.shape_246.setTransform(4.1,136.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#E8D8BC").s().p("AgEAcIAAg3IAIAAIAAA3g");
	this.shape_247.setTransform(204.6,337.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#E8D8BC").s().p("AgDAcIAAg3IAIAAIAAA3g");
	this.shape_248.setTransform(272.6,337.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#E8D8BC").s().p("AgDAcIAAg3IAIAAIAAA3g");
	this.shape_249.setTransform(136.6,337.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#50A945").s().p("AlPFOQgGgHAAgUIAAp8QAKgGAUABQAVABAJgGIBRAAQAoAMAngMIBRAAQAoAMAlgMIBRAAQAoAMAngMIBRAAQAKAGAVgBQAVgBAKAFQAGAQgHAPIgCJ+IqFABQgVAAgGgGg");
	this.shape_250.setTransform(34.3,306.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#53A84A").s().p("AETFhQgagGgNgBQgWgDgSAFQgeADgygDQgvgGggAGQgeADgwgDQgvgGghAGQgoACgpgCQgSgEgXADIgoAGQgSAEgQgKQgIgFgRgSIAAqmIIaACICMACQAGAFgBAIIABAgQAAATgEAMIAABQQAJAogJAoIAABQQAJAmgJAoIAABQQAJAogJAoIAAB4IgFAIQgRAXgbAAIgOgCg");
	this.shape_251.setTransform(34.4,239.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FEF4D5").s().p("AQDVRQgEgJgBgLIAAgSIAAgNIgBANIABASQgBALgEAJIqeAAQgEgJgBgLIAAgSIAAgNIgBANIABASQgBALgEAJIqcAAQgEgIgBgLQABgJgBgKIAAgNIgBANIABATQgBALgEAIIqoAAQgTgOgDgZQgBgIABgjQAFjpgFk3QABgbARgLQARgKgNgDQgPgDAEgEQgMgWgBggQABgkgBgTQABgtgBgtIAAhKQABgrgBgsIAAhJQABgsgBgsIAAhLIAEglQAEgUAQgKQAIgIANAAQgGAAgDgCQgIgEgFAIQgHAJgFgBQgLAGgPACIgbABQkPACkPgCQgbAAgMgDQgVgFgMgQIAAqcQANgHAbACQAcABAMgEIA8AAQAyAIAygIIA8AAQAyAIAygIIA8AAQAyAIAygIIA8AAQAKAEAVgBQAUgBAKAGQAqgPA5AHQAyAIAygIIA8AAQAyAIAygIIA9AAQAxAIAygIIA8AAQATAEAdgBIAvAAQAIAAAIADQASgJAaAAQAPAAAeADQAyAIAygIIA8AAQAyAIAwgIIA9AAQAxAIAygIIA8AAQARAFAmgCQAlgBASAGQASgLAbAAQAPAAAeADQAyAIAxgIIA9AAQAyAIAxgIIA9AAQAyAIAxgIIA9AAQARAEAbgBIAtAAQAQACAPgBQgKAAgGgCIgFgEIAChkQAJgogJgoIAAhQQAJgogJgoIAAhQQAJgogJgoIAAhQQAJgogJgoQgJgXANAAQAHAAAOAEIFFgBIEnAAQATgBAIAGQAJAHAAAUIgCKIQgDAFACAFQABHLACCZQABAkgMAMQgMALglAAQh/gCizAAIkzAAIgDgCIgBgDQAAgBAAAAQAAAAAAAAQAAABgBABQAAABAAABIgEAEQgCAEADADIACKdQgBAGADgBIAEgEIBbABQAyAIAxgIIA9AAQAyAIAxgIIA9AAQAyAIAxgIIA9AAQAQAFAigBQAigCARAFQAIAUgIAWIgBJ2gAP+U9IAAAAgAFWU9IAAAAg");
	this.shape_252.setTransform(170.3,203.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#50A945").s().p("AP8akQgTgPgEgYQgCgJAAgjQgBliABiyQgBgiAZgXIACgEIgHAHQgSAPgaAEQgOACgigCQgigEgdAEQgxAFgxgFQgfgEgfAEQgxAFgxgFQgfgEggAEQg2AFgugFIgvgHQgcgEgSgHQgJgDgGgJQgKgQgDgVQgCgOAAgaQgBitABlaQAAgwAMgZQAEgLAQgKQASgKAbgDIAvgCIHFAAQBAAAATgTQATgUABhAIAAm0IAAgtQABgaADgTQABgXgBgMQgFhdAAiSIABjvQABg8gCgeQgCgqgQgQQgRgRgqgBIiLgBIiMABIi9AAQgZAAgKACQgSAEgMANQgJALgCATIgEAgQgGAjAHAoQAFApgFAmQgHAoAHAoQAFAogFAoQgHAoAHAoQAFArgGAoQgDARgDAjQgEAfgOATQgTATgcAFQgUAEgigCQgjgEgdAEQgyAEgxgEQgfgFgfAFQgvAEgxgEQgfgFgfAFQgrAEg1gEQgqgIgzAJQhDACgsgEQgfgEgeAFQgwAEgxgEQgfgFgfAFQgxAEgxgEQgegFggAFQgwAEgwgEQgMgEgjgBQgegBgQgJQgFgLgBgOQgBALgGAGQgSASgaAEQgPACgjgBQgjgEgcAEQgxAEgygEQgfgFgfAFQgwAEgygEQgegFgfAFQgsAEg0gEQgngIg+AKQgnACgcgFQgcgEgfAFQgwAEgwgEQgfgFgfAFQgxAEgxgEQgfgFgfAFQgxAEgxgEQgcgEgkADQgyAHgbglIAAqeQAHgEAKgBQgKgBgHgEIgBqAQAAgZAHgIQAIgIAaAAMA/6AABIJTgBQAVAAAGAGQAGAGAAAVQgBaCABaBQAAAXgHAHQgHAFgWAAI0sAAg");
	this.shape_253.setTransform(238,170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,476.1,340.1);


(lib.goal_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A29892").s().p("AgTAWIAAgsIAUgBQAMABAHAIQABAWgIAJQgHAHgJAAQgHAAgJgCg");
	this.shape.setTransform(34.2,37.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A29892").s().p("AgXgEIAvACQABACgCAEIguABg");
	this.shape_1.setTransform(11.5,35.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ACACAC").s().p("AgDgWQADgBAEACIAAAsIgHAAg");
	this.shape_2.setTransform(16.6,37.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A29892").s().p("AgXgEIAvABQABAEgCADIguABg");
	this.shape_3.setTransform(26.5,35.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6ADB6").s().p("AgNAHQAKgSARACQgGAKgEAEQgEAFgEAAQgEAAgFgDg");
	this.shape_4.setTransform(37.4,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ACACAC").s().p("AgIgWIAIAAQAUAWgUAWIgIABg");
	this.shape_5.setTransform(32.2,37.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A29892").s().p("AgWAEQgCgDABgEIAvgBQACAEgCAEg");
	this.shape_6.setTransform(41.6,35.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ACACAB").s().p("AgDAWIAAgsQADgBAFABIgBAtIgEAAg");
	this.shape_7.setTransform(51.5,37.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6E6E5").s().p("AgXAFIAAgJIAvAAIAAAKg");
	this.shape_8.setTransform(11.5,40.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A29892").s().p("AgWAEQgCgDABgEIAvgBIAAAJg");
	this.shape_9.setTransform(56.6,35.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AE9B90").s().p("AAYAFIgvAAQAXgVAYAVg");
	this.shape_10.setTransform(11.5,28.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AE9B90").s().p("AAYAFIgvAAQAXgUAYAUg");
	this.shape_11.setTransform(26.5,28.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AE9B90").s().p("AgXAFQAXgUAYAUg");
	this.shape_12.setTransform(41.6,28.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AE9B90").s().p("AgXAFQAXgUAYAUg");
	this.shape_13.setTransform(56.6,28.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6E6E5").s().p("AgXgEIAvAAIAAAJIgvAAg");
	this.shape_14.setTransform(56.6,40.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E6E6E5").s().p("AgXgEIAvAAIAAAJIgvAAg");
	this.shape_15.setTransform(41.6,40.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E6E6E5").s().p("AgXAFIAAgJIAvAAIAAAJg");
	this.shape_16.setTransform(26.5,40.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F5A9B3").s().p("AgJgDQgBgKAUgEIAAARIgJASQgJgSgBgDg");
	this.shape_17.setTransform(28.9,18.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AF9D91").s().p("AgbAEQAcgUAbAUIgwACg");
	this.shape_18.setTransform(49,28.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E9E9E9").s().p("AgcgZIAPAeQALAOAVgIQAFgFAEAFIABAOIg4ABg");
	this.shape_19.setTransform(49,38.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E7E7E7").s().p("AgcAZIAAgOIAKgIQAJgCAKgLQALgMAJgDIAIAAIgCAzg");
	this.shape_20.setTransform(34.1,38.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E8DED8").s().p("AgXAHIAAgTIAvABIAAARQgLAHgNAAQgKAAgNgGg");
	this.shape_21.setTransform(56.6,34.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E8DED8").s().p("AgYAIIAAgTIAxABIgBARQgMAFgMAAQgLAAgNgEg");
	this.shape_22.setTransform(41.6,34.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E8DED8").s().p("AgXAGIgBgRIAxgBIAAATQgOAGgLAAQgMAAgLgHg");
	this.shape_23.setTransform(26.5,34.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E8DED8").s().p("AgXAHIAAgRIAvgBIAAATQgOAEgKAAQgNAAgKgFg");
	this.shape_24.setTransform(11.5,34.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E6DED9").s().p("AgcAdIAAgXQAaAGAKgIQAPgHgCgcQAKAOgCARQgBAKgKASIglABQgCADgDAAQgCAAgCgDg");
	this.shape_25.setTransform(19.1,32.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DFDAD7").s().p("AATAeIguAAIgBg8QAGgGACAIQgCAbAOAHQAKAHAagGIABAXQgDADgCAAQgCAAgDgDg");
	this.shape_26.setTransform(49,32.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E7E7E7").s().p("AAPAGQgKgQgiAIIAAgOQAEgGAFAGQAqAMgBgxQAJAiAAATQABAegPAYQAIgigJgOg");
	this.shape_27.setTransform(19.2,41.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E0DBD8").s().p("AgSAfIgKgIIAAgXQA0ANgEgyQAJANAAAWIgBAiQgEAEgHACIgFAAQgOAAgQgHg");
	this.shape_28.setTransform(34.2,32.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A9A8A8").s().p("AgXASIAAgnQAXgLAXALIABAmQgMALgMAAQgLAAgMgKg");
	this.shape_29.setTransform(11.5,31.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A9A8A8").s().p("AgYASIAAgnQAYgLAYALIABAmQgNALgMAAQgLAAgNgKg");
	this.shape_30.setTransform(26.5,31.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A9A8A8").s().p("AgYAQIABgmQAXgLAYAMIABAmQgNALgMAAQgLAAgNgMg");
	this.shape_31.setTransform(41.6,31.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ACACAB").s().p("AgQAZQgHgGgCgkQALgJAOABQAJAAAPAFIABAlQgYAJgJAAQgFAAgDgBg");
	this.shape_32.setTransform(49.3,31.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A9A8A8").s().p("AgXAQIAAgmQAYgLAXAMIAAAmQgMALgMAAQgLAAgMgMg");
	this.shape_33.setTransform(56.6,31.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A29892").s().p("AgSAcQgGgLAAgPQAAgHAEgSQAUgQATASIAEAKQAJArggAAQgGAAgMgEg");
	this.shape_34.setTransform(19,37.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A09F9F").s().p("AgXAWIAAgmQAXgWAXAWIABAlQgLAHgNAAQgKAAgNgGg");
	this.shape_35.setTransform(11.5,37.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A09F9F").s().p("AgXAWIAAgmQAXgWAXAWIABAlQgLAHgNAAQgKAAgNgGg");
	this.shape_36.setTransform(26.5,37.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A09F9F").s().p("AgXAVIABglQAWgWAYAWIAAAmQgNAGgLAAQgMAAgLgHg");
	this.shape_37.setTransform(56.6,37.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A09F9F").s().p("AgXAVIABglQAWgVAYAVIAAAmQgNAGgLAAQgMAAgLgHg");
	this.shape_38.setTransform(41.6,37.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A29892").s().p("AgOAaQgGgIgGgdIABgIQAXgYAYATQAFAMAAAMQAAAKgDARQgOAGgKAAQgIAAgGgHg");
	this.shape_39.setTransform(48.8,37.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ADACAB").s().p("AgXAPQgIgfASgHQAIgDAfAEQACAmgJAHQgDACgGAAQgKAAgXgKg");
	this.shape_40.setTransform(33.6,31.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#366BAD").s().p("AgIA1IAAhpIARAAIAABpg");
	this.shape_41.setTransform(34,54.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AF9D91").s().p("AgYATQAAgoAHgFQAHgFAjANQACAlgKAHQgDADgGAAQgKAAgWgKg");
	this.shape_42.setTransform(18.7,31.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F0EBEC").s().p("AglAIIABgVQARgLAUAAQAOABAaAGIABAOIhPAcQgIgJAIgIg");
	this.shape_43.setTransform(33.8,15.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A6A3A2").s().p("AgYAEIABgaQAYgXAXAXIABAcQABAOgFAGQgFAIgOAAIgBABQgbAAACgfg");
	this.shape_44.setTransform(11.5,43.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B0AEAC").s().p("AgXAWQgHgNAEgeQALgLALgCQALgDAJAKQAWAYgTAmIgPABQgTAAgIgOg");
	this.shape_45.setTransform(18.9,43.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A6A3A2").s().p("AgYAEIABgbQAXgWAZAXIAAAbQABAOgEAHQgGAIgOAAIgBAAQgbAAACgeg");
	this.shape_46.setTransform(26.5,43.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A6A3A2").s().p("AgBAiQgOAAgGgIQgEgHABgOIAAgbQAYgXAYAWIABAbQACAegbAAIgBAAg");
	this.shape_47.setTransform(56.6,43.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A6A3A2").s().p("AgBAiQgOAAgGgIQgEgHABgOIAAgbQAYgXAYAWIABAcQACAdgbAAIgBAAg");
	this.shape_48.setTransform(41.6,43.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B0ADAC").s().p("AgEAiQgVgCgCgUQACgVgCgKQAbgeAcAcQgCAMACAaQgCASgXAAIgHgBg");
	this.shape_49.setTransform(49.1,43.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B0AEAC").s().p("AgbAUIAAgoQAbgeAbAfQgBAJACAVQgBASgSAEQgIACgFAAQgTAAgEgPg");
	this.shape_50.setTransform(34.1,43.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F8F0F2").s().p("AgPAlQgIgEgWgUQgKgMAOgNQAZgRAPgFQAVgJAXAIIAIAyQgFACgJAHQgJAHgGACQgMAHgKAAQgHAAgIgDg");
	this.shape_51.setTransform(33.7,18.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFBFB").s().p("AglAYIgDgBQgDgWANgPQAMgPARgCQAPgDANAPQANAOABAUIgBAFQgWAMgUAAQgRAAgSgIg");
	this.shape_52.setTransform(34,11.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4B78B5").s().p("AgtAxIACgaQAAgOgBgJQgEgbAKgKQAKgLAcABQAcgBALALQAKAKgEAbQgBAJAAAOIACAag");
	this.shape_53.setTransform(53.6,53.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4B78B5").s().p("AgtAxIACgaQABgOgCgJQgEgbALgKQAKgLAbABQAcgBALALQAJAKgDAbQgBAJAAAOIABAag");
	this.shape_54.setTransform(14.6,53.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#507BB9").s().p("AgcA0QgCgGgHgDIgMgFIADgTQADg7ALgJQALgKA7AEQAMAYAAAdQgBAVgHAgQgQAGgTAAQgPAAgUgFg");
	this.shape_55.setTransform(29.2,55);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#507BB9").s().p("AgnAzQgag7AegvQA8gEALAKQAKAJAEA7IACATIgMAFQgGADgCAGQgUAFgQAAQgTAAgQgGg");
	this.shape_56.setTransform(38.7,55);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("ADwDjQgMgJgEgQIgEgeQgFgXgXACQgTAAgEAVIgFAeQgDAQgNAJIgyAAQgNgMABgIQACgmgXgOQgQgJgngBIgUAAQgmABgQAJQgYAOADAmQAAAIgNAMIgyAAQgMgJgEgQIgEgeQgFgXgXACQgTAAgEAVIgFAeQgDAQgNAJQgRAEgIgGQgJgGAAgTQACiSgCiRQAAgSAHgHQAHgHASABIA0AAQAhgBATACQAjADAOgMQAQgOgFgiQgHgxAsAIIAGAEQAFAIgDALIgFAOQgBAIAGAGQARAYAdgEQAPgFACgKQABgJgBgMIgCgWQABgGACgGQADgGAGgDQAYAAAJAOQAHALgBAYQgCAfAOAOQAOAOAggCQAQgCAfABQAgABAPgBQAYgCAKAIQAKAJgBAZQgBBJABDHQAAAXgEAHQgFAIgMAAQgFAAgIgBg");
	this.shape_57.setTransform(34.1,36.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#223121").s().p("Ag1E1IhxgPQhDgJgsgNQgOgHgBgPIABgbQgBjNABhJQABgGgKgiQgHgYAMgLQAOgOAcACIAxADQAIgBAOAAIAWABIAUgBQAJgDgFgSQgDgKAJgKIARgPIBshvQAHgKAKAJIBjBkIAIAHQAEAEABADQAOAvApAIQAHACBGgDQAhgBAJAKQAJALgEAkQgGA8AABaIAACYIACAdQgBARgPAIQgVAJgHAAIibAXQg3AJgsAAQgdAAgZgEg");
	this.shape_58.setTransform(33.8,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.4,2.7,60.9,62.7);


(lib.goal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CAD7DD").s().p("AgXAZIgBgKQApAHgDguIALAoIgDAJg");
	this.shape.setTransform(37.7,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D4DFE2").s().p("AgXADIABgLQAWgLAXALIABAKQgNANgLAAQgMAAgLgMg");
	this.shape_1.setTransform(37.6,35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7E1E3").s().p("AgXAFIAAgUIAngBIAIABIAAATQgOANgLAAQgMAAgKgMg");
	this.shape_2.setTransform(47.5,34.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CA3032").s().p("AgXAGQgEgFgBgFQABgGAGgEIAngDIAHADQAJAKgJAKQgOAMgLAAQgMAAgLgMg");
	this.shape_3.setTransform(42.5,34.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C13438").s().p("AgbAGIADgWIAsABIACgBQAFAGABAGQgCAFgEAEQgNAMgKAAQgNAAgNgLg");
	this.shape_4.setTransform(32.9,34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C8D8DD").s().p("AgaAFIACgVIAwAAQAIAPgLAHQgMALgKAAQgNAAgMgMg");
	this.shape_5.setTransform(27.9,34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBF8FA").s().p("AgPAgIgHgGIAEg6IAlgBIAAAUQAGAagEAKQgEALgRAAQgFAAgKgCg");
	this.shape_6.setTransform(37.2,30.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E45A5F").s().p("AgHAgQgLgHgFgNQgCgFgEgSQAAgNAKgKIAlABIAMA3QgJANgOAAQgHAAgHgDg");
	this.shape_7.setTransform(41.3,30.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EA5D5D").s().p("AgZAeIgGgHIAOgxQARgLAUADQAXAcgUAdQgNANgNAAQgKAAgMgGg");
	this.shape_8.setTransform(33.2,30.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0EAE8").s().p("AgfAYIgDAAIAXg5IAUgDQAMAAAHALQAKAQgEAMQgEANgOANQgMAIgJAAQgOAAgMgNg");
	this.shape_9.setTransform(28.6,30.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC605F").s().p("AghAdIAeg5IAfAAQASApgpAQg");
	this.shape_10.setTransform(24.4,30.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3F1F2").s().p("AgCAhQgJAAgHgGQgbghAVgcIAAAAIAmAAIAUA4QgJANgQAAQgGAAgFgCg");
	this.shape_11.setTransform(45.7,30.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EB5C61").s().p("AgQAdQgegdAPgeIAlAAIAfA5IgoABQgDADgEAAQgDAAgDgCg");
	this.shape_12.setTransform(50.4,30.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0D8CD").s().p("AgWACQgHgKAPgPQAHAJALABIAWABIgCAbIgbAJQgRgRgCgFg");
	this.shape_13.setTransform(17.7,34.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C93537").s().p("AgDAUQgMgCgGgLQgJgKAKgMQAQgLAXAOIAHABIAAAdIgJADIgUgBg");
	this.shape_14.setTransform(52.2,34.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C93638").s().p("AgXAQIgBABQgMgRAOgKIAHgCQAPgOASAHQAHADAEAHQAEALgJAIQgMAMgZAAg");
	this.shape_15.setTransform(22.6,34.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0E5C8B").s().p("AB5AgQh3gJh6AIQgcACgJgKQgIgIADgYQADgNANgCIAWgCQAfADASgDQAhACARgDQALABAlgFQATAEAfgEQALACAPAAIAZgCIAWAGQANAEAEALQADAYgHAJQgHAJgWAAIgJAAg");
	this.shape_16.setTransform(37.6,37.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DB9245").s().p("AgKgTIAVACIgIATQgDAOgKAEg");
	this.shape_17.setTransform(18.4,28.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E88054").s().p("AgCANQgIAAgkgFQgSgBgJgLQgEgBgSgBQgNgBgIgFIDoAAIAAAJIgFADQgGAGgLACIgTABQgWADgOgDIgVADQgKABgHAAIgDAAg");
	this.shape_18.setTransform(31.5,27.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F7F5F0").s().p("AgbAmQgMgEgBgQIALgSQAEgEACgTQACgPAPgBIACAAQAFADAPAAQAPAAAHAEQAHAUgKAQQgEAGgVAYQgHAEgGACQgVgBgDgBg");
	this.shape_19.setTransform(20.3,30.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E88055").s().p("Ag1ACQgGgDAAgJIB3AAIgBAHIgoABQgGAHgKADQgFACgNABIgJAAQgQAAgNgJg");
	this.shape_20.setTransform(49.1,27.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E2DDD7").s().p("AgRAOIgBABQgLgPALgOIAqgBQABAYgGAFQgDACgLAAIgWgCg");
	this.shape_21.setTransform(56.8,34.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FBF8F8").s().p("AAEAmQgFAAgJgFQgUgTgGgLQgKgRAKgWIATgCQAMAAAGAEIApA7QgKAOgTAAIgJgBg");
	this.shape_22.setTransform(55,30.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#31AF4F").s().p("AgTCjIAAlEIATAAQAOAHAEAOQACAIAAAWIAAERg");
	this.shape_23.setTransform(11.1,36.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E87C32").s().p("AgPghQAHgQAPADIAGAEIADBYIgdABg");
	this.shape_24.setTransform(18.9,40.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7CC04B").s().p("AggCKQgDgMAAgUIgBkJIABgFIA4ADIAEAdIgBAeQANAQgCATQgBAMgHAQQgGAMAHASQAJAUAAAHIAAAkQgBAUgLANIgCBNIgmABQgMgLgFgQg");
	this.shape_25.setTransform(14.8,36.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2D79B4").s().p("Ai1AIQAAgGAGgjQAEgGAHgEQATAaAiAEQAUADApgCQAhACCBAAQAWAAAJgEQAQgFAFgRQAEgGAIgCIAGADIgCBVIlVABQgTgOgBgXg");
	this.shape_26.setTransform(36.7,40.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CA8034").s().p("AgFAeIgmgEQAYgqAGgFQAUgWAlAVQgZgBgEARQgCAIABAXIgDAGQgEACgEAAQgDAAgFgDg");
	this.shape_27.setTransform(9.7,17.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#896F71").s().p("AArAMIjrgBQgPgBgJgJQgGgGAIgHIGxACQABAEgBAFIg5ABQgXANgkAAQgogDgUACg");
	this.shape_28.setTransform(38.9,26.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F3BC56").s().p("Aj8ATQgKghAGgIQAFgIAhgBQAKALAQACQAKABAUgBIGlACImjAEQgXAAgGADQgLAHAKAVQgPANgPAAQgQAAgQgNg");
	this.shape_29.setTransform(36.1,18.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EE7932").s().p("AgXBfQgMgPAAgWIAEgnQABgKATgJQAOgIgBgNQgCgHgQgYQgNgSAEgRQAEgHAHgBQAJABAPgCQAQgBAKAHIAAC7g");
	this.shape_30.setTransform(57.2,35.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#516088").s().p("Ai1ARQgVgBgMgIQgNgMANgMIG0ACIgDARQgNAOgcAAIjRAAIiWAAg");
	this.shape_31.setTransform(38.9,24.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1F974B").s().p("AgbigQAbgQAQASQANAVAAAgIAADZQAAAmgUARIglACg");
	this.shape_32.setTransform(8.1,36.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F4F4F4").s().p("AEEAWIkVAAIjwAAQgTAAgGgEQgKgGAFgRQAPgQAYABQASgEAYAEQAUgCATAPIG1AAIAOADQAGAEAAAHQgBAOgLACIgSgBg");
	this.shape_33.setTransform(34,53.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FAFAF9").s().p("Ai/AnQgQAAgNgGQgQgMgBgVQgGgaAOgIQAIgEAbAAIDRABQCAAABTgCIAOAkQACASgZAMQgPAMgbAAIjUABIiagBg");
	this.shape_34.setTransform(39.4,20.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EA4445").s().p("Ai7A5QgKAAgNgJQghgmAcguQANgPAXAAQCBgJDWAHQAZAAAJABQASADALANIACBNQgKAQgYAAIl+AAg");
	this.shape_35.setTransform(38.2,48.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#939596").s().p("Aj1ACQgXgEgHgCQgQgIgHgPIJVgCQgUAYgiAIQgJADg2AJQhgAPhaAAQh8AAh1gcg");
	this.shape_36.setTransform(34,60.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1A2B1C").s().p("Aj1D7QgjgBgVgOQgKgKgBgPIABgbIABiCQAAhMgDg0QgDgsAQgqQANggAdgrQAPgVAOgBQAPAAAMAXQAMAXAUAJQAQAGAeAAIFwgBQAtAAARAZQASAagVAoQgLATgDAXQgBALgBAfQgBApABBXIAAAlQADAVANAQQAJAJgCARQgDARgMALQgfAVg3AAQiYADhKAAIgeAAQhxAAhVgHg");
	this.shape_37.setTransform(34.4,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,8.6,63,55.4);


// stage content:
(lib.stage_1_1_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;