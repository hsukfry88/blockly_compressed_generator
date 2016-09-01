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

        // <Layer>
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


    (lib.mainBG = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#7DBCD3").s().p("AgaAaQgJgIAAgSQABgSAJgGQAIgGARAAQASAAAIAGQAKAHgBASQAAASgKAHQgHAGgSgCIgHABQgMAAgHgFg");
        this.shape.setTransform(242.7,120.1);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#76B7D0").s().p("AgaAZQgKgHAAgSQAAgUAMgGQAIgEASABQATgCAJAIQAIAJgBARQgBATgLAFQgGADgTAAIgDAAQgPAAgIgFg");
        this.shape_1.setTransform(233.6,120.1);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#7CBBD2").s().p("AgcAbQgLgHgBgUQAAgUAOgGQAFgDAWgBQAUAAAIAFQALAGAAATQABAWgNAGQgIADgWgBIgHABQgNAAgGgEg");
        this.shape_2.setTransform(252.3,120.1);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#99B181").s().p("AgXAEIAAgIIAvAAIAAAIg");
        this.shape_3.setTransform(233.6,109.6);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#99B181").s().p("AgXAEIAAgIIAvAAIAAAIg");
        this.shape_4.setTransform(252.6,109.6);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#63914D").s().p("AgIAEQADgUgBgBIAPgBQgGAJAAAJQABAGAEANIgBAAQgRAAACgPg");
        this.shape_5.setTransform(178.9,109.2);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#F5F8F4").s().p("AgJAEQACgMgCgGIASgBQAAAGABANQAAAMgKAAIAAAAQgJAAAAgMg");
        this.shape_6.setTransform(433.1,118.7);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#F2F6F2").s().p("AgIAWIgBgWQAAgNAJgIQAKAIAAANIAAAWg");
        this.shape_7.setTransform(433.1,124.9);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#F5F8F4").s().p("AgDARQgHgDgCgGQgBgFABgHQABgNALABQAQABgDASQgCAOgLAAIgDAAg");
        this.shape_8.setTransform(433.5,114.1);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FEFEFE").s().p("AgMADQgCgTAOAAQAPAAgBAQQAAAPgMACIgCAAQgLAAgBgOg");
        this.shape_9.setTransform(429.6,114.1);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FEFEFE").s().p("AgNATQgBgUADgHQAGgNATADQABATgDAIQgFAKgNAAIgHAAg");
        this.shape_10.setTransform(429.6,119.1);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#FEFEFE").s().p("AgMADQgCgTAOAAQAOAAAAATQAAAMgMACIgCAAQgLAAgBgOg");
        this.shape_11.setTransform(429.6,109.1);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#F5F8F4").s().p("AgBARQgMgCAAgPQABgPAMgBQANABAAAPQAAARgNAAIgBAAg");
        this.shape_12.setTransform(433.5,109.1);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FBFCFB").s().p("AgNAIQABgUgBgLQAYgBADARQABAIgBAXIgFAAQgUAAgCgQg");
        this.shape_13.setTransform(429.6,124.6);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#CFDECE").s().p("AAEAxIgJAAQgIgGgGgSQgFgTgKgFIAAgKQAHgFAHgOQAJgPAGgFIAJAAQAKALAKgMQAXAxgXAyQgLgPgJAOg");
        this.shape_14.setTransform(431.7,122.1);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#9AB282").s().p("AAZAEIg1AAIAKgIIAmAAIAJAJg");
        this.shape_15.setTransform(243,109.6);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#4EAA80").s().p("AgTAAIABgHIAmAAIAAAHQgKAIgKAAQgIAAgLgIg");
        this.shape_16.setTransform(229.1,111);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#54A87E").s().p("AAAAJQgGgBgNgIIAAgHIAngBIAAAIQgIAJgJAAIgDAAg");
        this.shape_17.setTransform(257.1,111);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#56A77A").s().p("AgSgJIAlABIAAAIQgSAJgDAAIgBABQgLAAgEgTg");
        this.shape_18.setTransform(248.1,111.1);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#54A77E").s().p("AAAAJQgEgCgOgHIgBgIIAmAAIABAIQgIAJgJAAIgDAAg");
        this.shape_19.setTransform(238.2,111.1);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#719D1D").s().p("AgXADQgGgDACgBQAAgBABgBQAAAAABgBQAAAAABAAQAAAAABAAIAAgBQAXgMAYAMIABABQAFACgCACQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQgNAKgNAAQgLAAgMgJg");
        this.shape_20.setTransform(233.6,110.7);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#719D1D").s().p("AgYADQgFgDACgCQAAAAABgBQAAAAABgBQAAAAAAAAQABAAAAAAIABgBQAXgMAYAMIAAABQAGACgCACQAAAAgBABQAAAAgBABQAAAAAAAAQgBAAAAAAQgNAKgMAAQgMAAgMgJg");
        this.shape_21.setTransform(252.6,110.7);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#769D21").s().p("AAEANQgDgBgWgLQgFgBABgCQABgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIgBAAQAYgMAZAMQgHATgNAAIgCAAg");
        this.shape_22.setTransform(242.5,110.8);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#749E21").s().p("AgQAKQgKgJAAgKIAwABQAGADgCADQgBABAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgQAKgRAAIgFAAg");
        this.shape_23.setTransform(224.8,111.1);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#F5F5F3").s().p("AhMA4Qg3AAgOgSQgPgTALg1QADgNAJgFQAHgDAOAAIDtAAQARAAAIAGQAHAIABARQAEA9gJAJQgKALg/gBg");
        this.shape_24.setTransform(242.9,120.1);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#FEFEFE").s().p("AgSAYQgCgaAFgKQAHgQAbAFQACAagFAKQgFAMgQAAIgNgBg");
        this.shape_25.setTransform(451.1,98.6);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#FBFCFA").s().p("AgPANQgFgKACgaQAbgFAIAQQAEAJgCAbIgMABQgQAAgGgMg");
        this.shape_26.setTransform(456.1,98.6);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#FEFEFE").s().p("AgSgXQATgBAHACQAMAGgBASQgBASgNADIgXABg");
        this.shape_27.setTransform(451.1,105.6);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#FBFCFA").s().p("AgGAWQgNgFABgSQACgSAMgDQADgBAUAAIAAAvIgJAAQgLAAgFgCg");
        this.shape_28.setTransform(456.1,105.6);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#FEFEFE").s().p("AgSAYIAAgvIAYAAQAMAEABASQABASgNAFQgEACgKAAIgLAAg");
        this.shape_29.setTransform(451.1,112.6);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#FBFCFA").s().p("AgGAWQgNgFABgSQABgSANgDQADgBAUAAIAAAvIgJAAQgLAAgFgCg");
        this.shape_30.setTransform(456.1,112.6);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#FBFCFB").s().p("AgSAdQgCgdADgLQAFgVAfAEQgBAOABAaQgDASgWAAIgMgBg");
        this.shape_31.setTransform(456.1,120.1);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#FEFEFE").s().p("AgSAMQABgbgBgNQAggFAEAWQADALgCAdIgMABQgVAAgEgSg");
        this.shape_32.setTransform(451.1,120.1);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#D1E0D0").s().p("AgWBoQgJgVgMgIIAAgVQAhgZghgYIAAgTQAigYgigZIAAgVQAKgHALgRQAMgTAGgGIAJAAQAGAGAMATQALARAKAHIAAAVQgiAZAiAYIAAATQgiAYAiAZIAAAVQgMAIgJAUQgLAYgHAHIgJAAQgIgHgKgXg");
        this.shape_33.setTransform(453.6,109.6);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#64AE61").s().p("AADgdIAAA7QgLgcALgfg");
        this.shape_34.setTransform(68.5,120.4);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#C4E89A").s().p("AAAgcQAJAhgJAYQgIgdAIgcg");
        this.shape_35.setTransform(340.6,120.3);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#A1D38E").s().p("AgSgDIAkAAIABAFIglACg");
        this.shape_36.setTransform(275,68.6);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#99B181").s().p("AgXgEIAvAAIAAAHIgvABg");
        this.shape_37.setTransform(261.6,109.6);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#C3E89A").s().p("AgDACQABgMgCgGIAJgKIAAA1QgHgLgBgOg");
        this.shape_38.setTransform(340.5,104.8);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#A1D38E").s().p("AADgdIAAA7QgKgdAKgeg");
        this.shape_39.setTransform(272.5,120.4);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#A1D38E").s().p("AAAgcQAJAagJAfQgIgdAIgcg");
        this.shape_40.setTransform(272.6,103.8);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#A1D38E").s().p("AgBgdQAKAdgKAeg");
        this.shape_41.setTransform(272.7,87.7);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#A1D38E").s().p("AgbACIAAgDIA3AAIgFADg");
        this.shape_42.setTransform(322.2,68.7);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#A1D38E").s().p("AgeADQAPgEAOgBQAOAAATAFg");
        this.shape_43.setTransform(306.6,68.5);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#A1D38E").s().p("AgdADQAdgLAeALg");
        this.shape_44.setTransform(289.7,68.5);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#A1D38E").s().p("AgGAAQgBgSAJgOQAKAFgKAEIAAA4QgHgVgBgMg");
        this.shape_45.setTransform(272.8,71.5);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#739F21").s().p("AgWACQgDgCAAgCIADgEQATgKAdAJQABAKgMAKIgCAAQgRAAgSgLg");
        this.shape_46.setTransform(261.5,110.8);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#8EA581").s().p("AgTAoIAAhYIAnAAIAABYQgMAJgIAAQgKAAgJgJg");
        this.shape_47.setTransform(243.1,105);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#708A63").s().p("AgQAyIgFgEIABhjIAmAAIAABZIAEAFQgBAGgGADQgJAEgGAAQgIAAgIgEg");
        this.shape_48.setTransform(229.3,105.5);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#708A63").s().p("AgJA0IgMgFQgDgHAFgEIAAhZIAmAAIAABZIAEAFQgBAHgHADQgGADgHAAQgEAAgHgCg");
        this.shape_49.setTransform(257.1,105.5);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#8DA480").s().p("AgSApQgegwAigqIAwAAIgBBYQgOALgOAAQgLAAgMgJg");
        this.shape_50.setTransform(232.7,105.1);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#8DA480").s().p("AgTApQgegvAigrQAagDAMAKQAOALgEAdIgBAUIAAAWQgNALgOAAQgLAAgNgKg");
        this.shape_51.setTransform(260.8,105.1);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#8DA480").s().p("AggAnIgBhYIAwAAQAiAqgdAvQgNAKgLAAQgOAAgOgLg");
        this.shape_52.setTransform(253.5,105.1);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#728C64").s().p("AgVAxQgHgDgFgHQgEgIgBgHQgDgdABgKQACgXAOgPIAvAAQAPAQACAWQACAPgGAZQgCAHgFAHQgFAHgIADQgJAFgIAAQgJAAgLgFg");
        this.shape_53.setTransform(238.6,105.5);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#728C64").s().p("AgNAtIgCABQgPgLgDgHQgIgZABgPQABgXAQgRIAvAAQAOAPADAWQABALgDAcQgCAJgDAHQgFAHgIADQgJADgIAAQgKAAgHgIg");
        this.shape_54.setTransform(247.6,105.5);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#7BBE72").s().p("AgBAYIAAgzIADAAIAAA3g");
        this.shape_55.setTransform(408.5,120.1);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#7BBE72").s().p("AADgaIAAA1QgMgaAMgbg");
        this.shape_56.setTransform(408.5,104);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#7BBE72").s().p("AADgdIAAA8QgKgeAKgeg");
        this.shape_57.setTransform(408.5,88.5);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#7BBE72").s().p("AgbACIAAgDIA3AAIgEADg");
        this.shape_58.setTransform(418.1,68.7);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#7BBE72").s().p("AgBAYIAAgzIADAAIAAA3g");
        this.shape_59.setTransform(408.5,72.1);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#7BBE72").s().p("AgcAAQAZgIAgAIQgQAEgNAAQgPAAgNgEg");
        this.shape_60.setTransform(401.9,68.6);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#7BBE72").s().p("AgBADQgIgBgVgEIA9AAQgOAFgPAAIgDAAg");
        this.shape_61.setTransform(386.4,68.7);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#7BBE72").s().p("AgcAAQAdgIAcAIQgRAEgMAAQgPAAgNgEg");
        this.shape_62.setTransform(369.8,68.6);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#7BBE72").s().p("AgcAAQAOgEAOAAQAKABATADQgOAFgPAAQgNAAgPgFg");
        this.shape_63.setTransform(353.9,68.6);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#9CD08C").s().p("AgcAFIgBgGIAvgDQACACAHAAQAFABgFAGg");
        this.shape_64.setTransform(338.3,68.6);

        this.shape_65 = new cjs.Shape();
        this.shape_65.graphics.f("#56AB46").s().p("AgJAMIAKgbIAJAKQABANgCAEQgCAEgFAAQgDAAgIgEg");
        this.shape_65.setTransform(172.9,113.7);

        this.shape_66 = new cjs.Shape();
        this.shape_66.graphics.f("#7BBE72").s().p("AAAgcQAKAagKAfQgIgdAIgcg");
        this.shape_66.setTransform(204.6,119.9);

        this.shape_67 = new cjs.Shape();
        this.shape_67.graphics.f("#7BBE72").s().p("AgfADQAQgEAOgBQAPAAASAFg");
        this.shape_67.setTransform(178.6,68.5);

        this.shape_68 = new cjs.Shape();
        this.shape_68.graphics.f("#7BBE72").s().p("AgdADQAdgLAfALg");
        this.shape_68.setTransform(161.7,68.5);

        this.shape_69 = new cjs.Shape();
        this.shape_69.graphics.f("#7BBE72").s().p("AgdADQAdgLAfALg");
        this.shape_69.setTransform(145.7,68.5);

        this.shape_70 = new cjs.Shape();
        this.shape_70.graphics.f("#7BBE72").s().p("AAAgiQAJAigJAjQgIgjAIgig");
        this.shape_70.setTransform(204.6,104.1);

        this.shape_71 = new cjs.Shape();
        this.shape_71.graphics.f("#7BBE72").s().p("AgCgeQAGARgBAOQgBANgEARg");
        this.shape_71.setTransform(204.7,87.7);

        this.shape_72 = new cjs.Shape();
        this.shape_72.graphics.f("#7BBE72").s().p("AgdgBIA7AAQgOAEgPAAQgOAAgQgEg");
        this.shape_72.setTransform(210.4,68.7);

        this.shape_73 = new cjs.Shape();
        this.shape_73.graphics.f("#7BBE72").s().p("AAAgcQAJAhgJAYQgIgdAIgcg");
        this.shape_73.setTransform(204.6,72.3);

        this.shape_74 = new cjs.Shape();
        this.shape_74.graphics.f("#7BBE72").s().p("AgbACIAEgDIAzAAIAAADg");
        this.shape_74.setTransform(194,68.5);

        this.shape_75 = new cjs.Shape();
        this.shape_75.graphics.f("#8DA680").s().p("AgcAtQgLghABg3IAJgKIAxAAQAkAvghAzQgPAJgMAAQgNAAgLgJg");
        this.shape_75.setTransform(225,105.5);

        this.shape_76 = new cjs.Shape();
        this.shape_76.graphics.f("#CCD687").s().p("AgHA6QgPgEgXgRIgFgRQgXgVAYgPQAMgTAJgIQAOgNAPgDQAZAFAOAJQARAMAEAXQAIAogjAVQgOAJgPAAQgFAAgHgCg");
        this.shape_76.setTransform(184.9,109.1);

        this.shape_77 = new cjs.Shape();
        this.shape_77.graphics.f("#B7C65C").s().p("AgvAjQgVgXAQghQATgpAnAFQAaAEANAUQAKAPAFAbQgDADAAANQgBAKgIADIgcAVQguAAgVgYg");
        this.shape_77.setTransform(167,111.1);

        this.shape_78 = new cjs.Shape();
        this.shape_78.graphics.f("#BBC85D").s().p("AAIBPIgdgBQhNgsAWg+QAKgdAbgPQAagOAfAFQAnAGAQAhQAQAggMAuQgNAbgkAUIgHABQgHAAgGgFg");
        this.shape_78.setTransform(177.3,99.4);

        this.shape_79 = new cjs.Shape();
        this.shape_79.graphics.f("#5E9D35").s().p("AgQAHIgCgEQAFgIALgBIAVAAQgJAJgKADQgCACgGAAIgIgBg");
        this.shape_79.setTransform(432.9,229.6);

        this.shape_80 = new cjs.Shape();
        this.shape_80.graphics.f("#5E9D35").s().p("AgVAFQARgIAEgCQALgDALAGQgHAHgLACIgEAAQgIAAgNgCg");
        this.shape_80.setTransform(364.3,297.5);

        this.shape_81 = new cjs.Shape();
        this.shape_81.graphics.f("#5E9D35").s().p("AgWACQAMgGAIgCQAKgCAPAGQgRAHgGACIgEAAQgJAAgJgFg");
        this.shape_81.setTransform(160.7,297.6);

        this.shape_82 = new cjs.Shape();
        this.shape_82.graphics.f("#A1D38E").s().p("AgXAEQAcgQATAQg");
        this.shape_82.setTransform(65.6,68.6);

        this.shape_83 = new cjs.Shape();
        this.shape_83.graphics.f("#A1D38E").s().p("AAEAYQgSgUATgbIAAAvg");
        this.shape_83.setTransform(68.6,103.7);

        this.shape_84 = new cjs.Shape();
        this.shape_84.graphics.f("#A1D38E").s().p("AgEgbQAJANgBAOQgBALgHARg");
        this.shape_84.setTransform(68.6,72);

        this.shape_85 = new cjs.Shape();
        this.shape_85.graphics.f("#A1D38E").s().p("AgdgBIA7AAQgOAEgQAAQgNAAgQgEg");
        this.shape_85.setTransform(130.4,68.7);

        this.shape_86 = new cjs.Shape();
        this.shape_86.graphics.f("#A1D38E").s().p("AgZAEQAZgPAZAPg");
        this.shape_86.setTransform(114,68.5);

        this.shape_87 = new cjs.Shape();
        this.shape_87.graphics.f("#A1D38E").s().p("AgdgBIA7AAQgPAEgPAAQgNAAgQgEg");
        this.shape_87.setTransform(98.5,68.7);

        this.shape_88 = new cjs.Shape();
        this.shape_88.graphics.f("#A1D38E").s().p("AgZACIgBgDIA1AAIAAADg");
        this.shape_88.setTransform(82.1,68.6);

        this.shape_89 = new cjs.Shape();
        this.shape_89.graphics.f("#A1D38E").s().p("AgBgaIADAAIAAA1IgDABg");
        this.shape_89.setTransform(68.6,88);

        this.shape_90 = new cjs.Shape();
        this.shape_90.graphics.f("#E1F4ED").s().p("AgEAWIADgrQAHAPgBAJQgBAKgIAJg");
        this.shape_90.setTransform(204.5,55);

        this.shape_91 = new cjs.Shape();
        this.shape_91.graphics.f("#E1F4ED").s().p("AgcACQAWgGAKAAQAOAAALAGQgEADgEAAIgxgDg");
        this.shape_91.setTransform(49.1,68.6);

        this.shape_92 = new cjs.Shape();
        this.shape_92.graphics.f("#E1F4ED").s().p("AgEAXIAAgwQAIAMAAAOIABAYg");
        this.shape_92.setTransform(408.6,55.6);

        this.shape_93 = new cjs.Shape();
        this.shape_93.graphics.f("#A1D390").s().p("AgdAIIAXgPQADAGAJABQAQAEAIAEg");
        this.shape_93.setTransform(258.9,68);

        this.shape_94 = new cjs.Shape();
        this.shape_94.graphics.f("#E1F4ED").s().p("AAEgbIAAA3IAAAAQgQgXAQggg");
        this.shape_94.setTransform(272.5,56.1);

        this.shape_95 = new cjs.Shape();
        this.shape_95.graphics.f("#E1F4ED").s().p("AgDABQAAgIAFgVIADA5QgKgMACgQg");
        this.shape_95.setTransform(68.6,56.3);

        this.shape_96 = new cjs.Shape();
        this.shape_96.graphics.f("#E1F4ED").s().p("AAAAEQgKAAgRgEIAbgDQAPgBANAEQgMAEgNAAIgDAAg");
        this.shape_96.setTransform(34.3,68.6);

        this.shape_97 = new cjs.Shape();
        this.shape_97.graphics.f("#E1F4ED").s().p("AgaACQAMgGAPABIAaADQgLAEgPAAIgBAAQgKAAgQgCg");
        this.shape_97.setTransform(17.9,68.6);

        this.shape_98 = new cjs.Shape();
        this.shape_98.graphics.f("#E1F4ED").s().p("AgEggQAHANABATIAAAhIgIAAg");
        this.shape_98.setTransform(340.6,40.7);

        this.shape_99 = new cjs.Shape();
        this.shape_99.graphics.f("#E1F4ED").s().p("AAAgfQAJAggJAfQgIggAIgfg");
        this.shape_99.setTransform(272.6,40.1);

        this.shape_100 = new cjs.Shape();
        this.shape_100.graphics.f("#E1F4ED").s().p("AgBAaIAAgzIADAAIAAAzg");
        this.shape_100.setTransform(204.5,40.1);

        this.shape_101 = new cjs.Shape();
        this.shape_101.graphics.f("#E1F4ED").s().p("AgEggQAHANABATIAAAgIgIABg");
        this.shape_101.setTransform(136.6,40.7);

        this.shape_102 = new cjs.Shape();
        this.shape_102.graphics.f("#E1F4ED").s().p("AgDABQgBgJADgSQAGAMgBAOIgDAbQgEgLAAgPg");
        this.shape_102.setTransform(68.6,39.9);

        this.shape_103 = new cjs.Shape();
        this.shape_103.graphics.f("#E1F4ED").s().p("AgCAAIAFgbIAAA3QgHgNACgPg");
        this.shape_103.setTransform(408.5,24.2);

        this.shape_104 = new cjs.Shape();
        this.shape_104.graphics.f("#E1F4ED").s().p("AgBggQADAWAAAOQAAAOgDAPg");
        this.shape_104.setTransform(340.8,23.4);

        this.shape_105 = new cjs.Shape();
        this.shape_105.graphics.f("#E1F4ED").s().p("AABgbIADAbQABAPgFANQgJgiAKgVg");
        this.shape_105.setTransform(272.6,24.3);

        this.shape_106 = new cjs.Shape();
        this.shape_106.graphics.f("#E1F4ED").s().p("AgDAAQgBgOAEgNQAKAigKAVIgDgcg");
        this.shape_106.setTransform(204.6,23.8);

        this.shape_107 = new cjs.Shape();
        this.shape_107.graphics.f("#E1F4ED").s().p("AgBAcIAAg2IADAAIAAA2g");
        this.shape_107.setTransform(136.6,24.1);

        this.shape_108 = new cjs.Shape();
        this.shape_108.graphics.f("#E1F4ED").s().p("AgDAAQgBgOAEgNQAKAigKAVIgDgcg");
        this.shape_108.setTransform(68.6,23.8);

        this.shape_109 = new cjs.Shape();
        this.shape_109.graphics.f("#E1F4ED").s().p("AAAgcQAIAcgIAdQgIgdAIgcg");
        this.shape_109.setTransform(408.6,7.7);

        this.shape_110 = new cjs.Shape();
        this.shape_110.graphics.f("#E1F4ED").s().p("AgBAcIAAg3IADAAIAAA3g");
        this.shape_110.setTransform(340.6,8.1);

        this.shape_111 = new cjs.Shape();
        this.shape_111.graphics.f("#E1F4ED").s().p("AgCgfQAFAVAAAOQgBAOgEAPg");
        this.shape_111.setTransform(272.8,7.4);

        this.shape_112 = new cjs.Shape();
        this.shape_112.graphics.f("#E1F4ED").s().p("AgDAAQADgSAAgIQAEALAAAOQABAJgDAUQgGgNABgPg");
        this.shape_112.setTransform(204.6,8.3);

        this.shape_113 = new cjs.Shape();
        this.shape_113.graphics.f("#E1F4ED").s().p("AAAgcQAIAcgIAdQgIgdAIgcg");
        this.shape_113.setTransform(136.6,7.7);

        this.shape_114 = new cjs.Shape();
        this.shape_114.graphics.f("#E1F4ED").s().p("AgCgcQAHAPgCAPQgBAFgEAWg");
        this.shape_114.setTransform(68.6,7.7);

        this.shape_115 = new cjs.Shape();
        this.shape_115.graphics.f("#E1F4ED").s().p("AgaACQAMgGAPABIAbADQgMAEgOAAIgCAAQgKAAgQgCg");
        this.shape_115.setTransform(465.9,68.6);

        this.shape_116 = new cjs.Shape();
        this.shape_116.graphics.f("#E1F4ED").s().p("AghADQAPgEAOAAQAPgBAXAFg");
        this.shape_116.setTransform(450.8,68.4);

        this.shape_117 = new cjs.Shape();
        this.shape_117.graphics.f("#E1F4ED").s().p("AghADQAPgEAPAAQANgBAYAFg");
        this.shape_117.setTransform(434.8,68.4);

        this.shape_118 = new cjs.Shape();
        this.shape_118.graphics.f("#E1F4ED").s().p("AgBADQgFgBgWgEIA5AAQgNAFgNAAIgEAAg");
        this.shape_118.setTransform(242.5,68.6);

        this.shape_119 = new cjs.Shape();
        this.shape_119.graphics.f("#FEFEFE").s().p("ADGBzIjDgBIjGABQgYAAgPgIQgRgJgGgWQgNgsAwgZQAUgHAHgLQA5hcBaAtQAMAGAMgGIATgQQA4gzA7AOQA7AOAeBJQAMAaATAJQAoASgLAwQgGAWgRAJQgNAHgWAAIgDAAg");
        this.shape_119.setTransform(438.2,26.6);

        this.shape_120 = new cjs.Shape();
        this.shape_120.graphics.f("#FEF8DF").s().p("AgXgCIAvgBQgMAHgMAAQgLAAgMgGg");
        this.shape_120.setTransform(275.6,136.6);

        this.shape_121 = new cjs.Shape();
        this.shape_121.graphics.f("#FEF8DF").s().p("AghgCIAegDIAlADQgRAIgRAAQgQAAgRgIg");
        this.shape_121.setTransform(386.6,136.6);

        this.shape_122 = new cjs.Shape();
        this.shape_122.graphics.f("#FEF8DF").s().p("AgmgDIBNAAQgUAHgTAAQgSAAgUgHg");
        this.shape_122.setTransform(18.1,136.7);

        this.shape_123 = new cjs.Shape();
        this.shape_123.graphics.f("#FEF8DF").s().p("AgmgDIBNAAQgUAHgTAAQgSAAgUgHg");
        this.shape_123.setTransform(146.1,136.7);

        this.shape_124 = new cjs.Shape();
        this.shape_124.graphics.f("#FEF8DF").s().p("AgmgDIBNAAQgUAHgTAAQgSAAgUgHg");
        this.shape_124.setTransform(162.1,136.7);

        this.shape_125 = new cjs.Shape();
        this.shape_125.graphics.f("#E8D9BC").s().p("AgEAhIAAhBIAJAAIAABBg");
        this.shape_125.setTransform(136.6,200.5);

        this.shape_126 = new cjs.Shape();
        this.shape_126.graphics.f("#E8D9BC").s().p("AgEAiIAAhDIAJAAIAABDg");
        this.shape_126.setTransform(68.6,200.6);

        this.shape_127 = new cjs.Shape();
        this.shape_127.graphics.f("#E8D9BC").s().p("AAAgcQAJAagJAfQgIgdAIgcg");
        this.shape_127.setTransform(408.6,183.8);

        this.shape_128 = new cjs.Shape();
        this.shape_128.graphics.f("#E8D9BC").s().p("AgBAbIAAg1IADABIAAA0g");
        this.shape_128.setTransform(340.6,184.1);

        this.shape_129 = new cjs.Shape();
        this.shape_129.graphics.f("#E8D9BC").s().p("AgBAaIAAg0IADAAIAAA1g");
        this.shape_129.setTransform(272.6,184);

        this.shape_130 = new cjs.Shape();
        this.shape_130.graphics.f("#E8D9BC").s().p("AADgdIAAA7QgLgdALgeg");
        this.shape_130.setTransform(204.5,184.4);

        this.shape_131 = new cjs.Shape();
        this.shape_131.graphics.f("#E8D9BC").s().p("AACgdIAAA7QgJgeAJgdg");
        this.shape_131.setTransform(136.5,184.5);

        this.shape_132 = new cjs.Shape();
        this.shape_132.graphics.f("#E8D9BC").s().p("AgCACQAAgOAFgTIAAA/QgEgQgBgOg");
        this.shape_132.setTransform(68.5,183.6);

        this.shape_133 = new cjs.Shape();
        this.shape_133.graphics.f("#E8D9BC").s().p("AgBAbIAAg1IADAEIAAAxg");
        this.shape_133.setTransform(408.7,168);

        this.shape_134 = new cjs.Shape();
        this.shape_134.graphics.f("#E8D9BC").s().p("AAAgcQAJAdgJAcQgIgaAIgfg");
        this.shape_134.setTransform(340.6,168.3);

        this.shape_135 = new cjs.Shape();
        this.shape_135.graphics.f("#E8D9BC").s().p("AgEAAQABgIADgTQAJAZgJAeQgEgNAAgPg");
        this.shape_135.setTransform(272.6,168.3);

        this.shape_136 = new cjs.Shape();
        this.shape_136.graphics.f("#E8D9BC").s().p("AAAghQAEATABAOQgBAQgEASQgIgiAIghg");
        this.shape_136.setTransform(204.6,168.1);

        this.shape_137 = new cjs.Shape();
        this.shape_137.graphics.f("#E8D9BC").s().p("AAAgbQAJAggJAXQgIgcAIgbg");
        this.shape_137.setTransform(136.6,168.3);

        this.shape_138 = new cjs.Shape();
        this.shape_138.graphics.f("#E8D9BC").s().p("AADgdIAAA7QgLgdALgeg");
        this.shape_138.setTransform(68.5,168.4);

        this.shape_139 = new cjs.Shape();
        this.shape_139.graphics.f("#E8D9BC").s().p("AgEAAQABgJADgTQAJAagJAeQgEgOAAgOg");
        this.shape_139.setTransform(408.6,152.3);

        this.shape_140 = new cjs.Shape();
        this.shape_140.graphics.f("#E8D9BC").s().p("AgBAaIAAg0IADAAIAAA1g");
        this.shape_140.setTransform(340.6,152);

        this.shape_141 = new cjs.Shape();
        this.shape_141.graphics.f("#E8D9BC").s().p("AgBgdQAKAdgKAeg");
        this.shape_141.setTransform(272.7,151.7);

        this.shape_142 = new cjs.Shape();
        this.shape_142.graphics.f("#E8D9BC").s().p("AgEAAQABgJADgTQAJAagJAeQgEgOAAgOg");
        this.shape_142.setTransform(204.6,152.3);

        this.shape_143 = new cjs.Shape();
        this.shape_143.graphics.f("#E8D9BC").s().p("AADgfIAAA/QgLgdALgig");
        this.shape_143.setTransform(136.5,151.5);

        this.shape_144 = new cjs.Shape();
        this.shape_144.graphics.f("#E8D9BC").s().p("AgBgZIADgBIAAA1IgDAAg");
        this.shape_144.setTransform(68.6,152.1);

        this.shape_145 = new cjs.Shape();
        this.shape_145.graphics.f("#FEF8DF").s().p("AgmgDIALgCIBCADQgUAIgTAAQgTAAgTgJg");
        this.shape_145.setTransform(466.1,136.6);

        this.shape_146 = new cjs.Shape();
        this.shape_146.graphics.f("#FEF8DF").s().p("AgmgEIBNAAQgUAJgTAAQgSAAgUgJg");
        this.shape_146.setTransform(450.1,136.7);

        this.shape_147 = new cjs.Shape();
        this.shape_147.graphics.f("#FEF8DF").s().p("AgmgEIBNACQgVAHgSAAQgUAAgSgJg");
        this.shape_147.setTransform(434.1,136.7);

        this.shape_148 = new cjs.Shape();
        this.shape_148.graphics.f("#FEF8DF").s().p("AgmgDIBNAAQgUAHgTAAQgSAAgUgHg");
        this.shape_148.setTransform(418.1,136.7);

        this.shape_149 = new cjs.Shape();
        this.shape_149.graphics.f("#FEF8DF").s().p("AgmgDIBNAAQgTAHgUAAQgSAAgUgHg");
        this.shape_149.setTransform(402.1,136.7);

        this.shape_150 = new cjs.Shape();
        this.shape_150.graphics.f("#FEF8DF").s().p("AgmgDIBNAAQgUAHgTAAQgSAAgUgHg");
        this.shape_150.setTransform(210.1,136.7);

        this.shape_151 = new cjs.Shape();
        this.shape_151.graphics.f("#FEF8DF").s().p("AgmgDIBNAAQgTAHgUAAQgSAAgUgHg");
        this.shape_151.setTransform(194.1,136.7);

        this.shape_152 = new cjs.Shape();
        this.shape_152.graphics.f("#FEF8DF").s().p("AgmgCIAvgDIAeADQgTAIgUAAQgSAAgUgIg");
        this.shape_152.setTransform(178.1,136.6);

        this.shape_153 = new cjs.Shape();
        this.shape_153.graphics.f("#E8D9BC").s().p("AgEAhIAAhBIAJAAIAABBg");
        this.shape_153.setTransform(408.6,200.5);

        this.shape_154 = new cjs.Shape();
        this.shape_154.graphics.f("#E8D9BC").s().p("AgEAiIAAhDIAJAAIAABDg");
        this.shape_154.setTransform(272.6,200.6);

        this.shape_155 = new cjs.Shape();
        this.shape_155.graphics.f("#E8D9BC").s().p("AgEAhIAAhBIAJAAIAABBg");
        this.shape_155.setTransform(204.6,200.5);

        this.shape_156 = new cjs.Shape();
        this.shape_156.graphics.f("#76BE61").s().p("AgwgCIAwgBQAfgBATAIIhjAAg");
        this.shape_156.setTransform(268.1,135.5);

        this.shape_157 = new cjs.Shape();
        this.shape_157.graphics.f("#E8D9BC").s().p("AgcADQgpgDg+AAIhpACIgdAAQgRAAgLgHIJLAAQgaAKgngBQgtgDgWgBIhfAFIgsABQgcAAgXgDg");
        this.shape_157.setTransform(64.6,136.9);

        this.shape_158 = new cjs.Shape();
        this.shape_158.graphics.f("#797857").s().p("AARCXQgGAAgRgEIgKgDIgBgxQAAgdACgUQAHg7gxgeQAAgOAIgGQAGgDANgDQAMAKAEgKIAHgOIACgdQABgRAFgMQAIgMASAEQALAFAGAQQAIATAEAFQAEALgGAIQgbApAKA3QAEAbAAAnIAABDQgJAHgNAAIgCAAg");
        this.shape_158.setTransform(174.8,121.5);

        this.shape_159 = new cjs.Shape();
        this.shape_159.graphics.f("#FCE7BA").s().p("ABZAnIixAAQgVABgJgJQgKgKAAgUQgBgTAJgKQAJgKAUAAIC3AAQAUAAAJALQAJAJgBATQAAAUgKAKQgJAIgTAAIgCAAg");
        this.shape_159.setTransform(34.1,170.1);

        this.shape_160 = new cjs.Shape();
        this.shape_160.graphics.f("#FCE7BA").s().p("AhbAnQgVAAgJgLQgIgKABgSQABgmAiAAIC3AAQAngBAAAnQABATgJAKQgJAKgVAAg");
        this.shape_160.setTransform(102.1,170.1);

        this.shape_161 = new cjs.Shape();
        this.shape_161.graphics.f("#FCE7BA").s().p("AhbAnQgVAAgIgLQgJgKABgSQAAgnAoABICyAAQAngBAAAnQABATgJAKQgJAKgUAAg");
        this.shape_161.setTransform(170.1,170.1);

        this.shape_162 = new cjs.Shape();
        this.shape_162.graphics.f("#FCE7BA").s().p("Ah3AeQgKgKABgUQAAgVAKgJQAKgJAUABICyAAQAngBAAAnQABAogngBIixAAIgEAAQgUAAgJgJg");
        this.shape_162.setTransform(238.1,170.1);

        this.shape_163 = new cjs.Shape();
        this.shape_163.graphics.f("#FCE7BA").s().p("AiAAAQAAgnAmABIC3AAQAVAAAIALQAIAKgBATQgBAlgjAAIi3AAIgBAAQglAAAAgng");
        this.shape_163.setTransform(442.1,170.1);

        this.shape_164 = new cjs.Shape();
        this.shape_164.graphics.f("#FCE7BA").s().p("ABaAnIi3AAQgiAAgBgmQgBgSAIgKQAJgLAVAAIC2AAQAVAAAJAKQAJAKgBASQAAAngmAAIgBAAg");
        this.shape_164.setTransform(374.1,170.1);

        this.shape_165 = new cjs.Shape();
        this.shape_165.graphics.f("#FCE7BA").s().p("AhbAnQgUAAgJgKQgJgKABgTQAAgnAoABICxAAQAogBAAAnQABATgJAKQgJAKgUAAg");
        this.shape_165.setTransform(306.1,170.1);

        this.shape_166 = new cjs.Shape();
        this.shape_166.graphics.f("#C0D5BF").s().p("AgDCeIhIgCQADjYgBg3QAAgaAJgKQAJgKAbAAQBOABAMAMQANANABBOIgBDUQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgXADgSAAQgXAAgNgEg");
        this.shape_166.setTransform(430.6,120.3);

        this.shape_167 = new cjs.Shape();
        this.shape_167.graphics.f("#B0E07A").s().p("AhxAUQAAgegpglQAiABAtgOIBLgZQAhgKAdARQAeARAMAmQAGAVANAFQAeAQACAXQABAUgVAbIkhABQApglAAghg");
        this.shape_167.setTransform(110.6,127);

        this.shape_168 = new cjs.Shape();
        this.shape_168.graphics.f("#83C569").s().p("AhNCuIgMgEQgIgbAIgeQADgPARgmQAghJAdgyQAjhBArgxQAOAOADAZIAGAqQABAMgEASIABDtIhbADQgSAEgUAAQgTAAgUgEg");
        this.shape_168.setTransform(214,118.8);

        this.shape_169 = new cjs.Shape();
        this.shape_169.graphics.f("#BE945D").s().p("Ai+CEQgRgQgBgYIgDhcQAAg4AJgoQAFgLAMgHQAHgFAQgFQAJgBAQABQARAAAIAAQAdAEAVgEIAWACQANABAIgCIATACQAMAAAIgGQAGgEAGAAQAGABAGACQAHAEAKAAIASAAQAUAFAdgFQAfAEANgDQAOACAGADQAKAEAFAJIABDkQAGADgDADQgCADgCAAg");
        this.shape_169.setTransform(242.3,122.8);

        this.shape_170 = new cjs.Shape();
        this.shape_170.graphics.f("#C1D5C0").s().p("AhHDeIghgCIABjAQAAhugBhRQgBghAKgNQAMgNAhADIAiADQASAAANgKQA3gEATAkQAKASAHA9QgLASABAdIACAwQgBAvAABIIABB5QgEAJgHgHIhSAAQgRAFgUAAQgUAAgTgFg");
        this.shape_170.setTransform(453.4,113.9);

        this.shape_171 = new cjs.Shape();
        this.shape_171.graphics.f("#139058").s().p("AkKB8QgfgqAGgZQAGgZAvgaQAIgEAIgLQApg5AkgLQAjgLA/AbQAMAKAHgIQAEgEAGgMQA6hCBNAQQBNAQAdBVIAFASQAEAHAJAGQAwAdAEAYQAEAYgkApQiNAEh4AAQiSAAh4gFg");
        this.shape_171.setTransform(309.9,123.4);

        this.shape_172 = new cjs.Shape();
        this.shape_172.graphics.f("#31932F").s().p("AB+CbIingBIh+ABQhKAAg0gEIgegEQgpgvAHgiQAHgjA4gYQAJgEAHgGIAJgQQAig7AygQQAxgQA9AcIAUAKQALACAHgMQAMgVAZgSIAtgbIAAAAQBcgQAzAfQAzAfAZBYQAEAPAMAFQAFACATABQAdAAANAUQAJAOADAeQADAegNATQgOAUgeAGIgKADQg/AEhWAAIgTAAg");
        this.shape_172.setTransform(64.6,121.1);

        this.shape_173 = new cjs.Shape();
        this.shape_173.graphics.f("#B0E07A").s().p("AFbDSInVgDQgEgKAFgMQAHgNACgHQAJgigXgPQgUgOgQgYQgLgPgOgeQgagxg4gLQg4gLguAkIgSAQQgLALgIAEQgKAFgGAAQgHgCgBgNQAWg+AkglQApgpBAgMQBAgLA2AiQAXAOAQgCQAPgDAPgTQAGAFgBAMIABAKIgBgQQAAgNAFgIIALgSQBthcB3AmQB1AlAnCLIAFAWQAEAKAOAGQBNAgAJA3QAIA2g/A2QgGAHgIAAQgGAAgKgEgAhHhXIgDACIABAAQAAABAAABQAAAAABAAQAAAAABgBQAAAAABgBQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgCABg");
        this.shape_173.setTransform(348.4,115.2);

        this.shape_174 = new cjs.Shape();
        this.shape_174.graphics.f("#82C56A").s().p("AhZHJIABgDQgQgFglACQgiACgSgJQgRgsABg/QAFhIAAgkIAJgfIABgPQABgfgCgPQgDgZgjgBQgHABgegBQgWADgagDQgcADgVgDQgVACgVgCQgYADgZgDQgZADgagDQgOACgdgCQgQABgKgDQgOgDgIgLQAeg0A2g1QARgSBRhLQAagTAygpQAtgiAlgRQANgHAYAEQAFACgBgFQAAgGgCAHQgBADgIgCQgMgDAEgLICUhRIABgBQFPiVFPADQAJBlgKCIQgEAEgHABQALABAKAFQgJArAEBWQAEBUgIArQgFAWABAIQACARAVAGQAEAKgJAQQgGAJgHAHQgcAmglgXQhNgvhQAeQhNAdgfBRQgGAOgNAIQgLAEgOgCIgYgGQgwgKgkAfIgqAqQgaAagSAOQgPANAEAbQAJAlgCAIIgxADQgLAFgOAAQgLAAgOgEg");
        this.shape_174.setTransform(282.1,90.5);

        this.shape_175 = new cjs.Shape();
        this.shape_175.graphics.f("#50A945").s().p("ACuHNIhRAAQgnAHgogHIhPAAQgNAFgZgEQgHgMAIgMIAPgSQAagqgJglQgJgkgsgXQgqgUgMguQgfh0htgkQhogihXA9QgOAKgIADQgMAFgNgDQgOgFgHgNQgGgMACgOQAHgkgFhNQgFhMAJgoQAHgbACgGQAMgJgJgFQgMgHABgDQgMgYAFgeQAKg9gKg6QgFgpAWgSIgCgDQAFgIAFAHQFtAGEwCFQAHgFADAIQEQCBC7DGQgDATgPAFQgIAEgUgBQggAAgMAQQgLAOAAAhQACBygCCrQAAAfgBAIQgEAWgQANIgvgBQgPgNgEgWQgBgMACgbQADgigBg7QAAhDABgZQABgYgKgLQgLgLgYACQgiAAgOAEQgXAHgBAiQgBA/AAB+QAAAcgCAJQgEAUgNANIgKADQgUADgTAAQgUAAgUgDg");
        this.shape_175.setTransform(396.7,90.1);

        this.shape_176 = new cjs.Shape();
        this.shape_176.graphics.f("#50A945").s().p("AATHNIhOAAQgVAHgNgJQgThggBgRQgFhBAZgwQAJgIAMgBQAIgBANAEQAuALAMggQAIgSgIgQQgGgMgQgMQgNgKgFgHQgFgIAAgOIgBgWQgHg0gsgIQgygJgXAnQgWAoAgAnIAPAQQAKAJAEAJQAHAigSAYQgJAHgLgJQgGgGgFgNIgLgUQgRgXgaAHQgXAHgGAYQgFAaAXARQAJAGATAEQAUAFAIAFQAlAeAIA5QAIA6gbAvIhGAEQgoAHgogHIhQAAQgoAHgogHIgxgEQgGg3AChhQAChtgDgrQgCgtAAhHIABhyIgFh2QgChGAKgwQAFgYgIgvQgIgwAEgYIgBgDQAEgIAGAHQFMAID2BcIBZAgIAAABQBtA0BPAxQBiA8BMBCQADAPgKALIgUARQg0AzgYAYQgpAtgcAnQgGAKgHAHQhABagiBAQguBYgOBUQgBAGgIAGIhFAEQgUAEgUAAQgUAAgUgEg");
        this.shape_176.setTransform(188.1,90.1);

        this.shape_177 = new cjs.Shape();
        this.shape_177.graphics.f("#7CBE73").s().p("AgDgOIgBgEQAEgEAFAEIgBAEIAAAjIgHAAg");
        this.shape_177.setTransform(136.6,205.8);

        this.shape_178 = new cjs.Shape();
        this.shape_178.graphics.f("#7CBE73").s().p("AgDgOIgBgEQAEgEAFAEIgBAEIAAAjIgHAAg");
        this.shape_178.setTransform(204.6,205.8);

        this.shape_179 = new cjs.Shape();
        this.shape_179.graphics.f("#7CBE73").s().p("AgDgOIgBgEQAEgEAFAEIgBAEIAAAjIgHAAg");
        this.shape_179.setTransform(408.6,205.8);

        this.shape_180 = new cjs.Shape();
        this.shape_180.graphics.f("#41982E").s().p("AAAAIQgBgBgMgIIAPgHQAMgDAAALQgCAJgHAAIgFgBg");
        this.shape_180.setTransform(429.5,289.8);

        this.shape_181 = new cjs.Shape();
        this.shape_181.graphics.f("#3D8F30").s().p("AgOABQgEgHAHAAQADgBAIACQADAAAOAEQgLAIgHABIgCAAQgIAAgDgHg");
        this.shape_181.setTransform(192.3,230.3);

        this.shape_182 = new cjs.Shape();
        this.shape_182.graphics.f("#3D8F30").s().p("AABAIQgIgBgOgOIArAHQgLAIgJAAIgBAAg");
        this.shape_182.setTransform(395.9,230.1);

        this.shape_183 = new cjs.Shape();
        this.shape_183.graphics.f("#3D8F30").s().p("AgOABQgEgHAGgBQAEAAAIABIAQAEQgKAIgHACIgCAAQgIAAgDgHg");
        this.shape_183.setTransform(260.3,298.3);

        this.shape_184 = new cjs.Shape();
        this.shape_184.graphics.f("#7BBE72").s().p("AghgEIA5AAIAKAAQgRAJgRAAQgPAAgSgJg");
        this.shape_184.setTransform(65.6,272.7);

        this.shape_185 = new cjs.Shape();
        this.shape_185.graphics.f("#7BBE72").s().p("AgEAhIAAhDQAJAMAAAWIgCAhQgCACgBAAQgCAAgCgCg");
        this.shape_185.setTransform(68.6,268.7);

        this.shape_186 = new cjs.Shape();
        this.shape_186.graphics.f("#98CD8C").s().p("AgJAOIABgSQAAgMAIgHIAKAuIgSABg");
        this.shape_186.setTransform(440.1,307.7);

        this.shape_187 = new cjs.Shape();
        this.shape_187.graphics.f("#7BBE72").s().p("AgagCIA1AAQgNAFgOAAQgMAAgOgFg");
        this.shape_187.setTransform(262,272.7);

        this.shape_188 = new cjs.Shape();
        this.shape_188.graphics.f("#7BBE72").s().p("AgegBIA9AAQgPAEgQAAQgNAAgRgEg");
        this.shape_188.setTransform(278.5,272.7);

        this.shape_189 = new cjs.Shape();
        this.shape_189.graphics.f("#7BBE72").s().p("AgcAAQAZgIAgAIQgQAEgNAAQgPAAgNgEg");
        this.shape_189.setTransform(293.9,272.6);

        this.shape_190 = new cjs.Shape();
        this.shape_190.graphics.f("#7BBE72").s().p("AgEgmQAUAmgUAng");
        this.shape_190.setTransform(68.7,253.1);

        this.shape_191 = new cjs.Shape();
        this.shape_191.graphics.f("#7BBE72").s().p("AgeADQAegKAfAKg");
        this.shape_191.setTransform(309.7,272.5);

        this.shape_192 = new cjs.Shape();
        this.shape_192.graphics.f("#7BBE72").s().p("AgegBIA8AAQgOAEgQAAQgNAAgRgEg");
        this.shape_192.setTransform(326.5,272.7);

        this.shape_193 = new cjs.Shape();
        this.shape_193.graphics.f("#7BBE72").s().p("AgdADQAdgKAeAKg");
        this.shape_193.setTransform(349.7,272.5);

        this.shape_194 = new cjs.Shape();
        this.shape_194.graphics.f("#7BBE72").s().p("AgaADQAagMAbAMg");
        this.shape_194.setTransform(366.2,272.5);

        this.shape_195 = new cjs.Shape();
        this.shape_195.graphics.f("#7BBE72").s().p("AgbACIAAgDIA3AAIAAADg");
        this.shape_195.setTransform(382.1,272.6);

        this.shape_196 = new cjs.Shape();
        this.shape_196.graphics.f("#7BBE72").s().p("AgcAAQAhgIAYAIQgPAEgOAAQgNAAgPgEg");
        this.shape_196.setTransform(398.3,272.6);

        this.shape_197 = new cjs.Shape();
        this.shape_197.graphics.f("#7BBE72").s().p("AgcAAQAdgIAcAIQgRAEgMAAQgPAAgNgEg");
        this.shape_197.setTransform(417.8,272.6);

        this.shape_198 = new cjs.Shape();
        this.shape_198.graphics.f("#7BBE72").s().p("AgegBIA8AAQgOAEgQAAQgNAAgRgEg");
        this.shape_198.setTransform(434.5,272.7);

        this.shape_199 = new cjs.Shape();
        this.shape_199.graphics.f("#7BBE72").s().p("AgZADQAagNAZANg");
        this.shape_199.setTransform(449.9,272.5);

        this.shape_200 = new cjs.Shape();
        this.shape_200.graphics.f("#7BBE72").s().p("AgeADQAegKAeAKg");
        this.shape_200.setTransform(465.7,272.5);

        this.shape_201 = new cjs.Shape();
        this.shape_201.graphics.f("#7BBE72").s().p("AgBAcIAAg3IADABIAAA2g");
        this.shape_201.setTransform(68.6,285.1);

        this.shape_202 = new cjs.Shape();
        this.shape_202.graphics.f("#7BBE72").s().p("AgBgeQAKAegKAeg");
        this.shape_202.setTransform(408.7,284.7);

        this.shape_203 = new cjs.Shape();
        this.shape_203.graphics.f("#7BBE72").s().p("AAAgiQAJAigJAjQgIgjAIgig");
        this.shape_203.setTransform(136.6,289.1);

        this.shape_204 = new cjs.Shape();
        this.shape_204.graphics.f("#7BBE72").s().p("AADgeIAAA8QgKgdAKgfg");
        this.shape_204.setTransform(408.5,237.5);

        this.shape_205 = new cjs.Shape();
        this.shape_205.graphics.f("#7BBE72").s().p("AgBAYIAAgzIADAAIAAA3g");
        this.shape_205.setTransform(340.5,237.1);

        this.shape_206 = new cjs.Shape();
        this.shape_206.graphics.f("#7BBE72").s().p("AgBAcIAAg3IADACIAAA1g");
        this.shape_206.setTransform(204.6,289.1);

        this.shape_207 = new cjs.Shape();
        this.shape_207.graphics.f("#7BBE72").s().p("AgmgEIBNAAQgUAJgTAAQgSAAgUgJg");
        this.shape_207.setTransform(50.1,272.7);

        this.shape_208 = new cjs.Shape();
        this.shape_208.graphics.f("#7BBE72").s().p("AgbACIAAgDIA3AAIgCADg");
        this.shape_208.setTransform(82,272.6);

        this.shape_209 = new cjs.Shape();
        this.shape_209.graphics.f("#7BBE72").s().p("AgmgEIBNAAQgUAJgTAAQgSAAgUgJg");
        this.shape_209.setTransform(34.1,272.7);

        this.shape_210 = new cjs.Shape();
        this.shape_210.graphics.f("#7BBE72").s().p("AgmgEIBNAAQgUAJgTAAQgSAAgUgJg");
        this.shape_210.setTransform(18.1,272.7);

        this.shape_211 = new cjs.Shape();
        this.shape_211.graphics.f("#7BBE72").s().p("AgbACIAAgDIA3AAIgEADg");
        this.shape_211.setTransform(98.1,272.7);

        this.shape_212 = new cjs.Shape();
        this.shape_212.graphics.f("#7BBE72").s().p("AgBgdQAKAcgKAfg");
        this.shape_212.setTransform(408.7,268.7);

        this.shape_213 = new cjs.Shape();
        this.shape_213.graphics.f("#7BBE72").s().p("AggADQAmgLAbALg");
        this.shape_213.setTransform(113.4,272.5);

        this.shape_214 = new cjs.Shape();
        this.shape_214.graphics.f("#7BBE72").s().p("AgfgCIA/AAQgQAEgOABIgCAAQgOAAgRgFg");
        this.shape_214.setTransform(129.6,272.7);

        this.shape_215 = new cjs.Shape();
        this.shape_215.graphics.f("#7BBE72").s().p("AgaACIAAgDIA2AAIAAADg");
        this.shape_215.setTransform(146.1,272.6);

        this.shape_216 = new cjs.Shape();
        this.shape_216.graphics.f("#7BBE72").s().p("AgcAAQAdgIAcAIQgNAFgPAAQgNAAgQgFg");
        this.shape_216.setTransform(162.3,272.6);

        this.shape_217 = new cjs.Shape();
        this.shape_217.graphics.f("#7BBE72").s().p("AgiAAQATgEAPAAQANAAAWAEQgRAFgSAAQgLAAgXgFg");
        this.shape_217.setTransform(178.1,272.6);

        this.shape_218 = new cjs.Shape();
        this.shape_218.graphics.f("#7BBE72").s().p("AgcAAQAdgIAcAIQgRAEgMAAQgPAAgNgEg");
        this.shape_218.setTransform(193.8,272.6);

        this.shape_219 = new cjs.Shape();
        this.shape_219.graphics.f("#7BBE72").s().p("AgbACIAEgDIAzAAIAAADg");
        this.shape_219.setTransform(214,272.5);

        this.shape_220 = new cjs.Shape();
        this.shape_220.graphics.f("#7BBE72").s().p("AAAgcQAJAhgJAYQgIgdAIgcg");
        this.shape_220.setTransform(408.6,253.3);

        this.shape_221 = new cjs.Shape();
        this.shape_221.graphics.f("#7BBE72").s().p("AAAgiQAJAigJAjQgIgjAIgig");
        this.shape_221.setTransform(340.6,253.1);

        this.shape_222 = new cjs.Shape();
        this.shape_222.graphics.f("#7BBE72").s().p("AAAgcQAJAhgJAYQgIgdAIgcg");
        this.shape_222.setTransform(272.6,253.3);

        this.shape_223 = new cjs.Shape();
        this.shape_223.graphics.f("#7BBE72").s().p("AgCgfQAEAQABAOQAAAPgFASg");
        this.shape_223.setTransform(204.7,253.6);

        this.shape_224 = new cjs.Shape();
        this.shape_224.graphics.f("#7BBE72").s().p("AAAgiQAJAigJAjQgIgjAIgig");
        this.shape_224.setTransform(136.6,253.1);

        this.shape_225 = new cjs.Shape();
        this.shape_225.graphics.f("#7BBE72").s().p("AgcAAQAOgEAOAAQAJABAUADQgOAFgPAAQgNAAgPgFg");
        this.shape_225.setTransform(229.9,272.6);

        this.shape_226 = new cjs.Shape();
        this.shape_226.graphics.f("#7BBE72").s().p("AgcAAQAdgIAcAIQgRAEgMAAQgPAAgNgEg");
        this.shape_226.setTransform(245.8,272.6);

        this.shape_227 = new cjs.Shape();
        this.shape_227.graphics.f("#7BBE72").s().p("AAAgcQAFAOAAAOQgBAJgEAUQgIgZAIggg");
        this.shape_227.setTransform(408.6,220.9);

        this.shape_228 = new cjs.Shape();
        this.shape_228.graphics.f("#7BBE72").s().p("AgEAAQAAgMAEgWQAFARAAARQAAAMgFAXQgEgTAAgQg");
        this.shape_228.setTransform(340.6,221.1);

        this.shape_229 = new cjs.Shape();
        this.shape_229.graphics.f("#7BBE72").s().p("AgBgeQAKAegKAeg");
        this.shape_229.setTransform(272.7,220.7);

        this.shape_230 = new cjs.Shape();
        this.shape_230.graphics.f("#7BBE72").s().p("AgCgfQAMAggMAfg");
        this.shape_230.setTransform(204.7,220.5);

        this.shape_231 = new cjs.Shape();
        this.shape_231.graphics.f("#7BBE72").s().p("AAAgcQAFAOAAAOQgBAJgEAUQgIgZAIggg");
        this.shape_231.setTransform(136.6,220.9);

        this.shape_232 = new cjs.Shape();
        this.shape_232.graphics.f("#7BBE72").s().p("AACgdIAAA7QgKgcAKgfg");
        this.shape_232.setTransform(340.5,305.4);

        this.shape_233 = new cjs.Shape();
        this.shape_233.graphics.f("#7BBE72").s().p("AgEgmQAUAmgUAng");
        this.shape_233.setTransform(68.7,221.1);

        this.shape_234 = new cjs.Shape();
        this.shape_234.graphics.f("#7BBE72").s().p("AAAgcQAJAhgJAYQgIgdAIgcg");
        this.shape_234.setTransform(68.6,317.3);

        this.shape_235 = new cjs.Shape();
        this.shape_235.graphics.f("#7BBE72").s().p("AAAgcQAKAagKAfQgIgdAIgcg");
        this.shape_235.setTransform(408.6,316.9);

        this.shape_236 = new cjs.Shape();
        this.shape_236.graphics.f("#7BBE72").s().p("AAAgiQAJAigJAjQgIgjAIgig");
        this.shape_236.setTransform(136.6,321.1);

        this.shape_237 = new cjs.Shape();
        this.shape_237.graphics.f("#7BBE72").s().p("AgCgeQALAegLAeg");
        this.shape_237.setTransform(204.7,320.7);

        this.shape_238 = new cjs.Shape();
        this.shape_238.graphics.f("#7BBE72").s().p("AADgZIAAAzQgNgaANgZg");
        this.shape_238.setTransform(272.5,321.2);

        this.shape_239 = new cjs.Shape();
        this.shape_239.graphics.f("#7BBE72").s().p("AAAgcQAKAZgKAgQgIgeAIgbg");
        this.shape_239.setTransform(340.6,320.9);

        this.shape_240 = new cjs.Shape();
        this.shape_240.graphics.f("#7BBE72").s().p("AAAgcQAJAdgJAcQgIgaAIgfg");
        this.shape_240.setTransform(68.6,333.3);

        this.shape_241 = new cjs.Shape();
        this.shape_241.graphics.f("#7BBE72").s().p("AADgaIAAA1QgMgaAMgbg");
        this.shape_241.setTransform(408.5,333);

        this.shape_242 = new cjs.Shape();
        this.shape_242.graphics.f("#E8D9BC").s().p("AgDgoQAHAWAAAWIABAkIgIABg");
        this.shape_242.setTransform(340.6,199.9);

        this.shape_243 = new cjs.Shape();
        this.shape_243.graphics.f("#7BBE72").s().p("AAAgcQAJAdgJAcQgIghAIgYg");
        this.shape_243.setTransform(272.6,236.8);

        this.shape_244 = new cjs.Shape();
        this.shape_244.graphics.f("#7BBE72").s().p("AADgfIAAA/QgMggAMgfg");
        this.shape_244.setTransform(204.5,237.6);

        this.shape_245 = new cjs.Shape();
        this.shape_245.graphics.f("#7BBE72").s().p("AgBgdQAJAdgJAfg");
        this.shape_245.setTransform(136.7,236.7);

        this.shape_246 = new cjs.Shape();
        this.shape_246.graphics.f("#7BBE72").s().p("AgEgmQAUAmgUAng");
        this.shape_246.setTransform(68.7,237.1);

        this.shape_247 = new cjs.Shape();
        this.shape_247.graphics.f("#7BBE72").s().p("AgBAbIAAg2IADAAIAAA2g");
        this.shape_247.setTransform(272.6,289.1);

        this.shape_248 = new cjs.Shape();
        this.shape_248.graphics.f("#7BBE72").s().p("AgCgfQAEAQABAOQAAAPgFASg");
        this.shape_248.setTransform(340.7,289.6);

        this.shape_249 = new cjs.Shape();
        this.shape_249.graphics.f("#7BBE72").s().p("AADgaIAAA1QgMgaAMgbg");
        this.shape_249.setTransform(68.5,301);

        this.shape_250 = new cjs.Shape();
        this.shape_250.graphics.f("#7BBE72").s().p("AAAgcQAJAegJAbQgIgZAIggg");
        this.shape_250.setTransform(272.6,305.3);

        this.shape_251 = new cjs.Shape();
        this.shape_251.graphics.f("#7BBE72").s().p("AAAgcQAKAZgKAgQgIgeAIgbg");
        this.shape_251.setTransform(408.6,300.9);

        this.shape_252 = new cjs.Shape();
        this.shape_252.graphics.f("#7BBE72").s().p("AAAgiQAJAigJAjQgIgjAIgig");
        this.shape_252.setTransform(204.6,305.1);

        this.shape_253 = new cjs.Shape();
        this.shape_253.graphics.f("#7BBE72").s().p("AACgeIAAA9QgJgeAJgfg");
        this.shape_253.setTransform(136.5,305.5);

        this.shape_254 = new cjs.Shape();
        this.shape_254.graphics.f("#73BB67").s().p("AgGgWQAEgLAEAFIAJAKIgBAMQgFAFABANQABAOgHAFQgQgVAKggg");
        this.shape_254.setTransform(439,306);

        this.shape_255 = new cjs.Shape();
        this.shape_255.graphics.f("#3B8C2D").s().p("AgeACQAPgJAPAAQAJABAWAGQgRAIgOAAQgLAAgTgGg");
        this.shape_255.setTransform(190.2,250.2);

        this.shape_256 = new cjs.Shape();
        this.shape_256.graphics.f("#3B8C2D").s().p("AADAHIgjgEQAVgJANAAQAOgBARAHQgMAHgQAAIgCAAg");
        this.shape_256.setTransform(393.7,250.3);

        this.shape_257 = new cjs.Shape();
        this.shape_257.graphics.f("#76BC67").s().p("AgDgvQADgCAFABIAABYIgJAJg");
        this.shape_257.setTransform(99.5,244);

        this.shape_258 = new cjs.Shape();
        this.shape_258.graphics.f("#3B8C2D").s().p("AgbABQAPgIAMAAQANAAAPAHQgOAIgOAAQgLAAgQgHg");
        this.shape_258.setTransform(258.1,318.3);

        this.shape_259 = new cjs.Shape();
        this.shape_259.graphics.f("#CF333D").s().p("AgFALQgEgLgCgIQgDgWAIAAQAGAAANAMIgMAxIgGgUg");
        this.shape_259.setTransform(115.9,220);

        this.shape_260 = new cjs.Shape();
        this.shape_260.graphics.f("#7BBE72").s().p("AAAgJIgUgDQgNgCgGgFIA6gDQAFgHAGAHIAKADQgHAGgCAQQgDARgIAGQAGgegagFg");
        this.shape_260.setTransform(66.1,206.3);

        this.shape_261 = new cjs.Shape();
        this.shape_261.graphics.f("#7BBE72").s().p("AgWgDQgHgOgKgFIAUgCQAGgIAFAIIAwACQgFAFgKADIgTADQgSAHAFAhQgKgZgFgHg");
        this.shape_261.setTransform(274.1,206.6);

        this.shape_262 = new cjs.Shape();
        this.shape_262.graphics.f("#7BBE72").s().p("AgBAvIAAhcIACgBIAABdg");
        this.shape_262.setTransform(136.6,271.2);

        this.shape_263 = new cjs.Shape();
        this.shape_263.graphics.f("#7BBE72").s().p("AgBAuIAAhcIADAAIAABdg");
        this.shape_263.setTransform(204.5,271.1);

        this.shape_264 = new cjs.Shape();
        this.shape_264.graphics.f("#7BBE72").s().p("AgBAvIAAhdIADAAIAABdg");
        this.shape_264.setTransform(272.6,271);

        this.shape_265 = new cjs.Shape();
        this.shape_265.graphics.f("#7BBE72").s().p("AgDAAQAIggAAgQIAABhQgOgVAGgcg");
        this.shape_265.setTransform(340.3,271.3);

        this.shape_266 = new cjs.Shape();
        this.shape_266.graphics.f("#65B454").s().p("AgDAdQgZgXAGgWQABgHAIgGQAeASAIAog");
        this.shape_266.setTransform(441.6,307.1);

        this.shape_267 = new cjs.Shape();
        this.shape_267.graphics.f("#76BC69").s().p("AgJAfIAAhDIAJgDIAKADIAABNQgMgCgHgIg");
        this.shape_267.setTransform(446.1,307);

        this.shape_268 = new cjs.Shape();
        this.shape_268.graphics.f("#8CC77E").s().p("AgSA3IAKgBQAJgWAAgiQgBgyACgKQAEgBACABIABAaQAAAPAKAHQAAAMgIAVQgFAUAMAOIAAAJIgSABQgMgBgGgHg");
        this.shape_268.setTransform(119.1,233.6);

        this.shape_269 = new cjs.Shape();
        this.shape_269.graphics.f("#F06EBD").s().p("AgGAFQgMgYgBgJIARgKQAJgFAHAFQAIAGgCALQgBAGgEANIgPArQABgOgHgWg");
        this.shape_269.setTransform(451.1,294.1);

        this.shape_270 = new cjs.Shape();
        this.shape_270.graphics.f("#97CC8A").s().p("AgVAVQAAgMAPgZQAGgNACgHQAGgLANgDQACAYgMAcIgSAxQgOgSAAgMg");
        this.shape_270.setTransform(121.8,233.8);

        this.shape_271 = new cjs.Shape();
        this.shape_271.graphics.f("#90C984").s().p("AAJAzIgKgKQgKgdgEgNQgHgcAIgYIAVA1QALAbABAYQgCADgDAAQgDAAgCgDg");
        this.shape_271.setTransform(116.1,233.9);

        this.shape_272 = new cjs.Shape();
        this.shape_272.graphics.f("#96CC88").s().p("AgYAQQAHgHAPgZQAKgWARgGQABAXgKAXQgEAMgPAfg");
        this.shape_272.setTransform(449.6,309.6);

        this.shape_273 = new cjs.Shape();
        this.shape_273.graphics.f("#44833D").s().p("AgkAKQgRgHADgGQACgFANgKQAJgBAHAIQAEAHAMgBQALgBAEAFQAFABAQgMQAMgIAGAQQADAJgMAFQgRADgGADQgIADgLAAQgOAAgWgJg");
        this.shape_273.setTransform(119.6,240.1);

        this.shape_274 = new cjs.Shape();
        this.shape_274.graphics.f("#EA71B8").s().p("AgZgfQAHAAASgKQAOgIAMACQAAAogXA3QgCgrgagkg");
        this.shape_274.setTransform(104.8,228.4);

        this.shape_275 = new cjs.Shape();
        this.shape_275.graphics.f("#94CB88").s().p("AgcAsIAXgsQANgaATgRQAFAWgJAYQgMAigBAHg");
        this.shape_275.setTransform(104,243.6);

        this.shape_276 = new cjs.Shape();
        this.shape_276.graphics.f("#E773B6").s().p("AgSACIgIgrQANgFAOAIQAUALAGAAQgLAMgHAVQgJAfgCAHQgKgSgGgYg");
        this.shape_276.setTransform(94.3,228);

        this.shape_277 = new cjs.Shape();
        this.shape_277.graphics.f("#96CC88").s().p("AAIA9IgUgJIgJg0QgFgiAGgaIAtBpQgFAQgKAAIgCAAg");
        this.shape_277.setTransform(93.5,245.8);

        this.shape_278 = new cjs.Shape();
        this.shape_278.graphics.f("#F05A6A").s().p("AAOA1QgggNABgbQgMgfAYgTQAEAAAHgKQAHgIAJAFQADAOgHAkQgGAfAJATIgBADg");
        this.shape_278.setTransform(117.9,221.9);

        this.shape_279 = new cjs.Shape();
        this.shape_279.graphics.f("#67B555").s().p("AgVA3QgCgFAAgNQgDgXALgXIAUgsQAKgOAFACQAFACgBARQgEA5gZA3QgMgCgEgJg");
        this.shape_279.setTransform(451.6,310.5);

        this.shape_280 = new cjs.Shape();
        this.shape_280.graphics.f("#E82E44").s().p("AgiAAQADgMATglQAHAKANgCQAVgEAHADQgJAQgEAkQgIAfgcAJQgZgWAEgcg");
        this.shape_280.setTransform(121.5,221.8);

        this.shape_281 = new cjs.Shape();
        this.shape_281.graphics.f("#3D7636").s().p("AgmASQAEgNgHgLIgPgXIAvAAQAYABATAIIAQAHQAHAFAAAIQgBAJgHAGQgEADgLAEQgYAIgMAAIgBAAQgUAAgPgMg");
        this.shape_281.setTransform(456.9,320.1);

        this.shape_282 = new cjs.Shape();
        this.shape_282.graphics.f("#F84DAC").s().p("AgZBDIgBiJQALgCAHAKQAIANACABQATANAFATQADAQgGAVQAAAlgmAMIgFABQgDAAgCgEg");
        this.shape_282.setTransform(448.8,296.1);

        this.shape_283 = new cjs.Shape();
        this.shape_283.graphics.f("#F690CF").s().p("AAVBPQgYgMgMgMQgQgRACgaQgBgeADgKQAGgWAVgJQAHgRANgGQACAPgCBBQgBAvAKAeIABAEQgCAEgCAAQgDAAgCgEg");
        this.shape_283.setTransform(97,231.2);

        this.shape_284 = new cjs.Shape();
        this.shape_284.graphics.f("#F588CB").s().p("AAPBGQgegRgLgpQgIgwgKgYQANgBAaAHQAUADAKgTQAlBFgfBBQgEAHgGAAIgGgBg");
        this.shape_284.setTransform(443.5,296.1);

        this.shape_285 = new cjs.Shape();
        this.shape_285.graphics.f("#F652AC").s().p("AgpACQACgWATg5QANgFAHAKQACAFAHANQAZAMAGAXQAFARgGAbQgCAtgwAKQghgiADgsg");
        this.shape_285.setTransform(101.2,230.7);

        this.shape_286 = new cjs.Shape();
        this.shape_286.graphics.f("#149157").s().p("AhIAsQgMAAgFgCQgJgCgDgJQgHgRAQgOQAWgUAHgFQASgLAVAHQAIADAPgHQBKggAcBKQAMAighAAIhPABg");
        this.shape_286.setTransform(319.6,235.6);

        this.shape_287 = new cjs.Shape();
        this.shape_287.graphics.f("#98C452").s().p("AiBBKQgLAAgJgIQgIgHgEgNQgEgRAUgQIAxgpQAegTAkAQQAJAFAOgOIAWgWQAKgKALgCQAOgCAPANIAJABQAKgCALAMIgBABQATAEAKAXQADAFACALQACAJADAFIACAAQAVAOADAFQAIAMgOASIgPALQgJAHgFAAIieACIhfgBg");
        this.shape_287.setTransform(437.6,316.5);

        this.shape_288 = new cjs.Shape();
        this.shape_288.graphics.f("#98C452").s().p("AAABIIhuAAQgiAAgKgaQgFgNAGgMQAEgHAOgNQAhgfANgHQAbgPAhANQAIAEAKgIIAOgNQAngVAbAIQAcAIAUAmIAHAOQADAIAFABQAPAJAGAIQAHAMgFAOQgGARgPAHQgLAEgVABg");
        this.shape_288.setTransform(303.9,248.7);

        this.shape_289 = new cjs.Shape();
        this.shape_289.graphics.f("#98C452").s().p("AiOBSQgMgBgJgJQgIgJgDgPQgDgZAVgNIAtgmQAbgYAfAIQAGgFANABQAOAAAGgDIAbgNIAFgGQADgDADgBIAJAAQAXgOASAOQAgAKAXAmIAoA7QANAPgNAQQgNAQgUAAQhDAChdAAIh2AAg");
        this.shape_289.setTransform(97.6,255.6);

        this.shape_290 = new cjs.Shape();
        this.shape_290.graphics.f("#7CB94D").s().p("AjaEqQgrgBgTgXQgTgWAAgtIAAmdQAAguAUgWQAVgWAtgBQDVgEDWAEQAtABAVAWQAUAWAAAuIAAGdQAAAtgTAWQgTAXgrABQhtAChuAAQhsAAhugCg");
        this.shape_290.setTransform(442.1,238.1);

        this.shape_291 = new cjs.Shape();
        this.shape_291.graphics.f("#7BB94D").s().p("AjYEqQgrAAgUgXQgUgWAAgsIAAmhQAAgsAUgWQAUgWArgBQDYgEDZAEQArABAUAWQAUAWAAAsIAAGhQAAAsgUAWQgUAXgrAAQhtAChsAAQhrAAhtgCg");
        this.shape_291.setTransform(374.1,306.1);

        this.shape_292 = new cjs.Shape();
        this.shape_292.graphics.f("#7BB94D").s().p("AjWEqQgtAAgUgXQgUgWAAgvIAAmdQAAgtATgWQAUgWAqgBQDhgEDVAEQAqABATAXQATAWAAAuIAAGdQAAAugUAWQgVAWgtAAQhsAChqAAQhrAAhrgCg");
        this.shape_292.setTransform(170.1,306.1);

        this.shape_293 = new cjs.Shape();
        this.shape_293.graphics.f("#31932F").s().p("AjOErQgvAAgagXQgbgYgBguQgEjOAEjOQABgtAbgYQAagXAwAAIGcAAQAxAAAaAZQAaAZAAAwQAEDegEC0QAAAwgbAZQgaAYgxAAg");
        this.shape_293.setTransform(238.1,238.1);

        this.shape_294 = new cjs.Shape();
        this.shape_294.graphics.f("#31932F").s().p("AjMErQhmAAgChkQgCjHACjGQAChjBmgBIGYAAQAyAAAaAXQAcAZAAAuQAEDMgEDMQAAAvgcAZQgaAXgyAAIjMABIjMgBg");
        this.shape_294.setTransform(306.1,306.1);

        this.shape_295 = new cjs.Shape();
        this.shape_295.graphics.f("#31932F").s().p("AjLErQhngBgBhdQgEjNAEjLQABgvAbgYQAagYAxAAIGYAAQBnAAACBjQACDHgCDHQgCBjhmABg");
        this.shape_295.setTransform(34.1,306.1);

        this.shape_296 = new cjs.Shape();
        this.shape_296.graphics.f("#7BBE72").s().p("AAAAFQgSgCgKABIAAgIIA5ABQgKAIgRAAIgCAAg");
        this.shape_296.setTransform(3.1,272.6);

        this.shape_297 = new cjs.Shape();
        this.shape_297.graphics.f("#FEF8DF").s().p("AAAAFQgSgCgKABIAAgIIA5ACQgKAHgRAAIgCAAg");
        this.shape_297.setTransform(3.1,136.6);

        this.shape_298 = new cjs.Shape();
        this.shape_298.graphics.f("#E1F4ED").s().p("AgWAEIAAgIIAtAAIAAAIg");
        this.shape_298.setTransform(2.5,68.6);

        this.shape_299 = new cjs.Shape();
        this.shape_299.graphics.f("#7BBE72").s().p("AgDAcIAAg3IAIAAIAAA3g");
        this.shape_299.setTransform(340.6,337.2);

        this.shape_300 = new cjs.Shape();
        this.shape_300.graphics.f("#7BBE72").s().p("AgEAcIAAg3IAIAAIAAA3g");
        this.shape_300.setTransform(272.6,337.2);

        this.shape_301 = new cjs.Shape();
        this.shape_301.graphics.f("#7BBE72").s().p("AgDAcIAAg3IAIAAIAAA3g");
        this.shape_301.setTransform(204.6,337.2);

        this.shape_302 = new cjs.Shape();
        this.shape_302.graphics.f("#7BBE72").s().p("AgEAcIAAg3IAIAAIAAA3g");
        this.shape_302.setTransform(136.6,337.2);

        this.shape_303 = new cjs.Shape();
        this.shape_303.graphics.f("#51AA46").s().p("Ag6CjQgOgRAAgdQgDiVADhYQABgZACgGQAFgQAUgEQAbAjAiA/QAsBNAOAWIAACMIg9ACQgbAEgIAAIgDAAQgTAAgPgJg");
        this.shape_303.setTransform(468.6,119.4);

        this.shape_304 = new cjs.Shape();
        this.shape_304.graphics.f("#FEFEFE").s().p("AjqBrQgJgDgQgLIAAg8QAegTAOgMQAXgQAQgVQAUgaAegIQAegHAfAPQATAIANgCQANgDAPgPQAzgyA9ANQA8AMAcBCQAHATAHAKQAKAMAOAHQAjASgLAuQgFAUgPAHQgMAHgWAAQjigBi1ABQgPAAgPgHg");
        this.shape_304.setTransform(26.1,48.7);

        this.shape_305 = new cjs.Shape();
        this.shape_305.graphics.f("#53A84A").s().p("AB1FRIhRAAQglALgogLIhRAAQgnALgogLIhRAAQgeALgdgMIAAqmIJpACQALAFASgCQAzgEgTAxIAABRQALAogLAnIAABRQALAogLAlIAABRQALAogLAnIAABRQAKAcgJAqQggALgdgLIhRAAQgUAGgTAAQgUAAgUgGg");
        this.shape_305.setTransform(34.4,238.4);

        this.shape_306 = new cjs.Shape();
        this.shape_306.graphics.f("#82C56A").s().p("AonHKIhRAAQgkAIgXgKIAAgUQAjhZAeg9QAnhQAqg/QCAi5DtipQACgHAGAEICrhhQEIhwDYgYIBegKQA3gFAoADQASAfAFAqQACAWgCA2QgECfAEBjQADA/gDCBIABCLQAABQgDA7QgBANgBAGQgDALgHAGIiBAAQAFgmgYglQgggpgPgUQgQgXgcgEQgbgFgYAQQgcATgZAFQgcAGgegKQgEgBgIACIgMAEQgpAFgIgkQgiiMiWAKQgKAAgJgHIgDgFIADAEQADAKgDAHQgDAFgKAEQggAPgQAUQgPASgTADQgRADgYgJQg3gUglAMQgjAMgkAxQgWAegUALQgkAWgGARQgGARAOApIAEAOQACAIgCAHIhlAEQgUADgUAAQgTAAgUgDg");
        this.shape_306.setTransform(69.4,90.4);

        this.shape_307 = new cjs.Shape();
        this.shape_307.graphics.f("#D7F0E7").s().p("EglLAAUQAHgEAKgBQgKgBgHgEIAAhiQBSADB4ABIDJAAIAZgBQAMgBAZABQAVgCAJgSQAKgTgMgQIgagbQgLgMgSgiQgbgygqgMQgsgLgtAgQgcAUgWAFQgbAHgdgJQgugOgtA0QgYAagLAIQgWAPgagEIAAoIMBJpgABQAcAAAJAJQAJAJAAAcIgBSVQgQACgJgMIgMgXQgWgqhLh5QgHgNABgFQADhIhMgKQgdgSgmgoQgwgwgQgOQh7hkiWhPQgWgKgLgHQgSgKgGgRIgBgLQAAALgKAFQgPACgSgFIgegMQjzhgkugQIgbgBQgQgCgKgHQgHgFgBgKIgBgQQACgWgEgNQAAgBgBAAQAAgBgBAAQAAAAgBABQgBAAgBABQgFADAFgCQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQADAKgBAQIgBAbQgDAIgHAEQgjAIg4AFIhbAIQjhAei4BNIggAMQgSAGgQgBQgIgFgDgJQABAGADAEQACAPgMAHIgVAKIg2AcQghAQgUAMQgHADgWARQg4Aig9AwIgVAQQgNAIgNgBQgggNgugkQg5gsgUgMIhSguQgugaglgSIgYgMQgNgJgCgOQAEgEACgFQgEAIgJAFQgOADgQgEIgcgKQj0hdkugQIgbgBQgQgCgKgHQgIgIgBgPIgBAMQgDAJgHAEQgjAJg1AFQg7AFgeADQjTAbjLBTIggANQgSAFgQgEQgJgFgCgKQABAHADAEQAEAMgJAGQg1AhgaAPQgvAYgmALQgFgFgHgCQAHAUgOANQgIAIgUAKQjeCfiCDZQg6BjgeBVIgJAbQgHAOgSABgA92AVQAFADgDgFIgBgCQgEACADACgAaohmIAAgDQABgLgCgFIABATgA6hh/QABADABAFIAAgGQgBgFgBAAQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAABABgAv4kcIACANQAAgKgCgEQAAgEgFACQgMAEAMgDIACgBQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABg");
        this.shape_307.setTransform(238.1,67);

        this.shape_308 = new cjs.Shape();
        this.shape_308.graphics.f("#FEF5D5").s().p("EgkEAFnQgZAAgMgCQgVgEgNgOIAAqbQAKgLAUgEIAggIQAlgHAmAGQAsAQArgQQATgFAdACIAwABQAPgCATAEQAuALBKgCQBhgBAVABQAPABAfgDQAaABAQASQAAAAABABQAAAAAAABQAAAAABABQAAAAAAAAIAAAAQAsgaBRAFQBbAEAjgLIAEgBQAKgBAIAAQBZgHDCAEQASACAtgCQApgDAXAFIAaAAQAPAAAKACQAtAQAqgPQAmgHAjAGQAvAQAmgPQAigGAfAEIAPACQAnAPAtgPQAjgHAlAGQAtAQAngPQAigGAfAEIAQACQAUAJAXgCQATAAAYgJQAbgEA8ADQC/gJDAAJQARABAeAAQAjAAAMABIAQACQAOAHAQgCQALgBASgGIAagBQAPgCALgCQFagCCsACQBRgBEcAAQBFAAAZAEIAqAJQAXADATgJQAkgHAnAGQAsAQApgPQAkgHAlAGQAwAQAjgOIAPgDQAfgDAeAFQAuAOAhgKIANgEQAUgDAZABQAQAAAPADQAlANAugPQAngGAhAHQAkAPAzgQQAlgFAUATIAAKlIqfACIgEgGQgBgNABgVIgBgjIAABFIgFAGIqdgCQgFgIgBgOQgBAMgDAKIonABIhFABQgQAGghgEQgFgJgCgLQgBALgBAGQgLAHgMgGIqIAAIgEgGQgBgNAAgVIAAgjIgBBFIgDAGIqfAAIgEgGQgBgNABgVIgBgjIAABFIgFAGIqTAAQgJAFgFgHIgCgRQAAAQgJAJQgLAGgTACQgZABgHACIkQABIkPAAg");
        this.shape_308.setTransform(238.1,170.1);

        this.shape_309 = new cjs.Shape();
        this.shape_309.graphics.f("#50A945").s().p("AQGKxQgEgIgBgLQgBALgEAIIqeAAQgEgIgBgLQgBALgEAIIqcAAQgEgIgBgLQgBALgEAIIqeAAQgEgIgBgLQgBALgEAII0qABQgXAAgIgGQgJgHABgYQABiNAAntQAKgKATgEIAggGQAlgIAmAHQAtAOApgNQAlgIAlAHQAtAOApgNQAkgIAmAHQAsAOApgNQAigHAkAGQAKABAUAFQASADALgMQAHgNgDgSIgIgdQgGgkAHgjQAPgqgPgrQgIglAHglQAQgtgPgpQgIglAHglQAQgrgQgsQgHgoAIglQAIgYAFgLQAJgTARgHQAPgGATgBIAjgBIH3AAQAdAAAJABQAUACAQAIQAKAHACALQABAFgBAPIACgTQABgNAJgFQANgIASgDIAggBIIRAAQAVAAALABQASACANAHQANAJABAPIAAgEQACgNAJgFQARgLAfgBQFtgBC4ACQASAAAQAEQAnAMgCAnQABAEACgEQADgFgFACQgDgeAYgHIApgMQEQgKFNAJQAKABAKgBQBTgECEAAIDWABICgAAIAjABQAUACAOAIQAKAHACAMIAAARIABgRQACgNAJgGQAPgIAVgCQAJgBAdAAIH9AAQAhAAAJABQAYAEAPAOIAAUrQAAAXgGAHQgHAGgWAAI0jgBg");
        this.shape_309.setTransform(238.1,271.1);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,476.2,340.2);


    (lib.goal = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

        // <Layer>
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FC322F").s().p("AgVALIAngcIAEAJIgkAZIgHgGg");
        this.shape.setTransform(36.7,11.7);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FC322F").s().p("Ag0AiIBkhJIADAEIACAEIhiBHg");
        this.shape_1.setTransform(34.9,9.4);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FC322F").s().p("AgmAaIACgFIgFgBIBHgzIAAAGIAAACIABgBQAFgEAGAAIhTA7g");
        this.shape_2.setTransform(33.5,7.4);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FC322F").s().p("AgkASIAhgWIADACIAAABIAAgCIABgFIAagTQAHABAEACIhJA0QgCgGABgEg");
        this.shape_3.setTransform(31.5,5.1);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FFFFFF").s().p("AALA2QgGgEgDgHIgCgJQAAAGgCAGQgFAJgLACQgKADgIgGQgJgFgCgLQgCgKAFgJIADgEQgFgBgEgDQgJgFgCgJQgCgKAFgJQAFgJAKgDQAKgDAJAGIABABIAAgCQAAgLAHgHQAHgHAJAAQAKAAAHAHQAHAHAAALIAAACIABgBQAJgGAKADQAKADAFAJQAGAJgDAKQgCAJgJAFQgDADgGABQAGAGABAJQABAIgFAIQgFAJgKACIgGABQgHAAgGgEg");
        this.shape_4.setTransform(34,8.1);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#FFFFFF").s().p("AALA2QgGgEgDgHIgCgJQAAAGgCAGQgFAJgLACQgKADgIgGQgJgFgCgLQgCgKAFgJIADgEQgFgBgEgDQgJgFgCgJQgCgKAFgJQAFgJAKgDQAKgDAJAGIABABIAAgCQAAgLAHgHQAHgHAJAAQAKAAAHAHQAHAHAAALIAAACIABgBQAJgGAKADQAKADAFAJQAGAJgDAKQgCAJgJAFQgDADgGABQAGAGABAJQABAIgFAIQgFAJgKACIgGABQgHAAgGgEg");
        this.shape_5.setTransform(34,8.1);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#FFFFFF").s().p("ABCBMIAAhXQgDghgdgQQgNgHgVgDQghACgRAYQgMAOgDAQIAABaQAAAGgEAAQgGAAAAgGIAAhbQADgQALgQQAWggAngCIAAAAIAMACQANACALAGQAlASADApIAABYQAAAGgFAAQgGAAABgGg");
        this.shape_6.setTransform(34.1,56.7);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#FFFFFF").s().p("AjKAEQgFAAABgEQgBgDAFAAIGVAAQAEAAAAADQAAAEgEAAg");
        this.shape_7.setTransform(33.6,47.2);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#FFFFFF").s().p("AgxAFIAAgJIBjAAIAAAJg");
        this.shape_8.setTransform(33.9,32.1);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#FFFFFF").s().p("AgEBCIAAiDIAJAAIAACDg");
        this.shape_9.setTransform(34,31.8);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FFFFFF").s().p("Ag2BKIAAhbQAAgXAQgRQAQgQAWAAQAXAAAQAQQAQARAAAXIAABbgAgfgxQgNAOAAASIAABRIBZAAIAAhRQAAgTgNgNQgOgNgSAAQgRAAgOANg");
        this.shape_10.setTransform(34,31.8);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#71D1F8").s().p("AgVBAIAAh+QATAAALANQANANAAATIAABRg");
        this.shape_11.setTransform(36.3,31.8);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#B3E6FB").s().p("AgWBAIAAhRQAAgSAOgOQALgNATAAIAAAAIAAB+g");
        this.shape_12.setTransform(31.7,31.8);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FD6BAE").s().p("AgMBFIAAiBQAMgIANAAIAACJg");
        this.shape_13.setTransform(43.2,32.4);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#FC3890").s().p("AgKBBIAAhSIgBgEQAAgcAWgPIAACBg");
        this.shape_14.setTransform(40.6,32.8);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#FC3890").s().p("AgLBBIAAiBQALAGAFAMQAHALAAAOIAABWg");
        this.shape_15.setTransform(27.2,32.7);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#FD6BAE").s().p("AgLBFIAAiJQALAAAMAHIAACCg");
        this.shape_16.setTransform(24.7,32.4);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#FFFFFF").s().p("AgWAYQgNgNgBgQQAAgTANgMIA7A9IAAABQgLALgSAAQgRAAgMgNg");
        this.shape_17.setTransform(52.8,32.2);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#FFFFFF").s().p("AgYAZQgNgMAAgRQAAgPAJgMIAGgGIA8A8QgNAPgUAAQgQAAgNgNg");
        this.shape_18.setTransform(46.5,26);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#FFFFFF").s().p("AgYAZQgNgOAAgQQAAgLAFgIQAGgFAEgHIA8A8IgGAFQgLAIgPAAQgQABgOgNg");
        this.shape_19.setTransform(40.4,19.8);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#FFFFFF").s().p("AgkAaIAAgBIA8g9QAMANAAASQAAAQgNANQgMANgQAAQgSAAgNgLg");
        this.shape_20.setTransform(15.1,32.2);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#FFFFFF").s().p("AglAXIA8g8IAFAFQAKAMAAAQQAAAQgNANQgNANgQAAQgUAAgNgPg");
        this.shape_21.setTransform(21.5,26);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#FFFFFF").s().p("AgfAdIgFgFIA7g8QAEAGAGAGQAEAJAAAKQAAARgNAMQgMANgRAAQgOAAgMgIg");
        this.shape_22.setTransform(27.6,19.7);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#FFFFFF").s().p("AgeAWQgEgJgFgFIAngoIABABIAnAmQgGAHgDAIQgOAMgRgBQgRABgNgMg");
        this.shape_23.setTransform(34,15.2);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#FFFFFF").s().p("AAyA9IhrhyQgEgEAFgDQADgEAEAEIBrByQAEAEgFADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
        this.shape_24.setTransform(41,25.9);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#FFFFFF").s().p("AgoAsQgEgDAEgEIBMhSIAHAIIhMBRQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
        this.shape_25.setTransform(39.3,27.6);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#FFFFFF").s().p("AAjAuIhPhVIAGgHIAAgBIBRBWQAEAEgEADQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
        this.shape_26.setTransform(28.6,27.4);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#FFFFFF").s().p("Ag4A9QgFgDAEgEIBrhyQADgEAEAEQAFADgEAEIhrByQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
        this.shape_27.setTransform(27.1,25.9);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#FFFFFF").s().p("AAyA9IhrhxQgDgEADgEQAEgDAEADIBrByQADAEgEADIgDACQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAgBg");
        this.shape_28.setTransform(34,39.6);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#FFFFFF").s().p("Ag5A9QgDgDADgEIBrhyQAEgDADADQAEAEgDAEIhrBxQAAABgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBgBg");
        this.shape_29.setTransform(34,39.6);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#FFFFFF").s().p("AAyA9IhrhxQgDgEADgEQAEgDAEADIBrByQADAEgEADQAAABAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAgBg");
        this.shape_30.setTransform(47.5,39.6);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#FFFFFF").s().p("Ag5A9QgDgDADgEIBrhyQAEgDADADQAEAEgDAEIhrBxQAAABgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBgBg");
        this.shape_31.setTransform(47.5,39.6);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#FFFFFF").s().p("AAyA9IhrhxQgDgFAEgDQAEgDADADIBrByQADAEgDADQgBABAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBgBg");
        this.shape_32.setTransform(19.2,39.6);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#FFFFFF").s().p("Ag4A9QgEgDADgEIBrhyQAEgDAEADQADAEgDAEIhrBxQAAABgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAgBg");
        this.shape_33.setTransform(19.2,39.6);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#4CB443").s().p("AgdBLIAAiUQAZAAAQASQASARAAAaIAABXg");
        this.shape_34.setTransform(37.2,57.8);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#7AD747").s().p("AgeBLIAAhXQABgaARgRQAQgSAaAAIAACUg");
        this.shape_35.setTransform(31.1,57.8);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#FEDAD6").s().p("AgTALQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgRQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAnAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAARQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
        this.shape_36.setTransform(51.2,62.1);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#FC4738").s().p("AgTALQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIAAgRQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAmAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIAAARQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAg");
        this.shape_37.setTransform(27.2,52.5);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#FEDAD6").s().p("AgTALQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBIAAgRQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAIAnAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAARQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAg");
        this.shape_38.setTransform(20.4,55.2);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#FEDAD6").s().p("AgTALQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBIAAgRQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAIAnAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAARQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
        this.shape_39.setTransform(43.2,54.1);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#FEDAD6").s().p("AgTALQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBIAAgRQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAIAnAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAARQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAg");
        this.shape_40.setTransform(18,62.4);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#FFFFFF").s().p("AgSALQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgRQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAmAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAARQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
        this.shape_41.setTransform(51.6,50.9);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#FC4738").s().p("AgTALQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgRQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAnAAQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAAARQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAg");
        this.shape_42.setTransform(47.2,58.7);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#FC695B").s().p("AgTALQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBIAAgRQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAnAAQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAARQAAABAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAg");
        this.shape_43.setTransform(15.7,49.8);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#FBFBFB").s().p("AgFAGQgDgCAAgEQAAgIAIAAQADAAADADQADADAAACQAAADgDADQgDADgDAAQgCAAgDgDg");
        this.shape_44.setTransform(47.6,34.2);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#FBFBFB").s().p("AgFAGQgDgDAAgDQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgCAAgDgDg");
        this.shape_45.setTransform(34.1,22.3);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#FBFBFB").s().p("AgFAGQgDgDAAgDQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAJgJAAQgCAAgDgDg");
        this.shape_46.setTransform(14.6,39.6);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#FBFBFB").s().p("AgIAAQAAgCADgDQADgDACAAQADAAADADQACADAAACQAAAJgIAAQgHAAgBgJg");
        this.shape_47.setTransform(52.5,39.6);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#FBFBFB").s().p("AgFAGQgDgDAAgDQAAgCADgDQADgDACAAQADAAADADQACADAAACQAAAJgIAAQgDAAgCgDg");
        this.shape_48.setTransform(40.9,39.6);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#FBFBFB").s().p("AgFAGQgDgDAAgDQAAgCADgDQADgDACAAQADAAADADQADADAAACQAAADgDADQgDADgDAAQgDAAgCgDg");
        this.shape_49.setTransform(26.8,39.6);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#FBFBFB").s().p("AgFAGQgCgCAAgEQAAgCACgDQADgDACAAQADAAADADQACADAAACQAAAEgCACQgDADgDAAQgCAAgDgDg");
        this.shape_50.setTransform(34.2,34.2);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#FBFBFB").s().p("AgFAGQgDgCAAgEQAAgCADgDQACgDADAAQADAAADADQADADAAACQAAADgDADQgDADgDAAQgCAAgDgDg");
        this.shape_51.setTransform(19.1,34.2);

        this.shape_52 = new cjs.Shape();
        this.shape_52.graphics.f("#FBFBFB").s().p("AgFAGQgDgDAAgDQAAgCADgDQADgDACAAQADAAADADQADADAAACQAAADgDADQgDADgDAAQgDAAgCgDg");
        this.shape_52.setTransform(47.6,44);

        this.shape_53 = new cjs.Shape();
        this.shape_53.graphics.f("#FBFBFB").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgDACAAQADAAADADQACADAAACQABAJgJAAQgCAAgDgDg");
        this.shape_53.setTransform(34.2,44);

        this.shape_54 = new cjs.Shape();
        this.shape_54.graphics.f("#FBFBFB").s().p("AgIAAQAAgCADgDQADgDACAAQADAAADADQADADAAACQAAADgDADQgDADgDAAQgIAAAAgJg");
        this.shape_54.setTransform(19.1,44);

        this.shape_55 = new cjs.Shape();
        this.shape_55.graphics.f("#DC8043").s().p("AhqEGIAAoLIDVDXIAAE0g");
        this.shape_55.setTransform(44.9,38.9);

        this.shape_56 = new cjs.Shape();
        this.shape_56.graphics.f("#E8A87D").s().p("AhrEHIAAk0IDVjZIACABIAAIMg");
        this.shape_56.setTransform(23.3,38.8);

        this.shape_57 = new cjs.Shape();
        this.shape_57.graphics.f("#FC6832").s().p("AgCAoQgGgBgEgFQgEgGABgHIACgGQgFAFgIgBQgHgBgDgFQgEgGABgGQABgEAEgEQAEgEAFAAIgDgGQgCgHAEgGQADgFAGgDQAHgCAGADQAEACACAHIAAABIABgBQAEgFAHAAQAGgBAFAEQAFAFABAGQABAHgFAFIgBABIABAAQAHABAEAFQADAEgBAHQgBAHgGAEQgFAEgHgBIgGgCIAAADQgBAGgGAFQgEADgEAAIgCAAg");
        this.shape_57.setTransform(54.8,31.6);

        this.shape_58 = new cjs.Shape();
        this.shape_58.graphics.f("#FFFFFF").s().p("AgCAoQgGgBgEgFQgEgGABgHQAAgDADgEQgFAGgJgBQgGgBgFgFQgDgFABgHQACgLANgBQgDgCgBgEQgBgGADgGQADgGAGgDQAHgCAGADQAEADACAGIABABIAAgBQAFgFAGAAQAGgBAFAFQAGAEAAAGQAAAHgEAFIgBABIACAAQAGABAEAFQADAEgBAHQgBAHgGAEQgFAEgHgBIgGgCIAAADQgBAHgGAEQgEADgEAAIgCAAg");
        this.shape_58.setTransform(49,25.7);

        this.shape_59 = new cjs.Shape();
        this.shape_59.graphics.f("#7AD747").s().p("AgCAoQgGgBgEgFQgEgGABgHQABgEACgDQgFAGgJgBQgHgBgDgFQgEgGABgGQACgLAMgBIgDgGQgCgHAEgGQADgFAGgDQAHgCAGADQAEADACAGIAAABIABgBQAEgFAHAAQAGgBAFAFQAGAEAAAGQABAHgFAFIgBABIABAAQAHABAEAFQADAEgBAHQgBAHgFAEQgGAEgHgBIgGgCIAAADQgBAHgGAEQgEADgEAAIgCAAg");
        this.shape_59.setTransform(43.1,20.1);

        this.shape_60 = new cjs.Shape();
        this.shape_60.graphics.f("#FD77C4").s().p("AgCAoQgGgBgEgFQgEgGABgHIACgGQgFAFgIgBQgGgBgEgFQgEgGABgGQACgLANgBIgDgGQgCgHADgGQADgGAHgCQAGgCAGADQAEACACAHIAAABIABgBQAFgFAGAAQAGgBAGAFQAFAEAAAGQABAHgFAFIAAABIABAAQAGABAEAFQADAEgBAHQgBAGgFAFQgGAEgHgBIgGgCIAAADQgBAGgFAFQgFADgEAAIgCAAg");
        this.shape_60.setTransform(37,14.7);

        this.shape_61 = new cjs.Shape();
        this.shape_61.graphics.f("#FC6832").s().p("AgIAlQgFgFgBgGIAAgDIgGACQgHABgGgEQgFgFgBgGQgBgHADgEQAEgFAGgBIABAAIAAgBQgFgFABgHQAAgGAFgEQAGgFAGABQAGAAAFAFIABABIAAgBQABgHAFgCQAGgDAGACQAHACADAGQADAGgCAHIgDAGQANABACALQABAGgEAGQgDAFgHABQgIABgFgFIACAGQABAHgEAGQgEAFgGABIgDAAQgDAAgFgDg");
        this.shape_61.setTransform(13.3,31.7);

        this.shape_62 = new cjs.Shape();
        this.shape_62.graphics.f("#FFFFFF").s().p("AgHAlQgGgEgBgHIAAgDIgGACQgHABgFgEQgGgEgBgHQgBgHADgEQAEgFAHgBIABAAIgBgBQgFgFABgHQAAgGAGgEQAFgFAGABQAHAAAEAFIABABIAAgBQABgGAFgDQAGgDAHACQAGADADAGQAEAGgCAGQgBAEgCACQAMABACALQABAGgDAGQgEAFgHABQgLABgFgJIgBABQAFAEABAFQABAHgEAGQgEAFgGABIgDAAQgDAAgEgDg");
        this.shape_62.setTransform(19.3,25.7);

        this.shape_63 = new cjs.Shape();
        this.shape_63.graphics.f("#7AD747").s().p("AgHAlQgGgFgBgGIAAgDIgGACQgGABgHgEQgFgEgBgHQgBgHAEgEQADgFAHgBIAAAAIAAgBQgEgFAAgHQABgGAEgEQAGgFAGABQAGAAAFAFIABABIAAgBQABgGAFgDQAGgDAGACQAHADADAFQADAGgCAHIgCAGQANABABALQABAHgEAFQgEAFgGABQgIABgFgFQACADAAADQABAHgDAGQgFAFgGABIgDAAQgDAAgEgDg");
        this.shape_63.setTransform(25.2,20.1);

        this.shape_64 = new cjs.Shape();
        this.shape_64.graphics.f("#FD77C4").s().p("AgHAlQgGgFgBgGIAAgDIgGACQgHABgFgEQgGgEgBgHQgBgHADgEQAEgFAHgBIABAAIgBgBQgFgFABgHQABgGAFgEQAFgFAGABQAHAAAEAFIABABIAAgBQABgHAFgCQAGgDAHACQAGADADAFQAEAGgCAHIgDAGQAMABACALQABAGgDAGQgEAFgHABQgIABgGgGIADAHQABAHgEAGQgEAFgGABIgDAAQgDAAgEgDg");
        this.shape_64.setTransform(31.2,14.7);

        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(9.3,2.3,49.6,63);


// stage content:
    (lib.Untitled1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;