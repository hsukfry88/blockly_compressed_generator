(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
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



(lib.wallBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D19A32").s().p("AgEgXQAUAXgUAYg");
	this.shape.setTransform(-263.2,-183.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D69F33").s().p("AALgXQgOAXAOAYQgtgYAtgXg");
	this.shape_1.setTransform(-268,-183.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2AB37").s().p("AgJAYQgfgYAfgXIAdAAQALAXgLAYg");
	this.shape_2.setTransform(-265.8,-183.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D7A737").s().p("AgRAAQAHgEAJABIATADQgMAEgHAAQgJAAgHgEg");
	this.shape_3.setTransform(-257.1,-171.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DDA737").s().p("AAPgOQgCAbgbACQAKgSATgLg");
	this.shape_4.setTransform(-262.3,-178.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9A234").s().p("AgKgEIAAgJQAYgGgEAOIgGAVg");
	this.shape_5.setTransform(-270.6,-183.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DDA737").s().p("AgMAQQgMgKABgaQAMATAIAFQALANARABQgMADgJAAQgKAAgGgFg");
	this.shape_6.setTransform(-270.3,-179.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DAA435").s().p("AgcAQQAHgFANgSQAHgMAOAGQALAFACACQAGAFgEAGQgGALgQAAQgUgBgOABg");
	this.shape_7.setTransform(-257,-177.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBC33D").s().p("AAJBDQgNgGgFABQgWAFgMgMQgKgKgGgXIABgQQACgIAIgEQALgEgBAKQAEgHgFgDQgHgDgCgDIgLgKQAhgoAWgCQAUgCArAiIABBEQgMASgTAMQgFAHgHAAQgEAAgEgCg");
	this.shape_8.setTransform(-266.8,-183.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBCF84").s().p("AgYAFQAbgSAWARIgBABg");
	this.shape_9.setTransform(4.8,-182.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDD185").s().p("AAAAGIg/gDQAZgJAmACQA2ACAJgBQgWAJghAAIgIAAg");
	this.shape_10.setTransform(-6.2,-182.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6D791").s().p("AhjAAQBsgRBbARQgNAKgWgBIglAAQgKgCg1ADIgIAAQgjAAgVgKg");
	this.shape_11.setTransform(-2.7,-186.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AA8358").s().p("AgNAAQACglgIgOQARANAWgNQgIAPAAAkQAAAjgMARQgPgRACgjg");
	this.shape_12.setTransform(-205.8,184.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FBE6E6").s().p("AgDAHQgOgDgBgOQAEADAQAFQANACAEALIgWgEg");
	this.shape_13.setTransform(-149.8,-176.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#19291A").s().p("AAAgcIAGAUIAAASIgGATQgJgcAJgdg");
	this.shape_14.setTransform(-277.3,-183.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333C20").s().p("AgPgUQAfAHgBAiIgLABg");
	this.shape_15.setTransform(-250.2,-182.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F18485").s().p("AgWANIgBgOQABgKAKgEQACALAOAEQAQABAEAGQgJAJgOAAIgXgDg");
	this.shape_16.setTransform(-150.4,-175.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FBE6E6").s().p("AgJABQACgQgBgJIARABQABAFAAADIAAAMQABASgLAKQgJgIAAgQg");
	this.shape_17.setTransform(-152.8,-176.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#444C33").s().p("AACAOQgBgJgJgGQgNgJgCgEIAJgJQAfALAHAaIgKAJg");
	this.shape_18.setTransform(-260.2,-190.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3D4529").s().p("AgKATQgBgHgCgDQAEgdAWgIIABATIgTAmQgEgDgBgHg");
	this.shape_19.setTransform(-276.1,-187.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ED5F61").s().p("AgLAHQAEgDgNgEQgLgFARgHIAXAAIALADQAFACAAAHIgTAIQgFAFgCAAQgFAAgFgGg");
	this.shape_20.setTransform(-152.5,-180.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FAD8D8").s().p("AgFAZQgHgDgBgFQALgQgBgVIAQgJQgCAKACAUQABATgNAKQgBgDgFgCg");
	this.shape_21.setTransform(-150.1,-183.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#40482B").s().p("AgHAQIgKgeQACgBABgJQABgGAEgDIAbBDQgSgCgHgQg");
	this.shape_22.setTransform(-275.7,-178.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F07D7E").s().p("AABAoQgQgHgFADQgDgFACgHQAEgHAMgMQAEgFABgRQABgQAHgHQAPAOAAAWIgFAiQgCALgIAAIgHgBg");
	this.shape_23.setTransform(-149.6,-182.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4A4E2B").s().p("AgJACQAEgZgCgLQAFgJAEAIQAZAvgjAcQgFgOAEgYg");
	this.shape_24.setTransform(-248.8,-176.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1F2E1C").s().p("AAtALQgUgKgcADIgzAGQAYgXAeABQAUABAiAOQADAKgHAAIgFgCg");
	this.shape_25.setTransform(-267.3,-193.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#414A33").s().p("AgFATQgWgFgGgYQgEgOAOAEQAGANAXAHQAYAIAFAOQgdAAgLgDg");
	this.shape_26.setTransform(-255.3,-187.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333A1E").s().p("AgCALQgcgFgPgTIAvAEQAeADANAUQghAAgOgDg");
	this.shape_27.setTransform(-268.2,-172.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EF7374").s().p("AgPAUIgHgUQgCgKAJgJQAPgPARARQARAYgcATIgHABQgIAAgGgHg");
	this.shape_28.setTransform(-152.4,-183.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4E5235").s().p("AgGAQQghAAgPggQAXAPAfgEIA3gIQgeAegdAAIgCgBg");
	this.shape_29.setTransform(-257.1,-168.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DDA737").s().p("AhGASQgKgJAJgJIAUgWQAzgZAsAUQAHAGAQAHQAMAHgEAPIgIAUQgkgOgaABQgeAAgaAWg");
	this.shape_30.setTransform(-267.5,-190.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EBB53A").s().p("AADBVIgIgKQgNgHghgGQgfgGgPgKIgKgMQgWgagKgnQgDgMACgJIAHgWQAEgNAJgHQAJgDAHAFIAMAMQAGAIAEAIQABAHAAAGIgHAeQAEAkAmgGIATAAQAMAAAHgCQARgHADgRQABgIgCgZQgCgVACgMQAFgSALgEQALAAAIAJQAGASAXAGQAfAIAGAFIAAACQALANAFAIQAIANACAMQAGAPgDAVIgJAkQgGAUgNAGQgiARgVACIgGAAQgbAAgWgVg");
	this.shape_31.setTransform(-263,-178.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2E1AB").s().p("AgmACIAAgEIBMAAIABAFg");
	this.shape_32.setTransform(4.1,-194.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7E7B0").s().p("Ag/gDIB/AAIAAAFIhAACIgJAAQggAAgWgHg");
	this.shape_33.setTransform(-6.3,-194.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EFDA92").s().p("AhnAEIAAgHIDPAAQABADgBAEg");
	this.shape_34.setTransform(-2.3,-190.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9CC233").s().p("AhZAWIgdAAIAAglIAdgCQBwgKBgALIAAAkIgIABIiMACIg8gBg");
	this.shape_35.setTransform(-3.8,-188.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D1C4AC").s().p("AgZAMQgFgDAAgGQAEABACgDQATACAGgCQAOgBAIgOIAIAIIgTAUIgcABIgJgDg");
	this.shape_36.setTransform(-44.1,-164.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#634F54").s().p("AgSAGQADgKAPgKIAHAAIALABIgIASIgSAKg");
	this.shape_37.setTransform(-40.9,-163.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A6918A").s().p("AgCAXIgGgKQgDgZAMgMQAJAKAAANQAAAGgDAQQgEAEgDAAIgCgCg");
	this.shape_38.setTransform(-40.8,-167.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A8958C").s().p("AgEAaIgKgNIABgiIAagMQgHAUAAANQAAASAJAPIgGABQgJAAgEgIg");
	this.shape_39.setTransform(-48.2,-167.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#784B63").s().p("AgUAkQgQgUgCgPQgBgSASgQQAegOAeAZIgBAWQgBAMgDAJQgKAQgQACIgGAAQgHAAgPgDg");
	this.shape_40.setTransform(-44.6,-167.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9DC037").s().p("AAOgMIgaAaQgFggAfAGg");
	this.shape_41.setTransform(-23.1,-176.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D6D39D").s().p("AgPgBIACgHQAGgRALAGIAMALIgSAdQgKgFgDgRg");
	this.shape_42.setTransform(-40.3,-161.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E9B66B").s().p("AAiAEIhDABQAhgTAiASg");
	this.shape_43.setTransform(-202.3,151.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEF4D3").s().p("Ah2AFQgNAAgIgHIEDgDQAPgBAFAKIjtABIgQABIgFgBg");
	this.shape_44.setTransform(-205.8,158.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F8E9B4").s().p("AiLACQAbgJArABQA6ACALgCQAhgJAkAJQAHABAdgBQAWAAANAIQhHAKhFAAQhFAAhGgKg");
	this.shape_45.setTransform(-205.8,152.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F0E7AD").s().p("Ag7AGIAAgHQAVABAngFQAkgBAXAMg");
	this.shape_46.setTransform(-197.7,147);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F1E7AD").s().p("AhQgCQA6gHBjAGQAGADgCABQgBABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIhOACIgIABQgqAAgdgJg");
	this.shape_47.setTransform(-211.6,147.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#86B025").s().p("AgGACQAFgNAAgIIAFAAIADAnQgPgFACgNg");
	this.shape_48.setTransform(-236.6,187.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#88B425").s().p("AgSgIQAGAJAMABQAEABAPgCIAJAGIg2ACQgEgLAMgGg");
	this.shape_49.setTransform(-229.8,190.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D8DD96").s().p("AgSAAIAKgHIARgKIAKAcQgPAHgGAAIgBAAQgLAAgEgSg");
	this.shape_50.setTransform(-229.8,189.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D7DC98").s().p("AgHATQgMgVACgRQACACAUAGQAPAEgBAPIgJABQgEAHgDADQgDABgBAAQgDAAgDgBg");
	this.shape_51.setTransform(-229.9,186.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DEDDA1").s().p("AgSgZQAHAJALgCIAUgFQAFAGgBAPQgCAMAIAGIABAJIgxABQgYgaAYgZg");
	this.shape_52.setTransform(-238.8,188.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CAD08B").s().p("AgGATIgcgTIAMAAQAGgBACgHQAVgVAcAVIgBAAQABAIgIAGIgMANg");
	this.shape_53.setTransform(-239.2,191.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D2DB8D").s().p("AgTAJQAAgFACgEQAIgIAEgCQAFgEAJAGIALAAQgEAPgLAEIgGABQgHAAgLgDg");
	this.shape_54.setTransform(-248.7,189.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D7DC98").s().p("AgMASQgPgWALgIQAHgGAXgBQAJAHgCAIIgHANQgIgIgGALQgEAIgEAAIgEgCg");
	this.shape_55.setTransform(-249.2,187.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FBD79B").s().p("AAAASQgRAAAAgSQAAgRARgBQASAAAAARQACAUgUAAIAAgBg");
	this.shape_56.setTransform(-196.8,128.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#573848").s().p("AgTAMIABgbIARgLIAJAAIADAIIAIAdIABABQgLAPgJAAQgJAAgKgPg");
	this.shape_57.setTransform(-205.8,178.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#8EA746").s().p("AgCAIQgIgCgBgGQgBgIAGABIAIAFIAKAHQgGADgGAAIgCAAg");
	this.shape_58.setTransform(-34.8,-114.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#ACBF6E").s().p("AgEgJQAJgLADAUQAAABgCANQgTgOAJgJg");
	this.shape_59.setTransform(-10.8,-119.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FDC46C").s().p("AhEAXIgKgJIABgcQAMgMAUAEQAQAFAugBQApgCAVAQIAAASQgVAHgrgCQgpgCgVAGIgCABg");
	this.shape_60.setTransform(-7.8,-184.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F8C16C").s().p("AhnASIAFgGQARgJAmACQAlABAQgHQAGgIAJgHQAMgGAVgBIAhgDQAHAAAGAEIAAAnIgEABIgEAAQgIgHgMABQALAAAIAGQg0AJgvAAQgzAAgwgJg");
	this.shape_61.setTransform(-2.3,-184.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#AABB59").s().p("AAAAKQgCgBgCgDQgDgDAAgDQgBgDADgDQADgEAEACQABABAGAKIgGAFIgDACIAAAAg");
	this.shape_62.setTransform(-18.8,-131.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#9C7A87").s().p("AgIAHQgCgFADgOIAHgCIAKAcIgHABQgJAAgCgIg");
	this.shape_63.setTransform(-15.8,-150.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FBDBA3").s().p("AgIAJQgEgFACgFQABgDAEgEQAEgEACAAQAJgBACANQgBANgKABQgFAAgEgFg");
	this.shape_64.setTransform(-22.3,-154.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F3D39C").s().p("AADB6IgChyQAAgNgGgxQgHgnAFgZQAMgGACABQADACAAANIABDkQgCAEgDAAIgDgCg");
	this.shape_65.setTransform(-16.9,-164.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E9D9B6").s().p("AgCgdQAFAWAAAMQAAANgFALg");
	this.shape_66.setTransform(0.7,-170.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EAD9B6").s().p("AAAgbQAKAdgKAaQgJgdAJgag");
	this.shape_67.setTransform(0.7,-155.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FBD89F").s().p("AgMAOQgEgEgBgHQABgIAFgGQAGgGAIABQANABABAPQgCAPgPACIgDAAQgFAAgEgDg");
	this.shape_68.setTransform(-4.9,-154.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FAF0CF").s().p("AhIA1IAJgJIgCgxQAAgfAOgTIAHgEIB1ABIAABzIh1ADg");
	this.shape_69.setTransform(-199.2,185.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FBF1D0").s().p("AhGA6IABhzIB0gCIAFAEQAQAQgBAfQAAAlAEAMQgCAMgLAAIgLAHg");
	this.shape_70.setTransform(-212.5,185.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D5DD91").s().p("AgOgHQAIgTAVAKIgBAJQgGACgDAMQgDAMgGACg");
	this.shape_71.setTransform(-237.3,197.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#DADE9D").s().p("AgTAXIABgtIAbAHQAPAKgFASIgIAKg");
	this.shape_72.setTransform(-239.8,198.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B4CF5C").s().p("AgZAFIgHgHQACgKAHgCQAFgBAKAAQAJgJAMAJQAQADADAKIABAFQgPAGgSAKIgDABQgMAAgKgPg");
	this.shape_73.setTransform(-239.1,195.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B7C770").s().p("AgbAFIgBgHIA5gDIgIALg");
	this.shape_74.setTransform(-248.9,192.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#9CC233").s().p("AgFAAQAAgPAIgIIADAuIgJABIgCgYg");
	this.shape_75.setTransform(-232.2,198.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E3E3AC").s().p("AgVAAQAAgFADgRQAJABAPAAQAOACACASIgBAQIgkAJQgGgLAAgNg");
	this.shape_76.setTransform(-229.9,198.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F3EDC3").s().p("AgHAPQgPgBgIgMQABgRAWgLQAIgJAIAGQAEAEAHAKIAKAKIAAAGQgTANAAASg");
	this.shape_77.setTransform(-234.9,193.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#ECEDB8").s().p("AgYgBQAbgLAVAMIAAAGIgwABg");
	this.shape_78.setTransform(-249.2,192.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#DCDEA0").s().p("AgCgLIAQAQIgbAHg");
	this.shape_79.setTransform(-250.2,199);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E5E3AE").s().p("AAAAQQgOgFgDgMQgFgaARAEQAVAGACgEIABAtg");
	this.shape_80.setTransform(-248.8,197.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EEEEBB").s().p("AgWAEQgEgDABgBQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAvgCIABAKg");
	this.shape_81.setTransform(-229.4,193.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#AEC260").s().p("AAHANIgWgBQgQgBACgLIADgDQAMgKAOACQAJABATAFIACAFIgBAFQgHAIgMAAIgDAAg");
	this.shape_82.setTransform(-229.8,191.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FBD99F").s().p("AgIAaQgTgGAGgYQAFgWALgFQAIgFATALIABA6QgXgEgIgDg");
	this.shape_83.setTransform(159.9,189.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E9D8B5").s().p("AgCAAQAEgPABgJIAAAxQgHgLACgOg");
	this.shape_84.setTransform(180.6,184.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8EA746").s().p("AgCAIQgIgCgBgGQgBgIAGABIAIAFIAKAHQgGADgGAAIgCAAg");
	this.shape_85.setTransform(-94.7,185.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#ACBF6E").s().p("AgGgJIADgCIADgBQAMAJgIAQQgNgIADgOg");
	this.shape_86.setTransform(-70.6,180.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#AABB59").s().p("AAAAKQgCgBgCgDQgDgDAAgDQgBgDADgDQADgEAEACQABABAGAKIgGAFIgDACIAAAAg");
	this.shape_87.setTransform(-78.7,168.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FEFEFE").s().p("AozDLQhNgHg5g8Qgzg2gBhQQgBhNAxg5QA2g8BPgJQBQgJA9AyQAUAQAVAGQATAGAagBIPWAAQA5AAAaAZQAZAaABA6IAAA6QgCAzgZAYQgZAZgzAAIvlAAQgrgBgdAZQg4AthEAAIgRAAg");
	this.shape_88.setTransform(-208,-180.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#8E5F33").s().p("AgEBsIgBjPIAJgJIACDZg");
	this.shape_89.setTransform(155.6,-110.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D14647").s().p("AhwgEIDhAAQg9AJg2AAQg6AAg0gJg");
	this.shape_90.setTransform(158.6,-123.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#DED0B6").s().p("AgDAAIgFgbIAHAAQAJAWABAGQACAQgPALQADgMgCgQg");
	this.shape_91.setTransform(-67.5,-168.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#4E7782").s().p("AgWAAQALgKALABQAKABANAIQgKAKgMAAQgJAAgOgKg");
	this.shape_92.setTransform(-58,-160.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C6B6A3").s().p("AgOAPQACgQAEgGQAHgLAQAFIgUAdIgJgBg");
	this.shape_93.setTransform(-74.1,-169.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E0D2B7").s().p("AgEALQgUgDgIgQIAgAHQARABAOgJIAAgBQACAFgBAFIgbALg");
	this.shape_94.setTransform(-71.3,-164.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#7A4E65").s().p("AgEAoQgLgBgTgMIgCgdQgCgNAHgHQADgDAPgIQAJgIAJACQAIABAMAHQALATABAMQACAPgPANQgMANgMAAIgEgBg");
	this.shape_95.setTransform(-71.1,-167.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#8EBC26").s().p("AgnAIIAAgPIBOgCIAAATg");
	this.shape_96.setTransform(4.2,-197.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#A3C73C").s().p("ABCAMIgoAAIg9AAQgnABgYgEIgJAAIAHgKICAgBQArgUAlAVIgBAKQgOAEgVAAIgGgBg");
	this.shape_97.setTransform(-2.7,-196);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#8DBE25").s().p("AhBAEQACgOAMgDQADgBAUAAIBbABQAJANgNAJQguAGgQAAIgDAAQgiAAgZgLg");
	this.shape_98.setTransform(-6.2,-196.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#8E932F").s().p("AgMANQgCgIABgEQABgIAHgHIABgIQAPACADANQABAHgCAQIgSAHIgHgKg");
	this.shape_99.setTransform(8.8,-196.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#8B8034").s().p("AgJAVQgIgPAFgRIAIgMIASgCQACARgBAIQgBAOgJALIgJABg");
	this.shape_100.setTransform(8.7,-188.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FCC56D").s().p("AAVAdIhOgBQggAAgOgNIgNgNQgIgFABgIIAMgLQAHgEAJAAQAogCBOABIBIAAIAPAAQAJABAFAFIAAAhQgKAMgOADQgbACglAAIgPAAg");
	this.shape_101.setTransform(-2.3,-192.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#DEAE66").s().p("AgPASIgCgjIAMgGIAAAEQALAHAEAFQAIAHAAAKQgCAHgGAFQgFACgFAAQgHAAgIgGg");
	this.shape_102.setTransform(-14.1,-192);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#DECFB2").s().p("AgEAGQABgbgNgQIASgPQAIAFADALQACAFABAPQABATgBATQgCAUgLAJQgDADgEAAQgBgIABgog");
	this.shape_103.setTransform(-16.2,-188.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FDF4D4").s().p("AgPAJQAAghgCgHQABgHABgDQACgGAGgCQAaARgBAbQgBALgOAkIgIAIQgKgPAAgag");
	this.shape_104.setTransform(-17.1,-187.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F5CA7F").s().p("AgMALQABgbgJgRIAagXQAOAQABAYQAAAOgEAbQgNAXgPAJQgCgLABgjg");
	this.shape_105.setTransform(-19.5,-184.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F5C171").s().p("AgOghIAcgfIABBhQgIASgTAOg");
	this.shape_106.setTransform(-31.2,-173.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FAEFCA").s().p("AgrgIQArg3AkgaQAaASgCAaQgBALgOAkIgJAJQgYAJgEATQgNAEgNATQgPAXgJAEQghgqAgg3g");
	this.shape_107.setTransform(-25.3,-179.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#2B7581").s().p("AgUgBQAZgLAQANIgKAFIgFgBIgEABg");
	this.shape_108.setTransform(-58,-154.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E0D1BC").s().p("AgOAIQgGgEADgKIAkgEIgSAUIgDABQgIAAgEgDg");
	this.shape_109.setTransform(-54.8,-163.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#7B635C").s().p("AgeADIAVgHQAFgLARACQAKADAGAJQAEAEgFAHIgcAEg");
	this.shape_110.setTransform(-44.8,-162.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#59414D").s().p("AABATQgNACgEgNIgIgTIAJgKQAJgCAGAGIAKALIAKAHQAFAGgBAHQgEAJgHAAQgFAAgHgEg");
	this.shape_111.setTransform(-48.1,-164.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F5C674").s().p("AgTgYQAIgNASAGQAHADADAIQACAFABAKIglAng");
	this.shape_112.setTransform(-42.8,-158.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D6C3AC").s().p("AgSB0IABjEQgCgSACgIQACgPAPgEIATAOQgSgCgEAKQgFAHAAATIAADLg");
	this.shape_113.setTransform(12.1,-163.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F8E0C5").s().p("AgPAVIAAgxQAKgOATAEQgBANADAZQABAZgMAPg");
	this.shape_114.setTransform(125.7,-127.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D5A25E").s().p("AgJgOQAGgGAGACIAAAAIABAAIgBAAIAJASQAEAJgEAKIgRABQgOgRAKgRg");
	this.shape_115.setTransform(8.8,-184.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#4B343C").s().p("AgDAdIgIgBQgEgcALgcIAJAMQALANgFAUQgFAMgGAAIgDAAg");
	this.shape_116.setTransform(-50.1,-168.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F6EEC8").s().p("AgVAMQgCgHAEgFQADgDAHgGIAJgLIAWAMQgEAbgYABIgFABQgGAAgEgJg");
	this.shape_117.setTransform(-38,-164.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#513A3E").s().p("AgsARIgBgRQAog1AzAqIgDAOQgFAEgGAAIgSgBQgLAAgFABQgJADgIAHIgOANQgJgEgCgJg");
	this.shape_118.setTransform(-72.2,-171.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F4E4B0").s().p("AgRAFQACgjgBgNIAUgLQARAWgCAcQgCAQgLAhIgUAKQgGgTADgfg");
	this.shape_119.setTransform(-33.2,-171.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#614A44").s().p("AAnAqQgCgEgEgQQgDgNgHgGQgUgSgVALQgVAEgLAAQgEgBgDgFIgFgIQAagtA3AQQAzAPgHA9QgCAMgKADQgIgBgEgFg");
	this.shape_120.setTransform(-44.3,-169.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#816047").s().p("AiyCqQAHgKANgWQAMgTARgFQAEgNAJgNIASgWIAMgPQAHgJAFgFIARgNQAKgIAIgEIAJgJQACgDAFgFIAJgJQAOgMAOgTIAVgZQAMgOAMgHQAQgMAQgRIAogoQAFgFAKgGQAFgCAIABQALAFgCAJQALAaAAAmIgCBAIABBjIgBBlIgEACIgFgBQgPgPAAgVQACghgDhNQgDhFADgoQABgQgPADIj2D0QgRARgPAGQgJADgJAAQgKAAgKgDg");
	this.shape_121.setTransform(-31.6,-166.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#9CC434").s().p("AgFABIABgSIAIgBQgBAEACAOQACAMgFAHQgHgGAAgMg");
	this.shape_122.setTransform(-232.1,177.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D5DC92").s().p("AgWAOIgDgSQgCgMAHgHQAaAKADACQAPAJABASQABADgBAEIguABg");
	this.shape_123.setTransform(-229.5,178.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EAE7B5").s().p("AgFAPQgRgDADgUIAMgMQAOACAGAOQAEAGAEATQgCgCgYgEg");
	this.shape_124.setTransform(-248.9,178.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D1D88A").s().p("AgJALIAAgPQACgIAGgFIAIAAIADASQgBALgJAGg");
	this.shape_125.setTransform(-237.7,178.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#DADD9B").s().p("AgSAOQAEgbAGgFQAHgFAUAJQACATgKAJIgOAHIgCAAQgHAAgGgHg");
	this.shape_126.setTransform(-239.9,178.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FCAA54").s().p("Ag5gJIBzAAQgUASgmAAQgkAAgVgSg");
	this.shape_127.setTransform(-205.8,104.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#7E5369").s().p("AAAAFQgigBgEABQAPgKAXABIAnABQgNAIgWAAIgEAAg");
	this.shape_128.setTransform(-201.7,89.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#846B3E").s().p("AgKgMIAKgCIALAMIgVARg");
	this.shape_129.setTransform(-221.6,153.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#7E663C").s().p("AgJABQgBgBAAgOIAVASIgLALQgHgFgCgJg");
	this.shape_130.setTransform(-221.6,157.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#8B6945").s().p("AgLgPIAYAPIAAAFIgZALg");
	this.shape_131.setTransform(-221.4,142);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#F9D69C").s().p("AgWAhIABhDQAJAFAUACQASAGgDAVQgDAUgLAJQgIAGgKAAQgGAAgHgCg");
	this.shape_132.setTransform(-217.5,131.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#8E9C2D").s().p("AgIAFQgHgHACgLQADgEAFgBQAPAKADAFQAGAIgPAOIgMgOg");
	this.shape_133.setTransform(-190.3,154.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#E5E7A4").s().p("AiNAGIADgEQAJgJAPgBIAbABQAOABBkgCQBGgCAtAKIgBAJIkXAAg");
	this.shape_134.setTransform(-206,141.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FCC46C").s().p("AiLAUQAAgUgVAAIACgIQACgLALAAIAGACQAqAFBFgBIBsAAIAegBQARAAAMAFIAJgBIANAKQgWAAAAAUg");
	this.shape_135.setTransform(-205.7,159.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FAC570").s().p("ACJAaQgKgBgZABQgWABgNgCQgfgKgsALIhCABIhDgBIgHABQgLAAgBgMQANgKABgFQACgGgSgGIAEgTIARABQAfAFAygBIBPAAIA8gBQAkgBAXAGIAIAAQAVALgFAMQgDAIgOARQgCAGgGAAIAAgGg");
	this.shape_136.setTransform(-205.5,150);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#99C22F").s().p("Ah3AiIgRgDQgJgDgHgJIgLgRIAAgJIAKgQQAHgIAJgCQAJgCAHABQA2AFBFgBIB9gCQAJAAAGACIAQATQAIALgDALQgJAEgBAPQgHAFgJAAIh1ABQhVAAg2gCg");
	this.shape_137.setTransform(-206.3,155.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FDCA77").s().p("AikAUIAbg2QAEAQAOADIAaABIDtgBQAFAAADACQAeAagnAUIiIAAQhUAAgyABIgKABQgRAAgKgPg");
	this.shape_138.setTransform(-206.1,138.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#91BD28").s().p("AARAhIhJABQgtAAgdgDQgSgEgGgHQgJgEgCgJIgCgPQALgWAbgCIBtgBIBsAAQAVAAAGABQAPADAKAIQAeAGgCAPQgBAEgRAYQgHAGgJAAQgTgBhiAAg");
	this.shape_139.setTransform(-205.9,144.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#9BC433").s().p("AgZgBIAAgIQAXgDADABQAPABAKAKIgGAAQgEAEgFADQgOAFgFAAQgMAAgFgNg");
	this.shape_140.setTransform(-238.2,185.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#74991F").s().p("AgEARIgDgDIADgEIACgTQAAgNAFgGQAFAYAAAEQAAASgKAMg");
	this.shape_141.setTransform(-226.4,178.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#8EA93D").s().p("AABAKQgTgDgKAAQAGgHATAAQAQAAAHgIIAJgBIAAAHQgKAMgRAAIgBAAg");
	this.shape_142.setTransform(-248.7,181.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#9FC13C").s().p("AgMAVQgEgHABgJIAEgOIALgMIAMATQAFAKgBALIgQAAQgDADgEAAIgFgBg");
	this.shape_143.setTransform(-246.5,186.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#94C02C").s().p("AgUALIgFgKIALgJIAOgEQAJgDAGABQAMAEgBAJQgEAJgPABQgOACgFAEQgFAAgDgEg");
	this.shape_144.setTransform(-240.3,180.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#84AD25").s().p("AgiAOIAAgBIAMgMIAUgKIASgLQAMgDAGAIIABAJQgHACgCAEIgCALQgPALgOAAQgOAAgPgIg");
	this.shape_145.setTransform(-248.3,190.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#82A529").s().p("AAAAcQgEgDgFgFQgJgSACgJQAEgFAHACIASgTIAFAnIgNATg");
	this.shape_146.setTransform(-227.3,188.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#9EC13B").s().p("AAJAUIgTgOQgMgGgGgLIABABQAigVAWAfQgDACgDALQgDAHgIAAIgDAAg");
	this.shape_147.setTransform(-228.8,185.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#85AD26").s().p("AgdAZQABgKAMgFQAPgGABgEQADgCAEgLQAFgLAEgEIAMAAIACAnQgKARgSABIgBAAIgegEg");
	this.shape_148.setTransform(-238.6,179.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#98C12F").s().p("AgdAFIAJgIQALgOAMACQAJABARAJQAEAFgGAGQgPAKgMAAQgPAAgOgLg");
	this.shape_149.setTransform(-229.6,181.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#9DC436").s().p("AgcAOQAAgLgBgDIABgSQACgKAQAHQAFAIAOAHQAQAGAFAHIABAAQgFASgSgCQgVgCgFAEQgJgDgBgIg");
	this.shape_150.setTransform(-249.8,179.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#97B83A").s().p("AgFAhIgMgUQACgVADgJQAFgRAUgCQAFAFAAAHQgCAKAAAPIAAAbQgFAJgIAAQgDAAgFgEg");
	this.shape_151.setTransform(-242.1,188.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#C0C860").s().p("AABAjIgJgGQgGgEgGAAIgFgEQgDgEgCgIQgCgSAIgNIAFgDIAMAPQAGADACgTQABgDAGgCIAKgEIAFAFQAJAOAAAQQgBAHgHAKQgGAJgFAGQgFAEgFAAIgCgBg");
	this.shape_152.setTransform(-233.6,188.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F9F2CC").s().p("AgVAcQgCgPgJgFQgFgEABgEQABgJAEgJIAHgKQAEgEAHADIAJABQAEABAFAFIAJAHQAFAEALAGQAJAFgCAKQgEAGgJABQgLABgEAEIgMAJg");
	this.shape_153.setTransform(-243.4,192.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#BCCC59").s().p("AgXAbQgHgKgJABQgCgEACgDQATgeALgKQASgTAgARQgDALgHAGQgOAIgEAEQgIAGACAMQAAAGgDAHQgEAKgKABQgFgBgIgMg");
	this.shape_154.setTransform(-250.7,187.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FEF5D3").s().p("AhcBMQgagBgHgDQgQgGABgYIABgBQAegZAAgIQAAgIgdgbIgBAAQgDgcALgMQAMgMAeACQBNADCagCIgBCKQgOAPggAAIhiABQg0AAglgCg");
	this.shape_155.setTransform(-205.8,130.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D19E5C").s().p("AgNACQgEgHAKgHQAfgLgLAeIgJAIIgKABIgHgOg");
	this.shape_156.setTransform(-221.1,161);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D4A15E").s().p("AgMAHQgLggAfANQAFAEACAFIABAJIgbALg");
	this.shape_157.setTransform(-190.4,161);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#AE8456").s().p("AgmAEIAAgIIBNAAIgBAIg");
	this.shape_158.setTransform(-195.7,193.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#B18E65").s().p("AgMAAQADgngBgUIAKABQAdA6gdA5IgDADQgKgYABgkg");
	this.shape_159.setTransform(-219.5,185.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#AE8456").s().p("AABA2Qgeg5Aeg6IABgDQAYBDgYA+g");
	this.shape_160.setTransform(-192,186.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#A98258").s().p("AABArQgNgOAEgdQADghgLgMIAgABIgEBXQgDADgCAAQgDAAgDgDg");
	this.shape_161.setTransform(-206.1,171.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FCD084").s().p("AiQALQgBgIAGgDQACgCAKgEICEgGQBMgBA6AMQAJAEgEAKg");
	this.shape_162.setTransform(-206.1,161.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#9F7953").s().p("AgyBCQgHgCgIgHQABgIgDg4QgDgoAQgYQgJBLALANQALANBLgBIAdgBQAMARgPAPQgYAMgfAAQgRAAgmgGg");
	this.shape_163.setTransform(-214.1,174);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#9A7552").s().p("Ag2A/QgLgJgDgHQgFgKAGgMIAiAFQBMACAMgNQAMgNgKhNQAQAdgBAjQgBAXgLAnIgFAGQgaALgdAAQgZAAgdgJg");
	this.shape_164.setTransform(-197.8,174);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F8EECD").s().p("AhCAmQgPgTAShLIB0AAQAWARgBAgQgDAtACAGQgKAIgVADIgTABIgIABQhDAAgOgTg");
	this.shape_165.setTransform(-213.2,172.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F8EDCD").s().p("Ag3AwQgIgFgEgJQgHgjABgKQAAgaARgRIB7gCQAIAQAAAZIgCAnQADAcgjACIgvADQgcgBgVgIg");
	this.shape_166.setTransform(-198.7,172.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#C3BC9E").s().p("AgJAMQgBgIADgdIAHAAQAAAKACAMQACAFAGANQgJAKgCABIgBAAQgFAAgCgOg");
	this.shape_167.setTransform(-21.8,-118.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FADBA8").s().p("AgMAAQAAgFAEgDQADgEAFAAQAMAAAAAMQABAKgKACIgDABQgLAAgBgNg");
	this.shape_168.setTransform(-204.3,0.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FBE0B1").s().p("AgCAPQgHAAgDgGQgDgFACgFQAFgNAPAAIAFAGQAEAEgBADQAAAGgGAFQgFAFgFAAIgBAAg");
	this.shape_169.setTransform(-198,17.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FBDEAD").s().p("AAAAPQgDgBgEgFIgIgIQACgOANgCQAHAAAEADQAFAEAAAHQgBARgLAAIgEgBg");
	this.shape_170.setTransform(-231.5,6.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FAD7A0").s().p("AgRAFQgCgPASgHQASgBABASQABAQgQACIgEAAQgPAAgBgNg");
	this.shape_171.setTransform(-214.7,11.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FAD9A5").s().p("AgUgCQACgJAIgEQAHgEAHAAQAJAAAEAGQAFAFgBAIQgDAQgSAEQgVgKABgMg");
	this.shape_172.setTransform(-206.2,-18.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FAD9A4").s().p("AgMASQgGgGgCgJQgCgJAHgIQAGgHAJgBQAPgCAHAYQgBAIgFAGQgGAHgIACIgCAAQgHAAgFgFg");
	this.shape_173.setTransform(-231.3,23.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FADAA6").s().p("AgWABQABgTAYgDQALgBAFAHQAFAGgBAJQAAAVgZABIgCAAQgTAAABgVg");
	this.shape_174.setTransform(-186.3,-8.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FAD59E").s().p("AgDAdQgigEAGgaQAHggAfAFQAcAFgCAXQgFAPgIAIQgHAHgMAAIgEgBg");
	this.shape_175.setTransform(-186.3,22.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FAD8A3").s().p("AAEAgQgQAAgGgCQgNgFACgQQACgWABgCQAEgOARgCQAGADARAFQANAGAAARQgBAOgFAIQgHAKgNAAIgBAAg");
	this.shape_176.setTransform(-229.9,-22.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#E9D9B8").s().p("AAAgbQAKAdgKAaQgJgdAJgag");
	this.shape_177.setTransform(0.7,-120.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#E8D8B8").s().p("AgEgDQAAgQAEgLQAFAQAAANQgBAOgGASIgCgig");
	this.shape_178.setTransform(0.7,-106.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#E9D9B9").s().p("AAAgbQAKAdgKAaQgJgeAJgZg");
	this.shape_179.setTransform(0.7,-134.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#E9D9B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgLAIgTAAIgEAAg");
	this.shape_180.setTransform(-31.3,-148.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#E9D9B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgLAIgTAAIgEAAg");
	this.shape_181.setTransform(28.7,-148.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#E4D4B5").s().p("AAAAJIgigBQAHgIASAAQAQAAAGgIIAWAIQgNAJgUAAIgCAAg");
	this.shape_182.setTransform(42.7,-149.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#D6C3AC").s().p("AgdADIABgRQAHAOAVADQAXAFAHAGIgeABIgBAAQgSAAgKgMg");
	this.shape_183.setTransform(14.1,-149.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FADBA8").s().p("AgLADQgDgOAOgBQAMAAABAMQAAALgMABIgBABQgJAAgCgKg");
	this.shape_184.setTransform(35.7,-119.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FBE0B1").s().p("AgNAAQgCgEADgEQACgEAGgBQANgEAGARQABAMgKACIgEABQgJAAgGgPg");
	this.shape_185.setTransform(-46.6,-107.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FBE0B1").s().p("AgKALQgEgEgBgEQAAgGAEgGQAFgFAHAAQAFABAKAIQgGAUgMAAQgEAAgEgEg");
	this.shape_186.setTransform(42.1,-102.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#774F5C").s().p("AgLgNIATAAQAFAEAFAFQAIAJgJAIIgkABQgFgRANgKg");
	this.shape_187.setTransform(9.4,-150.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#E9D9B8").s().p("Ag1gEIBrAAQgbAKgbAAQgaAAgbgKg");
	this.shape_188.setTransform(-1.3,-148.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FBDEAD").s().p("AAAAQQgQgDACgMQABgGAFgFQAGgFAGABQAMABAAAPQgDAOgLAAIgCAAg");
	this.shape_189.setTransform(-35.6,-141);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FBDEAD").s().p("AAAAPQgRgFADgOQABgGAGgDQAFgDAFABQAOACgBAOIgFALQgDAEgFAAIgDgBg");
	this.shape_190.setTransform(8.4,-113.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#EDE1BF").s().p("AgLAmIAChPQAJAGAAAUQAAARAKAGQgCAGAEATQAAAJgJAAQgEAAgKgEg");
	this.shape_191.setTransform(-27.7,-116);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FAD7A0").s().p("AgRAFQgCgSATgEQAPgCADAQQABAVgTAAQgPgBgCgMg");
	this.shape_192.setTransform(25.2,-108.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#AEBD5B").s().p("AgJAXQgJgDABgBIABgWQACgOAKgHQAEgBACADQgCAGAOAQQAMAPgYAJIgCABQgDAAgGgCg");
	this.shape_193.setTransform(-33.1,-120.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FAD9A5").s().p("AgOANQgGgHAAgHQACgRAVgBQAQgBACAUQgGAUgPAAQgIgBgGgGg");
	this.shape_194.setTransform(33.7,-138.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FAD9A4").s().p("AAAAVQgJAAgHgHQgHgGABgIQAAgIAIgHQAHgHAJACQAIABAGAGQAGAHABAHQgKAUgNAAIAAAAg");
	this.shape_195.setTransform(-52.7,-140.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FAD9A4").s().p("AgNARQgGgFgBgJQgCgJAHgIQAHgHAIgBQAPgBAHAXQgBAIgGAHQgGAGgIACIgBAAQgHAAgGgGg");
	this.shape_196.setTransform(8.7,-96.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FADAA6").s().p("AgWADQgBgTAYgFQAKgCAGAGQAGAGAAAKQABAVgYACIgEABQgSAAAAgUg");
	this.shape_197.setTransform(53.6,-128.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#E9CB99").s().p("AgUAAQAAgNACgyQAHAJACAoQACAfAXANQAKAGgLANQgKANgPACQgJgcgBgkg");
	this.shape_198.setTransform(-20.7,-99.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FAD59E").s().p("AAEAeQgSgBgJgGQgKgHACgPQAFghAdAEQAgAEgDAWQgDAggWAAIgDAAg");
	this.shape_199.setTransform(53.7,-97.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FAD59E").s().p("AAFAgQgigBABgfQABgPAEgHQAGgLAQACQAfADgBAbQAAAOgEAIQgFALgOAAIgBAAg");
	this.shape_200.setTransform(-51.8,-95.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FAD8A3").s().p("AAAAfQgkgEAFgeQADgQADgEQAGgKAPAEIAYAEQANAFAAARQgGARgEAHQgGAKgOAAIgDAAg");
	this.shape_201.setTransform(-6.5,-139.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FAD8A3").s().p("AABAgQgQgBgFgDQgMgFADgRQABgRADgIQAEgOASACQAQACAIAFQAMAHgCAQQgCAhgYAAIgEAAg");
	this.shape_202.setTransform(10.1,-142.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#BDC767").s().p("AABBAQgdgCgUgVQgUgWACgbQACgdAVgPQAUgOAiADQgBALgBAcQAFgHAAgOQAAgMAGgEQAOgBAKAKQAFAEALAQIAHAnQACAXgLARQgTgDgJAUg");
	this.shape_203.setTransform(-34.9,-116.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#D0D68E").s().p("AAABBQgYgDgXgTIgCgKQgBgFgGgCQgZgPAOgZIAhgdQAUgPAQgHQAdADAQAKQAUAMADAaQAEAbgBALQgDAWgTAKQgUAKgUAAIgLgBg");
	this.shape_204.setTransform(-15,-119.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#85634A").s().p("Ah5CmQgKgJgDgPQgBgHAAgUIgBkNQACgHAGgDQAEgCAIgBQAqADA1AAIBcgBIAHgCIAQgCQAMgBAKAIIACAWQgEAMAHAKQAEAHAMAIQgLAIgDAOQgBAIgBATIABBeQAAA5gCAnQgKALgOgJIgBhxQgBhAABguQABgagLgKQgLgKgZACQgcACgmgBIhDgBQgOAAgHAFQgJAEABAPIgBCHQgCBSALA2IgQAFg");
	this.shape_205.setTransform(-1.5,-166.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#BCC765").s().p("AAEBbIgcAAQgkgagLgNQgWgaACgeQADgpAggbQAggbAkAHQAuAIAVAfQAUAfgLArIgEAUQgLARgTAOQgOAKgXAMIgEABQgFAAgEgEg");
	this.shape_206.setTransform(-23.1,-130.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FDF4D3").s().p("AiyCEIABgDQAZgIAYgRQARgNAXgXQBZhbBdhbIAXgWQAOgKASAHIALBxQAGA9gEAxIAAASQABAKAGAHIAIAIIACAGQgbANgsgIQgzgLgSAEQgLAGgYgCQgWgBgLAGQgSgJgVAAQgOABgbAGQgWAFgMAAQgUAAgPgLg");
	this.shape_207.setTransform(-31.8,-162.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FDF4D3").s().p("ABYB+IgkABQgLAGgYgCQgVgBgLAGQgngUgqAUIglgGQgXgEgHgUQgEgJgBgIQgEhQAEhlQAAgaAGgIQAJgPAaAKQAuAaAzA1QAdAeA2A7QA7A6A7AYQgEAOgSgBQgVgBgFAFQgOgIgVgCg");
	this.shape_208.setTransform(26.9,-162);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FEF5D4").s().p("AgrCaIg2gCIgLgNQgGgJAAgIQgIhjAHiPQAAgRALgJQALgKARgBQBJgDBGADQAzAEAAA6IABBmQAAA9gDAsQgCAWgSAUIggAAQgcAGgcAAQgZAAgagGg");
	this.shape_209.setTransform(-2.3,-164.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#6D6B36").s().p("AgSAQIAAgaQAEgGAIgCQARgDAIAMIAAAZQgLAEgIAAQgKAAgIgEg");
	this.shape_210.setTransform(-205.8,192.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#AE8F6A").s().p("Ag5AUQgNgRAPgNQA3gWA6AVQAJAGgFAHQgLAEgOABQAPABAJAEIAAAKg");
	this.shape_211.setTransform(-198,192.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#B18E65").s().p("Ag9gEIAGgHQA4gVA5AWQAOAOgNARIh2ABQgJgNAHgNg");
	this.shape_212.setTransform(-213.7,192.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#C3BC9E").s().p("AgJAMQgBgIADgdIAHAAQAAAKACAMQACAFAGANQgJAKgCABIgBAAQgFAAgCgOg");
	this.shape_213.setTransform(-81.7,181.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#85AB28").s().p("AgXAMIAAgMIAOgHQAIgEAFAAQAGAAAFAFIAJAHIAAALg");
	this.shape_214.setTransform(-249.3,200.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#81A626").s().p("AgIASQgJgJAKgJQAHgEAAgKIAAgSQANAMAAASQAAAJgDAWIgIAEg");
	this.shape_215.setTransform(-226.8,197.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#C4BC64").s().p("AgGgJQgFgEAAgHQABgGAGgEQAHAAADAIQAEAMACACIgBAWIgQARg");
	this.shape_216.setTransform(-235,197.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#8EB032").s().p("AgPAOQgDgFABgFIAFgIIALgQQAFgKANALQAFAPgJATIgLALg");
	this.shape_217.setTransform(-237,199.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#86AB29").s().p("AgeAKIABgHIAKgIQAUgPAWAKQAGAFABADQADAEgEAFIgLAIg");
	this.shape_218.setTransform(-229.6,200.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#8B9D32").s().p("AgIAfQgGgHgDgGQgHgYAOgTIALgCQAMgHAHAKQgMASADATIgIANQgDAFgHAAIgBAAg");
	this.shape_219.setTransform(-245.8,198.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FBD89F").s().p("AgMAOQgEgEAAgHQABgVASACQAGABAEAEQAEAFAAAGQgCAQgPABIgCAAQgGAAgEgDg");
	this.shape_220.setTransform(-244.9,205.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#E7D7B2").s().p("AgHAEQgPgXgCgFIAAgBQAOgKANADQATAEADAQQgWAMgDAiQAAgPgHgPg");
	this.shape_221.setTransform(-239.3,203.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#BAD05D").s().p("AgOAXQgKgKACgLQAAgFAIgPQAHgLAKgCQAMACAFAMQAJAWgLAVIgFAGg");
	this.shape_222.setTransform(-243.1,197.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#F6DAA1").s().p("AgNAXQgNgEgBgKQgCgJAIgKIABgGQAdgRATAXQgGAHgJARQgHAKgKAAIgJgBg");
	this.shape_223.setTransform(-230.6,203.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#F6F0C6").s().p("AgRgvQALgHAGAFQAGADAHALIADAGQACAFAAAHQgCAHgEAEQgYAbAFAfIgIAAg");
	this.shape_224.setTransform(-253,194.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#AFCC51").s().p("AggARQgJgKAAgMQADgdAcgKQAcgGATAQQABAEgBAEQAKASgKAMQgHAEgNgGQgOgDgFABQgGAFgBAJIgCAQQgCAIgDAEIgGAFg");
	this.shape_225.setTransform(-230.5,197.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#AFCD54").s().p("AgmAaQgRgnAkgZQAVgKAZAHQASAGAAARQgCAIgGADQgEADgRADQgNABgDAIIgKAcQgEAGgEADg");
	this.shape_226.setTransform(-249.8,197);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#F6ECC7").s().p("AAKA2QACgYgMgKQgHgJgCgOIgFgbIgDgNIAAgOIAEgNIAHgMQAEgGAFAAIAPAAIAACxQgJgJABgag");
	this.shape_227.setTransform(-225.8,198.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FBDDA6").s().p("AgSgGQASgOATAOQgOARgFACIgCABQgJAAgHgUg");
	this.shape_228.setTransform(-197.8,197.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FCD594").s().p("AgEA2IAAhsIAIAAIAABsg");
	this.shape_229.setTransform(183.7,175.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#704E5D").s().p("AgigLIAigBQAUABAPAJQgRAPgQAAQgSAAgSgYg");
	this.shape_230.setTransform(178.7,197.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FDD997").s().p("AgEhJQAEgGADAGQgBAJADBBQACAvgMAdg");
	this.shape_231.setTransform(183.8,188.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FBDBA3").s().p("AgLgdQAFgBAJgGQAJgDAGAIQAHALgHAFQgDADgMADQgNAEgBARQAAAVgIAFQgEgqAMgZg");
	this.shape_232.setTransform(147.4,181.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FBDAA2").s().p("AgUABQgBgSAVAAQAJgBAGAFQAFAFABAIQABAQgWACQgTgDgBgOg");
	this.shape_233.setTransform(149.7,198.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FCCF85").s().p("AgCAtIgBgfQgYgeAYgcIARABIACAsQAAAbgMARIgEAAg");
	this.shape_234.setTransform(162.6,191.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#70505E").s().p("AgpgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAEgDQAMAAAXADQAUAAAOgKQAEgFAEAFQgRAdgWAEIgEABQgTAAgVgUg");
	this.shape_235.setTransform(158.8,197.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FBD9A0").s().p("AgTAXQgLgJABgOQADgjAaADQAeAFAAAbQgBAOgFAHQgGALgPABQgPgEgHgGg");
	this.shape_236.setTransform(188.2,204.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FCD491").s().p("AgtBrQADgXgBgLIABjKIARgJIBFgBIACAKQgyABgOAOQgNAOgBA2IgBC5QgMgMAAgUg");
	this.shape_237.setTransform(178.6,182.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FCDB9E").s().p("AgxBcIABiCIgBgYQgEgMgQgCIABgGIAQgDQAKgCAEgJQAUAMAgAAIA3gBQACADgBAGQhJABgNANQgMAMAABKIgBBFQgFAEgFAAQgFAAgFgFg");
	this.shape_238.setTransform(167.2,177.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FDD998").s().p("AgBB7QgBgDAAgVIgChPQAAgtADghQABgmgMgPQgOgQgmAGQgBgFACgEQAFgBAfABQAWABALgJQALAHASABIAeADIAAAGQgcgDgMALQgMALABAeQACArAAA9IgBBrQgPgDgBgNg");
	this.shape_239.setTransform(153.6,181.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FDF4D2").s().p("AghCBIAAgGQgLgUAAgfQACgigBgRIAAg3QABgkgCgUQgCggAOgMQANgMAcAFQAVgDAIALQAHAJAAAVIAABzQgBAIgDAHQghATAAAJQAAAJAiAiQACAHgCAJIgFAPQgQAOgSAAQgQAAgUgOg");
	this.shape_240.setTransform(158.6,183.5);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FDF3D1").s().p("AgECOQgUgBgPgJQgGg1AChGIAFh5QACggAdADIAXAAQAPgBAJAGIAAAAQAFAVAAAiIgBA4IABBJQABAugHAdIgJASIgdABIgFAAg");
	this.shape_241.setTransform(179.2,183.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FAD9A5").s().p("AgLACQgDgNAOgBQAMAAABAMQAAALgMABIgBABQgJAAgCgLg");
	this.shape_242.setTransform(275.7,180.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FBE0B1").s().p("AgOAEQgBgHAFgFQAEgGAGAAQAEAAAFAEQAFADAAADQACAMgQAHQgMgBgCgKg");
	this.shape_243.setTransform(282,197.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FBDEAD").s().p("AAAAPQgRgFADgNQABgHAGgDQAFgDAFABQAOACgBANQgDAJgCADQgDAEgFAAIgDgBg");
	this.shape_244.setTransform(248.4,186.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FAD7A0").s().p("AgRAFQgCgRATgFQARgBABASQABAQgQACIgEAAQgPAAgBgNg");
	this.shape_245.setTransform(265.2,191.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FAD9A5").s().p("AgUgBQABgRAWgBQAIgBAFAFQAGAGgBAIQgCANgTAIQgUgHAAgOg");
	this.shape_246.setTransform(273.7,161.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FAD9A4").s().p("AgUABQgBgIAGgIQAHgHAIAAQAJAAAGAHQAGAHAAAIQAAAOgUAJQgTgEgCgSg");
	this.shape_247.setTransform(248.7,203.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FADAA6").s().p("AgWABQAAgTAZgDQARgCADAXQgDAVgWABIgCAAQgUAAACgVg");
	this.shape_248.setTransform(293.7,171.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FAD59E").s().p("AgCAdQgQgBgHgGQgJgIADgOQAFgfAaACQAPACAIAFQAJAGABAOQgFAQgHAHQgHAJgOAAIgCgBg");
	this.shape_249.setTransform(293.7,202.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FAD8A3").s().p("AABAgQgQgBgGgDQgLgGADgRQABgQADgIQAFgOASADQAQACAHAEQAMAIgCAQQgCAggZAAIgDAAg");
	this.shape_250.setTransform(250.1,157.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#E9D9B9").s().p("AgEgDQAAgRAEgKQAFAQAAAMQgBAOgGATIgCgig");
	this.shape_251.setTransform(-59.3,165.6);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#E8D8B8").s().p("AgEgDQAAgQAEgLQAFAQAAANQgBANgGATIgCgig");
	this.shape_252.setTransform(-59.3,193.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#E9D9B8").s().p("AgCgaQAFAQgBAMQAAAMgEANg");
	this.shape_253.setTransform(-59.1,178.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FADBA8").s().p("AgLADQgDgOAOgBQAMAAABAMQAAALgMABIgBABQgJAAgCgKg");
	this.shape_254.setTransform(-24.3,180.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FBE0B1").s().p("AgIAKQgFgFgBgGQAAgCAEgFIAFgGQAVACgBAOQgBAEgEAEQgEAFgCAAQgGAAgGgFg");
	this.shape_255.setTransform(-106.6,192.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FBE0B1").s().p("AgNAFQgEgOARgFQAEgBAFADQAEACABAFQACAGgFAGQgDADgIAFIgCAAQgJAAgCgKg");
	this.shape_256.setTransform(-18,197.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FBDEAD").s().p("AgIANQgGgEAAgGQgBgFAFgGQAFgGAGgBQAGgBAEAFIAFAKQABAPgPABIgCABQgEAAgEgDg");
	this.shape_257.setTransform(-95.5,159);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FBDEAD").s().p("AgIALQgGgFAAgGQgBgNAPgBQAPgBABAPQgBAQgMAAIgCAAQgFAAgEgFg");
	this.shape_258.setTransform(-51.5,186.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#EDE1BF").s().p("AgLAmIAChPQAJAGAAAUQAAARAKAGQgCAGAEATQAAAJgJAAQgEAAgKgEg");
	this.shape_259.setTransform(-87.7,183.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FAD7A0").s().p("AgRAAQADgQAQgBQAOgBACARQgBATgRAAQgUgBADgRg");
	this.shape_260.setTransform(-34.8,191.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#AEBD5B").s().p("AgJAXQgJgDABgBIABgWQACgOAKgHQAEgBACADQgCAGAOAQQAMAPgYAJIgCABQgDAAgGgCg");
	this.shape_261.setTransform(-93.1,179.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FAD9A5").s().p("AgOANQgGgGAAgHQAAgRAWgCQAQgCADAUQgFAUgQABQgIAAgGgHg");
	this.shape_262.setTransform(-26.2,161);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FAD9A4").s().p("AgOARQgHgHABgKQAAgPAUgHQAUAIABAOQABAJgHAHQgGAHgIAAIgBAAQgIAAgGgGg");
	this.shape_263.setTransform(-51.3,203.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FAD9A4").s().p("AgPAQQgHgHAAgJQAAgIAHgGQAHgGAIAAQANAAAKAUQgBAIgGAGQgGAHgJAAIgBAAQgJAAgGgFg");
	this.shape_264.setTransform(-112.7,159.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FADAA6").s().p("AgWADQgBgSAYgGQAKgCAGAGQAGAGAAAKQACAUgZADIgBABQgVAAAAgUg");
	this.shape_265.setTransform(-6.4,171.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#E9CB99").s().p("AgUAAQAAgNACgyQAHAJACAoQACAfAXANQAKAGgLANQgKANgPACQgJgcgBgkg");
	this.shape_266.setTransform(-80.7,200.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FAD59E").s().p("AgCAdQgfgDACgWQACgiAdACQAjACgDAZQgEAegaAAIgEAAg");
	this.shape_267.setTransform(-6.3,202.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FAD69F").s().p("AACAfQgjgCADgdQACgRACgFQAGgLARAEIAVAEQAMADABANQgDAJgDASQgFANgRAAIgBAAg");
	this.shape_268.setTransform(-66.5,160.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FAD59E").s().p("AABAgQghgFAEgeQAEgfAWADQAiAEgCAYQgBASgGAJQgGAIgMABIgEgBg");
	this.shape_269.setTransform(-111.8,204.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FAD8A3").s().p("AAEAgQgQAAgGgCQgNgFACgQQACgWABgCQAEgOARgCQAGADARAFQANAGAAARQgBAOgFAIQgHAKgNAAIgBAAg");
	this.shape_270.setTransform(-49.9,157.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#BDC767").s().p("AABBAQgdgCgUgVQgUgWACgbQACgdAVgPQAUgOAiADIgBARQgBAKADAIQAEgFgBgMQgBgMAGgEQAOgBAKAKQAFAEALAQIAHAnQACAXgLARQgTgDgJAUg");
	this.shape_271.setTransform(-94.8,183);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#D0D68E").s().p("AgvAqIgCgJQgBgFgGgCQgZgQAOgZIAhgcQAUgPAQgHQAdADAQAJQAUANADAaQAEAagBALQgDAWgTAKQgVALgUAAQgcAAgdgYg");
	this.shape_272.setTransform(-74.9,180.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#BCC765").s().p("AAEBbIgcAAQgkgagLgNQgWgaACgeQADgpAggbQAggbAkAHQAuAIAUAfQAVAfgLArIgEAUQgLARgTAOQgOAKgXAMIgEABQgFAAgEgEg");
	this.shape_273.setTransform(-83.1,169.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#E9D9B9").s().p("AAAAEIgXgDQATgIAcAGQgJAFgMAAIgDAAg");
	this.shape_274.setTransform(-225.2,-148.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#E9D9B8").s().p("AACAFQgNgBgTgGIAigCQAQAAALAEQgOAFgMAAIgDAAg");
	this.shape_275.setTransform(-211.7,-148.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#E8D8B8").s().p("AgVABIgBgCIAtAAIAAACg");
	this.shape_276.setTransform(-197.3,-148.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FADBA8").s().p("AgMAAQAAgEADgDQAEgEAFgBQALAAABALQACALgLACIgDABQgLAAgBgNg");
	this.shape_277.setTransform(-204.3,-119.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FCDEA6").s().p("AgHAKQgFgDAAgHQAAgLAMgBQALAAABAMQABAKgLACIgCABQgEAAgDgDg");
	this.shape_278.setTransform(-291.3,-173.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FBE0B1").s().p("AAAAQQgGAAgFgGQgEgFABgGQADgOANAAQAQAFgDAKQgEAQgKAAIgBAAg");
	this.shape_279.setTransform(-197.9,-102.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FBDEAD").s().p("AgJAKQgFgFAAgGQgBgMAPgCQAQAAAAAPQAAAFgEAFQgDAFgGAAIgCABQgFAAgFgGg");
	this.shape_280.setTransform(-231.5,-113.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#F6D79F").s().p("AAAgMQANgFALAfIgvAAQAPgXAIgDg");
	this.shape_281.setTransform(-146.2,-199.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FAD7A0").s().p("AgBASQgTgBADgRQAEgTASACQANACAAAPQABASgTAAIgBAAg");
	this.shape_282.setTransform(-214.7,-108.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FAD9A5").s().p("AgUgCQACgJAIgEQAHgEAHAAQAJAAAEAGQAFAFgBAIQgDAQgSAEQgVgKABgMg");
	this.shape_283.setTransform(-206.2,-138.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FCDAA1").s().p("AgOAQQgGgEAAgJQgBgHAGgHQAGgHAJgBQAHgCAGAIQAEAEAFAJQgCAVgUAAQgIAAgGgFg");
	this.shape_284.setTransform(-291.3,-156.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FCDAA1").s().p("AgDAUQgIgBgFgGQgGgFACgIQABgIAGgGQAHgHAHABQASADADAUQgGASgQAAIgDgBg");
	this.shape_285.setTransform(-231.3,-156.5);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FCDAA1").s().p("AgNARQgGgFgBgKQgBgMAVgKQATAFACAQQABAIgGAGQgFAFgJABIgCAAQgHAAgGgEg");
	this.shape_286.setTransform(-171.3,-156.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FAD9A4").s().p("AgPAPQgGgHABgJQABgJAGgGQAHgHAHABQAQACAFAUQgCAJgGAHQgGAHgIAAQgIAAgHgIg");
	this.shape_287.setTransform(-231.3,-96.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FADAA6").s().p("AgWABQABgTAYgDQALgBAFAHQAFAGgBAJQAAAUgWACIgBAAQgXAAABgVg");
	this.shape_288.setTransform(-186.3,-128.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#F9DBA3").s().p("AgUAEQgIgJABgKIAPgBIAYgGQAOABACASQADAQgNAGQgIADgRABIgNgTg");
	this.shape_289.setTransform(-126.9,-188.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FAD89F").s().p("AgKAfQgLgGgRgWIA7glQAPATACAOQAEAQgSANQgLAHgKAAQgGAAgHgEg");
	this.shape_290.setTransform(-246.8,-157.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FCDAA2").s().p("AAEAeQgTgCgJgGQgKgIADgOQAFgfAaACQAQABAIAFQAKAHgCAPQgBAOgHAJQgGAIgKAAIgEAAg");
	this.shape_291.setTransform(-186.3,-157.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FCDAA2").s().p("AgDAdQghgDAFgaQAHghAeAFQAcAEgBAYQgEAPgIAHQgIAIgMAAIgEgBg");
	this.shape_292.setTransform(-126.3,-157.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FAD8A3").s().p("AgUAbQgMgFADgRQABgQADgIQAFgOASACQAPACAHAFQAMAIgBAQQgCAQgGAHQgIAJgPAAQgOgCgGgDg");
	this.shape_293.setTransform(-229.9,-142.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FADAA6").s().p("AgDAdQggABADgYQACgQAIgJQAJgLAQACQAfADgBAWQgDAhgcAAIgFgBg");
	this.shape_294.setTransform(-186.3,-97.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FCD89D").s().p("AABAgQgQgBgFgDQgMgFADgRQABgQADgIQAFgNARAAIAXAJQANAHgCAPQgEAggWAAIgEAAg");
	this.shape_295.setTransform(-229.9,-202.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FCD89D").s().p("AAEAgQgQAAgGgCQgNgFACgQIADgYQAEgOARgCQAGADARAFQANAGAAARQgBAOgFAIQgHAKgNAAIgBAAg");
	this.shape_296.setTransform(-169.9,-202.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FCD89D").s().p("AADAgQgQgBgGgCQgMgFACgQIADgZQAEgPASACQAPABAIADQANAGgBAPQgBASgFAIQgHALgOAAIgBAAg");
	this.shape_297.setTransform(-289.9,-202.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#F5D69E").s().p("AoWAJIE/gCIAqAAQAXgDANgPQAEgGAHgBQAHgCAEAFQATAYAhABQAUABAmgEIHEAAQAagRAWARQAHABAOgBQAMABAHAIIp5ADQjWABirgCIgaACQgQAAgJgLg");
	this.shape_298.setTransform(-193.4,-199);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#DBBA86").s().p("ArUCNQCUAyBphZQAMgKAQgBIAeABIPIAAQBOAAAhghQAhgiABhNQABgsgCgXQgEglgNgcQAIACAFAFIAIAMIARARQAIAKgFANIABBEIgBBBQgCAxglAeQgjAdg1gBQjWgDlcADQhyACkugEIggAAQgSACgMAIQgOAngvABQgwAWguAAQhBAAg8gsg");
	this.shape_299.setTransform(-200.1,-173.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#1A2B1C").s().p("AqMDQQhdg9gehRQgehPAnhVQAuhlBngeQBmgdBcA+IAdATQB/AFBFAAQBsAABYgHQAIgBARADQATADAHAAIEIABQCYAABwgCQA1gBAsAHQAXAEAVAPQAQALAUAWQBABcg1CBQgbBDhhgBIusgBQgkAAgbAGQggAIgbASQg4Amg9AAQg3AAg7gfg");
	this.shape_300.setTransform(-207.3,-180.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#E2796F").s().p("AgHARQgEgGAEgGIgBgSQAGgJAHAIIAFAVIgLAMg");
	this.shape_301.setTransform(183.9,168.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#E3776C").s().p("AgFAPIgBABQgFgDABgDQABgBAAgBQABAAAAgBQAAAAABAAQAAgBAAAAIgBgSQAFgGAEABIAKAFIgBASQgDAIgDACIgEACQgBAAgEgDg");
	this.shape_302.setTransform(174.9,168);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#E9D9B6").s().p("AgEgCQAAgPAEgPQAFAPgBAPQAAANgEAWQgDgbgBgIg");
	this.shape_303.setTransform(180.7,156.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#E9D9B6").s().p("AAAgbQAKAdgKAaQgJgdAJgag");
	this.shape_304.setTransform(120.7,156.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#E9D8B5").s().p("AgBAXIAAgsIADgBIAAAtg");
	this.shape_305.setTransform(120.8,170.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#E9D9B9").s().p("AgEAAQgBgVAKgMIAAAhQABAWgJAMIgBgig");
	this.shape_306.setTransform(240.7,165.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#E9D9B9").s().p("AAEgZIgDA0QgMgeAPgWg");
	this.shape_307.setTransform(60.7,165.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#E9D8B5").s().p("AgDACQAAgLADgXQAEAXAAALQABAPgFAQQgEgQABgPg");
	this.shape_308.setTransform(120.7,183.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#E9D9B6").s().p("AgEghQAVAhgVAig");
	this.shape_309.setTransform(0.8,201.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#E8D8B8").s().p("AAAgbQAKAdgKAaQgJgdAJgag");
	this.shape_310.setTransform(60.7,193.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#EAD9B6").s().p("AgFghQAWAhgVAig");
	this.shape_311.setTransform(0.8,187.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#E8D8B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_312.setTransform(240.7,193.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#E9D9B8").s().p("AgEAAQgBgVAKgMIAAAhQABAWgJAMIgBgig");
	this.shape_313.setTransform(240.7,179.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#E9D9B8").s().p("AgBgWIADAAIAAAsIgDABg");
	this.shape_314.setTransform(60.6,179.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#E9D8B6").s().p("AADgWIAAAtQgLgXALgWg");
	this.shape_315.setTransform(120.5,198.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#EBDBB9").s().p("AgEgmQAUAmgUAng");
	this.shape_316.setTransform(0.8,172.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#EBDBB9").s().p("AgEgmQAVAmgVAng");
	this.shape_317.setTransform(0.8,158.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FBDCA4").s().p("AgMAAQAAgEADgDQAEgEAFgBQALAAABALQACAKgLADIgDABQgLAAgBgNg");
	this.shape_318.setTransform(210.7,186.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FADBA8").s().p("AgDAMQgLgDADgKQACgLAKAAQANACgBAKQgBAHgFADQgDADgEAAIgDgBg");
	this.shape_319.setTransform(95.7,180.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FBDCA5").s().p("AgMAAQABgOAOADQALACgCAKQAAAKgMACQgMgCAAgLg");
	this.shape_320.setTransform(141.7,162.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FADEAE").s().p("AgKAKQgEgEgBgDQgBgHAFgFQAFgFAHAAQAFAAAKAJQgGATgMABQgEAAgEgFg");
	this.shape_321.setTransform(102.1,197.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FBDEAD").s().p("AgGAKQgFgEgCgEQgHgOAUgDQAPgCABAQQAAAKgPAIIgHgHg");
	this.shape_322.setTransform(68.4,186.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FBDFAA").s().p("AgOAAQABgDAFgFIAIgHQAOADABAMQABAHgEAEQgEAFgHAAQgTgBAEgPg");
	this.shape_323.setTransform(204.5,158.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FBD89F").s().p("AgIAOQgGgEgCgIQgCgGAFgGQAEgFAIgBQAKgCAIARQACAQgPACIgDAAQgEAAgFgDg");
	this.shape_324.setTransform(175.3,155.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#AAC048").s().p("AABAOIgjgGIACgVIBCACIABALQgMAOgUAAIgCAAg");
	this.shape_325.setTransform(150.7,167.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#ADBF49").s().p("AggAHQgLgJAJgNIBDAAQALAIgJANQgRAKgSAAQgOAAgSgJg");
	this.shape_326.setTransform(179.6,168.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#A6C046").s().p("AgXAMQgWgIARgOIA/gBIABAXg");
	this.shape_327.setTransform(187.4,167.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FAD7A0").s().p("AgRAAQADgQAQgBQAQAAAAASQgBARgRAAQgUgBADgRg");
	this.shape_328.setTransform(85.2,191.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FBDCA4").s().p("AgRABQgBgSAQAAQAOAAAGARQAAASgSAAQgQAAgBgRg");
	this.shape_329.setTransform(199.1,175.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FBDAA2").s().p("AgLAQQgHgGgBgJQgBgGAHgGQAEgEAJgFQAQACADAUQACAIgFAFQgFAGgIAAIgBAAQgHAAgGgFg");
	this.shape_330.setTransform(229.9,184.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#ACC147").s().p("AgNAQQgSgDgLgNQgGgGAGgIIArgCQAaAAASAKIABACQABAMgKAEIgTAFIgMAAQgNAAgGgBg");
	this.shape_331.setTransform(158.5,168.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FAD9A5").s().p("AgUgBQABgRAWgBQAIgBAFAFQAGAGgBAIQgCANgTAIQgUgHAAgOg");
	this.shape_332.setTransform(93.7,161.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FBDAA1").s().p("AgDAVQgIAAgEgHQgFgGAAgIQABgTATgBQALAFAEAEQAHAGgBAHQgCAJgHAFQgGAFgGAAIgDAAg");
	this.shape_333.setTransform(187.4,159.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FAD9A4").s().p("AgPAPQgGgHABgJQABgJAGgGQAHgHAHABQAQACAFAUQgCAJgGAHQgGAHgIAAQgIAAgHgIg");
	this.shape_334.setTransform(68.7,203.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FBDAA2").s().p("AgSABQgBgZAVACQAKAAAEAIQADAFAAAKQAAAWgTAAQgSAAAAgWg");
	this.shape_335.setTransform(130.2,188.2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FADAA6").s().p("AgWABQABgTAYgDQALgBAFAHQAFAGgBAJQAAAVgZABQgVAAABgVg");
	this.shape_336.setTransform(113.6,171.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FBDBA3").s().p("AgVAAQgCgWAVAAQAKgBAGAIQADAEAGAMQAAAVgVABIgBAAQgUAAgCgXg");
	this.shape_337.setTransform(219.5,204.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#A9CA49").s().p("Ag1ADIgDgGQAVgLAhACQAtACAIgBQALAJgJALQgkAEgRAAIgCAAQgdAAgWgKg");
	this.shape_338.setTransform(168.8,167.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FAD59E").s().p("AAEAeQgSgBgJgGQgKgHACgPQAFghAdAEQAgAEgDAWQgDAggWAAIgDAAg");
	this.shape_339.setTransform(113.7,202.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FBD79C").s().p("AABAfQgTgFgDgCQgNgHAEgRQAFgTACgEQAGgLAQAEIAXAGQAMAGgDAOQgCATgGAJQgFAIgKAAIgHgBg");
	this.shape_340.setTransform(130.1,176.3);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FAD8A3").s().p("AABAgQgQgBgFgDQgMgFADgRQABgRADgIQAFgOARACQAQACAHAFQANAHgCAQQgCAhgZAAIgDAAg");
	this.shape_341.setTransform(70.1,157.3);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FBD89E").s().p("AABAfQghgCABgaQAAgQADgGQAEgMARACIAXADQAOAFADAQIgJAYQgGAMgPAAIgCAAg");
	this.shape_342.setTransform(233.6,160.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#84634B").s().p("AgJAZQgLhzgNhWQgIgLAHgNIACgTQADgLANADQALABACAMIABAUIAoGdQgQgIgPASIgQjMg");
	this.shape_343.setTransform(194.6,186.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FCE5B6").s().p("Ai6EDQguAAgSgRQgSgSAAgtIAAllQAAgtASgSQASgRAuAAIF1AAQAvAAARASQASATAAAwQABCtgBCuQAAAxgSASQgTASgyABg");
	this.shape_344.setTransform(30.2,180.7);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#9FC149").s().p("AgLAWIASgqQAHAHgDANQgEAQADAGg");
	this.shape_345.setTransform(162.2,-101.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#E8D8B8").s().p("AgDAAIACgXQAFAKABANQAAAHgDARQgHgKACgOg");
	this.shape_346.setTransform(240.7,-106.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#E8D8B8").s().p("AAAgbQAKAdgKAaQgJgdAJgag");
	this.shape_347.setTransform(180.7,-106.8);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#E9D9B8").s().p("AgDAAIACggQAFAQAAAQIgCAhQgFgQAAgRg");
	this.shape_348.setTransform(180.7,-120.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#E9D9B8").s().p("AAAgYIAEAYQABAOgFALQgIgUAIgdg");
	this.shape_349.setTransform(240.7,-120.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#EAD9B6").s().p("AgcADQAfgMAaAMg");
	this.shape_350.setTransform(268.1,-88.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#E9D8B6").s().p("AgdADQAWgFAMAAQAOAAALAFg");
	this.shape_351.setTransform(281.9,-88.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#E8D8B8").s().p("AgXACQAKgHANACIAYADQgMAEgOAAQgKAAgLgCg");
	this.shape_352.setTransform(282.6,-28.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#E9D9B8").s().p("AgYACIAAgDIAxAAIAAADg");
	this.shape_353.setTransform(268.7,-28.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#E9D9B9").s().p("AADAEQgNAAgWgEQAagDAJgBQAQAAAOAEQgOAFgOAAIgCgBg");
	this.shape_354.setTransform(254.3,-28.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#EAD9B7").s().p("AACAFQgNgBgTgGIAigCQAQAAALAEQgOAFgMAAIgDAAg");
	this.shape_355.setTransform(254.3,-88.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#E9D9B9").s().p("AgCgdQAFAWAAAMQAAAOgFALg");
	this.shape_356.setTransform(240.8,-135.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#E9D9B9").s().p("AgCgcQAFAUgBAMQAAAOgEALg");
	this.shape_357.setTransform(180.8,-135.4);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FADBA8").s().p("AgLgCQACgLALACQAJAAACALQgCANgLAAQgOgBADgOg");
	this.shape_358.setTransform(275.7,0.2);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FADBA8").s().p("AgMAAQAAgEADgDQAEgEAFgBQALAAABALQACAKgLADIgDABQgLAAgBgNg");
	this.shape_359.setTransform(150.7,-113.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FADBA8").s().p("AgBAMQgLAAAAgMQABgKALgCQAMACAAAKQABANgNAAIgBgBg");
	this.shape_360.setTransform(275.7,-119.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FADBA8").s().p("AgMAAQAAgFAEgDQADgEAFAAQALAAABAMQABAKgKACIgDABQgLAAgBgNg");
	this.shape_361.setTransform(215.7,-119.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#F7CDA1").s().p("AgRANQgBgnAlAVQgKASgYAAIgCAAg");
	this.shape_362.setTransform(139,-124.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FBE0B1").s().p("AgCAMIgPgLIAAgIIARgHQAIgBAHAKQAHAIgIAHQgFAFgFAAQgEAAgCgDg");
	this.shape_363.setTransform(133.1,-107.4);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FBE0B1").s().p("AgOAEQgBgHAFgGQAEgFAGAAQAEAAAFADQAFAEAAADQACALgQAIQgMgBgCgKg");
	this.shape_364.setTransform(222,-102.4);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FBE0B1").s().p("AgEAOQgDAAgEgFQgDgFAAgEQAAgGAFgEQAGgFAHABQAKABABANQgGAPgKAAIgDgBg");
	this.shape_365.setTransform(282.1,-102.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FBE0B1").s().p("AgCAPQgHAAgDgGQgDgFACgFQAFgNAPAAIAFAGQAEAEgBADQAAAGgGAFQgFAFgFAAIgBAAg");
	this.shape_366.setTransform(282,17.6);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FBDEAD").s().p("AgJAMQgFgEAAgGQgBgGAGgFQAFgFAGgBQAMAAACAPQAAAOgPABIgBABQgFAAgEgEg");
	this.shape_367.setTransform(144.4,-141);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FBDEAD").s().p("AAAAPQgRgFADgNQABgHAGgDQAFgDAFABQAOACgBANQgDAJgCADQgDAEgFAAIgDgBg");
	this.shape_368.setTransform(188.4,-113.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FBDEAD").s().p("AABAQQgGgBgFgGQgFgGAAgFQABgGAGgEQAFgDAFABQAPABgBANQgDAQgLAAIgBAAg");
	this.shape_369.setTransform(248.4,-113.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FBDEAD").s().p("AAAAPQgSgGAEgNQADgNAOACQAOACgBAOIgGALQgDAEgEAAIgDgBg");
	this.shape_370.setTransform(248.4,6.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FAD7A0").s().p("AgRACQAAgOARgFQATABgBARQgBAQgRABQgSAAABgQg");
	this.shape_371.setTransform(265.3,-108.2);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FAD7A0").s().p("AgRAFQgCgRATgFQARgBABASQABAQgQACIgEAAQgPAAgBgNg");
	this.shape_372.setTransform(205.2,-108.2);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FAD7A0").s().p("AgRACQAAgOARgFQASAAAAARQgBARgQABIgBAAQgRAAAAgQg");
	this.shape_373.setTransform(265.2,11.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FAD9A5").s().p("AgKAQQgGgFgCgJQgDgHAHgHQAFgGAJgCQAIgCAFAIIAHAOQABASgRADIgCAAQgGAAgGgFg");
	this.shape_374.setTransform(169.9,-115.7);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FAD9A5").s().p("AgNAOQgGgGgBgIQgBgPAXgDQAQgDADAUQgDATgSACIAAAAQgIAAgFgGg");
	this.shape_375.setTransform(213.7,-139);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FAD9A5").s().p("AgMAPQgGgGgCgJQgBgHAIgFQAEgEAKgCQAPgFAFAVQgBASgSAEIgCAAQgHAAgFgFg");
	this.shape_376.setTransform(273.7,-139);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#CD6E62").s().p("AgWgDQAFgEARgGQAQgJAGAHQAFAGgCAPIgmANQgSgQAJgGg");
	this.shape_377.setTransform(146.5,-100.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FAD9A5").s().p("AgNANQgGgGgBgHQgBgPAWgEQAIgBAGAFQAFAEABAJQAAAMgUAKQgIgBgGgGg");
	this.shape_378.setTransform(273.7,-18.9);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FAD9A4").s().p("AgPAPQgGgHABgJQABgJAGgGQAHgHAHABQAQACAFAUQgCAJgGAHQgGAHgIAAQgIAAgHgIg");
	this.shape_379.setTransform(248.7,-96.3);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FAD9A4").s().p("AgNASQgGgGgBgJQgCgJAHgIQAGgHAJgBQAPgBAHAXQgBAIgGAHQgGAGgIACIgBAAQgHAAgGgFg");
	this.shape_380.setTransform(188.7,-96.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FAD9A4").s().p("AAAAXQgJgBgGgHQgHgIACgJQABgIAGgGQAHgHAHABQARACAEAUQgDAKgFAGQgGAHgHAAIgBAAg");
	this.shape_381.setTransform(248.7,23.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#F0AD66").s().p("AgZARIgVgSIASgKQAMgJAMAJIAaALQARAGAIALg");
	this.shape_382.setTransform(163.9,-98);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#E16A6A").s().p("AgIBeIAAjDIAIgCQAJAwgBA3QAAAqgHA+g");
	this.shape_383.setTransform(154.9,-109.9);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FADAA6").s().p("AgPATQgHgFAAgLQgBgSAYgGQAKgCAGAGQAFAFABALQACASgXAFIgCABQgJAAgGgEg");
	this.shape_384.setTransform(293.6,-8.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FADAA6").s().p("AgWADQgBgTAYgFQAKgCAGAGQAGAGAAAKQABAVgYACIgDABQgTAAAAgUg");
	this.shape_385.setTransform(293.6,-128.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FADAA6").s().p("AgXAAQACgSAYgDQAKgBAFAHQADAEADAKQgEAXgXAAIgBAAQgUAAABgWg");
	this.shape_386.setTransform(233.7,-128.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#E16A6A").s().p("AAABsQgMgyABg6QAAgtALg/IAMABIgFDYg");
	this.shape_387.setTransform(156.2,-110.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#E16A6A").s().p("AguAvQgIgFAEgKIAFgQQATgRAagSQAQgLAkgTIhCBaIgQAIIgHABQgFAAgEgDg");
	this.shape_388.setTransform(148.8,-128.4);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FAD59E").s().p("AgCAdQgigDAFgaQAFgfAaACQAPACAIAFQAJAGABAOQgFAQgHAHQgHAJgOAAIgCgBg");
	this.shape_389.setTransform(233.7,-97.3);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FAD59E").s().p("AAAAeQgPgCgHgEQgKgHAAgPQAEgPAHgHQAJgKAOACQAjADgFAZQgEAegaAAIgCAAg");
	this.shape_390.setTransform(293.7,22.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FAD59E").s().p("AAAAeQgPgCgHgEQgKgHAAgPQAEgPAHgHQAJgKAOACQAjADgFAZQgEAegaAAIgCAAg");
	this.shape_391.setTransform(293.7,-97.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FAD8A3").s().p("AgBAgQgPgDgGgDQgLgGAEgRQACgQADgIQAGgMASADQAPADAHAGQALAIgCAQQgDAPgHAHQgIAHgNAAIgBAAg");
	this.shape_392.setTransform(190.1,-142.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FAD8A3").s().p("AgCAgQgPgEgGgDQgKgHAEgQQADgRADgHQAGgMARAEQAQADAHAHQAKAIgCAPQgFAdgaAAIgCAAg");
	this.shape_393.setTransform(250.1,-142.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FAD8A3").s().p("AACAfQgjgCACgcQABgQADgFQAFgMARADIAZAEQAOAFgCASQgCAPgFAIQgGAKgMAAIgFAAg");
	this.shape_394.setTransform(173.5,-139.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FAD8A3").s().p("AgSAdQgNgFACgPQABgXABgCQAEgPASABQAPAAAIAFQANAGAAASQgBAhgaAAQgQAAgGgDg");
	this.shape_395.setTransform(250.1,-22.6);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FAC376").s().p("AhjAVQAEgGAQgGQAPgGAEgHQANgXAbALQALAKAMgCQAKgBAOgJIALABIAKACIAJAHQAFAIAQABIAPAFQAJAEgDALg");
	this.shape_396.setTransform(151.3,-98.4);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#19767F").s().p("AitAJQgBgRAXAAIEwAAQAEAAAGAEIALAFQABAFgDADg");
	this.shape_397.setTransform(155.9,-93.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#DC4E52").s().p("AgIAfQgcgMgrACIhIABQgRACgGgCQgMgDAJgTQAGgHAMgFIAUgIIAggOQANARASAIIAAABQBnAKB6gKIAEgBQAKACAGAHQAEAEAJARIieAAIgJAGQgHAFgIADQgEAAgEgEg");
	this.shape_398.setTransform(155,-123.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#DB474A").s().p("AAGA5QhDgDgjAAQgGgBgIgGQgKgRAMgPQAGgJAQgOQAFgIAPgMQAQgOAFgGQAKgKALADQAFABANAKIB6BVIgHAHQgmAJg2AAIgLAAg");
	this.shape_399.setTransform(158.7,-128.5);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FCE5B7").s().p("AjFEDQhHAAAAhGQgCi8ACi5QAAgoASgRQASgRAqAAIDBgBIC+ABQAoAAASASQASARAAAoQABD1gBB7QAAAngRARQgSASgmAAIjEABIjFgBg");
	this.shape_400.setTransform(270.2,-59.3);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#ECE1C5").s().p("AgDAGQABgMgBgGIAHgLIABAvQgJgGABgMg");
	this.shape_401.setTransform(126.6,-107.8);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#655256").s().p("AgSABQAIgPARAEIAMAKQgBAIgPADg");
	this.shape_402.setTransform(-68.8,-163.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#776465").s().p("AgaACIAVgHQAFgGAFAAQARADAFALQgOAJgNAAQgNAAgNgKg");
	this.shape_403.setTransform(-71.2,-162.4);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#D66C66").s().p("AgPgBIAKgNQALABAEADQAHAEgBAJIAAALIgGABQgQAAgJgQg");
	this.shape_404.setTransform(124.6,-123.7);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#E7BD84").s().p("AgCAfIgDgfQgCgTANgLIgCA9g");
	this.shape_405.setTransform(120.7,-106.3);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#E9D8B6").s().p("AgEghQAVAhgVAig");
	this.shape_406.setTransform(60.8,-106.8);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#E9D9B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_407.setTransform(-59.3,-120.8);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#EAD9B6").s().p("AgEghQAVAhgVAig");
	this.shape_408.setTransform(60.8,-120.8);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#E9D9B8").s().p("AgEgDQAAgRAEgKQAFAQAAANQgBAOgGASIgCgig");
	this.shape_409.setTransform(120.7,-120.4);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#E8D8B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_410.setTransform(-59.3,-106.8);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#EAD9B7").s().p("AgCgdQAFAWAAAMQAAAOgFALg");
	this.shape_411.setTransform(120.8,-195.6);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#EAD9B7").s().p("AgDACQAAgLADgWQAEAVAAANQABAOgFAQQgEgQABgPg");
	this.shape_412.setTransform(-59.3,-195.1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#EAD9B7").s().p("AgFghQAWAhgVAig");
	this.shape_413.setTransform(-119.2,-194.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#EAD9B7").s().p("AgdgCIA7AAQgWAFgMAAQgOAAgLgFg");
	this.shape_414.setTransform(-104.5,-148.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#EAD9B6").s().p("AACAEQgKAAgYgEQAXgDALAAQAPgBAQAEQgOAEgOAAIgDAAg");
	this.shape_415.setTransform(-91.6,-148.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#E9D8B6").s().p("AgBgXQAHAKgCANIgDAYQgIgTAGgcg");
	this.shape_416.setTransform(180.7,-166.8);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#E9D8B6").s().p("AAEgaIgDA1QgMgeAPgXg");
	this.shape_417.setTransform(120.7,-166.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#E9D8B6").s().p("AgEghQAVAhgVAig");
	this.shape_418.setTransform(-119.2,-166.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#EAD9B7").s().p("AgCgDQAAgMAFgNIAAA5QgGgTABgNg");
	this.shape_419.setTransform(180.6,-194.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#EAD9B6").s().p("AgCgEQAAgOAFgLIAAA7QgFgWAAgMg");
	this.shape_420.setTransform(120.6,-180);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#EAD9B7").s().p("AgFghQAWAhgVAig");
	this.shape_421.setTransform(60.8,-134.8);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#E8D8B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgLAIgTAAIgEAAg");
	this.shape_422.setTransform(162.7,-148.8);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#E9D9B9").s().p("AAAAFIghAAQAMgKAVABIAiABQgLAIgTAAIgEAAg");
	this.shape_423.setTransform(194.6,-148.8);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#E9D9B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgLAIgTAAIgEAAg");
	this.shape_424.setTransform(208.7,-148.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#E8D8B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgLAIgTAAIgEAAg");
	this.shape_425.setTransform(222.7,-148.8);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#E9D9B9").s().p("AAAAFIghAAQAMgKAVABIAiABQgLAIgTAAIgEAAg");
	this.shape_426.setTransform(254.6,-148.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#EAD9B6").s().p("AAAgbQAKAdgKAaQgJgdAJgag");
	this.shape_427.setTransform(180.7,-180.8);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#E9D9B9").s().p("AgEAAQgBgVAKgMIAAAhQABAWgJAMIgBgig");
	this.shape_428.setTransform(-59.3,-134.8);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#E9D9B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgLAIgTAAIgEAAg");
	this.shape_429.setTransform(268.7,-148.8);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#E8D8B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgLAIgTAAIgEAAg");
	this.shape_430.setTransform(282.7,-148.8);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#E9D8B6").s().p("AgbAAQAagJAdAJQgOAFgOAAQgMAAgPgFg");
	this.shape_431.setTransform(-77.3,-148.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#EAD9B6").s().p("AgEghQAVAhgVAig");
	this.shape_432.setTransform(-119.2,-180.8);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#E9D9B9").s().p("AAAAFIghAAQAMgKAVABIAiABQgLAIgTAAIgEAAg");
	this.shape_433.setTransform(134.6,-148.8);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#E9D9B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgLAIgTAAIgEAAg");
	this.shape_434.setTransform(148.7,-148.8);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#E3706C").s().p("AgJAPIgJgTQAGgIAMgBIATgBIAAASQgIALgOAAIgGAAg");
	this.shape_435.setTransform(125.1,-131.8);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FBDCA4").s().p("AgBAMQgLAAAAgMQABgKALgCQAMACAAAKQABANgNAAIgBgBg");
	this.shape_436.setTransform(35.7,-179.8);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FBDCA4").s().p("AgMAAQAAgFAEgDQADgEAFAAQAMAAAAAMQABAKgKACIgDABQgLAAgBgNg");
	this.shape_437.setTransform(155.7,-179.8);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FBDCA4").s().p("AgMAAQAAgFAEgDQADgEAFAAQAMAAAAAMQABAKgKACIgDABQgLAAgBgNg");
	this.shape_438.setTransform(215.7,-179.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FBDCA4").s().p("AgLgBQAAgLALAAQALABACALQgCAMgKAAIgBABQgNAAACgOg");
	this.shape_439.setTransform(-89.3,-173.8);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FBDEA8").s().p("AAAAMQgMAAABgMQAAgKALgCQAMACABAKQAAANgNAAIAAgBg");
	this.shape_440.setTransform(72.7,-168.8);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FBDEA8").s().p("AAAANQgGgBgDgFQgEgEACgGQADgLAKADQALACAAAKQgCAMgKAAIgBAAg");
	this.shape_441.setTransform(252.7,-168.8);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FBDCA5").s().p("AgNABQgCgEAEgFQADgFAHgBQAFAAAFADQAFADABAHQABALgOAFQgMAAgDgOg");
	this.shape_442.setTransform(264,-202.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#F7DCAB").s().p("AgQABQAGgLAEgEQAGgHAJAGQANAJgIAIIgMARQgNgEgFgOg");
	this.shape_443.setTransform(41.9,-162.1);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FBDFAB").s().p("AgNAGQgEgPARgEQAEgCAFADQAEADABAFQACAFgFAGIgJAIIgDAAQgKAAgCgJg");
	this.shape_444.setTransform(162,-162.5);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FBDFAB").s().p("AgFAOQgFgBgCgEQgDgFABgEQAFgRAOAEQAMACgCALQgFAIgDADQgEAEgEAAIgEgBg");
	this.shape_445.setTransform(222,-162.4);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FBDCA5").s().p("AgNAAQgCgLAPgDIAKAEQAFADAAAHQAAANgOACIgBAAQgLAAgCgPg");
	this.shape_446.setTransform(83.9,-202.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FCE1AE").s().p("AgJAJQgFgFAAgGQAAgDAEgDIAHgGQAUADgCAOQgBAEgEAEQgFAEgDAAQgGAAgFgGg");
	this.shape_447.setTransform(-106.6,-167.5);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#EAD9B7").s().p("AgSACQACgXgBgPQAGAHADAgQACAYAaAAQgFAHgIACIgPABQgLgOABgVg");
	this.shape_448.setTransform(122.1,-151.9);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#E9D9B8").s().p("Ag1gEIBrAAQgbAKgbAAQgaAAgbgKg");
	this.shape_449.setTransform(238.7,-148.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#EADAB9").s().p("AghAAQABgOgBgHIBDADQABAFgCADQgagCgKACQgVACgBAeQgIgKAAgMg");
	this.shape_450.setTransform(123.6,-135.1);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FCE0AD").s().p("AAAAPQgHgBgFgFQgEgGABgGQABgGAFgDQAFgEAFADQAQAFgBAJQgFAOgKAAIgBAAg");
	this.shape_451.setTransform(90.2,-175.1);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FCE0AD").s().p("AAAAPQgPgDAAgMQAAgNAOgBIAMAFQAGAFgBAGQgBAGgFAEQgEADgFAAIgBAAg");
	this.shape_452.setTransform(270.1,-175.1);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FBDFAA").s().p("AABAQQgGgBgFgFQgFgGAAgGQABgGAGgDQAFgEAFABQAPABgBANQgDAQgLAAIgBAAg");
	this.shape_453.setTransform(128.4,-173.6);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FBDFAA").s().p("AgNABQgHgOAUgDQAPgBABAPQAAALgPAIQgLgJgDgHg");
	this.shape_454.setTransform(188.4,-173.4);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FBDFAA").s().p("AgJANQgFgEAAgGQgBgGAFgFQAGgGAGAAQANgBABAPQAAAOgOACQgFAAgGgDg");
	this.shape_455.setTransform(-95.5,-201);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#E6837A").s().p("AgDgoQAKAGAGASQAHAXgJAVQgHAKgJADQgVgsAXglg");
	this.shape_456.setTransform(123.6,-128.2);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#7D4F61").s().p("AgxAAQAUgKAdABIAyADIAAAGQgQAPgWgOIgwAKg");
	this.shape_457.setTransform(-57.9,-164.4);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FBDCA4").s().p("AgBASQgTgBADgRQAEgTASACQANACAAAPQABASgTAAIgBAAg");
	this.shape_458.setTransform(145.2,-168.2);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FBDCA4").s().p("AgRgCQACgQAOABQASABABASQABAQgTAAQgSAAABgUg");
	this.shape_459.setTransform(-100.9,-184.2);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FBDCA4").s().p("AgCASQgQgCABgOQABgSASgBQAJgBAEAGIAEAKQgBAUgSAAIgCAAg");
	this.shape_460.setTransform(205.2,-168.2);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#886373").s().p("AgMAJQgTAEgGgJIAGgMIAGgHIAtAAIAKABQAMAPgHAIQgGAGgSABQgGgMgRAFg");
	this.shape_461.setTransform(-57.7,-158.7);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FBDAA2").s().p("AgUgBQABgRAWgBQAIgBAFAFQAGAGgBAIQgCANgTAIQgUgHAAgOg");
	this.shape_462.setTransform(33.7,-198.9);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FBDAA2").s().p("AgNANQgGgGgBgHQgBgPAWgEQAIgBAGAFQAFAEABAJQAAAMgUAKQgIgBgGgGg");
	this.shape_463.setTransform(153.7,-198.9);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FBDAA2").s().p("AgOANQgHgHABgHQAAgQAXgCQAHgBAFAGIAHALQgHAXgPAAQgIgBgGgGg");
	this.shape_464.setTransform(213.8,-198.9);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FBD69B").s().p("AAAASQgRAAAAgSQABgRAQgBQASAAAAARQACAUgUAAIAAgBg");
	this.shape_465.setTransform(78.2,-185.3);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FBD69B").s().p("AgRACQgBgUATAAQARABAAARQABASgSAAIgBABQgRAAAAgRg");
	this.shape_466.setTransform(258.2,-185.3);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#EC855D").s().p("AAAASQgOgCgIABQgCgMALgQQAEABAMgGQALgEAGAHQADAEAAAHQAAAGgCAEQgHAKgNAAIgBAAg");
	this.shape_467.setTransform(-79.3,-177.1);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FBDAA1").s().p("AgUgBQABgJAFgFQAFgGAIABQAIAAAHAGQAHAHAAAHQAAAQgWAGQgUgFABgSg");
	this.shape_468.setTransform(-112.5,-200.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FBDAA1").s().p("AgDAUQgIgBgFgGQgGgFACgIQABgIAGgGQAHgHAHABQASADADAUQgGASgQAAIgDgBg");
	this.shape_469.setTransform(128.7,-156.5);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FBDAA1").s().p("AgCAVQgIgBgGgFQgFgFAAgIQABgIAGgHQAGgHAIAAQAMAAAKAVQgFAUgRAAIgCAAg");
	this.shape_470.setTransform(188.7,-156.5);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FBDBA3").s().p("AgUACQgBgTAVgDQAVAFAAAPQgBAJgHAGQgGAGgIAAQgRAAgCgTg");
	this.shape_471.setTransform(289.4,-176.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FBDBA3").s().p("AgUAAQAFgXAQADQAIABAGAGQAFAFABAIQAAAHgGAHQgGAGgJABIgBAAQgQAAgDgVg");
	this.shape_472.setTransform(109.4,-176.8);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#967766").s().p("AgIAcQACgcgDgEIACgyQAFgBACACQAGAFAAAOQgBANAFAGIAABGQgUgGACgVg");
	this.shape_473.setTransform(126.1,-103.7);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#E9D9B7").s().p("Ag1AcQAuACAKgGQAYgOgQgxQAJAJADAiQADAZAcgBQgbAMgbAAQgaAAgbgMg");
	this.shape_474.setTransform(178.7,-152.1);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FBDAA2").s().p("AgBAXQgJgBgFgHQgGgHABgIQABgPATgHQAVAJAAANQAAALgHAHQgFAFgJAAIgBAAg");
	this.shape_475.setTransform(66.7,-202.4);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FBDAA2").s().p("AAAAXQgKgBgGgIQgHgIADgJQACgJAGgFQAGgHAIACQANADAHATQgJAXgNAAIAAAAg");
	this.shape_476.setTransform(246.7,-202.3);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#694B45").s().p("AgQAiQgCgGABgHQAEgLgDgPQgDgWABgHQACgHAGgDQAKgEAHAJIAMARIgBAwIgUAUQgKgCgEgKg");
	this.shape_477.setTransform(-66.4,-168);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#6F6273").s().p("AgeAZQgKgNADgWQAJgIANgDQAHgCAPgBQAHACAHAIIAKANQAQAKgQAKQgFAFgHAAQgWgFgOAEQgFACgFAAIgDAAg");
	this.shape_478.setTransform(-57.9,-162.2);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FBDBA3").s().p("AgQAPQgCgDgEgMQgGgTAYgBQALgBAGAEQAJAHACATQABAFgZAGIgFABQgHAAgEgGg");
	this.shape_479.setTransform(278.8,-157.1);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FBDAA2").s().p("AgWADQgDgWAZAAQAXABAAASQABASgWABIgCABQgUAAgCgRg");
	this.shape_480.setTransform(-37.3,-199.3);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FBDBA3").s().p("AgWgEQAAgKAIgEQAEgCAKAAQAWgBABAVQABAKgJAFQgDACgPAEQgRAAgCgZg");
	this.shape_481.setTransform(98.8,-157.1);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FBDBA3").s().p("AgVgCQgBgWAWACQATAAADAZQABAJgHAGQgEADgKADQgWgEgBgWg");
	this.shape_482.setTransform(-80.4,-155.8);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#614840").s().p("AAIAsQgMACgJgOQgLgRgGgCQgBgTAAgLQACgRALgMQAFADAFAIIAIAMIAGAKIAIAVQABAEAKALQAIAJgBAIQgFAHgIAAQgFAAgGgDg");
	this.shape_483.setTransform(-74.8,-166.6);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#DF6A66").s().p("AghAMQACgcAaAAQAiABAEgDIABAhIgiAEIgBAAQgSAAgOgHg");
	this.shape_484.setTransform(123.6,-138.6);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FBDBA3").s().p("AgWABQABgTAYgDQALgBAFAHQAFAGgBAJQAAAVgZABIgCAAQgTAAABgVg");
	this.shape_485.setTransform(53.6,-188.6);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FBDBA3").s().p("AgWAAQACgTAXgCQALgBAFAHQAFAGgBAJQgBAVgYABIgBAAQgUAAABgWg");
	this.shape_486.setTransform(173.6,-188.6);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FBDBA3").s().p("AgWADQgBgKAJgGQADgDAMgGQAVAAABAVQABAVgYACIgDABQgTAAAAgUg");
	this.shape_487.setTransform(233.6,-188.6);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#A0726B").s().p("AgvgFIAFgTQAQAZACABQALAKAQgXQADgLAGALQADAEAQAFQAOACADAMQgkAKgPACIgFABQgaAAgNgeg");
	this.shape_488.setTransform(-58.1,-152.7);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FCD295").s().p("AgVAgQgLgiANgaQAFADAOgEQALgEAHAHQATAbgVAUQgPALgRAAIgFAAg");
	this.shape_489.setTransform(123.4,-106.5);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#E4644E").s().p("AgrAYQgagYAbgYIBjAAQgMARgSADIgeAAQgSAAgIAEQgJAIACARg");
	this.shape_490.setTransform(-60.1,-167.8);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FBD9A0").s().p("AghASQAEgTAGgIQAKgMASACQASACAHALQAGAIgCASg");
	this.shape_491.setTransform(53.6,-158.2);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#77586A").s().p("AgWAkQgKgEgHggQgDgJABgFQAAgKAKgEQAdgIAEABQAHACAIARQACAEANACQAKACAAAIQABAFgGACIgMABQgFgDgIAAIgMgBQAJAFABAJQgSASgKAAIgEAAg");
	this.shape_492.setTransform(-58.3,-155.3);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FBD9A0").s().p("AgUAXQgKgJABgPQACgQAGgHQAHgKAOADQAfAGgBAZQgBAPgFAIQgGAKgQAAQgPgEgHgGg");
	this.shape_493.setTransform(-111.8,-155.8);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#F4C788").s().p("AAhA6QgogJgRgrQgMgbgdgBQgiAEgPgEQAHgJANgBQAFAAAQABQAjAFAMgiQAHBCAVAYQAXAYA0gJQARgCACgPIATAKQgfAXgfAAQgKAAgKgDg");
	this.shape_494.setTransform(-66.3,-181);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#939835").s().p("AhsAbQgOgTACgRQABgaAUAHQArAOA8gBQAjgBBHgEIAKADQADAJgIAFQgPAFgVABIglAAIg6gBQgjgBgYAIIgPAPQgGAFgGACg");
	this.shape_495.setTransform(-3.8,-197.2);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FBD9A0").s().p("AgVAZQgLgGABgQQACgiAeACQAfACAAAWQAAAigcABQgRgBgIgEg");
	this.shape_496.setTransform(173.7,-157.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FBD9A0").s().p("AgDAdQgigEAGgaQAHggAfAFQAcAFgCAXQgIAegYAAIgEgBg");
	this.shape_497.setTransform(233.7,-157.3);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FBD79C").s().p("AACAfQgOAAgIgEQgLgGABgPQABgOAEgIQAHgNAPgCQAGAEARADQANAFgCAPQgBAQgEAHQgGANgRAAIgBgBg");
	this.shape_498.setTransform(-25.4,-199.5);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FBD79C").s().p("AgUAbQgMgFADgRQABgQADgIQAFgOASACQAPACAHAFQAMAIgBAQQgCAPgGAIQgIAJgPAAQgOgCgGgDg");
	this.shape_499.setTransform(130.1,-202.6);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FBD79C").s().p("AACAfQghgBAAgaQAAgQADgGQAFgNAPACIAZACQAPAFgBARQAAAPgFAIQgGANgRAAIgBAAg");
	this.shape_500.setTransform(-66.4,-199.4);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FBD9A0").s().p("AgBAeIgXgHQgKgHADgPQAHgkAfAFQAOACAGAFQAHAHgCANQgFAQgDAIQgFALgMAAIgIgCg");
	this.shape_501.setTransform(247.5,-157.1);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FBD79C").s().p("AgSAeQgMgFABgQIACgYQAFgNAQgEQAGAFASAEQANAGAAARQgBAOgFAIQgGALgPAAQgQAAgGgDg");
	this.shape_502.setTransform(190.1,-202.7);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FBD9A0").s().p("AAIAgQgVgEgIgDQgNgGADgSQADgPAHgHQAIgLAOACQARABAHAEQAKAGgEAQIgFAWQgEANgMAAIgCAAg");
	this.shape_503.setTransform(67.5,-157.1);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FBDBA3").s().p("AAAAhQgRgDgHgFQgLgIAFgRQACgPAEgIQAHgNARAFIAXAIQAMAIgDASQgEAQgEAGQgHAIgMAAIgFAAg");
	this.shape_504.setTransform(292.7,-200.7);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FBDBA3").s().p("AgVAaQgMgHACgPQADgVABgDQAGgOARACQASADAFACQAOAGgBARQgBAigcADQgQgEgIgDg");
	this.shape_505.setTransform(112.8,-200.6);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FBC474").s().p("AAPAaQgLgRgZgCQgOgBABgSQAEgYgBgKQAGgGAFgDIAUgGQAKgBAJAHQABAFADAaQACATAJAIIACA6IgJABQgIgegEgGg");
	this.shape_506.setTransform(123.6,-98.5);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#F1DEC0").s().p("AADAiQgDgCgCgHIgggNQADgpANgGQANgFAnAYQACASgDAKQgEAQgOAHIgGACQgDAAgDgDg");
	this.shape_507.setTransform(-56.3,-180.7);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FAD59A").s().p("AgMBZQgBgIACgPIAAgXIAAggQAAgWgMgKQgEgGgCgGIgCgnQAAgWAfAAQATAAAIAMQAJALgJAPQgRAegBArIAABNIgSABg");
	this.shape_508.setTransform(10.2,-195.9);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#7B4E64").s().p("AAEA+QgmgFgQgiQgKgWgCgMQgEgWAGgSQAVgOAIAEQAHAEAGAeQAGAhAEAGQAIASAegGQAYgLALAaQgRAYgfAAIgNgBg");
	this.shape_509.setTransform(-62.9,-181.9);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#7C5165").s().p("AhgBuIgKgUIDGjJQAJAGAEAJQACAHAAAMQgCAGgEAFIgWAVIgNAUQgFAFgJAHIgQAMIhJBIIgiAhQgIAFgDACIgGABQgEAAgEgCg");
	this.shape_510.setTransform(-25.2,-187.1);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#EFE6C7").s().p("AhvBWIAggzQAHABARAKQAOAIALgCQAMgCADgDQAEgFgIgKQgBgGADgFQADgFgDgJQgDgHABgEIAKgMQAFgHABgHIACgZQABgMALgHIAJgIIAPgCQAGgCAGADIAPANQAJAIAHADIAQAHQAIAFAEAHQAKAUgFAcQgHATgPARQgJALgVATIgHACQgTgEgbAFQgcAHgPACg");
	this.shape_511.setTransform(-54.9,-156.8);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#5F3A4F").s().p("ADbCcQgcgDgHADIhGgCQgFADgJgCIgNgCQgcgHgcgUQgSgNgagbIhehdQg5g5gsgfIgYgQQgOgLgDgIQgFgLALgOQA5AQA0AtQAiAeAwA9QA6BKBLAlQBMAlBfgBQgKAMgTAAIgEAAg");
	this.shape_512.setTransform(34.7,-164.7);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#82614C").s().p("AgGD5QgHgJgBgRQAAgXgCgFQgGgQAAgXIACgoQgBgQANgeIACg9QABghgKgYQgGgFAAgJIABgmQABgZABgNQACgJAIgMIAAgdQgFgGgCgHQgDgMAKgSQABgPAHgDQAHgCAOAFIACHKQAAAVgEAIQgFAJgOAAIgGgBg");
	this.shape_513.setTransform(128,-117.3);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#72445F").s().p("AgmA/Qgzg9grglQg2gxg5gfQgHgHgCgNIgDgWQgBgNAEgJQAKgIALAGQAvANAuAmQATAPA6A7IA5A8QAhAlAbAVQANAAAHASQAhAiAvAEQAmgZAgAbQAZAEAEASQADAJgDAcQgdAFgbAAQiJAAhkh5g");
	this.shape_514.setTransform(34.5,-168.2);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FCC36C").s().p("AgBBiIgxgEIgIgJQgKgjAWgDIAWgBQgVAAgOgCQgHgBgOgMQgLgLgLAAQgZgMgRADQgVACgPAWQgDAFgDAWQgDAQgLAHQgoAHACgqIACg/QACgFAQgGQAKgHgUgMQgCgkAggOQAogJAXAHQAeAIAUAmQAaAxBOgmQAIgGAIgRQAIgRAHgGQAegQAhAIQAWAFAlAVIAuAaQANAGAEAOQAKAngLA8QgFAKgLACQgPgCgJgNQgTg6gbgJQgagJgnAkQgEAGgGAVQgFASgIAJQgGAEgIACQgOADgRAAIgQgBg");
	this.shape_515.setTransform(-57.8,-173.9);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FCE5B6").s().p("AjAEDQgoAAgSgSQgSgRAAgpQgBj0ABh8QAAgmASgRQARgSAmAAQDDgCDGACQAkAAASARQARASAAAkQACC7gCC6QAAAmgSARQgRASgmAAIjGABIi+gBg");
	this.shape_516.setTransform(-89.8,-119.3);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FCE5B6").s().p("Ai/EDQgpAAgSgRQgSgSAAgoQgCi4ACi4QAAgnASgSQASgRApAAIDBgBIC+ABQApAAASARQASASAAAoQACC3gCC5QAAAngSASQgSARgpAAIjAABIi/gBg");
	this.shape_517.setTransform(90.2,-119.3);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#C5CE64").s().p("AgDAVIgEAAIAAgeIAPgLIgIApg");
	this.shape_518.setTransform(-243.8,177.6);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#E7D6B3").s().p("AgDAAIAAgTQAHAJAAAKIgBAUQgGgJAAgLg");
	this.shape_519.setTransform(-239.3,36.3);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#8C9E33").s().p("AgIAXQABgBAAAAQABgBAAAAQAAAAABAAQAAAAAAAAIABgwIAIAJQAJAPgJAPIgDAKQgBAGgFAAQgEgCABgDg");
	this.shape_520.setTransform(-245.2,178.5);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#EAD9B6").s().p("AgdADQAVgFAMABQAOAAALAEg");
	this.shape_521.setTransform(-211.9,91);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#EADAB7").s().p("AAAgbQAKAegKAZQgJgdAJgag");
	this.shape_522.setTransform(-179.3,158.2);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#EAD9B7").s().p("AgdADQAjgMAYAMg");
	this.shape_523.setTransform(-226,91.2);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#E9D8B6").s().p("AgDACQgNAAgNgEIA7AAQgUAFgLAAIgCgBg");
	this.shape_524.setTransform(-256.6,91.3);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#EAD9B7").s().p("AgaACQAbgJAaAJg");
	this.shape_525.setTransform(-285.7,-88.9);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#EAD9B6").s().p("AgWACIAAgDIAsAAIABADg");
	this.shape_526.setTransform(-271.2,-88.7);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#E9D8B6").s().p("AAAADIgYgFIAxAAQgJAFgKAAIgGAAg");
	this.shape_527.setTransform(-257.2,-88.7);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#E8D8B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_528.setTransform(-239.3,13.2);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#EAD9B7").s().p("AghgFIBDABQgRAKgRAAQgQAAgRgLg");
	this.shape_529.setTransform(-225.3,-88.7);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#E9D8B6").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_530.setTransform(-197.3,31.3);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#E9D9B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_531.setTransform(-239.3,-120.8);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#EAD9B6").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_532.setTransform(-211.3,31.3);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#EAD9B7").s().p("AghgFIBDABQgRAKgRAAQgQAAgRgLg");
	this.shape_533.setTransform(-225.3,31.3);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#E9D8B6").s().p("AACAFQgNgBgTgGIAigCQAQAAALAEQgOAFgMAAIgDAAg");
	this.shape_534.setTransform(-257.7,31.2);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#EAD9B6").s().p("AgcADQAUgFAMABQANAAAMAEg");
	this.shape_535.setTransform(-271.9,31.1);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#EAD9B7").s().p("AgbAAQAagJAdAJQgOAFgOAAQgMAAgPgFg");
	this.shape_536.setTransform(-285.3,31.2);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#E8D8B7").s().p("AgEAiIAAhDQAKAMgBAVIgBAjIgIgBg");
	this.shape_537.setTransform(-239.2,27.3);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#E9D9B9").s().p("AgEAAQgBgVAKgMIAAAhQABAWgJAMIgBgig");
	this.shape_538.setTransform(-119.3,165.1);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#EAD9B7").s().p("AgbAAQAagJAdAJQgOAFgOAAQgMAAgPgFg");
	this.shape_539.setTransform(-285.3,91.2);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#EAD9B6").s().p("AAAAEIgXgDQATgIAcAGQgIAFgMAAIgEAAg");
	this.shape_540.setTransform(-271.2,91.2);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#E8D8B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_541.setTransform(-239.3,-106.8);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#E9D8B5").s().p("AgBAZIAAgxIADAAIAAAxg");
	this.shape_542.setTransform(-239.3,162.2);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#EAD9B6").s().p("AggAAQAQgEAPABQAMAAAWADQgaAFgJAAQgPAAgPgFg");
	this.shape_543.setTransform(-230.9,151.2);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#E9D9B6").s().p("AggAAQAQgEAPABQAMAAAWADQgaAFgJAAQgPAAgPgFg");
	this.shape_544.setTransform(-244.8,151.2);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#E9D8B5").s().p("AgZAAQAVgIAeAIQgNAEgNAAQgMAAgNgEg");
	this.shape_545.setTransform(-259,151.2);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#E8D8B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgLAIgTAAIgEAAg");
	this.shape_546.setTransform(-197.3,-28.8);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#E9D8B5").s().p("AgZAAQAVgIAeAIQgNAEgNAAQgMAAgNgEg");
	this.shape_547.setTransform(-273,151.2);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#E9D8B6").s().p("AgbAAQAagJAdAJQgOAFgOAAQgMAAgPgFg");
	this.shape_548.setTransform(-287.3,151.2);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#E9D9B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgLAIgTAAIgEAAg");
	this.shape_549.setTransform(-211.3,-28.8);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#EADAB7").s().p("AgDgEQAAgOAHgKIgDA5QgFgXABgKg");
	this.shape_550.setTransform(-239.2,-81);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#E9D8B6").s().p("AgEgDQAAgQAEgLQAFAQAAANQgBANgGATIgCgig");
	this.shape_551.setTransform(-239.3,148.6);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#EAD9B7").s().p("AgBgWIACAAIAAAsIgCABg");
	this.shape_552.setTransform(-239.3,120.2);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#EADAB7").s().p("AgEACQABgNAGgTIACAiQAAAQgFALQgEgQAAgNg");
	this.shape_553.setTransform(-239.3,-67.2);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#EAD9B6").s().p("AgCgZQAHANgCAOIgFAXg");
	this.shape_554.setTransform(-239.2,133.9);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#EAD9B6").s().p("AAAgbQAKAagKAdQgJgaAJgdg");
	this.shape_555.setTransform(-239.3,-52.8);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#E9D9B9").s().p("AAAAFIghAAQAMgKAVABIAiABQgLAIgTAAIgEAAg");
	this.shape_556.setTransform(-225.3,-28.8);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#E9D9B6").s().p("AgBAZIAAgxIADAAIAAAxg");
	this.shape_557.setTransform(-239.3,-38.8);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#EAD9B7").s().p("AgbAAQAdgJAaAJQgPAFgNAAQgOAAgNgFg");
	this.shape_558.setTransform(-255.3,-28.8);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#EAD9B7").s().p("AgXACQAKgHANACIAYACQgKAFgNABIgBAAQgIAAgPgDg");
	this.shape_559.setTransform(-284.4,-28.8);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#E9D9B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_560.setTransform(-239.3,-0.8);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#E9D9B9").s().p("AgEAAQgBgVAKgMIAAAhQABAWgJAMIgBgig");
	this.shape_561.setTransform(-239.3,-14.8);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#EAD9B6").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_562.setTransform(-211.3,-88.7);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#E9D8B6").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_563.setTransform(-197.3,-88.7);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#EAD9B7").s().p("AghgEIBDgBQgRALgRAAQgQAAgRgKg");
	this.shape_564.setTransform(-284.2,-148.7);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#EAD9B7").s().p("AghgFIBDABQgRAKgRAAQgQAAgRgLg");
	this.shape_565.setTransform(-255.3,-148.7);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#E9D9B6").s().p("AgBgDQAAgOAEgLIAAA5QgFgUABgMg");
	this.shape_566.setTransform(-179.4,201.9);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#E8D8B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_567.setTransform(-119.3,193.2);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#EAD9B6").s().p("AgCgdQAFASAAAOQgBAMgEAPg");
	this.shape_568.setTransform(-179.2,186.7);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#C3BA60").s().p("AgFgMIACgNIAQAUIABAUIgQALQgUgRARgVg");
	this.shape_569.setTransform(-235.2,178.1);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#EADAB7").s().p("AgCgEQAAgOAFgLIAAA7QgFgWAAgMg");
	this.shape_570.setTransform(-179.3,174);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#E9D9B9").s().p("AgEAAQgBgVAKgMIAAAhQABAWgJAMIgBgig");
	this.shape_571.setTransform(-239.3,-134.8);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#E9D9B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_572.setTransform(-119.3,179.2);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#EBDBB9").s().p("AAAAEIgdgEQAggIAbAIQgLAEgPAAIgEAAg");
	this.shape_573.setTransform(-269.6,-28.8);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FBDBA3").s().p("AgIAKQgEgDgBgGQAAgFAEgEQAFgEAFABQALABACANIgHAFQgEADgDABIgBAAQgEAAgDgCg");
	this.shape_574.setTransform(-244.7,-66.8);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FBDBA3").s().p("AgKAKQgEgDgBgGQAAgFAFgEQAEgEAGABQACABAFAEIAJAHIgKAHQgFADgCABIgCAAQgEAAgDgCg");
	this.shape_575.setTransform(-244.5,113.2);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#BD8A54").s().p("AgLAOIgIgKIAAgSIARgBQAKgCADABQAIABABAJQACAIgHAGQgEAEgLAFIgBAAQgFAAgFgDg");
	this.shape_576.setTransform(-221.5,150.3);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FBDBA3").s().p("AgIAJQgFgEAAgFQAAgFAEgDQAFgDAEAAQALAAADAMIgFAGQgEAEgEABIgCAAQgEAAgDgDg");
	this.shape_577.setTransform(-244.7,53.2);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#A8C947").s().p("AAAAeQgHgEgCgQQgKgKAJgKIAIgUIACAEQAGAHADAKIAFARQACAHgCAHQgDAJgHAAIgEgBg");
	this.shape_578.setTransform(-232.7,178.6);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#E9D8B5").s().p("AghAGIAAgIIA5AAQAFgGAFAHIAAAHg");
	this.shape_579.setTransform(-242.2,31);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#EBDBB9").s().p("AgmgEIBNAAQgUAJgTAAQgSAAgUgJg");
	this.shape_580.setTransform(-269.8,-148.7);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#E9D8B5").s().p("AgnAAQAVgDASAAQAPAAAZADQgWAEgSAAQgOAAgZgEg");
	this.shape_581.setTransform(-242.8,91.2);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#EBDBB9").s().p("AgDAAQADgTAAgKQAJAggJAbQgFgOACgQg");
	this.shape_582.setTransform(-239.3,105.9);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FBE0AE").s().p("AAAAOQgOgFADgLQABgEAEgEQAFgEABABQAGAAAEAGQADAFgBAFQAAALgKAAIgCAAg");
	this.shape_583.setTransform(-262.2,205.8);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#704E5C").s().p("AgEAJIgfgCQAIgIAVABQAUAAAIgIQAMADACAFQADAEgOAEQgIACgLAAIgKgBg");
	this.shape_584.setTransform(-196.1,94.9);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FBDCA4").s().p("AgLgBQAAgLALAAQALABACALQgCAMgKAAIgBABQgNAAACgOg");
	this.shape_585.setTransform(-209.3,66.2);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FBDDA7").s().p("AgNABQADgOAMACQAFAAAEADQAEAEAAAEQgCAMgOABQgNgCABgKg");
	this.shape_586.setTransform(-271.9,59.3);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FBDDA7").s().p("AgDAMQgLgDADgLQACgKAKAAQANACgBAKQgBAHgFADQgDADgEAAIgDgBg");
	this.shape_587.setTransform(-278.3,102.2);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FBDDA7").s().p("AAAAMQgGAAgEgFQgDgEACgGQADgLAKADQALACAAAKQgDAMgJAAIgBgBg");
	this.shape_588.setTransform(-278.3,42.2);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FBDDA7").s().p("AgBANQgOAAABgMQADgNAMABQALABADAKQgEANgLAAIgBAAg");
	this.shape_589.setTransform(-271.9,119.3);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#E9D8B6").s().p("AglAEIAAgIIBLAAQgEAGgJABIgQABg");
	this.shape_590.setTransform(-239.7,-28.7);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FBDDA7").s().p("AgLAAQgBgGADgEQACgEAGABQAMABACANQgCAOgKAAQgMgBAAgOg");
	this.shape_591.setTransform(-268.4,178.5);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FBDDA7").s().p("AgDAMQgGAAgDgEQgDgDACgFQAEgOAMADQAMABgBALQgEAMgKAAIgDgBg");
	this.shape_592.setTransform(-271.9,-60.7);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FBDDA7").s().p("AgLACQgDgNAOgBQAMAAABAMQAAALgMABIgBABQgJAAgCgLg");
	this.shape_593.setTransform(-278.3,-77.8);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FBDFAB").s().p("AgNAAQgCgEADgEQACgEAGgBQAGgDAGAFQADACAEAHQABAOgKACIgEABQgJAAgGgPg");
	this.shape_594.setTransform(-226.6,72.5);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FBDFAA").s().p("AgJAMQgFgDAAgGQgBgGAGgGQAFgFAGAAQANgBABAPQAAAQgPAAQgFAAgFgEg");
	this.shape_595.setTransform(-215.5,39);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FBDAA2").s().p("AgKAQQgGgEAAgHQgCgIAFgGQAFgGAIgBQALgBAGAPQAAAPgRAEIgDAAQgEAAgDgBg");
	this.shape_596.setTransform(-184.8,145.8);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FBD89F").s().p("AgCARQgFgBgEgEQgFgFAAgHQAAgIAFgEQAGgFAGABQAIABAEAGQAFAGgBAGQgBAOgQAAIgCAAg");
	this.shape_597.setTransform(-244.7,-84.2);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FBD89F").s().p("AACARQgIAAgGgGQgGgGACgIQACgNAOAAQAQADABAPQAAAHgEAFQgDADgGAAIgCAAg");
	this.shape_598.setTransform(-244.7,35.8);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FBD89F").s().p("AACARQgIAAgGgGQgGgGACgIQACgNAOAAQAQADABAPQAAAHgEAFQgDADgGAAIgCAAg");
	this.shape_599.setTransform(-244.7,95.8);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#A8C947").s().p("AABANQgMgNgMAAQgGgDgEgFIgCgGQAjgZAkAcIgEAAQgDAHAAALQABANgDAHIgCAAQgMAAgMgOg");
	this.shape_600.setTransform(-229.3,177);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#BBCB56").s().p("AgWAZQgNgLANgIQAJgDAHgLQAGgPAHgCIAKADIAKARQAEAFgCACQgCADgFAEQgLgFgGAIIgHAPg");
	this.shape_601.setTransform(-252.5,177.1);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#95BE2E").s().p("AAIAcIgNgTQgIgJgHgGIgIgLQgCgGAEgHIAuABIABAIQANAVgHASQgBAIgGAEIgEABQgEAAgEgDg");
	this.shape_602.setTransform(-247.9,177.9);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FADFA9").s().p("AgMAWQgIgDgDgIQgHgLgCgFQgDgKALgGQAKgFAGAGIAIAQQABAFAPACQAPADADAJQgNAKgQAAQgHAAgKgDg");
	this.shape_603.setTransform(-249.3,173.3);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FBDCA4").s().p("AAAASQgQAAgBgSQAAgRAQAAQAOAAAFARQgBASgRAAIAAAAg");
	this.shape_604.setTransform(-220.8,55.7);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FBD79B").s().p("AgQgTQAHACAOgBQANACgBAQQAAAMgMAEQgFADgQABg");
	this.shape_605.setTransform(-185.8,171.7);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#EAD9B6").s().p("AgKAmQgTAAgKgKQAiAGAJgTQAJgPgFglQAIAKACAdQACAYAUAEQgDAHgGAAIgMABIgdAAg");
	this.shape_606.setTransform(-240.7,-152.1);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FBDAA2").s().p("AAAAVQgJgBgEgFQgEgGAAgIQgBgIAGgGQAEgHAIAAQAOABAEATQgCAVgQAAIAAAAg");
	this.shape_607.setTransform(-227.7,120.2);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FBDAA2").s().p("AAAAVQgIgBgFgFQgFgGAAgIQABgIAFgGQAEgHAJAAQANABAFATQgDAVgQAAIAAAAg");
	this.shape_608.setTransform(-287.7,180.2);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FBDAA2").s().p("AAAASQgIAAgGgFQgGgFAAgIQAAgQAVgCQAUAEAAAOQAAAJgHAFQgFAFgJAAIAAgBg");
	this.shape_609.setTransform(-270.3,-41.3);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FBD79B").s().p("AgRgCQACgRARACQARABAAARQgCARgRAAQgUAAADgUg");
	this.shape_610.setTransform(-261.8,-72.3);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FBDAA2").s().p("AgBASQgJgBgFgFQgFgFAAgHQABgJAHgFQAHgEAIABQASACAAAPQgEASgQAAIgCAAg");
	this.shape_611.setTransform(-270.3,138.7);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FBD79B").s().p("AgRAAQAAgSARAAQASABABARQAAASgRAAIgCABQgSAAABgTg");
	this.shape_612.setTransform(-261.8,47.7);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FBDAA2").s().p("AABAVQgHgBgGgGQgHgHAAgHQAAgHAHgHQAGgGAHAAQAJAAAEAJIAGALQgCAVgPAAIgCAAg");
	this.shape_613.setTransform(-190.1,64.2);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FBDAA2").s().p("AgDASQgIgBgFgFQgFgGABgGQABgKAHgEQAHgFAIACQASADAAAPQgFARgPAAIgEAAg");
	this.shape_614.setTransform(-270.2,78.7);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FBD79B").s().p("AgCASQgRgCACgRQABgRARABQASAAAAARQgBASgSAAIgCAAg");
	this.shape_615.setTransform(-261.8,107.7);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FBDAA1").s().p("AgPAQQgEgGgBgIQgBgJAEgGQAGgHAKAAQANgBAJAVQgHAUgPABIgBAAQgIAAgFgFg");
	this.shape_616.setTransform(-232.5,39.2);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#97734A").s().p("AgQA/QgKgsAAgWQAAglASgdIAjgBIAAALQgRgCgHAKQgDAHAAASIAABgIgEABQgHAAgFgIg");
	this.shape_617.setTransform(-190.7,129.8);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#4E3441").s().p("AgeARQgKAAgEgLIABgJQARAFAagJQAdgMAPAEQgLAIAMAGQgHANgVgBQgXgCgGAFQgLADgFAAIgCAAg");
	this.shape_618.setTransform(-198.4,94.1);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#E9D9B7").s().p("AgCAoIgrgFQAkABAKgTQALgRgFgnQAJAHABANQABAHgCAMQAAAfAegCQgSALgZAAIgFAAg");
	this.shape_619.setTransform(-240.5,-92.2);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#AFC954").s().p("AgmAWQgIgLAGgLIALgTQAjgaAkAaQADAGgCAHQgFAFgHABIgNAAQgNgDgGAHQgFAFgGAOQgIAJgJABg");
	this.shape_620.setTransform(-239.9,177.5);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FBDAA2").s().p("AgSAAQAAgWASAAQATAAAAAWQAAAWgRABIgCAAQgTAAABgXg");
	this.shape_621.setTransform(-289.8,-51.8);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FBDAA2").s().p("AgSgBQAAgWASABQALAAAFAIQADAHAAARQAAADgDAEQgFAGgKAAIgBAAQgTAAABgYg");
	this.shape_622.setTransform(-289.8,68.2);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#FBDAA2").s().p("AgWgCQACgRAWABQAWAAgBASQAAATgXAAIAAAAQgZAAADgVg");
	this.shape_623.setTransform(-217.3,100.7);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#FBDAA2").s().p("AgBATQgWAAABgTQAAgLAIgEQAFgDAJAAQAXAAAAASQABALgJAFQgFADgKAAIgBAAg");
	this.shape_624.setTransform(-277.3,160.7);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FBDAA2").s().p("AgSADQgBgKADgFQADgIAKgCQAWgEAAAaQAAAWgSABIgBAAQgRAAgBgUg");
	this.shape_625.setTransform(-289.8,128.2);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#FCAD58").s().p("AgdAIIAUgdIASAAIAVAVQgLAVgRAAIgBABQgKAAgUgOg");
	this.shape_626.setTransform(-205.8,99.7);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#FBDBA3").s().p("AAAAXQgVgCAAgXQgBgWAYACQASACACAXQABAKgHAGQgFAEgIAAIgDAAg");
	this.shape_627.setTransform(-200.4,84.2);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#FCB760").s().p("AhjACIADgJQADgGAFgCQAHAPACAAIBVAGQAyABAkgNQAFABADADIgCAGQgCAFgCAAQhBAGgfABIgKAAQgyAAglgOg");
	this.shape_628.setTransform(-205.9,109.2);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#FCBE67").s().p("Ag5AQIgBgCQAFgOAYgPQAdAAAegJIAdAmIgBACQgdAJgdAAQgbAAgegJg");
	this.shape_629.setTransform(-205.8,102.2);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#B5967B").s().p("Ag1AxIAAgeQAAgaALgSIAAgCIACgBIgCADQgCATAEAGQAGANAVgCQAEADgBAEQgBABAAAAQgBABAAABQAAAAgBAAQAAAAgBAAQgOgBgDAJQgBAGgBAOQgFAFgFAAQgFAAgFgFgAAkglQgNAGgZgCQgYgBgOAGQAIgKALgHQAdgTArAXQACABABAFIAAAIg");
	this.shape_630.setTransform(-201.4,92.6);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FBD99F").s().p("AgWAeIABg7IAdADQAQAFgCAVQgCAegfAAIgLAAg");
	this.shape_631.setTransform(-185.3,202.7);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FDC46E").s().p("AA0AHIhIABIg0gBIg0AAQADgOAQgFQBIAJAdABQA3AAAsgQQAUAJAKARIAAAKQgcgMgtABg");
	this.shape_632.setTransform(-205.4,110.8);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FBD79C").s().p("AAEAfQgSgCgJgFQgKgHADgPQAEgSACgFQAHgMARADQATAEADACQAMAGgDAQQgEARgDAGQgFAKgKAAIgFAAg");
	this.shape_633.setTransform(-265.3,160.6);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#FBD79C").s().p("AAEAfQgRgDgGgDQgOgHADgRQACgQADgFQAGgNAPADIAXAEQANAFgBAMQgBAWgFAIQgFALgMAAIgEgBg");
	this.shape_634.setTransform(-289.9,116.3);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FBD79C").s().p("AAEAfQgRgDgGgDQgNgHACgRQADgRADgFQAGgMAPADQASADAFACQANAGgCAOQgBASgFAJQgFAJgLAAIgFAAg");
	this.shape_635.setTransform(-289.9,56.3);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FBD79C").s().p("AACAfQgSgEgFgDQgMgHADgRQAEgSACgEQAGgLAQADQASAEAFACQAMAHgCAOQgCASgFAIQgFAJgKAAIgHgBg");
	this.shape_636.setTransform(-289.9,-63.7);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#FCA852").s().p("AhNALQgKgBgDgIQgDgGAFgKICxABIADAIQABAFgCADQgDAGgEAAQgjAGgsAAQgkAAgugEg");
	this.shape_637.setTransform(-205.9,109.2);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FBD9A0").s().p("AAAAgQghgEAEgeQADggAXACQAiAEgBAXQgCAUgFAIQgGAKgMAAIgFgBg");
	this.shape_638.setTransform(-231.7,84.2);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FBD9A0").s().p("AACAgIgXgIQgOgFAFgSQACgPAEgIQAHgNARAFIAXAGQANAFgEAQIgGAXQgGAMgPAAIgDAAg");
	this.shape_639.setTransform(-259.3,-50.8);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FBD9A0").s().p("AACAfQgQgCgIgEQgOgGAFgSQADgOADgHQAFgOAQADIAXAGQANAGABAQQgFAFgEATQgEALgMAAIgGgBg");
	this.shape_640.setTransform(-259.2,69.2);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FBD9A0").s().p("AACAfQgQgCgIgEQgNgGAFgTQADgOADgHQAFgNAQAEIAXAFQAOAGgBASQgFAEgEATQgEAKgLAAIgHgBg");
	this.shape_641.setTransform(-259.3,129.2);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FBD79C").s().p("AgBAgQgPgDgGgDQgLgGAEgRQACgQADgIQAGgMASADQAPADAHAGQALAIgCAQQgDAPgHAHQgIAHgNAAIgBAAg");
	this.shape_642.setTransform(-229.9,157.3);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FBD9A0").s().p("AAEAfQgUgDgEgBQgOgGADgRIAEgWQAFgOAPABQARACAHADQANAFADARIgIAXQgEANgNAAIgEgBg");
	this.shape_643.setTransform(-278.2,191.2);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FBD79C").s().p("AAAAfQghgDACgaQABgOADgHQAFgLAOAAQAIADATADQAOAEgCASQgBAPgFAIQgHAKgPAAIgDAAg");
	this.shape_644.setTransform(-186.4,40.6);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FCBC65").s().p("AhYAKIAfglIAGACQA0ANA1gNIAGgCQAFAHAOALQAKAJAAALQgwARgqAAQgtAAgqgSg");
	this.shape_645.setTransform(-205.9,106.5);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#FDC773").s().p("AiLgBQAaALAngCIBCgCQAnADBTgCQAMAAAEgEQAEgDgFgLQgFgDACgEQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAIASgFQAJABgEAQQgCAJAFAIQAGAMgBAGQgxgMhOACQhrACgTgBQgsgDgXAMQABgTAUgIg");
	this.shape_646.setTransform(-205.7,114);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#704E5C").s().p("AgjAaQgZACgEgOQgBgDACgaQANgNAYABQAgAAAGgBQASgGAHARQgFAJAXgBQATgBgRATQghAWgeAAQgPAAgOgFg");
	this.shape_647.setTransform(-199.7,91.5);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#8B6A4F").s().p("AgGEYQAAgWgGgqQgGgrAAgVQgBgjANgRIAEmEQAIgCAFAMQADAJABARIAAANQAAAMAEASIABAMIgBAPQgBAJgEAFQgKAJgBAQQAAAJABASIAAGMIgGAJg");
	this.shape_648.setTransform(-223.2,179.6);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#8B6A4F").s().p("AgYB/IAAkBQAZgFAEAVQAEAfACACIAGAEQAHAMABAPIgCAdQgBAFgDAIQgDAIgJAUQgIASgBAMQgCAMABAOQAAAIADAZQAAAMgEAIQgFADgEAAQgGAAgFgFg");
	this.shape_649.setTransform(-221.1,135.9);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FCAD56").s().p("AiFAXQgFgBAAgEIgBgHIASgUQBNgPAxgBQBFAAA5AYQAUAZgZAAIiBACIgSAAQhAAAgwgDg");
	this.shape_650.setTransform(-205.7,112.6);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#87664D").s().p("AAMC/QgMgJgDgIQgGgGgDgKQgBgLAHgMQAFgIgDgKQgFgLgBgFIADgZQACgOgFgLIACgYQAAgOgKgJQgDgEABgHQALgOgCgUIgIgjQgDg0AEgeQAEgtAjARIgBF6IgIgBg");
	this.shape_651.setTransform(-190,142.5);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FCAF57").s().p("AiVAWQgMgBgHgJIAJgLQAPgUAlgBIDYAAQAjAAARAVIAIALQgHAJgMABIgWgBQiAABh/gBIgQABIgGAAg");
	this.shape_652.setTransform(-205.8,116.5);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#EAE9B4").s().p("ACKBIQgKgDgEgKIgFgSQgMgegfAPQgIAHgOAUQgNAMgRgcQgHgGgLgBIgSAAQgOABgGANIgKAWQgFAFgHgBQgGgEgDgFIgJgUQgGgLgIgFQgZgLgRAYIgKAPQgHAIgLgDIgBhaQAHgFALABQAFACAHAJQAGAIAGACQAVAFARgHIAKgHIAJgJQAGgCAFAAQAJADAGAHQAIAKALACQAUACATgPQAOgJALABQAIAEAMAMQAYALARgNQAHgHABgNQADgRACgFQADgHAGgCIARAAQAIAZgBApQgCA3ABAKQgCAMgPAAIgCAAg");
	this.shape_653.setTransform(-239,182.9);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#86664B").s().p("AgOC0IgLgBIAAk9QgDgVABgLQABgSAXABQAQABABARQAAAKgBAUQABAGgBAJIAAAPQgDAIAGAJQAIAKAAAFQADAQAAAXIABAmIAAAQQgBAQABAgQAAAbgNASQgGArAIAkg");
	this.shape_654.setTransform(-256.2,188.7);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FDC46C").s().p("AidApIgIgUQgFgMgHgGIgCgYQAAgPAKgJQClgNCtANQAKAIAAAPQABAJgCAPQgNANgcABIhnABIhlAAQgYAAgMAEQgSAHgKARQgGAHgGAAQgIAAgGgLg");
	this.shape_655.setTransform(-205.7,122.4);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#7F5D45").s().p("AitDnQgKgOgBgXQABgbgBgNQgKiWAXjfQAIgGAJgDQA2gDBTAAICHABQAOAAAcgDQAIABAGAGIADBPQAOAVgOAUIABEBQAUAfgVAeIAAATQgRACgIgIQgGgHgBgTIACgxQAAgdgJgTIgDAAQgFgGgBgIIgBgIIACgIQAGg1gGhDIADg4QACgigSgUQgVgFgiAAQgrABgMgBIgeABIg0gBQgfAAgUAHQgPAUABAiIABA3IABBqIAAAVQAAANgFAIIgCABQgKAVABAiIACA3QgBAQgCACQgCAEgFAAQgEAAgHgDg");
	this.shape_656.setTransform(-205.4,184.5);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FCE5B6").s().p("Ai9EDQgrAAgSgRQgSgSAAgqIAAlrQAAgqASgSQASgRAsAAIF6AAQArAAASARQASASAAAqQABC1gBC2QAAAqgSASQgSARgsAAIi9ABIi9gBg");
	this.shape_657.setTransform(-269.8,-119.3);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#FCE5B6").s().p("Ai9EDQgrAAgSgRQgSgSAAgqIAAlrQAAgqASgSQASgRAsAAIF6AAQArAAASARQASASAAAqQABC1gBC2QAAAqgSASQgSARgsAAIi9ABIi9gBg");
	this.shape_658.setTransform(-149.8,180.7);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#FCE5B6").s().p("Ai/EDQgpAAgSgRQgSgSAAgoQgCi4ACi4QAAgnASgSQASgRApAAIDBgBIC+ABQApAAASARQASASAAAoQACC3gCC5QAAAngSASQgSARgpAAIjfABIiggBg");
	this.shape_659.setTransform(-209.8,-59.3);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FCE5B6").s().p("Ai6EDQguAAgSgSQgSgSAAgsIAAlmQAAgsASgSQASgRAuAAIF1AAQAuAAASARQASASAAAsQABCzgBCzQAAAtgSARQgSASguAAIi7ABIi6gBg");
	this.shape_660.setTransform(-269.8,0.8);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#E8D8B7").s().p("AgDAcIAAg4IAHAAIAAA4IgEABg");
	this.shape_661.setTransform(120.7,-92.2);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#E9D8B5").s().p("AgDAiIgBhDQAKAMgBAVIgBAiIgEAAg");
	this.shape_662.setTransform(60.7,-92.8);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#E8D8B7").s().p("AgDAcIAAg4IAHAAIAAA4IgEABg");
	this.shape_663.setTransform(0.7,-92.2);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#E8D8B7").s().p("AgEAiIAAhDQAKAMgBAVIgBAiIgEAAg");
	this.shape_664.setTransform(-59.2,-92.8);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#E9D9B6").s().p("AgEghQAUAhgUAig");
	this.shape_665.setTransform(-119.2,-98.8);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#E8D8B7").s().p("AgDAcIAAg4IAHAAIAAA4IgEABg");
	this.shape_666.setTransform(180.7,-92.2);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#E9D8B5").s().p("AgcAEIAAgHIA4AAQABADgBAEg");
	this.shape_667.setTransform(-182.7,91.2);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#E8D8B8").s().p("AgEghQAVAhgVAig");
	this.shape_668.setTransform(240.8,13.2);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#E8D8B8").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_669.setTransform(282.7,151.3);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#E9D9B8").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_670.setTransform(268.7,151.3);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#E9D9B9").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_671.setTransform(254.6,151.3);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#E9D8B5").s().p("AghgEIBDABQABADgBAEIgiABIgDAAQgTAAgLgJg");
	this.shape_672.setTransform(-183.3,31.3);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#EADAB7").s().p("AgEghQAUAhgUAig");
	this.shape_673.setTransform(-119.2,-126.8);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#E8D8B7").s().p("AgEAAQADgVgCgMQAJANgBAUIgBAiQgJgNABgVg");
	this.shape_674.setTransform(240.7,27.2);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#EAD9B6").s().p("AgEghQAUAhgUAig");
	this.shape_675.setTransform(-119.2,-112.8);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#E9D8B6").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_676.setTransform(-137.3,151.3);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#EAD9B6").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_677.setTransform(-151.3,151.3);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#EAD9B7").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_678.setTransform(-165.3,151.3);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#E8D8B7").s().p("AghgEIBDAAIAAAIIgiABIgDAAQgTAAgLgJg");
	this.shape_679.setTransform(-183.3,-28.7);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#EAD9B6").s().p("AgEghQAUAhgUAig");
	this.shape_680.setTransform(240.8,-52.8);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#E9D9B6").s().p("AgEghQAVAhgVAig");
	this.shape_681.setTransform(240.8,-38.8);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#EAD9B7").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_682.setTransform(224.6,151.3);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#EAD9B7").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_683.setTransform(195.7,151.3);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#EAD9B7").s().p("AghgEIBDAAQgRAJgRAAQgPAAgSgJg");
	this.shape_684.setTransform(181.7,151.3);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#E9D8B6").s().p("AghgEIBDAAQgRAJgRAAQgPAAgSgJg");
	this.shape_685.setTransform(167.7,151.3);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#E9D8B5").s().p("AghgEIBDAAQgRAJgRAAQgPAAgSgJg");
	this.shape_686.setTransform(153.7,151.3);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#E9D9B8").s().p("AgEghQAUAhgUAig");
	this.shape_687.setTransform(240.8,-0.8);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#E9D8B5").s().p("AghgEIBDAAQgRAJgRAAQgPAAgSgJg");
	this.shape_688.setTransform(139.7,151.3);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#E9D9B6").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_689.setTransform(125.7,151.3);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#E8D8B7").s().p("AghgEIBDAAQgRAJgRAAQgPAAgSgJg");
	this.shape_690.setTransform(116.7,151.3);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#E8D8B8").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_691.setTransform(102.7,151.3);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#E9D9B8").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_692.setTransform(88.7,151.3);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#E9D9B9").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_693.setTransform(74.6,151.3);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#E9D9B9").s().p("AgEghQAVAhgVAig");
	this.shape_694.setTransform(240.8,-14.8);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#E9D8B6").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_695.setTransform(42.7,151.3);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#EAD9B6").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_696.setTransform(28.7,151.3);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#EAD9B7").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_697.setTransform(14.6,151.3);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#E8D8B8").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_698.setTransform(-17.3,151.3);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#E9D9B8").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_699.setTransform(-31.3,151.3);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#E9D9B9").s().p("AgggEIBCAAQgSAJgQAAQgQAAgQgJg");
	this.shape_700.setTransform(-45.3,151.3);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#E9D8B5").s().p("AghgEIBDAAIAAAIIgiABIgDAAQgTAAgLgJg");
	this.shape_701.setTransform(-183.3,-88.7);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#E8D8B8").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_702.setTransform(-77.3,151.3);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#E9D9B8").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_703.setTransform(-91.3,151.3);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#E9D9B9").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_704.setTransform(-105.3,151.3);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#E8D8B7").s().p("AgcAEIAAgHIA5AAIgBAHg");
	this.shape_705.setTransform(-182.7,-148.8);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#E9D9B4").s().p("AgDgbIAHgBIAAA4IgHABg");
	this.shape_706.setTransform(-179.3,-152.2);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#EADAB7").s().p("AgEghQAUAhgUAig");
	this.shape_707.setTransform(-119.2,-141.7);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#EBDBB9").s().p("AgEglQAUAlgUAmg");
	this.shape_708.setTransform(240.8,-67.2);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#EBDBB9").s().p("AgEgmQAUAmgUAmg");
	this.shape_709.setTransform(240.8,-81.3);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#EBDBB9").s().p("AglgEIBLAAQgTAJgTAAQgSAAgTgJg");
	this.shape_710.setTransform(210.2,151.3);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#EADAB8").s().p("AgOAFQgSAAgLgJIBXABQgFAFgIACIgQABIgdAAg");
	this.shape_711.setTransform(239.6,151.2);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#EADAB8").s().p("AgMAlIgBgKIAAg+QAJAKAAAcQAAAaASAIg");
	this.shape_712.setTransform(241.6,-92);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#EAD9B6").s().p("AgMAnIgBgKIABhEQALAIgCAeQgBAZASAIQgEAIgJAAQgIgCgFABg");
	this.shape_713.setTransform(-118.4,-152.2);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#EAD9B7").s().p("Ag1gEIBqAAQgbAJgaAAQgaAAgbgJg");
	this.shape_714.setTransform(58.7,151.3);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#EADAB8").s().p("Ag0gEIBqABQgGAGgMABQgPgBgGABIgiABIgBAAQgVAAgLgJg");
	this.shape_715.setTransform(-1.3,151.2);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#E9D9B8").s().p("Ag0gEIBqAAQgbAJgbAAQgZAAgbgJg");
	this.shape_716.setTransform(-61.3,151.3);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#EAD9B7").s().p("Ag0gEIBqABQgFAFgJACIgPABQgGgCghACIgDAAQgWAAgNgJg");
	this.shape_717.setTransform(-121.3,151.2);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#DE6D69").s().p("AgaDrIAMgOQALgKABgRIgBgdIAAlpIABgiQACgTAKgNQADgBAGABIABFQQAFAEgCADQAAABAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgGBaAMBYIg1AAg");
	this.shape_718.setTransform(129.1,-115.8);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#38A099").s().p("AizAfQAAgFgBgEQgLgaALgMQAKgLAdACQAngQA8ABIBhACQAngCAkAPIAnADQAgAFgYAVQg9gChfABIiZAAIgUABQgLACgHAHIgCAbIgHABg");
	this.shape_719.setTransform(155.5,-93.6);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#1C7F89").s().p("AirAUQgMgUARgMQBEgKBeABQAzABBsADQAJAAAMALIABAcg");
	this.shape_720.setTransform(155.4,-91.6);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#7C7A5C").s().p("AgRChIABg2QABggADgVQAJhEg5ggQgCgMAHgHQAFgEANgDQAHgBAIgIQAJgLAEgCIAJg8QAJgLARAGQAJADACAUQABASAQABQAOALgLALQgnAiALA5QAAAPAGAwQAFAogDAYIgCAng");
	this.shape_721.setTransform(-25.6,-105.7);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#FEF5D6").s().p("AkkEjIAAghQABgVgGgMIAAhHQAGgLgBgYQgCgYAGgKQgIgOgBgVIAAgkQAGgLgBgWQgCgYAGgKQgIgOgBgVIAAgkQAGgLgBgYQgCgYAHgLQgXgyAXgxQADgFALAAQALgBAEgEIAkAAQAUABAOAJQALgHAYACQAYABALgGIAkAAQAVABAOAIQAKgGAYACQAWABALgGIAkAAQAVABAOAIQAKgGAYACQAYABALgGIBHAAQALAGAXgBQAYgCALAGIAAJNQgkAKghgKIhHAAQgkALghgLIhHAAQgiALghgLIhHAAQgkALgigMQgVgCgdAEIgyAIQgFgGABgHg");
	this.shape_722.setTransform(-209.9,1.2);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#FEF5D6").s().p("AAHEyQgEgJgBgMQgBAMgCAJIjegBQgMgPAIgWQALgOACgKQADgNgLgOQgLgOgBgbQgCghgFgLQgEgeAGgVQAHgYAZgPQAKgCAOAEIAXAHQAaADAMgCQATgEAGgUQAIgXgGgRQgHgVgYgKQgTgJgHgGQgGgHABgMIABgTQACgjgNgTQgNgUgfgKQgagIgZAJQgYAKgPAYQgdAyAwAxIASARQAKAKADALQADARgCAMQgDAPgNALQgTACgFgPQgDgSgEgIQgNgYgYgFIgMgCQgcABgPANQgQAMABAaQABAZARAOQAQANAaABQAWABAQAJQAgAQALAfQAIAYgCAoQgCAngCANQgEAdgMAUIk6ACQgGgLACgYQABgXgGgLIAAhHQAGgLgBgYQgCgYAGgKQgIgOgBgVIAAgkQAGgLgBgWQgCgYAGgKQgIgOgBgVIAAgkQAGgLgBgYQgCgYAHgLQgXgyAXgxQAQgSAZgEQASgDAdAFQAiALA4gMQAZgGAmAKQAlAHAhgKQAVgFAuAHQAsAHAYgIQAKgDAOgBQAYgCAZAFQAzANA3gMQARgEAOAAQAVgBASAEQAcAJAggFQAsgNApANQAoAFAdgJQAhgHAnALQAoAFAfgKIAjgCQASABAMAOQA1AOAIANQAJAOAABCQALAigLAkIAABHQALAhgLAiIAABHQALAhgLAkIAABHQALAhgKAkg");
	this.shape_723.setTransform(0.4,-120);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#E9D8B5").s().p("AgVAFIAAgIIAsACQgLAGgMAAIgVAAg");
	this.shape_724.setTransform(-297.5,-28.8);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#E9D9B6").s().p("AgEghQAVAhgVAjg");
	this.shape_725.setTransform(-299.2,156.2);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#E8D8B7").s().p("AghgDIBDgBIAAAIIgiABIgDAAQgTAAgLgIg");
	this.shape_726.setTransform(296.7,151.2);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#E9D8B5").s().p("AgEgiQAVAigVAig");
	this.shape_727.setTransform(-299.2,170.2);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#E9D8B5").s().p("AgcAFIAAgIIA5AAIAAAIg");
	this.shape_728.setTransform(297.3,-88.8);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#E8D8B7").s().p("AgcAFIAAgIIA5AAIAAAIg");
	this.shape_729.setTransform(297.3,-28.8);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#E9D8B5").s().p("AgEghQAVAhgVAjg");
	this.shape_730.setTransform(-299.2,184.2);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#EADAB5").s().p("AgEgiQAVAigVAig");
	this.shape_731.setTransform(-299.2,-180.8);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#EBDAB6").s().p("AgEghQAVAhgVAjg");
	this.shape_732.setTransform(-299.2,-194.8);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#E8D8B7").s().p("AgEAiIAAhEQAKANgBAVIgBAig");
	this.shape_733.setTransform(-119.2,207.2);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#E8D8B7").s().p("AgEAdIAAg5IAIAAIAAA5g");
	this.shape_734.setTransform(-59.3,207.8);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#E9D9B5").s().p("AgEghQAVAhgVAjg");
	this.shape_735.setTransform(-299.2,-166.8);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#E8D8B7").s().p("AgEAiIAAhEQAJANAAAVIgBAig");
	this.shape_736.setTransform(240.7,207.2);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#E8D8B7").s().p("AgigEIBEAAIAAAIIgiABIgDAAQgTAAgMgJg");
	this.shape_737.setTransform(296.7,-148.7);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#E9D8B6").s().p("AgEgiQAVAigVAig");
	this.shape_738.setTransform(-299.2,198.2);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#E8D8B7").s().p("AgDAdIAAg5IAIAAIAAA5g");
	this.shape_739.setTransform(60.7,207.8);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#72445D").s().p("AgSAPIABgLQAHggAWAYIAIATg");
	this.shape_740.setTransform(197.2,209.1);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#845D73").s().p("AgIAVQgCgOABgHQABgKAIgHQAGgGAEAHIAAAlg");
	this.shape_741.setTransform(-258.9,208.5);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#E9D9B5").s().p("AgXAnIAAhOQANAJgDAXQgGAqArgFQgIAKgQAAQgPgCgIABg");
	this.shape_742.setTransform(-297.3,-152.3);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#774A63").s().p("AgPAWQgOgSALgTQAKgJAIAFQAGACAKAJQAHAGAAAIIAAAQg");
	this.shape_743.setTransform(-256.2,208.5);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#825A6C").s().p("AgYBPIACgUQAHgOACgEQAIgPgBgXIAAglQABgRABgJQADgOANgFQABAJgCA7QgBAmANAZIACAbg");
	this.shape_744.setTransform(-221.3,202.7);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#7A5066").s().p("AgYBPIADieQATAJACASQAAALAAAXQAAALAAAXQAAAVAQAMQAHAEABAKQABAFgBALg");
	this.shape_745.setTransform(-189.3,202.7);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#F9EDCB").s().p("AB4BXQANg2gDhBQgBgUgFgEQgHgIgRANQgaAHgOgHQghgNgxABQg5AFgdgCQgOgBgEALQgCAHAAAQIgCBXQgZgYABgkQAHgqABgWQAEgIAHgGQAXgIAiAAIA5ABIAqAAIA6gBQAiABAXAGQAIAFAEAJQAHA9AAAOQABAsgQAhg");
	this.shape_746.setTransform(-205.8,202);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#83624B").s().p("AgqDqQAOhSANiHQAPioAGgwQgBgPACgHQACgMAPAAQAKAAABAKIADARQAGALgBAJQgDAHgFAEQgIATgBAaIAAAuIgJBFIgOB7QgGBJABA1g");
	this.shape_747.setTransform(143.5,187.2);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#7C7A5C").s().p("AgVCjQAEhJAFgkQAKhFg6ggQgCgMAHgGQAFgEANgEQAHgBAIgIQAJgKAEgCIAJg9QAJgLARAGQAJADACAUQABATAQABQAOAKgLALQgnAiALA5QAAAPAGAwQAFAogDAZIAAAog");
	this.shape_748.setTransform(-85.6,194.3);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#FDF4D3").s().p("AiOA9QgOgQgFgSQgIgpAKgbQAEgIAGgDQAIgCAJAEIAQAHQASAFATgDQAGgBAKgEQAJgFAGgBQAPAAAQANQARAOACAQIABgDQACgLAKgHIAPgOIAMgMQAHgFAJACQAIAIAFAXQALAcALgKQAMgTAGgDQAIgIAKgDQAIgBAHADQANALACAWQACAdACAFQACAGAAAJQAAALgJAJg");
	this.shape_749.setTransform(-239.5,204.6);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#FEF5D4").s().p("AiBBSQgMgPgBgUQgChfAQgRQAQgQBgABIAhAAQATAAAOAFQAcAdAbgaQAPgCAJAHQAKAGABAOQAEA3AAALQgDAlgWAag");
	this.shape_750.setTransform(-205.7,202.5);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#FEF5D4").s().p("AkCDXQgWgbAJgxQAEgWAEg6QAEgzAIgbIAHghQAEgTAJgJQAKgMgHgJQgKgOAAgBQgFghABgNQADgZAUgPQAugGANALQAOALABArIAABhQgBA5AFAlIAGANQARAcARgCQARgCATggQAEgRgBgaIAAgqIAAhjQAAgzAOgNQANgNAwABQAMAAAMADQAJADAGAGQAMAxAABNQgBBlABAWIAGANQAVAcAdgWQAHgIAHgQQADgbgBgnIAAhFIAAg0QgBggAHgUQAFgNANgHQAUgEAMAAQARAAAOAIQASARACAgQAICSAWCcQAEAbgIAbIgJAQg");
	this.shape_751.setTransform(169.2,189.2);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#FEF5D6").s().p("AkgErQgHgLACgYQABgYgGgLIAAhGQAGgLgBgYQgBgYAFgLQgIgOgBgUIAAgkQAGgLgBgWQgCgYAHgLQgJgOgBgVIAAgkQAGgKgBgYQgCgYAHgLQgXgzAXgwQADgGALAAQALAAADgEIBIgBQAhAMAkgLIBHgBQAhAMAigLIBHgBQAhAMAkgLIBHAAQAMAGAYgCQAXgBALAGIABIuQAAATgHAGQgFAGgTAAIougBg");
	this.shape_752.setTransform(270.2,180.7);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#FEF5D6").s().p("AAHErQgEgIgBgMQgBAMgCAIIjcAAQgNgPAHgWQALgRACgGQAEgOgLgPQgLgNgCgcQgCghgEgLQgFgfAGgUQAIgZAYgOQALgDAQAGQAUAGAGABQAYACAKgDQASgEAGgTQAPgygogUQgagMgEgEQgGgIAAgLIACgUQABgigNgUQgMgTgfgKQgbgIgYAJQgZAKgOAYQgeAxAwAyIASARQAKAKADAKQADASgCALQgDAQgMAKQgTADgFgPQgDgTgFgHQgNgZgXgEIgNgDQgcABgPAOQgQAOABAYQABAZASAOQAQAMAbABQAUACASAJQAqAhAHA8QAGA8ggA9Ik2AAQgGgLACgYQABgXgGgMIAAhGQAGgLgBgYQgCgYAGgKQgIgPgBgUIAAgkQAGgLgBgWQgCgYAGgLQgIgOgBgVIAAgkQAGgKgBgYQgCgYAHgLQgXgzAXgwQADgFALgBQALAAADgEIBIAAQAhALAjgLIBIAAQAhALAkgLIBHAAQAhALAkgLIBHAAQA0ALA2gLIBIAAQAhALAjgLIBHAAQAhALAkgLIBIAAQAgALAkgLIBIAAQAKAGAYgCQAYgCALAIIAAAeQAMAngMAoIAAA9QAMAngMAnIAABFQALAhgLAlIAABHQALAggLAlIAAA8g");
	this.shape_753.setTransform(-59.6,180.7);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#FDF6D6").s().p("ABXJXIhGAAQgjALghgLIhHAAQgkALghgLIhHAAQgiAPAAglIABgYQAAgOgGgKIAAhGQAHgLgCgYQgBgYAGgLQgJgOgBgUIAAgkQAHgLgCgYQgBgYAGgLQgJgOgBgVIAAgkQAHgKgCgYQgBgYAGgLQgXgzAXgwQACgHgGgLIgCgGQgDAOgGACQgGADgngFIhHAAQgkAKghgKIhHAAQgnALgngLIhHAAQghAKgkgKIhHAAQgYAJgLgHQgMgGACgbIABgTQAAgLgGgIIAAhGQANgjgNgjIAAhGQANgjgNgjIAAhGQANgjgNgjIgFg8QgCgjALgLQALgLAjACIA8AFIaiAAQgNBAADAuQALAhgLAkIAABHQALAhgLAlIAABGQALAhgLAlIAABGQAMAogNAdIpOAAQgEgGAAgNQgBAKgEAJQgLADgLABQAOAAAHAFIAAJPQgkAKghgLIhGAAQgSAGgSAAQgRAAgRgGgAELAFIACAAQgOAAgPgEQAIAFATgBgAEvgbIAAgBQABgUgFgIQAEAPAAAOg");
	this.shape_754.setTransform(-209.5,-149.2);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#FEF5D5").s().p("AMUErIgMgLQgGgHgCgHQgIhAgNiAQgNh+gJg/QAAgNgBgGQgCgKgQAEQghALgbgKQgLgNgMAMQgaAKgjgHIgQgFQgJgDgHAHQgTAFghAAQglAAgPACQgogDgzABIggAAQgSgBgOgFQgQgFgDAJQgBAGAAANQgIAugIBTQgJBcgFAnQgDAZgCAzQgEAtgYAaIsKAAQgEgIgBgMQgBAMgEAIIpYAAQgRgTAGgkQAOgqgNgkQgHgfAHghQANgngNgkQgHgfAHgfQANgsgNgpQgGgdAGgbQANgogMgqQgDgSAIgMQAGgGAPAAQAPABAHgFIBHAAQAhALAjgLIBIAAQAhALAkgLIBIAAQAgALAkgLIBHAAQA0ALA4gLIBIAAQAhALAkgLIBHAAQAhALAkgLIBHAAQAhALAkgLIBHAAQAjALAigLIATAAQAhALAkgLIBIAAQAiALAigLIBHAAQAjALAigLIBIAAQAjALAhgLIBHAAQAkALAigLIBHAAQAkALAggLIBIAAQAnALAmgLIBIAAQAhALAkgLIBHAAQAKAFAVgBQAVgBAJAEQAEASAAAhQgBAjADAQQgGAbADAqQgCAYAFAuQgGAcADAoQgCAYAFAwQgFAbACAtIAABFIgBAkQgCAUgLAMg");
	this.shape_755.setTransform(120.4,180.7);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FEF5D6").s().p("AE2ODQgGgLACgXQABgYgGgLIAAhHQALgkgLghIAAhHQALgkgLghIAAhIQALgjgLghIAAirQALgkgLghIAAhHQALgkgLghIAAhFQALgngLgnIAAg/QALgngLgnIAAgfQgCgEAKACQAKABgKgLQgDgEgBgHIABgKIgBgHIAAAGIAAALQgBAIgEAGIpMgBQgEgJAAgOQgBAOgEAJIhHAAQgJgJAAgQIABgNQgBgSgQgCQgXgDgDgDIgbgOQgRgIgIgKQgFgKAGgUIgGASQgEALgGAFQgNALgQgCQgRgDgGgUQgIh1AJhWQAGgPAPgFQAGgCAXgBIAnAAQAZAAAPgDQAAAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBIgCgFQgegZhGgvQgRgLgFgCQgOgGgNAEQgWAKgdAVIgwAjQgOAGgTAEQgMAAgFABQgKADABANQAUAHAhgBQAqgDAKABQAbADAJAEQASAHAHASQALBrgMBPQgTAjglgQIgNgOQgHgJgLAEQgGACgBAHIgBAMQgEAOgNAIIgaAKQgaAAgDAYQgFAhgDAEIg4AAQgWgggBgwQAFg4AAgbQATgKgIgNQgMgPgBgIQgCg3AAhRIABiHQAAgRABgIQADgNAJgJQgFgYgQABIgcAMIgaAQQgPAJgLgLQgNgMADgSQABgOAKgUQAEgFALAAQALAAAEgFIAkAAQAUABAOAJQALgHAYACQAYABALgGIAkAAQAVABAOAIQAKgGAYACQAYABALgGIAkAAQAVABAOAIQAKgGAYACQAYABALgGIBHAAQAvALA+gLIAkAAQAUABAOAJQALgHAYACQAYABALgGIAkAAQAVABAOAIQAKgGAYACQAWABALgGIAkAAQAVABAOAIQAKgGAYACQAYABALgGIBHAAQA1ALA4gLIAkAAQAUABAOAJQALgHAYACQAYABALgGIAkAAQAVABAOAIQAKgGAYACQAYABALgGIAkAAQAVABAOAIQAKgGAYACQAYABALgGIBHAAQALAGAYgBQAYgCALAGIAAJOQgIAEgLABQALABAIAEIAAJMQgIAEgLACQALAAAIAEIAAJOg");
	this.shape_756.setTransform(210.1,-59.3);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#FEF5D4").s().p("EgglAJLQgNgOAHgjQALgkgMggIABhIQALgkgMghIABhHQAKglgLggIAAhQQALgggKglIAAgfQAQgHgIgHQgLgNAAgDQADgVgLggQgGggAGgeQANgngNglQgGggAGggQANgngNglQgHggAHggQAMglgMgpQgFgkACgTQAEgdATgVMBAvgABQAcAAAJAJQAJAJAAAcQgCByAACjIABEVQgNAKgUACIgjABIhEAAQgvgCgaAFIgkgCQgWgCgOABQgpgCgdAFIgjgCQgVgCgOABQgogCgfAFQglgDglAAIhmAAIhEAAQgvgCgaAFIgkgCQgWgCgNABQgrgCgcAFIgjgCQgVgCgOABQgogCgfAFIhJgFQgagEgEgQIABglQgCAFAAAWQABASgMAFQgMAIgSABQgWgBgLABIhCAAQgvgCgaAFIgkgCQgWgCgNABQgrgCgcAFIgjgCQgVgCgOABQgqgCgcAFIgigCIgjgCQgggCgEgYIAAgBIABgTQgCAMABAIQAAAOAIAGQADAGAAAEQgEAeAJAIQAKAJAdgPQAVgLALABQASACAFAaQgDAHgGADQgUAJgRAKQgEADgdAEQgVADgFASIgCAEQgCADACACQAbgbAmAXQAIALgFAQQgEAIgMAGQgPAGgDADQgSAcAQAkQAFAHALAHQANAIAEAFQAMAXAAAeQAAAKgEAtQgEANgHAHQgGAFgHACQgaACgMAEQgJAJACAQIABAbIACAZQADANAMADQAZAGAJAUQAFALADAeQAAARgKALIg0AAQgEgIAAgOQgBANgEAJIpNAAQgKgLgDgXQgDgcgDgIQgHggAGghQANgngMgmQgHgfAHghQAMgngMglQgHggAHggQAMgmgMglQgEgTABgKQAFg4gzgFQgJgBgFgMQAGgMATgDQAWgDAGgGQAIgOgIgMQgLgOgFgHQgQgggSAHQgFACgbAaQg2AFgcgpQgBgOgBgGQgDgLgSAGQgcgNgcgdIgvgzQhehjhdg3QgPhBAQhCQAGgOABgHQABgNgMgDQgMgEgDALQgDAGgCAOQgGAPgHAFQglAJg2AAQg8gDgfAAIgQgCQgKgBgHAFIhaBbQg3A4gkAhIgOAOQgIAHgJACQgLACgNgFQgHgDgOgJQg/gpg9APQgbgMgPAEQgTAFgIAdQgYAMgQgKQgMgIgKgaIgCgYQgDgOgTACQgLAWgcAFQggACgOAFQgaAMgGAhQgGAZAAAIQADAOgEAgQABAaAZAMQAJADANAMQANAMAIAEQAUAKAWgHQAMgEAJgHIALgLQAGgGAHgCQAGAAAHABQAIADAJAHQAIAHADAKQAEAQgDATQAAAHgDAGQgEAOgCATQgBAKgEAKQgJAXgNANIAfAAQARAAALAKIABAyQAAAeADATQgFAbACAqQgBAXAEAvQgFAcACAqQgBAYAEAvQgFAbACAuIAABEIgBAkQgCAUgLAMIkPAAQihAAhuACIgFABQgiAAgMgOg");
	this.shape_757.setTransform(89.6,-149.2);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FEF5D4").s().p("AuGcIQgIgIADgWQACgKAAgRIgBgbQANgkgNgiIAAhGQANgkgNgiIAAhGQANgkgNgiIAAhGQANgkgNgiIAA8QQAGgEAKgBQgKgBgGgEIAAymQAJgJAQgEIAbgHQAhgGAgAGQAnANAlgNQAggHAgAHQAqANArgNQAggGAgAGQAoANAlgNQAggGAhAGQAHADAYADQAUADAKAIQAHASgBAhQgBAlADAOQgFAeACAoQgBAXAEAvQgFAcACAqQgBAYAEAvQgFAbACAuIgBBfQABAmgWAIIAIgCIAogMQAggGAhAGQApAMAlgMQAggHAfAHQAoANAjgNQAggGAgAGQAmAMAmgMQAhgHAhAHQAHADAdAEQAXACALALIAAJOQgMAMgUABIgjABIhEAAQgugCgbAFIgjgCQgWgCgOABQgogCgcAFIgjgCQgWgCgNABQgrgCgbAFQg2gEgQAAIghgHQgTgDgJAAQgJAAgBADQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAABABQAQgIAYAHQAGASgBAgQgBAkADAPQgFAeACAoQgBAXAEAvQgFAcACAqQgBAYAEAvQgFAbACAuIAABEIgBAiQAAAUgIALQgKAHgRAAQATAAALgFQAxgRAwAJQApAKAlgKQAggHAfAHQAoALAjgLQAggGAgAGQAmAKAmgKQAhgHAhAHQAHACAdADQAXACALALIAAJOQgIAEgMAAQAMABAIAEIABIPQAAAwAIAHQAJAIAxABIAsAAQAhALAkgLIBHAAQAhALAkgLIBIAAQAgALAkgLIBIAAQAOAGAZgBQAcgBALADQAHASgBAgQgBAlADAOQgFAfACAnQgBAYAEAvQgFAbACArQgBAYAEAvQgFAbACAuIAABEIgBAkQgCAUgLANIqeAAQgOgPgDgRQgBgNAGgIQA8gcg6gaQgFgDgFgOQgLhtAKh7QASgYACgHQAFgSgXgOQgFgQAAgWIAAgmIAAi0IgBizIABgQIABgaQAAgPgEgKIgKgSQgDgFgGgTQgFgPgJgHQgXgSgMgIIgJgJQgFgFgCgFQgEgIgIgKIgOgRQgGgHgKgOIgQgVIgKgNQgGgJgCgHQgEgdAagCIARACIASACIAZABQAPABAJgHIgCgRQgCgGgHgGIgLgLQgIgIgOgBQgRABgIgBQgogFADApQABAOgFAeQgEAQgPAVIgOAQIgQARIgNARIgNARIglAtQgIALgMALQgLAMgKASIgIASQgEARACAjQACAsgBBNIgBB4IAAAcQgBAUACBjQAABIgGAuQgFANgNADIgjgDQgVgCgOAFIgKAIQgGAGgFACQgIABgHgGIgNgKQgXgSgfARQgQAIgKgBQgIgCgJgHIgKgJQgEADgRgQQgNgMgIAaQgGAGgJAVQgJANgTgXIgEgTQgDgOgFgNQgFA6ACB0QABBsgGA4IgHAYQgFANgIAIIi2gBIi3ABIgDAAQgVAAgHgGg");
	this.shape_758.setTransform(-209,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300.3,-209.8,600.6,420.6);


(lib.mainBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D19A32").s().p("AgEgXQAUAXgUAYg");
	this.shape.setTransform(-263.2,-183.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D69F33").s().p("AALgXQgOAXAOAYQgsgYAsgXg");
	this.shape_1.setTransform(-268,-183.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2AB37").s().p("AgJAYQgfgYAfgXIAdAAQALAXgLAYg");
	this.shape_2.setTransform(-265.8,-183.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DDA737").s().p("AAPgOQgCAbgbACQALgSASgLg");
	this.shape_3.setTransform(-262.3,-178.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7A737").s().p("AgOAAQAOgIAPAIQgHAEgIAAQgFAAgJgEg");
	this.shape_4.setTransform(-257.3,-171.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9A234").s().p("AgJgEIAAgJQAUgFgBAMQgBAGgEAPg");
	this.shape_5.setTransform(-270.7,-183.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DDA737").s().p("AgXgVQAMATAIAFQALAMARACQgNAFgJAAQgcAAACgrg");
	this.shape_6.setTransform(-270.3,-179);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DAA435").s().p("AgKgIQAIgNAPAHQARAGgEAIQgGAOgQAAQgXABgHADQAIgKAIgQg");
	this.shape_7.setTransform(-256.7,-177.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBC33D").s().p("AAJBDQgOgGgEABQgWAFgMgMQgKgKgGgXIABgQQACgHAIgFQABgCAEAAQAFABABgCIgLgHIgLgKQAhgoAWgCQAUgBArAhIABBEQgMASgTAMQgFAHgHAAIgIgCg");
	this.shape_8.setTransform(-266.8,-183.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBCF84").s().p("AgXADQAagQAVARIgBABg");
	this.shape_9.setTransform(4.9,-182.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDD185").s().p("AAAAGQgpgEgWABQAZgJAmABQA3ADAIgBQgXAJgiAAIgGAAg");
	this.shape_10.setTransform(-6.2,-182.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6D791").s().p("AhkAAQBqgRBfAQQgNAKgXAAIglgBQgKgBg1ACIgJABQgiAAgWgKg");
	this.shape_11.setTransform(-2.7,-186.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AA8358").s().p("AgNAAQACglgIgOQARAMAWgMQgIAPAAAkQAAAjgMARQgPgRACgjg");
	this.shape_12.setTransform(-205.8,184.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FBE6E6").s().p("AgDAGQgOgDgBgNQAEADAPAFQAOADAEAKIgWgFg");
	this.shape_13.setTransform(-149.8,-176.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#19291A").s().p("AAAgcIAGAUIAAASIgGATQgJgcAJgdg");
	this.shape_14.setTransform(-277.3,-183.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F18485").s().p("AgWANIgBgOQABgKAKgEQACALAOAEQAQABAEAGQgJAIgOABIgXgDg");
	this.shape_15.setTransform(-150.4,-175.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FBE6E6").s().p("AgJABQACgQgBgJIARABQABAFAAADIAAAMQACASgMAKQgJgIAAgQg");
	this.shape_16.setTransform(-152.8,-176.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333C20").s().p("AgPgUQAgAIgBAhIgLABg");
	this.shape_17.setTransform(-250.2,-182.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#444C33").s().p("AACAOQgBgJgIgGQgOgJgCgEIAJgJQAfALAHAaIgKAJg");
	this.shape_18.setTransform(-260.2,-190.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3D4529").s().p("AgKATQgBgHgCgDQAEgdAWgIIABATIgTAmQgEgDgBgHg");
	this.shape_19.setTransform(-276.1,-187.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ED5F61").s().p("AgLAHQADgDgMgEQgKgFAQgHIAXAAIALADQAFACAAAHIgTAIQgFAFgCAAQgFAAgFgGg");
	this.shape_20.setTransform(-152.5,-180.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FAD8D8").s().p("AgFAZQgHgCAAgGQAKgPgBgWIAQgJQgCAKACAUQABATgNAKQgBgDgFgCg");
	this.shape_21.setTransform(-150.1,-183.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#40482B").s().p("AgHAQIgKgeQACgBABgJQABgGAEgDIAbBDQgSgCgHgQg");
	this.shape_22.setTransform(-275.7,-178.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F07D7E").s().p("AABAoQgQgHgFADQgCgEAAgDIAAgFQAEgHANgMQAEgFABgRQABgQAHgHQAPAOAAAVIgFAjQgBALgJAAIgHgBg");
	this.shape_23.setTransform(-149.6,-182.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4A4E2B").s().p("AgJACQAEgZgCgLQAFgJAEAIQAZAvgjAcQgFgOAEgYg");
	this.shape_24.setTransform(-248.8,-176.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1F2E1C").s().p("AAtALQgUgKgcADIgzAGQAYgXAeABQAUABAiAOQADAKgHAAIgFgCg");
	this.shape_25.setTransform(-267.3,-193.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333A1E").s().p("AgCALQgcgEgPgUQAQAFAfgBQAeADANATQghABgOgDg");
	this.shape_26.setTransform(-268.2,-172.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#414A33").s().p("AgFASQgWgFgGgYQgEgOAOAFQAGAMAXAIQAYAHAFAPQgdAAgLgEg");
	this.shape_27.setTransform(-255.3,-187.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EF7374").s().p("AgPAUQgHgQAAgEQgCgKAJgJQAOgPASAQQARAYgbAUIgHABQgJAAgGgHg");
	this.shape_28.setTransform(-152.4,-183.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4E5235").s().p("AgGAQQghAAgPggQAXAPAfgEIA3gIQgeAegdAAIgCgBg");
	this.shape_29.setTransform(-257.1,-168.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DDA737").s().p("AhGARQgKgJAJgIIAUgXQAzgYAtAUQAGAFAQAHQAMAIgEAOIgIAUQgkgLgZABQgfABgaATg");
	this.shape_30.setTransform(-267.5,-190);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EBB53A").s().p("AADBVIgIgKQgNgHghgGQgfgGgPgJIgKgNQgXgagJgnQgDgKACgLIAGgXQAFgNAJgGQAJgDAIAEQAEADAIAJQAGAHAEAKQABAHAAAGIgDAPQgCAKAAAGQACAfAkgEIAUAAQAMAAAHgDQAPgEADgRQABgKgCgXQgBgWACgMQAFgRAMgFQALAAAIAJQAGATAXAGQAeAIAHAGIgBABQAYAZADAVQAGAPgDAVQgBALgIAZQgFATgOAHQgiARgVACIgFABQgbAAgXgWg");
	this.shape_31.setTransform(-263,-178.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2E1AB").s().p("AgmACIAAgEIBMAAIABAFg");
	this.shape_32.setTransform(4.1,-194.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7E7B0").s().p("Ag/gDIB/AAIAAAEIhAADIgFAAQgiAAgYgHg");
	this.shape_33.setTransform(-6.3,-194.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EFDA92").s().p("AhnAEIAAgHIDPAAQABADgBAEg");
	this.shape_34.setTransform(-2.3,-190.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9CC233").s().p("AhZAWIgdAAIAAglIAdgCQBwgKBgALIAAAkIgHABIhlACIglAAIg/gBg");
	this.shape_35.setTransform(-3.8,-188.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D1C4AC").s().p("AgZAMQgFgDAAgGQAEABACgDQASACAHgCQAOgCAIgNIAIAIIgTAUIgcABIgJgDg");
	this.shape_36.setTransform(-44.1,-164.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#634F54").s().p("AgSAGQADgLAPgJIAHAAIALABIgIASIgSAKg");
	this.shape_37.setTransform(-40.9,-163.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A6918A").s().p("AgCAXQgDgEgDgGQgDgZAMgMQAJAKAAANIgDAWQgDAEgEAAIgCgCg");
	this.shape_38.setTransform(-40.8,-167.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A8958C").s().p("AgDAaIgLgNIABgiIAagMQgGAVgBAMQAAASAJAPIgGABQgIAAgEgIg");
	this.shape_39.setTransform(-48.2,-167.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#784B63").s().p("AgUAkQgQgUgCgQQgCgRATgRQAegMAeAXIgBAXQgBAMgDAJQgJAPgRACIgGABQgIAAgOgDg");
	this.shape_40.setTransform(-44.6,-167.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9DC037").s().p("AAOgMIgaAaQgFggAfAGg");
	this.shape_41.setTransform(-23.1,-176.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D6D39D").s().p("AgPgBIACgHQAGgQALAFIAMALIgSAdQgKgGgDgQg");
	this.shape_42.setTransform(-40.3,-161.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E9B66B").s().p("AAiAEIhDABQAhgTAiASg");
	this.shape_43.setTransform(-202.3,151.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEF4D3").s().p("Ah2AGQgNgBgIgGQA0gFBPABICAAAQAPAAAFAKIjtAAIgQABIgFAAg");
	this.shape_44.setTransform(-205.8,158.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F8E9B4").s().p("AiLACQAbgJArABQA5ACAMgCQAhgJAkAJQAGABAegBQAWAAANAIQhIAJhEAAQhGAAhFgJg");
	this.shape_45.setTransform(-205.8,152.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F0E7AD").s().p("Ag7AGIAAgHQAVABAngFQAkgCAXANg");
	this.shape_46.setTransform(-197.7,147);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F1E7AD").s().p("AhRgCQA7gHBjAGQAGADgCABQgCADgCAAIhOACIgIABQgrAAgdgJg");
	this.shape_47.setTransform(-211.5,147.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#86B025").s().p("AgGACQAFgNAAgIIAFAAIADAnQgPgFACgNg");
	this.shape_48.setTransform(-236.6,187.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#88B425").s().p("AgTgIQAGAJAMABIATgBIAKAGIg2ACQgDgLAKgGg");
	this.shape_49.setTransform(-229.7,190.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D8DD96").s().p("AgSAAIAKgHIARgKIAKAcQgPAHgGAAIgBAAQgLAAgEgSg");
	this.shape_50.setTransform(-229.8,189.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D7DC98").s().p("AgHATIgKgmQABABAUAHQAPAEgBAPIgIABQgFALgGAAIgGgBg");
	this.shape_51.setTransform(-229.9,186.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DEDDA1").s().p("AgSgZQAIAJAKgCIAUgFQAFAGgBAPQgCAMAIAGIABAJIgxABQgYgaAYgZg");
	this.shape_52.setTransform(-238.8,188.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CAD08B").s().p("AgGATIgcgSIAMgBQAFgBADgGQAVgWAcAVIgBAAQABAIgIAHIgMANg");
	this.shape_53.setTransform(-239.2,191.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D2DB8D").s().p("AgSAJQgBgEACgFQAHgHAFgCQAFgEAJAGIALAAQgEAOgLAEIgHABQgHAAgJgDg");
	this.shape_54.setTransform(-248.7,189.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D7DC98").s().p("AgMATQgPgWALgJQAHgFAXgBQAJAGgCAJIgHANQgGgBgIAFQgFAFgFAAIgCAAg");
	this.shape_55.setTransform(-249.2,187.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FBD79B").s().p("AAAASQgQgBgBgRQABgRAQAAQAUgBgCAUQgBAQgRAAIAAAAg");
	this.shape_56.setTransform(-196.8,128.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#573848").s().p("AgTAMIABgbIARgLIAJAAQADAEAAAFIAIAcIABABQgLAPgJAAQgJAAgKgPg");
	this.shape_57.setTransform(-205.8,178.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#8EA746").s().p("AgKgBQgBgEADgBQAEgCADACIANAKIgMAEQgIgGgCgDg");
	this.shape_58.setTransform(-34.9,-114.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#ACBF6E").s().p("AgGgBQgBgDADgDQACgEACAAQAEAAABAFIACAJIgFAJQgGgKgCgDg");
	this.shape_59.setTransform(-10.6,-119.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FDC46C").s().p("AhEAXIgKgJIABgcQANgMATADQAQAFAXAAIAkAAQAXABADABQAPACAIALIAAASQgVAGgrgBQgpgCgVAFIgCACg");
	this.shape_60.setTransform(-7.8,-184.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F8C16C").s().p("AhnASIAEgGQASgKAlACQAlABAQgHQAIgKAIgEQAMgHAUgBIAigCQAHAAAGAEIAAAnIgDACIgFgBQgIgFgNgBQgVAAgHgCQAHADAUAAQAOAAAHAGQg1AIgvAAQgzAAgvgJg");
	this.shape_61.setTransform(-2.3,-184.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#AABB59").s().p("AgHgBIAKgHIAEAGQACACgBACQAAACgDACIgFADg");
	this.shape_62.setTransform(-19,-131.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#9C7A87").s().p("AgIAIQgCgGADgNIAHgDIAKAdIgGAAQgKAAgCgHg");
	this.shape_63.setTransform(-15.8,-150.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FBDBA3").s().p("AgIAJQgDgEABgFQABgEADgEQAEgEACAAQACAAAEAEIAGAFQABAOgLACIgCAAQgFAAgDgEg");
	this.shape_64.setTransform(-22.3,-154.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F3D39C").s().p("AADB+QgChMAAgmQAAgOgGgwQgHgoAFgZQANgRADAIQABADAAARIABDjQgCAFgCAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_65.setTransform(-16.9,-164.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E9D9B6").s().p("AgBgWIADAAIAAAsIgDABg");
	this.shape_66.setTransform(0.7,-169.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EAD9B6").s().p("AgCgUQAOAWgOATg");
	this.shape_67.setTransform(0.8,-155.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FBD89F").s().p("AgQAFQgBgIAFgGQAEgHAIAAQAMgBAFAPQAAAPgRAEIgCAAQgMAAgCgMg");
	this.shape_68.setTransform(-4.9,-154.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FAF0CF").s().p("AhIA1IAJgJIgCgyQAAgeAOgTIAHgEIB1ABIAABzIh1ADg");
	this.shape_69.setTransform(-199.2,185.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FBF1D0").s().p("AhGA6IAAhzIB0gCIAGADQAQARAAAfQAAAnADAKQgCAMgLAAIgLAHg");
	this.shape_70.setTransform(-212.5,185.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D5DD91").s().p("AgOgHQAIgSAVAIIgBAJQgGADgDALQgDAMgGACg");
	this.shape_71.setTransform(-237.3,197.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B4CF5C").s().p("AACARIgbgIIgGgJQAAgIAJgCIAOgBQAJgJAMAJQAPADAEAJIAAAGQgRAKgMAAIgBAAg");
	this.shape_72.setTransform(-239,194.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#DADE9D").s().p("AgUAZIACgtQAIgGAJACQACABALAHQAMAPgFAQIgIALg");
	this.shape_73.setTransform(-239.8,198);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B7C770").s().p("AgbAFIgBgHIA5gDIgIALg");
	this.shape_74.setTransform(-248.9,192.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#9CC233").s().p("AgFAAQAAgPAIgIIADAuIgJABIgCgYg");
	this.shape_75.setTransform(-232.2,198.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E3E3AC").s().p("AgVAAQAAgGAEgQQAIABAPAAQAOACACASIgBAQIgjAJQgHgLAAgNg");
	this.shape_76.setTransform(-229.9,198.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F3EDC3").s().p("AgHAPQgPAAgIgNQAAgTAXgJQAIgJAIAGQAEAEAHAKIALAKIAAAGQgUANAAASg");
	this.shape_77.setTransform(-234.9,193.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#ECEDB8").s().p("AgYgBQAcgLAUAMIAAAGIgwABg");
	this.shape_78.setTransform(-249.2,192.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#DCDEA0").s().p("AgCgLIAQAQIgbAHg");
	this.shape_79.setTransform(-250.2,199);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E5E3AE").s().p("AAAAPQgOgEgDgMQgDgYAPACQAVADACgBIABAtg");
	this.shape_80.setTransform(-248.7,198);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EEEEBB").s().p("AgWAEQgEgDABgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAvgDIABALg");
	this.shape_81.setTransform(-229.4,193.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#AEC260").s().p("AAHANIgVgBQgQgBABgLIAEgDQALgKAOABIAdAHIABAFIgBAFQgIAIgMAAIgCAAg");
	this.shape_82.setTransform(-229.8,191.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FBD99F").s().p("AgBAcQgOgEgGgLQgGgNARgaQAGgJAJADIASAHIABA7IgZgGg");
	this.shape_83.setTransform(159.8,189.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E9D8B5").s().p("AgCgZQAMAZgMAag");
	this.shape_84.setTransform(180.7,183.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8EA746").s().p("AgGAGQgHgCgDgEIACgDIADgDIAcAMIgPABIgIgBg");
	this.shape_85.setTransform(-94.3,185.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#ACBF6E").s().p("AgGgBQgBgCADgEQACgEACAAQAEAAABAFIACAJIgFAJQgGgKgCgDg");
	this.shape_86.setTransform(-70.6,180.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#AABB59").s().p("AgHAAQAAgBADgDIAEgEIAJAJIgKAIQgGgHAAgCg");
	this.shape_87.setTransform(-78.6,168.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FEFEFE").s().p("AozDKQhOgGg4g9Qgzg2gBhQQgBhNAyg4QA1g9BQgIQBQgJA9AyQAUAQAVAGQASAFAbAAIPWAAQA4AAAZAZQAaAZABA3IAAAwQAAA/gaAZQgZAag/AAInvAAInsgBQgpAAgfAZQg3AthDAAIgSgBg");
	this.shape_88.setTransform(-208,-180.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#8E5F33").s().p("AgDBsIgDjPIAKgJIADDZg");
	this.shape_89.setTransform(155.6,-110.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D14647").s().p("AhwgEIDhAAQg8AJg3AAQg5AAg1gJg");
	this.shape_90.setTransform(158.6,-123.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#DED0B6").s().p("AgDAAIgFgbIAHAAQAJAWABAGQACAQgPALQADgMgCgQg");
	this.shape_91.setTransform(-67.5,-168.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#4E7782").s().p("AgVAAQAKgKALABQAKABANAIQgLAKgLAAQgKAAgMgKg");
	this.shape_92.setTransform(-58,-160.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C6B6A3").s().p("AgOAPQACgQAEgGQAHgLAQAFIgUAdIgJgBg");
	this.shape_93.setTransform(-74.1,-169.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E0D2B7").s().p("AgEAKQgUgDgIgPIAgAGQARACAOgJQACAEgBAEIgbALg");
	this.shape_94.setTransform(-71.3,-164.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#7A4E65").s().p("AgEAoQgMgBgSgMIgCgdQgCgNAHgHQADgDAPgIQAJgIAJACQAIABAMAHQALATABAMQACAPgOANQgNANgMAAIgEgBg");
	this.shape_95.setTransform(-71.1,-167.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#8EBC26").s().p("AgnAIIAAgPIBOgCIAAATg");
	this.shape_96.setTransform(4.2,-197.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#A3C73C").s().p("ABCAMIgoAAIg9AAQgnABgZgEIgHAAIAFgKICBgBQArgUAlAVIgBAKQgOAEgVAAIgGgBg");
	this.shape_97.setTransform(-2.7,-196);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#8DBE25").s().p("AhCAEQADgOAMgDQAEgBATAAIBbABQAKANgOAJQgzAGgLAAIgDAAQgiAAgagLg");
	this.shape_98.setTransform(-6.2,-196.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#8E932F").s().p("AgNANQgBgIAAgFQACgHAHgHIABgIQAPACADANQABAGgCARIgSAHg");
	this.shape_99.setTransform(8.8,-196.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#8B8034").s().p("AgJAWQgJgQAGgRIAIgLIASgDQAGAhgPARIgJABg");
	this.shape_100.setTransform(8.7,-188.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FCC56D").s().p("AAVAdIhOAAQgQAAgIgCQgNgDgJgJIgMgNQgIgFAAgIIANgLQAGgDAJgCQAogCBOABIBIAAIAPAAQAJACAFAFIAAAhQgLANgNACQgbACglAAIgPAAg");
	this.shape_101.setTransform(-2.3,-192.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#DEAE66").s().p("AgPASIgCgjIAMgGIAAAEQAKAGAGAFQAHAIAAAKQgCAHgGAFQgFACgFAAQgHAAgIgGg");
	this.shape_102.setTransform(-14.1,-192);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#DECFB2").s().p("AgFAGQABgbgMgQIARgPQAOAJACAbQACAQgDAWQgBAUgMAJQgDADgEAAQgCgIABgog");
	this.shape_103.setTransform(-16.1,-188.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FDF4D4").s().p("AgQAJQAAgjgBgFQAAgPAKgDQAaARgBAbQgBALgOAkIgJAIQgJgQgBgZg");
	this.shape_104.setTransform(-17,-187.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F5CA7F").s().p("AgMALQABgbgJgRIAagYQAPARAAAYQAAAOgEAbQgNAWgPAKQgCgKABgkg");
	this.shape_105.setTransform(-19.5,-184.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F5C171").s().p("AgOghIAcgfIABBhQgIATgTANg");
	this.shape_106.setTransform(-31.2,-173.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FAEFCA").s().p("Ag8AoQABgWAQgaQArg3AkgaQAbASgDAaQgBAKgOAlIgJAJQgYAJgEATQgNAEgNATQgPAXgJAEQgTgWABgbg");
	this.shape_107.setTransform(-25.3,-179.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#2B7581").s().p("AgUgBQAXgKASAMIgLAFIgFgBIgEABg");
	this.shape_108.setTransform(-57.9,-154.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E0D1BC").s().p("AgOAIQgGgEADgKIAkgEIgSAUIgDABQgIAAgEgDg");
	this.shape_109.setTransform(-54.8,-163.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#59414D").s().p("AgPAKIgHgTIAJgKQAIgCAFAFQADACAHAIQAMAKABAIIgUAJIgDAAQgLAAgEgLg");
	this.shape_110.setTransform(-48.2,-164.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#7B635C").s().p("AgeAEQAFgKAPgGQAMgEANADQAKAEAFAJQADAFgFAGIgcAEg");
	this.shape_111.setTransform(-44.8,-162.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F5C674").s().p("AgTgYQAIgOARAGQAIAEADAIIADAPIglAng");
	this.shape_112.setTransform(-42.7,-158.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D6C3AC").s().p("AgSB0IABjEQgBgSABgIQACgPAPgEIATAOQgTgCgFANQgCAGAAAWIgBDGg");
	this.shape_113.setTransform(12.1,-163.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F8E0C5").s().p("AgPAVIAAgxQALgOASAEQgBANADAZQABAZgMAPg");
	this.shape_114.setTransform(125.7,-127.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D5A25E").s().p("AgIgOQAFgGAGACIAKASQAEAJgEAKIgSABQgPgSAMgQgAADgSIAAAAIABAAIgBAAg");
	this.shape_115.setTransform(8.8,-184.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#4B343C").s().p("AgDAdIgIgBQgEgdALgbIAJAMQANANgGAUQgGAMgGAAIgDAAg");
	this.shape_116.setTransform(-50.1,-168.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F6EEC8").s().p("AgVAMQgCgMAPgJIAIgLIAXAMQgEAbgYABIgGABQgGAAgEgJg");
	this.shape_117.setTransform(-38,-164.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#513A3E").s().p("AgrARIgCgRQAog1AzAqIgDAOQgEAEgHABQgYgCgKADQgTAIgMANQgIgEgCgJg");
	this.shape_118.setTransform(-72.2,-171.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F4E4B0").s().p("AgRAFQACgjgCgNIAVgLQARAWgCAcQgBAPgMAiIgUAKQgGgTADgfg");
	this.shape_119.setTransform(-33.2,-171.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#614A44").s().p("AAnArQgEgFgEgPQgDgOgIgFQgSgNgUAHQgWACgKAAQgEgBgDgEIgFgJQAagtA3AQQAzAPgHA9QgBAMgLADQgGAAgGgFg");
	this.shape_120.setTransform(-44.3,-169.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#816047").s().p("AiyCqQAIgJAMgXQAMgTARgEQAHgYAXgZIALgPIANgOQAQgNAUgLIAJgJQACgHANgLQAQgRAMgPIAVgZQAMgNAMgIQAQgLAQgSIAognQAHgHAJgEQAFgCAIABQALAGgCAJQALAbAAApIgCBFIABBeIgBBhIgEABIgFAAQgPgPAAgVQABgigChMQgChGACgnQABgRgPADIj2D1QgRARgPAFQgJADgJAAQgKAAgKgDg");
	this.shape_121.setTransform(-31.6,-166.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#9CC434").s().p("AgFABIABgSIAIgBQgBAEACAOQACAMgFAHQgGgGgBgMg");
	this.shape_122.setTransform(-232.1,177.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#D5DC92").s().p("AgVAOIgDgSQgDgMAHgHQAYAIAGAEQAPAJABASIAAAHIguABg");
	this.shape_123.setTransform(-229.6,178.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EAE7B5").s().p("AgFAPQgRgDADgUIAMgMQAOACAGAOQAEAGAEATQgCgCgYgEg");
	this.shape_124.setTransform(-248.9,178.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D1D88A").s().p("AgJALIAAgOQABgJAHgFIAIAAQADAPAAADQgBALgJAGg");
	this.shape_125.setTransform(-237.7,178.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#DADD9B").s().p("AgTAOQACgXAFgGQAJgMAWANQADATgMAJIgNAHIgDABQgHAAgGgIg");
	this.shape_126.setTransform(-239.8,178.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FCAA54").s().p("Ag4gIIBxgBQgUASglAAQgkAAgUgRg");
	this.shape_127.setTransform(-205.8,104.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#7E5369").s().p("AAAAFQghgBgFABQAOgKAYABIAnABQgOAIgXAAIgCAAg");
	this.shape_128.setTransform(-201.7,89.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#846B3E").s().p("AgKgMIAKgCIALAMIgVARg");
	this.shape_129.setTransform(-221.6,153.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#7E663C").s().p("AgJABIgBgOIAVARIgLAKQgHgEgCgJg");
	this.shape_130.setTransform(-221.6,157.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#8B6945").s().p("AgLgPIAYAPIAAAEIgZANg");
	this.shape_131.setTransform(-221.4,142);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#F9D69C").s().p("AgWAiIABhEQAJAFAUADQASAFgDAVQgEAjgcAAIgNgBg");
	this.shape_132.setTransform(-217.5,131.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#8E9C2D").s().p("AgIAFQgHgHACgKQADgEAFgCQAPAKADAGQAGAIgQANIgLgOg");
	this.shape_133.setTransform(-190.3,154.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#E5E7A4").s().p("AiMADQAMgKASgBQALAAAVACQANABBfgDQBEgCArALIgBAIIkYAAg");
	this.shape_134.setTransform(-205.9,141.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FCC46C").s().p("AiLAUQAAgUgWAAIADgIQABgLAMAAIAFACQArAFBEgBIBtAAQAKAAATgBQASAAAMAFIAJgBIANAKQgWAAAAAUg");
	this.shape_135.setTransform(-205.7,159.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FAC570").s().p("ACJAaIgiAAQgXAAgMgBQgggIgrAJIiGAAIgGABQgLAAgBgMQAMgKACgFQABgHgRgFIAEgTIARABQAfAEAyAAIBOAAIA8gBQAkgBAXAGIAIgBQAVALgFANQgDAIgOARQgCAFgGABQgBgDABgDg");
	this.shape_136.setTransform(-205.6,150);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#99C22F").s().p("Ah3AjQgIgBgJgDQgJgDgHgJIgLgRIAAgJIALgQQAGgJAJgCQAJgCAHABQA2AFBGAAQAqAABTgDQAHAAAIACQAFAHAKAMQAIAMgDAKQgIAFgBAPQgHAFgJAAIiJABQhJAAgvgBg");
	this.shape_137.setTransform(-206.3,155.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FDCA77").s().p("AikATIAbg1QAEAPAOAEIAbAAIDsAAQAFgBADACQAdAbgmATIiIAAQhUAAgzACIgKABQgRAAgJgQg");
	this.shape_138.setTransform(-206.1,138.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#91BD28").s().p("AARAiIhIAAQguABgdgEQgSgFgFgGQgJgEgDgJIgCgPQAMgXAagCIBugBIBrABQAVAAAHABQAOACAKAJQAeAGgCAPQgBAFgRAXQgGAGgJABIh2gBg");
	this.shape_139.setTransform(-205.9,144.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#9BC433").s().p("AgIANQgMgBgFgNIAAgIQAWgDAEAAQAOACALAKIgGAAIgJAIQgMAFgGAAIgBAAg");
	this.shape_140.setTransform(-238.2,185.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#74991F").s().p("AgGARIACgaQABgNAFgGQAEAYABAEQAAASgLAMg");
	this.shape_141.setTransform(-226.2,178.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#8EA93D").s().p("AgcAHQAGgHATAAQAQAAAHgIIAJgBIAAAHQgKAMgSAAQgTgDgKAAg");
	this.shape_142.setTransform(-248.7,181.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#9FC13C").s().p("AgLAVQgGgHACgJIAEgOIALgMIAMATQAGAKgCALIgQAAQgDADgEAAIgEgBg");
	this.shape_143.setTransform(-246.5,186.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#84AD25").s().p("AgiAOIAAgBIANgMQAGgEANgHIASgLQALgCAHAIIABAJQgHACgCAEIgCALQgPALgOAAQgOAAgPgIg");
	this.shape_144.setTransform(-248.3,190.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#94C02C").s().p("AgUALQgCgCgDgHIALgKIAOgFQAIgDAHACQAMAEgBAKQgFAIgOACQgPACgEAEQgFgBgDgEg");
	this.shape_145.setTransform(-240.3,180.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#82A529").s().p("AAAAcQgFgDgEgFQgLgQAEgLQAEgFAGACIATgTIAFAnIgNATg");
	this.shape_146.setTransform(-227.3,188.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#9EC13B").s().p("AAJATQgZgLgMgUIABABQAjgTAVAdQgDACgDALQgDAIgJAAIgCgBg");
	this.shape_147.setTransform(-228.8,186);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#85AD26").s().p("AgdAZQABgLALgFQAPgGACgDIAGgOQAGgKAEgEIAMAAIACAnQgKARgSABIgBAAIgegEg");
	this.shape_148.setTransform(-238.6,179.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#98C12F").s().p("AgdAFIAJgIQALgOAMACQAJABARAKQAEAEgGAGQgQAKgMAAQgPAAgNgLg");
	this.shape_149.setTransform(-229.6,181.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#9DC436").s().p("AgcAOQAAgLgBgDIACgRQABgKAQAGQAFAFAOAJQAPAHAGAHIABAAQgFASgSgCQgVgCgFAEQgJgDgBgIg");
	this.shape_150.setTransform(-249.8,179.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#97B83A").s().p("AgFAhIgMgUQABgVADgJQAHgRASgCQAGAGABAGQgBAIAAARQAAARgCAKQgGAJgHAAQgDAAgFgEg");
	this.shape_151.setTransform(-242.1,188.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#C0C860").s().p("AACAlIgJgFIgMgEIgFgEQgDgEgDgHQgEgOAGgPQAEgGAFgCQAOAYAGgUQAJgWAIAIIAFAEQALAOgBAQQgCAJgFAJQgGAJgHAGQgFAEgFAAIgBAAg");
	this.shape_152.setTransform(-233.6,188.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F9F2CC").s().p("AgVAdQgCgQgJgEQgFgFAAgEQACgJAEgJIAHgKQAFgEAHAEIAIAAQAEABAGAEIAKAHIAPALQAIAFgBALQgEAFgJACQgMACgDACIgMAJg");
	this.shape_153.setTransform(-243.4,192.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#BCCC59").s().p("AgXAbQgHgKgJABQgCgEACgEIAegoQATgSAfARQgCAKgHAHQgOAIgEAEQgIAHACAMIgEAMQgEAKgKABQgFgCgIgLg");
	this.shape_154.setTransform(-250.7,187.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FEF5D3").s().p("AhZBOQgbgCgHgDQgSgHABgYIABgCQAygfgxglIgCAAQgCgcALgMQAMgMAeACQAvACBEAAIB0gBIgBCKQgOAQgjABIhfACQgyAAgkgCg");
	this.shape_155.setTransform(-205.8,130.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#D19E5C").s().p("AgOACQgDgHAKgHQAegLgLAeIgJAIIgJABIgIgOg");
	this.shape_156.setTransform(-221,161);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#D4A15E").s().p("AgMAGQgLgfAgANIAHASIgbALg");
	this.shape_157.setTransform(-190.4,161);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#AE8456").s().p("AglAEIAAgIIBLAAIAAAIg");
	this.shape_158.setTransform(-195.6,193.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#B18E65").s().p("AgOAAQADgngBgUIALABQAhA6ghA5IgEADQgJgYAAgkg");
	this.shape_159.setTransform(-219.4,185.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#AE8456").s().p("AACA2Qgig5Aig6IACgEQAXBFgYA+g");
	this.shape_160.setTransform(-192.1,186.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#A98258").s().p("AABArQgMgOADgdQACghgKgMIAgABIgEBXQgCADgDAAQgDAAgDgDg");
	this.shape_161.setTransform(-206.1,171.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FCD084").s().p("AiQALQgBgIAFgDQADgDAJgEICFgFQBNAAA5ALQAJAEgEAKg");
	this.shape_162.setTransform(-206.1,161.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#9A7552").s().p("Ag3A+QgXgRAKgUIAjAEQBLACAMgNQAMgNgJhNQAQAdgBAjQgBAWgLAnIgFAIQgaAMgdAAQgZAAgegLg");
	this.shape_163.setTransform(-197.7,174.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#9F7953").s().p("AgyBCQgJgFgGgFIgChAQgDgnAQgZQgJBMALAMQALANBKAAIAegBQANAQgPAPQgZANgfABIgDAAQgUAAgggHg");
	this.shape_164.setTransform(-214.1,174.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F8EECD").s().p("AhDAlQgOgTAShKIB0AAQAXAQgCAgQgCAtACAGQgLALgUACIgZAAIgEABQhDAAgOgUg");
	this.shape_165.setTransform(-213.2,172.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F8EDCD").s().p("Ag3AxQgJgHgEgIQgGgkAAgJQAAgaASgSIB7gBQAJAQgBAZIgCAnQABAPgJAIQgJAHgPABQghACgOAAQgdAAgUgIg");
	this.shape_166.setTransform(-198.7,172.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FEFEFE").s().p("AhNATQgSAAgCgSQgBgTAXAAICUAAQAXAAACASQABATgXAAIhMAAIhNAAg");
	this.shape_167.setTransform(90.2,120.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FEFEFE").s().p("AhhABQgBgTAXAAICYAAQATAAACASQABATgXAAIiTAAQgYAAgCgSg");
	this.shape_168.setTransform(-29.8,120.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FEFEFE").s().p("AhGATQgNAAgGgDQgIgFAAgLQABgSAYAAICPAAQAcAAgCATQAAANgKADQgFACgOAAg");
	this.shape_169.setTransform(-29.8,0.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FEFEFE").s().p("AhFATQgNAAgGgDQgJgEAAgMQABgSAYAAICTAAQAXAAAAASQgBATgYAAg");
	this.shape_170.setTransform(210.2,120.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FEFEFE").s().p("AhhAAQAAgLAJgEQAGgDANAAICOAAQAYAAABASQAAATgXAAIiTAAQgYAAgBgTg");
	this.shape_171.setTransform(-149.8,120.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FEFEFE").s().p("AhJATQgXAAgBgTQAAgRAXgBICTAAQAYAAABASQAAAMgJAEQgGADgNAAg");
	this.shape_172.setTransform(90.2,0.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FEFEFE").s().p("AhIATQgYAAgBgTQAAgSAXAAICTAAQAYAAABASQAAALgJAFQgGADgNAAg");
	this.shape_173.setTransform(210.2,60.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FEFEFE").s().p("AhMATQgTAAgCgRQgBgUAXAAICYAAQATAAACARQABAUgWAAg");
	this.shape_174.setTransform(90.2,60.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FEFEFE").s().p("AhJATQgYgBAAgSQABgSAXAAICTAAQAYABAAARQgBASgXABg");
	this.shape_175.setTransform(-149.8,0.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FEFEFE").s().p("AhGATQgcAAABgTQABgSAYAAICPAAQAcAAgBATQgBASgYAAg");
	this.shape_176.setTransform(210.2,0.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FEFEFE").s().p("AhFATQgOAAgFgDQgJgEAAgMQABgSAYAAICTAAQAXABAAARQgBATgYAAg");
	this.shape_177.setTransform(-29.8,60.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FEFEFE").s().p("AhMATQgTAAgCgRQgBgUAWAAICZAAQATAAACARQABAUgXAAg");
	this.shape_178.setTransform(-149.8,60.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FEFEFE").s().p("AhGATQgcAAABgTQABgSAYAAICPAAQAcAAgBATQgBASgYAAg");
	this.shape_179.setTransform(210.2,-59.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FEFEFE").s().p("AhNATQgSAAgCgSQgBgTAXAAICUAAQAXAAACASQABATgXAAIhMAAIhNAAg");
	this.shape_180.setTransform(-149.8,-59.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FEFEFE").s().p("AhhABQgBgTAXAAICZAAQASAAACASQABATgXAAIiUAAQgXAAgCgSg");
	this.shape_181.setTransform(-29.8,-59.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FEFEFE").s().p("AhGATQgcAAABgTQABgSAZAAICOAAQAcAAgBATQgBASgYAAg");
	this.shape_182.setTransform(90.2,-59.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FEFEFE").s().p("AhGATQgcAAABgTQABgSAYAAICPAAQAcAAgBATQgBASgYAAg");
	this.shape_183.setTransform(-149.8,-119.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#C3BC9E").s().p("AgJAMIAAgRIACgUIAHAAQAAALACALQACAFAGAOQgKAJgBABIgBAAQgGAAgBgOg");
	this.shape_184.setTransform(-21.8,-118.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FADBA8").s().p("AgLgCQACgKAKABQAKABABAKQgBAMgLAAQgOgBADgNg");
	this.shape_185.setTransform(-204.3,0.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FBE0B1").s().p("AgDAPQgDAAgEgFQgEgFAAgDQAAgGAFgFQAFgFAGABQADAAAEAEIAGAFQgFATgNAAIAAAAg");
	this.shape_186.setTransform(-197.9,17.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FBDEAD").s().p("AgHAMQgFgEgCgIQgCgEAFgEIALgGQANgBACANQADAOgNADIgFAAQgDAAgEgDg");
	this.shape_187.setTransform(-231.5,6.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FAD7A0").s().p("AgRACQABgPAQgDQAPgDADARQgBATgRABIAAAAQgRAAAAgQg");
	this.shape_188.setTransform(-214.7,11.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FAD9A5").s().p("AgNAOQgGgFgBgIQgBgIAHgGQAFgCAJgDQANgDAIARQgEAXgRABIgBAAQgHAAgFgGg");
	this.shape_189.setTransform(-206.2,-19);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FAD9A4").s().p("AAAAWQgJgBgGgGQgGgIABgHQABgKAGgGQAHgGAHAAQARACAEAVQgJAWgNAAIAAgBg");
	this.shape_190.setTransform(-231.3,23.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FADAA6").s().p("AgQATQgFgDgBgFQAAgcAXgEQAKgCAGAGQAFAGABAKQABAVgYACIgCAAQgIAAgGgDg");
	this.shape_191.setTransform(-186.3,-8.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FAD59E").s().p("AgBAdQgigDAEgaQAEgeAbACQAOABAIAEQAKAHAAAPQgEAPgGAHQgHAIgOAAIgCAAg");
	this.shape_192.setTransform(-186.2,22.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FAD8A3").s().p("AADAgQgQgBgGgCQgMgFACgQIADgZQAEgOASABQAPABAIAEQAMAIAAARQgCAggZAAIgBAAg");
	this.shape_193.setTransform(-229.9,-22.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#E8D8B8").s().p("AgEADIAEggQAEAVABALQAAANgFAOQgEgMAAgPg");
	this.shape_194.setTransform(0.7,-107.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#E9D9B8").s().p("AgCgBQAAgLAFgOIAAA0QgGgPABgMg");
	this.shape_195.setTransform(0.6,-120.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#E9D9B9").s().p("AgEgBQACgRgBgHQAGAIAAAPQABAVABAHQgKgNABgOg");
	this.shape_196.setTransform(0.8,-134.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#E9D9B8").s().p("AAAAFIghgBQANgJAUABIAiABQgLAIgVAAIgCAAg");
	this.shape_197.setTransform(28.7,-148.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#E9D9B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgLAIgVAAIgCAAg");
	this.shape_198.setTransform(-31.3,-148.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#E4D4B5").s().p("AgiAIQAHgIASAAQAQgBAGgHIAWAIQgNAJgWAAg");
	this.shape_199.setTransform(42.7,-149.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#D6C3AC").s().p("AAAAOQgSAAgLgLIABgRQAHAOAVADQAXAFAHAGIgeAAg");
	this.shape_200.setTransform(14.1,-149.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FADBA8").s().p("AgHAKQgEgEAAgFQgBgKALgCQAKgBADAKQACAFgEAFQgEAEgGAAIAAAAQgEAAgDgCg");
	this.shape_201.setTransform(35.7,-119.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FBE0B1").s().p("AgHALQgGgFgBgGQgBgHAFgDQAEgEAGABQAMABADAXQgFAEgGAAIgBAAQgFAAgFgEg");
	this.shape_202.setTransform(-46.6,-107.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FBE0B1").s().p("AgFAOQgFgBgCgEQgDgEABgFQAFgRAOAEQAMADgCAKQgFAIgDADQgEAEgDAAIgFgBg");
	this.shape_203.setTransform(42,-102.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FBDEAD").s().p("AABAPQgGAAgFgGQgFgFABgGQAAgGAGgDQAFgEAFABQAPABgCANQgCAPgKAAIgCAAg");
	this.shape_204.setTransform(8.4,-113.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#E9D9B8").s().p("Ag1gEIBrAAQgcAJgaAAQgaAAgbgJg");
	this.shape_205.setTransform(-1.3,-148.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FBDEAD").s().p("AgOAFQgCgGAFgGQAEgFAHgCQAFgCAEAFIAGALQABANgNACIgDABQgLAAgDgLg");
	this.shape_206.setTransform(-35.5,-141);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#774F5C").s().p("AgLgNIATAAQAGAEAEAFQAIAJgJAIIgkABQgFgQANgLg");
	this.shape_207.setTransform(9.4,-150.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#EDE1BF").s().p("AgLAlIAChOQAJAGAAAUQAAARAKAGQgCAGAEATQAAAJgJAAQgEAAgKgFg");
	this.shape_208.setTransform(-27.7,-116);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FAD7A0").s().p("AgRACQABgPAQgDQAPgDADARQAAATgSABIAAAAQgRAAAAgQg");
	this.shape_209.setTransform(25.3,-108.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FAD9A5").s().p("AgTABQgCgIAHgGQAEgCAKgEQAIgCAGAFQAGAFABAIQAAAHgGAHIgMAJQgTgDgDgQg");
	this.shape_210.setTransform(33.7,-138.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#AEBD5B").s().p("AgKAYQgHgBgBgGIACgMIACgPQADgJAHgEQAEgBADACIAJAWIAGALQACAHgIAFQgEACgIAAIgKgBg");
	this.shape_211.setTransform(-33.2,-120.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FAD9A4").s().p("AgBAVQgJgBgGgGQgHgHACgHQADgTAUgBQALAFAEAEQAHAGgCAHQgBAJgHAGQgGAEgHAAIgCAAg");
	this.shape_212.setTransform(-52.8,-140.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FAD9A4").s().p("AgOAQQgGgHAAgJQgBgIAHgHQAGgGAIgBQAPAAAHAWQgCAJgGAHQgGAGgIABIAAAAQgIAAgGgHg");
	this.shape_213.setTransform(8.7,-96.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FADAA6").s().p("AgWAAQACgTAXgCQASgCACAXQgDAVgWABQgVAAABgWg");
	this.shape_214.setTransform(53.6,-128.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#E9CB99").s().p("AgTAAIACg/QAGAJACAoQACAfAXANQAKAGgLANQgKANgOACQgJgcgBgkg");
	this.shape_215.setTransform(-20.8,-99.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FAD59E").s().p("AAAAgQgggFAEgeQADgfAYADQAiAEgEAdQgBAQgGAHQgFAHgLAAIgGAAg");
	this.shape_216.setTransform(-51.8,-95.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FAD59E").s().p("AAAAdQgjgCAEgaQAEgeAbABQANAAAIAFQAKAGABAPQgDAPgGAHQgIAJgOAAIgBAAg");
	this.shape_217.setTransform(53.7,-97.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FAD8A3").s().p("AABAfQgPgBgHgFQgKgGAAgPQAAgPACgHQAFgMAQABQASABAFACQAOAEADAQIgIAYQgGANgQAAIgBAAg");
	this.shape_218.setTransform(-6.4,-139.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FAD8A3").s().p("AABAgQgQgBgGgDQgLgGADgQQABgRADgIQAFgNASACQAPACAIAEQAMAHgCAQQgDAhgZAAIgCAAg");
	this.shape_219.setTransform(10.1,-142.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#BDC767").s().p("AABBAQgegCgUgVQgUgVADgbQACgeAUgOQAUgOAjADQgCARADALIABgOQABgIAFgFQAOAAAKAKQAGAEALAQIAHAmQACAXgLARQgTgCgJATg");
	this.shape_220.setTransform(-34.8,-117);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#D0D68E").s().p("AgvArIgCgKQgBgFgGgBQgZgQAOgZIAigdQATgPAQgHQAdADAQAKQAUANADAZQAEAbgBALQgDAWgTAJQgVALgUAAQgdAAgcgXg");
	this.shape_221.setTransform(-15,-119.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#85634A").s().p("Ah5CnQgKgKgCgOQgCgIAAgTIgBkNQAEgNARgCQBCAHB5gFIAHgCQAHgCAJAAQALAAALAJIABAVQgFAVAYAQQgLAJgCAOQgCAHAAAUIABBeQgBA5gCAmQgKAMgNgKIgChwQgBhCABgsQABgbgLgKQgKgJgaACQgeABhngBQgPAAgGAEQgIAFAAAOIgBCHQgBBTAKA2IgQAEg");
	this.shape_222.setTransform(-1.6,-166.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#BCC765").s().p("AAEBbIgcAAQgjgZgMgOQgVgZABgfQADgpAggbQAggbAkAHQAuAIAUAfQAVAfgLArIgEAUQgKATgTAOQgOAKgYALIgDAAQgGAAgEgEg");
	this.shape_223.setTransform(-23.1,-130.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FDF4D3").s().p("AiyCEIABgDQAqgQArgsQBfhgBXhVIAYgYQAQgKATAHQAKBSACAeQAFA9gDAxIAAATQABAKAHAGQAEAFADAEIABAGQgbANgsgIQgzgKgTADQgKAGgYgCQgWgBgLAGQgRgJgVAAQgQAAgXAGQgXAGgNAAQgUgBgQgKg");
	this.shape_224.setTransform(-31.8,-162.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FDF4D3").s().p("ABYB/IgkAAQgLAGgYgCQgVgBgLAGQgngUgqAUIgmgGQgWgEgIgUQgEgIgBgJQgDhNADhpQAAgZAHgJQAJgOAaAKQAuAaAzA1QAdAeA2A7QA5A4A9AaQgEAOgSgBQgVgBgFAFQgOgIgVgBg");
	this.shape_225.setTransform(26.9,-162);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FEF5D4").s().p("AgsCaIg2gCQgTgSgBgfIAAjPQAAgcANgNQANgNAcAAIA8gBQAiAAAYABQAkABANANQAOAOABAjQADCDgEBMQgCAWgUAUIggAAQgbAGgbAAQgZAAgcgGg");
	this.shape_226.setTransform(-2.3,-164.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#6D6B36").s().p("AgSARIAAgaQAFgHAHgCQAQgEAJANIAAAZQgLAEgIAAQgKAAgIgDg");
	this.shape_227.setTransform(-205.8,192.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#AE8F6A").s().p("Ag5AWQgNgRAPgOQA3gaA7AYQAIAIgFAHQgLADgOABQAQABAJAEIAAAKgAgSACQgBAAAAABQgBAAABABQAAAAAAABQABAAABABIAGAAIgGgCQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAIgCABg");
	this.shape_228.setTransform(-198,192.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#B18E65").s().p("Ag+gDQAEgHAJgFQAigHAUAAQAeAAAYANQAMAPgMAQIh3ABQgIgOAGgMg");
	this.shape_229.setTransform(-213.7,192.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#C3BC9E").s().p("AgJAMIAAgRIACgUIAHAAQAAALACALQACAFAGAOQgKAJgBABIgBAAQgGAAgBgOg");
	this.shape_230.setTransform(-81.7,181.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#85AB28").s().p("AgXAMIABgMIANgHQAIgFAFABQAGAAAGAEIAIAIIAAALg");
	this.shape_231.setTransform(-249.3,200.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#C4BC64").s().p("AgGgJQgFgEAAgHQABgGAGgEQAHAAADAIQAEAMACACIgBAWIgQARg");
	this.shape_232.setTransform(-235,197.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#81A626").s().p("AgIASQgJgJAKgJQAHgEAAgKIAAgSQANAMAAASQAAAJgDAWIgIAEg");
	this.shape_233.setTransform(-226.8,197.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#8EB032").s().p("AgPAOQgGgIAHgKQAIgMAEgFQAGgIANAKQAEAPgJATIgKALg");
	this.shape_234.setTransform(-237,199.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#86AB29").s().p("AgeAKIABgGIAKgJQATgQAXALQAGAGABADQADADgEAGIgLAIg");
	this.shape_235.setTransform(-229.6,200.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#8B9D32").s().p("AgHAfQgGgGgDgHQgJgWAQgVIALgCQAMgHAHAKQgMASADATIgIANQgEAFgGAAIgBAAg");
	this.shape_236.setTransform(-245.9,198.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FBD89F").s().p("AgMANQgEgEAAgHQABgVATADQAGABAEAFQADAFAAAFQgDAQgPABIgBAAQgGAAgEgEg");
	this.shape_237.setTransform(-244.9,205.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#E7D7B2").s().p("AgHACIgQgbIgBgBQAPgKAMACQATAEADARQgNAGgFANIgHAdQABgQgIgRg");
	this.shape_238.setTransform(-239.3,203.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#BAD05D").s().p("AgPAXQgKgKABgMQABgFAIgOQAHgLAKgCQAMACAHAMQAJAXgMAUIgGAGg");
	this.shape_239.setTransform(-243.1,197.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#F6DAA1").s().p("AgLAXQgOgDgCgKQgCgKAIgKIABgGQAdgSATAYQgGAHgJAQQgHALgKAAIgHgBg");
	this.shape_240.setTransform(-230.6,203.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#F6F0C6").s().p("AgRgvQAKgHAHAFQAGADAHAKIADAGQADAGgBAHQgCAGgFAFQgXAbAFAfIgJAAg");
	this.shape_241.setTransform(-252.9,194.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#AFCC51").s().p("AggASQgJgLAAgLQACgeAdgKQAbgIAUATQACADgBAEQAJARgJAOQgHAEgNgEQgOgFgEADQgFAFgCAIIgDAPQgBAHgFAFIgFAEg");
	this.shape_242.setTransform(-230.6,197.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#AFCD54").s().p("AgnAaQgQgmAjgaQAVgLAaAHQASAIAAAQQgCAHgGAFQgEADgQADQgMACgFAIIgEANIgGAOIgIAIg");
	this.shape_243.setTransform(-249.8,197);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#F6ECC7").s().p("AAKA2QACgYgLgKQgIgIgDgPIgFgbIgCgNIAAgOIADgOQAFgIADgDQAEgGAGAAIAOAAIAACxQgJgJABgag");
	this.shape_244.setTransform(-225.9,198.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FBDDA6").s().p("AgSgGQASgOATAPQgOAQgFACIgBABQgKAAgHgUg");
	this.shape_245.setTransform(-197.8,197.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FCD594").s().p("AgEA2IAAhsIAIAAIAABsg");
	this.shape_246.setTransform(183.7,175.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#704E5D").s().p("AgigLIAigBQAUABAPAJQgRAPgQAAQgSAAgSgYg");
	this.shape_247.setTransform(178.7,197.9);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FBDBA3").s().p("AgLgdIAOgHQAJgDAFAIQAHAKgGAFQgDADgMAEQgMAEgBARQgCAVgHAFQgEgqAMgZg");
	this.shape_248.setTransform(147.4,181.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FDD997").s().p("AgEhJQAEgGADAGIACBLQACAugMAdg");
	this.shape_249.setTransform(183.8,188.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FBDAA2").s().p("AAAASQgIAAgGgFQgFgFAAgIQAAgPAUgDQATAEAAAOQABAJgHAFQgFAFgJAAIAAgBg");
	this.shape_250.setTransform(149.7,198.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FCCF85").s().p("AgBAtIgBgfQgagfAZgbIASABQgCAPADAdQABAbgNARIgEAAg");
	this.shape_251.setTransform(162.6,191.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#70505E").s().p("AgpgBIACgEIAEgCQAMAAAXACQAUABAOgLQAEgFAEAFQgRAdgWAEIgDAAQgUAAgVgTg");
	this.shape_252.setTransform(158.8,197.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FBD9A0").s().p("AAAAgQgggFAEgeQADgfAYADQAiADgEAeQgBAQgGAHQgFAHgLAAIgGAAg");
	this.shape_253.setTransform(188.2,204.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FCD491").s().p("AgtBmQADgbgBgMIABjAIARgJIBFgBIACAKQgzABgNAOQgNANgBA3IgBC5QgMgOAAgXg");
	this.shape_254.setTransform(178.6,182.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FCDB9E").s().p("AgxBcIABiCQAAgTgBgEQgEgMgQgDIABgGIAQgDQAKgCAEgJQAUAMAgAAIA3gBQACADgBAGQhJABgNANQgMAMAABKIgBBFQgFAEgFAAQgFAAgFgFg");
	this.shape_255.setTransform(167.2,177.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FDD998").s().p("AgBB7QgBgEAAgUIgChPQAAgtADghQABgmgMgPQgOgQgmAFQgBgEACgEIAkAAQAWABALgJIA7ALIAAAGQgcgDgMALQgMALABAeQACAsAAA9IgBBqQgPgDgBgNg");
	this.shape_256.setTransform(153.6,181.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FDF4D2").s().p("AghCBIAAgGQgLgUAAgeQADgjgBgRIAAg3QAAgkgBgUQgCggANgMQAOgMAbAFQAkgFAAAmIAAB4QgBAJgCAGQgeAUAAAJQAAAIAfAiQABAHgBAJIgGAPQgQAOgSAAQgQAAgUgOg");
	this.shape_257.setTransform(158.6,183.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FDF3D1").s().p("AgFCOQgUgBgOgJQgHg0AChHIAFh6QACgfAeADIAXAAQAOgBAKAGIgBAAQAGAVAAAiIgBA4IAABJQABAugGAdIgJASIgdABIgGAAg");
	this.shape_258.setTransform(179.2,183.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FAD9A5").s().p("AgLgCQACgKAKABQAKABABAKQgBAMgLAAQgOgBADgNg");
	this.shape_259.setTransform(275.7,180.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FBE0B1").s().p("AgJALQgEgEgBgEQgBgEAEgFQADgFAHgCQALgEAFAPQgEARgMAAQgDAAgFgEg");
	this.shape_260.setTransform(282,197.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FBDEAD").s().p("AABAPQgGAAgFgGQgFgGABgFQAAgGAGgDQAFgEAFABQAPABgCANQgCAPgKAAIgCAAg");
	this.shape_261.setTransform(248.4,186.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FAD7A0").s().p("AgRACQABgOAQgFQASgBAAASQABARgSABIgBAAQgRAAAAgQg");
	this.shape_262.setTransform(265.2,191.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FAD9A5").s().p("AgBAUQgIgBgFgGQgGgGAAgHQABgIAIgEIALgHQAYADgEAQQgBAJgGAGQgGAFgHAAIgBAAg");
	this.shape_263.setTransform(273.7,160.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FAD9A4").s().p("AAAAWQgJgBgGgHQgGgHABgHQABgKAGgGQAHgHAHACQASACADAUQgFALgEAFQgGAGgGAAIgBgBg");
	this.shape_264.setTransform(248.7,203.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FADAA6").s().p("AgWADQAAgKAIgGQAEgEALgEQAWgBAAAVQABAVgYACIgDAAQgTAAAAgTg");
	this.shape_265.setTransform(293.6,171.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FAD59E").s().p("AgVAYQgLgGABgPQACghAdACQAPABAHAEQAKAFAAANQAAAhgaACQgSgBgJgFg");
	this.shape_266.setTransform(293.7,202.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FAD8A3").s().p("AgBAgQgPgDgGgEQgLgGAEgQQACgQADgIQAGgMASADQAPADAHAFQALAJgDAPQgCAPgHAHQgHAIgOAAIgBAAg");
	this.shape_267.setTransform(250.1,157.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#E8D8B8").s().p("AgCgcQAFATAAANQgBALgEAOg");
	this.shape_268.setTransform(-59.2,192.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#E9D9B8").s().p("AgDgCQgBgNAEgNQAFALAAAPIgFAfQgDgUAAgLg");
	this.shape_269.setTransform(-59.3,179.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#E9D9B9").s().p("AgEABQAAgKAEgSQAJAegJAZQgEgNAAgOg");
	this.shape_270.setTransform(-59.3,165.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FADBA8").s().p("AgHAKQgEgEAAgFQgBgKALgCQAKgBADAKQACAFgEAFQgEAEgGAAIAAAAQgEAAgDgCg");
	this.shape_271.setTransform(-24.3,180.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FBE0B1").s().p("AAAAOQgQgFADgOQACgKALABQAPAFAAAJQAAAIgEAEQgDADgEAAIgEgBg");
	this.shape_272.setTransform(-106.6,192.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FBE0B1").s().p("AgDAPQgDAAgEgFQgEgFAAgDQAAgGAFgFQAFgFAGABQADAAAEAEIAGAFQgFATgNAAIAAAAg");
	this.shape_273.setTransform(-17.9,197.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FBDEAD").s().p("AgHAMQgFgEgCgIQgCgFAFgEIAJgFQAPgCACANQADAOgNAEIgFAAQgDAAgEgDg");
	this.shape_274.setTransform(-51.5,186.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FBDEAD").s().p("AAAAPQgNgCgCgNIAIgIQAFgFACgBQAJgBAEAGQAEAGgBAGQgBAGgEAEQgEACgFAAIgCAAg");
	this.shape_275.setTransform(-95.6,158.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#EDE1BF").s().p("AgLAlIAChOQAJAGAAAUQAAARAKAGQgCAGAEATQAAAJgJAAQgEAAgKgFg");
	this.shape_276.setTransform(-87.7,183.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FAD7A0").s().p("AgQAAQACgRAQAAQARAAgBASQAAARgSAAQgTgCADgQg");
	this.shape_277.setTransform(-34.8,191.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FAD9A5").s().p("AAAAUQgIgBgGgGQgFgFgBgIQAAgPAWgDQARgCACAUQgHAUgOAAIAAAAg");
	this.shape_278.setTransform(-26.3,161);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#AEBD5B").s().p("AgKAYQgHgBgBgGIACgMIACgPQADgJAHgEQAEgBADACIAJAWIAGALQACAHgIAFQgEACgIAAIgKgBg");
	this.shape_279.setTransform(-93.1,179.1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FAD9A4").s().p("AAAAWQgJgBgGgGQgGgIABgHQABgKAGgGQAHgGAHAAQARACAEAVQgJAWgNAAIAAgBg");
	this.shape_280.setTransform(-51.3,203.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FAD9A4").s().p("AAAAVQgKgBgGgGQgHgHABgHQAAgIAHgGQAHgHAIABQAIABAHAGIAIANQgJAVgOAAIAAAAg");
	this.shape_281.setTransform(-112.7,159.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FADAA6").s().p("AgWADQAAgTAXgFQAQgDAGAUQAAAYgXACIgEAAQgSAAAAgTg");
	this.shape_282.setTransform(-6.4,171.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#E9CB99").s().p("AgTAAIACg/QAGAJACAoQACAfAXANQAKAGgLANQgKANgOACQgJgcgBgkg");
	this.shape_283.setTransform(-80.7,200.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FAD69F").s().p("AACAeQgigBACgdQABgPADgFQAFgLAOACIAXACQAOADABARIgGAZQgFAMgQAAIgCAAg");
	this.shape_284.setTransform(-66.5,160.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FAD59E").s().p("AADAgQghgBACgfQACgfAVAAQAOAAAJAGQALAHABANQgBASgFAJQgFAKgOAAIgCAAg");
	this.shape_285.setTransform(-111.8,204.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FAD59E").s().p("AAAAdQgigCADgaQAEgeAbABQAPAAAHAFQALAGgBAPQgCAfgcAAIgCAAg");
	this.shape_286.setTransform(-6.3,202.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FAD8A3").s().p("AADAgQgQgBgGgCQgMgFACgQIADgZQAEgOASABQAPABAIADQANAFgBAMQgBAUgFAKQgHALgOAAIgBAAg");
	this.shape_287.setTransform(-49.9,157.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#BDC767").s().p("AABBAQgegCgUgVQgUgVADgbQACgeAUgOQAUgOAjADQgCARADALIABgOQABgIAFgFQAOAAAKAKQAGAEALAQIAHAmQACAXgLARQgTgCgJATg");
	this.shape_288.setTransform(-94.8,183);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#D0D68E").s().p("AgvArIgCgKQgBgFgGgBQgZgQAOgZIAigdQATgPAQgHQAdADAQAKQAUANADAZQAEAbgBALQgDAWgTAJQgVALgUAAQgdAAgcgXg");
	this.shape_289.setTransform(-74.9,180.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#BCC765").s().p("AAEBbIgcAAQgjgZgMgOQgVgZABgfQADgpAggbQAggbAkAHQAuAIAUAfQAVAfgLArIgEAUQgKATgTAOQgOAKgYALIgDAAQgGAAgEgEg");
	this.shape_290.setTransform(-83.1,169.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#E9D9B4").s().p("AgDAcIAAg3IAIAAIAAA3g");
	this.shape_291.setTransform(-179.3,-152.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#E8D8B8").s().p("AgVACIAAgDIArAAIgBADg");
	this.shape_292.setTransform(-197.2,-148.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#E9D9B8").s().p("AgVACIAAgDIArAAIgBADg");
	this.shape_293.setTransform(-211.2,-148.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#E9D9B9").s().p("AAAACQgJAAgOgEIAvAAQgLAFgLAAIgCgBg");
	this.shape_294.setTransform(-225,-148.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FCDEA6").s().p("AgLADQgDgNAOgBQALAAABALQAAALgLABIgBAAQgJAAgCgJg");
	this.shape_295.setTransform(-291.3,-173.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FADBA8").s().p("AgLACQgBgFADgEQAEgEAFAAQAFgBAEAEQADADAAAFQAAALgLABQgKAAgCgKg");
	this.shape_296.setTransform(-204.3,-119.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#F6D79F").s().p("AAAgMQANgFALAfIgvAAQAPgXAIgDg");
	this.shape_297.setTransform(-146.2,-199.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FBDEAD").s().p("AAAAOQgDgBgEgEIgIgIQACgOANgBQAHgBAEAEQAFADAAAHQAAAQgMAAIgEgBg");
	this.shape_298.setTransform(-231.5,-113.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FBE0B1").s().p("AAAAPQgGAAgEgEQgEgFAAgGQACgNAMgCQARACgDANQgDAQgLAAIAAgBg");
	this.shape_299.setTransform(-197.9,-102.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FAD7A0").s().p("AAAARQgUAAADgRQADgRAPAAQARAAAAARQgBASgRAAIAAgBg");
	this.shape_300.setTransform(-214.7,-108.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FAD9A5").s().p("AAAAUQgIgBgGgGQgFgFgBgIQAAgPAWgDQARgCACAUQgHAUgOAAIAAAAg");
	this.shape_301.setTransform(-206.2,-139);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FCDAA1").s().p("AgBAUQgJgBgFgEQgGgGABgIQAAgHAGgHQAHgHAHAAQAIAAAGAHQAFAHACAIQgEATgRAAIgBgBg");
	this.shape_302.setTransform(-171.3,-156.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FCDAA1").s().p("AgLASQgHgFgCgJQgBgHAGgHQAEgEAKgGQASACAEASQABAIgFAGQgFAFgIABIgEABQgGAAgFgDg");
	this.shape_303.setTransform(-231.3,-156.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FCDAA1").s().p("AgEAUQgIgCgFgGQgFgFACgHQAHgXAPAEQATAFAAATQgHAQgNAAIgFgBg");
	this.shape_304.setTransform(-291.3,-156.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FAD9A4").s().p("AAAAWQgJAAgGgHQgGgHABgIQAAgJAHgGQAGgHAHAAQAJABAGAHQAFAGACAIQgHAXgPAAIAAgBg");
	this.shape_305.setTransform(-231.3,-96.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FADAA6").s().p("AgWADQAAgKAIgGQAEgEALgEQAVgBABAVQABAVgYACIgDAAQgTAAAAgTg");
	this.shape_306.setTransform(-186.3,-128.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#F9DBA3").s().p("AgTAEQgIgJAAgKIAHgBIAHAAIAZgGQAOAAACATQACAPgMAGQgIAEgRABIgMgTg");
	this.shape_307.setTransform(-126.9,-188.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FAD89F").s().p("AgKAfQgLgHgRgVIA7glQAPAUACAMQAEARgSAMQgLAIgKAAQgGAAgHgEg");
	this.shape_308.setTransform(-246.8,-157.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FCDAA2").s().p("AgBAdQgQgBgHgGQgJgHACgPQAFgeAaACQAPAAAHAFQAKAGABAQQgEAPgHAHQgHAIgOAAIgCAAg");
	this.shape_309.setTransform(-186.3,-157.3);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FCDAA2").s().p("AgDAdQgfgDADgYQADghAeADQAiADgEAZQgFAegaAAIgEgBg");
	this.shape_310.setTransform(-126.3,-157.3);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FCD89D").s().p("AABAgQgPgBgGgDQgMgGADgQIAEgYQAFgNARAAIAXAJQAMAHgBAPQgEAggXAAIgDAAg");
	this.shape_311.setTransform(-229.9,-202.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FADAA6").s().p("AAAAeQgRgBgGgDQgLgGACgQQAGghAaAAQAQACAIAEQAKAHgBAPQgDAfgdAAIgBAAg");
	this.shape_312.setTransform(-186.3,-97.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FCD89D").s().p("AgCAfQgQgCgFgEQgJgGADgOQABgRADgHQAFgOASACQAQADAHAEQAMAIgCAPQgDAhgZAAIgFgBg");
	this.shape_313.setTransform(-169.9,-202.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FAD8A3").s().p("AgCAfQgPgCgFgDQgKgGADgPQABgQADgIQAFgOASACQAPACAIAEQAMAHgCAOQgDAkgZAAIgFgBg");
	this.shape_314.setTransform(-229.9,-142.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FCD89D").s().p("AgVAaQgLgGADgQQACgQADgIQAFgNASACQAPADAHAFQALAIgBAQQgCAPgHAHQgIAJgOAAQgPgDgGgDg");
	this.shape_315.setTransform(-289.9,-202.6);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#F5D69E").s().p("AoWAIIFAgBIApAAQAXgDANgQQAFgFAHgBQAHgCAEAFQATAXAhACQATAAAngEIDgABIDjAAQAbgSAWARQAGACAOgBQAMABAGAIIp3ACQjWABisgBIgaACQgQAAgJgMg");
	this.shape_316.setTransform(-193.4,-199);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#DBBA86").s().p("ArUCOQCUAwBqhYQALgJARgBIAdAAIPHAAQBPAAAhghQAhghABhNQAAgwgBgTQgEglgNgcQAHABAGAGIAIAMQAFAGAMAKQAJALgGANIABBBQAAAngBAYQgCA0gkAfQgjAdg3gBQlNgEjjAFQhSACh9gBIjRgDIghAAQgSABgMAJQgNAngwAAQgxAVguAAQhBAAg7gqg");
	this.shape_317.setTransform(-200.1,-173.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#1A2B1C").s().p("AqMDQQhdg9gehRQgehPAnhVQAuhlBngeQBmgdBcA+IAdATIDGAFQBxAABUgJQAKgBARAEQASAFAIAAIEDAAQCbAABogCQBCgCAkAIQAXAEAVAPQARALATAWQAjAyAAA9QABAwgYA+QgYBCheAAIu4gBQghAAgZAGQgdAHgZASQg6Ang/AAQg4AAg7gfg");
	this.shape_318.setTransform(-207.3,-180.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#E2796F").s().p("AgHAQQgEgGAEgGIgBgSQAHgIAGAIIAFAVIgLAMg");
	this.shape_319.setTransform(183.9,168.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#E3776C").s().p("AgFAPIgBABQgFgDABgDQABgBAAgBQABAAAAgBQAAAAABgBQAAAAAAAAIgBgSQAFgFAEAAIAKAFIgBASQgDAIgDACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAgEgDg");
	this.shape_320.setTransform(174.9,168);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#EAD9B6").s().p("AgFghQAWAhgVAig");
	this.shape_321.setTransform(0.8,187.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#E9D9B8").s().p("AgDAAIADgZQAEAKAAAOIgCAbQgFgNAAgNg");
	this.shape_322.setTransform(60.7,179.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#E9D9B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_323.setTransform(240.7,179.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#E9D8B5").s().p("AgCgZQAGANgBANQgBAHgEASg");
	this.shape_324.setTransform(120.7,183.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#E9D9B6").s().p("AgEghQAVAhgVAig");
	this.shape_325.setTransform(0.8,201.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#E8D8B8").s().p("AgEgCQAAgOAEgNQAFANAAAOQgBAJgEAXQgDgWgBgKg");
	this.shape_326.setTransform(60.7,193.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#E8D8B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_327.setTransform(240.7,193.2);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#E9D8B6").s().p("AgEADIAEgfQAEAUABALQAAANgFANQgEgLAAgPg");
	this.shape_328.setTransform(120.7,197.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#E9D9B6").s().p("AgEgCQAAgOAEgNQAFANAAAOQgBAIgEAYQgDgWgBgKg");
	this.shape_329.setTransform(120.7,156.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#E9D9B6").s().p("AgEADQABgLADgVQAFAbAAAGQAAAPgFALQgEgNAAgOg");
	this.shape_330.setTransform(180.7,155.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#E9D9B9").s().p("AgEABQAAgKAEgSQAJAegJAZQgEgNAAgOg");
	this.shape_331.setTransform(60.7,165.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#E9D9B9").s().p("AgEAAQgBgVAKgMIAAAhQABAWgJAMIgBgig");
	this.shape_332.setTransform(240.7,165.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#E9D8B5").s().p("AgEgDQAAgOAEgMQAFANAAAOQgBALgEAVQgEgbAAgGg");
	this.shape_333.setTransform(120.7,170.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#EBDBB9").s().p("AgEgmQAVAmgVAng");
	this.shape_334.setTransform(0.8,158.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#EBDBB9").s().p("AgEgmQAVAmgVAng");
	this.shape_335.setTransform(0.8,172.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FBDCA4").s().p("AgLACQgCgNAOAAQALAAAAALQAAALgLABQgKgBgCgJg");
	this.shape_336.setTransform(210.7,186.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FADBA8").s().p("AgLACQgBgFADgEQAEgEAFAAQAFgBAEAEQADADAAAFQAAAKgLACQgKAAgCgKg");
	this.shape_337.setTransform(95.7,180.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FBDCA5").s().p("AAAAMQgLAAAAgMQAAgJALgCQAMACAAAJQAAAMgMAAIAAAAg");
	this.shape_338.setTransform(141.7,162.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FADEAE").s().p("AgGAOQgDgCgDgFQgCgFABgCQABgHAGgEQAGgEAGADQALAEgDAJIgJALQgDADgDAAIgFgBg");
	this.shape_339.setTransform(102.1,197.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FBDFAA").s().p("AgJAMQgFgDAAgGQAAgGAEgFQAFgGAHAAQALAAACAOQAAAPgOAAIgBAAQgFAAgEgDg");
	this.shape_340.setTransform(204.5,158.9);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FBDEAD").s().p("AgHAMQgFgEgCgIQgCgEAFgEIALgGQANgBACANQADAOgNADIgFAAQgDAAgEgDg");
	this.shape_341.setTransform(68.4,186.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FBD89F").s().p("AgQAAQAAgMAPgEQAPAAADAQQACAPgPACIgDAAQgQAAgBgRg");
	this.shape_342.setTransform(175.3,155.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#AAC048").s().p("AABANIgjgGIACgUIBCABIABAMQgMAOgUAAIgCgBg");
	this.shape_343.setTransform(150.7,168);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#ADBF49").s().p("AggAHQgKgKAIgNIBDAAQALAJgJANQgRALgSAAQgPAAgRgKg");
	this.shape_344.setTransform(179.6,168.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#A6C046").s().p("AgXAMQgWgJARgNIA/gBIABAXg");
	this.shape_345.setTransform(187.4,167.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FBDCA4").s().p("AAAASQgRgBAAgRQACgUAPADQARADABAPQAAARgSAAIAAAAg");
	this.shape_346.setTransform(199.1,175.8);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FAD7A0").s().p("AAAASQgTAAADgSQACgOAQgDQARABgBARQgBARgRAAIAAAAg");
	this.shape_347.setTransform(85.2,191.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FAD9A5").s().p("AAAAUQgIgBgFgGQgGgGAAgHQgBgIAIgFIAOgGQAJABAFAFQAFAFgBAIQgBAHgFAHQgGAGgIAAIAAAAg");
	this.shape_348.setTransform(93.7,161);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FBDAA2").s().p("AAAAVQgHgBgGgGQgGgHAAgHQABgNASgHQARADACAUQABAJgGAFQgEAEgGAAIgEAAg");
	this.shape_349.setTransform(229.9,184.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#ACC147").s().p("AgOARQgSgDgLgOQgFgHAGgHIArgCQAaAAASAKIABACQABALgKAFIgTAFIgQAAIgQAAg");
	this.shape_350.setTransform(158.5,168.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FBDAA1").s().p("AgNARQgFgFgBgJQgEgRAVgGQAIABAHAGQAGAFABAIQABAIgHAGQgGAGgIABIgCAAQgGAAgFgEg");
	this.shape_351.setTransform(187.4,159.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FAD9A4").s().p("AgNARQgGgHgBgJQgBgNAVgKQAUAFABARQABAJgGAGQgGAHgJABIgBAAQgHAAgGgGg");
	this.shape_352.setTransform(68.6,203.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FBDAA2").s().p("AAAAXQgMgBgEgIQgDgGABgLQABgVATACQARACAAAVQgBAWgSAAIAAAAg");
	this.shape_353.setTransform(130.2,188.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FADAA6").s().p("AgWADQAAgKAIgGQAEgEALgEQAWgBAAAVQAAAVgXACIgDAAQgTAAAAgTg");
	this.shape_354.setTransform(113.6,171.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#A9CA49").s().p("Ag1ADIgDgGQAVgLAhACQAtACAIgBQALAJgJALQgkAEgRAAIgCAAQgdAAgWgKg");
	this.shape_355.setTransform(168.8,167.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FBDBA3").s().p("AAAAXQgUgCgBgXQAAgUAVAAQAUACACAWQABALgHAFQgFAFgJAAIgCAAg");
	this.shape_356.setTransform(219.5,204.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FAD59E").s().p("AAAAdQgegBgBgZQAEgPAGgIQAJgKAOACQAiADgEAZQgFAdgZAAIgCAAg");
	this.shape_357.setTransform(113.6,202.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FBD79C").s().p("AgUAXQgNgHAEgQQAEgSADgFQAGgLAQAEQAQAFAFADQALAHgBAPQgBAPgFAHQgHAKgQAAQgPgFgHgEg");
	this.shape_358.setTransform(130,176.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FBD89E").s().p("AgBAeQghgEAEgaQABgQAEgGQAGgLAQAEIAZAFQAMAGgDASQgDAPgFAHQgHAJgNAAIgEgBg");
	this.shape_359.setTransform(233.5,160.6);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FAD8A3").s().p("AgDAgQgQgDgGgGQgIgIAEgPQADgPAEgHQAFgKAOABQATAGAFAEQALAIgBAPQgEAegZAAIgFAAg");
	this.shape_360.setTransform(70.1,157.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#84634B").s().p("AgJAZQgLhzgNhWQgIgLAGgNIADgTQADgLANADQALACACALIABAUIAoGdQgQgHgPARIgQjMg");
	this.shape_361.setTransform(194.6,186.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FCE5B6").s().p("Ai8EDQgtAAgRgSQgSgTAAgtIAAlhQAAgvASgRQATgSAwgBIC3AAIC9ABQAsAAASASQASARAAAqQABC1gBC2QAAAqgSASQgTARgrAAIjbABIiegBg");
	this.shape_362.setTransform(30.2,180.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#9FC149").s().p("AgLAWIATgrQAGAJgDAMQgEAQAEAGg");
	this.shape_363.setTransform(162.2,-101.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#E8D8B8").s().p("AgDABQAAgKADgTQAJAcgIAdQgEgOAAgOg");
	this.shape_364.setTransform(240.6,-106.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#E8D8B8").s().p("AgBgWIADADIAAApIgDAAg");
	this.shape_365.setTransform(180.8,-106.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#E9D8B6").s().p("AgUgDIApAAQgMAGgJAAQgLAAgJgGg");
	this.shape_366.setTransform(282.8,-88.7);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#EAD9B6").s().p("AgUgDIApAAQgMAGgJAAQgLAAgJgGg");
	this.shape_367.setTransform(268.8,-88.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#EAD9B7").s().p("AgbAAQAegIAZAIQgNAFgOAAQgKAAgSgFg");
	this.shape_368.setTransform(254.6,-88.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#E8D8B8").s().p("AgVACIAAgDIArAAIgBADg");
	this.shape_369.setTransform(282.7,-28.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#E9D9B8").s().p("AgcAAQAPgEANAAQALAAASAEQgQAEgNAAIgBABQgMAAgPgFg");
	this.shape_370.setTransform(268.7,-28.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#E9D9B9").s().p("AgagCIA1AAQgRAFgMAAQgOAAgKgFg");
	this.shape_371.setTransform(255.4,-28.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#E9D9B8").s().p("AgBAVIAAgqIADAAIAAArg");
	this.shape_372.setTransform(240.6,-120.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#E9D9B8").s().p("AgDAAQAAgJADgTQAJAcgIAdQgEgPAAgOg");
	this.shape_373.setTransform(180.6,-120.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#E9D9B9").s().p("AADgbIAAA2QgMghAMgVg");
	this.shape_374.setTransform(240.7,-134);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#E9D9B9").s().p("AgCgaQALAggLAVg");
	this.shape_375.setTransform(180.8,-135.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FADBA8").s().p("AgHAKQgEgEAAgFQAAgKAKgCQAKgBADAKQACAFgEAFQgDAEgHAAIAAAAQgEAAgDgCg");
	this.shape_376.setTransform(150.7,-113.8);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FADBA8").s().p("AgBAMQgKgBAAgLQAAgJALgDQAMADAAAJQAAANgMAAIgBgBg");
	this.shape_377.setTransform(275.7,-119.8);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FADBA8").s().p("AgCALQgLgDACgJQACgKAKAAQAMABgBAKQgBAHgEADQgDACgDAAIgDgBg");
	this.shape_378.setTransform(215.7,-119.8);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#F7CDA1").s().p("AgSANQAAgmAkATQgJATgYAAIgDAAg");
	this.shape_379.setTransform(139,-124.7);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FADBA8").s().p("AgLgBQABgKAKAAQAKAAADALQgDAMgJAAIgBAAQgMAAABgNg");
	this.shape_380.setTransform(275.7,0.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FBE0B1").s().p("AgCAMIgPgLIAAgIQAOgGADgBQAIgBAHAKQAHAHgIAIQgFAFgFAAQgEAAgCgDg");
	this.shape_381.setTransform(133.1,-107.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FBE0B1").s().p("AgDAPQgDAAgEgFQgEgFAAgDQAAgGAFgFQAFgFAGABQADAAAEAEIAGAFQgFATgNAAIAAAAg");
	this.shape_382.setTransform(282.1,17.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FBE0B1").s().p("AgFAOQgFgBgCgEQgDgEABgFQAFgRAOAEQAMADgDAKQgEAIgDADQgEAEgDAAIgFgBg");
	this.shape_383.setTransform(282,-102.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FBE0B1").s().p("AgGAOQgDgCgDgFQgCgFABgCQABgIAGgDQAGgEAGADQALAEgDAJIgJALQgDADgDAAIgFgBg");
	this.shape_384.setTransform(222.1,-102.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FBDEAD").s().p("AABAPQgGAAgFgGQgFgFABgGQAAgGAGgDQAFgEAFABQAPABgCANQgCAPgKAAIgCAAg");
	this.shape_385.setTransform(248.4,-113.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FBDEAD").s().p("AABAPQgGAAgFgGQgFgFABgGQAAgGAGgDQAFgEAFABQAPABgCANQgCAPgKAAIgCAAg");
	this.shape_386.setTransform(188.4,-113.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FBDEAD").s().p("AAAAPQgQgCACgMQAAgGAGgFQAFgFAGABQAGAAADAGQAEAFgBAFQgBANgNAAIgBAAg");
	this.shape_387.setTransform(144.5,-141);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FBDEAD").s().p("AgHAMQgFgEgCgIQgCgEAFgEIALgGQANgBACANQADAOgNADIgFAAQgDAAgEgDg");
	this.shape_388.setTransform(248.4,6.4);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FAD7A0").s().p("AgQAAQACgRAQAAQARAAgBASQAAARgSAAQgTgCADgQg");
	this.shape_389.setTransform(205.2,-108.2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FAD7A0").s().p("AgRACQABgOAQgFQASgBAAASQABARgSABIgBAAQgRAAAAgQg");
	this.shape_390.setTransform(265.2,-108.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FAD7A0").s().p("AAAARQgTgBADgQQACgRAQAAQARAAgBASQgBARgRAAIAAgBg");
	this.shape_391.setTransform(265.2,11.8);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FAD9A5").s().p("AgBATQgIAAgFgHQgGgGAAgGQAAgQAWgCQAQgCADAUQgFAKgEAEQgFAFgHAAIgBAAg");
	this.shape_392.setTransform(213.8,-139);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FAD9A5").s().p("AgTAAQgCgOAWgFQAIgBAGAFQAGAFAAAJQgBAPgUAGQgSgGgBgOg");
	this.shape_393.setTransform(273.7,-138.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#CD6E62").s().p("AgWgDIAWgKQAPgIAHAGQAFAGgCAPIgmANQgRgQAIgGg");
	this.shape_394.setTransform(146.5,-100.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FAD9A5").s().p("AABAVQgIgBgGgGQgGgHABgHQAAgNASgHQARADACAUQABAJgGAFQgEAEgGAAIgDAAg");
	this.shape_395.setTransform(169.9,-115.8);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FAD9A5").s().p("AgCATQgIgBgFgGQgFgGAAgGQABgRAWgBQARgBABATIgJAOQgGAFgGAAIgCAAg");
	this.shape_396.setTransform(273.8,-19);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FAD9A4").s().p("AgNARQgGgGgBgKQgCgHAHgHQAGgHAJgBQAGgCAHAHQAEAFAFALQgBAIgGAGQgFAHgJABIgBABQgIAAgFgGg");
	this.shape_397.setTransform(248.7,23.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FAD9A4").s().p("AgUAAQABgJAGgGQAGgHAHAAQAJABAGAHQAHAHgBAHQgBASgUAFQgVgIABgPg");
	this.shape_398.setTransform(188.7,-96.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FAD9A4").s().p("AgUABQgBgIAGgHQAGgHAJgBQAHgBAHAHQAGAGABAJQACAMgWAMQgSgCgDgUg");
	this.shape_399.setTransform(248.7,-96.2);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#F0AD66").s().p("AgZARIgVgSIARgKQAMgJAMAJQAHAFAUAGQARAGAIALg");
	this.shape_400.setTransform(163.9,-98);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#E16A6A").s().p("AgIBeIAAjDIAIgCQAJAwAAA3QgBAqgHA+g");
	this.shape_401.setTransform(154.9,-109.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FADAA6").s().p("AgWAAQACgTAXgCQALAAAFAGQAFAGgBAJQgBAVgYABQgVAAABgWg");
	this.shape_402.setTransform(293.6,-8.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FADAA6").s().p("AgWADQAAgTAXgFQATgDADAWQAAAWgXACIgEAAQgRAAgBgTg");
	this.shape_403.setTransform(233.6,-128.6);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FADAA6").s().p("AgWADQAAgTAXgFQATgDADAWQAAAWgXACIgEAAQgSAAAAgTg");
	this.shape_404.setTransform(293.6,-128.6);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#E16A6A").s().p("AABBsQgNgxABg7QAAgrAKhBIANABIgFDYg");
	this.shape_405.setTransform(156.2,-110.3);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#E16A6A").s().p("AguAvQgHgGADgJIAFgQQAUgSAagRQAQgLAjgTIhCBaIgQAHQgEACgEAAQgEAAgEgDg");
	this.shape_406.setTransform(148.8,-128.4);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FAD59E").s().p("AgDAdQgfgDADgYQAEghAdADQAiADgEAZQgFAegaAAIgEgBg");
	this.shape_407.setTransform(293.7,-97.3);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FAD59E").s().p("AgDAdQghgDAFgaQAGgfAaADQAgACAAAYQgEAQgIAIQgIAIgMAAIgEgBg");
	this.shape_408.setTransform(233.7,-97.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FAD59E").s().p("AgDAdQghgEAFgZQAHgfAZADQAgACAAAYQgEAQgIAIQgIAIgMAAIgEgBg");
	this.shape_409.setTransform(293.7,22.7);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FAD8A3").s().p("AABAgQgPgBgGgDQgMgGADgQIAEgYQAFgNARAAIAXAJQAMAHgBAPQgEAggXAAIgDAAg");
	this.shape_410.setTransform(190.1,-142.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FAD8A3").s().p("AAAAgQgQgCgFgDQgLgGADgQQABgRADgHQAFgOASADQAQACAHAFQAMAHgCAQQgDAggYAAIgEAAg");
	this.shape_411.setTransform(250.1,-142.6);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FAD8A3").s().p("AACAfQglgDAFgeQACgPADgFQAGgKAPADIAYAEQAOAFgCASQgCAPgFAIQgGAKgMAAIgFAAg");
	this.shape_412.setTransform(173.5,-139.4);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FAD8A3").s().p("AAAAgQgPgDgGgDQgLgGADgQQACgQADgIQAFgNASADQAPADAIAFQALAJgCAPQgEAegbAAIAAAAg");
	this.shape_413.setTransform(250.1,-22.6);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FAC376").s().p("AhjAVQAFgGAPgGQAPgGAEgHQAMgYAcAMQALAJALgBQALgBAOgJIALAAQAFAAAGADIAIAHIAVAJIAPAFQAJAEgDALg");
	this.shape_414.setTransform(151.3,-98.4);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#DC4E52").s().p("AgIAeQgcgLgrACIhIABQgRACgGgCQgLgDAIgTQAGgIALgFIAVgIIAggNQAVATAKAGIAAABQBjAJB+gJIAEgCQAJADAHAHQAEADAJASIieAAIgJAGQgGAGgJACQgEgBgEgEg");
	this.shape_415.setTransform(155,-123.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#DB474A").s().p("AAGA5QhDgDgjAAQgJgCgGgFQgJgSALgPQAGgIAQgOQAGgJAPgMQAQgNAFgHQAIgJAKACQAHABAKAHIB+BZIgGAHQgnAJg3AAIgKAAg");
	this.shape_416.setTransform(158.7,-128.5);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FCE5B7").s().p("Ai+EDQgrAAgRgSQgSgSAAgrQgBjxABh6QAAgoASgSQASgRAoAAQDAgCC/ACQAqAAASASQASASAAArQABDxgBB6QAAAogSARQgSASgoAAIjBABIi+gBg");
	this.shape_417.setTransform(270.2,-59.3);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#ECE1C5").s().p("AgDAGQABgMgBgGIAHgLIABAvQgJgGABgMg");
	this.shape_418.setTransform(126.6,-107.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#655256").s().p("AgSACQAHgRASAGIAMAJQgBAJgPADg");
	this.shape_419.setTransform(-68.8,-163.3);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#D66C66").s().p("AgPgBIAKgNQALABAEACQAHAEgBAKIAAALIgHABQgPAAgJgQg");
	this.shape_420.setTransform(124.6,-123.7);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#776465").s().p("AgaACIAVgHQAFgGAFgBQASAEAEALQgOAKgNAAQgNAAgNgLg");
	this.shape_421.setTransform(-71.2,-162.4);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#E7BD84").s().p("AgCAfIgDgfQgCgTANgLIgCA9g");
	this.shape_422.setTransform(120.7,-106.3);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#E9D8B6").s().p("AgEghQAVAhgVAig");
	this.shape_423.setTransform(60.8,-106.8);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#E8D8B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_424.setTransform(-59.3,-106.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#E9D8B6").s().p("AgEgCQAAgOAEgMQAFAMAAAOQgBAJgEAXQgDgWgBgKg");
	this.shape_425.setTransform(180.7,-166.4);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#E9D8B6").s().p("AgBAXIAAgtIADACIAAArg");
	this.shape_426.setTransform(120.7,-166.7);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#E9D8B6").s().p("AgEghQAVAhgVAig");
	this.shape_427.setTransform(-119.2,-166.8);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#EAD9B7").s().p("AgEADQABgLADgVQAFAcAAAFQAAAPgFALQgEgNAAgOg");
	this.shape_428.setTransform(180.7,-195.2);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#EAD9B7").s().p("AgDAAIADgXQAKAXgKAYQgEgLABgNg");
	this.shape_429.setTransform(120.7,-194.6);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#EAD9B7").s().p("AgCgaQAMAagMAag");
	this.shape_430.setTransform(-59.2,-195.2);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#EAD9B7").s().p("AgFghQAWAhgVAig");
	this.shape_431.setTransform(-119.2,-194.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#EAD9B6").s().p("AgBgXQAJAVgJAag");
	this.shape_432.setTransform(180.8,-181.1);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#EAD9B6").s().p("AgEgCQAAgOAEgNQAFANAAAOQgBAJgEAWQgDgVgBgKg");
	this.shape_433.setTransform(120.7,-180.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#EAD9B6").s().p("AgEghQAVAhgVAig");
	this.shape_434.setTransform(-119.2,-180.8);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#E9D9B8").s().p("AgDACIgBgaQAJANgBANIgCAYQgFgJAAgPg");
	this.shape_435.setTransform(120.6,-121);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#EAD9B6").s().p("AgEghQAVAhgVAig");
	this.shape_436.setTransform(60.8,-120.8);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#E9D9B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_437.setTransform(-59.3,-120.8);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#EAD9B7").s().p("AgFghQAWAhgVAig");
	this.shape_438.setTransform(60.8,-134.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#E9D8B6").s().p("AgYgBIAxAAQgLADgNAAQgKAAgPgDg");
	this.shape_439.setTransform(-77,-148.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#EAD9B6").s().p("AgVACIAAgDIArAAIgBADg");
	this.shape_440.setTransform(-91.2,-148.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#EAD9B7").s().p("AgdAAQAOgEANABQALAAAVAEQgcAEgFAAIgCAAQgNAAgLgFg");
	this.shape_441.setTransform(-104.8,-148.8);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#E9D9B9").s().p("AgEAAQgBgVAKgMIAAAhQABAWgJAMIgBgig");
	this.shape_442.setTransform(-59.3,-134.8);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#E8D8B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgMAIgUAAIgCAAg");
	this.shape_443.setTransform(282.7,-148.8);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#E9D9B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgMAIgUAAIgCAAg");
	this.shape_444.setTransform(268.7,-148.8);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#E9D9B9").s().p("AAAAFIghAAQAMgKAVABIAiABQgMAIgUAAIgCAAg");
	this.shape_445.setTransform(254.6,-148.8);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#E8D8B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgMAIgUAAIgCAAg");
	this.shape_446.setTransform(222.7,-148.8);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#E9D9B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgMAIgUAAIgCAAg");
	this.shape_447.setTransform(208.7,-148.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#E9D9B9").s().p("AAAAFIghAAQAMgKAVABIAiABQgMAIgUAAIgCAAg");
	this.shape_448.setTransform(194.6,-148.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#E8D8B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgMAIgUAAIgCAAg");
	this.shape_449.setTransform(162.7,-148.8);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#E9D9B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgMAIgUAAIgCAAg");
	this.shape_450.setTransform(148.7,-148.8);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#E9D9B9").s().p("AAAAFIghAAQAMgKAVABIAiABQgMAIgUAAIgCAAg");
	this.shape_451.setTransform(134.6,-148.8);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FBDEA8").s().p("AAAAMQgOgBADgNQACgKAKABQAJABACAKQgCAMgJAAIgBAAg");
	this.shape_452.setTransform(72.7,-168.8);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FBDEA8").s().p("AgLAAQAAgLALAAQAKAAACALQgCAMgJAAIgBAAQgNAAACgMg");
	this.shape_453.setTransform(252.7,-168.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FBDCA4").s().p("AgLAAQgBgEAEgEQADgDAFAAQALAAABALQAAAKgKACIgCAAQgLAAAAgMg");
	this.shape_454.setTransform(35.7,-179.8);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FBDCA4").s().p("AAAAMQgOgBADgNQACgKAKABQAIABADAKQgCAMgJAAIgBAAg");
	this.shape_455.setTransform(155.7,-179.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FBDCA4").s().p("AgLgBQAAgKALAAQAKAAADALQgDAMgJAAIgBAAQgMAAABgNg");
	this.shape_456.setTransform(215.7,-179.8);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FBDCA4").s().p("AgLAAQABgOANADQAKACgBAKQgBAIgLADQgMgCABgKg");
	this.shape_457.setTransform(-89.3,-173.7);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#E3706C").s().p("AgKAOIgIgSQAGgJAMAAIATgBIAAASQgIALgNAAIgIgBg");
	this.shape_458.setTransform(125.1,-131.8);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#F7DCAB").s().p("AgQABQAGgLAFgEQAFgHAKAHQAMAIgIAIIgMARQgMgDgGgPg");
	this.shape_459.setTransform(41.8,-162.1);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FBDFAB").s().p("AgMAKQgDgFABgFQAEgNAPgBIAGAGQAEADAAADQgBAGgEAFQgGAGgFAAIgBAAQgGAAgEgFg");
	this.shape_460.setTransform(162,-162.5);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FBDFAB").s().p("AgKAKQgEgFAAgDQAAgGAFgFQAFgFAGABQAEAAAJAKQgFASgNAAQgDAAgEgFg");
	this.shape_461.setTransform(222.1,-162.5);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FBDCA5").s().p("AgCANQgEgCgDgEQgEgFAAgCQgBgGAFgEQAEgEAFAAQAJAEACACQAFAEgDAGQgDANgIAAIgEgCg");
	this.shape_462.setTransform(264,-202.2);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FBDCA5").s().p("AgIAMQgEgFgBgHQgDgMAQgCIAKAFQAGAEgCAFQgBAEgEAFQgEAEgDABIgCABQgEAAgEgDg");
	this.shape_463.setTransform(84,-202.2);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FCE1AE").s().p("AABAPQgPgDAAgPQAAgDACgFIACgEQANADAGAFQAGAFgBAHQgBAFgDADQgDADgEAAIgCgBg");
	this.shape_464.setTransform(-106.6,-167.5);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#EAD9B7").s().p("AgTACQACgXgBgPQAHAHADAgQADAYAZgBQgFAHgJACIgOACQgLgNAAgWg");
	this.shape_465.setTransform(122.1,-151.9);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FBDFAA").s().p("AgIANQgGgDAAgGQgBgGAEgFQAFgGAGgBQAGgBAEAFQADADACAHQABAOgOABIgCAAQgEAAgEgCg");
	this.shape_466.setTransform(-95.5,-201);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#E9D9B8").s().p("Ag1gEIBrAAQgcAJgaAAQgaAAgbgJg");
	this.shape_467.setTransform(238.7,-148.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FBDFAA").s().p("AgHAMQgFgEgCgIQgCgEAFgEIALgGQANgBACANQADAOgNADIgFAAQgDAAgEgDg");
	this.shape_468.setTransform(188.4,-173.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FBDFAA").s().p("AgJAKQgFgFAAgHQAAgLAPgCQAPACgBANQAAAGgDAEQgEAFgGABQgGgBgFgFg");
	this.shape_469.setTransform(128.4,-173.5);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FCE0AD").s().p("AgOACQgDgLAPgFQAPADACALQADAMgQADIgDAAQgKAAgDgNg");
	this.shape_470.setTransform(270.1,-175.2);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#EADAB9").s().p("AghAAQABgNgBgGIBDACQABAFgCAEQgZgCgKACQgUADgEAZQgHgIAAgMg");
	this.shape_471.setTransform(123.6,-135.3);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FCE0AD").s().p("AAAAPQgOgDgBgNQAFgQAKAEQAIACAEADQAFAEgCAFQgCAOgLAAIgCAAg");
	this.shape_472.setTransform(90.1,-175.1);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#7D4F61").s().p("AgxAAQAUgKAdABIAyADIAAAGQgQAPgWgOIgwAKg");
	this.shape_473.setTransform(-57.9,-164.4);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#E6837A").s().p("AgEgoQAKAFAIASQAHAYgKAVQgGAKgLADQgUgsAWglg");
	this.shape_474.setTransform(123.7,-128.2);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FBDCA4").s().p("AAAASQgSgBABgRQAAgTARADQAQACACAPQgBARgQAAIgBAAg");
	this.shape_475.setTransform(-100.8,-184.2);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#886373").s().p("AgMAJQgTAEgGgJIAHgNQACgDAEgDIAsAAIAKABQAMAPgHAIQgGAGgSABQgGgLgRAEg");
	this.shape_476.setTransform(-57.7,-158.7);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FBDCA4").s().p("AgRABQABgPAQgDQARgDABAUQABAQgTACQgSAAABgRg");
	this.shape_477.setTransform(205.3,-168.2);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FBDCA4").s().p("AgRACQABgQAQgCQAPgDADARQAAATgRABIgBAAQgRAAAAgQg");
	this.shape_478.setTransform(145.2,-168.2);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#EC855D").s().p("AgVASQgCgOAKgPQAEACARgHQANgFACASQABAUgRABQgTgBgJABg");
	this.shape_479.setTransform(-79.3,-177.1);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FBDAA2").s().p("AgBAUQgHgBgGgGQgFgGgBgHQgBgPAXgDQAIgBAFAFIAGAMQgIAWgNAAIgBAAg");
	this.shape_480.setTransform(213.8,-199);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FBD69B").s().p("AgRAAQABgRAQAAQASABAAAQQAAARgQABIgCAAQgRAAAAgSg");
	this.shape_481.setTransform(78.2,-185.3);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FBD69B").s().p("AgRgBQACgRARABQAQABAAAQQgBASgQAAIgBAAQgSAAABgTg");
	this.shape_482.setTransform(258.2,-185.3);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FBDAA2").s().p("AgMAOQgGgFgBgIQgCgIAIgFIANgHQAVABgBARQAAAHgGAHQgGAGgIABIAAAAQgHAAgFgGg");
	this.shape_483.setTransform(153.7,-199);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FBDAA2").s().p("AgMAOQgGgFgBgIQgCgIAIgGQAEgCAKgDQAIgCAFAFQAGAFABAJQgEAUgRABIgBAAQgGAAgFgGg");
	this.shape_484.setTransform(33.7,-199);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FBDAA1").s().p("AgTgDQABgIAGgFQAGgFAGABQAJABAGAGQAHAHgCAHQAAAIgHAGQgHAFgIABQgUgGADgSg");
	this.shape_485.setTransform(-112.6,-200.8);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FBDAA1").s().p("AgUAAQAFgKAEgEQAGgHAHACQAJABAGAHQAFAHgBAIQgCAQgTAAQgTAAgBgUg");
	this.shape_486.setTransform(128.6,-156.5);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FBDAA1").s().p("AgUACQAAgIAGgGQAHgHAHAAQAHgBAGAGQAFAFACAIQADAIgGAGQgEAEgLAEQgWAAAAgTg");
	this.shape_487.setTransform(188.7,-156.5);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FBDBA3").s().p("AgMARQgFgFgCgIQgCgIAEgHQAFgHAJgCQAHgBAHAGQAEAEAGAKQgCASgTADIgCABQgGAAgEgEg");
	this.shape_488.setTransform(109.4,-176.8);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FBDBA3").s().p("AgCAVQgRgBgBgUQAAgSAUgCQAWAJgCANQgBAJgHAFQgGAFgGAAIgCAAg");
	this.shape_489.setTransform(289.4,-176.8);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#967766").s().p("AgIAbQABgcgCgEIACgxQAFgBACABQAGAGAAANQgBAOAFAFIAABHQgTgGABgWg");
	this.shape_490.setTransform(126.1,-103.7);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FBDAA2").s().p("AgNARQgGgHgBgJQgBgNAVgKQATAFACARQABAJgHAHQgGAGgJABIAAAAQgHAAgGgGg");
	this.shape_491.setTransform(66.7,-202.3);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#E9D9B7").s().p("Ag1AeQAygBAEgDQAYgNgRg2QAKALAFAlQAFAYAagBQgcAMgaAAQgaAAgbgMg");
	this.shape_492.setTransform(178.7,-152.3);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FBDAA2").s().p("AgBAWQgJgBgGgHQgGgHACgIQABgJAGgGQAHgHAHACQAJABAFAHQAGAHAAAIQgFALgEAEQgFAGgHAAIgBgBg");
	this.shape_493.setTransform(246.7,-202.3);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#694B45").s().p("AgQAjQgCgIABgGQADgKgDgQQgCgVABgIQACgGAGgEQAKgEAIAJIAMARIgBAvIgVAVQgKgBgEgKg");
	this.shape_494.setTransform(-66.5,-168);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#6F6273").s().p("AgdAYQgLgNADgVQAJgIANgDQAHgCAPgBQAIACAGAIIAKANQAPALgPAJQgFAFgGAAQgagCgKACIgIABIgFgBg");
	this.shape_495.setTransform(-57.9,-162.2);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FBDAA2").s().p("AgWgBQABgRAVAAQAWAAABASQAAASgWABIgBAAQgXAAABgUg");
	this.shape_496.setTransform(-37.3,-199.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FBDBA3").s().p("AgQAOQgEgFgBgLQgCgLAIgEQAFgDAKAAQAXAAAAAUQAAAJgHAFQgFAEgLACIgDABQgJAAgEgHg");
	this.shape_497.setTransform(278.7,-157.1);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FBDBA3").s().p("AgQAOQgEgFgBgLQgCgLAIgEQAFgDAKAAQAXAAAAAUQAAAJgHAFQgFAEgLACIgDABQgJAAgEgHg");
	this.shape_498.setTransform(98.7,-157.1);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#614840").s().p("AAIAsQgMABgJgNQgLgRgGgDIgBgdQACgSALgLQAKAEAIASIAHAKIAIAVQABAEAKALQAHAJgBAJQgFAHgIAAQgFAAgGgDg");
	this.shape_499.setTransform(-74.8,-166.6);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FBDBA3").s().p("AgWADQAAgUAXgEQAKgCAGAGQAFAGABAKQABAVgYACIgCAAQgTAAgBgTg");
	this.shape_500.setTransform(233.6,-188.6);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FBDBA3").s().p("AgWABQACgUAXgCQAKgBAGAHQAFAGgBAJQgBAUgWACQgXAAABgVg");
	this.shape_501.setTransform(173.6,-188.6);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FBDBA3").s().p("AgWAAQACgTAXgCQALAAAFAGQAFAGgBAJQgBAVgYABQgVAAABgWg");
	this.shape_502.setTransform(53.6,-188.6);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#DF6A66").s().p("AghAMQACgcAaAAQAjABADgDIABAhQgZAEgJAAIgBAAQgSAAgOgHg");
	this.shape_503.setTransform(123.6,-138.6);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FBDBA3").s().p("AgVAAQgCgVAVgBQATAAAFAXQADATgWADQgWAAgCgXg");
	this.shape_504.setTransform(-80.4,-155.8);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#A0726B").s().p("AgvgFIAFgTQAPAYADACQALAJAQgWQADgKAFAKQAEAEAQAFQAOACADAMQgkAKgPACIgFABQgaAAgNgeg");
	this.shape_505.setTransform(-58.1,-152.7);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FCD295").s().p("AgUAgQgMgiANgaQAGACANgDQALgEAHAHQATAbgVAUQgQALgQAAIgEAAg");
	this.shape_506.setTransform(123.3,-106.5);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FBD9A0").s().p("AghASQAEgTAGgIQAKgMASACQASACAHALQAGAIgCASg");
	this.shape_507.setTransform(53.6,-158.2);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#E4644E").s().p("AgqAYQgcgYAcgYIBjAAQgMAQgSADIgeABQgSAAgHAEQgJAIACARQgEAAgDgBg");
	this.shape_508.setTransform(-60.1,-167.8);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#77586A").s().p("AgWAkQgKgDgHggQgDgKABgFQAAgJAKgEQAdgKAEACQAHABAIATQACADANADQAKACAAAHQABAGgGACIgMAAQgHgDgRAAQAJAFAAAKQgSARgLAAIgDgBg");
	this.shape_509.setTransform(-58.3,-155.3);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FBD79C").s().p("AAAAfQgPgCgIgFQgKgHADgPQAEgRACgEQAHgNAPACQAQADAFACQAMAGABAPIgJAYQgGALgOAAIgDAAg");
	this.shape_510.setTransform(-25.4,-199.4);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FBD9A0").s().p("AAAAgQgggFAEgeQADgfAYADQAhAEgDAdQgBAQgGAHQgFAHgLAAIgGAAg");
	this.shape_511.setTransform(-111.8,-155.8);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FBD9A0").s().p("AAJAeQgXgCgJgGQgLgIADgOQAFgfAaACQAjACgDAaQgBANgHAJQgGAJgHAAIgCAAg");
	this.shape_512.setTransform(173.7,-157.2);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FBD9A0").s().p("AgWAYQgKgGABgPQADgiAdADQAgACgBAWQgBAigfAAQgOgBgIgFg");
	this.shape_513.setTransform(233.7,-157.3);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#939835").s().p("AhsAbQgOgUACgQQABgaAUAHQArAOA8gBIBqgFIAKADQADAJgIAFQgOAGgWAAIglAAIg5AAQgkgBgXAJIgPAOQgGAEgHACg");
	this.shape_514.setTransform(-3.8,-197.2);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#F4C788").s().p("AAhA6QgngJgSgrQgMgbgdgBQgiAEgPgEQAJgJANgBQAGAAARABQARACALgIQAJgHAGgPQAHBBAVAYQAXAYA0gJQARgCADgPIASAKQgfAWgfAAQgKAAgKgCg");
	this.shape_515.setTransform(-66.3,-181);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FBD9A0").s().p("AgSAaQgNgEAAgPQACgmAfABQAiABgFAXIgEAXQgFAOgRAAQgPgCgIgDg");
	this.shape_516.setTransform(67.5,-157.1);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FBD79C").s().p("AAAAfQghgEACgaQABgPADgGQAGgMAQADIAYAEQANAFAAAQIgJAYQgHALgOAAIgCAAg");
	this.shape_517.setTransform(-66.4,-199.4);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FBD9A0").s().p("AAEAfIgWgFQgOgEABgQQACgmAfACQAQABAGAEQAKAGgDANIgFAYQgFANgQAAIgBAAg");
	this.shape_518.setTransform(247.5,-157.1);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FBD79C").s().p("AABAgQgQgBgFgDQgMgGADgQQABgRADgIQAFgNASACQAPACAIAEQAMAHgCAQQgDAhgYAAIgDAAg");
	this.shape_519.setTransform(190.1,-202.6);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FBD79C").s().p("AgSAeQgMgFABgRQABgSACgFQAEgOARgCIAXAIQANAGAAARQgBAOgFAIQgHAKgOAAQgPAAgHgCg");
	this.shape_520.setTransform(130.1,-202.6);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FBDBA3").s().p("AAAAgQgQgDgHgEQgLgHADgPQADgQADgIQAGgOASAEQATAEAEADQANAIgDASQgEAQgFAGQgGAJgMAAIgFgBg");
	this.shape_521.setTransform(292.7,-200.7);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FBDBA3").s().p("AAAAgQgjgDADgYQADgVACgDQAFgOASACQAQACAHAEQANAGABARQgGATgDAFQgHAKgNAAIgEAAg");
	this.shape_522.setTransform(112.8,-200.7);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#F1DEC0").s().p("AgBAZIghgNQADgoANgGQAOgGAmAYQACASgDAKQgEAPgPAJIgEABQgIAAgDgMg");
	this.shape_523.setTransform(-56.3,-180.7);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FBC474").s().p("AAPAaQgKgRgagCQgOAAABgSQADgZAAgKIALgJQAPgGAFAAQAKgBAJAHQACAGACAZQACAUAJAIIACA5IgJABQgKghgCgDg");
	this.shape_524.setTransform(123.6,-98.5);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FAD59A").s().p("AgMBZQgBgIAAgPIABgXIAAghQAAgVgLgLQgEgFgBgGIgCgnQAAgWAeAAQATAAAIAMQAJALgJAQQgRAdAAArIAABMIgTACg");
	this.shape_525.setTransform(10.2,-195.9);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#7B4E64").s().p("AAFA+QgngFgQgiQgKgVgCgNQgEgVAGgSQAVgPAIAEQAHAEAGAeQAGAhAEAGQAIASAegGQAYgLALAaQgQAYggAAIgMgBg");
	this.shape_526.setTransform(-62.9,-181.9);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#7C5165").s().p("AhhBuIgJgUIDGjJQAQAJgBAZQgBAHgEAEQgPAOgGAIIgOAUQgFAFgKAHIgOAMQgQAMgWAXIgkAmIgjAgQgHAFgFABIgFABQgFAAgEgCg");
	this.shape_527.setTransform(-25.2,-187.1);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#EFE6C7").s().p("AhwBWIAggzQAHABANAHQANAGAHABQAOABAEgBQAIgDgHgPQAAgHACgFQABgFgCgIQgBgHAAgDIAJgNQAFgIABgHIADgYQADgMAJgHIAKgIIAPgCQAGgCAGADIAQAMQAJAHAHADIAQAJQAIAFAEAGQALAUgGAdQgOAlgnAdIgHACQgTgDgbAEQgcAHgPACg");
	this.shape_528.setTransform(-54.8,-156.8);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#5F3A4F").s().p("ADbCcQgcgDgHADIhGgCQgFADgJgCIgNgCQgdgFgbgUQgPgKgegeIhfheQg4g4gsggIgYgQQgOgLgDgJQgEgMALgNQA5AQAzAtQAkAfAvA8QA6BKBLAlQBMAlBfgBQgKAMgTAAIgEAAg");
	this.shape_529.setTransform(34.7,-164.7);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#82614C").s().p("AgFD6QgIgKAAgRQgBgWgBgFQgHgRAAgXIACgnQgBgLAEgNIAJgWIADg9QABgigLgYQgGgFgBgIIABgmQAAgZADgOQACgHAJgNIgBgdQgEgFgDgJQgDgMAKgRQACgQAHgCQAHgCAOAEIABHKQAAAVgDAHQgGAKgOAAIgFAAg");
	this.shape_530.setTransform(127.9,-117.4);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#72445F").s().p("AgkBCQg0g+grglQg3gyg5gfQgHgJgDgMIgCgWQgBgNAFgJQAJgIALAGQAwANAuAmQASAPA6A7IA6A8QAgAlAbAVQAOAAAGASQAjAiAuAEQAlgbAgAdQAZAEAFASQACAJgDAcQgdAGgcAAQiIAAhih3g");
	this.shape_531.setTransform(34.4,-168.2);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FCC36C").s().p("AgCBjIgxgGIgIgIQgNgZANgIQAHgEASgDIgaAAQgIgCgNgLQgNgLgKgBQgYgKgRACQgUACgOAVQgDAFgEAWQgDAQgMAHQgpAGADgqIACg+QADgFAMgHQAIgIgPgLQgBgkAfgNQAugIARAEQAgAGAQAmQAKAYAeADQAcADAlgQQAHgGAIgRQAJgRAIgGQAegPAgAHQAXAFAjAVIAwAbQAOAFAEAOQAMAsgOA4QgFALgLAAQgOAAgKgOQgVg6gYgJQgZgJgoAkQgDAEgHAYQgFARgJAJQgGAEgIADQgPACgRAAIgPAAg");
	this.shape_532.setTransform(-57.7,-173.8);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FCE5B6").s().p("Ai6EDQgvAAgRgSQgSgTAAgwIAAlbQAAgxASgSQATgSAygBIFwABQAtAAATASQASASAAAsQABCygBCzQAAAtgSARQgTASgtAAIi7ABIi6gBg");
	this.shape_533.setTransform(-89.8,-119.3);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FCE5B6").s().p("AjAEDQgoAAgSgSQgSgRAAgpQgBj0ABh7QAAgnASgRQARgSAmAAQDEgCDFACQAkAAARARQASASAAAkQACC7gCC5QAAAmgSASQgRASgmAAIjGABIi+gBg");
	this.shape_534.setTransform(90.2,-119.3);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#E7D6B3").s().p("AAAgPQAJARgJAOQgJgQAJgPg");
	this.shape_535.setTransform(-239.3,36.2);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#C5CE64").s().p("AgDAVIgEAAIAAgdIAPgMIgIApg");
	this.shape_536.setTransform(-243.8,177.6);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#8C9E33").s().p("AgIAXQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIABgwIAIAJQAJAPgJAPIgDAKQgBAFgFABQgEgCABgDg");
	this.shape_537.setTransform(-245.2,178.5);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#EAD9B7").s().p("AgCAAQABgHAEgSIAAAzQgGgOABgMg");
	this.shape_538.setTransform(-239.3,120.5);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#E9D8B6").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_539.setTransform(-197.3,31.3);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#EAD9B7").s().p("AghgFIBDABQgRAKgRAAQgQAAgRgLg");
	this.shape_540.setTransform(-225.3,-88.7);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#E9D8B6").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_541.setTransform(-197.3,-88.7);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#EAD9B6").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_542.setTransform(-211.3,-88.7);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#E8D8B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_543.setTransform(-239.3,-106.8);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#E9D8B6").s().p("AgCgcQAFATAAANQgBALgEAOg");
	this.shape_544.setTransform(-239.2,147.7);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#E9D8B6").s().p("AgXACQAVgJAaAJg");
	this.shape_545.setTransform(-287.5,151);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#E9D8B5").s().p("AAAAEQgRgCgHAAQAIgFAOAAIAcgBQgMAJgOAAIAAgBg");
	this.shape_546.setTransform(-273,151.1);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#E9D8B5").s().p("AgdAAQANgEAOAAQALABAVADQgbAFgGAAIgCAAQgNAAgLgFg");
	this.shape_547.setTransform(-258.8,151.2);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#E9D9B6").s().p("AgCADQgLgBgOgEIA3AAQgQAFgMAAIgCAAg");
	this.shape_548.setTransform(-244.8,151.3);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#EAD9B6").s().p("AgVACIgBgDIAsAAIgCADg");
	this.shape_549.setTransform(-231.2,151.3);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#E9D8B6").s().p("AgcAAQAPgEANAAQALAAASAEQgQAEgNAAIgCABQgLAAgPgFg");
	this.shape_550.setTransform(-257.2,-88.8);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#EAD9B6").s().p("AgXACQAVgJAaAJg");
	this.shape_551.setTransform(-271.6,-88.9);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#EAD9B7").s().p("AgZgCIAzAAQgOAFgLAAIgBAAQgLAAgOgFg");
	this.shape_552.setTransform(-285.6,-88.7);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#EAD9B6").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_553.setTransform(-211.3,31.3);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#EAD9B7").s().p("AghgFIBDABQgRAKgRAAQgQAAgRgLg");
	this.shape_554.setTransform(-225.3,31.3);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#E9D8B6").s().p("AgbADQAcgLAbALg");
	this.shape_555.setTransform(-257.7,31.2);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#EAD9B6").s().p("AgcAAQALgEAPAAIAfAEQgUAEgLABQgNAAgNgFg");
	this.shape_556.setTransform(-270.9,31.2);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#EAD9B7").s().p("AgbgCIA3AAQgSAFgMAAQgPAAgKgFg");
	this.shape_557.setTransform(-284.5,31.3);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#EAD9B6").s().p("AAAgXQAFAKgBANIgDAYQgKgYAJgXg");
	this.shape_558.setTransform(-239.3,134);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#EADAB7").s().p("AgEADIAEgfQAEAUABALQAAANgFANQgEgLAAgPg");
	this.shape_559.setTransform(-239.3,-82.1);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#EADAB7").s().p("AAAgcQAEAPAAANQAAAKgEATQgIgcAIgdg");
	this.shape_560.setTransform(-239.2,-66.8);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#EAD9B7").s().p("AgbAAQAdgIAaAIQgOAFgNAAQgKAAgSgFg");
	this.shape_561.setTransform(-285.4,91.2);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#EAD9B6").s().p("AgVACIAAgDIArAAIgBADg");
	this.shape_562.setTransform(-271.2,91.3);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#E9D8B6").s().p("AgUgCIApAAQgMAGgJAAQgLAAgJgGg");
	this.shape_563.setTransform(-257.1,91.3);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#EAD9B7").s().p("AgCADQgLgBgOgEIA3AAQgQAFgMAAIgCAAg");
	this.shape_564.setTransform(-224.8,91.3);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#EAD9B6").s().p("AgUADQAWgNATANg");
	this.shape_565.setTransform(-211.4,91.1);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#EAD9B6").s().p("AgDgBIADgYQAEAKABAOIgDAbQgGgOABgNg");
	this.shape_566.setTransform(-179.3,187.5);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#E9D9B9").s().p("AgEAAQgBgVAKgMIAAAhQABAWgJAMIgBgig");
	this.shape_567.setTransform(-239.3,-14.8);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#E8D8B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_568.setTransform(-119.3,193.2);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#E9D9B6").s().p("AgCgYQAFANgBALQAAALgEAOg");
	this.shape_569.setTransform(-239.1,-39);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#E9D9B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_570.setTransform(-239.3,-0.8);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#E9D9B6").s().p("AgEgCQAAgOAEgNQAFANAAAOQgBAIgEAYQgDgWgBgKg");
	this.shape_571.setTransform(-179.3,201.6);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#EAD9B7").s().p("AgVACIAAgDIArAAIgCADg");
	this.shape_572.setTransform(-284.2,-28.6);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#E8D8B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgMAIgUAAIgCAAg");
	this.shape_573.setTransform(-197.3,-28.8);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#E9D9B8").s().p("AAAAFIghgBQAMgJAVABIAiABQgMAIgUAAIgCAAg");
	this.shape_574.setTransform(-211.3,-28.8);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#E9D9B9").s().p("AAAAFIghAAQAMgKAVABIAiABQgMAIgUAAIgCAAg");
	this.shape_575.setTransform(-225.3,-28.8);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#EAD9B7").s().p("AgdAAQAMgEAPAAQAIABAYADQgWAEgKABIgCAAQgNAAgMgFg");
	this.shape_576.setTransform(-254.9,-28.8);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#EADAB7").s().p("AgEgCQAAgOAEgNQAFAMAAAPQAAAIgFAYQgDgWgBgKg");
	this.shape_577.setTransform(-179.3,158.6);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#E9D9B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_578.setTransform(-239.3,-120.8);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#E9D8B5").s().p("AgBgVIADACIAAApIgDABg");
	this.shape_579.setTransform(-239.1,162.1);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#E8D8B7").s().p("AgEAiIAAhDQAJAMAAAVIgBAjIgIgBg");
	this.shape_580.setTransform(-239.2,27.3);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#EAD9B6").s().p("AgDAAQADgRgBgIQAFAJAAAPIABAaQgJgNABgMg");
	this.shape_581.setTransform(-239.2,-52.5);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#EADAB7").s().p("AgEADQABgLADgVQAFAcAAAFQAAAOgFAMQgEgNAAgOg");
	this.shape_582.setTransform(-179.3,172.7);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#EAD9B7").s().p("AghgFIBDABQgRAKgRAAQgQAAgRgLg");
	this.shape_583.setTransform(-255.3,-148.7);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#EAD9B7").s().p("AghgEIBDgBQgRALgRAAQgQAAgRgKg");
	this.shape_584.setTransform(-284.2,-148.7);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#C3BA60").s().p("AgFgMIACgNIAQAUIABAUIgQALQgUgRARgVg");
	this.shape_585.setTransform(-235.2,178.1);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#E9D9B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_586.setTransform(-119.3,179.2);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#E9D9B9").s().p("AgEAAQgBgVAKgMIAAAhQABAWgJAMIgBgig");
	this.shape_587.setTransform(-239.3,-134.8);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#E8D8B8").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_588.setTransform(-239.3,13.2);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#E9D9B9").s().p("AgEAAQgBgVAKgMIAAAhQABAWgJAMIgBgig");
	this.shape_589.setTransform(-119.3,165.1);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#E9D8B5").s().p("AggAGIAAgIIA3AAQAFgHAFAIIAAAHg");
	this.shape_590.setTransform(-242.2,31);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#EBDBB9").s().p("AgggCIBBAAQgVAFgOAAQgRAAgNgFg");
	this.shape_591.setTransform(-269,-28.7);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#BD8A54").s().p("AgLAOIgJgKIAAgSIASgBQAJgCADAAQAIABACAIQACAJgGAIQgFAFgLAEIAAAAQgGAAgFgEg");
	this.shape_592.setTransform(-221.5,150.3);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#EBDBB9").s().p("AgmgEIBNAAQgUAJgTAAQgSAAgUgJg");
	this.shape_593.setTransform(-269.8,-148.7);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#A8C947").s().p("AAAAeIgKgUQgJgKAIgKIAIgUIADAEQAKALAFAXQABAGgCAIQgEAJgGAAIgEgBg");
	this.shape_594.setTransform(-232.6,178.6);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FBDBA3").s().p("AgIAHQgEgEAAgDQAAgCAEgEQAEgDAEgBQAFgCAEAEQAFAEgBAFQgBALgPAAIgFgFg");
	this.shape_595.setTransform(-244.8,-66.8);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#EBDBB9").s().p("AAAgcQAJAdgJAcQgIgaAIgfg");
	this.shape_596.setTransform(-239.3,105.9);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FBDBA3").s().p("AgIAJQgFgEABgFQAAgLAMAAQALAAADALQgBAKgLACIgCAAQgEAAgEgDg");
	this.shape_597.setTransform(-244.7,53.2);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#E9D8B5").s().p("AgbACIAAgDIA3AAIgEADg");
	this.shape_598.setTransform(-242.7,91.3);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FBDBA3").s().p("AgIAJQgEgDAAgFQgBgFAFgEQAEgEAFACQADAAAEAEIAGAFQgEAMgKABIAAAAQgFAAgDgDg");
	this.shape_599.setTransform(-244.7,113.2);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#704E5C").s().p("AgDAJIgggCQAIgHAVAAQAUAAAIgIQAMADACAFQADAEgOAEQgIACgLAAIgJgBg");
	this.shape_600.setTransform(-196.1,94.9);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FBDDA7").s().p("AgLAAQABgOANADQAKACgBAKQgBAJgLACQgMgBABgLg");
	this.shape_601.setTransform(-278.3,102.2);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#E9D8B6").s().p("AglAFIAAgJIBLAAQgFAFgIACIgQACg");
	this.shape_602.setTransform(-239.7,-28.7);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FBE0AE").s().p("AABAOQgFgBgEgEQgEgFABgFQABgOAKACQALAAABAPQgBAMgIAAIgCAAg");
	this.shape_603.setTransform(-262.2,205.8);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FBDDA7").s().p("AgLAAQAAgEADgEQAEgDAEAAQALAAABALQAAAKgKACIgCAAQgKAAgBgMg");
	this.shape_604.setTransform(-278.3,42.2);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FBDDA7").s().p("AgCAMQgGAAgDgEQgDgDABgFQABgFAFgEQAFgDAFABQAKABABAKQgEAMgKAAIgCAAg");
	this.shape_605.setTransform(-271.9,59.3);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FBDDA7").s().p("AgHAKQgEgEAAgGQgBgEAEgDQADgEAFAAQAKgBACALQABAKgKADIgDAAQgEAAgDgCg");
	this.shape_606.setTransform(-278.3,-77.8);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FBDCA4").s().p("AAAAMQgOgBADgNQACgKAKABQAJABACAKQgCAMgKAAIAAAAg");
	this.shape_607.setTransform(-209.2,66.2);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FBDDA7").s().p("AgNABQADgNAMABQAFAAAEADQAEAEgBAEQAAALgPABQgNgCABgJg");
	this.shape_608.setTransform(-271.9,-60.7);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FBDDA7").s().p("AgNACQABgMAMgBQAOADAAAIQAAANgOAAQgOAAABgLg");
	this.shape_609.setTransform(-271.9,119.3);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FBDDA7").s().p("AgLgDQAAgFAEgDQADgEAEABQAGACAEAFQADAEgBAFQAAADgEAEIgGAGQgOgGABgMg");
	this.shape_610.setTransform(-268.4,178.6);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FBDFAB").s().p("AgOgEIAGgGQAEgDADAAQAGgBAFAFQAGAEgBAHQAAADgEAFQgEAFgDAAQgOgBgEgSg");
	this.shape_611.setTransform(-226.7,72.5);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FBDFAA").s().p("AAAAPQgQgBACgNQAAgGAGgFQAFgFAGABQAMABAAAPQgCANgLAAIgCAAg");
	this.shape_612.setTransform(-215.5,39);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FBD89F").s().p("AgQABQAAgHAFgFQAEgFAHAAQAHAAAFAGIAFAKQAAARgOAAIgCAAQgPAAgCgQg");
	this.shape_613.setTransform(-244.7,-84.2);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FBD89F").s().p("AACARQgVgBADgTQACgNAOAAQARADAAAPQAAAHgEAEQgEAEgGAAIgBAAg");
	this.shape_614.setTransform(-244.7,35.8);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#A8C947").s().p("AAAAPQgNgPgKAAQgFgCgFgGIgDgGQAlgZAkAcIgFAAQgCAHAAALQAAANgCAGIgEABQgMAAgMgMg");
	this.shape_615.setTransform(-229.3,177);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FBD89F").s().p("AgQACQgCgGAFgFQAEgGAIgBQANgCAFASQABAOgOADIgEAAQgMAAgEgPg");
	this.shape_616.setTransform(-244.7,95.8);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FBDAA2").s().p("AgKAPQgFgDgBgHQgBgIAFgGQAEgHAIAAQAMgBAFAPQAAAPgRAEIgCAAQgFAAgDgCg");
	this.shape_617.setTransform(-184.9,145.8);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#BBCB56").s().p("AgXAYQgLgKALgJQALgBAGgMQAGgPAGgDIALAEIAKARQAEAFgCACIgHAHQgIgBgHAHIgKAMg");
	this.shape_618.setTransform(-252.5,177.1);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FBD79B").s().p("AgQgTIAUABQANACAAAOQABAMgMAGQgGADgQABg");
	this.shape_619.setTransform(-185.8,171.7);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#FADFA9").s().p("AgYAPQgHgMgBgEQgDgKALgGQAHgEAHAEQAFAEACAJQADAIAOADQAQADADAJIgugBIgEACQgEAAgDgFg");
	this.shape_620.setTransform(-249.3,172.9);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#95BE2E").s().p("AAHAeIgfgkQgFgKAAgEQgBgHAIgFQAIABAOgCQANgBAIAIIABAIQAOATgJAVQAAAHgHAFIgDAAQgGAAgEgEg");
	this.shape_621.setTransform(-248,177.6);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FBDCA4").s().p("AAAASQgSgBABgRQAAgTARACQAMACAGAPQgBASgQAAIgBAAg");
	this.shape_622.setTransform(-220.8,55.7);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#EAD9B6").s().p("AgJAlQgSAAgLgKQAiAGAJgTQAKgOgFgkQAJAKABAaQABAXASAHIgSAHIgeAAg");
	this.shape_623.setTransform(-240.8,-151.9);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#FBDAA2").s().p("AgUABQgDgNAUgFQAOgDAKASQAAAQgRAEIgFAAQgPAAgEgRg");
	this.shape_624.setTransform(-270.2,138.7);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FBDAA2").s().p("AAAAVQgHgBgFgGQgCgDgDgIQACgXAQAAQARABAAATQAAAVgSAAIAAAAg");
	this.shape_625.setTransform(-287.8,180.2);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#FBDAA2").s().p("AgMAOQgFgEAAgJQgBgIAFgGQAFgHAIAAQAPABADATQgBAVgRAAQgHAAgFgHg");
	this.shape_626.setTransform(-227.8,120.2);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#FBD79B").s().p("AgRAAQABgRAQAAQARAAABAQQAAASgQABIgCAAQgSAAABgSg");
	this.shape_627.setTransform(-261.8,-72.3);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#FBD79B").s().p("AAAASQgTAAACgUQACgQARABQARACgBAQQgBARgQAAIgBAAg");
	this.shape_628.setTransform(-261.8,47.6);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#FBD79B").s().p("AAAASQgUAAADgVQACgQARACQAPACABAPQgCASgQAAIAAAAg");
	this.shape_629.setTransform(-261.7,107.6);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FBDAA2").s().p("AgTAAQAAgHAFgFQAGgFAIAAQAVgBgBASQAAAPgTADQgUgCAAgQg");
	this.shape_630.setTransform(-270.2,-41.3);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FBDAA2").s().p("AgTAAQABgIAGgGQAGgFAGgBQAQgBADAWQACARgUADQgUgHAAgOg");
	this.shape_631.setTransform(-190.1,64.3);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FBDAA2").s().p("AgDASQgUgFADgOQACgJAHgEQAHgFAIACQAOADADAOQgGASgOAAIgEAAg");
	this.shape_632.setTransform(-270.2,78.7);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FBDAA1").s().p("AgCAVQgQgBgBgUQgBgQAUgFQAXAKgDANQgBAJgHAFQgGAGgHAAIgBgBg");
	this.shape_633.setTransform(-232.6,39.2);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#4E3441").s().p("AgeARQgKAAgEgLIABgJQARAEAagIQAegMAOAEQgLAIAMAGQgHANgVgBQgXgCgHAFQgKADgFAAIgCAAg");
	this.shape_634.setTransform(-198.4,94.1);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#97734A").s().p("AgQBAQgLgqAAgZQAAglAUgdIAjgBIAAALQgSgCgGAKQgEAIAAASIAABfIgEABQgHAAgFgHg");
	this.shape_635.setTransform(-190.7,129.8);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#AFC954").s().p("AgmAWQgIgKAGgMIALgTQAjgaAkAaQADAFgCAIQgGAFgFABIgOAAQgMgBgGAHQgFAFgHANQgHAJgKAAg");
	this.shape_636.setTransform(-239.9,177.5);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#E9D9B7").s().p("AACAoQgsgBgHABQAKgKAXAAQASgBAFgLQAEgLAAgPIAAgfQAJAHABANIgBATQAAAfAegCQgRALgaAAIgFAAg");
	this.shape_637.setTransform(-240.9,-92.2);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FBDAA2").s().p("AgSAAQgBgUASgCQATgBABAVQABALgEAGQgEAHgMABIAAAAQgSAAAAgXg");
	this.shape_638.setTransform(-289.8,-51.8);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FBDAA2").s().p("AgWAAQAAgLAIgEQAGgEALABQAVABgBASQgBARgVABQgXAAAAgTg");
	this.shape_639.setTransform(-277.3,160.7);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FBDAA2").s().p("AAAAXQgMgBgEgIQgDgGABgLQABgVATACQARACAAAVQgBAWgSAAIAAAAg");
	this.shape_640.setTransform(-289.8,128.2);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FBDAA2").s().p("AgWgBQABgRAWAAQAWAAAAASQAAASgWABIgBAAQgXAAABgUg");
	this.shape_641.setTransform(-217.3,100.7);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FBDAA2").s().p("AAAAXQgSgBAAgWQgBgVATgBQATgBAAAZQgBAVgSAAIAAAAg");
	this.shape_642.setTransform(-289.8,68.2);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FBDBA3").s().p("AAAAXQgUgBgBgYQAAgVAVABQAKABAFAIQAFAGACAKQgBAUgTAAIgCAAg");
	this.shape_643.setTransform(-200.4,84.1);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FCAD58").s().p("AgdAIIAUgdIASABIAVAUQgLAWgRAAQgKAAgVgOg");
	this.shape_644.setTransform(-205.8,99.7);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FCB760").s().p("AhjACQADgOAIgDIAFAKQACAFADAAIBVAGQAxABAkgNQAFABADADIgDAGQgCAFgCAAQhAAGggABIgJAAQgzAAgkgOg");
	this.shape_645.setTransform(-205.9,109.2);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#FCBE67").s().p("Ag4AQIgCgBQAFgPAYgPQAUgBAngIIAdAmIgCACQgdAJgcAAQgcAAgcgJg");
	this.shape_646.setTransform(-205.8,102.2);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#B5967B").s().p("Ag1AwIAAgeQAAgbAMgSQgDAVAFAGQAGAMAVgBQADADgBAEQgBABAAABQgBAAAAABQAAAAgBAAQAAAAAAAAQgPgBgCAKQgCAFAAAOQgGAFgFAAQgFAAgFgGgAAkglQgMAGgagCQgagBgNAHQAHgLAMgHQAdgSAsAWQACABAAAEIABAJg");
	this.shape_647.setTransform(-201.4,92.6);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FBD99F").s().p("AgVAeIAAg7IAdADQAQAFgCAVQgCAeggAAIgJAAg");
	this.shape_648.setTransform(-185.3,202.7);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FDC46E").s().p("AAvAHIhNABIgvgBIgvAAQADgOAQgFQBHAJAeABQA3AAAsgQQAVAJAJARIAAAKQgfgMgvABg");
	this.shape_649.setTransform(-205.4,110.8);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FCA852").s().p("AhEANQgfgCALgZICxABIADAIQACAQgTACQgiACgnAAQggAAgmgCg");
	this.shape_650.setTransform(-205.9,109.2);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FBD79C").s().p("AAAAgQgNgBgHgEQgKgFAAgNQAAgfAYgJQAHAEASAEQAOAFgCAPQgCAQgEAHQgGAMgQAAIgDAAg");
	this.shape_651.setTransform(-265.4,160.4);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FBD9A0").s().p("AACAgQghgCADgfQACgfAWABQAiABAAAcQgCARgEAIQgGAJgNAAIgDAAg");
	this.shape_652.setTransform(-231.8,84.2);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FBD79C").s().p("AADAfQgPgDgGgDQgNgHACgPQACgQACgGQAGgNAPACQAPABAIAGQANAJgCAXQAAAJgFAGQgGAHgKAAIgGAAg");
	this.shape_653.setTransform(-290,116.3);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FBD79C").s().p("AAEAfQgOgCgIgEQgMgGAAgOQABgPADgIQAFgNAQABQAPABAIAEQANAHAAASQgBAOgEAIQgGAJgMAAIgEAAg");
	this.shape_654.setTransform(-289.9,-63.7);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FBD79C").s().p("AABAfQgQgEgFgDQgNgHADgPQADgSACgEQAGgNAQADQAQACAHAEQANAGgCANQgCATgGAJQgFAJgLAAIgGgBg");
	this.shape_655.setTransform(-289.9,56.3);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FBD9A0").s().p("AgTAZQgOgFADgRIAFgXQAGgOASADIAVAFQANAGgCAPQgCARgCAFQgGAOgRABIgXgHg");
	this.shape_656.setTransform(-278.3,191.2);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FBD79C").s().p("AAFAfQgQgBgJgFQgLgGAAgPQAAgPADgHQAFgMAQABIAYACQAPAFgBARQgBAkgYAAIgBAAg");
	this.shape_657.setTransform(-186.4,40.6);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#FBD9A0").s().p("AACAgQgOgCgIgDQgNgFACgQQADgRADgFQAGgOAPgCQAFAFATAEQAPAGgEAQIgFAXQgFALgMAAIgHgBg");
	this.shape_658.setTransform(-259.3,69.1);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#FBD79C").s().p("AABAgQgPgBgGgDQgMgGADgQIAEgYQAFgNARAAIAXAJQAMAHgBAPQgEAggXAAIgDAAg");
	this.shape_659.setTransform(-229.9,157.3);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FBD9A0").s().p("AABAfIgXgGQgOgGAFgSQADgOADgHQAFgNAQADQARADAFACQANAGACAQQgFAFgEATQgFALgLAAIgHgBg");
	this.shape_660.setTransform(-259.2,129.2);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#FBD9A0").s().p("AACAfIgXgFQgOgGAEgSQACgOADgHQAFgNAPABQAQADAHADQANAGADAPQgFAFgEATQgEAMgMAAIgGgBg");
	this.shape_661.setTransform(-259.2,-50.8);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FCBC65").s().p("AhYAKIAfglIAHABQAyALA2gLIAGgBQAGAGANAMQAKAJAAALQgvARgrAAQgtAAgqgSg");
	this.shape_662.setTransform(-205.9,106.6);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#FDC773").s().p("AiLgBQAcAKAqgBIBFgCQAlACBMgBQANAAADgEQAFgDgFgLQgEgDABgEQAAgBABgBQAAAAAAgBQABAAAAAAQABAAAAAAIARgEQAIAAgBAMQgCAJAFAKQAEAOAAAGQiggXifAXQABgTATgIg");
	this.shape_663.setTransform(-205.7,114);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#704E5C").s().p("AgkAaQgYADgEgPIAAgdQANgNAZAAQAfACAGgCQATgGAGARQgEAKAWgBQAUgBgRASQgeAWgfAAQgPAAgRgFg");
	this.shape_664.setTransform(-199.6,91.5);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#8B6A4F").s().p("AgHEYQAAgWgFgoQgHgqAAgTQgBgUACgJQACgQAJgMIAEmEQAIgBAGALQAEAJABARIABAMQAAAQADAPIAAAMIgBAPQgBAIgFAGQgKAJAAAQQgBAJACASIgBGMIgGAJg");
	this.shape_665.setTransform(-223.2,179.6);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#8B6A4F").s().p("AgYB/IAAkBQAYgFAEAUQAFAgABABIAGAEQAIAMABAQQAAAJgCAUIgDANQgCAIgLAUQgHASgCAMIAAAaIACAhQABALgFAJQgFADgFAAQgFAAgFgFg");
	this.shape_666.setTransform(-221,135.9);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#FCAD56").s().p("AiFAXQgFgBAAgEIgBgHIASgUQBNgQAxAAQBFgBA5AZQAUAZgZAAIiBACIgQAAQhBAAgxgDg");
	this.shape_667.setTransform(-205.7,112.6);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#87664D").s().p("AANC/QgOgMgDgEQgGgIgCgIQgBgLAGgNQAFgIgDgKIgFgRIACgYQABgPgDgKQABgQgBgJQgBgNgIgKQgCgDABgIQAJgOgCgTIgGghQgCg8ACgYQAFgsAjAQIAAF6IgIgBg");
	this.shape_668.setTransform(-190.1,142.5);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#FCAF57").s().p("AiUAWQgNgBgHgJIAJgLQAPgVAlgBQBIgBCQABQAiAAASAWIAIALQgHAIgMACIgWAAIj/AAIgMAAIgJAAg");
	this.shape_669.setTransform(-205.8,116.5);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#EAE9B4").s().p("AB7A8IgGgSQgNgegcAQIgWAaQgOAKgRgaQgHgGgKgBIgSABQgNAAgGANIgLAWQgGAEgGgBQgGgCgEgGIgJgUQgGgLgIgFQgXgKgQAWIgLAPQgIAIgLgDIgBhaQAHgGALACQAGACAHAIQAHAHAFACQAVAFAPgHIATgOQAGgDAGABQAHACAIAHQAMAKAIABQATADATgQQAOgIALACQAIADANALQAWALASgNQAFgGACgOQACgPADgGQAEgGAGgCIARAAQAIAagBAoIgBBBQgDAMgQAAQgKgDgFgJg");
	this.shape_670.setTransform(-239,182.9);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#86664B").s().p("AgOC0IgLgBIAAk8QgEgWABgKQACgSAXABQAQAAABASQAAAKgBAUQABAGgBAJIAAAPQgDAIAHAJQAIAKAAAFQAEAPAAAYIAAAlIAAARQgBAQABAfQgBAcgNASQgGApAIAlg");
	this.shape_671.setTransform(-256.2,188.7);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FDC46C").s().p("AigAmIgGgTQgEgKgHgGIgCgYQAAgPAKgJQCkgNCuANQAKAJAAAOQABAJgCAPQgOAOgaABQgoADg+AAIhlgBQgZABgLADQgTAGgKARQgHAHgHAAQgJAAgHgPg");
	this.shape_672.setTransform(-205.7,122.4);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#7F5D45").s().p("AitDoQgLgPAAgXQABgagBgNQgGhWAEhlQAEhIALhzQAHgGAKgDQA1gDBUAAICHAAQAOABAcgDQAIABAGAGIADBPQAPAVgPAUIABEBQAWAggXAdIAAATQgUADgHgLQgEgIgBgUIACgvQAAgbgJgSIgDgBQgFgGgCgHIAAgIIABgIQAGg7gHg9IAFg3QACghgUgUQgUgGgiABQgoAAgOgBQgXAAgHABQgIABgrgBQgfgBgTAIQgRAUACAgQACAygBAFQgBBGACAkQADAcgJAOIgCAAQgJAWABAhIABA3IgDASQgCAEgFAAQgFAAgGgCg");
	this.shape_673.setTransform(-205.4,184.4);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#FCE5B6").s().p("Ai8EDQgsAAgSgSQgSgTAAgtIAAlhQAAgvASgRQATgSAwgBIC8AAIC4ABQAsAAASASQASARAAAqQABC1gBC2QAAAqgSASQgTARgrAAIjbABIiegBg");
	this.shape_674.setTransform(-269.8,-119.3);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FCE5B6").s().p("Ai6EDQgtAAgSgSQgTgSAAgsIAAllQAAgtATgRQASgSAtAAIF1AAQAvAAARASQASATAAAwQABCtgBCuQAAAxgSASQgTASgyABg");
	this.shape_675.setTransform(-209.8,-59.3);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FCE5B6").s().p("AjFEDQgkAAgSgRQgRgSAAgkQgCi7ACi6QAAgmASgRQARgRAngBIDFgBIC+ABQAoAAASASQASASAAAoQABD0gBB8QAAAmgSARQgRASgnAAIjDABIjFgBg");
	this.shape_676.setTransform(-269.8,0.7);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#FCE5B6").s().p("Ai+EDQgqAAgSgSQgSgSAAgrQgBjxABh6QAAgoASgSQASgRAoAAQDAgCC/ACQAqAAASASQASASAAArQABDxgBB6QAAAogSARQgSASgoAAIjBABIi+gBg");
	this.shape_677.setTransform(-149.8,180.7);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#E1DFDB").s().p("AAAgcQAEAPAAANQAAALgEASQgIgcAIgdg");
	this.shape_678.setTransform(-119.2,119.2);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#CEC2B4").s().p("AghgEIBDAAQgRAJgRAAQgPAAgSgJg");
	this.shape_679.setTransform(-51.2,-88.7);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#E1DFDB").s().p("AgBAUIAAgoIADgBIAAArg");
	this.shape_680.setTransform(-59.4,119.3);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#E1DFDB").s().p("AgDgCQgBgNAEgNQAFALAAAPIgFAfQgDgUAAgLg");
	this.shape_681.setTransform(0.7,119.5);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#CEC2B5").s().p("AghgEIBDAAQgRAJgRAAQgPAAgSgJg");
	this.shape_682.setTransform(-37.3,-88.7);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#E1DFDB").s().p("AABAEQgLAAgRgHIA3AAQgKAHgOAAIgDAAg");
	this.shape_683.setTransform(-122.7,31.2);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#CEC2B4").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_684.setTransform(-8.3,-88.7);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#CEC2B4").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_685.setTransform(-68.3,-88.7);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#E1DFDB").s().p("AADgUIAAApQgNgWANgTg");
	this.shape_686.setTransform(60.6,119.3);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#CEC2B4").s().p("AghgEIBDAAQgRAJgRAAQgPAAgSgJg");
	this.shape_687.setTransform(8.7,-88.7);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#E1DFDB").s().p("AgUACIgBgDIArAAIgCADg");
	this.shape_688.setTransform(282.8,91.3);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#E1DFDB").s().p("AgCgZQAEAPABAKQABAMgGAOg");
	this.shape_689.setTransform(120.8,119.5);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#E1DFDB").s().p("AgCgCQABgMAEgNIAAA3QgFgSAAgMg");
	this.shape_690.setTransform(180.6,119.6);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#E1DFDB").s().p("AgCgaQALAggLAVg");
	this.shape_691.setTransform(240.8,118.5);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#E1DFDB").s().p("AgcAAQAcgIAdAIQgPAEgOAAQgJAAgTgEg");
	this.shape_692.setTransform(268.7,91.2);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#E1DFDB").s().p("AACgEIAYABQgIAGgPAAQgVABgHABQAOgKANABg");
	this.shape_693.setTransform(254.4,91.3);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#CEC2B5").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_694.setTransform(-82.3,-88.7);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#E1DFDB").s().p("AgDgBIADgYQAEALAAANIgCAbQgFgNAAgOg");
	this.shape_695.setTransform(240.7,105.5);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#CEC2B5").s().p("AghgEIBDAAQgRAJgRAAQgPAAgSgJg");
	this.shape_696.setTransform(-97.2,-88.7);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#CDC1B4").s().p("AgEghQATAhgTAig");
	this.shape_697.setTransform(-179.2,108.2);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#E1DFDB").s().p("AgDACIACgbQAGANgBAOIgDAYQgEgKAAgOg");
	this.shape_698.setTransform(180.7,104.8);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#CEC2B4").s().p("AghgEIBDAAQgRAJgRAAQgPAAgSgJg");
	this.shape_699.setTransform(-111.2,-88.7);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#E1DFDB").s().p("AgcAAQAMgEAOAAQAIABAXADQgVAEgKABIgCAAQgNAAgLgFg");
	this.shape_700.setTransform(-164.9,31.2);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#E1DFDB").s().p("AgXgBIAvAAQgLADgMAAQgKAAgOgDg");
	this.shape_701.setTransform(-137,-88.6);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#E1DFDB").s().p("AgXgBIAvAAQgLADgMAAQgKAAgOgDg");
	this.shape_702.setTransform(-151,-88.6);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#E1DFDB").s().p("AgZACQANgGAOABIAYADQgKAEgOAAIgbgCg");
	this.shape_703.setTransform(-165.6,-88.8);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#E9D8B5").s().p("AghgEIBDAAIAAAIIgiABIgBAAQgUAAgMgJg");
	this.shape_704.setTransform(-183.3,31.3);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#E1DFDB").s().p("AgDACIACgbQAGANgBAOQAAAIgDAQQgEgLAAgNg");
	this.shape_705.setTransform(120.7,104.8);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#E9D8B5").s().p("AghgEIBDAAIAAAIIgiABIgBAAQgUAAgMgJg");
	this.shape_706.setTransform(-183.3,-88.7);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#E1DFDB").s().p("AgCgDQAAgLAFgOIAAA5QgGgTABgNg");
	this.shape_707.setTransform(60.6,105.7);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#E1DFDB").s().p("AADgZIAAAzQgMgaAMgZg");
	this.shape_708.setTransform(0.6,105.6);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#E1DFDB").s().p("AACgXIAAAvQgJgWAJgZg");
	this.shape_709.setTransform(-59.4,105.5);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#E1DFDB").s().p("AgEgCQAAgOAEgMQAFAMAAAOQgBAIgEAXQgDgVgBgKg");
	this.shape_710.setTransform(-119.3,105.6);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#E1DFDB").s().p("AADAFIgfgFQAUgDALAAQANgBANAEQgKAFgOAAIgCAAg");
	this.shape_711.setTransform(-151.6,31.2);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#E1DFDB").s().p("AgcABQAPgFANAAQALAAASAEQgQAEgNAAIgCABQgLAAgPgEg");
	this.shape_712.setTransform(-137.2,31.2);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#E1DFDB").s().p("AgDAcIAAg3IAHAAIAAA3g");
	this.shape_713.setTransform(-119.3,147.8);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#E1DFDB").s().p("AgDAcIAAg3IAHAAIAAA3g");
	this.shape_714.setTransform(-59.3,147.8);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#E1DFDB").s().p("AgDAcIAAg3IAHAAIAAA3g");
	this.shape_715.setTransform(0.7,147.8);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#E1DFDB").s().p("AgDAcIAAg3IAHAAIAAA3g");
	this.shape_716.setTransform(60.7,147.8);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#E1DFDB").s().p("AgEAcIAAg3IAIAAIAAA3g");
	this.shape_717.setTransform(120.7,147.8);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#E1DFDB").s().p("AgDAcIAAg3IAHAAIAAA3g");
	this.shape_718.setTransform(180.7,147.8);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#E1DFDB").s().p("AgDAcIAAg3IAHAAIAAA3g");
	this.shape_719.setTransform(240.7,147.8);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#E1DFDB").s().p("AgDgcQAHASAAALQACAPgJANg");
	this.shape_720.setTransform(180.7,27.8);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#E1DFDB").s().p("AgDgcQAHASAAALQACAPgJANg");
	this.shape_721.setTransform(120.7,27.8);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#E1DFDB").s().p("AgDgcQAHASAAALQACAPgJANg");
	this.shape_722.setTransform(60.7,27.8);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#E1DFDB").s().p("AgDgcQAHASAAALQACAPgJANg");
	this.shape_723.setTransform(0.7,27.8);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#E1DFDB").s().p("AgDgcQAHASAAALQACAPgJANg");
	this.shape_724.setTransform(-59.3,27.8);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#EAD9B7").s().p("AgigEIBFAAQgSAJgRAAQgQAAgSgJg");
	this.shape_725.setTransform(-165.3,151.3);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#EAD9B6").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_726.setTransform(-151.3,151.3);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#E9D8B6").s().p("AgigEIBFAAQgSAJgRAAQgQAAgSgJg");
	this.shape_727.setTransform(-137.3,151.3);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#CEC2B5").s().p("AgEghQAUAhgUAig");
	this.shape_728.setTransform(-179.2,-111.8);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#E9D9B9").s().p("AghgEIBEAAQgSAJgRAAQgQAAgRgJg");
	this.shape_729.setTransform(-105.3,151.3);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#E9D9B8").s().p("AgigEIBEAAQgQAJgSAAQgQAAgSgJg");
	this.shape_730.setTransform(-91.3,151.3);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#E8D8B7").s().p("AgDAcIAAg3IAHAAIAAA3g");
	this.shape_731.setTransform(180.7,-92.2);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#E8D8B7").s().p("AgDAcIAAg3IAHAAIAAA3g");
	this.shape_732.setTransform(120.7,-92.2);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#E9D8B5").s().p("AgEAiIAAhDQAJAMAAAVIgBAig");
	this.shape_733.setTransform(60.7,-92.8);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#E8D8B7").s().p("AgDAcIAAg3IAHAAIAAA3g");
	this.shape_734.setTransform(0.7,-92.2);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#E8D8B7").s().p("AgEAiIAAhDQAJAMAAAVIgBAig");
	this.shape_735.setTransform(-59.2,-92.8);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#CDC2B4").s().p("AgDghQATAhgUAig");
	this.shape_736.setTransform(-179.2,122.2);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#CEC2B4").s().p("AgEghQAUAhgUAig");
	this.shape_737.setTransform(-179.2,-97.8);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#E9D9B6").s().p("AgEgiQAVAjgVAhg");
	this.shape_738.setTransform(-119.2,-98.8);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#E8D8B7").s().p("AgEgiQAJANAAAVQgBAeABAEIgJABg");
	this.shape_739.setTransform(240.7,27.2);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#E1DFDB").s().p("AADgaIAAA1QgMggAMgVg");
	this.shape_740.setTransform(-119.3,133.9);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#E1DFDB").s().p("AgBgVIADACIAAAoIgDABg");
	this.shape_741.setTransform(-59.1,133.1);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#E1DFDB").s().p("AgEgCQAAgOAEgMQAFAMAAAOQgBAIgEAXQgDgVgBgKg");
	this.shape_742.setTransform(0.7,133.6);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#E1DFDB").s().p("AgDAAQAAgKADgSQAIAcgIAdQgDgPAAgOg");
	this.shape_743.setTransform(60.7,133.2);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#E1DFDB").s().p("AgEgDQAAgPAEgLQAFANAAAOQgBALgEAVIgEghg");
	this.shape_744.setTransform(120.7,133.6);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#E1DFDB").s().p("AgDAAQAAgKADgSQAIAcgIAdQgDgPAAgOg");
	this.shape_745.setTransform(180.7,133.2);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#E1DFDB").s().p("AADgaIAAA1QgMggAMgVg");
	this.shape_746.setTransform(240.7,133.9);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#CEC2B5").s().p("AgEghQAUAhgUAig");
	this.shape_747.setTransform(-179.2,136.2);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#E1DFDB").s().p("AABAEQgLAAgSgHIA5AAQgLAHgOAAIgDAAg");
	this.shape_748.setTransform(-2.8,31.2);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#E1DFDB").s().p("AgCgZQAGAOgBAMQgBAIgEAQg");
	this.shape_749.setTransform(60.7,-75.1);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#E1DFDB").s().p("AgCgZQAGAOgBAMQgBAIgEARg");
	this.shape_750.setTransform(0.7,-75.1);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#E1DFDB").s().p("AgEADIAEgfQAEAUABALQAAANgFANQgEgLAAgPg");
	this.shape_751.setTransform(-119.3,58.8);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#E1DFDB").s().p("AgCgcQAFATAAANQgBALgEAOg");
	this.shape_752.setTransform(-59.2,58.7);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#E1DFDB").s().p("AgCgUQANAXgNASg");
	this.shape_753.setTransform(0.7,59.1);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#E1DFDB").s().p("AAAgXQAFALgBAMIgDAXQgKgXAJgXg");
	this.shape_754.setTransform(60.7,59);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#E1DFDB").s().p("AACgXIAAAvQgJgWAJgZg");
	this.shape_755.setTransform(120.5,59.5);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#E1DFDB").s().p("AgBgVIADACIAAAoIgDABg");
	this.shape_756.setTransform(180.8,59.1);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#E1DFDB").s().p("AAAgbQAEAOAAANQAAALgEARQgIgbAIgcg");
	this.shape_757.setTransform(240.7,59.2);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#E1DFDB").s().p("AgdAAQANgEAOABQALAAAVAEIghAEIgCAAQgOAAgKgFg");
	this.shape_758.setTransform(-16.9,31.2);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#E1DFDB").s().p("AgBgVIADACIAAApIgDAAg");
	this.shape_759.setTransform(-59.1,-74.8);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#E1DFDB").s().p("AAAgcQAEAPAAANQAAALgEASQgIgcAIgdg");
	this.shape_760.setTransform(-119.2,-74.8);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#E1DFDB").s().p("AgXgBIAvAAQgLADgMAAQgKAAgOgDg");
	this.shape_761.setTransform(-31,31.4);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#E1DFDB").s().p("AgbAAQAQgDALAAQAMgBAQAEQgOAFgOAAQgJAAgSgFg");
	this.shape_762.setTransform(-45.3,31.2);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#CDC2B4").s().p("AgDghQATAhgUAig");
	this.shape_763.setTransform(-179.2,62.2);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#CEC2B4").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_764.setTransform(231.7,-88.7);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#CEC2B5").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_765.setTransform(217.7,-88.7);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#CEC2B5").s().p("AghgEIBDAAQgRAJgRAAQgPAAgSgJg");
	this.shape_766.setTransform(202.7,-88.7);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#CEC2B4").s().p("AghgEIBDAAQgRAJgRAAQgPAAgSgJg");
	this.shape_767.setTransform(188.7,-88.7);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#E1DFDB").s().p("AABAEQgFgBgYgGIA5AAQgKAHgNAAIgFAAg");
	this.shape_768.setTransform(-62.7,31.2);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#CEC2B4").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_769.setTransform(111.7,-88.7);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#CEC2B5").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_770.setTransform(97.7,-88.7);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#E1DFDB").s().p("AAAgcQAEAPAAANQAAAKgEATQgIgcAIgdg");
	this.shape_771.setTransform(-119.2,73.2);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#E1DFDB").s().p("AAAAEQgKAAgRgHIA3AAQgKAHgOAAIgEAAg");
	this.shape_772.setTransform(57.2,31.2);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#E1DFDB").s().p("AgUgCIApAAQgMAFgJAAQgLAAgJgFg");
	this.shape_773.setTransform(74.8,31.3);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#E1DFDB").s().p("AgBAEQgPgCgIAAQAJgFANAAIAbgBQgLAJgOAAIgBgBg");
	this.shape_774.setTransform(88.9,31.2);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#E1DFDB").s().p("AgdAAQANgEAOABQALAAAVAEIghAEIgCAAQgOAAgKgFg");
	this.shape_775.setTransform(103.1,31.2);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#E1DFDB").s().p("AABAEQgLAAgRgHIA3AAQgKAHgOAAIgDAAg");
	this.shape_776.setTransform(117.2,31.2);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#E1DFDB").s().p("AgXgBIAvAAQgLADgMAAQgKAAgOgDg");
	this.shape_777.setTransform(135,31.4);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#E1DFDB").s().p("AgcAAQALgEAPAAIAfAEQgUAEgLABQgNAAgNgFg");
	this.shape_778.setTransform(149,31.2);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#E1DFDB").s().p("AgagCIA1AAQgTAFgLAAQgMgBgLgEg");
	this.shape_779.setTransform(163.3,31.4);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#E1DFDB").s().p("AABAEQgLAAgSgHIA5AAQgLAHgOAAIgDAAg");
	this.shape_780.setTransform(177.2,31.2);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#E1DFDB").s().p("AgcAAQAMgEAOAAQAIABAXADQgVAEgKABIgCAAQgNAAgLgFg");
	this.shape_781.setTransform(195.1,31.2);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#E1DFDB").s().p("AADAFIgfgFQAUgDALAAQANgBANAEQgKAFgOAAIgCAAg");
	this.shape_782.setTransform(208.3,31.2);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#E1DFDB").s().p("AgVACIAAgDIArAAIgCADg");
	this.shape_783.setTransform(222.8,31.4);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#E1DFDB").s().p("AAAAEQgKgBgSgHIA5AAQgMAJgOAAIgDgBg");
	this.shape_784.setTransform(237.2,31.3);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#E1DFDB").s().p("AgagCIA1AAQgTAFgLAAQgMgBgLgEg");
	this.shape_785.setTransform(43.3,31.4);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#E1DFDB").s().p("AgaADQAggLAVALg");
	this.shape_786.setTransform(28,31.1);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#CDC1B4").s().p("AgEghQATAhgTAig");
	this.shape_787.setTransform(-179.2,-71.8);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#E1DFDB").s().p("AAAgcQAEAPAAANQAAAKgEATQgIgcAIgdg");
	this.shape_788.setTransform(180.7,-74.7);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#E1DFDB").s().p("AgCADQgMgBgNgEIA3AAQgRAFgLAAIgCAAg");
	this.shape_789.setTransform(15.1,31.3);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#E1DFDB").s().p("AgCgZQAGAQgBALQAAALgFANg");
	this.shape_790.setTransform(-119.2,44.8);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#E1DFDB").s().p("AgCgZQAGAQgBALQAAALgFANg");
	this.shape_791.setTransform(-59.2,44.8);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#E1DFDB").s().p("AgCgCQABgLAEgOIAAA2QgFgRAAgMg");
	this.shape_792.setTransform(0.6,45.7);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#E1DFDB").s().p("AgBgVIADAAIAAArIgDABg");
	this.shape_793.setTransform(60.7,45.1);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#E1DFDB").s().p("AgCgCQABgLAEgOIAAA2QgFgRAAgMg");
	this.shape_794.setTransform(120.6,45.7);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#E1DFDB").s().p("AgEgDQAAgOAEgMQAFANAAAOQgBAKgEAWIgEghg");
	this.shape_795.setTransform(180.7,45.7);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#E1DFDB").s().p("AgDgBIADgYQAEALAAANIgCAaQgGgNABgNg");
	this.shape_796.setTransform(240.7,45.6);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#CDC1B4").s().p("AgEghQATAhgTAig");
	this.shape_797.setTransform(-179.2,48.2);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#E1DFDB").s().p("AADgaIAAA1QgMghAMgUg");
	this.shape_798.setTransform(120.7,-74);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#E1DFDB").s().p("AgXACQAWgJAZAJg");
	this.shape_799.setTransform(-165.5,91);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#E1DFDB").s().p("AgCADQgMgBgNgEIA3AAQgRAFgLAAIgCAAg");
	this.shape_800.setTransform(-150.8,91.3);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#E1DFDB").s().p("AgcAAQAPgDANAAQALAAASADQgPAEgOAAQgNAAgPgEg");
	this.shape_801.setTransform(-137.3,91.2);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#E1DFDB").s().p("AABAEQgLAAgRgHIA3AAQgKAHgOAAIgDAAg");
	this.shape_802.setTransform(-122.7,91.2);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#E1DFDB").s().p("AgdAAQANgEAOABQALAAAVAEIghAEIgCAAQgOAAgKgFg");
	this.shape_803.setTransform(-104.8,91.2);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#E1DFDB").s().p("AgUgCIApAAQgMAFgJAAQgLAAgJgFg");
	this.shape_804.setTransform(-91.1,91.2);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#E1DFDB").s().p("AgBAFQgQgCgIABQAIgGAPAAQAVgBAHgBQgNAJgNAAIgBAAg");
	this.shape_805.setTransform(-77,91);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#E1DFDB").s().p("AABAEQgLAAgSgHIA5AAQgLAHgOAAIgDAAg");
	this.shape_806.setTransform(-62.7,91.2);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#E1DFDB").s().p("AAAACIgWgEIAtAAQgIAFgKAAIgFgBg");
	this.shape_807.setTransform(-45.3,91.3);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#E1DFDB").s().p("AgUgCIApAAQgMAFgJAAQgKAAgKgFg");
	this.shape_808.setTransform(-31.2,91.2);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#E1DFDB").s().p("AAAADQgLgBgOgEIAzAAQgOAFgMAAIAAAAg");
	this.shape_809.setTransform(-16.9,91.3);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#E1DFDB").s().p("AABAEQgLAAgSgHIA5AAQgLAHgOAAIgDAAg");
	this.shape_810.setTransform(-2.8,91.2);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#E1DFDB").s().p("AgWACIACgDIArAAIAAADg");
	this.shape_811.setTransform(14.7,91.2);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#E1DFDB").s().p("AgXgBIAvAAQgLADgMAAQgKAAgOgDg");
	this.shape_812.setTransform(29,91.3);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#E1DFDB").s().p("AAAADQgLgBgOgEIAzAAQgOAFgMAAIAAAAg");
	this.shape_813.setTransform(43.1,91.3);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#E1DFDB").s().p("AAAAEQgKAAgRgHIA3AAQgKAHgOAAIgEAAg");
	this.shape_814.setTransform(57.2,91.2);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#E1DFDB").s().p("AgUADQAXgNASANg");
	this.shape_815.setTransform(74.6,91.1);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#E1DFDB").s().p("AgcAAQAPgDANAAQALAAASADQgPAEgOAAQgNAAgPgEg");
	this.shape_816.setTransform(88.7,91.2);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#E1DFDB").s().p("AgcAAQAMgEAOAAQAIABAXADQgVAEgKABIgCAAQgNAAgLgFg");
	this.shape_817.setTransform(103.1,91.2);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#E1DFDB").s().p("AABAEQgLAAgRgHIA3AAQgKAHgOAAIgDAAg");
	this.shape_818.setTransform(117.2,91.2);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#E1DFDB").s().p("AgCADQgMgBgNgEIA3AAQgRAFgLAAIgCAAg");
	this.shape_819.setTransform(135.1,91.3);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#E1DFDB").s().p("AgCADQgMgBgNgEIA3AAQgRAFgLAAIgCAAg");
	this.shape_820.setTransform(149.1,91.3);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#E1DFDB").s().p("AgZADQAPgEAKgBQAMgBAOAGg");
	this.shape_821.setTransform(163,91.1);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#E1DFDB").s().p("AABAEQgLAAgSgHIA5AAQgLAHgOAAIgDAAg");
	this.shape_822.setTransform(177.2,91.2);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#E1DFDB").s().p("AgagCIA1AAQgRAFgMAAQgOAAgKgFg");
	this.shape_823.setTransform(195.4,91.2);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#E1DFDB").s().p("AgaADQAggLAVALg");
	this.shape_824.setTransform(208,91.1);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#E1DFDB").s().p("AgXgBIAvAAQgLADgMAAQgKAAgOgDg");
	this.shape_825.setTransform(223,91.3);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#E1DFDB").s().p("AAAAEQgEgBgYgGIA5AAQgKAHgNAAIgGAAg");
	this.shape_826.setTransform(237.2,91.2);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#E1DFDB").s().p("AgDAAQAAgKADgSQAIAcgIAdQgDgPAAgOg");
	this.shape_827.setTransform(-59.3,73.2);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#E1DFDB").s().p("AgBAUIAAgoIADgBIAAArg");
	this.shape_828.setTransform(0.6,73.3);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#E1DFDB").s().p("AgDAAQAAgKADgSQAIAcgIAdQgDgPAAgOg");
	this.shape_829.setTransform(60.7,73.2);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#E1DFDB").s().p("AgEAAQAAgJAEgSQAEAPAAAMQABAMgEAQQgFgOAAgOg");
	this.shape_830.setTransform(120.7,73.2);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#E1DFDB").s().p("AgEgCQAAgOAEgMQAFAMAAAOQgBAIgEAXQgDgVgBgKg");
	this.shape_831.setTransform(180.7,73.6);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#E1DFDB").s().p("AgBgVIADACIAAApIgDAAg");
	this.shape_832.setTransform(240.8,73.1);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#E1DFDB").s().p("AgcAAQAMgEAOAAQAIABAXADQgVAEgKABIgCAAQgNAAgLgFg");
	this.shape_833.setTransform(-76.9,31.2);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#CEC2B5").s().p("AgEghQAUAigUAhg");
	this.shape_834.setTransform(-179.2,76.2);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#CEC2B5").s().p("AghgEIBDAAQgRAJgRAAQgPAAgSgJg");
	this.shape_835.setTransform(82.7,-88.7);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#CEC2B4").s().p("AghgEIBDAAQgRAJgRAAQgPAAgSgJg");
	this.shape_836.setTransform(68.7,-88.7);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#CEC2B4").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_837.setTransform(51.7,-88.7);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#E1DFDB").s().p("AgDgcQAHASAAALQACAPgJANg");
	this.shape_838.setTransform(-119.3,87.7);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#E1DFDB").s().p("AgDgcQAHASAAALQACAPgJANg");
	this.shape_839.setTransform(-59.3,87.7);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#E1DFDB").s().p("AgDgcQAHASAAALQACAPgJANg");
	this.shape_840.setTransform(0.7,87.7);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#E1DFDB").s().p("AgDgcQAHASAAALQACAPgJANg");
	this.shape_841.setTransform(60.7,87.7);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#E1DFDB").s().p("AgDgcQAHASAAALQACAPgJANg");
	this.shape_842.setTransform(120.7,87.7);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#E1DFDB").s().p("AgDgcQAHASAAALQACAPgJANg");
	this.shape_843.setTransform(180.7,87.7);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#E1DFDB").s().p("AgEgcQAHASABAKQABAQgJANg");
	this.shape_844.setTransform(240.7,87.7);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#CEC2B5").s().p("AghgEIBDAAQgSAJgQAAQgQAAgRgJg");
	this.shape_845.setTransform(37.7,-88.7);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#E1DFDB").s().p("AgcAAQAPgDANAAQALAAASADQgPAEgOAAQgNAAgPgEg");
	this.shape_846.setTransform(-91.3,31.2);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#CEC2B5").s().p("AghgEIBDAAQgRAJgRAAQgPAAgSgJg");
	this.shape_847.setTransform(22.7,-88.7);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#E1DFDB").s().p("AgcAAQAMgEAOAAQAIABAXADQgVAEgKABIgCAAQgNAAgLgFg");
	this.shape_848.setTransform(-104.9,31.2);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#E9D8B5").s().p("AgbAEIAAgIIA3AAIAAAIg");
	this.shape_849.setTransform(-182.7,91.2);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#E1DFDB").s().p("AgBgVIADACIAAApIgDAAg");
	this.shape_850.setTransform(0.8,-14.8);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#E1DFDB").s().p("AgDAAQAAgKADgSQAIAcgIAdQgDgPAAgOg");
	this.shape_851.setTransform(-59.3,-14.8);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#E1DFDB").s().p("AAAgcQAEAPAAANQAAALgEASQgIgcAIgdg");
	this.shape_852.setTransform(-119.2,-14.8);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#E1DFDB").s().p("AgDgbQAHARAAALQACAPgJAMg");
	this.shape_853.setTransform(0.7,-32.2);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#E1DFDB").s().p("AgDgbQAHARAAALQACAPgJAMg");
	this.shape_854.setTransform(60.7,-32.2);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#E1DFDB").s().p("AgDgbQAHARAAALQACAPgJAMg");
	this.shape_855.setTransform(120.7,-32.2);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#E1DFDB").s().p("AgDgbQAHARAAALQACAPgJAMg");
	this.shape_856.setTransform(180.7,-32.2);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#E1DFDB").s().p("AgbAFIAAgJIA3AAIAAAJg");
	this.shape_857.setTransform(237.3,-28.8);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#E1DFDB").s().p("AgZgCIAzAAQgPAEgKABIgBAAQgMAAgNgFg");
	this.shape_858.setTransform(222.4,-28.7);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#E1DFDB").s().p("AgZADQAZgMAaAMg");
	this.shape_859.setTransform(208.3,-28.8);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#E1DFDB").s().p("AgVACIAAgDIArAAIgCADg");
	this.shape_860.setTransform(194.8,-28.6);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#E1DFDB").s().p("AABAEQgLAAgSgHIA5AAQgLAHgOAAIgDAAg");
	this.shape_861.setTransform(177.2,-28.8);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#CEC2B5").s().p("AgEghQAUAhgUAig");
	this.shape_862.setTransform(-179.2,-43.7);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#E9D9B6").s().p("AgEgiQAVAigVAjg");
	this.shape_863.setTransform(240.8,-38.8);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#E9D9B8").s().p("AgEgiQAVAjgVAhg");
	this.shape_864.setTransform(240.8,-0.8);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#E1DFDB").s().p("AgEgCQAAgOAEgMQAFAMAAAOQgBAIgEAXQgDgVgBgKg");
	this.shape_865.setTransform(180.7,-0.4);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#E1DFDB").s().p("AgCgCQABgMAEgNIAAA3QgFgSAAgMg");
	this.shape_866.setTransform(120.6,-0.3);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#E1DFDB").s().p("AgCgUQANAXgNASg");
	this.shape_867.setTransform(60.7,-0.9);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#E1DFDB").s().p("AgEADIAEgfQAEAUABALQAAANgFANQgEgLAAgPg");
	this.shape_868.setTransform(0.7,-1.1);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#E1DFDB").s().p("AgCgUQANAXgNASg");
	this.shape_869.setTransform(-59.2,-0.9);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#E1DFDB").s().p("AADgUIAAApQgNgWANgTg");
	this.shape_870.setTransform(-119.3,-0.6);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#E1DFDB").s().p("AgDgbQAHARAAALQACAPgJAMg");
	this.shape_871.setTransform(-119.3,-32.2);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#E1DFDB").s().p("AgDgbQAHARAAALQACAPgJAMg");
	this.shape_872.setTransform(-59.3,-32.2);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#CDC1B4").s().p("AgEghQATAhgTAig");
	this.shape_873.setTransform(-179.2,-11.8);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#E9D9B9").s().p("AgEghQAUAhgUAjg");
	this.shape_874.setTransform(240.8,-14.8);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#E1DFDB").s().p("AAAgcQAEAPAAANQAAALgEASQgIgcAIgdg");
	this.shape_875.setTransform(180.7,-14.8);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#E1DFDB").s().p("AAAgcQAEAPAAANQAAALgEASQgIgcAIgdg");
	this.shape_876.setTransform(120.7,-14.8);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#E1DFDB").s().p("AgBAUIAAgpIADAAIAAArg");
	this.shape_877.setTransform(60.6,-14.7);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#E1DFDB").s().p("AgcAAQAQgDAMAAQAMgBARAEQgPAFgOAAQgJAAgTgFg");
	this.shape_878.setTransform(-45.3,-28.8);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#E1DFDB").s().p("AABAEIgdgHIA5AAQgKAHgOAAIgEAAg");
	this.shape_879.setTransform(-62.7,-28.8);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#E1DFDB").s().p("AADAFQgIgBgXgEQAVgDAKgBQAOAAAMAEQgKAFgOAAIgCAAg");
	this.shape_880.setTransform(-77.7,-28.8);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#E1DFDB").s().p("AgUADQAXgNASANg");
	this.shape_881.setTransform(-91.4,-28.8);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#E1DFDB").s().p("AgUgCIApAAQgMAFgJAAQgLAAgJgFg");
	this.shape_882.setTransform(-105.1,-28.7);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#E1DFDB").s().p("AABAEQgFgBgXgGIA3AAQgJAHgNAAIgFAAg");
	this.shape_883.setTransform(-122.7,-28.8);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#E1DFDB").s().p("AAAAEQgRgCgHAAQAIgFAPAAIAagBQgLAJgOAAIAAgBg");
	this.shape_884.setTransform(-137,-28.8);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#E1DFDB").s().p("AgdAAQANgEAOABQALAAAVAEIghAEIgCAAQgOAAgKgFg");
	this.shape_885.setTransform(-150.8,-28.8);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#E1DFDB").s().p("AgUACIgBgDIArAAIgCADg");
	this.shape_886.setTransform(-165.2,-28.6);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#E8D8B7").s().p("AghgEIBDAAIAAAIIgiABIgBAAQgUAAgMgJg");
	this.shape_887.setTransform(-183.3,-28.7);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#E1DFDB").s().p("AgcABQAPgFANAAQAKAAATAEQgRAEgMAAIgCABQgLAAgPgEg");
	this.shape_888.setTransform(162.7,-28.8);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#E1DFDB").s().p("AgagCIA1AAQgRAFgMAAQgOAAgKgFg");
	this.shape_889.setTransform(149.4,-28.8);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#E1DFDB").s().p("AADAFQgIgBgXgEQAVgDAKgBQAOAAAMAEQgKAFgOAAIgCAAg");
	this.shape_890.setTransform(134.3,-28.8);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#E1DFDB").s().p("AABAEQgLAAgRgHIA3AAQgKAHgOAAIgDAAg");
	this.shape_891.setTransform(117.2,-28.8);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#E1DFDB").s().p("AgdAAQANgEAOABQALAAAVAEIghAEIgCAAQgOAAgKgFg");
	this.shape_892.setTransform(103.1,-28.8);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#E1DFDB").s().p("AgXgBIAvAAQgLADgMAAQgKAAgOgDg");
	this.shape_893.setTransform(89,-28.6);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#E1DFDB").s().p("AgcAAQAPgDANAAQALAAASADQgPAEgOAAQgNAAgPgEg");
	this.shape_894.setTransform(74.7,-28.8);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#E1DFDB").s().p("AAAAEQgKAAgRgHIA3AAQgKAHgOAAIgEAAg");
	this.shape_895.setTransform(57.2,-28.8);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#E1DFDB").s().p("AgXACQAVgJAaAJg");
	this.shape_896.setTransform(42.4,-28.9);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#E1DFDB").s().p("AgUACIgBgDIArAAIgCADg");
	this.shape_897.setTransform(28.8,-28.6);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#E1DFDB").s().p("AgcAAQAMgEAOAAQAIABAXADQgVAEgKABIgCAAQgNAAgLgFg");
	this.shape_898.setTransform(15.1,-28.8);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#E1DFDB").s().p("AABAEQgLAAgSgHIA5AAQgLAHgOAAIgDAAg");
	this.shape_899.setTransform(-2.8,-28.8);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#E1DFDB").s().p("AgXACQAVgJAaAJg");
	this.shape_900.setTransform(-17.6,-28.9);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#E1DFDB").s().p("AgaADQAggLAVALg");
	this.shape_901.setTransform(-32,-28.9);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#E1DFDB").s().p("AADgUIAAApQgNgWANgTg");
	this.shape_902.setTransform(60.6,-60.6);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#CEC2B5").s().p("AgEghQAUAigUAhg");
	this.shape_903.setTransform(-179.2,16.3);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#E1DFDB").s().p("AgBgVIADACIAAAoIgDABg");
	this.shape_904.setTransform(120.8,-60.8);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#E8D8B8").s().p("AgEgiQAVAigVAjg");
	this.shape_905.setTransform(240.8,13.2);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#E1DFDB").s().p("AgCgCQABgMAEgNIAAA3QgFgSAAgMg");
	this.shape_906.setTransform(180.6,13.7);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#E1DFDB").s().p("AAAgcQAEAPAAANQAAALgEASQgIgcAIgdg");
	this.shape_907.setTransform(120.7,13.2);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#EADAB7").s().p("AgEgiQAUAigUAig");
	this.shape_908.setTransform(-119.2,-126.8);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#CEC2B5").s().p("AgEghQAUAigUAhg");
	this.shape_909.setTransform(-179.2,-126.7);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#E1DFDB").s().p("AgCgbQAFASAAAMQgBAMgEANg");
	this.shape_910.setTransform(60.8,12.8);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#E1DFDB").s().p("AgDAAQAAgKADgSQAIAcgIAdQgDgPAAgOg");
	this.shape_911.setTransform(0.7,13.2);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#E8D8B8").s().p("AgigEIBFAAQgSAJgRAAQgQAAgSgJg");
	this.shape_912.setTransform(-77.3,151.3);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#E1DFDB").s().p("AgDgcQAHASAAALQACAPgJANg");
	this.shape_913.setTransform(-119.3,27.8);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#E9D9B9").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_914.setTransform(-45.3,151.3);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#E9D9B8").s().p("AgigEIBEAAQgQAJgSAAQgQAAgSgJg");
	this.shape_915.setTransform(-31.3,151.3);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#E8D8B8").s().p("AgigEIBFAAQgSAJgRAAQgQAAgSgJg");
	this.shape_916.setTransform(-17.3,151.3);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#EAD9B6").s().p("AgEghQAUAhgUAjg");
	this.shape_917.setTransform(-119.2,-112.8);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#EAD9B7").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_918.setTransform(14.7,151.3);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#EAD9B6").s().p("AgigEIBFAAQgSAJgRAAQgPAAgTgJg");
	this.shape_919.setTransform(28.7,151.3);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#E9D8B6").s().p("AgigEIBFAAQgSAJgRAAQgQAAgSgJg");
	this.shape_920.setTransform(42.7,151.3);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#E9D9B9").s().p("AgigEIBEAAQgRAJgRAAQgQAAgSgJg");
	this.shape_921.setTransform(74.7,151.3);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#E9D9B8").s().p("AghgEIBEAAQgRAJgSAAQgQAAgRgJg");
	this.shape_922.setTransform(88.7,151.3);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#E8D8B8").s().p("AgigEIBFAAQgSAJgRAAQgQAAgSgJg");
	this.shape_923.setTransform(102.7,151.3);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#E8D8B7").s().p("AghgEIBEAAQgRAJgSAAQgPAAgSgJg");
	this.shape_924.setTransform(116.7,151.3);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#E9D9B6").s().p("AghgEIBEAAQgRAJgSAAQgPAAgSgJg");
	this.shape_925.setTransform(125.7,151.3);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#E9D8B5").s().p("AgigEIBFAAQgSAJgRAAQgQAAgSgJg");
	this.shape_926.setTransform(139.7,151.3);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#E9D8B5").s().p("AgigEIBFAAQgSAJgRAAQgQAAgSgJg");
	this.shape_927.setTransform(153.7,151.3);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#E9D8B6").s().p("AgigEIBFAAQgTAJgQAAQgQAAgSgJg");
	this.shape_928.setTransform(167.7,151.3);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#EAD9B7").s().p("AghgCIAUgBQAEgIAFAIIAmABQgSAJgQAAQgQAAgRgJg");
	this.shape_929.setTransform(181.7,151.1);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#EAD9B7").s().p("AgigEIBFAAQgSAJgRAAQgQAAgSgJg");
	this.shape_930.setTransform(195.7,151.3);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#E1DFDB").s().p("AgEgBQACgQgBgIQAGAIAAAPQABAVABAHQgKgOABgNg");
	this.shape_931.setTransform(-119.1,-60.5);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#EAD9B7").s().p("AghgEIBEAAQgSAJgRAAQgQAAgRgJg");
	this.shape_932.setTransform(224.7,151.3);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#E1DFDB").s().p("AgDAAQAAgKADgSQAIAcgIAdQgDgPAAgOg");
	this.shape_933.setTransform(-59.3,-60.8);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#E1DFDB").s().p("AgDgCQgBgNAEgNQAFALAAAPIgFAfQgDgUAAgLg");
	this.shape_934.setTransform(0.7,-60.4);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#E9D9B9").s().p("AgigEIBFAAQgSAJgRAAQgQAAgSgJg");
	this.shape_935.setTransform(254.7,151.3);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#E9D9B8").s().p("AghgEIBEAAQgRAJgSAAQgQAAgRgJg");
	this.shape_936.setTransform(268.7,151.3);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#E8D8B8").s().p("AgigEIBFAAQgSAJgRAAQgQAAgSgJg");
	this.shape_937.setTransform(282.7,151.3);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#EAD9B6").s().p("AgEghQAUAhgUAig");
	this.shape_938.setTransform(240.8,-52.8);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#CDC2B4").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_939.setTransform(-125.3,-148.7);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#CDC1B3").s().p("AghgEIBDAAQgRAJgRAAQgPAAgSgJg");
	this.shape_940.setTransform(-139.3,-148.7);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#CDC1B3").s().p("AghgEIBDAAQgRAJgRAAQgPAAgSgJg");
	this.shape_941.setTransform(-153.3,-148.7);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#CDC1B4").s().p("AghgEIBDAAQgRAJgRAAQgQAAgRgJg");
	this.shape_942.setTransform(-167.3,-148.7);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#E1DFDB").s().p("AgCgZQAFAPAAALQgBALgEAOg");
	this.shape_943.setTransform(-119.2,-47.2);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#E1DFDB").s().p("AADgZIAAAzQgMgaAMgZg");
	this.shape_944.setTransform(-59.3,-46.4);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#CDC2B4").s().p("AgDghQATAhgUAig");
	this.shape_945.setTransform(-179.2,2.3);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#E1DFDB").s().p("AgDAAIADgWQAKAWgKAXQgEgKABgNg");
	this.shape_946.setTransform(0.7,-46.6);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#E1DFDB").s().p("AgDAAQAAgKADgSQAIAcgIAdQgDgPAAgOg");
	this.shape_947.setTransform(60.7,-46.8);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#E1DFDB").s().p("AADgUIAAApQgNgWANgTg");
	this.shape_948.setTransform(120.6,-46.6);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#E1DFDB").s().p("AgCgbQAFASAAAMQgBAMgEANg");
	this.shape_949.setTransform(180.8,-47.2);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#E1DFDB").s().p("AgCgDQAAgLAFgOIAAA5QgGgTABgNg");
	this.shape_950.setTransform(-59.3,13.7);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#E1DFDB").s().p("AADgUIAAApQgNgWANgTg");
	this.shape_951.setTransform(-119.3,13.4);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#E1DFDB").s().p("AgDACIACgbQAGANgBAOIgDAYQgEgKAAgOg");
	this.shape_952.setTransform(180.7,-61.1);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#CEC2B4").s().p("AgEghQAUAigUAhg");
	this.shape_953.setTransform(-179.2,-140.7);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#EADAB7").s().p("AgEgiQAUAigUAig");
	this.shape_954.setTransform(-119.2,-141.7);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#CDC2B4").s().p("AgDghQATAhgUAig");
	this.shape_955.setTransform(-179.2,-57.7);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#EBDBB9").s().p("AgmgEIBNAAQgUAJgTAAQgSAAgUgJg");
	this.shape_956.setTransform(210.2,151.3);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#E8D8B7").s().p("AghAHIAAgJIA4AAQAGgIAEAIIABAAIgLAJg");
	this.shape_957.setTransform(-182.1,-149);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#EBDBB9").s().p("AgEgmQAUAmgUAng");
	this.shape_958.setTransform(240.8,-67.3);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#EBDBB9").s().p("AgEgmQAUAmgUAng");
	this.shape_959.setTransform(240.8,-81.3);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#EADAB8").s().p("AgOAHQgTAAgLgIIAxgBQAFgIAEAIIAeABQgEAFgJACIgQABIgdAAg");
	this.shape_960.setTransform(239.7,151);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#E1DFDA").s().p("AANABQgFgCgPgCQgRgDgJgFIBCAAQgCAEADAPQgBAEgDAAQgFAAgMgLg");
	this.shape_961.setTransform(-122.1,-88);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#EAD9B6").s().p("AABAnIgOAAIAAhOQALAIgBAeQAAAZAQAHQgDAJgJAAIAAgBg");
	this.shape_962.setTransform(-118.3,-152.2);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#EADAB8").s().p("AgLgjQALAKAAAXQAAAUAKAKQAGAGgKAAQgNAAgDACg");
	this.shape_963.setTransform(241.4,-91.9);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#EAD9B7").s().p("Ag2gCIBFgBQAFgIAEAIIAeABQgbAKgbAAQgaAAgcgKg");
	this.shape_964.setTransform(58.7,151.1);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#EADAB8").s().p("Ag1gCIBEAAQAFgIAEAIIAfAAQgHAHgMABIgWAAIghABIgCAAQgUAAgMgJg");
	this.shape_965.setTransform(-1.3,151);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#E9D9B8").s().p("Ag2gCIBFgBQAFgIAEAIIAfABQgbAKgcAAQgZAAgdgKg");
	this.shape_966.setTransform(-61.3,151.1);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#EAD9B7").s().p("Ag1gCIBEAAQAFgIAFAIIAeAAQgFAFgJACIgQACQgGgCghACIgEAAQgWAAgNgJg");
	this.shape_967.setTransform(-121.3,151);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#F7F7F6").s().p("ABNAeIidAAQgdAAAAgeQAAgdAeAAQBPABBOgBQAQAAAHAGQAIAHABAPQAAAQgIAIQgGAHgPAAIgEAAg");
	this.shape_968.setTransform(90.2,120.7);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#F7F7F6").s().p("AhkAYQgIgGgBgQQAAgQAIgHQAHgIASAAQBNABBQgBQAPAAAHAIQAHAHAAAOQAAAegeAAIidAAIgDAAQgNAAgHgGg");
	this.shape_969.setTransform(-29.8,120.7);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#F7F7F6").s().p("AhkAYQgIgHgBgQQAAgPAIgIQAIgHARAAQBNABBQgBQAPAAAHAIQAHAHAAAOQAAAegeAAIidAAIgCAAQgOAAgHgGg");
	this.shape_970.setTransform(-29.8,0.7);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#F7F7F6").s().p("ABNAeIidAAQgPAAgHgIQgHgHAAgPQAAgdAeAAICdAAQAQAAAHAGQAIAGABAQQAAAQgIAIQgHAHgQAAIgCAAg");
	this.shape_971.setTransform(210.2,120.7);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#F7F7F6").s().p("AhtAAQABgQAIgHQAHgGAQAAQBNABBQgBQAPAAAHAHQAIAHAAAPQAAAPgHAHQgHAIgPAAIidAAIgDAAQgeAAAAgeg");
	this.shape_972.setTransform(-149.8,120.7);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#F7F7F6").s().p("ABKAeIiTAAQgSAAgIgFQgKgHAAgRQAAgQAJgHQAHgHASAAQBLABBNgBQARAAAIAHQAIAHAAAQQAAASgLAGQgHAFgPAAIgDAAg");
	this.shape_973.setTransform(90.2,0.7);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#F7F7F6").s().p("ABMAeIiYAAQgRAAgIgHQgIgHAAgQQABgSAKgGQAIgFARAAICTAAQASAAAIAFQAKAHAAARQAAAQgJAHQgHAHgPAAIgDAAg");
	this.shape_974.setTransform(210.2,60.7);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#F7F7F6").s().p("ABNAeIidAAQgPAAgHgIQgHgHAAgPQAAgdAeAAICdAAQAQAAAHAGQAIAGABAQQAAAQgIAIQgHAHgQAAIgCAAg");
	this.shape_975.setTransform(90.2,60.7);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#F7F7F6").s().p("AhtAAQAAgdAeAAQBQABBSgBQAPAAAHAJQAFAIAAAOQgBAcgaAAIiiAAIgBAAQgdAAAAgeg");
	this.shape_976.setTransform(-149.8,0.7);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#F7F7F6").s().p("ABNAeIidAAQgdAAAAgeQAAgdAeAAQBPABBOgBQAQAAAHAGQAIAHABAPQAAAfgeAAIgDAAg");
	this.shape_977.setTransform(210.2,0.7);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#F7F7F6").s().p("AhtAAQAAgOAHgHQAHgIAPAAQBRABBRgBQAQAAAGAJQAGAIAAAOQgBAcgaAAIiiAAIgBAAQgdAAAAgeg");
	this.shape_978.setTransform(-29.8,60.7);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#F7F7F6").s().p("AhlAXQgIgHAAgQQABgQAHgGQAHgHAQAAQBOABBPgBQAQAAAHAHQAHAHABAPQAAAQgIAHQgIAHgSAAIiYAAIgEAAQgOAAgHgHg");
	this.shape_979.setTransform(-149.8,60.7);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#F7F7F6").s().p("ABOAeIicAAQgfAAAAgeQAAgOAHgHQAHgIAPAAQBQABBSgBQAQAAAGAJQAGAHAAAOQAAAQgIAHQgIAGgOAAIgCAAg");
	this.shape_980.setTransform(210.2,-59.3);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#F7F7F6").s().p("AhkAYQgIgGgBgQQAAgQAIgHQAHgIASAAQBNABBQgBQAPAAAHAIQAHAHAAAOQAAAegeAAIidAAIgDAAQgNAAgHgGg");
	this.shape_981.setTransform(-149.8,-59.3);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#F7F7F6").s().p("AhPAeQgeAAAAgeQAAgdAdAAICdAAQASAAAHAHQAIAIAAAQQgBAPgIAHQgHAGgQAAIidAAg");
	this.shape_982.setTransform(-29.8,-59.3);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#F7F7F6").s().p("AhtACQAAgQAIgHQAHgIASAAQBNABBPgBQAQAAAHAIQAHAHAAAOQAAAegeAAIidAAIgCAAQgdAAgBgcg");
	this.shape_983.setTransform(90.2,-59.3);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#F7F7F6").s().p("AhkAYQgJgHAAgQQAAgOAGgHQAGgJAQAAICiAAQAPAAAHAIQAHAHAAAOQAAAegeAAIidAAIgCAAQgOAAgHgGg");
	this.shape_984.setTransform(-149.8,-119.3);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#DE6D69").s().p("AgZDqIAMgNQAKgLABgRIgBgdIABluIAAggQACgRALgLQAEgBAEABIACFQQAEADgBAEQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgGBkAOBPIg5ABg");
	this.shape_985.setTransform(129.1,-115.7);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#19767F").s().p("AisAJQgBgRAXAAIEzABQADAAAFADIAIAEQABAEgCAFg");
	this.shape_986.setTransform(155.8,-93.3);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#38A099").s().p("AizAXQgWg0A8AEQAngQA8ABIBiACQAmgCAlAPQADABAfAAQAWAAgBAaIgJACIkrgBQgQgBgIABQgOABgJAJIgCAbIgHACQABgOgCgFg");
	this.shape_987.setTransform(155.5,-93.6);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#1C7F89").s().p("ACYAXIlCgEQgOgTASgNQA1gKBRABICEACIAngBQAWABAPAOQADAOgFAHQgEAIgQAAIgCAAg");
	this.shape_988.setTransform(155.4,-91.5);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#FEFEFE").s().p("ABMAeIiYAAQgRAAgIgHQgIgHAAgQQABgQAHgGQAIgHAPAAQBOABBPgBQAPAAAIAHQAHAHABAPQAAAQgJAHQgHAHgPAAIgDAAg");
	this.shape_989.setTransform(-89.8,0.7);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#FEFEFE").s().p("AhlAXQgIgIAAgPQABgQAIgHQAIgGAPAAQBNABBPgBQAQAAAHAHQAHAHAAAPQABAPgHAHQgGAIgQAAIhQAAIhNAAIgCAAQgQAAgHgHg");
	this.shape_990.setTransform(-89.8,60.7);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#FEFEFE").s().p("ABNAeIidAAQgPAAgHgIQgHgHAAgPQAAgOAHgHQAHgIAQAAICcAAQAQAAAHAGQAJAGAAAQQABAQgIAHQgHAIgQAAIgCAAg");
	this.shape_991.setTransform(30.2,0.7);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#FEFEFE").s().p("AhRAdQgPAAgHgIQgGgIABgNQAAgdAaAAICmAAQAOABAGAHQAFAIAAANQABAdgdAAg");
	this.shape_992.setTransform(150.2,-59.2);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#FEFEFE").s().p("ABQAeIidAAQgQAAgHgGQgIgHgBgQQAAgPAIgIQAIgHARAAQBNABBQgBQAdAAAAAdQgBAQgHAHQgGAHgOAAIgCAAg");
	this.shape_993.setTransform(-89.8,-59.3);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#FEFEFE").s().p("ABMAeIiYAAQgRAAgIgHQgIgHAAgQQABgQAHgGQAIgHAPAAQBOABBPgBQAPAAAIAHQAHAHABAPQAAAQgJAHQgHAHgPAAIgDAAg");
	this.shape_994.setTransform(30.2,60.7);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#FEFEFE").s().p("AhlAXQgHgHAAgQQgBgdAdAAQBQABBSgBQAcAAgBAeQAAAQgIAHQgHAGgQAAIicAAIgCAAQgOAAgHgHg");
	this.shape_995.setTransform(150.2,0.7);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#FEFEFE").s().p("ABPAeIicAAQgQAAgHgGQgIgHAAgQQgBgNAGgIQAHgJAPAAQBRABBRgBQAdAAgBAdQAAAegdAAIgBAAg");
	this.shape_996.setTransform(30.2,-59.3);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#FEFEFE").s().p("AhsAAQAAgOAGgHQAHgIAQAAIChABQAQgBAGAJQAGAIgBAOQAAAcgagBIiiABIgBAAQgcAAAAgeg");
	this.shape_997.setTransform(150.2,60.7);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#FEFEFE").s().p("ABNAeIidAAQgPAAgHgIQgHgHABgPQAAgdAdAAQBPABBOgBQAPAAAIAGQAIAHABAPQAAAQgIAIQgHAHgQAAIgCAAg");
	this.shape_998.setTransform(-89.8,120.7);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#FEFEFE").s().p("ABMAeIiXAAQgSAAgIgHQgIgHAAgQQABgPAHgHQAIgHAPAAQBOABBPgBQAQAAAHAHQAHAGABAQQAAAQgIAHQgIAHgPAAIgDAAg");
	this.shape_999.setTransform(270.2,60.7);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#FEFEFE").s().p("ABNAeIidAAQgdAAAAgeQABgdAdAAICdAAQAQAAAHAGQAIAHABAQQAAAPgIAIQgHAHgQAAIgCAAg");
	this.shape_1000.setTransform(30.2,120.7);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#FEFEFE").s().p("ABNAeIiYAAQgSAAgHgHQgJgHAAgQQABgPAHgHQAHgHAQAAQBOABBPgBQAPAAAIAHQAHAGABAQQAAAPgIAIQgIAHgPAAIgCAAg");
	this.shape_1001.setTransform(270.2,120.7);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#FEFEFE").s().p("ABKAeIiTAAQgRAAgIgFQgKgHgBgRQAAgQAJgHQAHgHASAAQBLABBMgBQASAAAHAHQAJAHAAAQQgBASgKAGQgHAFgPAAIgDAAg");
	this.shape_1002.setTransform(150.2,120.7);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#7C7A5C").s().p("AgECbQgLgMABggQAEgrABgVQABglgNgYIgngiQgCgMAHgGQAEgEANgFQAHgCAIgHIAOgLIAJg9QAJgLAQAGQAJADAEATQAEASANADQANALgLAKQgnAiALA5QAAAPAGAwQAGAogEAZIgBAoQgKACgJAAQgQAAgFgJg");
	this.shape_1003.setTransform(-25.6,-105.5);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#FEF5D6").s().p("AkoEjIABghQAAgVgFgMIAAhGQAGgLgCgYQgBgZAGgKQgIgOgBgVIAAgkQAGgLgCgWQgBgXAGgLQgIgOgCgVIABgkQAGgLgCgXQgCgYAIgLQgYgzAYgwQADgGALAAQALgBADgEIAkAAQAVABAOAJQALgHAYACQAYACALgHIAkAAQAUABAPAJQAKgHAYACQAWACALgHIAkAAQAUABAOAJQALgHAYACQAYACALgHIBHAAQAKAHAZgCQAXgCALAHIABCCQAKAjgKAiIAABIQAKAhgLAhIABBHQAKAlgLAhIAABtQggANglgMIhHAAQgjALgjgLIhHAAQghALghgLIhHAAQgkALgigMQgVgCgeAEIgxAIQgFgFAAgIg");
	this.shape_1004.setTransform(-209.5,1.2);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#FEF5D6").s().p("AHdEwIhHABQgkAKghgLIhQAAQghALgkgKIhHgBQghALgkgKIgpgBQgEgIgBgLQgBALgCAIIgzABQgkAKghgLIhlAAQgNgQAGgVQAMgRACgHQADgNgLgPQgLgNgCgcQgCghgFgMQgEgeAHgVQAIgYAYgPQALgDAQAFQAUAGAGAAQAbABAIgBQASgEAFgUQAMgwgmgRQgUgJgJgJQgGgIgBgLIACgTQAGg/g+gUQg2gQgfAyQggA0AyAuIASARQAJALADALQADAQgCAMQgEAQgNAKQgSADgGgOQgEgSgEgIQgOgZgWgEIgNgCQgbACgOANQgQAMACAZQACAZARANQAQAMAbAAQAKAAAOAFQAQAKAHAHQALALABAPIgBA8QgBAjACAYQAEAkgPAPQgOAOgjgGQghALgkgKIhHgBQghALgkgKIgpgBQgGgLACgYQABgYgGgLIAAhGQAGgLgBgYQgCgYAGgLQgIgOgBgUIAAgkQAGgLgBgWQgCgYAGgLQgIgOgCgVIABgkQAGgKgBgYQgCgYAHgLQgXgzAXgwQAQgTAZgEQARgDAeAEQAnANAqgMQAegJAqALQAeAJAogMQAVgGAuAIQAsAHAYgIQAKgDAOgBQAVgCAcAFQA1APA1gPQAOgDARAAQAaAAANADQAhALAbgIQArgLAqALQAfAJAmgMQAkgHAkALQAiAIAmgNIAigCQATACALAOQA1APAIANQAJANAABDQALAhgLAkIAABHQALAigLAhIAABHQALAjgLAjIAABGQALAjgLAjIgzABQgRAFgRAAQgSAAgRgGg");
	this.shape_1005.setTransform(0.4,-119.7);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#E9D8B5").s().p("AgSgDIAkAAIABAFIglADg");
	this.shape_1006.setTransform(-297.8,-28.8);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#E1DFDB").s().p("AgbAFIAAgIIA3AAIAAAIg");
	this.shape_1007.setTransform(297.3,91.2);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#E9D8B5").s().p("AgbAFIAAgIIA3AAIAAAIg");
	this.shape_1008.setTransform(297.3,-88.8);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#E9D9B5").s().p("AgEghQAVAhgVAjg");
	this.shape_1009.setTransform(-299.2,-166.8);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#E8D8B7").s().p("AgbAFIAAgIIA3AAIAAAIg");
	this.shape_1010.setTransform(297.3,-28.8);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#E9D8B5").s().p("AgEghQAVAhgVAjg");
	this.shape_1011.setTransform(-299.2,184.2);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#EBDAB6").s().p("AgEghQAVAhgVAjg");
	this.shape_1012.setTransform(-299.2,-194.8);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#E8D8B7").s().p("AgEAiIAAhEQAJANAAAVIgBAig");
	this.shape_1013.setTransform(-119.2,207.2);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#E8D8B7").s().p("AgEAcIAAg3IAIAAIAAA3g");
	this.shape_1014.setTransform(-59.3,207.8);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#E8D8B7").s().p("AgDAcIAAg3IAIAAIAAA3g");
	this.shape_1015.setTransform(60.7,207.8);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#E8D8B7").s().p("AgEAiIAAhEQAJANAAAVIgBAig");
	this.shape_1016.setTransform(240.7,207.2);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#E9D8B6").s().p("AgEgiQAVAigVAig");
	this.shape_1017.setTransform(-299.2,198.2);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#EADAB5").s().p("AgEgiQAVAigVAig");
	this.shape_1018.setTransform(-299.2,-180.8);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#E8D8B7").s().p("AgigEIBFAAIAAAIIgjABIgBAAQgUAAgNgJg");
	this.shape_1019.setTransform(296.7,151.2);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#E9D9B6").s().p("AgEghQAVAhgVAjg");
	this.shape_1020.setTransform(-299.2,156.2);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#E9D8B5").s().p("AgEgiQAVAigVAig");
	this.shape_1021.setTransform(-299.2,170.2);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#E8D8B7").s().p("AgigEIBEAAIAAAIIgiABIgBAAQgVAAgMgJg");
	this.shape_1022.setTransform(296.7,-148.7);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#845D73").s().p("AgIAVQgCgOABgHQABgKAIgHQAFgGAFAHIAAAlg");
	this.shape_1023.setTransform(-258.9,208.5);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#72445D").s().p("AgSAPIABgLQAHggAWAYIAIATg");
	this.shape_1024.setTransform(197.2,209.1);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#E9D9B5").s().p("AgXAnIAAhOQANAKgDAWQgGAqArgFQgIAKgQAAQgPgCgIABg");
	this.shape_1025.setTransform(-297.3,-152.3);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#774A63").s().p("AgOAWQgPgSAMgTQAKgJAHAEIARAMQAGAGABAIIAAAQg");
	this.shape_1026.setTransform(-256.2,208.4);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#825A6C").s().p("AgYBPIACgUQAFgNADgGQAHgOAAgYIAAglQAAgSACgIQAEgNANgFQABAJgCA7QgCAmAOAZIACAbg");
	this.shape_1027.setTransform(-221.3,202.7);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#7A5066").s().p("AgYBPIADidQATAHACATQAAALAAAWQABAMgBAXQAAAVAQALQAHAFABAKQABAFgBALg");
	this.shape_1028.setTransform(-189.3,202.7);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#F9EDCB").s().p("AB3BYQAOg7gEg8QgBgTgFgFQgHgIgSANIgTAEQgLABgJgFQghgOgxACQg5AEgdgBQgNgBgEALQgDAHAAAQIgCBXQgVgKgCgXQADgbgCgLQgDggAIgWQAEgIAIgFQAWgKAiABIA6ABIAqAAIA6AAQAjgBAWAIQAIAFAFAIIAHBMQABAsgRAhg");
	this.shape_1029.setTransform(-205.7,201.9);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#83624B").s().p("AgqDqQAOhSANiHQAPioAFgwQAAgPABgHQADgMAOAAQAKAAACAKIACASQAHAKgBAJQgDAHgFAEQgIATgBAaIgBAuIgIBFIgOB7QgGBJABA1g");
	this.shape_1030.setTransform(143.6,187.2);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#7C7A5C").s().p("AgVCjQAEhJAFgkQAKhEg6ghQgCgMAHgGQAEgEANgFQAHgCAIgHIAOgLIAJg9QAJgLAQAGQAJADAEATQAEASANADQANALgLAKQgnAiALA5QAAAPAGAwQAGAogEAZIAAAog");
	this.shape_1031.setTransform(-85.6,194.3);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#FDF4D3").s().p("AiNA9QgRgTgEgPQgJgoAMgdQAEgHAGgDQANgEAUAMQAPAEAXgCIAPgGQAJgEAHAAQAQAAAPAMQAQAMACAXIABgHQACgMAKgHIAOgPIANgLQAIgFAJADQAJAIAFAXQALAZAKgLQALgSAGgBQAJgIAKgCQAIgBAGADQAOAKACAXQADAdACAFQADAHgBAIQgCAKgIAKg");
	this.shape_1032.setTransform(-239.5,204.6);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#FEF5D4").s().p("AiBBSQgOgPAAgTQgChgAQgRQAQgQBgAAIAhAAQAUABAOAEQAcAcAcgZQAPgCAJAIQAKAGAAAOIAEBCQgCAmgXAZg");
	this.shape_1033.setTransform(-205.7,202.5);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#FEF5D4").s().p("AkBDXQgPgQgCgXQgCgRAFgYQAFgYAEg2QADgzAHgZIAHgfQAFgTAIgKQAJgLgGgKQgIgKgCgHQgFgfACgPQAEgYAUgQQAvgGANAMQAOALABAvIAABeQgBA3AFAlIAGANQAVAcAOgCQAOgCATggQAEgRgBgaIAAgpIAAhpQABgvANgMQANgMAsAAQASAAAMADQAIADAGAHQAMAjAAA0IAABZIAAAjQAAAWADAPIAFAMQASAcAdgWQAHgJAFgPQAFgagBgnIAAhEIAAg1QgBggAHgUQAGgNANgGQAVgEALAAQASAAANAHQARAOACAaQAEBEAKBhIASCiQADAUgHAUIgKAPg");
	this.shape_1034.setTransform(169.1,189.2);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#FEF5D6").s().p("AkgErQgHgLACgYQABgYgGgLIAAhGQAGgLgBgYQgBgYAFgLQgIgOgBgUIAAgkQAGgLgBgWQgCgYAGgLQgIgOgBgVIAAgkQAGgKgBgYQgCgYAHgLQgXgzAXgwQADgGAMAAQALAAADgFIBGAAQAkAMAjgMIBGAAQAkAMAggMIBFAAQAlAMAigMIBGAAQAKAHAZgCQAYgCALAHIABIuQAAATgHAGQgFAGgTAAIougBg");
	this.shape_1035.setTransform(270.2,180.7);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#FEF5D6").s().p("AAHErQgEgHgBgMQgBALgCAIIjcAAQgNgQAGgUIANgYQAEgOgMgPQgLgNgBgcQgCghgFgLQgEgfAGgVQAIgYAYgOQALgDAQAEQAUAGAHABQAbAAAHgBQASgEAFgUQANgwgmgRQgUgJgKgJQgGgIAAgLIABgTQAHg/g+gUQg2gQgfAzQghAzAyAuIASASQAJAKADALQAEARgDALQgDAQgNAKQgTAEgGgPQgEgSgEgIQgOgZgWgDIgNgCQgaABgOAMQgPANABAWQABAaAQAOQAQANAbAAQAUABASAKQArAiAHA+QAGA+giA5Ik2AAQgGgLACgYQABgXgGgMIAAhGQAGgLgBgYQgCgYAGgKQgIgPgBgUIAAgkQAGgLgBgWQgCgYAGgLQgIgOgCgVIABgkQAGgKgBgYQgCgYAHgLQgXgzAXgwQADgFALgBQALAAAEgEIBGAAQAkALAigLIBGAAQAlALAhgLIBGAAQAlALAigLIBFAAQA2ALA2gLIBGAAQAkALAigLIBGAAQAkALAigLIBGAAQAkALAigLIBGAAQALAGAYgCQAYgCALAIIAAAeQAMAngMAoIAAA9QAMAngMAnIAABFQALAhgLAlIAABHQALAigLAjIAAA8g");
	this.shape_1036.setTransform(-59.6,180.7);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#FDF6D6").s().p("ADjJXIhGAAQgjALgjgLIhGAAQgjALghgLIhHAAQgkALghgLIhHAAQgiAPAAglIABgYQAAgOgGgKIAAhGQAHgLgCgYQgBgYAGgLQgJgOgBgUIAAgkQAHgLgCgYQgCgYAHgLQgJgOgBgVIAAgkQAHgKgCgYQgCgYAHgLQgXgzAXgwQABgGgEgKQgCgGAAgFQgFARgGACQgHADglgFIhHAAQgkAKghgKIhHAAQgnALgngLIhHAAQghAKgkgKIhHAAQgYAJgLgHQgMgFACgbIABgUQAAgLgGgIIAAhGQANgjgNgjIAAhGQANgjgNgjIAAhGQANgjgNgjIgFg8QgCgjALgLQALgLAjACIA8AFIaiAAQgNBAADAuQALAhgLAkIAABHQALAigLAjIAABHQALAjgLAjIAABGQAMAmgMAfIgVAAQgiAKgigKIhIAAQgiAJgigJIhIAAQgiAJgigJIhIAAQgiAKgigKIhRAAIgEgFIgBgKQgBANgHAFQgHABggAAIAAABIgFAAQgFAAACAEQADAGAFgKIASgBQAPgBAJAGIABApQAKAkgLAhIABBHQAKAkgLAhIAABQQALAhgKAkIgBBHQALAhgKAkIgBAzQgQAGgSAAQgRAAgTgGg");
	this.shape_1037.setTransform(-209.5,-149.2);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#FEF5D5").s().p("AMUEuIgMgMQgHgGgCgHQgbjvgIhfQABgagDgNQgFgWgUgJQgkAJgXgKQgLgMgMAMQgYAJglgGIgQgEQgKgCgHAFQgRAEgjAAQgjAAgQADQgegEg8ABIggAAQgUgBgNgDQgLgEgFAHQgCADgBANQgIAvgIBTQgJBdgFAoQgEAYgBAzQgEAtgZAaIsKAAQgEgJgBgMQgBAMgEAJIpYAAQgSgUAGgkQAOgpgOgkQgGgfAGghQAOgngOglQgGgeAGghQAPgqgPgqQgFgbAFgcQAOgqgMgpQgDgSAJgMQAGgGAPABQAQAAAHgFIBGAAQAjALAigLIBGAAQAlALAigLIBGAAQAkALAigLIBFAAQA1ALA5gLIBGAAQAkALAigLIBHAAQAkALAigLIBFAAQAlALAigLIBGAAQAkALAigLIAAgBQADgHAFAHIAKABQAkALAigLIBFAAQAkALAjgLIBFAAQAkALAjgLIBGAAQAiALAkgLIBGAAQAiALAkgLIBGAAQAiALAkgLIBGAAQAoAMAngMIBHAAQAkALAigLIBFAAQALAGAUgBQAWgBAIADQAHATAAAgQgBAmACAMQgGAeADAoIADBHQgGAdADAnIADBHQgHAjAFAmQABAygBASQgCAMAAAYQgDAVgLAMg");
	this.shape_1038.setTransform(120.4,180.5);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#FEF5D6").s().p("AE3ODQgHgLACgYQABgXgGgMIAAhFQALgigLgkIAAhHQALghgLglIAAhFQALgjgLgjIgBhkQgJgFAJgFIABg8QALgigLglIAAhGQALgigLgjIAAhEQAMgogMgoIAAg9QAMgngMgoIAAgeQgBgDAIAAQAHgBgFgHQgEgHAAgJQgBAKgFAHIgyAAQgkALghgLIhHAAQgkALghgLIhPAAQghALgkgLIhHAAQghALgkgLIgpAAQgEgIgBgLQgBALgDAIQgngBgFgBQgUgHADghQgKgLgTgDQgbgEgFgDIgcgPQgQgIgIgLQgCgBAAgFQAAgFgCgBQgFAMgFAFQgOALgQgBQgSgFgGgTQgDgogBglQgBAmgEAdQgUAlglgRQgOgOgGgFQgMgIgGAeQgFANgNAIIgZAKQgYABgEAYQgGAfgEAFIg3AAQgZgfABgxQAFg4gBgbQAMgLgCgNQgBgHgKgQQgCg4AAhQIAAiIQAAgQACgIQADgNAIgJQgFgYgPACIgcALQgRAMgJAEQgPAJgLgLQgMgLACgUQABgMAKgVQAEgFALAAQALgBAEgEIAkAAQAUABAOAJQALgHAYACQAYABALgGIAkgBQAUACAPAIQALgGAXACQAYABALgGIAkAAQAVABAOAIQAKgFAYABQAYABALgGIBHAAQAtALBAgLIAkAAQAUABAOAJQALgHAYACQAYABALgGIAkgBQAUACAPAIQALgGAXACQAWABALgGIAkAAQAVABAOAIQAKgFAYABQAYABALgGIBHAAQA1AMA4gMIAkAAQAUABAOAJQALgHAYACQAYABALgGIAkgBQAUACAPAIQALgGAXACQAYABALgGIAkAAQAVABAOAIQAKgFAYABQAYABALgGIBHAAQALAGAYgBQAYgCALAGIAAJPQgJAEgKABQALABAIADIAAJNQgJAEgKABQALABAIAEIAAJNgApgp4QAZABALAGQASAGAIATQACAmABAgQABgoADglQAIgRARgFQALgCAWgBIAkABQAWACAMgNQgsgkgXgQQgogcglgFQgWAJgeAWIgwAjQgPAGgRADIgQACQgJABABAMQAUAHAggBIAtgCIAGABg");
	this.shape_1039.setTransform(210.1,-59.3);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#FEF5D4").s().p("AC6JVIhHABQgkAKghgLIhOAAQghALgkgKIhHgBQghALgkgKIgpgBQgLgLgDgXQgEgdgDgHQgHghAGghQAOgogOglQgGgfAGghQAOgmgOgmQgGggAGggQAOgngNgjQAIhIhFggQAEgMATgDQAVgEAGgHQAHgNgHgMQgLgNgEgHQgPgegSAJQgVARgLAHQg3AHgbgqQgCgOgCgGQgDgKgPAEQgVgGgTgTIghgiQhDhEgjghQg9g4g3geQgLgkAEgwIANhXQgSAGgIAUQgIAUgIAEQgkAJg2gBQg8gCgeABIgRgCQgKgBgGAFIhbBaQg6A7ggAfIgPANQgIAHgJACQgTAEgagSQg8gnhBAMQgzgXgQAwQgZANgQgKQgNgIgKgaIgDgXQgDgNgRACQgMAUgbAFQgfADgPAFQgcANgDAfIgEAPQgCAKAAAHQADAOgDAfQABAaAYAMQAIADANAMQAMAMAJADQAUALAVgHQANgFAIgHIALgKQAHgGAHgBQAHgBAGABQAJADAIAHQAIAHADALQAFARgDASIgCANQgEALgDAWQgBALgEAKQgFAOgPAVIAfgBQAQABAJAKQADASAAAfQAAAjACAPQgGAcADApQAAAXADAvQgGAdADApIADBHQgHAkAFAlQABAzgCASQgBALgBAYQgCAVgLAMIgzABQgkAKghgLIhHABQgkAKghgLIhRAAQghALgkgKIhHgBQghALgkgKIgogBQgGAGgEgGIAAg8QALgigLgkIAAhGQALgigLgkIAAhGQALgigLgkIAAhQQALgjgLgjIAAgeQACgQgFgZIgJgqQgGgfAGgfQAOgngOglQgGggAGggQAOgmgOgmQgGggAGggQANglgOgpQgEglACgTQAEgdAUgUMBAvgABQAcAAAJAJQAJAJAAAcQgBByAACjIAAEWQgMAKgUACIgkABQgOACgUAAIgigBQglgEgkAGIgjgBIgkgCQgpgCgdAFQgvgDgYAAQgjgDgkAGQgNgCgXAAQgaAAgLgBQhFgBgiACQgSABgygBQglgEgkAGIgjgBIgkgCQgpgCgdAFQgvgDgYAAQgjgDgkAGQgLgCgZAAQgYAAgNgCQgZgEgEgRQgBgEACgXQgEAjgIAEQgKAIg2ADQgXABgsgBQglgEgkAGIgjgBIgkgCQgpgCgdAFQgvgDgXAAQgpgCgdAFIgjgBIgigDQgZgJgEgFQgEgFgDgZIAAATQABANAHAFQABAiAKAJQANALAggRQAQgIANADQAQAFAAAXQgDAHgFAEIgkATQgFADgcAEQgVACgGASQgBAAAAAAQAAAAgBAAQAAAAAAAAQABAAAAABQABABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAABIACADQAMgUATAAQANAAAVANQAIALgFAQQgEAJgLAFQgQAIgDACQgRAcAQAiQAFAHALAIQANAIAEAFQAMAXAAAfQAAAKgEAtQgEAMgIAIQgHAFgFACQgFABgOACQgMABgHADQgIAKABAPIABAZIADAYQAEANAMAEQAYAHAJAVQAEALACAeQAAAPgMAMIgyAAQgEgIgBgLQgBALgEAIIgzABQgRAFgRAAQgSAAgRgGg");
	this.shape_1040.setTransform(89.5,-149);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#FEF5D4").s().p("AuHcIQgIgHADgWQACgLAAgQIgBgcQANgjgNgjIAAhGQANgjgNgjIAAhGQANgjgNgjIAAhGQANgjgNgjIAA8QQAGgDAJgBQgJgBgGgFIAAymQAJgIAQgFIAbgIQAggGAhAGQAnAOAlgOQAggGAgAGQAsAOApgOQAggGAgAGQAoAOAlgOQAhgGAgAGQAHADAYAEQAUADALAIQAIATgBAgQgBAnACAMQgFAdACApIADBHQgFAdACApIADBHQgGAjAEAlQABAhgBAgQgCAMAAAXQAAAbgOAJQgPAKghgIQAYAHAZgGQAOgEAZgJQAhgHAgAGQAqAPAjgOQAggGAhAGQAmAOAkgOQAggGAgAGQAmANAngNQAggGAhAGQAIADAdAEQAXADALALIABCDQAKAjgKAiIAABHQAKAkgLAhIABBHQAKAkgLAhIAABuQgMAMgUACIgkACQgOABgUAAIgiAAQglgFgkAHIgjgCIgkgBQgngDgdAGQgvgDgXAAQgpgDgdAGIgjgDIgigBIgigIQgUgEgPAEQAVgEASAGQAGASAAAgQgBAmACAMQgFAdACApIADBHQgFAdACApIADBHQgGAjAEAmQABAtgBAXIgCAiQAAAUgIAKQgKAHgOABQARAAAKgGQAsgSA1AIQAnAMAlgLQAggGAhAGQAmAMAkgMQAggGAgAGQAmALAngLQAggGAhAGQAIADAdACQAXADALALIABCDQAKAigKAiIAABIQAKAkgLAhIABBHQAKAkgLAhIAABuQgIAEgLABQALABAIAEIABCDQAKAigKAiIAABIQAKAkgLAhIABBHQAKAkgLAhQABASgFAmQgCAiAOAPQANAOAhgFQAsgGAMACQAkAMAigMIBGAAQAkAMAigMIBGAAQAkAMAigMIBGAAQAOAHAZgCQAdgBALADQAJATgBAfQgBAoACAMQgFAdACApIADBGQgFAdACApIADBHQgGAkAEAlQABAzgBASQgCAMAAAYQgCAUgMAMIqeAAQgQgQgCgQQgBgLAGgJQAmgTgRgUQgbgUgDgMQgHhcAHiMQARgZABgGQAFgSgVgPQgGgQAAgWIABgmIAAlmIAAgQIAAgaQgBgPgDgKIgJgSIgKgYQgFgOgJgHIgigbIgJgIIgHgLQgEgIgIgKIgOgRIgggpQgPgTgDgMQgDgcAZgDIASABQALACAGAAQAIgBAQACQAPABAIgHQABgGgCgJQgDgHgQgPQg2gSgNALQgNAKgHBDQgDAQgPAVIgeAiQgJAKgQAXIgIAJIgOATIgQASIgTAWQgNANgIAQIgJASQgDAXABAcQADAsgCBNQgDBWACAjIAAAbQgBAVABBiQABBJgGAuQgGANgMADQgGAAgdgCQgWgCgNAFIgLAIQgGAFgFACQgIABgIgFIgNgKQgWgRgfAQQgOAHgMgBQgIgBgJgHIgLgJQgCABgSgNQgNgJgIAWQgGAEgIAXQgKAPgUgZQgEgTgFgKQgEAzABBtQABBpgGA4QgKAfgMAMIi2AAIi3ABIgDAAQgVAAgHgHg");
	this.shape_1041.setTransform(-208.9,30);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#D8D6D1").s().p("EglaAXbQgRgTAIhUQAPgugNgiQgHgfAGghQAOgogOglQgGggAGggQAOgkgPgrQgHgyAFhFQABgJgBgIQgEg5AGgtQAPgqgNgkQgHggAGggQAOgogOglQgGggAGggQAOglgPgpQgGhCAEg2QABgIgBgJQgEguAGg3QAPgqgNglQgHgfAGghQAOgngOgjQgGggAGghQAOgkgPgqQgHgyAFhGQABgIgBgJQgEg1AGgwQAPgqgNglQgHgfAGghQAOgngOglQgGggAGghQAOglgOgpQgHhIAEgtIAAgRQgBgbAFgVQANglgOgnQgGgfAGggQAOgmgOgnQgGgkAGgkQAOgogNglQgHgeAGghQAOgogMgjQgEgXAIgRQAGgLAMgGQAcgMAuAIQAoAOAlgOQAggGAgAGQAmAOAmgOQAfgGAhAGQAnANAkgNQAfgGAgAGQAkAMAmgJQANgBAKAHQAGAGADAIQAFAPgBASIAABDQABAngBAnIAABGQABAjgBAjIAABGQABAjgBAjIAABFQADAkgLATQgHAMgNAAIgDgBIAFADQAQAKAGgWQAOgKAXAEQAmAMAlgNQAggGAgAGQAmANAmgNQAlgHAkAHQAoANAkgNQAfgGAhAGQApANAhgMQAZgFAVABIAQAAQARAAAVAEQAhANApgOQAfgGAgAGQAnANAlgOQAYgDAJgQQAGgMACgaQgCgmAAgTQABghAPgVQATACAEAOIAEAdQABAPAAAZIABAoQACAnAgABQA2gDAlAGQAWAGAQABQAVACASgHQAYgFAWABIAQAAQARAAAVAEQAiANAogOQAggGAgAGQAmANAmgNQAkgHAkAHQAoANAlgNQAfgGAgAGQApANAhgMQAZgFAUABIAPAAQARAAAWAEQAhANAogOQAggGAgAGQAmANAmgNQAkgHAkAHQAoANAlgNQAfgGAgAGQAqANAhgMQAYgFAXABIAQAAQAKgBAmABIA6AAQAZgCAZACIEngBIAaABQAQgBAIgLQAEgIAGgFQAGgEAHAAQARARAKAGQARAKASgEIAPAAQAOAAAWAEQAhAMAogNQAggGAgAGQAmANAmgNQAkgHAkAHQAoANAlgNQAfgGAgAGQAoANAkgMQAegGASAMQAHAGAEAIQAGASgCAQIAABNQABAegBAeIAABPQABAjgBAjIAABGQABAjgBAjQAAA6ABAMQADAlgMAVQgJAGgNABQALABAGACQARATgBAgIgCA1QgCArADAaQABAjgBAiQgEAaADAqQADAbgCArQgEAaADAsQADAagCArQgCAGAAAbQgBAUgIAMQgGAHgJADQAKgCAIgIQAIgGAIgCQBtgFCcABIEJABQAbAAATARIAAJYQgIAEgLABQALABAIAEIAAJOQgNAMgUACQgYAAgMACQgcACgrgCQgagDgsADQgbACgrgCQgagDgsADQgbACgrgCQgXgDguACQgJAAgaABQgWABgNgCIgSgDQgJgDgGgGQgDgJAAgMQgBAMgDAJQgJAIgQACIgaADQgbACgrgCQgagDgsADQgcACgqgCQgegDgxADQgcACgrgCQgZgDgsADQgeACgogCIgVgDQgMgCgHgGQgFgJgBgMQgBAMgDAGQgIAIgOAEQgnADgfgBQgegDgnADQghACglgCQgagDgsADQgbACgrgCQgagDgrADQgTABgygBQgLgBgWgBQgWAAgLgCQgIgBgGgFQgHgIgBgNIgBANQgDAHgIAEQgMAFgUAAQgaABgHABQgtABgXgBQgegDgnADQghACglgCQgagDgsADQgbACgrgCQgXgDguACQgJAAgaABQgWABgNgCIgRgDQgJgDgGgGQgEgIAAgNQgBAMgFAKQgKAKgVAAIgjACQgcACgrgCQgagDgsADQgbACgrgCQgagDgsADQgbACgrgCQgagDgrADQglACghgDQgYgEgIgIQgEgIAAgNQgBAMgFAKQgMAKgVAAIgjACQgcACgrgCQgagDgsADQgbACgrgCQgagDgsADQgbACgrgCQgXgDguACQgJAAgaABQgWABgNgCQgXgEgJgIQgDgHgBgOQgBAMgEAKQgNAKgVAAIgjACQgbACgrgCQgagDgsADQgcACgrgCQgZgDgsADQgcACgqgCQgagDgsADQglACghgDIgRgDQgJgDgGgGQgDgHgBgOQgBAMgEAKQgNAKgVAAIgjACQgbACgrgCQgagDgsADQgcACgrgCQgZgDgtADQgbACgrgCQgkgDgjADIgOABIgQAAQhEAAgPgQgAJhWnQAAABgBAAQAAABAAAAQgBAAAAABQAAAAAAAAQAFAGABAIIgBgPQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgCABgAAKWlIACASQAAgNgBgGQgCgEgEADQgPAIAPgHIACgBQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAgApMWlIACASQAAgNgBgGQgCgEgEADQgRAIARgHIACgBQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAgAykWlIACAKQgBgKgDgIIgDAFQgDADADgBIADgBQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAgA78WlIACAKQgBgKgDgIIgDAFQgDADADgBIADgBQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAg");
	this.shape_1042.setTransform(59.4,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300.3,-209.8,600.6,420.6);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah6CEQg0g2gBhNQAAhLAzg3QAzg3BJAAQBHgBA0A2QA0A2ABBNQAABLgzA3QgzA3hJAAIgBAAQhHAAgzg1g");
	mask.setTransform(17.6,18.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA9330").s().p("AgBBVIgBipIAEAAIABCpg");
	this.shape.setTransform(35,29.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CA9330").s().p("AgBBVIgBipIAEAAIABCpg");
	this.shape_1.setTransform(33.1,29.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CA9330").s().p("AgBBUIgBinIAEAAIABCng");
	this.shape_2.setTransform(31.3,29.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CA9330").s().p("AgBBUIgBinIAEAAIABCng");
	this.shape_3.setTransform(29.4,29.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CA9330").s().p("AgBBUIgBinIAEAAIABCng");
	this.shape_4.setTransform(27.5,29.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CA9330").s().p("AgBBUIgBinIAEAAIABCng");
	this.shape_5.setTransform(25.7,29.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CA9330").s().p("AgBBUIgBinIAEAAIABCng");
	this.shape_6.setTransform(23.8,29.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CA9330").s().p("AgBBUIgBinIAEAAIABCng");
	this.shape_7.setTransform(21.9,29.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CA9330").s().p("AgBBVIgBipIAEAAIABCpg");
	this.shape_8.setTransform(20,29.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CA9330").s().p("AgBBVIgBipIAEAAIABCpg");
	this.shape_9.setTransform(18.2,29.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CA9330").s().p("AgBBVIgBipIAEAAIABCpg");
	this.shape_10.setTransform(16.3,29.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CA9330").s().p("AgBBUIgBinIAEAAIABCng");
	this.shape_11.setTransform(14.4,29.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CA9330").s().p("AgChTIAEAAIABCnIgEABg");
	this.shape_12.setTransform(12.6,29.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CA9330").s().p("AgBBVIgBioIAEAAIABCog");
	this.shape_13.setTransform(10.7,29.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CA9330").s().p("AgBBVIgBioIAEAAIABCog");
	this.shape_14.setTransform(8.8,29.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CA9330").s().p("AgBBVIgBioIAEAAIABCog");
	this.shape_15.setTransform(7,29.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CA9330").s().p("AgBBUIgBinIAEAAIABCng");
	this.shape_16.setTransform(5.1,29.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CA9330").s().p("AgBBUIgBioIAEAAIABCog");
	this.shape_17.setTransform(3.2,29.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CA9330").s().p("AgBBUIgBioIAEAAIABCog");
	this.shape_18.setTransform(1.4,29.9);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E3AE4B").s().p("Ah6CEQg0g2gBhNQAAhLAzg3QAzg3BJAAQBHgBA0A2QA0A2ABBNQAABLgzA3QgzA3hJAAIgBAAQhHAAgzg1g");
	this.shape_19.setTransform(17.6,18.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.3,37.2);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjNDaQhWhaAAiAQAAh+BWhbQBWhaB3AAQB5AABVBaQBWBbAAB+QAACAhWBaQhVBah5AAQh3AAhWhag");
	mask_1.setTransform(29.2,30.9);

	// Layer 3
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A7A9AC").s().p("AgECMIAAkXIAIAAIAAEXg");
	this.shape_20.setTransform(58,49.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A7A9AC").s().p("AgDCMIAAkXIAHAAIAAEXg");
	this.shape_21.setTransform(54.9,49.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A7A9AC").s().p("AgECMIAAkXIAJAAIAAEXg");
	this.shape_22.setTransform(51.8,49.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A7A9AC").s().p("AgDCMIAAkXIAHAAIAAEXg");
	this.shape_23.setTransform(48.6,49.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A7A9AC").s().p("AgDCMIAAkXIAHAAIAAEXg");
	this.shape_24.setTransform(45.5,49.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A7A9AC").s().p("AgDCMIAAkXIAIAAIAAEXg");
	this.shape_25.setTransform(42.4,49.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A7A9AC").s().p("AgECMIAAkXIAIAAIAAEXg");
	this.shape_26.setTransform(39.3,49.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A7A9AC").s().p("AgDCMIAAkXIAIAAIAAEXg");
	this.shape_27.setTransform(36.2,49.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A7A9AC").s().p("AgECMIAAkXIAIAAIAAEXg");
	this.shape_28.setTransform(33.1,49.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A7A9AC").s().p("AgDCMIAAkXIAIAAIAAEXg");
	this.shape_29.setTransform(30,49.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A7A9AC").s().p("AgECMIAAkXIAIAAIAAEXg");
	this.shape_30.setTransform(26.9,49.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A7A9AC").s().p("AgDCMIAAkXIAHAAIAAEXg");
	this.shape_31.setTransform(23.8,49.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A7A9AC").s().p("AgECMIAAkXIAJAAIAAEXg");
	this.shape_32.setTransform(20.7,49.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A7A9AC").s().p("AgDCMIAAkXIAHAAIAAEXg");
	this.shape_33.setTransform(17.6,49.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A7A9AC").s().p("AgDCMIAAkXIAHAAIAAEXg");
	this.shape_34.setTransform(14.5,49.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A7A9AC").s().p("AgDCMIAAkXIAIAAIAAEXg");
	this.shape_35.setTransform(11.4,49.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A7A9AC").s().p("AgECMIAAkXIAIAAIAAEXg");
	this.shape_36.setTransform(8.3,49.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A7A9AC").s().p("AgDCMIAAkXIAIAAIAAEXg");
	this.shape_37.setTransform(5.2,49.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A7A9AC").s().p("AgECMIAAkXIAIAAIAAEXg");
	this.shape_38.setTransform(2.1,49.5);

	this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

	// Layer 1
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BCBEC0").s().p("AjNDaQhWhaAAiAQAAh+BWhbQBWhaB3AAQB5AABVBaQBWBbAAB+QAACAhWBaQhVBah5AAQh3AAhWhag");
	this.shape_39.setTransform(29.2,30.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.5,61.8);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AiaCkQhBhEAAhgQAAhfBBhEQBAhFBaAAQBbAABBBFQBABEAABfQAABghABEQhBBFhbAAQhaAAhAhFg");
	mask_2.setTransform(22.1,23.3);

	// Layer 3
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_40.setTransform(43.8,37.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_41.setTransform(41.4,37.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_42.setTransform(39.1,37.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_43.setTransform(36.7,37.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_44.setTransform(34.4,37.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_45.setTransform(32,37.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_46.setTransform(29.7,37.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_47.setTransform(27.4,37.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_48.setTransform(25,37.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_49.setTransform(22.7,37.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_50.setTransform(20.3,37.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_51.setTransform(18,37.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_52.setTransform(15.6,37.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_53.setTransform(13.3,37.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_54.setTransform(10.9,37.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_55.setTransform(8.6,37.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_56.setTransform(6.2,37.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_57.setTransform(3.9,37.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A7A9AC").s().p("AgCBqIAAjTIAFAAIAADTg");
	this.shape_58.setTransform(1.6,37.4);

	this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]}).wait(1));

	// Layer 1
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BCBEC0").s().p("AiaCkQhBhEAAhgQAAhfBBhEQBAhFBaAAQBbAABBBFQBABEAABfQAABghABEQhBBFhbAAQhaAAhAhFg");
	this.shape_59.setTransform(22.1,23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.2,46.7);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("Ai2DCQhNhRAAhxQAAhwBNhRQBMhRBqAAQBrAABNBRQBMBRAABwQAABxhMBRQhNBRhrAAQhqAAhMhRg");
	mask_3.setTransform(26,27.5);

	// Layer 3
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_60.setTransform(51.6,44.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_61.setTransform(48.9,44.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_62.setTransform(46.1,44.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_63.setTransform(43.3,44.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_64.setTransform(40.6,44.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_65.setTransform(37.8,44.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_66.setTransform(35,44.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_67.setTransform(32.3,44.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_68.setTransform(29.5,44.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_69.setTransform(26.7,44.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_70.setTransform(24,44.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_71.setTransform(21.2,44.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_72.setTransform(18.4,44.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_73.setTransform(15.7,44.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_74.setTransform(12.9,44.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_75.setTransform(10.1,44.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_76.setTransform(7.4,44.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_77.setTransform(4.6,44.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CA9330").s().p("AgDB9IAAj5IAHAAIAAD5g");
	this.shape_78.setTransform(1.8,44.1);

	this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]}).wait(1));

	// Layer 1
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E3AE4B").s().p("Ai2DCQhNhRAAhxQAAhwBNhRQBMhRBqAAQBrAABNBRQBMBRAABwQAABxhMBRQhNBRhrAAQhqAAhMhRg");
	this.shape_79.setTransform(26,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_79).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.1,55.1);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221E1F").s().p("AgzAKQgFgFgDgFQgGgRALgLIAJgJQADgEAHgCIAIgBQANAAAJAKIADADIA/BAIACABIhOALg");
	this.shape.setTransform(6.3,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.6,9.2);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020303").s().p("AiIBUIhhh5IB+hcIFVAuIgdDVgAiXgxQgLAIgCANQgCAOAJALQAIAKAOABQAOADALgJQALgGACgPQACgNgJgLQgIgLgOgCIgFAAQgLAAgJAHg");
	this.shape.setTransform(23.4,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.9,26);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgxBnQhYgsAyhiQAEgJAJgMQgHgMABgPQABgQAJgMIABAAIAVATQAFAEADAEQAYgMAZADQALAAANAEIAHgVIAEAHIgFAQQALAEAJAGIgPgaIACgFIA2BBIgIABQgMgWgVgNIAuBMQADAUgFAVQgJAsgmAXQgXANgbAAQgZAAgegNg");
	mask_4.setTransform(10.6,11.7);

	// Layer 3
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgIAwQgUgFgMgSQgLgSADgSQAEgUARgLQARgKASAFQAVAFALASQAMASgEASQgDAUgSALQgLAHgNAAQgEAAgHgCg");
	this.shape_80.setTransform(18.9,19.7);

	this.shape_80.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.shape_80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.9,14.7,7.5,8.7);


(lib.sprite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{walkRight:0,walkLeft:12,walkBottom:24,walkTop:36,jumpRight:48,jumpLeft:75,jumpBottom:102,jumpTop:129,standRight:156,standLeft:157,standBottom:158,standTop:159});

	// timeline functions:
	this.frame_11 = function() {
		this.gotoAndPlay("walkRight")
	}
	this.frame_23 = function() {
		this.gotoAndPlay("walkLeft")
	}
	this.frame_35 = function() {
		this.gotoAndPlay("walkBottom")
	}
	this.frame_47 = function() {
		this.gotoAndPlay("walkTop")
	}
	this.frame_74 = function() {
		this.gotoAndStop("standRight")
	}
	this.frame_101 = function() {
		this.gotoAndStop("standLeft")
	}
	this.frame_128 = function() {
		this.gotoAndStop("standBottom")
	}
	this.frame_155 = function() {
		this.gotoAndStop("standTop")
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(12).call(this.frame_35).wait(12).call(this.frame_47).wait(27).call(this.frame_74).wait(27).call(this.frame_101).wait(27).call(this.frame_128).wait(27).call(this.frame_155).wait(5));

	// rightLeft
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F17D74").s().p("AgDAAQAAgFADAAQAEAAAAAFQAAAFgEAAQgDAAAAgFg");
	this.shape.setTransform(14.7,2.1,1.386,1.386);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#162618").s().p("AgCAaIAAAAQgPgEADgZQAAgEACgFQACgJAHgDIADgBQAGAAAFAHQAEAHABALQABAPgJAHQgEAEgEAAgAgBgUQgEACgCAGQgCAFAAAFQgCAVAKACQADABADgDQAGgGgBgNQAAgIgDgGQgEgGgDAAg");
	this.shape_1.setTransform(14.6,2.1,1.386,1.386);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D5DB3D").s().p("AgBAYQgNgDACgXIACgJQACgJAGgCQAFgDAFAHQAEAHABALQABAJgEAHQgEAIgGAAIgBAAg");
	this.shape_2.setTransform(14.6,2.1,1.386,1.386);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#162618").s().p("AgCAaIAAAAQgPgEADgZQAAgEACgFQACgJAHgDIADgBQAGAAAFAHQAEAHABALQABAOgJAIQgEAEgEAAgAgBgUQgGADgCAOQgCAWAKACQADABADgDQAGgHgBgMQAAgIgDgGQgDgGgEAAg");
	this.shape_3.setTransform(13.5,2,1.386,1.386);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D5DB3D").s().p("AgBAXQgNgDACgXIACgIQACgJAGgCQAFgDAFAHQAEAHABALQABAIgEAIQgEAIgGAAIgBgBg");
	this.shape_4.setTransform(13.5,2,1.386,1.386);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221F1F").s().p("AgJgEQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABAAQABgBAAAAQABAAAAAAQAAABABAAQAAAAAAABQAFAIAJACIABAAIgBABIgCAEQgKgCgGgLg");
	this.shape_5.setTransform(10.6,9,1.386,1.386);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#172719").s().p("AgKAuQgGgBgFgGQgEgFAAgHQgBggAJgYIAAgCIABgCIAAAAQAEgHAHgEQAFgDAIABQAIACAGAHQAFAHgBAJIAAACQgCAYgOAeIAAAAQgFAMgMAAgAgOgbQgJAbABAbQAAAGAEAEQADAFAGABQAKACAFgLIAAgBQAOgdACgYIAAgCQABgHgEgGQgFgGgHgBQgHgBgEADQgGADgCAGIgBAAIAAABIAAAAg");
	this.shape_6.setTransform(-6.4,6.6,1.386,1.386);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#162618").s().p("AgKAvQgHgBgFgGQgEgFAAgHQgBgdAJgbIABgCIAAgBIAAgBIABgBQADgHAIgEQAFgEAIACQAJACAFAHQAGAHgBAKIAAABQgCAZgOAdIgBABQgEAJgHACIgFABIgEgBgAgDgnQgGADgDAFIAAABIAAABIAAAAIgBACQgJAaABAdQAAAFADAEQAEAEAFABQAFABAEgCQAEgCACgFIAAAAQAOgfABgWIABgCIAAAAQAAgHgEgGQgEgGgHgBIgDgBQgEAAgDADg");
	this.shape_7.setTransform(-6.4,6.6,1.386,1.386);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D5DB3D").s().p("AgJAtQgHgBgEgFQgEgFAAgGQAAgfAIgZIABgCIABgBIAAgBQADgGAGgEQAFgDAHABQAIACAFAHQAFAGgBAIIAAACQgBAWgPAgQgCAFgGADQgBACgEAAIgEAAg");
	this.shape_8.setTransform(-6.4,6.6,1.386,1.386);

	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(1.8,0.1,1.386,1.386,0,0,0,11.9,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgMAFQAAgBgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAGgDAGgBQAGgBAGADQABAAAAABQABAAAAABQAAAAAAAAQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQgEgCgFAAQgEABgDAEIgDAAg");
	this.shape_9.setTransform(3.3,-4.2,1.386,1.386);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DEBE84").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAg");
	this.shape_10.setTransform(1.2,5.4,1.386,1.386);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DEBE84").s().p("AAAAAIAAAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAAAAIgBABIAAgBg");
	this.shape_11.setTransform(1.2,5.4,1.386,1.386);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DEBE83").s().p("AAAAAIAAAAIAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAAABIgBAAIAAgBg");
	this.shape_12.setTransform(1.2,5.4,1.386,1.386);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DEBF83").s().p("AgBAAIAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIgBABIgBAAIgBgBg");
	this.shape_13.setTransform(1.2,5.4,1.386,1.386);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DEBF81").s().p("AgBAAIAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAABIgBAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_14.setTransform(1.2,5.4,1.386,1.386);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DEBF80").s().p("AgBAAIAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAEgBgCADIgCABQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape_15.setTransform(1.2,5.4,1.386,1.386);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DEBF7F").s().p("AgCAAIAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgCABQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_16.setTransform(1.2,5.4,1.386,1.386);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DEBF7F").s().p("AgCAAIAAAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABgBAAIgCABQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAgBg");
	this.shape_17.setTransform(1.2,5.4,1.386,1.386);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DEBF7E").s().p("AgDABIAAgBQABgCACAAQAEAAAAACQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgCAAQAAAAAAAAQAAAAgBAAQgBgBAAAAQAAgBgBAAg");
	this.shape_18.setTransform(1.2,5.4,1.386,1.386);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DEBF7E").s().p("AgDABIAAgBQAAgCADgBQAEAAABADQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAIgDABQgCAAgBgDg");
	this.shape_19.setTransform(1.2,5.4,1.386,1.386);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DFC17D").s().p("AgEAAIAAAAQABgDADAAQAFgBAAAEQAAABgCACIgDABQgCAAgCgEg");
	this.shape_20.setTransform(1.2,5.4,1.386,1.386);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DFC17C").s().p("AgEABIAAgBQAAgEAEAAQAFAAAAAEQAAACgCABIgDACQgCAAgCgEg");
	this.shape_21.setTransform(1.2,5.4,1.386,1.386);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DFC17C").s().p("AgFABIAAgCQABgDAEAAQAFAAABAEQAAACgDABQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAQgCAAgDgEg");
	this.shape_22.setTransform(1.2,5.4,1.386,1.386);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DFC27B").s().p("AgFABIAAgBQABgEAEAAQAGAAAAAEQABACgDACIgEABQgCAAgDgEg");
	this.shape_23.setTransform(1.2,5.4,1.386,1.386);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DFC27A").s().p("AgGABIAAgCQABgEAFAAQAGAAABAFQAAACgEACIgDACQgDAAgDgFg");
	this.shape_24.setTransform(1.2,5.4,1.386,1.386);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DFC27A").s().p("AgGABIAAgCQABgDAFgBQAHAAAAAFQABADgEACIgEABQgDAAgDgFg");
	this.shape_25.setTransform(1.2,5.4,1.386,1.386);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DFC278").s().p("AgGABIAAgCQABgEAFgBQAIAAAAAFQAAADgEADIgEACQgDAAgDgGg");
	this.shape_26.setTransform(1.2,5.4,1.386,1.386);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DFC478").s().p("AgHACQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQABgEAGgBQAIAAAAAGQAAADgEACQgDACgBAAQgEAAgDgFg");
	this.shape_27.setTransform(1.2,5.4,1.386,1.386);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DFC478").s().p("AgHABIAAgCQABgFAGAAQAJgBAAAGQAAAEgEACQgDACgCAAQgDAAgEgGg");
	this.shape_28.setTransform(1.2,5.4,1.386,1.386);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DFC477").s().p("AgHACIgBgDQACgFAGAAQAJgBAAAHQAAAEgEACQgDACgCAAQgEAAgDgGg");
	this.shape_29.setTransform(1.2,5.4,1.386,1.386);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DEC475").s().p("AgIACQgBgCABgBQACgFAGgBQAJAAAAAHQABAEgEACQgEACgCAAQgEAAgEgGg");
	this.shape_30.setTransform(1.2,5.4,1.386,1.386);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DEC475").s().p("AgIACQgBgCABgCQABgFAHAAQAKgBAAAHQAAAFgEADQgEABgCAAQgFAAgDgGg");
	this.shape_31.setTransform(1.2,5.4,1.386,1.386);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DEC475").s().p("AgJACQgBgCABgCQACgFAHgBQAKAAABAHQAAAFgFACQgEADgCAAQgFAAgEgHg");
	this.shape_32.setTransform(1.2,5.4,1.386,1.386);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E0C574").s().p("AgJACQgBgCABgCQABgGAIAAQALgBAAAIQAAAFgFADQgEACgCAAQgFAAgEgHg");
	this.shape_33.setTransform(1.2,5.4,1.386,1.386);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E0C573").s().p("AgJACIgBgEQACgGAIgBQALAAAAAIQABAFgFADQgFADgCAAQgFAAgEgIg");
	this.shape_34.setTransform(1.2,5.4,1.386,1.386);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E0C572").s().p("AgKACQgBgCABgCQACgGAIgBQAMAAAAAIQAAAGgFADQgEACgDAAQgFAAgFgIg");
	this.shape_35.setTransform(1.2,5.4,1.386,1.386);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E0C571").s().p("AgKACQgBgCAAgDQACgGAJAAQAMgBAAAJQABAFgGAEQgEACgDAAQgGAAgEgIg");
	this.shape_36.setTransform(1.2,5.4,1.386,1.386);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E0C66F").s().p("AgLACQgBgCABgDQACgGAJgBQAMAAABAJQAAAFgGAEQgEADgDAAQgGAAgFgJg");
	this.shape_37.setTransform(1.2,5.4,1.386,1.386);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E0C66F").s().p("AgLACQgCgCABgDQACgHAKAAQANgBAAAKQABAGgGADQgFADgDAAQgGAAgFgJg");
	this.shape_38.setTransform(1.2,5.4,1.386,1.386);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E0C66F").s().p("AgMACQgBgCABgDQACgHAKgBQANAAABAJQAAAHgGADQgFAEgDAAQgGAAgGgKg");
	this.shape_39.setTransform(1.2,5.4,1.386,1.386);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DEC76E").s().p("AgMACQgCgCABgDQACgHALgBQANAAABAJQAAAHgGAEQgFADgDAAQgHAAgFgKg");
	this.shape_40.setTransform(1.2,5.4,1.386,1.386);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DEC76E").s().p("AgMACQgCgCABgDQACgIALAAQAOgBAAAKQABAHgHAEQgFADgDAAQgHAAgFgKg");
	this.shape_41.setTransform(1.2,5.4,1.386,1.386);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DEC76E").s().p("AgNADQgCgDABgDQACgIAMAAQAOgBABALQAAAHgHAEQgFADgDAAQgHAAgGgKg");
	this.shape_42.setTransform(1.2,5.4,1.386,1.386);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DFC86E").s().p("AgNADQgCgDABgDQADgJALAAQAPgBAAALQABAHgHAFQgGADgDAAQgHAAgGgKg");
	this.shape_43.setTransform(1.2,5.4,1.386,1.386);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DFC86C").s().p("AgOADQgBgDABgDQACgJAMAAQAPgBABALQAAAIgHAEQgFADgEAAQgHAAgHgKg");
	this.shape_44.setTransform(1.2,5.4,1.386,1.386);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DFC86C").s().p("AgOADQgCgDABgEQADgIAMgBQAQAAAAALQABAIgIAEQgFAEgEAAQgIAAgGgLg");
	this.shape_45.setTransform(1.2,5.4,1.386,1.386);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DFC86B").s().p("AgPADQgBgDABgEQACgJANAAQAQgBAAAMQABAIgIAEQgGAEgDAAQgJAAgGgLg");
	this.shape_46.setTransform(1.2,5.4,1.386,1.386);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DFC96A").s().p("AgPADQgCgDACgEQACgJANAAQARgBAAAMQABAJgIAEQgGADgEAAQgIAAgHgLg");
	this.shape_47.setTransform(1.2,5.4,1.386,1.386);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DFC869").s().p("AgPADQgCgDABgEQADgKANAAQARgBABAMQAAAJgIAFQgGAEgEAAQgJAAgGgMg");
	this.shape_48.setTransform(1.2,5.4,1.386,1.386);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DFC868").s().p("AgQADQgCgDACgEQACgKAOAAQASgBAAAMQABAKgIAEQgHAEgEAAQgJAAgHgMg");
	this.shape_49.setTransform(1.2,5.4,1.386,1.386);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E1CB69").s().p("AgQADQgCgDABgEQADgKAOgBQASAAABAMQAAAKgIAFQgHAEgEAAQgJAAgHgNg");
	this.shape_50.setTransform(1.2,5.4,1.386,1.386);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E1CB68").s().p("AgRAEQgCgEACgEQACgKAPgBQASAAABANQABAJgJAFQgHAEgEAAQgKAAgHgMg");
	this.shape_51.setTransform(1.2,5.4,1.386,1.386);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E1CB66").s().p("AgRAEQgCgEABgEQADgLAPAAQATgBABAOQAAAKgJAFQgHADgEAAQgKAAgHgMg");
	this.shape_52.setTransform(1.2,5.4,1.386,1.386);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E1CC65").s().p("AgRADQgCgDABgFQADgKAPgBQATAAABANQABAKgJAGQgHAEgFAAQgKAAgHgOg");
	this.shape_53.setTransform(1.2,5.4,1.386,1.386);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E1CC64").s().p("AgSAEQgCgEACgFQACgLAQAAQAUgBAAAOQABAKgJAGQgIAEgEAAQgKAAgIgNg");
	this.shape_54.setTransform(1.2,5.4,1.386,1.386);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E1CC64").s().p("AgSAEQgCgEABgFQADgLARgBQATAAABAOQAAALgJAFQgHAFgFAAQgKAAgIgOg");
	this.shape_55.setTransform(1.2,5.4,1.386,1.386);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E1CC64").s().p("AgTAEQgCgEACgFQADgMARAAQAUgBAAAPQABALgKAFQgHAFgFAAQgLAAgIgOg");
	this.shape_56.setTransform(1.2,5.4,1.386,1.386);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E1CD64").s().p("AgTAEQgCgEABgFQADgLASgBQAUAAABAOQAAALgJAGQgIAEgFAAQgLAAgIgOg");
	this.shape_57.setTransform(1.2,5.4,1.386,1.386);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E1CD63").s().p("AgUAEQgCgEACgGQADgLASgBQAUAAABAPQABALgKAGQgIAFgFAAQgLAAgJgPg");
	this.shape_58.setTransform(1.2,5.4,1.386,1.386);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#231F20").s().p("AgHAIQgDgEAAgEQAAgDADgEQAEgEADABQAFgBADAEQADAEAAADQAAAEgDAEQgDADgFAAQgDAAgEgDgAgDAAQAAAEADAAQAEAAAAgEQAAgCgEAAQgDAAAAACg");
	this.shape_59.setTransform(4,0.1,1.386,1.386);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgCACgBQADABACACQADACAAACQAAADgDACQgCACgDABQgCgBgCgCg");
	this.shape_60.setTransform(4,0.1,1.386,1.386);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgIACQgDgJAEgKIAAAAIARAVIgIAOQgHgGgDgKg");
	this.shape_61.setTransform(-13.9,-8.1,1.386,1.386);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#152616").s().p("AAAAPQgNAIgLAAQgGAAgGgCQgTgIgMgZQgBgBAAAAQAAAAAAgBQAAAAABAAQAAgBABAAQAQgHAQAAQAKAAAFADQANAEAGAPQAGgPAOgEQAGgDAJAAQAQAAAQAHQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQgNAZgTAIQgFACgHAAQgMAAgNgIgAAWgPQgOAFgGASIgBABIAAABQAKAIAOAAQAGAAAEgCQAPgFANgWQgPgHgNAAQgHABgGACgAg+gLQANAWAPAFIAKACQAMAAAMgIIAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQgFgSgPgFQgGgCgHgBQgNAAgPAHg");
	this.shape_62.setTransform(-0.7,-17.3,1.386,1.386);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#73B34B").s().p("AAAAMQgTANgQgHQgSgHgMgYIAPgFQASgEAMAEQAQAGAEATQAGgTAPgGQAMgEASAEQAJACAGADQgLAYgTAHQgGADgGAAQgMAAgMgJg");
	this.shape_63.setTransform(-0.7,-17.3,1.386,1.386);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#152616").s().p("AgSB2IgCAAQgwgJgVgcQgYgiAKg1QABgLAEgMQgLgKgDgPQgEgPAGgPIABgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAcALIAIAFQAUgRAcgHQAKgCANgBIAAgTIAAgBIAAgBIAHAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIAAATQAlACAcAaIALAKQALANAFAMQAJASADAUQACAVgHAVQgGAUgPAQQggAjg4AAIgSAAgAhrg1QADAMALAJQAAABAAAAQABAAAAAAQAAABAAAAQAAABgBAAQgEANgBAKQgKA0AXAfQATAcAvAHIABAAIASABQA2ABAfgiQANgPAHgTQAGgVgCgTQgCgSgKgUIAAAAQgEgLgLgMIgKgKQgbgZgmgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgTIgCAAIAAATQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQgKAAgMADQgcAGgTARQAAABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQgDgDgGgCIgZgKQgFANAEANg");
	this.shape_64.setTransform(-0.8,-0.3,1.386,1.386);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D6DC3B").s().p("AgSBzQhmgQAThpQABgLAFgNQgLgJgEgPQgDgPAFgOIAAAAIAcALQAHADADADQASgSAegHQANgCAJgBIAAgVIAHAAIAAAVQAmACAdAZIAKAKQALANAEALQAKATACATQAFAsgfAhQgfAig2AAIgSgBg");
	this.shape_65.setTransform(-0.8,-0.3,1.386,1.386);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#172719").s().p("AAUBDQgUgCgahBQgHgTgHgYIgFgUQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAGAUQAGAXAIAUQAVA9AVACQAJACAEgEQADgDgCgPQgCgZAJgJQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQgFAFgBAKIAAAQQADARgGAFQgDADgHAAg");
	this.shape_66.setTransform(-4.9,12,1.386,1.386);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#152616").s().p("AAVBDQgVgDgZhAQgIgTgHgYIgFgUQgBgBAAAAQABgBAAAAQAAAAAAgBQABAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAKAoAPAiQATAyARACQAJACAEgEQACgCgBgQQgCgZAJgJQABAAAAgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQgJAJADAWQABASgEAEQgEADgHAAg");
	this.shape_67.setTransform(-4.9,12,1.386,1.386);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D6DC3B").s().p("AAUBBQgUgDgXg+IgUhAIBXBJQgJAJACAcQACATgPAAIgEAAg");
	this.shape_68.setTransform(-4.9,12,1.386,1.386);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#172719").s().p("AgbBEQgFgEAAgSQAAgXgJgHQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABABQAHAFACALIABARQAAAPAEADQACADAKgCQASgEASg/QAJghAFggQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQgFAggKAhQgSBBgVAGIgGAAIgBAAQgGAAgDgCg");
	this.shape_69.setTransform(2.9,11.3,1.386,1.386);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#152616").s().p("AgbBDQgGgEABgRQAAgXgJgHQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABABAAAAQALAJgBAZQAAAPAEADQADACAJgBQAQgEAQg0QAMglAGgnQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQgFAhgJAhQgTBBgVAFIgHABQgGAAgDgDg");
	this.shape_70.setTransform(2.9,11.3,1.386,1.386);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D6DC3B").s().p("AgeAyQAAgcgJgIIBPhRQgFAggJAhQgSBBgTAEIgGABQgNAAAAgSg");
	this.shape_71.setTransform(2.9,11.3,1.386,1.386);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#231F20").s().p("AgBAIQgNgBgHgJQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAGAGAKABQALABAGgKQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABgBAAQgGAMgPAAg");
	this.shape_72.setTransform(-0.3,10.3,1.39,1.39);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgHACQgEgIAEgLIARAUIgHAPQgHgGgDgKg");
	this.shape_73.setTransform(-13.9,-7.3,1.39,1.39);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#231F20").s().p("AAIAFQgEgFgEAAQgEAAgEACQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAAAAAAAQAAgBABAAQAAgBABAAQAGgDAFABQAIABAFADQAAABABAAQAAABAAAAQAAABAAAAQgBABAAABIgCABg");
	this.shape_74.setTransform(8.1,-3.5,1.39,1.39);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#231F20").s().p("AgMAFQAAgBgBAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAGgDAGgBQAGgBAGADQABAAAAABQABAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgEgCgFAAQgEABgDAEIgDAAg");
	this.shape_75.setTransform(-8.2,-3.6,1.39,1.39);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F17D74").s().p("AgDAEQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAgBAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQAGAAAAAFQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_76.setTransform(-1.9,4.1,1.39,1.39);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F17D74").s().p("AgFAAQAAgEAFAAQAGAAAAAEQAAAFgGAAQgFAAAAgFg");
	this.shape_77.setTransform(1.4,4.2,1.39,1.39);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#152616").s().p("AgFAbIgBAAQgPgCgGgJQgGgIADgLQAAgEADgGQAGgKAOgCIAHgBQAMAAAJAHQAJAHACAMQABAIgHAJQgLAKgPAAgAgGgUQgLACgFAIQgDAEAAADIgBABQgBAKAEAFQAGAJAMAAIAAAAIAFAAQAOAAAIgJQAGgGgBgHQgBgJgIgGQgIgGgKAAg");
	this.shape_78.setTransform(-0.3,4.1,1.39,1.39);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D6DC3D").s().p("AgFAYQgcgDAFgYQABgEACgEQAGgJANgDQAMgDALAIQALAHABALQACAJgJAIQgIAIgOAAIgFgBg");
	this.shape_79.setTransform(-0.3,4.1,1.39,1.39);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#DEBE84").s().p("AAAAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAAABIgBAAIAAgBg");
	this.shape_80.setTransform(-10.3,6,1.39,1.39);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#DEBE83").s().p("AgBAAIAAAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAIgBAAIgBABIgBgBg");
	this.shape_81.setTransform(-10.3,6,1.39,1.39);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#DEBF83").s().p("AgBAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIgBABIgBAAIgBgBg");
	this.shape_82.setTransform(-10.3,6,1.39,1.39);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#DEBF81").s().p("AgBAAIAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAABIgBAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBg");
	this.shape_83.setTransform(-10.3,6,1.39,1.39);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#DEBF80").s().p("AgCAAIAAAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBABIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAgBgBg");
	this.shape_84.setTransform(-10.3,6,1.39,1.39);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#DEBF7F").s().p("AgCAAIAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABgBAAIgBABQAAAAAAgBQAAAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_85.setTransform(-10.3,6,1.39,1.39);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#DEBF7F").s().p("AgCABIAAgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAAAABQABAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAABQgBAAAAAAIgCABQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAg");
	this.shape_86.setTransform(-10.3,6,1.39,1.39);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#DEBF7E").s().p("AgDABIAAgBQABgCACAAQAEAAAAACQAAAAAAAAQAAAAAAABQgBAAAAABQAAAAgBABIgCAAQgBAAgCgCg");
	this.shape_87.setTransform(-10.3,6,1.39,1.39);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#DEBF7E").s().p("AgDABIAAgBQAAgCADgBQAEAAAAADQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAgBABIgCABQgBAAgCgDg");
	this.shape_88.setTransform(-10.3,6,1.39,1.39);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#DFC17D").s().p("AgEAAIAAAAQABgDADAAQAFgBAAAEQAAABgDACIgCABQgBAAgDgEg");
	this.shape_89.setTransform(-10.3,6,1.39,1.39);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#DFC17C").s().p("AgEABIAAgBQAAgDAEAAQAFgBAAAEQAAACgCACIgDABQgCAAgCgEg");
	this.shape_90.setTransform(-10.3,6,1.39,1.39);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#DFC17C").s().p("AgFABIAAgBQABgDAEgBQAFAAABAEQAAACgDACIgDABQgCAAgDgEg");
	this.shape_91.setTransform(-10.3,6,1.39,1.39);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#DFC27B").s().p("AgFABIAAgBQABgEAEAAQAGAAAAAEQAAACgDACIgDABQgDAAgCgEg");
	this.shape_92.setTransform(-10.3,6,1.39,1.39);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#DFC27A").s().p("AgGABIAAgBQABgEAFAAQAGgBABAFQAAADgDABIgEACQgDAAgDgFg");
	this.shape_93.setTransform(-10.3,6,1.39,1.39);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#DFC27A").s().p("AgGABIAAgCQABgDAFgBQAHAAAAAFQAAADgDACIgEABQgDAAgDgFg");
	this.shape_94.setTransform(-10.3,6,1.39,1.39);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#DFC278").s().p("AgGABIAAgCQABgEAFAAQAIgBAAAGQAAADgDACQgDABgCAAQgDAAgDgFg");
	this.shape_95.setTransform(-10.3,6,1.39,1.39);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#DFC478").s().p("AgHABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAgBQABgEAGAAQAIAAAAAGQAAADgEACQgDACgBAAQgEAAgDgGg");
	this.shape_96.setTransform(-10.3,6,1.39,1.39);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#DFC478").s().p("AgHABQAAAAAAgBQgBAAAAAAQAAAAABAAQAAgBAAAAQABgFAGAAQAIgBAAAGQABAEgEACIgFACQgEAAgDgGg");
	this.shape_97.setTransform(-10.3,6,1.39,1.39);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#DFC477").s().p("AgHACQgBgCABgBQABgFAGAAQAJgBAAAHQAAADgEADQgDACgCAAQgEAAgDgGg");
	this.shape_98.setTransform(-10.3,6,1.39,1.39);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#DEC475").s().p("AgIACQgBgCABgBQACgFAGgBQAJAAABAHQAAAEgFACQgDACgCAAQgEAAgEgGg");
	this.shape_99.setTransform(-10.3,6,1.39,1.39);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#DEC475").s().p("AgIACQgBgCAAgCQACgFAHAAQAJgBABAHQAAAFgFACQgDACgCAAQgEAAgEgGg");
	this.shape_100.setTransform(-10.3,6,1.39,1.39);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#DEC475").s().p("AgJABQgBgBABgCQABgFAIgBQAKAAAAAHQAAAEgEADQgEADgCAAQgFAAgEgIg");
	this.shape_101.setTransform(-10.3,6,1.39,1.39);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E0C574").s().p("AgJACIAAgEQACgFAHgBQALAAAAAHQAAAFgFADQgEACgCAAQgFAAgEgHg");
	this.shape_102.setTransform(-10.3,6,1.39,1.39);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E0C573").s().p("AgJACIgBgEQACgGAIAAQALgBAAAIQABAFgFADQgFACgCAAQgFAAgEgHg");
	this.shape_103.setTransform(-10.3,6,1.39,1.39);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E0C572").s().p("AgKACQgBgCABgCQACgGAIgBQAMAAAAAIQAAAFgFAEQgEACgDAAQgFAAgFgIg");
	this.shape_104.setTransform(-10.3,6,1.39,1.39);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E0C571").s().p("AgKACQgBgCAAgDQACgGAJAAQAMgBAAAJQABAFgGADQgEADgDAAQgFAAgFgIg");
	this.shape_105.setTransform(-10.3,6,1.39,1.39);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E0C66F").s().p("AgLACQgBgCABgDQACgGAJgBQAMAAAAAJQABAFgGAEQgEADgDAAQgGAAgFgJg");
	this.shape_106.setTransform(-10.3,6,1.39,1.39);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E0C66F").s().p("AgLACQgCgCABgDQACgGAKgBQAMAAABAJQAAAGgGADQgEADgDAAQgGAAgFgJg");
	this.shape_107.setTransform(-10.3,6,1.39,1.39);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E0C66F").s().p("AgMADQgBgDABgCQACgIAKAAQANgBAAAKQABAGgHAEQgEACgDAAQgGAAgGgIg");
	this.shape_108.setTransform(-10.3,6,1.39,1.39);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#DEC76E").s().p("AgNACQgCgCABgEQADgHALgBQAOAAABAKQAAAHgHAEQgFAEgDAAQgHAAgGgLg");
	this.shape_109.setTransform(-10.3,6,1.39,1.39);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#DFC86E").s().p("AgNADQgCgDABgDQADgIALgBQAPAAAAAKQABAIgHAEQgGADgDAAQgHAAgGgKg");
	this.shape_110.setTransform(-10.3,6,1.39,1.39);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#DFC86C").s().p("AgOADQgBgDABgEQACgIAMAAQAPgBAAALQABAIgHAEQgGADgDAAQgIAAgGgKg");
	this.shape_111.setTransform(-10.3,6,1.39,1.39);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#DFC86C").s().p("AgOADQgCgDABgDQACgJANAAQAPgBABALQAAAIgHAEQgGADgDAAQgIAAgGgKg");
	this.shape_112.setTransform(-10.3,6,1.39,1.39);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#DFC86B").s().p("AgPADQgBgDABgDQACgJANgBQAQAAAAALQABAIgIAFQgFADgEAAQgIAAgHgLg");
	this.shape_113.setTransform(-10.3,6,1.39,1.39);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#DFC96A").s().p("AgPADQgCgDABgEQADgJANAAQAQgBABAMQAAAJgHAEQgGADgEAAQgJAAgGgLg");
	this.shape_114.setTransform(-10.3,6,1.39,1.39);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#DFC869").s().p("AgQADQgBgDABgEQACgJAOgBQAQAAABALQABAJgIAFQgGAEgEAAQgJAAgHgMg");
	this.shape_115.setTransform(-10.3,6,1.39,1.39);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#DFC868").s().p("AgQADQgCgDACgEQACgJAOgBQARAAABAMQABAJgIAFQgHADgEAAQgJAAgHgMg");
	this.shape_116.setTransform(-10.3,6,1.39,1.39);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E1CB69").s().p("AgQADQgCgDABgEQADgKAOgBQARAAABAMQABAKgJAEQgGAFgEAAQgJAAgHgNg");
	this.shape_117.setTransform(-10.3,6,1.39,1.39);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#E1CB68").s().p("AgQAEQgCgEABgEQADgKAPgBQARAAABANQAAAJgIAFQgGAEgFAAQgJAAgHgMg");
	this.shape_118.setTransform(-10.3,6,1.39,1.39);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#E1CB66").s().p("AgRADQgCgDACgFQADgKAPAAQASgBAAANQABAKgJAFQgHAEgEAAQgKAAgHgNg");
	this.shape_119.setTransform(-10.3,6,1.39,1.39);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#E1CC65").s().p("AgRADQgCgDABgFQADgKAQgBQASAAABANQAAAKgIAFQgHAFgFAAQgKAAgHgOg");
	this.shape_120.setTransform(-10.3,6,1.39,1.39);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E1CC64").s().p("AgSAEQgCgEACgFQADgKAQgBQATAAAAANQABALgJAFQgHAEgFAAQgKAAgIgNg");
	this.shape_121.setTransform(-10.3,6,1.39,1.39);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E1CC64").s().p("AgSAEQgCgEABgFQADgLARAAQATgBABAOQAAALgJAFQgHAEgFAAQgKAAgIgNg");
	this.shape_122.setTransform(-10.3,6,1.39,1.39);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#E1CC64").s().p("AgTAEQgCgEACgFQADgLAQgBQAUAAABAOQAAALgJAGQgHAEgFAAQgLAAgIgOg");
	this.shape_123.setTransform(-10.3,6,1.39,1.39);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E1CD64").s().p("AgTAEQgCgEABgFQADgMARAAQAVgBAAAPQABALgKAFQgHAFgFAAQgLAAgIgOg");
	this.shape_124.setTransform(-10.3,6,1.39,1.39);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#E1CD63").s().p("AgUAEQgCgEACgGQADgLARgBQAVAAABAOQAAAMgKAGQgHAFgFAAQgLAAgJgPg");
	this.shape_125.setTransform(-10.3,6,1.39,1.39);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#DEBE84").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAg");
	this.shape_126.setTransform(10.1,5.3,1.39,1.39);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#DEBE84").s().p("AAAAAIAAAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgBAAIAAABIAAgBg");
	this.shape_127.setTransform(10.1,5.3,1.39,1.39);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#DEBE83").s().p("AAAAAIAAAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgBABIAAAAIAAgBg");
	this.shape_128.setTransform(10.1,5.3,1.39,1.39);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#DEBF83").s().p("AgBAAIAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIgBABIgBAAIgBgBg");
	this.shape_129.setTransform(10.2,5.3,1.39,1.39);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#DEBF81").s().p("AgBAAIAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgBABQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_130.setTransform(10.2,5.3,1.39,1.39);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#DEBF7F").s().p("AgCAAIAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABgBAAIgBABQAAAAAAAAQAAgBAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_131.setTransform(10.2,5.3,1.39,1.39);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#DEBF7E").s().p("AgDAAIgBAAQABgDADAAQAEAAABADQAAAAgBAAQAAABAAAAQAAABgBAAQAAABgBAAIgCABQgCAAgBgEg");
	this.shape_132.setTransform(10.1,5.3,1.39,1.39);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#DFC17D").s().p("AgEAAIAAAAQABgDADAAQAFgBAAAEQAAABgDACIgCABQgBAAgDgEg");
	this.shape_133.setTransform(10.1,5.3,1.39,1.39);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#DFC17C").s().p("AgEABIAAgBQAAgDAEgBQAFAAAAAEQAAACgCABIgDACQgCAAgCgEg");
	this.shape_134.setTransform(10.2,5.3,1.39,1.39);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#DFC27B").s().p("AgFABIAAgCQABgDAEAAQAGgBAAAFQAAACgDACIgDABQgDAAgCgEg");
	this.shape_135.setTransform(10.2,5.3,1.39,1.39);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#DFC27A").s().p("AgGABIAAgCQABgDAFgBQAHAAAAAFQAAADgDACIgEABQgDAAgDgFg");
	this.shape_136.setTransform(10.2,5.3,1.39,1.39);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#DFC278").s().p("AgGABIAAgCQABgEAFAAQAIAAAAAFQAAADgDACIgFABQgDAAgDgFg");
	this.shape_137.setTransform(10.1,5.3,1.39,1.39);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#DFC478").s().p("AgHABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQABgFAGAAQAHAAABAGQAAADgEACQgDACgBAAQgDAAgEgGg");
	this.shape_138.setTransform(10.1,5.3,1.39,1.39);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#DFC478").s().p("AgHABQAAAAAAgBQgBAAAAAAQAAAAABAAQAAgBAAAAQABgFAGAAQAIgBAAAGQAAAEgDACQgDACgCAAQgEAAgDgGg");
	this.shape_139.setTransform(10.1,5.3,1.39,1.39);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#DFC477").s().p("AgHACIgBgDQACgFAGAAQAJgBAAAHQAAADgEADQgDACgCAAQgEAAgDgGg");
	this.shape_140.setTransform(10.1,5.3,1.39,1.39);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#DEC475").s().p("AgIACQAAgBAAgBQgBAAAAAAQAAAAABAAQAAgBAAAAQACgFAGgBQAJAAAAAHQAAAEgDACQgEACgCAAQgEAAgEgGg");
	this.shape_141.setTransform(10.1,5.3,1.39,1.39);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#DEC475").s().p("AgIABQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAgBABgBQABgFAHAAQAJgBABAHQAAAEgEADQgEACgCAAQgEAAgEgHg");
	this.shape_142.setTransform(10.1,5.3,1.39,1.39);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#DEC475").s().p("AgJACQgBgCABgCQABgFAIgBQAKAAAAAHQAAAFgEACQgEADgCAAQgFAAgEgHg");
	this.shape_143.setTransform(10.2,5.3,1.39,1.39);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#E0C574").s().p("AgJACIAAgEQACgGAHAAQALgBAAAIQAAAFgFADQgDACgDAAQgEAAgFgHg");
	this.shape_144.setTransform(10.1,5.3,1.39,1.39);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#E0C573").s().p("AgJACIgBgEQACgGAIAAQALgBAAAIQABAFgFADQgFACgCAAQgFAAgEgHg");
	this.shape_145.setTransform(10.1,5.3,1.39,1.39);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#E0C572").s().p("AgKACIAAgEQACgGAIgBQAMAAAAAIQAAAGgFADQgEACgDAAQgFAAgFgIg");
	this.shape_146.setTransform(10.1,5.3,1.39,1.39);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#E0C571").s().p("AgKACQgBgCAAgDQACgGAJAAQAMgBAAAJQABAFgGADQgEADgDAAQgFAAgFgIg");
	this.shape_147.setTransform(10.1,5.3,1.39,1.39);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#E0C66F").s().p("AgLACQgBgCABgDQACgGAJgBQAMAAAAAJQABAFgGAEQgEADgDAAQgGAAgFgJg");
	this.shape_148.setTransform(10.2,5.3,1.39,1.39);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#E0C66F").s().p("AgLACQgCgCABgDQACgHAKAAQAMgBABAKQAAAGgGADQgEADgDAAQgGAAgFgJg");
	this.shape_149.setTransform(10.2,5.3,1.39,1.39);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#E0C66F").s().p("AgMADQgBgDABgCQACgIAKAAQANgBAAAKQABAGgHAEQgEACgDAAQgGAAgGgIg");
	this.shape_150.setTransform(10.2,5.3,1.39,1.39);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#DEC76E").s().p("AgMACQgCgCABgDQACgHALgBQANAAABAJQAAAHgGAEQgFADgDAAQgHAAgFgKg");
	this.shape_151.setTransform(10.1,5.3,1.39,1.39);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#DEC76E").s().p("AgMACQgCgCABgDQACgIALAAQAOgBAAAKQABAHgHAEQgFADgDAAQgHAAgFgKg");
	this.shape_152.setTransform(10.1,5.3,1.39,1.39);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#DEC76E").s().p("AgNACQgBgCABgDQACgIALgBQAOAAABAKQAAAHgGAEQgGAEgDAAQgHAAgGgLg");
	this.shape_153.setTransform(10.1,5.3,1.39,1.39);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#DFC86C").s().p("AgOADQgBgDABgEQACgIAMAAQAPgBAAALQABAIgHAEQgGADgDAAQgIAAgGgKg");
	this.shape_154.setTransform(10.2,5.3,1.39,1.39);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#DFC86C").s().p("AgOADQgCgDABgEQACgIANgBQAPAAABALQAAAIgHAEQgGAEgDAAQgIAAgGgLg");
	this.shape_155.setTransform(10.1,5.3,1.39,1.39);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#DFC86B").s().p("AgPADQgBgDABgDQACgJANgBQAQAAAAALQABAIgIAFQgFADgEAAQgIAAgHgLg");
	this.shape_156.setTransform(10.1,5.3,1.39,1.39);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#DFC96A").s().p("AgPADQgCgDABgEQADgJANAAQAQgBABAMQAAAJgIAEQgFADgEAAQgIAAgHgLg");
	this.shape_157.setTransform(10.1,5.3,1.39,1.39);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#DFC869").s().p("AgQADQgBgDABgEQACgJAOgBQAQAAABALQABAJgIAFQgGAEgEAAQgJAAgHgMg");
	this.shape_158.setTransform(10.1,5.3,1.39,1.39);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#DFC868").s().p("AgQADQgCgDACgEQACgKAOAAQARgBABAMQABAJgIAFQgHAEgEAAQgJAAgHgMg");
	this.shape_159.setTransform(10.1,5.3,1.39,1.39);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#E1CB69").s().p("AgQAEQgCgEABgEQADgKAOAAQARgBABANQABAJgJAFQgGAEgEAAQgJAAgHgMg");
	this.shape_160.setTransform(10.2,5.3,1.39,1.39);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#E1CB68").s().p("AgQAEQgCgEABgEQADgKAOgBQASAAABANQABAJgJAFQgGAEgFAAQgJAAgHgMg");
	this.shape_161.setTransform(10.1,5.3,1.39,1.39);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E1CB66").s().p("AgRADQgCgDACgFQADgKAPAAQASgBAAANQABAKgJAFQgHAEgEAAQgKAAgHgNg");
	this.shape_162.setTransform(10.1,5.3,1.39,1.39);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#E1CC65").s().p("AgRADQgCgDABgFQADgKAQgBQASAAABANQAAAKgIAFQgHAFgFAAQgKAAgHgOg");
	this.shape_163.setTransform(10.1,5.3,1.39,1.39);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#E1CC64").s().p("AgSAEQgCgEACgFQADgLAQAAQATgBAAAOQABAKgJAGQgIAEgEAAQgKAAgIgNg");
	this.shape_164.setTransform(10.1,5.3,1.39,1.39);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#E1CC64").s().p("AgSAEQgCgEABgFQADgLARAAQATgBABAOQAAALgJAFQgHAEgFAAQgKAAgIgNg");
	this.shape_165.setTransform(10.1,5.3,1.39,1.39);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#E1CC64").s().p("AgTAEQgCgEACgFQADgLAQgBQAUAAABAOQAAALgJAFQgHAFgFAAQgLAAgIgOg");
	this.shape_166.setTransform(10.2,5.3,1.39,1.39);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#E1CD64").s().p("AgTAEQgCgEABgFQADgLARgBQAUAAABAOQABALgKAGQgHAEgFAAQgLAAgIgOg");
	this.shape_167.setTransform(10.2,5.3,1.39,1.39);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#E1CD63").s().p("AgUAEQgCgEACgGQADgLARgBQAVAAABAPQAAALgKAGQgHAFgFAAQgLAAgJgPg");
	this.shape_168.setTransform(10.2,5.3,1.39,1.39);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgIACIAQgQQAFARgNAMg");
	this.shape_169.setTransform(12.9,-7.6,1.39,1.39);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#152616").s().p("AAAAPQgLAIgNAAQgFAAgHgDQgSgGgNgaQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBABAAIAJgDQAMgEAKAAQAKAAAFADQAOAEAFAPQAGgPAOgEQAGgDAJAAQAQAAAQAHQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQgMAagUAGQgGADgFAAQgOAAgLgIgAAWgPQgPAFgFASIgBABQALAJANAAQAFAAAEgCQARgHALgUQgNgHgOAAQgHABgGACgAg+gLQANAVAPAGQAFACAFAAQANAAALgJIgBgBQgFgRgPgGQgGgCgHgBQgNAAgPAHg");
	this.shape_170.setTransform(-0.1,-16.6,1.39,1.39);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#73B34B").s().p("AAAAMQgTANgQgGQgSgIgMgYIAQgFQASgEALAFQAQAGAEATQAGgTAPgGQALgFASAEQAJACAHADQgMAYgTAIQgFACgGAAQgMAAgMgJg");
	this.shape_171.setTransform(-0.1,-16.6,1.39,1.39);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgmAhQgRgOAAgTQAAgSARgOQAQgOAWAAQAXAAARAOQAQAOAAASQAAATgQAOQgRAOgXAAQgWAAgQgOg");
	this.shape_172.setTransform(-0.1,9.5,1.39,1.39);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#231F20").s().p("AgHAIQgDgDAAgFQAAgDADgEQADgDAEAAQAEAAAEADQADAEAAADQAAAFgDADQgEADgEAAQgEAAgDgDgAgDAAQAAAEADAAQAEAAAAgEQAAgDgEAAQgDAAAAADg");
	this.shape_173.setTransform(-7.5,0.8,1.39,1.39);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgEAFQgCgDAAgCQgBgHAHAAQAHAAABAHQgBACgCADQgCACgDABQgCgBgCgCg");
	this.shape_174.setTransform(-7.5,0.8,1.39,1.39);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#231F20").s().p("AgHAIQgDgDAAgFQAAgDADgEQADgDAEAAQAEAAAEADQADAEAAADQAAAFgDADQgEADgEAAQgEAAgDgDgAgDAAQAAAEADAAQAEAAAAgEQAAgDgEAAQgDAAAAADg");
	this.shape_175.setTransform(7.1,0.8,1.39,1.39);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgEAFQgCgDAAgCQAAgHAGAAQAHAAAAAHQAAACgCADQgCACgDABQgCgBgCgCg");
	this.shape_176.setTransform(7.1,0.8,1.39,1.39);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#152616").s().p("AgRB1IgCgBQgwgGgWgeQgYgiAKg0QAAgIAFgPQgMgJgDgPQgEgPAGgOIAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIABAAIAcALIAJAFQATgSAdgGQAMgDALAAIAAgTQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABIAAAVQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQgLACgLACQgcAGgTARQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBIgKgEIgZgKQgEANADANQAEANAKAIQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgFAMAAALQgJA0AWAdQATAcAwAHIABAAQBBAHAkglQAPgPAHgUQAHgVgDgUQgCgTgKgSIABgDQAIgJADgMQACgLgEgLIgZAKIgHADQgBAAAAAAQgBABAAAAQAAAAgBgBQAAAAAAAAQgbgYgngCQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgVQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABIAAATQAlACAcAXIAGgDIAcgLIACAAQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIAAABQAFAMgCANQgDAOgIAKQAIASADATQADAWgIAWQgHAVgPAPQghAig3AAIgRgBg");
	this.shape_177.setTransform(-0.6,0.4,1.39,1.39);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#D6DC3B").s().p("AgRByQhmgQAShnQAAgLAFgNQgLgJgEgPQgEgOAGgOIAAAAIAcALIAKAFQAUgSAcgGQAMgDALgBIAAgVIAHAAIAAAVQAnACAcAYIAjgOQAFAMgCAOQgDANgJAJQAJASADAUQAFAsgeAgQggAig3AAIgRgBg");
	this.shape_178.setTransform(-0.6,0.4,1.39,1.39);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#172719").s().p("AgYAmIgDgBQgGgEgBgHQgCgGADgGQAOgeARgPIACgDIAAAAIAAgBQAGgFAIAAQAHAAAGAFQAHAFACAIQABAJgEAHIgBAAIAAABQgMAVgXAUIgBAAQgGAFgGAAQgEAAgEgDgAgZAiQAKAHAJgIIAAAAQAVgTAOgUIAAgCIABAAIAAAAQAEgGgCgHQgBgHgGgEQgMgJgLAJIAAABIgBAAIAAABIgBABQgRASgMAaIgBAAQgFALAKAIg");
	this.shape_179.setTransform(-14.1,5.1,1.39,1.39);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#152616").s().p("AgUApIgIgEQgFgEgCgHQgBgHADgGQAMgaATgTIABgBIABAAIAAgCIAAAAQAGgFAIAAQAHgBAHAFQAHAGABAIQACAJgFAIIAAABQgNAUgXAUIAAAAQgFAFgIAAIgEAAgAACgfIgBABIAAAAIgBACQgRASgMAZQgFALAJAHQAKAHAIgHIABgBQAWgTAMgUIABgBIAAAAQAEgGgCgHQgBgHgFgEQgGgEgGAAQgGAAgFAFg");
	this.shape_180.setTransform(-14.1,5.1,1.39,1.39);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#D6DC3B").s().p("AgbAkQgFgEgBgGQgBgGACgFQAMgaATgTIABgDQAMgKAOAKQAGAFACAHQABAIgEAHIgBABQgOAVgVATIAAAAQgFAEgGAAQgGAAgFgDg");
	this.shape_181.setTransform(-14.1,5.1,1.39,1.39);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#172719").s().p("AAOAiIAAgBQgcgNgSgRIAAgBIgBAAQgGgEgBgJQAAgIAFgHQAFgGAHgCQAHgCAHADIABAAIACABIACABQAWAPASAUQAKAMgJAMIgCACQgGAGgHAAQgEAAgEgCgAgggYQgEAGAAAHQAAAHAFAEIABAAIAAAAIABAAQATASAZAMIABAAQAEADAGgCQAFgBADgEQADgEAAgGQAAgFgEgEQgUgXgTgMIgCgBIgCAAQgEgCgFAAQgHAAgGAHg");
	this.shape_182.setTransform(13.5,5,1.39,1.39);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#152616").s().p("AAOAiIgBAAQgcgNgRgSIgBgBIAAAAQgHgEAAgJQgBgIAFgHQAFgHAIgCQAHgCAIADIAAABIACABIAAAAIACABQAVAMAUAXQAEAFAAAHQAAAHgEAFQgDAFgDABQgEACgFAAQgEAAgEgCgAgWgeQgGACgEAFQgEAFABAHQAAAGAFAFIABAAQATASAaAMIAAAAQAKAFAHgKQAIgJgIgJQgRgTgXgPIgDgCIAAAAQgEgBgDAAIgFAAg");
	this.shape_183.setTransform(13.5,5,1.39,1.39);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#D6DC3B").s().p("AAPAgIAAAAQgdgNgQgSIgBgBQgGgDgBgIQgBgIAFgGQAFgGAHgBQAGgCAHADIAAAAIACABIACABQAUANAUAWQAEAEAAAGQAAAGgEAFQgDAFgGABIgEABQgEAAgDgCg");
	this.shape_184.setTransform(13.5,5.1,1.39,1.39);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#172719").s().p("AgaBEQgFgFAAgRQAAgWgJgHQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAABQAAAAABAAQAHAGACAKQACAGAAALQAAAPADADQAFADAIgCQARgFARg+QAJghAEggQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABQgFAggIAhQgSBBgUAFIgGABQgIAAgDgCg");
	this.shape_185.setTransform(7.5,11.8,1.39,1.39);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#152616").s().p("AgaBEQgFgEAAgSQAAgWgJgHQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAABQALAIAAAZQAAAPADADQADACAKgBQAPgEAQg0QALgkAFgoQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQgFAggIAhQgSBBgUAFIgIABQgFAAgEgCg");
	this.shape_186.setTransform(7.5,11.8,1.39,1.39);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#D6DC3B").s().p("AgdAyQAAgcgJgHIBNhSQgEAggIAhQgRBAgUAFIgGABQgMAAgBgSg");
	this.shape_187.setTransform(7.5,11.8,1.39,1.39);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#172719").s().p("AAQBGIgGgBQgVgGgRhAQgFgVgEgYIgEgVQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIADAUQAEAYAGAUQAQA+ASAGQAKABADgCQADgDAAgPQAAgZALgIQAAAAABAAQAAgBABABQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgJAHAAAXQAAARgGAEQgCADgFAAIgDAAg");
	this.shape_188.setTransform(-8,12.3,1.39,1.39);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#152616").s().p("AAKBFQgUgFgShBQgFgVgEgYIgEgVQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQAFAoAMAjQAPA0APAEQAJACAEgCQADgDAAgPQAAgZALgIQAAgBABAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgGAEgCAJIgBAQQAAARgFAFQgEACgFAAg");
	this.shape_189.setTransform(-8,12.3,1.39,1.39);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#D6DC3B").s().p("AALBDQgTgFgRhAIgNhBIBNBSQgJAHAAAcQgBASgMAAIgGgBg");
	this.shape_190.setTransform(-8,12.3,1.39,1.39);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#152616").s().p("AAAAPQgLAIgNAAQgHAAgEgCQgUgIgMgZQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIALgDQALgEAKAAQAIAAAHADQANAFAGAOQAGgOAOgFQAHgDAIAAQAQAAAQAHQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQgMAZgTAIQgGACgGAAQgOAAgLgIgAAWgPQgNAFgHASQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAQANAJALAAQAGAAAEgCQAQgGALgVQgMgGgPAAQgIAAgFACgAg9gLQANAWAOAFQAEACAGAAQAMAAAMgJQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgFgSgPgFQgEgCgJAAQgNAAgOAGg");
	this.shape_191.setTransform(-0.1,-16.8,1.378,1.378);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#73B34B").s().p("AgjATQgSgHgMgZIAQgFQASgEALAFQAQAGAEATQAEgSARgHQAMgFARAEQAJACAHADQgMAZgSAHQgLAEgMgEQgIgDgFgEQgLAJgMAAQgGAAgGgCg");
	this.shape_192.setTransform(-0.1,-16.8,1.378,1.378);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#152616").s().p("AgRB1IgCAAQgxgJgVgcQgYggAKg2QAAgIAFgOQgMgKgDgPQgEgPAGgOIAAgBIABgBIACAAIAcALIAJAFQATgRAdgHIAXgDIAAgTQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIAAAVQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQgJAAgNADQgcAGgTARQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgKgFIgZgKQgFAMAEAOQAEANAKAIIABADQgFAMgBALIAAAAQgJAzAXAeQAVAeAuAFIABAAQBCAHAjglQAOgPAHgUQAIgVgDgUQgDgSgJgTQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAIgJACgMQADgLgEgLIgZAKQgDAAgEADQgBABAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQgdgYglgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgVQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIAAATQAkACAdAXIAGgDIAbgLIACAAIACABIAAABQAFANgCANQgDANgJALQAJASADASQACAWgHAWQgHAVgQAPQggAig3AAIgRgBg");
	this.shape_193.setTransform(-0.7,0,1.378,1.378);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#D6DC3B").s().p("AgSByQgigEgVgQQgogfALhEQABgKAFgOQgLgJgEgOQgEgPAGgOIAAAAIAcALQAHADADACQASgRAegHQANgDAKAAIAAgWIAHAAIAAAWQAmAAAdAZIAjgOIAAAAQAFANgDANQgCANgJAJQAJASADAUQAFAsgeAhQggAhg3AAIgSgBg");
	this.shape_194.setTransform(-0.6,0,1.378,1.378);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#172719").s().p("AgZAmIgCgCQgGgEgBgGQgCgHADgGQANgaASgTIACgDQAGgFAHAAQAIAAAGAFQAHAFACAIQABAJgEAHIgBAAIAAABQgNAUgXAUIAAABQgFAFgGAAQgFAAgFgDgAAAgdQgTAWgLAWQgFALAKAHQAJAIAKgIIAAAAQAXgUAMgUIAAgBIABAAQADgHgBgGQgCgHgFgFQgMgIgLAJIAAAAIgBABIgBAAg");
	this.shape_195.setTransform(-14,4.8,1.378,1.378);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#152616").s().p("AgUApQgEgBgEgDQgFgEgCgHQgCgGAEgHQALgZAUgUIACgDIAAAAQAFgFAIAAQAIAAAGAFQAHAFACAJQACAIgFAIIgBABQgMATgXAVIAAABQgGAEgGAAIgFAAgAACgfIAAAAIgBABIgBACQgSAWgLAVQgCAFABAFQABAFAEADQAEADAFAAQAGAAADgDIABAAQAWgUAMgTIABgCIAAAAQAEgGgCgHQgBgHgGgEQgFgDgGAAQgGAAgFAEg");
	this.shape_196.setTransform(-14,4.7,1.378,1.378);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#D6DC3B").s().p("AgaAjQgLgIAGgNQAMgZATgTIAAgDIABAAQAFgEAHAAQAHgBAGAFQAGAEACAIQABAIgEAGIAAAAIgBACQgMATgXAVIAAAAQgEAEgGAAQgGAAgFgEg");
	this.shape_197.setTransform(-14.1,4.7,1.378,1.378);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#172719").s().p("AAOAiIgBAAQgcgOgRgRIgBgBQgGgEgBgJQAAgIAFgHQAEgGAIgCQAHgCAHADIABAAIAAABIABAAIABAAIABABQAYAQARAUQAEAFABAGQAAAHgEAFIgDADQgFAFgHAAQgEAAgEgCgAgWgeQgHABgDAFQgFAGABAHQAAAHAFAEIACAAQARARAbANIABABQAKAFAIgKQAHgKgIgJQgRgUgWgOIgCgCIgBAAIgBAAQgDgCgEAAIgFABg");
	this.shape_198.setTransform(13.4,4.7,1.378,1.378);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#152616").s().p("AANAiQgcgNgRgSIgBgBQgHgEAAgJQgBgIAFgHQAFgHAIgCQAHgCAHAEIABAAIACABIACABQAXAQARATQAFAFAAAHQAAAHgEAGIgGAFQgFACgEAAQgEAAgFgCgAgWgeQgGACgEAFQgEAFABAHQAAAGAFAFIABAAQARARAbANIABAAQAEACAFgBQAFgBADgEQADgEAAgGQAAgFgDgEQgUgWgUgMIgCgBIAAAAIgBgBIAAAAQgEgBgDAAIgFAAg");
	this.shape_199.setTransform(13.4,4.6,1.378,1.378);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#D6DC3B").s().p("AAOAgQgbgNgSgRIgBgCQgFgDgBgIQgBgHAFgHQAFgGAHgBQAGgCAHADIAAAAIAAAAIACABIABABQAUAMAUAXQAEAEABAGQAAAGgEAFQgDAFgGACIgEAAQgEAAgEgCg");
	this.shape_200.setTransform(13.4,4.7,1.378,1.378);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#172719").s().p("AgaBDQgEgDgBgSQAAgXgJgHQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABABQAHAFACAKQABAGAAAMQAAAOAEAEQADADAKgDQARgEARg/QAJggAEggQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQAAABgBAAQgEAhgJAgQgRBBgUAGIgGABIgCAAQgFAAgEgDg");
	this.shape_201.setTransform(7.5,11.4,1.378,1.378);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#152616").s().p("AgZBEQgGgEAAgRQAAgXgJgIQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAIAGACAKQABAGAAAMQAAAOAEADQADACAJgBQAPgFAQg0QAKghAGgqQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQgEAggJAhQgRBBgVAFIgIABQgFAAgDgCg");
	this.shape_202.setTransform(7.4,11.4,1.378,1.378);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#D6DC3B").s().p("AgcAzQgBgdgKgHIBOhSQgEAggIAhQgSBAgSAFIgGABQgNAAAAgRg");
	this.shape_203.setTransform(7.4,11.3,1.378,1.378);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#172719").s().p("AAQBGIgGgBQgUgFgShBQgFgVgEgYIgEgUQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAABABIADAUQAEAYAFAVQARA+ASAFQAJACAEgDQADgDAAgPQAAgZALgIQAAAAABAAQAAgBABABQAAAAAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQgJAHAAAWQAAARgGAEQgDADgEAAIgDAAg");
	this.shape_204.setTransform(-7.9,11.9,1.378,1.378);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#152616").s().p("AAKBFQgUgFgShBQgFgUgEgZIgEgUQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQAGApALAiQAPA0AQAEQAJADADgDQADgDAAgPQAAgZALgIQAAgBABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgJAHAAAWQAAARgFAFQgEACgFAAg");
	this.shape_205.setTransform(-7.9,11.9,1.378,1.378);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#D6DC3B").s().p("AALBDQgTgFgRhAIgNhBIBNBSQgJAHgBAcQAAASgMAAIgGgBg");
	this.shape_206.setTransform(-7.9,11.9,1.378,1.378);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:2.9,y:11.3,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:2.9,y:11.3,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:2.9,y:11.3,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-4.9,y:12,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-4.9,y:12,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:-4.9,y:12}},{t:this.shape_65,p:{scaleX:1.386,scaleY:1.386,y:-0.3,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.386,scaleY:1.386,y:-0.3,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.386,scaleY:1.386,y:-17.3,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.386,scaleY:1.386,y:-17.3,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.386,scaleY:1.386,y:-8.1,skewY:0,x:-13.9}},{t:this.shape_60,p:{scaleX:1.386,scaleY:1.386,y:0.1,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.386,scaleY:1.386,y:0.1,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_57,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_56,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_55,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_54,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_53,p:{scaleX:1.386,scaleY:1.386,y:5.4,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_51,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_50,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_49,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_48,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_47,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_46,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_45,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_44,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_43,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_42,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_41,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_40,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_39,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_38,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_37,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_36,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_35,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_34,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_33,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_32,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_31,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_30,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_29,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_28,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_27,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_26,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_25,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_24,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_23,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_22,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_21,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_20,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_19,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_18,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_17,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_16,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_15,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_14,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_13,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_12,p:{scaleX:1.386,scaleY:1.386,y:5.4,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_10,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_9,p:{scaleX:1.386,scaleY:1.386,y:-4.2,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.1,scaleX:1.386,scaleY:1.386,y:0.1,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.386,scaleY:1.386,rotation:0,y:6.6,x:-6.4,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.386,scaleY:1.386,rotation:0,y:6.6,x:-6.4,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-6.4,y:6.6,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.386,scaleY:1.386,x:10.6,skewY:0,y:9}},{t:this.shape_4,p:{scaleX:1.386,scaleY:1.386,x:13.5,y:2,skewY:0}},{t:this.shape_3,p:{scaleX:1.386,scaleY:1.386,x:13.5,y:2,skewY:0}},{t:this.shape_2,p:{scaleX:1.386,scaleY:1.386,x:14.6,y:2.1,skewY:0}},{t:this.shape_1,p:{scaleX:1.386,scaleY:1.386,x:14.6,y:2.1,skewY:0}},{t:this.shape,p:{scaleX:1.386,scaleY:1.386,x:14.7,skewY:0,y:2.1}}]}).to({state:[{t:this.shape_71,p:{scaleX:1.379,scaleY:1.379,rotation:-15,x:5.3,y:10.9,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.379,scaleY:1.379,rotation:-15,x:5.3,y:10.9,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.379,scaleY:1.379,rotation:-15,x:5.3,y:10.9,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.379,scaleY:1.379,rotation:30,x:-7.1,y:11.3,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.379,scaleY:1.379,rotation:30,x:-7.1,y:11.2,skewY:0,skewX:0}},{t:this.shape_65,p:{scaleX:1.38,scaleY:1.38,y:-0.2,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.38,scaleY:1.38,y:-0.2,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.38,scaleY:1.38,y:-17.2,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.38,scaleY:1.38,y:-17.2,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.38,scaleY:1.38,y:-8,skewY:0,x:-13.9}},{t:this.shape_60,p:{scaleX:1.38,scaleY:1.38,y:0.2,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.38,scaleY:1.38,y:0.2,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.38,scaleY:1.38,x:1.2,y:5.4,skewY:0}},{t:this.shape_57,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_56,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_55,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_54,p:{scaleX:1.38,scaleY:1.38,x:1.2,y:5.4,skewY:0}},{t:this.shape_53,p:{scaleX:1.38,scaleY:1.38,y:5.4,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_51,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_50,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_49,p:{scaleX:1.38,scaleY:1.38,x:1.2,y:5.4,skewY:0}},{t:this.shape_48,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_47,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_46,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_45,p:{scaleX:1.38,scaleY:1.38,x:1.1,y:5.4,skewY:0}},{t:this.shape_44,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_43,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_42,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_41,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_40,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_39,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_38,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_37,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_36,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_35,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_34,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_33,p:{scaleX:1.38,scaleY:1.38,x:1.1,y:5.4,skewY:0}},{t:this.shape_32,p:{scaleX:1.38,scaleY:1.38,x:1.2,y:5.4,skewY:0}},{t:this.shape_31,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_30,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_29,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_28,p:{scaleX:1.38,scaleY:1.38,x:1.2,y:5.4,skewY:0}},{t:this.shape_27,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_26,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_25,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_24,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_23,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_22,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_21,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_20,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_19,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_18,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_17,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_16,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_15,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_14,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_13,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_12,p:{scaleX:1.38,scaleY:1.38,y:5.4,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_10,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_9,p:{scaleX:1.38,scaleY:1.38,y:-4.1,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.2,scaleX:1.38,scaleY:1.38,y:0,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.379,scaleY:1.379,rotation:30,y:7,x:-6.4,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.379,scaleY:1.379,rotation:30,y:7,x:-6.4,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.379,scaleY:1.379,rotation:30,x:-6.5,y:7,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.38,scaleY:1.38,x:10.6,skewY:0,y:9}},{t:this.shape_4,p:{scaleX:1.38,scaleY:1.38,x:13.4,y:2,skewY:0}},{t:this.shape_3,p:{scaleX:1.38,scaleY:1.38,x:13.4,y:2.1,skewY:0}},{t:this.shape_2,p:{scaleX:1.38,scaleY:1.38,x:14.5,y:2.2,skewY:0}},{t:this.shape_1,p:{scaleX:1.38,scaleY:1.38,x:14.5,y:2.1,skewY:0}},{t:this.shape,p:{scaleX:1.38,scaleY:1.38,x:14.6,skewY:0,y:2.1}}]},4).to({state:[{t:this.shape_71,p:{scaleX:1.375,scaleY:1.375,rotation:-15,x:5.3,y:11,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.375,scaleY:1.375,rotation:-15,x:5.3,y:11.1,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.375,scaleY:1.375,rotation:-15,x:5.3,y:11,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.375,scaleY:1.375,rotation:15,x:-7.2,y:11.6,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.375,scaleY:1.375,rotation:15,x:-7.2,y:11.6,skewY:0,skewX:0}},{t:this.shape_65,p:{scaleX:1.375,scaleY:1.375,y:-0.2,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.375,scaleY:1.375,y:-0.2,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.375,scaleY:1.375,y:-17.1,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.375,scaleY:1.375,y:-17.1,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.375,scaleY:1.375,y:-8,skewY:0,x:-13.9}},{t:this.shape_60,p:{scaleX:1.375,scaleY:1.375,y:0.2,x:3.9,skewY:0}},{t:this.shape_59,p:{scaleX:1.375,scaleY:1.375,y:0.2,x:3.9,skewY:0}},{t:this.shape_58,p:{scaleX:1.375,scaleY:1.375,x:1.1,y:5.5,skewY:0}},{t:this.shape_57,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_56,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_55,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_54,p:{scaleX:1.375,scaleY:1.375,x:1.1,y:5.5,skewY:0}},{t:this.shape_53,p:{scaleX:1.375,scaleY:1.375,y:5.5,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_51,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_50,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_49,p:{scaleX:1.375,scaleY:1.375,x:1.1,y:5.5,skewY:0}},{t:this.shape_48,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_47,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_46,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_45,p:{scaleX:1.375,scaleY:1.375,x:1.1,y:5.5,skewY:0}},{t:this.shape_44,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_43,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_42,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_41,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_40,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_39,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_38,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_37,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_36,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_35,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_34,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_33,p:{scaleX:1.375,scaleY:1.375,x:1.1,y:5.5,skewY:0}},{t:this.shape_32,p:{scaleX:1.375,scaleY:1.375,x:1.1,y:5.5,skewY:0}},{t:this.shape_31,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_30,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_29,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_28,p:{scaleX:1.375,scaleY:1.375,x:1.1,y:5.5,skewY:0}},{t:this.shape_27,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_26,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_25,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_24,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_23,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_22,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_21,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_20,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_19,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_18,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_17,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_16,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_15,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_14,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_13,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_12,p:{scaleX:1.375,scaleY:1.375,y:5.5,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_10,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_9,p:{scaleX:1.375,scaleY:1.375,y:-4.1,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.2,scaleX:1.375,scaleY:1.375,y:0.3,regX:12,x:1.9,skewY:0}},{t:this.shape_8,p:{scaleX:1.374,scaleY:1.374,rotation:45,y:7.2,x:-6.8,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.374,scaleY:1.374,rotation:45,y:7.2,x:-6.8,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.375,scaleY:1.375,x:10.5,skewY:0,y:9}},{t:this.shape_4,p:{scaleX:1.375,scaleY:1.375,x:13.4,y:2.1,skewY:0}},{t:this.shape_3,p:{scaleX:1.375,scaleY:1.375,x:13.4,y:2.1,skewY:0}},{t:this.shape_2,p:{scaleX:1.375,scaleY:1.375,x:14.5,y:2.2,skewY:0}},{t:this.shape_1,p:{scaleX:1.375,scaleY:1.375,x:14.5,y:2.2,skewY:0}},{t:this.shape,p:{scaleX:1.375,scaleY:1.375,x:14.6,skewY:0,y:2.1}}]},4).to({state:[]},3).to({state:[{t:this.shape_71,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:-2.9,y:11.5,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:-2.9,y:11.5,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:-2.9,y:11.5,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:4.9,y:12.3,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:4.9,y:12.2,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:4.9,y:12.2}},{t:this.shape_65,p:{scaleX:1.385,scaleY:1.385,y:0,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.385,scaleY:1.385,y:-0.1,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.385,scaleY:1.385,y:-17.1,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.385,scaleY:1.385,y:-17.1,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.385,scaleY:1.385,y:-7.9,skewY:180,x:13.9}},{t:this.shape_60,p:{scaleX:1.385,scaleY:1.385,y:0.4,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.385,scaleY:1.385,y:0.4,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.385,scaleY:1.385,x:-1.2,y:5.7,skewY:180}},{t:this.shape_57,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_56,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_55,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_54,p:{scaleX:1.385,scaleY:1.385,x:-1.2,y:5.7,skewY:180}},{t:this.shape_53,p:{scaleX:1.385,scaleY:1.385,y:5.7,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_51,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_50,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_49,p:{scaleX:1.385,scaleY:1.385,x:-1.2,y:5.6,skewY:180}},{t:this.shape_48,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_47,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_46,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_45,p:{scaleX:1.385,scaleY:1.385,x:-1.2,y:5.7,skewY:180}},{t:this.shape_44,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_43,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_42,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_41,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_40,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_39,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_38,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_37,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_36,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_35,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_34,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_33,p:{scaleX:1.385,scaleY:1.385,x:-1.2,y:5.6,skewY:180}},{t:this.shape_32,p:{scaleX:1.385,scaleY:1.385,x:-1.2,y:5.7,skewY:180}},{t:this.shape_31,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_30,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_29,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_28,p:{scaleX:1.385,scaleY:1.385,x:-1.2,y:5.7,skewY:180}},{t:this.shape_27,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_26,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_25,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_24,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_23,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_22,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_21,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_20,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_19,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_18,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_17,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_16,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_15,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_14,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_13,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_12,p:{scaleX:1.385,scaleY:1.385,y:5.7,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_10,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_9,p:{scaleX:1.385,scaleY:1.385,y:-4,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.2,scaleX:1.385,scaleY:1.385,y:0.9,regX:11.8,x:-1.7,skewY:180}},{t:this.shape_8,p:{scaleX:1.385,scaleY:1.385,rotation:0,y:6.8,x:6.4,skewY:180,skewX:0}},{t:this.shape_7,p:{scaleX:1.385,scaleY:1.385,rotation:0,y:6.8,x:6.4,skewY:180,skewX:0}},{t:this.shape_6,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:6.4,y:6.9,skewY:180,skewX:0}},{t:this.shape_5,p:{scaleX:1.385,scaleY:1.385,x:-10.6,skewY:180,y:9.2}},{t:this.shape_4,p:{scaleX:1.385,scaleY:1.385,x:-13.5,y:2.2,skewY:180}},{t:this.shape_3,p:{scaleX:1.385,scaleY:1.385,x:-13.5,y:2.3,skewY:180}},{t:this.shape_2,p:{scaleX:1.385,scaleY:1.385,x:-14.6,y:2.4,skewY:180}},{t:this.shape_1,p:{scaleX:1.385,scaleY:1.385,x:-14.6,y:2.3,skewY:180}},{t:this.shape,p:{scaleX:1.385,scaleY:1.385,x:-14.7,skewY:180,y:2.3}}]},1).to({state:[{t:this.shape_71,p:{scaleX:1.356,scaleY:1.356,rotation:0,x:-5.2,y:11.3,skewY:-165,skewX:15}},{t:this.shape_70,p:{scaleX:1.356,scaleY:1.356,rotation:0,x:-5.2,y:11.3,skewY:-165,skewX:15}},{t:this.shape_69,p:{scaleX:1.356,scaleY:1.356,rotation:0,x:-5.2,y:11.3,skewY:-165,skewX:15}},{t:this.shape_68,p:{scaleX:1.356,scaleY:1.356,rotation:0,x:6.9,y:12,skewY:150,skewX:-30}},{t:this.shape_67,p:{scaleX:1.356,scaleY:1.356,rotation:0,x:6.9,y:12,skewY:150,skewX:-30}},{t:this.shape_65,p:{scaleX:1.356,scaleY:1.356,y:-0.2,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.356,scaleY:1.356,y:-0.2,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.356,scaleY:1.356,y:-16.9,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.356,scaleY:1.356,y:-16.9,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.356,scaleY:1.356,y:-7.9,skewY:180,x:13.6}},{t:this.shape_60,p:{scaleX:1.356,scaleY:1.356,y:0.2,x:-3.9,skewY:180}},{t:this.shape_59,p:{scaleX:1.356,scaleY:1.356,y:0.2,x:-3.9,skewY:180}},{t:this.shape_58,p:{scaleX:1.356,scaleY:1.356,x:-1.2,y:5.4,skewY:180}},{t:this.shape_57,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_56,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_55,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_54,p:{scaleX:1.356,scaleY:1.356,x:-1.2,y:5.4,skewY:180}},{t:this.shape_53,p:{scaleX:1.356,scaleY:1.356,y:5.4,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_51,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_50,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_49,p:{scaleX:1.356,scaleY:1.356,x:-1.2,y:5.4,skewY:180}},{t:this.shape_48,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_47,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_46,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_45,p:{scaleX:1.356,scaleY:1.356,x:-1.1,y:5.4,skewY:180}},{t:this.shape_44,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_43,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_42,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_41,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_40,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_39,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_38,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_37,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_36,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_35,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_34,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_33,p:{scaleX:1.356,scaleY:1.356,x:-1.1,y:5.4,skewY:180}},{t:this.shape_32,p:{scaleX:1.356,scaleY:1.356,x:-1.2,y:5.4,skewY:180}},{t:this.shape_31,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_30,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_29,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_28,p:{scaleX:1.356,scaleY:1.356,x:-1.2,y:5.4,skewY:180}},{t:this.shape_27,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_26,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_25,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_24,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_23,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_22,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.4}},{t:this.shape_21,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_20,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_19,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_18,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_17,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_16,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_15,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_14,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_13,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_12,p:{scaleX:1.356,scaleY:1.356,y:5.4,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_10,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_9,p:{scaleX:1.356,scaleY:1.356,y:-4.1,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.3,scaleX:1.356,scaleY:1.356,y:0,regX:11.9,x:-1.7,skewY:180}},{t:this.shape_8,p:{scaleX:1.356,scaleY:1.356,rotation:0,y:7,x:6.3,skewY:150,skewX:-30}},{t:this.shape_7,p:{scaleX:1.356,scaleY:1.356,rotation:0,y:7,x:6.3,skewY:150,skewX:-30}},{t:this.shape_6,p:{scaleX:1.356,scaleY:1.356,rotation:0,x:6.3,y:7,skewY:150,skewX:-30}},{t:this.shape_5,p:{scaleX:1.356,scaleY:1.356,x:-10.4,skewY:180,y:8.8}},{t:this.shape_4,p:{scaleX:1.356,scaleY:1.356,x:-13.2,y:2,skewY:180}},{t:this.shape_3,p:{scaleX:1.356,scaleY:1.356,x:-13.2,y:2,skewY:180}},{t:this.shape_2,p:{scaleX:1.356,scaleY:1.356,x:-14.3,y:2.1,skewY:180}},{t:this.shape_1,p:{scaleX:1.356,scaleY:1.356,x:-14.3,y:2.1,skewY:180}},{t:this.shape,p:{scaleX:1.356,scaleY:1.356,x:-14.4,skewY:180,y:2.1}}]},4).to({state:[{t:this.shape_71,p:{scaleX:1.401,scaleY:1.401,rotation:0,x:-5.4,y:11.1,skewY:-165,skewX:15}},{t:this.shape_70,p:{scaleX:1.401,scaleY:1.401,rotation:0,x:-5.4,y:11.1,skewY:-165,skewX:15}},{t:this.shape_69,p:{scaleX:1.401,scaleY:1.401,rotation:0,x:-5.4,y:11.1,skewY:-165,skewX:15}},{t:this.shape_68,p:{scaleX:1.401,scaleY:1.401,rotation:0,x:7.3,y:11.2,skewY:165,skewX:-15}},{t:this.shape_67,p:{scaleX:1.401,scaleY:1.401,rotation:0,x:7.3,y:11.2,skewY:165,skewX:-15}},{t:this.shape_65,p:{scaleX:1.401,scaleY:1.401,y:0.1,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.401,scaleY:1.401,y:0.1,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.401,scaleY:1.401,y:-17.2,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.401,scaleY:1.401,y:-17.2,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.401,scaleY:1.401,y:-7.8,skewY:180,x:14.1}},{t:this.shape_60,p:{scaleX:1.401,scaleY:1.401,y:0.5,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.401,scaleY:1.401,y:0.5,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.401,scaleY:1.401,x:-1.2,y:5.8,skewY:180}},{t:this.shape_57,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_56,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_55,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_54,p:{scaleX:1.401,scaleY:1.401,x:-1.2,y:5.8,skewY:180}},{t:this.shape_53,p:{scaleX:1.401,scaleY:1.401,y:5.8,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_51,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_50,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_49,p:{scaleX:1.401,scaleY:1.401,x:-1.2,y:5.8,skewY:180}},{t:this.shape_48,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_47,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_46,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_45,p:{scaleX:1.401,scaleY:1.401,x:-1.2,y:5.8,skewY:180}},{t:this.shape_44,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_43,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_42,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_41,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_40,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_39,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_38,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_37,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_36,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_35,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_34,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_33,p:{scaleX:1.401,scaleY:1.401,x:-1.2,y:5.8,skewY:180}},{t:this.shape_32,p:{scaleX:1.401,scaleY:1.401,x:-1.2,y:5.8,skewY:180}},{t:this.shape_31,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_30,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_29,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_28,p:{scaleX:1.401,scaleY:1.401,x:-1.2,y:5.8,skewY:180}},{t:this.shape_27,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_26,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_25,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_24,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_23,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_22,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_21,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_20,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_19,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_18,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_17,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_16,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_15,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_14,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_13,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_12,p:{scaleX:1.401,scaleY:1.401,y:5.8,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_10,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_9,p:{scaleX:1.401,scaleY:1.401,y:-3.9,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.2,scaleX:1.401,scaleY:1.401,y:0,regX:11.9,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.4,scaleY:1.4,rotation:0,y:7.3,x:7,skewY:135,skewX:-45}},{t:this.shape_7,p:{scaleX:1.4,scaleY:1.4,rotation:0,y:7.3,x:7,skewY:135,skewX:-45}},{t:this.shape_5,p:{scaleX:1.401,scaleY:1.401,x:-10.7,skewY:180,y:9.4}},{t:this.shape_4,p:{scaleX:1.401,scaleY:1.401,x:-13.6,y:2.4,skewY:180}},{t:this.shape_3,p:{scaleX:1.401,scaleY:1.401,x:-13.6,y:2.4,skewY:180}},{t:this.shape_2,p:{scaleX:1.401,scaleY:1.401,x:-14.8,y:2.5,skewY:180}},{t:this.shape_1,p:{scaleX:1.401,scaleY:1.401,x:-14.8,y:2.5,skewY:180}},{t:this.shape,p:{scaleX:1.401,scaleY:1.401,x:-14.8,skewY:180,y:2.5}}]},4).to({state:[]},3).to({state:[{t:this.shape_190,p:{scaleX:1.39,scaleY:1.39,x:-8,y:12.3}},{t:this.shape_189,p:{scaleX:1.39,scaleY:1.39,x:-8,y:12.3}},{t:this.shape_188,p:{scaleX:1.39,scaleY:1.39,x:-8,y:12.3}},{t:this.shape_187,p:{scaleX:1.39,scaleY:1.39,y:11.8,x:7.5}},{t:this.shape_186,p:{scaleX:1.39,scaleY:1.39,y:11.8}},{t:this.shape_185,p:{scaleX:1.39,scaleY:1.39,y:11.8,x:7.5}},{t:this.shape_184,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:5.1}},{t:this.shape_183,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:5}},{t:this.shape_182,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:5}},{t:this.shape_181,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:5.1}},{t:this.shape_180,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:5.1}},{t:this.shape_179,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:5.1}},{t:this.shape_178,p:{scaleX:1.39,scaleY:1.39,y:0.4}},{t:this.shape_177,p:{scaleX:1.39,scaleY:1.39,y:0.4,x:-0.6}},{t:this.shape_176,p:{scaleX:1.39,scaleY:1.39,x:7.1,y:0.8}},{t:this.shape_175,p:{scaleX:1.39,scaleY:1.39,y:0.8}},{t:this.shape_174,p:{scaleX:1.39,scaleY:1.39,x:-7.5,y:0.8}},{t:this.shape_173,p:{scaleX:1.39,scaleY:1.39,x:-7.5,y:0.8}},{t:this.shape_172,p:{scaleX:1.39,scaleY:1.39,y:9.5}},{t:this.shape_171,p:{scaleX:1.39,scaleY:1.39,y:-16.6}},{t:this.shape_170,p:{scaleX:1.39,scaleY:1.39,y:-16.6}},{t:this.shape_169,p:{scaleX:1.39,scaleY:1.39,x:12.9,y:-7.6}},{t:this.shape_168,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_167,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_166,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_165,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_164,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_163,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_162,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_161,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_160,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_159,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_158,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_157,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_156,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_155,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_154,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_43,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:5.3}},{t:this.shape_153,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:5.3}},{t:this.shape_152,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:5.3}},{t:this.shape_151,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_150,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_149,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_148,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_147,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_146,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_145,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_144,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_143,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_142,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_141,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_140,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_139,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_138,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_137,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_136,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_24,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:10.2,y:5.3}},{t:this.shape_135,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_22,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:10.2,y:5.3}},{t:this.shape_134,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_133,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_132,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_18,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:5.3}},{t:this.shape_17,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:5.3}},{t:this.shape_131,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_15,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:5.3}},{t:this.shape_130,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_129,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_128,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_127,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_126,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_125,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_124,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_123,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_122,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_121,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_120,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_119,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_118,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_117,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_116,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_115,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_114,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_113,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_112,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_111,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_110,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_109,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_41,p:{scaleX:1.39,scaleY:1.39,x:-10.3,skewY:0,y:6}},{t:this.shape_40,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:-10.3,y:6}},{t:this.shape_108,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_107,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_106,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_105,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_104,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_103,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_102,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_101,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_100,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_99,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_98,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_97,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_96,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_95,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_94,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_93,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_92,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_91,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_90,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_89,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_88,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_87,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_86,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_85,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_84,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_83,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_82,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_81,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_80,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_10,p:{scaleX:1.39,scaleY:1.39,x:-10.3,skewY:0,y:6}},{t:this.shape_79,p:{scaleX:1.39,scaleY:1.39,y:4.1,x:-0.3}},{t:this.shape_78,p:{scaleX:1.39,scaleY:1.39,y:4.1,x:-0.3}},{t:this.shape_77,p:{scaleX:1.39,scaleY:1.39,y:4.2}},{t:this.shape_76,p:{scaleX:1.39,scaleY:1.39,y:4.1}},{t:this.shape_75,p:{scaleX:1.39,scaleY:1.39,x:-8.2,y:-3.6}},{t:this.shape_74,p:{scaleX:1.39,scaleY:1.39,y:-3.5,x:8.1}},{t:this.shape_73,p:{scaleX:1.39,scaleY:1.39,x:-13.9,y:-7.3}},{t:this.shape_72,p:{scaleX:1.39,scaleY:1.39,y:10.3}}]},1).to({state:[{t:this.shape_190,p:{scaleX:1.379,scaleY:1.379,x:-7.9,y:10.5}},{t:this.shape_189,p:{scaleX:1.379,scaleY:1.379,x:-7.9,y:10.5}},{t:this.shape_188,p:{scaleX:1.379,scaleY:1.379,x:-7.9,y:10}},{t:this.shape_187,p:{scaleX:1.379,scaleY:1.379,y:12,x:7.5}},{t:this.shape_186,p:{scaleX:1.379,scaleY:1.379,y:12.1}},{t:this.shape_185,p:{scaleX:1.379,scaleY:1.379,y:12.1,x:7.5}},{t:this.shape_184,p:{scaleX:1.379,scaleY:1.379,x:13.4,y:4.6}},{t:this.shape_183,p:{scaleX:1.379,scaleY:1.379,x:13.4,y:4.5}},{t:this.shape_182,p:{scaleX:1.379,scaleY:1.379,x:13.4,y:4.6}},{t:this.shape_181,p:{scaleX:1.379,scaleY:1.379,x:-14,y:4.6}},{t:this.shape_180,p:{scaleX:1.379,scaleY:1.379,x:-14,y:4.6}},{t:this.shape_179,p:{scaleX:1.379,scaleY:1.379,x:-14,y:4.6}},{t:this.shape_178,p:{scaleX:1.379,scaleY:1.379,y:-0.1}},{t:this.shape_177,p:{scaleX:1.379,scaleY:1.379,y:-0.1,x:-0.6}},{t:this.shape_176,p:{scaleX:1.379,scaleY:1.379,x:7,y:0.3}},{t:this.shape_175,p:{scaleX:1.379,scaleY:1.379,y:0.3}},{t:this.shape_174,p:{scaleX:1.379,scaleY:1.379,x:-7.4,y:0.3}},{t:this.shape_173,p:{scaleX:1.379,scaleY:1.379,x:-7.4,y:0.3}},{t:this.shape_172,p:{scaleX:1.379,scaleY:1.379,y:9}},{t:this.shape_171,p:{scaleX:1.379,scaleY:1.379,y:-16.9}},{t:this.shape_170,p:{scaleX:1.379,scaleY:1.379,y:-16.9}},{t:this.shape_169,p:{scaleX:1.379,scaleY:1.379,x:12.8,y:-8}},{t:this.shape_168,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_167,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_166,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_165,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_164,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_163,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_162,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_161,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_160,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_159,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_158,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_157,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_156,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_155,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_154,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_43,p:{scaleX:1.379,scaleY:1.379,x:10,skewY:0,y:4.8}},{t:this.shape_153,p:{scaleX:1.379,scaleY:1.379,x:10,y:4.8}},{t:this.shape_152,p:{scaleX:1.379,scaleY:1.379,x:10,y:4.8}},{t:this.shape_151,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_150,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_149,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_148,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_147,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_146,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_145,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_144,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_143,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_142,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_141,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_140,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_139,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_138,p:{scaleX:1.379,scaleY:1.379,y:4.9,x:10.1}},{t:this.shape_137,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_136,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_24,p:{scaleX:1.379,scaleY:1.379,skewY:0,x:10.1,y:4.8}},{t:this.shape_135,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_22,p:{scaleX:1.379,scaleY:1.379,skewY:0,x:10.1,y:4.8}},{t:this.shape_134,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_133,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_132,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_18,p:{scaleX:1.379,scaleY:1.379,x:10.1,skewY:0,y:4.8}},{t:this.shape_17,p:{scaleX:1.379,scaleY:1.379,x:10.1,skewY:0,y:4.8}},{t:this.shape_131,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_15,p:{scaleX:1.379,scaleY:1.379,x:10,skewY:0,y:4.8}},{t:this.shape_130,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_129,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_128,p:{scaleX:1.379,scaleY:1.379,y:4.9,x:10.1}},{t:this.shape_127,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_126,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_125,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_124,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_123,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_122,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_121,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_120,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_119,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_118,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_117,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_116,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_115,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_114,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_113,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_112,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_111,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_110,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_109,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_41,p:{scaleX:1.379,scaleY:1.379,x:-10.2,skewY:0,y:5.5}},{t:this.shape_40,p:{scaleX:1.379,scaleY:1.379,skewY:0,x:-10.2,y:5.5}},{t:this.shape_108,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_107,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_106,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_105,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_104,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_103,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_102,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_101,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_100,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_99,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_98,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_97,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_96,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_95,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_94,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_93,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_92,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_91,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_90,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_89,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_88,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_87,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_86,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_85,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_84,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_83,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_82,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_81,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_80,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_10,p:{scaleX:1.379,scaleY:1.379,x:-10.2,skewY:0,y:5.5}},{t:this.shape_79,p:{scaleX:1.379,scaleY:1.379,y:3.6,x:-0.3}},{t:this.shape_78,p:{scaleX:1.379,scaleY:1.379,y:3.6,x:-0.3}},{t:this.shape_77,p:{scaleX:1.379,scaleY:1.379,y:3.7}},{t:this.shape_76,p:{scaleX:1.379,scaleY:1.379,y:3.6}},{t:this.shape_75,p:{scaleX:1.379,scaleY:1.379,x:-8.1,y:-4}},{t:this.shape_74,p:{scaleX:1.379,scaleY:1.379,y:-3.9,x:8.1}},{t:this.shape_73,p:{scaleX:1.379,scaleY:1.379,x:-13.8,y:-7.7}},{t:this.shape_72,p:{scaleX:1.379,scaleY:1.379,y:9.8}}]},4).to({state:[{t:this.shape_190,p:{scaleX:1.389,scaleY:1.389,x:-8,y:12.4}},{t:this.shape_189,p:{scaleX:1.389,scaleY:1.389,x:-8,y:12.4}},{t:this.shape_188,p:{scaleX:1.389,scaleY:1.389,x:-8,y:11.9}},{t:this.shape_187,p:{scaleX:1.389,scaleY:1.389,y:10.1,x:7.5}},{t:this.shape_186,p:{scaleX:1.389,scaleY:1.389,y:10.1}},{t:this.shape_184,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:5.1}},{t:this.shape_183,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:5.1}},{t:this.shape_182,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:5.1}},{t:this.shape_181,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:5.2}},{t:this.shape_180,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:5.2}},{t:this.shape_179,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:5.2}},{t:this.shape_178,p:{scaleX:1.389,scaleY:1.389,y:0.4}},{t:this.shape_177,p:{scaleX:1.389,scaleY:1.389,y:0.5,x:-0.7}},{t:this.shape_176,p:{scaleX:1.389,scaleY:1.389,x:7.1,y:0.9}},{t:this.shape_175,p:{scaleX:1.389,scaleY:1.389,y:0.8}},{t:this.shape_174,p:{scaleX:1.389,scaleY:1.389,x:-7.5,y:0.9}},{t:this.shape_173,p:{scaleX:1.389,scaleY:1.389,x:-7.5,y:0.8}},{t:this.shape_172,p:{scaleX:1.389,scaleY:1.389,y:9.6}},{t:this.shape_171,p:{scaleX:1.389,scaleY:1.389,y:-16.5}},{t:this.shape_170,p:{scaleX:1.389,scaleY:1.389,y:-16.5}},{t:this.shape_169,p:{scaleX:1.389,scaleY:1.389,x:12.9,y:-7.5}},{t:this.shape_168,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_167,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_166,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_165,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_164,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_163,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_162,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_161,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_160,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_159,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_158,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_157,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_156,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_155,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_154,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_43,p:{scaleX:1.389,scaleY:1.389,x:10.1,skewY:0,y:5.4}},{t:this.shape_153,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_152,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_151,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_150,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_149,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_148,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_147,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_146,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_145,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_144,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_143,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_142,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_141,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_140,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_139,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_138,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_137,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_136,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_24,p:{scaleX:1.389,scaleY:1.389,skewY:0,x:10.1,y:5.4}},{t:this.shape_135,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_22,p:{scaleX:1.389,scaleY:1.389,skewY:0,x:10.1,y:5.4}},{t:this.shape_134,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_133,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_132,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_18,p:{scaleX:1.389,scaleY:1.389,x:10.1,skewY:0,y:5.4}},{t:this.shape_17,p:{scaleX:1.389,scaleY:1.389,x:10.1,skewY:0,y:5.4}},{t:this.shape_131,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_15,p:{scaleX:1.389,scaleY:1.389,x:10.1,skewY:0,y:5.4}},{t:this.shape_130,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_129,p:{scaleX:1.389,scaleY:1.389,x:10.2,y:5.4}},{t:this.shape_128,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_127,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_126,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_125,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_124,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_123,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6}},{t:this.shape_122,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_121,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_120,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_119,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_118,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_117,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_116,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_115,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_114,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_113,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_112,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_111,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_110,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_109,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_41,p:{scaleX:1.389,scaleY:1.389,x:-10.3,skewY:0,y:6.1}},{t:this.shape_40,p:{scaleX:1.389,scaleY:1.389,skewY:0,x:-10.3,y:6.1}},{t:this.shape_108,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_107,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_106,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_105,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_104,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_103,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_102,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_101,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_100,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_99,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_98,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_97,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_96,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_95,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_94,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_93,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_92,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_91,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_90,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_89,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_88,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_87,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_86,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_85,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_84,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_83,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_82,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_81,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_80,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_10,p:{scaleX:1.389,scaleY:1.389,x:-10.3,skewY:0,y:6.1}},{t:this.shape_79,p:{scaleX:1.389,scaleY:1.389,y:4.2,x:-0.3}},{t:this.shape_78,p:{scaleX:1.389,scaleY:1.389,y:4.2,x:-0.3}},{t:this.shape_77,p:{scaleX:1.389,scaleY:1.389,y:4.2}},{t:this.shape_76,p:{scaleX:1.389,scaleY:1.389,y:4.2}},{t:this.shape_75,p:{scaleX:1.389,scaleY:1.389,x:-8.2,y:-3.5}},{t:this.shape_74,p:{scaleX:1.389,scaleY:1.389,y:-3.4,x:8.1}},{t:this.shape_73,p:{scaleX:1.389,scaleY:1.389,x:-13.9,y:-7.2}},{t:this.shape_72,p:{scaleX:1.389,scaleY:1.389,y:10.4}}]},4).to({state:[]},3).to({state:[{t:this.shape_206,p:{scaleX:1.378,scaleY:1.378,x:-7.9,y:11.9}},{t:this.shape_205,p:{scaleX:1.378,scaleY:1.378,x:-7.9,y:11.9}},{t:this.shape_204,p:{scaleX:1.378,scaleY:1.378,x:-7.9,y:11.9}},{t:this.shape_203,p:{scaleX:1.378,scaleY:1.378,x:7.4,y:11.3}},{t:this.shape_202,p:{scaleX:1.378,scaleY:1.378,x:7.4,y:11.4}},{t:this.shape_201,p:{scaleX:1.378,scaleY:1.378,y:11.4,x:7.5}},{t:this.shape_200,p:{scaleX:1.378,scaleY:1.378,x:13.4,y:4.7}},{t:this.shape_199,p:{scaleX:1.378,scaleY:1.378,x:13.4,y:4.6}},{t:this.shape_198,p:{scaleX:1.378,scaleY:1.378,x:13.4,y:4.7}},{t:this.shape_197,p:{scaleX:1.378,scaleY:1.378,x:-14.1,y:4.7}},{t:this.shape_196,p:{scaleX:1.378,scaleY:1.378,x:-14,y:4.7}},{t:this.shape_195,p:{scaleX:1.378,scaleY:1.378,x:-14,y:4.8}},{t:this.shape_194,p:{scaleX:1.378,scaleY:1.378,y:0}},{t:this.shape_193,p:{scaleX:1.378,scaleY:1.378,y:0}},{t:this.shape_192,p:{scaleX:1.378,scaleY:1.378,y:-16.8}},{t:this.shape_191,p:{scaleX:1.378,scaleY:1.378,y:-16.8}}]},1).to({state:[{t:this.shape_206,p:{scaleX:1.388,scaleY:1.388,x:-8,y:10.9}},{t:this.shape_205,p:{scaleX:1.388,scaleY:1.388,x:-8,y:10.9}},{t:this.shape_204,p:{scaleX:1.388,scaleY:1.388,x:-8,y:10.9}},{t:this.shape_203,p:{scaleX:1.388,scaleY:1.388,x:7.5,y:12.1}},{t:this.shape_202,p:{scaleX:1.388,scaleY:1.388,x:7.5,y:12.1}},{t:this.shape_201,p:{scaleX:1.388,scaleY:1.388,y:12.1,x:7.5}},{t:this.shape_200,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:4.9}},{t:this.shape_199,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:4.8}},{t:this.shape_198,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:4.9}},{t:this.shape_197,p:{scaleX:1.388,scaleY:1.388,x:-14.2,y:4.9}},{t:this.shape_196,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:4.9}},{t:this.shape_195,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:4.9}},{t:this.shape_194,p:{scaleX:1.388,scaleY:1.388,y:0.1}},{t:this.shape_193,p:{scaleX:1.388,scaleY:1.388,y:0.2}},{t:this.shape_192,p:{scaleX:1.388,scaleY:1.388,y:-16.8}},{t:this.shape_191,p:{scaleX:1.388,scaleY:1.388,y:-16.8}}]},4).to({state:[{t:this.shape_206,p:{scaleX:1.37,scaleY:1.37,x:-7.9,y:12.4}},{t:this.shape_205,p:{scaleX:1.37,scaleY:1.37,x:-7.9,y:12.4}},{t:this.shape_204,p:{scaleX:1.37,scaleY:1.37,x:-7.9,y:12.4}},{t:this.shape_203,p:{scaleX:1.37,scaleY:1.37,x:7.4,y:10.4}},{t:this.shape_202,p:{scaleX:1.37,scaleY:1.37,x:7.4,y:10.4}},{t:this.shape_201,p:{scaleX:1.37,scaleY:1.37,y:10.4,x:7.4}},{t:this.shape_200,p:{scaleX:1.37,scaleY:1.37,x:13.3,y:4.7}},{t:this.shape_199,p:{scaleX:1.37,scaleY:1.37,x:13.3,y:4.7}},{t:this.shape_198,p:{scaleX:1.37,scaleY:1.37,x:13.3,y:4.7}},{t:this.shape_197,p:{scaleX:1.37,scaleY:1.37,x:-14,y:4.8}},{t:this.shape_196,p:{scaleX:1.37,scaleY:1.37,x:-14,y:4.7}},{t:this.shape_195,p:{scaleX:1.37,scaleY:1.37,x:-13.9,y:4.8}},{t:this.shape_194,p:{scaleX:1.37,scaleY:1.37,y:0}},{t:this.shape_193,p:{scaleX:1.37,scaleY:1.37,y:0}},{t:this.shape_192,p:{scaleX:1.37,scaleY:1.37,y:-16.7}},{t:this.shape_191,p:{scaleX:1.37,scaleY:1.37,y:-16.7}}]},4).to({state:[]},3).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:11,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:11,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:11,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:11.8,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:11.8,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:-4.9,y:11.8}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-0.5,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-0.5,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-17.6,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-17.6,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-8.4,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:-0.1,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:-0.1,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:5.2,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.2}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.2}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.2}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:5.2,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:5.2,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.1}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.1}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.2}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:5.2,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.2}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.1}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.2}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:5.2,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.1}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.2}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.2}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.2}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.1}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.2}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:5.2,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:5.2,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.1}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.1}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:5.2,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.1}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.1}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.2}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.1}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.2}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.2}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.1}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.1}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.2}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.1}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:5.2,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.2}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.1}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-4.4,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.6,scaleX:1.387,scaleY:1.387,y:0.4,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.387,scaleY:1.387,rotation:0,y:6.4,x:-6.5,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.387,scaleY:1.387,rotation:0,y:6.4,x:-6.5,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-6.5,y:6.4,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:8.7}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:1.8,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:1.8,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:1.9,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:1.9,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:1.8}}]},1).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:3.2,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:3.2,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:3.2,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:3.9,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:3.9,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:-4.9,y:3.9}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-8.4,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-8.4,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-25.4,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-25.4,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-16.2,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:-8,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:-8,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-2.7,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-2.7,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:-2.7,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-2.7,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-2.7,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-2.7,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-2.7,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-2.7,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:-2.7,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-12.3,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.2,scaleX:1.387,scaleY:1.387,y:-8.6,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.387,scaleY:1.387,rotation:22,y:-1.6,x:-7.6,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.387,scaleY:1.387,rotation:22,y:-1.6,x:-7.6,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.387,scaleY:1.387,rotation:23.7,x:-7.8,y:-2.1,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:0.9}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-6.1,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-6.1,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-6,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-6,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:-6}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:-5.2,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-5.2,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-5.2,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-4.5,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-4.5,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:-4.9,y:-4.5}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-16.8,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-16.8,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-33.8,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-33.8,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-24.6,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:-16.4,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:-16.4,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-11.1,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-11.1,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:-11.1,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-11.1,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-11.1,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-11.1,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-11.1,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-11.1,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:-11.1,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-20.7,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.3,scaleX:1.387,scaleY:1.387,y:-16.4,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.387,scaleY:1.387,rotation:40.7,y:-11.1,x:-8.4,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.387,scaleY:1.387,rotation:40.7,y:-11.1,x:-8.4,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.387,scaleY:1.387,rotation:45,x:-8.6,y:-11,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:-7.5}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-14.5,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-14.5,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-14.4,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-14.4,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:-14.4}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:-13.2,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-13.2,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-13.2,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-12.5,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-12.5,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:-4.9,y:-12.5}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-24.8,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-24.8,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-41.8,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-41.8,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-32.6,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:-24.4,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:-24.4,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-19.1,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-19.1,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:-19.1,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-19.1,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-19.1,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-19.1,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-19.1,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-19.1,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:-19.1,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-28.7,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.6,scaleX:1.387,scaleY:1.387,y:-24.3,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.386,scaleY:1.386,rotation:67.4,y:-20.7,x:-9.6,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.386,scaleY:1.386,rotation:67.4,y:-21,x:-9.3,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.386,scaleY:1.386,rotation:69.7,x:-9.1,y:-20.8,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:-15.5}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-22.5,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-22.5,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-22.4,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-22.4,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:-22.4}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:-21.4,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-21.3,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:-21.4,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-20.6,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-20.6,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:-4.9,y:-20.6}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-32.9,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-32.9,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-50,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-50,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-40.8,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:-32.5,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:-32.5,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-27.2,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-27.2,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:-27.2,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.3}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-27.2,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.3}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-27.2,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.3}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-27.2,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-27.2,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.3}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-27.2,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.3}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.3}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.3}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.3}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.3}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:-27.2,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.3}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-36.8,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.5,scaleX:1.387,scaleY:1.387,y:-32.7,regX:12,x:1.9,skewY:0}},{t:this.shape_8,p:{scaleX:1.387,scaleY:1.387,rotation:90,y:-29.4,x:-9.4,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.386,scaleY:1.386,rotation:90,y:-29.9,x:-9.7,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.386,scaleY:1.386,rotation:90,x:-9.7,y:-29.9,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:-23.7}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-30.6,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-30.6,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-30.5,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-30.5,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:-30.6}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:-13.2,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-13.2,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-13.2,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-12.5,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-12.5,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:-4.9,y:-12.5}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-24.8,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-24.8,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-41.8,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-41.8,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-32.6,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:-24.4,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:-24.4,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-19.1,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-19.1,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:-19.1,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-19.1,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-19.1,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-19.1,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-19.1,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-19.1,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:-19.1,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-28.7,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.5,scaleX:1.387,scaleY:1.387,y:-24.2,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.387,scaleY:1.387,rotation:67.4,y:-20.9,x:-9.6,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.386,scaleY:1.386,rotation:67.4,y:-21.1,x:-9.3,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.387,scaleY:1.386,rotation:69.7,x:-9.1,y:-20.8,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:-15.5}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-22.5,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-22.5,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-22.4,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-22.4,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:-22.4}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:-5.2,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-5.2,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-5.2,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-4.4,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-4.4,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:-4.9,y:-4.4}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-16.7,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-16.7,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-33.8,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-33.8,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-24.6,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:-16.3,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:-16.3,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-11,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-11,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:-11,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-11,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-11,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-11,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-11,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-11,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:-11,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-20.6,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.3,scaleX:1.387,scaleY:1.387,y:-16.4,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.387,scaleY:1.387,rotation:40.7,y:-11.3,x:-8.4,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.387,scaleY:1.387,rotation:40.7,y:-11.3,x:-8.4,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.387,scaleY:1.387,rotation:45,x:-8.6,y:-11.1,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:-7.5}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-14.4,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-14.4,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-14.3,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-14.3,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:-14.4}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:3.4,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:3.4,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:3.4,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:4.1,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:4.1,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:-4.9,y:4.1}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-8.2,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-8.2,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-25.2,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-25.2,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-16,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:-7.8,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:-7.8,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-2.5,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-2.5,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:-2.5,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-2.5,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-2.5,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-2.5,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-2.5,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-2.5,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:-2.5,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-12.1,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.3,scaleX:1.387,scaleY:1.387,y:-8.1,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.387,scaleY:1.387,rotation:22,y:-1.8,x:-7.6,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.387,scaleY:1.387,rotation:22,y:-1.8,x:-7.6,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.387,scaleY:1.387,rotation:23.7,x:-7.7,y:-1.8,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:1.1}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-5.9,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-5.9,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-5.8,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-5.8,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:-5.8}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:11.5,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:11.5,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:11.5,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:12.2,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:12.2,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:-4.9,y:12.2}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-0.1,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-0.1,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-17.1,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-17.1,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-7.9,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:0.3,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:0.3,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:5.6,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:5.6,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:5.6,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:5.6,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:5.6,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:5.6,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:5.6,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:5.6,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:5.6,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-4,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.4,scaleX:1.387,scaleY:1.387,y:0.2,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.387,scaleY:1.387,rotation:0,y:6.8,x:-6.5,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.387,scaleY:1.387,rotation:0,y:6.8,x:-6.5,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-6.5,y:6.9,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:9.2}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:2.2,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:2.2,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:2.3,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:2.3,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:2.3}}]},3).to({state:[]},2).to({state:[{t:this.shape_71,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:-2.8,y:11.5,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:-2.8,y:11.5,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:-2.8,y:11.5,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:5,y:12.2,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:5,y:12.2,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:5,y:12.2}},{t:this.shape_65,p:{scaleX:1.385,scaleY:1.385,y:-0.1,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.385,scaleY:1.385,y:-0.1,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.385,scaleY:1.385,y:-17.1,skewY:180,x:0.8}},{t:this.shape_62,p:{scaleX:1.385,scaleY:1.385,y:-17.1,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.385,scaleY:1.385,y:-7.9,skewY:180,x:14}},{t:this.shape_60,p:{scaleX:1.385,scaleY:1.385,y:0.4,x:-3.9,skewY:180}},{t:this.shape_59,p:{scaleX:1.385,scaleY:1.385,y:0.4,x:-3.9,skewY:180}},{t:this.shape_58,p:{scaleX:1.385,scaleY:1.385,x:-1.1,y:5.7,skewY:180}},{t:this.shape_57,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_56,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_55,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_54,p:{scaleX:1.385,scaleY:1.385,x:-1.1,y:5.6,skewY:180}},{t:this.shape_53,p:{scaleX:1.385,scaleY:1.385,y:5.6,skewY:180,x:-1.1}},{t:this.shape_52,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_51,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_50,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_49,p:{scaleX:1.385,scaleY:1.385,x:-1.1,y:5.6,skewY:180}},{t:this.shape_48,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_47,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_46,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.1,y:5.6}},{t:this.shape_45,p:{scaleX:1.385,scaleY:1.385,x:-1.1,y:5.6,skewY:180}},{t:this.shape_44,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_43,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_42,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.1,y:5.6}},{t:this.shape_41,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_40,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.1,y:5.6}},{t:this.shape_39,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_38,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_37,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_36,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_35,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_34,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_33,p:{scaleX:1.385,scaleY:1.385,x:-1.1,y:5.6,skewY:180}},{t:this.shape_32,p:{scaleX:1.385,scaleY:1.385,x:-1.1,y:5.6,skewY:180}},{t:this.shape_31,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.1,y:5.6}},{t:this.shape_30,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.1,y:5.6}},{t:this.shape_29,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_28,p:{scaleX:1.385,scaleY:1.385,x:-1.1,y:5.7,skewY:180}},{t:this.shape_27,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_26,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_25,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_24,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_23,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_22,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_21,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_20,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_19,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_18,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_17,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_16,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_15,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_14,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_13,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.1,y:5.6}},{t:this.shape_12,p:{scaleX:1.385,scaleY:1.385,y:5.6,skewY:180,x:-1.1}},{t:this.shape_11,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.1,y:5.6}},{t:this.shape_10,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_9,p:{scaleX:1.385,scaleY:1.385,y:-4,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.5,scaleX:1.385,scaleY:1.385,y:0.3,regX:11.9,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.385,scaleY:1.385,rotation:0,y:6.8,x:6.5,skewY:180,skewX:0}},{t:this.shape_7,p:{scaleX:1.385,scaleY:1.385,rotation:0,y:6.8,x:6.5,skewY:180,skewX:0}},{t:this.shape_6,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:6.5,y:6.9,skewY:180,skewX:0}},{t:this.shape_5,p:{scaleX:1.385,scaleY:1.385,x:-10.6,skewY:180,y:9.2}},{t:this.shape_4,p:{scaleX:1.385,scaleY:1.385,x:-13.4,y:2.2,skewY:180}},{t:this.shape_3,p:{scaleX:1.385,scaleY:1.385,x:-13.4,y:2.3,skewY:180}},{t:this.shape_2,p:{scaleX:1.385,scaleY:1.385,x:-14.6,y:2.4,skewY:180}},{t:this.shape_1,p:{scaleX:1.385,scaleY:1.385,x:-14.5,y:2.3,skewY:180}},{t:this.shape,p:{scaleX:1.385,scaleY:1.385,x:-14.6,skewY:180,y:2.3}}]},1).to({state:[{t:this.shape_71,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:2.8,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:2.8,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:2.8,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:4.9,y:3.5,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:4.9,y:3.5,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:4.9,y:3.5}},{t:this.shape_65,p:{scaleX:1.388,scaleY:1.388,y:-8.8,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.388,scaleY:1.388,y:-8.8,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.388,scaleY:1.388,y:-25.9,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.388,scaleY:1.388,y:-25.9,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.388,scaleY:1.388,y:-16.7,skewY:180,x:14}},{t:this.shape_60,p:{scaleX:1.388,scaleY:1.388,y:-8.4,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.388,scaleY:1.388,y:-8.4,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-3.1,skewY:180}},{t:this.shape_57,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_56,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_55,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_54,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-3.1,skewY:180}},{t:this.shape_53,p:{scaleX:1.388,scaleY:1.388,y:-3.1,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_51,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_50,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_49,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-3.1,skewY:180}},{t:this.shape_48,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_47,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_46,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_45,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-3.1,skewY:180}},{t:this.shape_44,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_43,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_42,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_41,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_40,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_39,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_38,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_37,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_36,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_35,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_34,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_33,p:{scaleX:1.388,scaleY:1.388,x:-1.1,y:-3.1,skewY:180}},{t:this.shape_32,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-3.1,skewY:180}},{t:this.shape_31,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_30,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_29,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_28,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-3.1,skewY:180}},{t:this.shape_27,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_26,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_25,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_24,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_23,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_22,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_21,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_20,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_19,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_18,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_17,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_16,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_15,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_14,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_13,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_12,p:{scaleX:1.388,scaleY:1.388,y:-3.1,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_10,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_9,p:{scaleX:1.388,scaleY:1.388,y:-12.7,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.2,scaleX:1.388,scaleY:1.388,y:-8.4,regX:11.9,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.388,scaleY:1.388,rotation:0,y:-1.7,x:7.7,skewY:158,skewX:-22}},{t:this.shape_7,p:{scaleX:1.388,scaleY:1.388,rotation:0,y:-1.7,x:7.7,skewY:158,skewX:-22}},{t:this.shape_6,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:7.8,y:-2,skewY:156.3,skewX:-23.7}},{t:this.shape_5,p:{scaleX:1.388,scaleY:1.388,x:-10.6,skewY:180,y:0.5}},{t:this.shape_4,p:{scaleX:1.388,scaleY:1.388,x:-13.5,y:-6.5,skewY:180}},{t:this.shape_3,p:{scaleX:1.388,scaleY:1.388,x:-13.5,y:-6.5,skewY:180}},{t:this.shape_2,p:{scaleX:1.388,scaleY:1.388,x:-14.6,y:-6.4,skewY:180}},{t:this.shape_1,p:{scaleX:1.388,scaleY:1.388,x:-14.6,y:-6.4,skewY:180}},{t:this.shape,p:{scaleX:1.388,scaleY:1.388,x:-14.7,skewY:180,y:-6.4}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:-5.3,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:-5.3,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:-5.3,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:4.9,y:-4.6,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:4.9,y:-4.6,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:4.9,y:-4.6}},{t:this.shape_65,p:{scaleX:1.388,scaleY:1.388,y:-16.9,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.388,scaleY:1.388,y:-16.9,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.388,scaleY:1.388,y:-34,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.388,scaleY:1.388,y:-34,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.388,scaleY:1.388,y:-24.8,skewY:180,x:14}},{t:this.shape_60,p:{scaleX:1.388,scaleY:1.388,y:-16.5,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.388,scaleY:1.388,y:-16.5,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-11.2,skewY:180}},{t:this.shape_57,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_56,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_55,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_54,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-11.2,skewY:180}},{t:this.shape_53,p:{scaleX:1.388,scaleY:1.388,y:-11.2,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_51,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_50,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_49,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-11.2,skewY:180}},{t:this.shape_48,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_47,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_46,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_45,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-11.2,skewY:180}},{t:this.shape_44,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_43,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_42,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_41,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_40,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_39,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_38,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_37,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_36,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_35,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_34,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_33,p:{scaleX:1.388,scaleY:1.388,x:-1.1,y:-11.2,skewY:180}},{t:this.shape_32,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-11.2,skewY:180}},{t:this.shape_31,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_30,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_29,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_28,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-11.2,skewY:180}},{t:this.shape_27,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_26,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_25,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_24,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_23,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_22,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_21,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_20,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_19,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_18,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_17,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_16,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_15,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_14,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_13,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_12,p:{scaleX:1.388,scaleY:1.388,y:-11.2,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_10,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_9,p:{scaleX:1.388,scaleY:1.388,y:-20.8,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.3,scaleX:1.388,scaleY:1.388,y:-16.3,regX:11.9,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.388,scaleY:1.388,rotation:0,y:-11.4,x:8.4,skewY:139.2,skewX:-40.8}},{t:this.shape_7,p:{scaleX:1.388,scaleY:1.388,rotation:0,y:-11.4,x:8.4,skewY:139.2,skewX:-40.8}},{t:this.shape_6,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:8.6,y:-11.2,skewY:135,skewX:-45}},{t:this.shape_5,p:{scaleX:1.388,scaleY:1.388,x:-10.6,skewY:180,y:-7.6}},{t:this.shape_4,p:{scaleX:1.388,scaleY:1.388,x:-13.5,y:-14.6,skewY:180}},{t:this.shape_3,p:{scaleX:1.388,scaleY:1.388,x:-13.5,y:-14.6,skewY:180}},{t:this.shape_2,p:{scaleX:1.388,scaleY:1.388,x:-14.6,y:-14.5,skewY:180}},{t:this.shape_1,p:{scaleX:1.388,scaleY:1.388,x:-14.6,y:-14.5,skewY:180}},{t:this.shape,p:{scaleX:1.388,scaleY:1.388,x:-14.7,skewY:180,y:-14.5}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:-12.6,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:-12.6,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:-12.6,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:4.9,y:-11.9,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:4.9,y:-11.9,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:4.9,y:-11.9}},{t:this.shape_65,p:{scaleX:1.388,scaleY:1.388,y:-24.2,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.388,scaleY:1.388,y:-24.2,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.388,scaleY:1.388,y:-41.3,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.388,scaleY:1.388,y:-41.3,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.388,scaleY:1.388,y:-32.1,skewY:180,x:14}},{t:this.shape_60,p:{scaleX:1.388,scaleY:1.388,y:-23.8,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.388,scaleY:1.388,y:-23.8,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-18.5,skewY:180}},{t:this.shape_57,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_56,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_55,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_54,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-18.5,skewY:180}},{t:this.shape_53,p:{scaleX:1.388,scaleY:1.388,y:-18.5,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_51,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_50,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_49,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-18.5,skewY:180}},{t:this.shape_48,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_47,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_46,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_45,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-18.5,skewY:180}},{t:this.shape_44,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_43,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_42,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_41,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_40,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_39,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_38,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_37,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_36,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_35,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_34,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_33,p:{scaleX:1.388,scaleY:1.388,x:-1.1,y:-18.5,skewY:180}},{t:this.shape_32,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-18.5,skewY:180}},{t:this.shape_31,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_30,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_29,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_28,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-18.5,skewY:180}},{t:this.shape_27,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_26,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_25,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_24,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_23,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_22,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_21,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_20,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_19,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_18,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_17,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_16,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_15,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_14,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_13,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_12,p:{scaleX:1.388,scaleY:1.388,y:-18.5,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_10,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_9,p:{scaleX:1.388,scaleY:1.388,y:-28.1,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.1,scaleX:1.388,scaleY:1.388,y:-24.7,regX:11.9,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.388,scaleY:1.388,rotation:0,y:-20.3,x:9.6,skewY:112.6,skewX:-67.4}},{t:this.shape_7,p:{scaleX:1.388,scaleY:1.388,rotation:0,y:-20.6,x:9.3,skewY:112.6,skewX:-67.4}},{t:this.shape_6,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:9.2,y:-20.4,skewY:110.3,skewX:-69.7}},{t:this.shape_5,p:{scaleX:1.388,scaleY:1.388,x:-10.6,skewY:180,y:-14.9}},{t:this.shape_4,p:{scaleX:1.388,scaleY:1.388,x:-13.5,y:-21.9,skewY:180}},{t:this.shape_3,p:{scaleX:1.388,scaleY:1.388,x:-13.5,y:-21.9,skewY:180}},{t:this.shape_2,p:{scaleX:1.388,scaleY:1.388,x:-14.6,y:-21.8,skewY:180}},{t:this.shape_1,p:{scaleX:1.388,scaleY:1.388,x:-14.6,y:-21.8,skewY:180}},{t:this.shape,p:{scaleX:1.388,scaleY:1.388,x:-14.7,skewY:180,y:-21.8}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.384,scaleY:1.384,rotation:0,x:-2.9,y:-21.5,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.384,scaleY:1.384,rotation:0,x:-2.9,y:-21.5,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.384,scaleY:1.384,rotation:0,x:-2.9,y:-21.5,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.384,scaleY:1.384,rotation:0,x:4.9,y:-20.8,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.384,scaleY:1.384,rotation:0,x:4.9,y:-20.8,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:4.9,y:-20.8}},{t:this.shape_65,p:{scaleX:1.384,scaleY:1.384,y:-33.1,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.384,scaleY:1.384,y:-33.1,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.384,scaleY:1.384,y:-50.1,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.384,scaleY:1.384,y:-50.1,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.384,scaleY:1.384,y:-40.9,skewY:180,x:13.9}},{t:this.shape_60,p:{scaleX:1.384,scaleY:1.384,y:-32.7,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.384,scaleY:1.384,y:-32.7,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.384,scaleY:1.384,x:-1.2,y:-27.4,skewY:180}},{t:this.shape_57,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_56,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_55,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_54,p:{scaleX:1.384,scaleY:1.384,x:-1.2,y:-27.4,skewY:180}},{t:this.shape_53,p:{scaleX:1.384,scaleY:1.384,y:-27.4,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_51,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_50,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_49,p:{scaleX:1.384,scaleY:1.384,x:-1.2,y:-27.4,skewY:180}},{t:this.shape_48,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_47,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_46,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_45,p:{scaleX:1.384,scaleY:1.384,x:-1.2,y:-27.4,skewY:180}},{t:this.shape_44,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_43,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_42,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_41,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_40,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_39,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_38,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_37,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_36,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_35,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_34,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_33,p:{scaleX:1.384,scaleY:1.384,x:-1.1,y:-27.4,skewY:180}},{t:this.shape_32,p:{scaleX:1.384,scaleY:1.384,x:-1.2,y:-27.4,skewY:180}},{t:this.shape_31,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_30,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_29,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_28,p:{scaleX:1.384,scaleY:1.384,x:-1.2,y:-27.4,skewY:180}},{t:this.shape_27,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_26,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_25,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_24,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_23,p:{scaleX:1.384,scaleY:1.384,x:-1.1,skewY:180,y:-27.4}},{t:this.shape_22,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_21,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_20,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_19,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_18,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_17,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_16,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_15,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_14,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_13,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_12,p:{scaleX:1.384,scaleY:1.384,y:-27.4,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_10,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_9,p:{scaleX:1.384,scaleY:1.384,y:-37,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.7,scaleX:1.384,scaleY:1.384,y:-32.4,regX:12,x:-2,skewY:180}},{t:this.shape_8,p:{scaleX:1.384,scaleY:1.384,rotation:0,y:-29.9,x:9.3,skewY:90,skewX:-90}},{t:this.shape_7,p:{scaleX:1.383,scaleY:1.383,rotation:0,y:-30.1,x:9.6,skewY:90,skewX:-90}},{t:this.shape_6,p:{scaleX:1.383,scaleY:1.383,rotation:0,x:9.6,y:-30.1,skewY:90,skewX:-90}},{t:this.shape_5,p:{scaleX:1.384,scaleY:1.384,x:-10.6,skewY:180,y:-23.8}},{t:this.shape_4,p:{scaleX:1.384,scaleY:1.384,x:-13.5,y:-30.8,skewY:180}},{t:this.shape_3,p:{scaleX:1.384,scaleY:1.384,x:-13.5,y:-30.7,skewY:180}},{t:this.shape_2,p:{scaleX:1.384,scaleY:1.384,x:-14.6,y:-30.7,skewY:180}},{t:this.shape_1,p:{scaleX:1.384,scaleY:1.384,x:-14.6,y:-30.7,skewY:180}},{t:this.shape,p:{scaleX:1.384,scaleY:1.384,x:-14.7,skewY:180,y:-30.7}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.392,scaleY:1.392,rotation:0,x:-2.8,y:-14.1,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.392,scaleY:1.392,rotation:0,x:-2.8,y:-14,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.392,scaleY:1.392,rotation:0,x:-2.8,y:-14.1,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.392,scaleY:1.392,rotation:0,x:5,y:-13.3,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.392,scaleY:1.392,rotation:0,x:5.1,y:-13.3,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:5,y:-13.3}},{t:this.shape_65,p:{scaleX:1.392,scaleY:1.392,y:-25.7,skewY:180,x:0.9}},{t:this.shape_64,p:{scaleX:1.392,scaleY:1.392,y:-25.7,skewY:180,x:0.9}},{t:this.shape_63,p:{scaleX:1.392,scaleY:1.392,y:-42.8,skewY:180,x:0.8}},{t:this.shape_62,p:{scaleX:1.392,scaleY:1.392,y:-42.8,skewY:180,x:0.8}},{t:this.shape_61,p:{scaleX:1.392,scaleY:1.392,y:-33.5,skewY:180,x:14.1}},{t:this.shape_60,p:{scaleX:1.392,scaleY:1.392,y:-25.2,x:-3.9,skewY:180}},{t:this.shape_59,p:{scaleX:1.392,scaleY:1.392,y:-25.2,x:-3.9,skewY:180}},{t:this.shape_58,p:{scaleX:1.392,scaleY:1.392,x:-1.1,y:-19.9,skewY:180}},{t:this.shape_57,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_56,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_55,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_54,p:{scaleX:1.392,scaleY:1.392,x:-1.1,y:-19.9,skewY:180}},{t:this.shape_53,p:{scaleX:1.392,scaleY:1.392,y:-19.9,skewY:180,x:-1.1}},{t:this.shape_52,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_51,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_50,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_49,p:{scaleX:1.392,scaleY:1.392,x:-1.1,y:-19.9,skewY:180}},{t:this.shape_48,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_47,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_46,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-19.9}},{t:this.shape_45,p:{scaleX:1.392,scaleY:1.392,x:-1.1,y:-19.9,skewY:180}},{t:this.shape_44,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_43,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_42,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-20}},{t:this.shape_41,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_40,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-19.9}},{t:this.shape_39,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_38,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_37,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_36,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_35,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_34,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_33,p:{scaleX:1.392,scaleY:1.392,x:-1,y:-19.9,skewY:180}},{t:this.shape_32,p:{scaleX:1.392,scaleY:1.392,x:-1.1,y:-19.9,skewY:180}},{t:this.shape_31,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-20}},{t:this.shape_30,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-20}},{t:this.shape_29,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_28,p:{scaleX:1.392,scaleY:1.392,x:-1.1,y:-19.9,skewY:180}},{t:this.shape_27,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-20}},{t:this.shape_26,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_25,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_24,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-19.9}},{t:this.shape_23,p:{scaleX:1.392,scaleY:1.392,x:-1,skewY:180,y:-20}},{t:this.shape_22,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-19.9}},{t:this.shape_21,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-19.9}},{t:this.shape_20,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_19,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_18,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_17,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_16,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_15,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_14,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-20}},{t:this.shape_13,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-20}},{t:this.shape_12,p:{scaleX:1.392,scaleY:1.392,y:-19.9,skewY:180,x:-1.1}},{t:this.shape_11,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-20}},{t:this.shape_10,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_9,p:{scaleX:1.392,scaleY:1.392,y:-29.6,skewY:180,x:-3.2}},{t:this.instance,p:{regY:13,scaleX:1.392,scaleY:1.392,y:-24.3,regX:11.8,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.391,scaleY:1.391,rotation:0,y:-20.7,x:9.7,skewY:112.6,skewX:-67.4}},{t:this.shape_7,p:{scaleX:1.391,scaleY:1.391,rotation:0,y:-20.7,x:9.3,skewY:112.6,skewX:-67.4}},{t:this.shape_6,p:{scaleX:1.391,scaleY:1.391,rotation:0,x:9.1,y:-20.1,skewY:110.3,skewX:-69.7}},{t:this.shape_5,p:{scaleX:1.392,scaleY:1.392,x:-10.6,skewY:180,y:-16.4}},{t:this.shape_4,p:{scaleX:1.392,scaleY:1.392,x:-13.4,y:-23.4,skewY:180}},{t:this.shape_3,p:{scaleX:1.392,scaleY:1.392,x:-13.5,y:-23.3,skewY:180}},{t:this.shape_2,p:{scaleX:1.392,scaleY:1.392,x:-14.6,y:-23.2,skewY:180}},{t:this.shape_1,p:{scaleX:1.392,scaleY:1.392,x:-14.6,y:-23.3,skewY:180}},{t:this.shape,p:{scaleX:1.392,scaleY:1.392,x:-14.7,skewY:180,y:-23.3}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.389,scaleY:1.389,rotation:0,x:-2.9,y:-5.1,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.389,scaleY:1.389,rotation:0,x:-2.9,y:-5,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.389,scaleY:1.389,rotation:0,x:-2.9,y:-5.1,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.389,scaleY:1.389,rotation:0,x:4.9,y:-4.3,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.389,scaleY:1.389,rotation:0,x:4.9,y:-4.3,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:4.9,y:-4.3}},{t:this.shape_65,p:{scaleX:1.389,scaleY:1.389,y:-16.6,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.389,scaleY:1.389,y:-16.6,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.389,scaleY:1.389,y:-33.7,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.389,scaleY:1.389,y:-33.7,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.389,scaleY:1.389,y:-24.5,skewY:180,x:14}},{t:this.shape_60,p:{scaleX:1.389,scaleY:1.389,y:-16.2,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.389,scaleY:1.389,y:-16.2,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.389,scaleY:1.389,x:-1.2,y:-10.9,skewY:180}},{t:this.shape_57,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_56,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_55,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_54,p:{scaleX:1.389,scaleY:1.389,x:-1.2,y:-10.9,skewY:180}},{t:this.shape_53,p:{scaleX:1.389,scaleY:1.389,y:-10.9,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_51,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_50,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_49,p:{scaleX:1.389,scaleY:1.389,x:-1.2,y:-10.9,skewY:180}},{t:this.shape_48,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_47,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_46,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-10.9}},{t:this.shape_45,p:{scaleX:1.389,scaleY:1.389,x:-1.2,y:-10.9,skewY:180}},{t:this.shape_44,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_43,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_42,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-10.9}},{t:this.shape_41,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_40,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-10.9}},{t:this.shape_39,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_38,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_37,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_36,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_35,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_34,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_33,p:{scaleX:1.389,scaleY:1.389,x:-1.2,y:-10.9,skewY:180}},{t:this.shape_32,p:{scaleX:1.389,scaleY:1.389,x:-1.2,y:-10.9,skewY:180}},{t:this.shape_31,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-11}},{t:this.shape_30,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-11}},{t:this.shape_29,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_28,p:{scaleX:1.389,scaleY:1.389,x:-1.2,y:-10.9,skewY:180}},{t:this.shape_27,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-11}},{t:this.shape_26,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_25,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_24,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-10.9}},{t:this.shape_23,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_22,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-10.9}},{t:this.shape_21,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-10.9}},{t:this.shape_20,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_19,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_18,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_17,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_16,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_15,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_14,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-10.9}},{t:this.shape_13,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-11}},{t:this.shape_12,p:{scaleX:1.389,scaleY:1.389,y:-10.9,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-10.9}},{t:this.shape_10,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_9,p:{scaleX:1.389,scaleY:1.389,y:-20.6,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.2,scaleX:1.389,scaleY:1.389,y:-16.3,regX:11.9,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.389,scaleY:1.389,rotation:0,y:-11,x:8.4,skewY:139.3,skewX:-40.7}},{t:this.shape_7,p:{scaleX:1.389,scaleY:1.389,rotation:0,y:-11,x:8.4,skewY:139.3,skewX:-40.7}},{t:this.shape_6,p:{scaleX:1.389,scaleY:1.389,rotation:0,x:8.6,y:-10.7,skewY:135,skewX:-45}},{t:this.shape_5,p:{scaleX:1.389,scaleY:1.389,x:-10.7,skewY:180,y:-7.4}},{t:this.shape_4,p:{scaleX:1.389,scaleY:1.389,x:-13.5,y:-14.3,skewY:180}},{t:this.shape_3,p:{scaleX:1.389,scaleY:1.389,x:-13.5,y:-14.3,skewY:180}},{t:this.shape_2,p:{scaleX:1.389,scaleY:1.389,x:-14.6,y:-14.2,skewY:180}},{t:this.shape_1,p:{scaleX:1.389,scaleY:1.389,x:-14.6,y:-14.2,skewY:180}},{t:this.shape,p:{scaleX:1.389,scaleY:1.389,x:-14.7,skewY:180,y:-14.3}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-2.9,y:3.2,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-2.9,y:3.2,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-2.9,y:3.2,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:4.9,y:3.9,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:4.9,y:3.9,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:4.9,y:3.9}},{t:this.shape_65,p:{scaleX:1.386,scaleY:1.386,y:-8.4,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.386,scaleY:1.386,y:-8.4,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.386,scaleY:1.386,y:-25.4,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.386,scaleY:1.386,y:-25.4,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.386,scaleY:1.386,y:-16.2,skewY:180,x:13.9}},{t:this.shape_60,p:{scaleX:1.386,scaleY:1.386,y:-8,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.386,scaleY:1.386,y:-8,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:-2.7,skewY:180}},{t:this.shape_57,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_56,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_55,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_54,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:-2.7,skewY:180}},{t:this.shape_53,p:{scaleX:1.386,scaleY:1.386,y:-2.7,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_51,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_50,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_49,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:-2.7,skewY:180}},{t:this.shape_48,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_47,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_46,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_45,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:-2.7,skewY:180}},{t:this.shape_44,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_43,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_42,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_41,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_40,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_39,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_38,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_37,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_36,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_35,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_34,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_33,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:-2.7,skewY:180}},{t:this.shape_32,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:-2.7,skewY:180}},{t:this.shape_31,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_30,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_29,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_28,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:-2.7,skewY:180}},{t:this.shape_27,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_26,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_25,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_24,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_23,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_22,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_21,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_20,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_19,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_18,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_17,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_16,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_15,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_14,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_13,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_12,p:{scaleX:1.386,scaleY:1.386,y:-2.7,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_10,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_9,p:{scaleX:1.386,scaleY:1.386,y:-12.3,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.5,scaleX:1.386,scaleY:1.386,y:-8,regX:11.9,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.386,scaleY:1.386,rotation:0,y:-1.7,x:7.6,skewY:158,skewX:-22}},{t:this.shape_7,p:{scaleX:1.386,scaleY:1.386,rotation:0,y:-1.7,x:7.6,skewY:158,skewX:-22}},{t:this.shape_6,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:7.7,y:-1.7,skewY:156.3,skewX:-23.7}},{t:this.shape_5,p:{scaleX:1.386,scaleY:1.386,x:-10.6,skewY:180,y:0.9}},{t:this.shape_4,p:{scaleX:1.386,scaleY:1.386,x:-13.5,y:-6.1,skewY:180}},{t:this.shape_3,p:{scaleX:1.386,scaleY:1.386,x:-13.5,y:-6.1,skewY:180}},{t:this.shape_2,p:{scaleX:1.386,scaleY:1.386,x:-14.6,y:-6,skewY:180}},{t:this.shape_1,p:{scaleX:1.386,scaleY:1.386,x:-14.6,y:-6,skewY:180}},{t:this.shape,p:{scaleX:1.386,scaleY:1.386,x:-14.7,skewY:180,y:-6}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-2.9,y:11.4,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-2.9,y:11.4,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-2.9,y:11.4,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:4.9,y:12.1,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:4.9,y:12.1,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:4.9,y:12.1}},{t:this.shape_65,p:{scaleX:1.386,scaleY:1.386,y:-0.2,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.386,scaleY:1.386,y:-0.2,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.386,scaleY:1.386,y:-17.2,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.386,scaleY:1.386,y:-17.2,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.386,scaleY:1.386,y:-8,skewY:180,x:13.9}},{t:this.shape_60,p:{scaleX:1.386,scaleY:1.386,y:0.2,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.386,scaleY:1.386,y:0.2,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:5.5,skewY:180}},{t:this.shape_57,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_56,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_55,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_54,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:5.5,skewY:180}},{t:this.shape_53,p:{scaleX:1.386,scaleY:1.386,y:5.5,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_51,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_50,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_49,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:5.5,skewY:180}},{t:this.shape_48,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_47,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_46,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_45,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:5.5,skewY:180}},{t:this.shape_44,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_43,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_42,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_41,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_40,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_39,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_38,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_37,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_36,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_35,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_34,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_33,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:5.5,skewY:180}},{t:this.shape_32,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:5.5,skewY:180}},{t:this.shape_31,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_30,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_29,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_28,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:5.5,skewY:180}},{t:this.shape_27,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_26,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_25,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_24,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_23,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_22,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_21,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_20,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_19,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_18,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_17,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_16,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_15,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_14,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_13,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_12,p:{scaleX:1.386,scaleY:1.386,y:5.5,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_10,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_9,p:{scaleX:1.386,scaleY:1.386,y:-4.1,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.3,scaleX:1.386,scaleY:1.386,y:0.1,regX:11.9,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.386,scaleY:1.386,rotation:0,y:6.7,x:6.4,skewY:180,skewX:0}},{t:this.shape_7,p:{scaleX:1.386,scaleY:1.386,rotation:0,y:6.7,x:6.4,skewY:180,skewX:0}},{t:this.shape_6,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:6.4,y:6.7,skewY:180,skewX:0}},{t:this.shape_5,p:{scaleX:1.386,scaleY:1.386,x:-10.6,skewY:180,y:9.1}},{t:this.shape_4,p:{scaleX:1.386,scaleY:1.386,x:-13.5,y:2.1,skewY:180}},{t:this.shape_3,p:{scaleX:1.386,scaleY:1.386,x:-13.5,y:2.1,skewY:180}},{t:this.shape_2,p:{scaleX:1.386,scaleY:1.386,x:-14.6,y:2.2,skewY:180}},{t:this.shape_1,p:{scaleX:1.386,scaleY:1.386,x:-14.6,y:2.2,skewY:180}},{t:this.shape,p:{scaleX:1.386,scaleY:1.386,x:-14.7,skewY:180,y:2.2}}]},3).to({state:[]},2).to({state:[{t:this.shape_190,p:{scaleX:1.389,scaleY:1.389,x:-8,y:11.8}},{t:this.shape_189,p:{scaleX:1.389,scaleY:1.389,x:-8,y:11.8}},{t:this.shape_188,p:{scaleX:1.389,scaleY:1.389,x:-8,y:11.8}},{t:this.shape_187,p:{scaleX:1.389,scaleY:1.389,y:11.3,x:7.5}},{t:this.shape_186,p:{scaleX:1.389,scaleY:1.389,y:11.3}},{t:this.shape_185,p:{scaleX:1.389,scaleY:1.389,y:11.3,x:7.5}},{t:this.shape_184,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:4.5}},{t:this.shape_183,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:4.5}},{t:this.shape_182,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:4.5}},{t:this.shape_181,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:4.6}},{t:this.shape_180,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:4.6}},{t:this.shape_179,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:4.6}},{t:this.shape_178,p:{scaleX:1.389,scaleY:1.389,y:-0.2}},{t:this.shape_177,p:{scaleX:1.389,scaleY:1.389,y:-0.1,x:-0.7}},{t:this.shape_176,p:{scaleX:1.389,scaleY:1.389,x:7.1,y:0.3}},{t:this.shape_175,p:{scaleX:1.389,scaleY:1.389,y:0.2}},{t:this.shape_174,p:{scaleX:1.389,scaleY:1.389,x:-7.5,y:0.3}},{t:this.shape_173,p:{scaleX:1.389,scaleY:1.389,x:-7.5,y:0.2}},{t:this.shape_172,p:{scaleX:1.389,scaleY:1.389,y:9}},{t:this.shape_171,p:{scaleX:1.389,scaleY:1.389,y:-17.1}},{t:this.shape_170,p:{scaleX:1.389,scaleY:1.389,y:-17.1}},{t:this.shape_169,p:{scaleX:1.389,scaleY:1.389,x:12.9,y:-8.1}},{t:this.shape_168,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_167,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_166,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_165,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_164,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_163,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_162,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_161,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_160,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_159,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_158,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_157,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_156,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_155,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_154,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_43,p:{scaleX:1.389,scaleY:1.389,x:10.1,skewY:0,y:4.8}},{t:this.shape_153,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_152,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_151,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_150,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_149,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_148,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_147,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_146,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_145,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_144,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_143,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_142,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_141,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_140,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_139,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_138,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_137,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_136,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_24,p:{scaleX:1.389,scaleY:1.389,skewY:0,x:10.1,y:4.8}},{t:this.shape_135,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_22,p:{scaleX:1.389,scaleY:1.389,skewY:0,x:10.1,y:4.8}},{t:this.shape_134,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_133,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_132,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_18,p:{scaleX:1.389,scaleY:1.389,x:10.1,skewY:0,y:4.8}},{t:this.shape_17,p:{scaleX:1.389,scaleY:1.389,x:10.1,skewY:0,y:4.8}},{t:this.shape_131,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_15,p:{scaleX:1.389,scaleY:1.389,x:10.1,skewY:0,y:4.8}},{t:this.shape_130,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_129,p:{scaleX:1.389,scaleY:1.389,x:10.2,y:4.8}},{t:this.shape_128,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_127,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_126,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_125,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_124,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_123,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.4}},{t:this.shape_122,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_121,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_120,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_119,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_118,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_117,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_116,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_115,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_114,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_113,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_112,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_111,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_110,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_109,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_41,p:{scaleX:1.389,scaleY:1.389,x:-10.3,skewY:0,y:5.5}},{t:this.shape_40,p:{scaleX:1.389,scaleY:1.389,skewY:0,x:-10.3,y:5.5}},{t:this.shape_108,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_107,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_106,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_105,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_104,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_103,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_102,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_101,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_100,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_99,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_98,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_97,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_96,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_95,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_94,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_93,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_92,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_91,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_90,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_89,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_88,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_87,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_86,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_85,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_84,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_83,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_82,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_81,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_80,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_10,p:{scaleX:1.389,scaleY:1.389,x:-10.3,skewY:0,y:5.5}},{t:this.shape_79,p:{scaleX:1.389,scaleY:1.389,y:3.6,x:-0.3}},{t:this.shape_78,p:{scaleX:1.389,scaleY:1.389,y:3.6,x:-0.3}},{t:this.shape_77,p:{scaleX:1.389,scaleY:1.389,y:3.6}},{t:this.shape_76,p:{scaleX:1.389,scaleY:1.389,y:3.6}},{t:this.shape_75,p:{scaleX:1.389,scaleY:1.389,x:-8.2,y:-4.1}},{t:this.shape_74,p:{scaleX:1.389,scaleY:1.389,y:-4,x:8.1}},{t:this.shape_73,p:{scaleX:1.389,scaleY:1.389,x:-13.9,y:-7.8}},{t:this.shape_72,p:{scaleX:1.389,scaleY:1.389,y:9.8}}]},1).to({state:[{t:this.shape_190,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.1}},{t:this.shape_189,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.1}},{t:this.shape_188,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.1}},{t:this.shape_187,p:{scaleX:1.387,scaleY:1.387,y:2.6,x:7.5}},{t:this.shape_186,p:{scaleX:1.387,scaleY:1.387,y:2.6}},{t:this.shape_185,p:{scaleX:1.387,scaleY:1.387,y:2.6,x:7.5}},{t:this.shape_184,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-4.1}},{t:this.shape_183,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-4.2}},{t:this.shape_182,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-4.2}},{t:this.shape_181,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-4.1}},{t:this.shape_180,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-4.1}},{t:this.shape_179,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-4.1}},{t:this.shape_178,p:{scaleX:1.387,scaleY:1.387,y:-8.8}},{t:this.shape_177,p:{scaleX:1.387,scaleY:1.387,y:-8.8,x:-0.6}},{t:this.shape_176,p:{scaleX:1.387,scaleY:1.387,x:7.1,y:-8.4}},{t:this.shape_175,p:{scaleX:1.387,scaleY:1.387,y:-8.4}},{t:this.shape_174,p:{scaleX:1.387,scaleY:1.387,x:-7.5,y:-8.4}},{t:this.shape_173,p:{scaleX:1.387,scaleY:1.387,x:-7.4,y:-8.4}},{t:this.shape_172,p:{scaleX:1.387,scaleY:1.387,y:0.3}},{t:this.shape_171,p:{scaleX:1.387,scaleY:1.387,y:-25.8}},{t:this.shape_170,p:{scaleX:1.387,scaleY:1.387,y:-25.7}},{t:this.shape_169,p:{scaleX:1.387,scaleY:1.387,x:12.9,y:-16.8}},{t:this.shape_168,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.9}},{t:this.shape_167,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.9}},{t:this.shape_166,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.9}},{t:this.shape_165,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_164,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_163,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_162,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_161,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_160,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.9}},{t:this.shape_159,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_158,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_157,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_156,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_155,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_154,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:10.1,skewY:0,y:-3.9}},{t:this.shape_153,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_152,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_151,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_150,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_149,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_148,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_147,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_146,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_145,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_144,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_143,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_142,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_141,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_140,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_139,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_138,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_137,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_136,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:10.1,y:-3.9}},{t:this.shape_135,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:10.1,y:-3.9}},{t:this.shape_134,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_133,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_132,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:10.1,skewY:0,y:-3.9}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:10.1,skewY:0,y:-3.9}},{t:this.shape_131,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:10.1,skewY:0,y:-3.9}},{t:this.shape_130,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_129,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.9}},{t:this.shape_128,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_127,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_126,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_125,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_124,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_123,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_122,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_121,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_120,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_119,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_118,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_117,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_116,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_115,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_114,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_113,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_112,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_111,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_110,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_109,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:-10.3,skewY:0,y:-3.2}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:-10.2,y:-3.2}},{t:this.shape_108,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_107,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_106,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_105,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_104,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_103,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_102,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_101,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_100,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_99,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_98,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_97,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_96,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_95,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_94,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_93,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_92,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_91,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_90,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_89,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_88,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_87,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_86,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_85,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_84,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_83,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_82,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_81,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_80,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:-10.3,skewY:0,y:-3.2}},{t:this.shape_79,p:{scaleX:1.387,scaleY:1.387,y:-5.1,x:-0.2}},{t:this.shape_78,p:{scaleX:1.387,scaleY:1.387,y:-5.1,x:-0.3}},{t:this.shape_77,p:{scaleX:1.387,scaleY:1.387,y:-5}},{t:this.shape_76,p:{scaleX:1.387,scaleY:1.387,y:-5.1}},{t:this.shape_75,p:{scaleX:1.387,scaleY:1.387,x:-8.1,y:-12.7}},{t:this.shape_74,p:{scaleX:1.387,scaleY:1.387,y:-12.7,x:8.1}},{t:this.shape_73,p:{scaleX:1.387,scaleY:1.387,x:-13.9,y:-16.5}},{t:this.shape_72,p:{scaleX:1.387,scaleY:1.387,y:1.1}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.39,scaleY:1.39,x:-8,y:-4.7}},{t:this.shape_189,p:{scaleX:1.39,scaleY:1.39,x:-8,y:-4.7}},{t:this.shape_188,p:{scaleX:1.39,scaleY:1.39,x:-8,y:-4.7}},{t:this.shape_187,p:{scaleX:1.39,scaleY:1.39,y:-5.3,x:7.5}},{t:this.shape_186,p:{scaleX:1.39,scaleY:1.39,y:-5.2}},{t:this.shape_185,p:{scaleX:1.39,scaleY:1.39,y:-5.2,x:7.5}},{t:this.shape_184,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:-12}},{t:this.shape_183,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:-12}},{t:this.shape_182,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:-12}},{t:this.shape_181,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:-12}},{t:this.shape_180,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:-11.9}},{t:this.shape_179,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:-11.9}},{t:this.shape_178,p:{scaleX:1.39,scaleY:1.39,y:-16.7}},{t:this.shape_177,p:{scaleX:1.39,scaleY:1.39,y:-16.7,x:-0.6}},{t:this.shape_176,p:{scaleX:1.39,scaleY:1.39,x:7.1,y:-16.3}},{t:this.shape_175,p:{scaleX:1.39,scaleY:1.39,y:-16.3}},{t:this.shape_174,p:{scaleX:1.39,scaleY:1.39,x:-7.5,y:-16.3}},{t:this.shape_173,p:{scaleX:1.39,scaleY:1.39,x:-7.5,y:-16.3}},{t:this.shape_172,p:{scaleX:1.39,scaleY:1.39,y:-7.5}},{t:this.shape_171,p:{scaleX:1.39,scaleY:1.39,y:-33.7}},{t:this.shape_170,p:{scaleX:1.39,scaleY:1.39,y:-33.6}},{t:this.shape_169,p:{scaleX:1.39,scaleY:1.39,x:12.9,y:-24.6}},{t:this.shape_168,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_167,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_166,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_165,p:{scaleX:1.39,scaleY:1.39,y:-11.8,x:10.1}},{t:this.shape_164,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_163,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_162,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_161,p:{scaleX:1.39,scaleY:1.39,y:-11.8,x:10.1}},{t:this.shape_160,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_159,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_158,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.2}},{t:this.shape_157,p:{scaleX:1.39,scaleY:1.39,y:-11.8,x:10.2}},{t:this.shape_156,p:{scaleX:1.39,scaleY:1.39,y:-11.8,x:10.2}},{t:this.shape_155,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.2}},{t:this.shape_154,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_43,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:-11.7}},{t:this.shape_153,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:-11.7}},{t:this.shape_152,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:-11.7}},{t:this.shape_151,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.2}},{t:this.shape_150,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.8}},{t:this.shape_149,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_148,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_147,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_146,p:{scaleX:1.39,scaleY:1.39,y:-11.8,x:10.1}},{t:this.shape_145,p:{scaleX:1.39,scaleY:1.39,y:-11.8,x:10.1}},{t:this.shape_144,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_143,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_142,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_141,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_140,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_139,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_138,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.2}},{t:this.shape_137,p:{scaleX:1.39,scaleY:1.39,y:-11.8,x:10.1}},{t:this.shape_136,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.8}},{t:this.shape_24,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:10.2,y:-11.7}},{t:this.shape_135,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_22,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:10.2,y:-11.7}},{t:this.shape_134,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_133,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_132,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_18,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:-11.8}},{t:this.shape_17,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:-11.7}},{t:this.shape_131,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_15,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:-11.7}},{t:this.shape_130,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_129,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.8}},{t:this.shape_128,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_127,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_126,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_125,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_124,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_123,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_122,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_121,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_120,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_119,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_118,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_117,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_116,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_115,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_114,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_113,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_112,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_111,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_110,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_109,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_41,p:{scaleX:1.39,scaleY:1.39,x:-10.3,skewY:0,y:-11}},{t:this.shape_40,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:-10.3,y:-11}},{t:this.shape_108,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_107,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_106,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_105,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_104,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_103,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_102,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_101,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_100,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_99,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_98,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_97,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_96,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_95,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_94,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_93,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_92,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_91,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_90,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_89,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_88,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_87,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_86,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_85,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_84,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_83,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_82,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_81,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_80,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_10,p:{scaleX:1.39,scaleY:1.39,x:-10.3,skewY:0,y:-11.1}},{t:this.shape_79,p:{scaleX:1.39,scaleY:1.39,y:-13,x:-0.3}},{t:this.shape_78,p:{scaleX:1.39,scaleY:1.39,y:-13,x:-0.3}},{t:this.shape_77,p:{scaleX:1.39,scaleY:1.39,y:-12.9}},{t:this.shape_76,p:{scaleX:1.39,scaleY:1.39,y:-13}},{t:this.shape_75,p:{scaleX:1.39,scaleY:1.39,x:-8.1,y:-20.6}},{t:this.shape_74,p:{scaleX:1.39,scaleY:1.39,y:-20.6,x:8.1}},{t:this.shape_73,p:{scaleX:1.39,scaleY:1.39,x:-13.9,y:-24.4}},{t:this.shape_72,p:{scaleX:1.39,scaleY:1.39,y:-6.7}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.39,scaleY:1.39,x:-8,y:-13}},{t:this.shape_189,p:{scaleX:1.39,scaleY:1.39,x:-8,y:-13}},{t:this.shape_188,p:{scaleX:1.39,scaleY:1.39,x:-8,y:-13}},{t:this.shape_187,p:{scaleX:1.39,scaleY:1.39,y:-13.5,x:7.5}},{t:this.shape_186,p:{scaleX:1.39,scaleY:1.39,y:-13.5}},{t:this.shape_185,p:{scaleX:1.39,scaleY:1.39,y:-13.5,x:7.5}},{t:this.shape_184,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:-20.2}},{t:this.shape_183,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:-20.3}},{t:this.shape_182,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:-20.3}},{t:this.shape_181,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:-20.2}},{t:this.shape_180,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:-20.2}},{t:this.shape_179,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:-20.2}},{t:this.shape_178,p:{scaleX:1.39,scaleY:1.39,y:-24.9}},{t:this.shape_177,p:{scaleX:1.39,scaleY:1.39,y:-24.9,x:-0.6}},{t:this.shape_176,p:{scaleX:1.39,scaleY:1.39,x:7.1,y:-24.5}},{t:this.shape_175,p:{scaleX:1.39,scaleY:1.39,y:-24.6}},{t:this.shape_174,p:{scaleX:1.39,scaleY:1.39,x:-7.5,y:-24.5}},{t:this.shape_173,p:{scaleX:1.39,scaleY:1.39,x:-7.5,y:-24.6}},{t:this.shape_172,p:{scaleX:1.39,scaleY:1.39,y:-15.8}},{t:this.shape_171,p:{scaleX:1.39,scaleY:1.39,y:-41.9}},{t:this.shape_170,p:{scaleX:1.39,scaleY:1.39,y:-41.9}},{t:this.shape_169,p:{scaleX:1.39,scaleY:1.39,x:12.9,y:-32.9}},{t:this.shape_168,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_167,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_166,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_165,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_164,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_163,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_162,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_161,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_160,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_159,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_158,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_157,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_156,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_155,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_154,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:-20}},{t:this.shape_43,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:-20}},{t:this.shape_153,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:-20}},{t:this.shape_152,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:-20}},{t:this.shape_151,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_150,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:-20}},{t:this.shape_149,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:-20}},{t:this.shape_148,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:-20}},{t:this.shape_147,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_146,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_145,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_144,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_143,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_142,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_141,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_140,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_139,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_138,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_137,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_136,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_24,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:10.2,y:-20}},{t:this.shape_135,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_22,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:10.2,y:-20}},{t:this.shape_134,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_133,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_132,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_18,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:-20}},{t:this.shape_17,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:-20}},{t:this.shape_131,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_15,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:-20}},{t:this.shape_130,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_129,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_128,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_127,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_126,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_125,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_124,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_123,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_122,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_121,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_120,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_119,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_118,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_117,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_116,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_115,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_114,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_113,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_112,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_111,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_110,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_109,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_41,p:{scaleX:1.39,scaleY:1.39,x:-10.3,skewY:0,y:-19.3}},{t:this.shape_40,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:-10.3,y:-19.3}},{t:this.shape_108,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_107,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_106,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_105,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_104,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_103,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_102,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_101,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_100,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_99,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_98,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_97,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_96,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_95,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_94,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_93,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_92,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_91,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_90,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_89,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_88,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_87,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_86,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_85,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_84,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_83,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_82,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_81,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_80,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_10,p:{scaleX:1.39,scaleY:1.39,x:-10.3,skewY:0,y:-19.3}},{t:this.shape_79,p:{scaleX:1.39,scaleY:1.39,y:-21.2,x:-0.3}},{t:this.shape_78,p:{scaleX:1.39,scaleY:1.39,y:-21.2,x:-0.3}},{t:this.shape_77,p:{scaleX:1.39,scaleY:1.39,y:-21.1}},{t:this.shape_76,p:{scaleX:1.39,scaleY:1.39,y:-21.2}},{t:this.shape_75,p:{scaleX:1.39,scaleY:1.39,x:-8.2,y:-28.9}},{t:this.shape_74,p:{scaleX:1.39,scaleY:1.39,y:-28.8,x:8.1}},{t:this.shape_73,p:{scaleX:1.39,scaleY:1.39,x:-13.9,y:-32.6}},{t:this.shape_72,p:{scaleX:1.39,scaleY:1.39,y:-15}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.385,scaleY:1.385,x:-7.9,y:-21.2}},{t:this.shape_189,p:{scaleX:1.385,scaleY:1.385,x:-8,y:-21.2}},{t:this.shape_188,p:{scaleX:1.385,scaleY:1.385,x:-8,y:-21.2}},{t:this.shape_187,p:{scaleX:1.385,scaleY:1.385,y:-21.7,x:7.5}},{t:this.shape_186,p:{scaleX:1.385,scaleY:1.385,y:-21.7}},{t:this.shape_185,p:{scaleX:1.385,scaleY:1.385,y:-21.7,x:7.5}},{t:this.shape_184,p:{scaleX:1.385,scaleY:1.385,x:13.4,y:-28.4}},{t:this.shape_183,p:{scaleX:1.385,scaleY:1.385,x:13.4,y:-28.5}},{t:this.shape_182,p:{scaleX:1.385,scaleY:1.385,x:13.5,y:-28.4}},{t:this.shape_181,p:{scaleX:1.385,scaleY:1.385,x:-14.1,y:-28.4}},{t:this.shape_180,p:{scaleX:1.385,scaleY:1.385,x:-14.1,y:-28.4}},{t:this.shape_179,p:{scaleX:1.385,scaleY:1.385,x:-14.1,y:-28.4}},{t:this.shape_178,p:{scaleX:1.385,scaleY:1.385,y:-33.1}},{t:this.shape_177,p:{scaleX:1.385,scaleY:1.385,y:-33.1,x:-0.7}},{t:this.shape_176,p:{scaleX:1.385,scaleY:1.385,x:7,y:-32.7}},{t:this.shape_175,p:{scaleX:1.385,scaleY:1.385,y:-32.7}},{t:this.shape_174,p:{scaleX:1.385,scaleY:1.385,x:-7.5,y:-32.7}},{t:this.shape_173,p:{scaleX:1.385,scaleY:1.385,x:-7.5,y:-32.7}},{t:this.shape_172,p:{scaleX:1.385,scaleY:1.385,y:-24}},{t:this.shape_171,p:{scaleX:1.385,scaleY:1.385,y:-50}},{t:this.shape_170,p:{scaleX:1.385,scaleY:1.385,y:-50}},{t:this.shape_169,p:{scaleX:1.385,scaleY:1.385,x:12.8,y:-41}},{t:this.shape_168,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_167,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_166,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_165,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_164,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_163,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_162,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_161,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_160,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_159,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_158,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_157,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_156,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_155,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_154,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_43,p:{scaleX:1.385,scaleY:1.385,x:10.1,skewY:0,y:-28.2}},{t:this.shape_153,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_152,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_151,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_150,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_149,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_148,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_147,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_146,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_145,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_144,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_143,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_142,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_141,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_140,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_139,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_138,p:{scaleX:1.385,scaleY:1.385,y:-28.1,x:10.1}},{t:this.shape_137,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_136,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_24,p:{scaleX:1.385,scaleY:1.385,skewY:0,x:10.1,y:-28.2}},{t:this.shape_135,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_22,p:{scaleX:1.385,scaleY:1.385,skewY:0,x:10.1,y:-28.2}},{t:this.shape_134,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_133,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_132,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_18,p:{scaleX:1.385,scaleY:1.385,x:10.1,skewY:0,y:-28.2}},{t:this.shape_17,p:{scaleX:1.385,scaleY:1.385,x:10.1,skewY:0,y:-28.2}},{t:this.shape_131,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_15,p:{scaleX:1.385,scaleY:1.385,x:10.1,skewY:0,y:-28.2}},{t:this.shape_130,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_129,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_128,p:{scaleX:1.385,scaleY:1.385,y:-28.1,x:10.1}},{t:this.shape_127,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_126,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_125,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_124,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_123,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_122,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_121,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_120,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_119,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_118,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_117,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_116,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_115,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_114,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_113,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_112,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_111,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_110,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_109,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_41,p:{scaleX:1.385,scaleY:1.385,x:-10.3,skewY:0,y:-27.5}},{t:this.shape_40,p:{scaleX:1.385,scaleY:1.385,skewY:0,x:-10.3,y:-27.5}},{t:this.shape_108,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_107,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_106,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_105,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_104,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_103,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_102,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_101,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_100,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_99,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_98,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_97,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_96,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_95,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_94,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_93,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_92,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_91,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_90,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_89,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_88,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_87,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_86,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_85,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_84,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_83,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_82,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_81,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_80,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_10,p:{scaleX:1.385,scaleY:1.385,x:-10.3,skewY:0,y:-27.5}},{t:this.shape_79,p:{scaleX:1.385,scaleY:1.385,y:-29.4,x:-0.3}},{t:this.shape_78,p:{scaleX:1.385,scaleY:1.385,y:-29.4,x:-0.3}},{t:this.shape_77,p:{scaleX:1.385,scaleY:1.385,y:-29.3}},{t:this.shape_76,p:{scaleX:1.385,scaleY:1.385,y:-29.4}},{t:this.shape_75,p:{scaleX:1.385,scaleY:1.385,x:-8.1,y:-37}},{t:this.shape_74,p:{scaleX:1.385,scaleY:1.385,y:-37,x:8.1}},{t:this.shape_73,p:{scaleX:1.385,scaleY:1.385,x:-13.9,y:-40.8}},{t:this.shape_72,p:{scaleX:1.385,scaleY:1.385,y:-23.2}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.391,scaleY:1.391,x:-8,y:-13.1}},{t:this.shape_189,p:{scaleX:1.391,scaleY:1.391,x:-8,y:-13.1}},{t:this.shape_188,p:{scaleX:1.391,scaleY:1.391,x:-8,y:-13.1}},{t:this.shape_187,p:{scaleX:1.391,scaleY:1.391,y:-13.6,x:7.6}},{t:this.shape_186,p:{scaleX:1.391,scaleY:1.391,y:-13.6}},{t:this.shape_185,p:{scaleX:1.391,scaleY:1.391,y:-13.6,x:7.6}},{t:this.shape_184,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:-20.4}},{t:this.shape_183,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:-20.4}},{t:this.shape_182,p:{scaleX:1.391,scaleY:1.391,x:13.6,y:-20.4}},{t:this.shape_181,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-20.3}},{t:this.shape_180,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-20.3}},{t:this.shape_179,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-20.3}},{t:this.shape_178,p:{scaleX:1.391,scaleY:1.391,y:-25.1}},{t:this.shape_177,p:{scaleX:1.391,scaleY:1.391,y:-25.1,x:-0.6}},{t:this.shape_176,p:{scaleX:1.391,scaleY:1.391,x:7.1,y:-24.7}},{t:this.shape_175,p:{scaleX:1.391,scaleY:1.391,y:-24.7}},{t:this.shape_174,p:{scaleX:1.391,scaleY:1.391,x:-7.5,y:-24.7}},{t:this.shape_173,p:{scaleX:1.391,scaleY:1.391,x:-7.5,y:-24.7}},{t:this.shape_172,p:{scaleX:1.391,scaleY:1.391,y:-15.9}},{t:this.shape_171,p:{scaleX:1.391,scaleY:1.391,y:-42.1}},{t:this.shape_170,p:{scaleX:1.391,scaleY:1.391,y:-42}},{t:this.shape_169,p:{scaleX:1.391,scaleY:1.391,x:12.9,y:-33}},{t:this.shape_168,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_167,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_166,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_165,p:{scaleX:1.391,scaleY:1.391,y:-20.2,x:10.2}},{t:this.shape_164,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_163,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_162,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_161,p:{scaleX:1.391,scaleY:1.391,y:-20.2,x:10.2}},{t:this.shape_160,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_159,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_158,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_157,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_156,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_155,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_154,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_43,p:{scaleX:1.391,scaleY:1.391,x:10.1,skewY:0,y:-20.1}},{t:this.shape_153,p:{scaleX:1.391,scaleY:1.391,x:10.1,y:-20.1}},{t:this.shape_152,p:{scaleX:1.391,scaleY:1.391,x:10.1,y:-20.1}},{t:this.shape_151,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_150,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.2}},{t:this.shape_149,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_148,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_147,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_146,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_145,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_144,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_143,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_142,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_141,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_140,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_139,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_138,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_137,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_136,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_24,p:{scaleX:1.391,scaleY:1.391,skewY:0,x:10.2,y:-20.1}},{t:this.shape_135,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_22,p:{scaleX:1.391,scaleY:1.391,skewY:0,x:10.2,y:-20.1}},{t:this.shape_134,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_133,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_132,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_18,p:{scaleX:1.391,scaleY:1.391,x:10.1,skewY:0,y:-20.2}},{t:this.shape_17,p:{scaleX:1.391,scaleY:1.391,x:10.1,skewY:0,y:-20.1}},{t:this.shape_131,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_15,p:{scaleX:1.391,scaleY:1.391,x:10.1,skewY:0,y:-20.1}},{t:this.shape_130,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_129,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_128,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_127,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_126,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_125,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_124,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_123,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_122,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_121,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_120,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_119,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_118,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_117,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_116,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_115,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_114,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_113,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_112,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_111,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_110,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_109,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_41,p:{scaleX:1.391,scaleY:1.391,x:-10.3,skewY:0,y:-19.4}},{t:this.shape_40,p:{scaleX:1.391,scaleY:1.391,skewY:0,x:-10.3,y:-19.4}},{t:this.shape_108,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_107,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_106,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_105,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_104,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_103,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_102,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_101,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_100,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_99,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_98,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_97,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_96,p:{scaleX:1.391,scaleY:1.391,x:-10.2,y:-19.4}},{t:this.shape_95,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_94,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_93,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_92,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_91,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_90,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_89,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_88,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_87,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_86,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_85,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_84,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_83,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_82,p:{scaleX:1.391,scaleY:1.391,x:-10.2,y:-19.4}},{t:this.shape_81,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_80,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_10,p:{scaleX:1.391,scaleY:1.391,x:-10.3,skewY:0,y:-19.4}},{t:this.shape_79,p:{scaleX:1.391,scaleY:1.391,y:-21.4,x:-0.2}},{t:this.shape_78,p:{scaleX:1.391,scaleY:1.391,y:-21.3,x:-0.3}},{t:this.shape_77,p:{scaleX:1.391,scaleY:1.391,y:-21.3}},{t:this.shape_76,p:{scaleX:1.391,scaleY:1.391,y:-21.3}},{t:this.shape_75,p:{scaleX:1.391,scaleY:1.391,x:-8.1,y:-29}},{t:this.shape_74,p:{scaleX:1.391,scaleY:1.391,y:-29,x:8.2}},{t:this.shape_73,p:{scaleX:1.391,scaleY:1.391,x:-13.9,y:-32.8}},{t:this.shape_72,p:{scaleX:1.391,scaleY:1.391,y:-15.1}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-4.7}},{t:this.shape_189,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-4.7}},{t:this.shape_188,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-4.7}},{t:this.shape_187,p:{scaleX:1.388,scaleY:1.388,y:-5.2,x:7.5}},{t:this.shape_186,p:{scaleX:1.388,scaleY:1.388,y:-5.2}},{t:this.shape_185,p:{scaleX:1.388,scaleY:1.388,y:-5.2,x:7.5}},{t:this.shape_184,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-12}},{t:this.shape_183,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-12}},{t:this.shape_182,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-12}},{t:this.shape_181,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-11.9}},{t:this.shape_180,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-11.9}},{t:this.shape_179,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-11.9}},{t:this.shape_178,p:{scaleX:1.388,scaleY:1.388,y:-16.7}},{t:this.shape_177,p:{scaleX:1.388,scaleY:1.388,y:-16.6,x:-0.7}},{t:this.shape_176,p:{scaleX:1.388,scaleY:1.388,x:7.1,y:-16.2}},{t:this.shape_175,p:{scaleX:1.388,scaleY:1.388,y:-16.3}},{t:this.shape_174,p:{scaleX:1.388,scaleY:1.388,x:-7.5,y:-16.2}},{t:this.shape_173,p:{scaleX:1.388,scaleY:1.388,x:-7.5,y:-16.3}},{t:this.shape_172,p:{scaleX:1.388,scaleY:1.388,y:-7.5}},{t:this.shape_171,p:{scaleX:1.388,scaleY:1.388,y:-33.6}},{t:this.shape_170,p:{scaleX:1.388,scaleY:1.388,y:-33.6}},{t:this.shape_169,p:{scaleX:1.388,scaleY:1.388,x:12.9,y:-24.6}},{t:this.shape_168,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_167,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_166,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_165,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_164,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_163,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_162,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_161,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_160,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_159,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_158,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_157,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_156,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_155,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_154,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_43,p:{scaleX:1.388,scaleY:1.388,x:10.1,skewY:0,y:-11.7}},{t:this.shape_153,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_152,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_151,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_150,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_149,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_148,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_147,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_146,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_145,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_144,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_143,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_142,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_141,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_140,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_139,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_138,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_137,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_136,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_24,p:{scaleX:1.388,scaleY:1.388,skewY:0,x:10.1,y:-11.7}},{t:this.shape_135,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_22,p:{scaleX:1.388,scaleY:1.388,skewY:0,x:10.1,y:-11.7}},{t:this.shape_134,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_133,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_132,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_18,p:{scaleX:1.388,scaleY:1.388,x:10.1,skewY:0,y:-11.7}},{t:this.shape_17,p:{scaleX:1.388,scaleY:1.388,x:10.1,skewY:0,y:-11.7}},{t:this.shape_131,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_15,p:{scaleX:1.388,scaleY:1.388,x:10.1,skewY:0,y:-11.7}},{t:this.shape_130,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_129,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_128,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_127,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_126,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_125,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_124,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_123,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11.1}},{t:this.shape_122,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11.1}},{t:this.shape_121,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_120,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_119,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_118,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_117,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_116,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_115,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_114,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_113,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_112,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_111,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_110,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_109,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_41,p:{scaleX:1.388,scaleY:1.388,x:-10.3,skewY:0,y:-11}},{t:this.shape_40,p:{scaleX:1.388,scaleY:1.388,skewY:0,x:-10.3,y:-11}},{t:this.shape_108,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11.1}},{t:this.shape_107,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11.1}},{t:this.shape_106,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_105,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_104,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_103,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_102,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_101,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_100,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11.1}},{t:this.shape_99,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_98,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_97,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_96,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_95,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_94,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_93,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_92,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_91,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_90,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_89,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_88,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_87,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11.1}},{t:this.shape_86,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_85,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_84,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_83,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_82,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_81,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_80,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11.1}},{t:this.shape_10,p:{scaleX:1.388,scaleY:1.388,x:-10.3,skewY:0,y:-11}},{t:this.shape_79,p:{scaleX:1.388,scaleY:1.388,y:-12.9,x:-0.3}},{t:this.shape_78,p:{scaleX:1.388,scaleY:1.388,y:-12.9,x:-0.3}},{t:this.shape_77,p:{scaleX:1.388,scaleY:1.388,y:-12.9}},{t:this.shape_76,p:{scaleX:1.388,scaleY:1.388,y:-12.9}},{t:this.shape_75,p:{scaleX:1.388,scaleY:1.388,x:-8.2,y:-20.6}},{t:this.shape_74,p:{scaleX:1.388,scaleY:1.388,y:-20.5,x:8.1}},{t:this.shape_73,p:{scaleX:1.388,scaleY:1.388,x:-13.9,y:-24.3}},{t:this.shape_72,p:{scaleX:1.388,scaleY:1.388,y:-6.7}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.7}},{t:this.shape_189,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.7}},{t:this.shape_188,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.7}},{t:this.shape_187,p:{scaleX:1.387,scaleY:1.387,y:3.1,x:7.5}},{t:this.shape_186,p:{scaleX:1.387,scaleY:1.387,y:3.1}},{t:this.shape_185,p:{scaleX:1.387,scaleY:1.387,y:3.2,x:7.5}},{t:this.shape_184,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-3.6}},{t:this.shape_183,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-3.6}},{t:this.shape_182,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-3.6}},{t:this.shape_181,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-3.6}},{t:this.shape_180,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-3.5}},{t:this.shape_179,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-3.5}},{t:this.shape_178,p:{scaleX:1.387,scaleY:1.387,y:-8.3}},{t:this.shape_177,p:{scaleX:1.387,scaleY:1.387,y:-8.3,x:-0.6}},{t:this.shape_176,p:{scaleX:1.387,scaleY:1.387,x:7.1,y:-7.8}},{t:this.shape_175,p:{scaleX:1.387,scaleY:1.387,y:-7.9}},{t:this.shape_174,p:{scaleX:1.387,scaleY:1.387,x:-7.5,y:-7.8}},{t:this.shape_173,p:{scaleX:1.387,scaleY:1.387,x:-7.4,y:-7.9}},{t:this.shape_172,p:{scaleX:1.387,scaleY:1.387,y:0.9}},{t:this.shape_171,p:{scaleX:1.387,scaleY:1.387,y:-25.2}},{t:this.shape_170,p:{scaleX:1.387,scaleY:1.387,y:-25.2}},{t:this.shape_169,p:{scaleX:1.387,scaleY:1.387,x:12.9,y:-16.2}},{t:this.shape_168,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_167,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_166,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_165,p:{scaleX:1.387,scaleY:1.387,y:-3.4,x:10.1}},{t:this.shape_164,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_163,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_162,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_161,p:{scaleX:1.387,scaleY:1.387,y:-3.4,x:10.1}},{t:this.shape_160,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_159,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_158,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.2}},{t:this.shape_157,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.2}},{t:this.shape_156,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.2}},{t:this.shape_155,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.2}},{t:this.shape_154,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:10.1,skewY:0,y:-3.3}},{t:this.shape_153,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.3}},{t:this.shape_152,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.3}},{t:this.shape_151,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.2}},{t:this.shape_150,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.4}},{t:this.shape_149,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_148,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_147,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_146,p:{scaleX:1.387,scaleY:1.387,y:-3.4,x:10.1}},{t:this.shape_145,p:{scaleX:1.387,scaleY:1.387,y:-3.4,x:10.1}},{t:this.shape_144,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_143,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_142,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_141,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_140,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_139,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_138,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_137,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_136,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:10.2,y:-3.3}},{t:this.shape_135,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:10.2,y:-3.3}},{t:this.shape_134,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_133,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_132,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:10.1,skewY:0,y:-3.4}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:10.1,skewY:0,y:-3.3}},{t:this.shape_131,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:10.1,skewY:0,y:-3.3}},{t:this.shape_130,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_129,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_128,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_127,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_126,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_125,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_124,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_123,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_122,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_121,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_120,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.6}},{t:this.shape_119,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.6}},{t:this.shape_118,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_117,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_116,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_115,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_114,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_113,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_112,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_111,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_110,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_109,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:-10.3,skewY:0,y:-2.6}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:-10.2,y:-2.6}},{t:this.shape_108,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_107,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_106,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_105,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.6}},{t:this.shape_104,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_103,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_102,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_101,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_100,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_99,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.6}},{t:this.shape_98,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.6}},{t:this.shape_97,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_96,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_95,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_94,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_93,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_92,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_91,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_90,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_89,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.6}},{t:this.shape_88,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_87,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_86,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_85,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_84,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_83,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_82,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_81,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.6}},{t:this.shape_80,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:-10.3,skewY:0,y:-2.7}},{t:this.shape_79,p:{scaleX:1.387,scaleY:1.387,y:-4.6,x:-0.2}},{t:this.shape_78,p:{scaleX:1.387,scaleY:1.387,y:-4.6,x:-0.2}},{t:this.shape_77,p:{scaleX:1.387,scaleY:1.387,y:-4.5}},{t:this.shape_76,p:{scaleX:1.387,scaleY:1.387,y:-4.6}},{t:this.shape_75,p:{scaleX:1.387,scaleY:1.387,x:-8.1,y:-12.2}},{t:this.shape_74,p:{scaleX:1.387,scaleY:1.387,y:-12.2,x:8.1}},{t:this.shape_73,p:{scaleX:1.387,scaleY:1.387,x:-13.9,y:-15.9}},{t:this.shape_72,p:{scaleX:1.387,scaleY:1.387,y:1.7}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.386,scaleY:1.386,x:-7.9,y:11.6}},{t:this.shape_189,p:{scaleX:1.386,scaleY:1.386,x:-7.9,y:11.7}},{t:this.shape_188,p:{scaleX:1.386,scaleY:1.386,x:-7.9,y:11.6}},{t:this.shape_187,p:{scaleX:1.386,scaleY:1.386,y:11.1,x:7.5}},{t:this.shape_186,p:{scaleX:1.386,scaleY:1.386,y:11.1}},{t:this.shape_185,p:{scaleX:1.386,scaleY:1.386,y:11.1,x:7.5}},{t:this.shape_184,p:{scaleX:1.386,scaleY:1.386,x:13.5,y:4.4}},{t:this.shape_183,p:{scaleX:1.386,scaleY:1.386,x:13.5,y:4.4}},{t:this.shape_182,p:{scaleX:1.386,scaleY:1.386,x:13.5,y:4.4}},{t:this.shape_181,p:{scaleX:1.386,scaleY:1.386,x:-14.1,y:4.4}},{t:this.shape_180,p:{scaleX:1.386,scaleY:1.386,x:-14.1,y:4.5}},{t:this.shape_179,p:{scaleX:1.386,scaleY:1.386,x:-14.1,y:4.5}},{t:this.shape_178,p:{scaleX:1.386,scaleY:1.386,y:-0.3}},{t:this.shape_177,p:{scaleX:1.386,scaleY:1.386,y:-0.3,x:-0.6}},{t:this.shape_176,p:{scaleX:1.386,scaleY:1.386,x:7.1,y:0.1}},{t:this.shape_175,p:{scaleX:1.386,scaleY:1.386,y:0.1}},{t:this.shape_174,p:{scaleX:1.386,scaleY:1.386,x:-7.5,y:0.1}},{t:this.shape_173,p:{scaleX:1.386,scaleY:1.386,x:-7.5,y:0.1}},{t:this.shape_172,p:{scaleX:1.386,scaleY:1.386,y:8.8}},{t:this.shape_171,p:{scaleX:1.386,scaleY:1.386,y:-17.2}},{t:this.shape_170,p:{scaleX:1.386,scaleY:1.386,y:-17.2}},{t:this.shape_169,p:{scaleX:1.386,scaleY:1.386,x:12.9,y:-8.2}},{t:this.shape_168,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_167,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_166,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_165,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_164,p:{scaleX:1.386,scaleY:1.386,y:4.7,x:10.1}},{t:this.shape_163,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_162,p:{scaleX:1.386,scaleY:1.386,y:4.7,x:10.1}},{t:this.shape_161,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_160,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_159,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_158,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_157,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_156,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_155,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_154,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_43,p:{scaleX:1.386,scaleY:1.386,x:10.1,skewY:0,y:4.6}},{t:this.shape_153,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_152,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_151,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_150,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_149,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_148,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_147,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_146,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_145,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_144,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_143,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.7}},{t:this.shape_142,p:{scaleX:1.386,scaleY:1.386,y:4.7,x:10.1}},{t:this.shape_141,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_140,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_139,p:{scaleX:1.386,scaleY:1.386,y:4.7,x:10.1}},{t:this.shape_138,p:{scaleX:1.386,scaleY:1.386,y:4.7,x:10.1}},{t:this.shape_137,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_136,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_24,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:10.1,y:4.6}},{t:this.shape_135,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_22,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:10.1,y:4.6}},{t:this.shape_134,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_133,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_132,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_18,p:{scaleX:1.386,scaleY:1.386,x:10.1,skewY:0,y:4.6}},{t:this.shape_17,p:{scaleX:1.386,scaleY:1.386,x:10.1,skewY:0,y:4.6}},{t:this.shape_131,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_15,p:{scaleX:1.386,scaleY:1.386,x:10.1,skewY:0,y:4.6}},{t:this.shape_130,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_129,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_128,p:{scaleX:1.386,scaleY:1.386,y:4.7,x:10.1}},{t:this.shape_127,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_126,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_125,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_124,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_123,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_122,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_121,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_120,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_119,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_118,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_117,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_116,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_115,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_114,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_113,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_112,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_111,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_110,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_109,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_41,p:{scaleX:1.386,scaleY:1.386,x:-10.3,skewY:0,y:5.3}},{t:this.shape_40,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:-10.3,y:5.3}},{t:this.shape_108,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_107,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_106,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_105,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_104,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_103,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_102,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_101,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_100,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_99,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_98,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_97,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_96,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_95,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_94,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_93,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_92,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_91,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_90,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_89,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_88,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_87,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_86,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_85,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_84,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_83,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_82,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_81,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_80,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_10,p:{scaleX:1.386,scaleY:1.386,x:-10.3,skewY:0,y:5.3}},{t:this.shape_79,p:{scaleX:1.386,scaleY:1.386,y:3.4,x:-0.3}},{t:this.shape_78,p:{scaleX:1.386,scaleY:1.386,y:3.4,x:-0.3}},{t:this.shape_77,p:{scaleX:1.386,scaleY:1.386,y:3.5}},{t:this.shape_76,p:{scaleX:1.386,scaleY:1.386,y:3.4}},{t:this.shape_75,p:{scaleX:1.386,scaleY:1.386,x:-8.1,y:-4.2}},{t:this.shape_74,p:{scaleX:1.386,scaleY:1.386,y:-4.2,x:8.1}},{t:this.shape_73,p:{scaleX:1.386,scaleY:1.386,x:-13.9,y:-7.9}},{t:this.shape_72,p:{scaleX:1.386,scaleY:1.386,y:9.6}}]},3).to({state:[]},2).to({state:[{t:this.shape_190,p:{scaleX:1.391,scaleY:1.391,x:-8,y:12.1}},{t:this.shape_189,p:{scaleX:1.391,scaleY:1.391,x:-8,y:12.1}},{t:this.shape_188,p:{scaleX:1.391,scaleY:1.391,x:-8,y:12.1}},{t:this.shape_187,p:{scaleX:1.391,scaleY:1.391,y:11.5,x:7.6}},{t:this.shape_186,p:{scaleX:1.391,scaleY:1.391,y:11.5}},{t:this.shape_185,p:{scaleX:1.391,scaleY:1.391,y:11.5,x:7.6}},{t:this.shape_184,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:4.8}},{t:this.shape_183,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:4.7}},{t:this.shape_182,p:{scaleX:1.391,scaleY:1.391,x:13.6,y:4.8}},{t:this.shape_181,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:4.8}},{t:this.shape_180,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:4.8}},{t:this.shape_179,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:4.8}},{t:this.shape_178,p:{scaleX:1.391,scaleY:1.391,y:0.1}},{t:this.shape_177,p:{scaleX:1.391,scaleY:1.391,y:0.1,x:-0.6}},{t:this.shape_171,p:{scaleX:1.391,scaleY:1.391,y:-16.9}},{t:this.shape_170,p:{scaleX:1.391,scaleY:1.391,y:-16.9}}]},1).to({state:[{t:this.shape_190,p:{scaleX:1.391,scaleY:1.391,x:-8,y:3.4}},{t:this.shape_189,p:{scaleX:1.391,scaleY:1.391,x:-8,y:3.4}},{t:this.shape_188,p:{scaleX:1.391,scaleY:1.391,x:-8,y:3.4}},{t:this.shape_187,p:{scaleX:1.391,scaleY:1.391,y:2.9,x:7.6}},{t:this.shape_186,p:{scaleX:1.391,scaleY:1.391,y:2.9}},{t:this.shape_185,p:{scaleX:1.391,scaleY:1.391,y:2.9,x:7.6}},{t:this.shape_184,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:-3.9}},{t:this.shape_183,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:-3.9}},{t:this.shape_182,p:{scaleX:1.391,scaleY:1.391,x:13.6,y:-3.9}},{t:this.shape_181,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-3.8}},{t:this.shape_180,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-3.8}},{t:this.shape_179,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-3.8}},{t:this.shape_178,p:{scaleX:1.391,scaleY:1.391,y:-8.6}},{t:this.shape_177,p:{scaleX:1.391,scaleY:1.391,y:-8.6,x:-0.6}},{t:this.shape_171,p:{scaleX:1.391,scaleY:1.391,y:-25.6}},{t:this.shape_170,p:{scaleX:1.391,scaleY:1.391,y:-25.5}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.389,scaleY:1.389,x:-8,y:-4.7}},{t:this.shape_189,p:{scaleX:1.389,scaleY:1.389,x:-8,y:-4.7}},{t:this.shape_188,p:{scaleX:1.389,scaleY:1.389,x:-8,y:-4.7}},{t:this.shape_187,p:{scaleX:1.389,scaleY:1.389,y:-5.2,x:7.5}},{t:this.shape_186,p:{scaleX:1.389,scaleY:1.389,y:-5.2}},{t:this.shape_185,p:{scaleX:1.389,scaleY:1.389,y:-5.2,x:7.5}},{t:this.shape_184,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:-12}},{t:this.shape_183,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:-12}},{t:this.shape_182,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:-12}},{t:this.shape_181,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:-11.9}},{t:this.shape_180,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:-11.9}},{t:this.shape_179,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:-11.9}},{t:this.shape_178,p:{scaleX:1.389,scaleY:1.389,y:-16.7}},{t:this.shape_177,p:{scaleX:1.389,scaleY:1.389,y:-16.6,x:-0.7}},{t:this.shape_171,p:{scaleX:1.389,scaleY:1.389,y:-33.6}},{t:this.shape_170,p:{scaleX:1.389,scaleY:1.389,y:-33.6}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-13.4}},{t:this.shape_189,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-13.4}},{t:this.shape_188,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-13.4}},{t:this.shape_187,p:{scaleX:1.388,scaleY:1.388,y:-13.9,x:7.5}},{t:this.shape_186,p:{scaleX:1.388,scaleY:1.388,y:-13.9}},{t:this.shape_185,p:{scaleX:1.388,scaleY:1.388,y:-13.9,x:7.5}},{t:this.shape_184,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-20.7}},{t:this.shape_183,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-20.7}},{t:this.shape_182,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-20.7}},{t:this.shape_181,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-20.6}},{t:this.shape_180,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-20.6}},{t:this.shape_179,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-20.6}},{t:this.shape_178,p:{scaleX:1.388,scaleY:1.388,y:-25.4}},{t:this.shape_177,p:{scaleX:1.388,scaleY:1.388,y:-25.3,x:-0.7}},{t:this.shape_171,p:{scaleX:1.388,scaleY:1.388,y:-42.3}},{t:this.shape_170,p:{scaleX:1.388,scaleY:1.388,y:-42.3}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-21.1}},{t:this.shape_189,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-21.1}},{t:this.shape_188,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-21.1}},{t:this.shape_187,p:{scaleX:1.388,scaleY:1.388,y:-21.7,x:7.5}},{t:this.shape_186,p:{scaleX:1.388,scaleY:1.388,y:-21.7}},{t:this.shape_185,p:{scaleX:1.388,scaleY:1.388,y:-21.7,x:7.5}},{t:this.shape_184,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-28.4}},{t:this.shape_183,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-28.4}},{t:this.shape_182,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-28.4}},{t:this.shape_181,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-28.4}},{t:this.shape_180,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-28.3}},{t:this.shape_179,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-28.3}},{t:this.shape_178,p:{scaleX:1.388,scaleY:1.388,y:-33.1}},{t:this.shape_177,p:{scaleX:1.388,scaleY:1.388,y:-33.1,x:-0.7}},{t:this.shape_171,p:{scaleX:1.388,scaleY:1.388,y:-50.1}},{t:this.shape_170,p:{scaleX:1.388,scaleY:1.388,y:-50}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.391,scaleY:1.391,x:-8,y:-12.9}},{t:this.shape_189,p:{scaleX:1.391,scaleY:1.391,x:-8,y:-12.9}},{t:this.shape_188,p:{scaleX:1.391,scaleY:1.391,x:-8,y:-12.9}},{t:this.shape_187,p:{scaleX:1.391,scaleY:1.391,y:-13.5,x:7.6}},{t:this.shape_186,p:{scaleX:1.391,scaleY:1.391,y:-13.5}},{t:this.shape_185,p:{scaleX:1.391,scaleY:1.391,y:-13.5,x:7.6}},{t:this.shape_184,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:-20.2}},{t:this.shape_183,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:-20.3}},{t:this.shape_182,p:{scaleX:1.391,scaleY:1.391,x:13.6,y:-20.2}},{t:this.shape_181,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-20.2}},{t:this.shape_180,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-20.2}},{t:this.shape_179,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-20.2}},{t:this.shape_178,p:{scaleX:1.391,scaleY:1.391,y:-24.9}},{t:this.shape_177,p:{scaleX:1.391,scaleY:1.391,y:-24.9,x:-0.6}},{t:this.shape_171,p:{scaleX:1.391,scaleY:1.391,y:-41.9}},{t:this.shape_170,p:{scaleX:1.391,scaleY:1.391,y:-41.9}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:-4.6}},{t:this.shape_189,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:-4.6}},{t:this.shape_188,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:-4.6}},{t:this.shape_187,p:{scaleX:1.387,scaleY:1.387,y:-5.1,x:7.5}},{t:this.shape_186,p:{scaleX:1.387,scaleY:1.387,y:-5.1}},{t:this.shape_185,p:{scaleX:1.387,scaleY:1.387,y:-5.1,x:7.5}},{t:this.shape_184,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-11.8}},{t:this.shape_183,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-11.9}},{t:this.shape_182,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-11.8}},{t:this.shape_181,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-11.8}},{t:this.shape_180,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-11.8}},{t:this.shape_179,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-11.8}},{t:this.shape_178,p:{scaleX:1.387,scaleY:1.387,y:-16.5}},{t:this.shape_177,p:{scaleX:1.387,scaleY:1.387,y:-16.5,x:-0.6}},{t:this.shape_171,p:{scaleX:1.387,scaleY:1.387,y:-33.5}},{t:this.shape_170,p:{scaleX:1.387,scaleY:1.387,y:-33.4}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.6}},{t:this.shape_189,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.6}},{t:this.shape_188,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.6}},{t:this.shape_187,p:{scaleX:1.387,scaleY:1.387,y:3.1,x:7.5}},{t:this.shape_186,p:{scaleX:1.387,scaleY:1.387,y:3.1}},{t:this.shape_185,p:{scaleX:1.387,scaleY:1.387,y:3.1,x:7.5}},{t:this.shape_184,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-3.6}},{t:this.shape_183,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-3.7}},{t:this.shape_182,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-3.6}},{t:this.shape_181,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-3.6}},{t:this.shape_180,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-3.6}},{t:this.shape_179,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-3.6}},{t:this.shape_178,p:{scaleX:1.387,scaleY:1.387,y:-8.3}},{t:this.shape_177,p:{scaleX:1.387,scaleY:1.387,y:-8.3,x:-0.6}},{t:this.shape_171,p:{scaleX:1.387,scaleY:1.387,y:-25.3}},{t:this.shape_170,p:{scaleX:1.387,scaleY:1.387,y:-25.2}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.391,scaleY:1.391,x:-8,y:11.7}},{t:this.shape_189,p:{scaleX:1.391,scaleY:1.391,x:-8,y:11.7}},{t:this.shape_188,p:{scaleX:1.391,scaleY:1.391,x:-8,y:11.7}},{t:this.shape_187,p:{scaleX:1.391,scaleY:1.391,y:11.1,x:7.6}},{t:this.shape_186,p:{scaleX:1.391,scaleY:1.391,y:11.1}},{t:this.shape_185,p:{scaleX:1.391,scaleY:1.391,y:11.1,x:7.6}},{t:this.shape_184,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:4.4}},{t:this.shape_183,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:4.3}},{t:this.shape_182,p:{scaleX:1.391,scaleY:1.391,x:13.6,y:4.4}},{t:this.shape_181,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:4.4}},{t:this.shape_180,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:4.4}},{t:this.shape_179,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:4.4}},{t:this.shape_178,p:{scaleX:1.391,scaleY:1.391,y:-0.3}},{t:this.shape_177,p:{scaleX:1.391,scaleY:1.391,y:-0.3,x:-0.6}},{t:this.shape_171,p:{scaleX:1.391,scaleY:1.391,y:-17.3}},{t:this.shape_170,p:{scaleX:1.391,scaleY:1.391,y:-17.3}}]},3).to({state:[]},2).to({state:[{t:this.shape_71,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:2.9,y:11.3,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:2.9,y:11.3,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:2.9,y:11.3,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-4.9,y:12,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-4.9,y:12,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:-4.9,y:12}},{t:this.shape_65,p:{scaleX:1.386,scaleY:1.386,y:-0.3,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.386,scaleY:1.386,y:-0.3,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.386,scaleY:1.386,y:-17.3,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.386,scaleY:1.386,y:-17.3,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.386,scaleY:1.386,y:-8.1,skewY:0,x:-13.9}},{t:this.shape_60,p:{scaleX:1.386,scaleY:1.386,y:0.1,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.386,scaleY:1.386,y:0.1,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_57,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_56,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_55,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_54,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_53,p:{scaleX:1.386,scaleY:1.386,y:5.4,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_51,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_50,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_49,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_48,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_47,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_46,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_45,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_44,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_43,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_42,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_41,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_40,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_39,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_38,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_37,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_36,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_35,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_34,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_33,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_32,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_31,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_30,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_29,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_28,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_27,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_26,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_25,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_24,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_23,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_22,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_21,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_20,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_19,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_18,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_17,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_16,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_15,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_14,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_13,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_12,p:{scaleX:1.386,scaleY:1.386,y:5.4,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_10,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_9,p:{scaleX:1.386,scaleY:1.386,y:-4.2,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.1,scaleX:1.386,scaleY:1.386,y:0.1,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.386,scaleY:1.386,rotation:0,y:6.6,x:-6.4,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.386,scaleY:1.386,rotation:0,y:6.6,x:-6.4,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-6.4,y:6.6,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.386,scaleY:1.386,x:10.6,skewY:0,y:9}},{t:this.shape_4,p:{scaleX:1.386,scaleY:1.386,x:13.5,y:2,skewY:0}},{t:this.shape_3,p:{scaleX:1.386,scaleY:1.386,x:13.5,y:2,skewY:0}},{t:this.shape_2,p:{scaleX:1.386,scaleY:1.386,x:14.6,y:2.1,skewY:0}},{t:this.shape_1,p:{scaleX:1.386,scaleY:1.386,x:14.6,y:2.1,skewY:0}},{t:this.shape,p:{scaleX:1.386,scaleY:1.386,x:14.7,skewY:0,y:2.1}}]},1).to({state:[{t:this.shape_71,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:-2.9,y:11.5,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:-2.9,y:11.5,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:-2.9,y:11.5,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:4.9,y:12.3,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:4.9,y:12.2,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:4.9,y:12.2}},{t:this.shape_65,p:{scaleX:1.385,scaleY:1.385,y:0,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.385,scaleY:1.385,y:-0.1,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.385,scaleY:1.385,y:-17.1,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.385,scaleY:1.385,y:-17.1,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.385,scaleY:1.385,y:-7.9,skewY:180,x:13.9}},{t:this.shape_60,p:{scaleX:1.385,scaleY:1.385,y:0.4,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.385,scaleY:1.385,y:0.4,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.385,scaleY:1.385,x:-1.2,y:5.7,skewY:180}},{t:this.shape_57,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_56,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_55,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_54,p:{scaleX:1.385,scaleY:1.385,x:-1.2,y:5.7,skewY:180}},{t:this.shape_53,p:{scaleX:1.385,scaleY:1.385,y:5.7,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_51,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_50,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_49,p:{scaleX:1.385,scaleY:1.385,x:-1.2,y:5.6,skewY:180}},{t:this.shape_48,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_47,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_46,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_45,p:{scaleX:1.385,scaleY:1.385,x:-1.2,y:5.7,skewY:180}},{t:this.shape_44,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_43,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_42,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_41,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_40,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_39,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_38,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_37,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_36,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_35,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_34,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_33,p:{scaleX:1.385,scaleY:1.385,x:-1.2,y:5.6,skewY:180}},{t:this.shape_32,p:{scaleX:1.385,scaleY:1.385,x:-1.2,y:5.7,skewY:180}},{t:this.shape_31,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_30,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_29,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_28,p:{scaleX:1.385,scaleY:1.385,x:-1.2,y:5.7,skewY:180}},{t:this.shape_27,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_26,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_25,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_24,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_23,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_22,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_21,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_20,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_19,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_18,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_17,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_16,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_15,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_14,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_13,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_12,p:{scaleX:1.385,scaleY:1.385,y:5.7,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_10,p:{scaleX:1.385,scaleY:1.385,x:-1.2,skewY:180,y:5.6}},{t:this.shape_9,p:{scaleX:1.385,scaleY:1.385,y:-4,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.2,scaleX:1.385,scaleY:1.385,y:0.9,regX:11.8,x:-1.7,skewY:180}},{t:this.shape_8,p:{scaleX:1.385,scaleY:1.385,rotation:0,y:6.8,x:6.4,skewY:180,skewX:0}},{t:this.shape_7,p:{scaleX:1.385,scaleY:1.385,rotation:0,y:6.8,x:6.4,skewY:180,skewX:0}},{t:this.shape_6,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:6.4,y:6.9,skewY:180,skewX:0}},{t:this.shape_5,p:{scaleX:1.385,scaleY:1.385,x:-10.6,skewY:180,y:9.2}},{t:this.shape_4,p:{scaleX:1.385,scaleY:1.385,x:-13.5,y:2.2,skewY:180}},{t:this.shape_3,p:{scaleX:1.385,scaleY:1.385,x:-13.5,y:2.3,skewY:180}},{t:this.shape_2,p:{scaleX:1.385,scaleY:1.385,x:-14.6,y:2.4,skewY:180}},{t:this.shape_1,p:{scaleX:1.385,scaleY:1.385,x:-14.6,y:2.3,skewY:180}},{t:this.shape,p:{scaleX:1.385,scaleY:1.385,x:-14.7,skewY:180,y:2.3}}]},1).to({state:[{t:this.shape_190,p:{scaleX:1.39,scaleY:1.39,x:-8,y:12.3}},{t:this.shape_189,p:{scaleX:1.39,scaleY:1.39,x:-8,y:12.3}},{t:this.shape_188,p:{scaleX:1.39,scaleY:1.39,x:-8,y:12.3}},{t:this.shape_187,p:{scaleX:1.39,scaleY:1.39,y:11.8,x:7.5}},{t:this.shape_186,p:{scaleX:1.39,scaleY:1.39,y:11.8}},{t:this.shape_185,p:{scaleX:1.39,scaleY:1.39,y:11.8,x:7.5}},{t:this.shape_184,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:5.1}},{t:this.shape_183,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:5}},{t:this.shape_182,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:5}},{t:this.shape_181,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:5.1}},{t:this.shape_180,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:5.1}},{t:this.shape_179,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:5.1}},{t:this.shape_178,p:{scaleX:1.39,scaleY:1.39,y:0.4}},{t:this.shape_177,p:{scaleX:1.39,scaleY:1.39,y:0.4,x:-0.6}},{t:this.shape_176,p:{scaleX:1.39,scaleY:1.39,x:7.1,y:0.8}},{t:this.shape_175,p:{scaleX:1.39,scaleY:1.39,y:0.8}},{t:this.shape_174,p:{scaleX:1.39,scaleY:1.39,x:-7.5,y:0.8}},{t:this.shape_173,p:{scaleX:1.39,scaleY:1.39,x:-7.5,y:0.8}},{t:this.shape_172,p:{scaleX:1.39,scaleY:1.39,y:9.5}},{t:this.shape_171,p:{scaleX:1.39,scaleY:1.39,y:-16.6}},{t:this.shape_170,p:{scaleX:1.39,scaleY:1.39,y:-16.6}},{t:this.shape_169,p:{scaleX:1.39,scaleY:1.39,x:12.9,y:-7.6}},{t:this.shape_168,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_167,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_166,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_165,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_164,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_163,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_162,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_161,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_160,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_159,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_158,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_157,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_156,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_155,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_154,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_43,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:5.3}},{t:this.shape_153,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:5.3}},{t:this.shape_152,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:5.3}},{t:this.shape_151,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_150,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_149,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_148,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_147,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_146,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_145,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_144,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_143,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_142,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_141,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_140,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_139,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_138,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_137,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_136,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_24,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:10.2,y:5.3}},{t:this.shape_135,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_22,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:10.2,y:5.3}},{t:this.shape_134,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_133,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_132,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_18,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:5.3}},{t:this.shape_17,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:5.3}},{t:this.shape_131,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_15,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:5.3}},{t:this.shape_130,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_129,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_128,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_127,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_126,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_125,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_124,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_123,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_122,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_121,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_120,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_119,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_118,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_117,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_116,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_115,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_114,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_113,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_112,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_111,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_110,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_109,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_41,p:{scaleX:1.39,scaleY:1.39,x:-10.3,skewY:0,y:6}},{t:this.shape_40,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:-10.3,y:6}},{t:this.shape_108,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_107,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_106,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_105,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_104,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_103,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_102,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_101,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_100,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_99,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_98,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_97,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_96,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_95,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_94,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_93,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_92,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_91,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_90,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_89,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_88,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_87,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_86,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_85,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_84,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_83,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_82,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_81,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_80,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_10,p:{scaleX:1.39,scaleY:1.39,x:-10.3,skewY:0,y:6}},{t:this.shape_79,p:{scaleX:1.39,scaleY:1.39,y:4.1,x:-0.3}},{t:this.shape_78,p:{scaleX:1.39,scaleY:1.39,y:4.1,x:-0.3}},{t:this.shape_77,p:{scaleX:1.39,scaleY:1.39,y:4.2}},{t:this.shape_76,p:{scaleX:1.39,scaleY:1.39,y:4.1}},{t:this.shape_75,p:{scaleX:1.39,scaleY:1.39,x:-8.2,y:-3.6}},{t:this.shape_74,p:{scaleX:1.39,scaleY:1.39,y:-3.5,x:8.1}},{t:this.shape_73,p:{scaleX:1.39,scaleY:1.39,x:-13.9,y:-7.3}},{t:this.shape_72,p:{scaleX:1.39,scaleY:1.39,y:10.3}}]},1).to({state:[{t:this.shape_206,p:{scaleX:1.378,scaleY:1.378,x:-7.9,y:11.9}},{t:this.shape_205,p:{scaleX:1.378,scaleY:1.378,x:-7.9,y:11.9}},{t:this.shape_204,p:{scaleX:1.378,scaleY:1.378,x:-7.9,y:11.9}},{t:this.shape_203,p:{scaleX:1.378,scaleY:1.378,x:7.4,y:11.3}},{t:this.shape_202,p:{scaleX:1.378,scaleY:1.378,x:7.4,y:11.4}},{t:this.shape_201,p:{scaleX:1.378,scaleY:1.378,y:11.4,x:7.5}},{t:this.shape_200,p:{scaleX:1.378,scaleY:1.378,x:13.4,y:4.7}},{t:this.shape_199,p:{scaleX:1.378,scaleY:1.378,x:13.4,y:4.6}},{t:this.shape_198,p:{scaleX:1.378,scaleY:1.378,x:13.4,y:4.7}},{t:this.shape_197,p:{scaleX:1.378,scaleY:1.378,x:-14.1,y:4.7}},{t:this.shape_196,p:{scaleX:1.378,scaleY:1.378,x:-14,y:4.7}},{t:this.shape_195,p:{scaleX:1.378,scaleY:1.378,x:-14,y:4.8}},{t:this.shape_194,p:{scaleX:1.378,scaleY:1.378,y:0}},{t:this.shape_193,p:{scaleX:1.378,scaleY:1.378,y:0}},{t:this.shape_192,p:{scaleX:1.378,scaleY:1.378,y:-16.8}},{t:this.shape_191,p:{scaleX:1.378,scaleY:1.378,y:-16.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.7,-20.6,35.1,42);


(lib.item_500 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7A9AC").s().p("AgoA2QgLgUAAghQAAgYAHgTQAMgjAgAAQAdAAANAZQAKATAAAgQAAAdgJAVQgNAdgeAAQgbAAgNgYgAgXgrQgHAPgBAdQABAYAFAOQAHAVASAAQANAAAKgNQAIgNABgiQAAgagHgRQgGgQgTAAQgPAAgIAQg");
	this.shape.setTransform(13.5,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7A9AC").s().p("AgoA2QgLgUAAghQAAgYAGgTQANgjAgAAQAcAAAOAZQAKATAAAgQAAAdgKAVQgNAdgdAAQgbAAgNgYgAgWgrQgJAPAAAdQAAAYAGAOQAHAVASAAQAOAAAIgNQAKgNgBgiQAAgagGgRQgHgQgSAAQgPAAgHAQg");
	this.shape_1.setTransform(1.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A7A9AC").s().p("AgjBCQgPgKgBgXIAUAAQACARANAHQAHACAJAAQAPAAAIgLQAJgKAAgOQgBgPgJgJQgKgHgMAAQgJAAgIAEQgHADgFAFIgQgBIALhQIBNAAIAAATIg+AAIgHArIAKgHQAIgDAKAAQAVAAAOANQAPAMAAAUQAAAXgOAQQgNAQgbAAQgSAAgPgKg");
	this.shape_2.setTransform(-10.7,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BCBEC0").s().p("AhaDeQgsgTgigiQgigigTgsQgSgrAAgwQAAhiBHhGQBGhHBiAAQBjAABGBHQBHBGAABiQAABjhHBGQhGBHhjAAQgvAAgrgSgAiQiQQg8A9AABTQAAApAPAlQAQAmAdAdQAdAdAmAQQAlAPAoAAQBVAAA8g8QA8g8AAhVQAAhTg8g9Qg9g8hUAAQhTAAg9A8g");
	this.shape_3.setTransform(0,-1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DCDDDE").s().p("AjMDNQhVhVAAh4QAAh3BVhVQBVhVB3AAQB4AABVBVQBVBVAAB3QAAB4hVBVQhVBVh4AAQh3AAhVhVg");
	this.shape_4.setTransform(0,-1.3);

	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(0,1.4,1,1,0,0,0,29.2,31.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-30.4,58.5,63.6);


(lib.item_100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#162618").s().p("AjFDQQhShWAAh6IABgbQAGhwBQhOQBRhNBvAAQBvAABRBNQBRBNAGBwIABAcQAAB6hSBWQhSBXh0AAQhyAAhThXgAiyjKQhLBIgFBoIgBAaQAABxBNBRQBMBRBqAAQBrAABNhRQBMhRAAhxIgBgaQgFhohLhIQhLhIhoAAIAAAAQhnAAhLBIg");
	this.shape.setTransform(0,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CA9330").s().p("AgkAwQgKgSAAgdQAAgWAHgQQALgfAcAAQAaAAALAWQAJAQAAAeQABAZgJASQgMAagaAAQgXAAgNgVgAgUgnQgHAPAAAZQAAAVAFANQAGATAQAAQAMAAAIgMQAIgMAAgeQAAgXgFgPQgHgPgQAAQgNAAgHAOg");
	this.shape_1.setTransform(10.6,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CA9330").s().p("AgkAwQgKgSAAgdQAAgWAHgQQALgfAcAAQAaAAALAWQAJAQAAAeQABAZgJASQgMAagaAAQgXAAgNgVgAgUgnQgHAPAAAZQAAAVAFANQAGATAQAAQAMAAAIgMQAIgMAAgeQAAgXgFgPQgHgPgQAAQgNAAgHAOg");
	this.shape_2.setTransform(-0.2,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CA9330").s().p("AAGBDIAAheIgeAAIAAgNQATgCAFgEQAIgEADgQIAOAAIAACFg");
	this.shape_3.setTransform(-10.4,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DFA136").s().p("AhQDGQgngRgfgeQgegegQgnQgRgoAAgqQAAhXA/g+QA/hABXABQBYgBA/BAQA/A+AABXQAABYg/A/Qg/A/hYgBQgpAAgngPgAiAiAQg2A2AABKQAABLA2A2QAaAaAhAOQAiAOAjAAQBLAAA2g2QA2g2AAhLQAAhKg2g2Qg2g2hLAAQhKAAg2A2g");
	this.shape_4.setTransform(0,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEC63E").s().p("Ai2C3QhMhMAAhrQAAhqBMhMQBMhMBqAAQBrAABMBMQBMBMAABqQAABrhMBMQhMBMhrAAQhqAAhMhMg");
	this.shape_5.setTransform(0,-1.1);

	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(0,1.3,1,1,0,0,0,26,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-29,56.1,59.1);


(lib.item_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A7A9AC").s().p("AgeAoQgIgOAAgZQAAgTAFgOQAJgaAYAAQAWAAAKATQAHAOAAAZQAAAWgHAPQgKAWgWgBQgUABgKgTgAgRghQgGANAAAVQAAASAEAKQAGARANAAQAKAAAHgKQAHgKAAgaQAAgTgFgNQgFgMgOAAQgLAAgGALg");
	this.shape.setTransform(6,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7A9AC").s().p("AgaAxQgLgIgBgQIAPAAQABAMAKAGQAFACAHAAQALAAAGgJQAGgIAAgKQAAgMgHgGQgIgFgIAAQgHAAgGADQgEACgFAEIgMgBIAJg8IA5AAIAAAOIguAAIgGAhIAIgFQAHgDAGAAQAQAAALALQALAIAAAPQAAARgKAMQgKAMgVAAQgNAAgLgIg");
	this.shape_1.setTransform(-3.1,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BCBEC0").s().p("Ah/CAQg1g1AAhLQAAhKA1g1QA1g1BKAAQBKAAA2A1QA1A1AABKQAABKg1A2Qg2A1hKAAQhJAAg2g1gAhshsQguAtAAA/QAABAAuAtQAtAuA/AAQBAAAAtguQAugtAAhAQAAg/gugtQgtguhAAAQg/AAgtAug");
	this.shape_2.setTransform(0,-0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DCDDDE").s().p("AiaCbQhAhBAAhaQAAhZBAhBQBBhABZAAQBaAABBBAQBABAAABaQAABahABBQhBBAhaAAQhaAAhAhAg");
	this.shape_3.setTransform(0,-0.9);

	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(0.1,1.2,1,1,0,0,0,22.1,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-22.8,44.2,48);


(lib.item_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA9330").s().p("AgXAgQgHgMAAgUQAAgNAEgLQAHgVATAAQARgBAIAPQAGALAAAUQABARgGAMQgIARgSABQgPAAgIgPgAAAgjQgIAAgFAKQgFAJAAARQABAOADAIQAEANAKAAQAJAAAFgIQAFgIAAgUQAAgPgEgKQgEgKgKAAIgBAAg");
	this.shape.setTransform(2.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CA9330").s().p("AAEgSIgUAAIAAgIQANgCADgCQAFgDACgLIAJAAIABBZIgNAAg");
	this.shape_1.setTransform(-4,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DFA136").s().p("AhkBmQgrgqAAg8QgBg6ArgqQAqgrA7AAQA6gBArArQArAqAAA7QABA6grArQgqArg8AAQg5AAgrgqgAhXhWQgkAlABAxQAAA0AkAjQAkAkAyAAQAzAAAkglQAlgkgBgyQAAgzgkgkQglgkgyAAQgzABgkAkg");
	this.shape_2.setTransform(0,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEC63E").s().p("Ah6B8QgzgzgBhJQAAhGAzg0QAzgzBIgBQBHAAA0AzQAzAyABBJQAABHgzA0QgzAzhJABIAAAAQhHAAgzgzg");
	this.shape_3.setTransform(0,-0.6);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0.1,1.1,1,1,0,0,0,17.7,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,-18.1,35.4,38.4);


(lib.goal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC474A").s().p("AAGAVIgEgVIgEAAIgJATIgFgBIgCgUIgHgBIABgDIAFABIgBgQIAEAAIACAQIAKABIAEgPIAEABIACAQIAJABIAGgPIAEABIgGAPIAFAAIAAACIgGgBIgIAVgAAJAOIAFgNIgIgBgAgMALIABAAIAEgLIgHgBgAABgDIgBgHIgBAHIACAAg");
	this.shape.setTransform(-7.9,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC474A").s().p("AgHAxQgRgDgGgQQgFgOADgTQADgRAGgKQALgVATADQATADAFARQAFANgEATQgDATgIAMQgJAOgOAAIgFAAgAgJgdQgHAJgDAUQgCAMABAKQADAOAMACQAHABAHgHQAHgIADgWQADgPgCgLQgDgLgLgCIgDAAQgHAAgFAIg");
	this.shape_1.setTransform(21.6,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC474A").s().p("AgHAxQgRgDgGgQQgFgOADgTQADgRAGgKQALgVATADQATADAFARQAFANgEATQgDATgIAMQgJAOgOAAIgFAAgAgJgdQgHAJgDAUQgCAMABAKQADAOAMACQAHABAHgHQAHgIADgWQADgPgCgLQgDgLgLgCIgDAAQgHAAgFAIg");
	this.shape_2.setTransform(14,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC474A").s().p("AgHAxQgRgDgGgQQgFgOADgTQADgRAGgKQALgVATADQATADAFARQAFANgEATQgDATgIAMQgJAOgOAAIgFAAgAgJgdQgHAJgDAUQgCAMABAKQADAOAMACQAHABAHgHQAHgIADgWQADgPgCgLQgDgLgLgCIgDAAQgHAAgFAIg");
	this.shape_3.setTransform(6.4,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC474A").s().p("AgHAuIAJhCIgVgEIACgJQANABAEgCQAGgCAEgLIAKACIgQBdg");
	this.shape_4.setTransform(-1.3,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C3F4F").s().p("ABDAkQgngCgjgJQhJgRAKgbQALgdA4AWQAaALAZAPIgGAEQgZgNgYgKQg0gUgDAXQgEAWBDAOQAjAHAjACQADAIgFAAIgCgBg");
	this.shape_5.setTransform(-20.4,5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiIBTIhhh3IB+hdIFVAvIgdDTgAioguQgIAGgBAKQgBALAGAHQAGAJAKABQAKABAJgFQAIgHABgKQABgKgGgJQgGgIgKgBIgEAAQgIAAgHAFg");
	this.shape_6.setTransform(1.8,13.8);

	this.instance = new lib.CompoundPath();
	this.instance.setTransform(2.7,15.1,1,1,0,0,0,23.4,13);
	this.instance.alpha = 0.199;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAFQgEgYAFAAIAHgBIADABIgBAFIgBALQAAABABAAQAAABAAAAQAAABAAAAQABAAAAAAQACAAAEgHQAEgHABgGQAAAAABgBQAAAAAAAAQAAAAAAAAQABgBAAAAIAHgBIACABQABAHgLALIAIAFQAIAHABAKIgDABIgIABQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQgCgIgEgFQgCgEAAABQgCAAgCADQgEADABACIAEALIgBABIgJABIAAABQgEAAgCgTg");
	this.shape_7.setTransform(-3.6,6.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAUIgCgKIAAgRQABgNABAAIAMgCIABABIgDAJQgDAKABAHQABAJAHgBQAGgBAFgFIAGAKQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgbAEIAAABQgBAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_8.setTransform(-7.7,7.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAVQgCgEgCgNQgDgYAFAAIAGgBQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAABIgBAGQgBAHABAHQACALAFAJIgBABIgCAAIgGABQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_9.setTransform(-11,7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAXQgCgEgBgNQgEgXAFgBIAHgBQAEAAAEADIAHAHIACACQAAgEAGgHQAEgFADABIAGgBQAFAAADAXQACAMgBAEQgBABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgJACIgBAAIgBgBQADgLgCgLQAAgIgDAAQgCAAgDAIQgCADgBAHQgBAEgCABQgCAAgBgEIgHgJIgDgDQAAgBgBgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIABADQABAMAGALQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgIABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_10.setTransform(-15.3,7.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAYQgLgGgEgLQgEgJAEgJQAFgKAKgEQAJgDAKAGQALAFAEALQAEAJgEAKQgFAKgKADIgJABQgEAAgGgDg");
	this.shape_11.setTransform(-10.2,-19.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D3E2E9").s().p("AgJAYQgKgFgFgLQgGgPAMgLIAHgIQgKALAGAPQAEAKALAFQAIAGALgEQAFgBADgDIgHAHQgFAEgFACIgHABQgFAAgHgDg");
	this.shape_12.setTransform(-11.1,-19.1);

	this.instance_1 = new lib.Path_6();
	this.instance_1.setTransform(-7.5,-18.1,1,1,0,0,0,6.3,4.5);
	this.instance_1.alpha = 0.148;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#822D1E").s().p("AhahIIC1gaIAACrIi1Aag");
	this.shape_13.setTransform(-9.9,7.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E3E2E2").s().p("Ahai5IC1gZIAAGMIi1AZg");
	this.shape_14.setTransform(-9.9,6.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6F2319").s().p("AhaAAQAAgHAIgBICjgMQADgBAEADQADADAAAEIAAAQIi1ARg");
	this.shape_15.setTransform(-13.6,-25.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#822D1E").s().p("AhsgvIC0gRIAlBnIi0Aag");
	this.shape_16.setTransform(-11.7,-18.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6F2319").s().p("AAZgdIAKAdIhFAeg");
	this.shape_17.setTransform(-25.3,-20.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CF473A").s().p("AgwAEIA8g7IAlBwg");
	this.shape_18.setTransform(-23.9,-17.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B4B4B4").s().p("Ag7gUIC0gRIg/ApIizAjg");
	this.shape_19.setTransform(-16.6,-21.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CF473A").s().p("AgwA7IABiqIBgA1IAACrg");
	this.shape_20.setTransform(-23.9,5.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F3F3F3").s().p("AgwCsIABmMIBgA1IAAGMg");
	this.shape_21.setTransform(-23.9,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_1},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-27.9,57.8,56);


// stage content:
(lib.stage_1_3_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;