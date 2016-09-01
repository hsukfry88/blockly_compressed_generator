(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 60,
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
	this.shape.graphics.f("#5D9D35").s().p("AgaAEQAQgIAKgCQANgBAOAHQgMAHgOAAIgbgDg");
	this.shape.setTransform(-37.9,-7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D9D35").s().p("AAAAGQgFAAgSgEQANgGAKgBQALgCANAHQgMAGgMAAIAAAAg");
	this.shape_1.setTransform(262.4,52.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#67B151").s().p("AAAAIQgPgBACgHQADgGALgBQANgBAAAIQgEAIgJAAIgBAAg");
	this.shape_2.setTransform(279.9,-168.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66B050").s().p("AgCAHQgQgHgIABQALgHANAAQAKAAATAGQgLAHgMAAIgGAAg");
	this.shape_3.setTransform(258.4,-188.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7BB94D").s().p("AgEEEIi4gBQgsAAgSgRQgSgSAAgqIAAlrQAAgqASgSQATgRArAAQC8gCC9ACQAsAAASASQASATAAAtQABCwgBCxQAAAvgTASQgSARgwABg");
	this.shape_4.setTransform(-30,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#159157").s().p("AhHApQgRgCgBgRQgBgTAPgLQANgNAUgEIAfgFQAQgEANgFQAVgIAaAYQAbAXgCAWQgCATgVAAIhsAAIgSABIgMgBg");
	this.shape_5.setTransform(-138.1,-121.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#98C452").s().p("AABA4IhnAAQgbAAgGgRQgEgKAEgJQAEgFAKgJIAqglQAbgSAfAPIAJgDQBBgYATAHQARAGAoA6QAOAVgHAMQgHALgYACIg0ABIg0gBg");
	this.shape_6.setTransform(-152,-110.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#159157").s().p("AhGAqQgRgBgCgRQgCgTAPgMQAMgNAUgEIAigHQARgEAOgFQATgHAbAbQAbAZgFAVQgCAKgIADQgFACgMABIhmAAIgVAAIgJAAg");
	this.shape_7.setTransform(-138.1,118.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#98C452").s().p("AhqA3QgaAAgEgUQgEgPASgOQAbgaAPgLQAagTAgAQIAJgDQBCgWASAGQASAGAnA4QAbAogxAGIgKABg");
	this.shape_8.setTransform(-152,129.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#159157").s().p("AhIAqQgRgDgBgUQAAgQAOgLQAOgNASgDQAwgKARgGQAUgHAbAbQAaAYgEAVQgDAKgHAEQgGADgLAAIhmAAIgTAAIgOAAg");
	this.shape_9.setTransform(101.8,-121.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#98C452").s().p("AABA4IhiAAQgQAAgGgCQgMgDgEgMQgFgLAHgJQACgEAOgMQAlgiADgCQAZgQAeAPIAJgDQBDgXARAGQASAGAoA5QAOAVgHAMQgGAMgYABIg0ABIg1AAg");
	this.shape_10.setTransform(87.9,-110);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#159157").s().p("AhHAqQgSgDgBgUQAAgQAPgLQAOgNASgDQAwgKAQgGQAUgHAbAbQAbAYgFAVQgCAKgIAEQgFADgLAAIhmAAIgUAAIgNAAg");
	this.shape_11.setTransform(101.8,118.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#98C452").s().p("AhkA4QgPAAgHgDQgKgEgEgMQgDgLAGgIQADgEALgJQAOgJAagbQAZgSAeAPQADABALgFQA8gZAbAKQAbALAdA6QAJATgHAKQgIAKgTABIhsAAg");
	this.shape_12.setTransform(87.9,129.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5CAC4F").s().p("AgLAAQAJgGACAAQAMACgBAHQAAABgMADg");
	this.shape_13.setTransform(-297,-69.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66B050").s().p("AgZABQALgHANAAQAHAAAUAGQgRAHgKAAIgBAAQgLAAgMgGg");
	this.shape_14.setTransform(-277.3,-48.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9BCB78").s().p("AgXAEIAAgHIAuAAQACADgCAEg");
	this.shape_15.setTransform(-52.5,150.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#77BE74").s().p("AgbgBIA3AAQgPADgNAAQgNAAgOgDg");
	this.shape_16.setTransform(-38.1,151);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#78BE74").s().p("AgYgBIAWgCIAbABIAAAEIgXACQgPAAgLgFg");
	this.shape_17.setTransform(-24.6,150.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E8EFE8").s().p("AgZAVQgKgKACgQQACgRAMgHQAJgFARgBQAdAagCAMQgCAOghATQgRgGgHgJg");
	this.shape_18.setTransform(-49.8,123.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EBC4C1").s().p("AgMAiQgQgEgEgTQgEgQAJgMQAIgKASgIQA8AXgqAvQgYABgFgCg");
	this.shape_19.setTransform(-49.8,136.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E8EFE8").s().p("AghgEQABgSANgHQAJgEARgCQAdAagCAMQgCAOghAUQgkgLAEgeg");
	this.shape_20.setTransform(-49.8,197.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E6EEE6").s().p("AACgiQAnANgHAgQgFATgQAEQgFABgYABQgsgyA+gUg");
	this.shape_21.setTransform(-10.3,120.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F2C5C7").s().p("AghgEQACgRAMgHQAJgFARgCQAdAagCAMQgCAPghASQgigJACgfg");
	this.shape_22.setTransform(-49.7,167.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E9F0EA").s().p("AgGgjQASACAKAGQANAJAAASQgBATgMAJQgKAHgSABQg4gkA4gjg");
	this.shape_23.setTransform(-10.3,181.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EBC5C2").s().p("AgPgiQAWgBAJAEQAQAGACAVQAEAlgrACQgzgcApgpg");
	this.shape_24.setTransform(-10.4,164.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9BCB78").s().p("AgXAEIAAgHIAuAAQACADgCAEg");
	this.shape_25.setTransform(-52.5,-149);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#78BE74").s().p("AgeAAQAOgEAPAAQAKABAXADQgZAEgJABIgDAAQgOAAgLgFg");
	this.shape_26.setTransform(-24.1,-149);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#77BE74").s().p("AgdADQAkgMAXAMg");
	this.shape_27.setTransform(-39.3,-149);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F5C6C9").s().p("AgbAQQgJgNAFgQQAFgRAQgDQAJgCASABQAWAZgHAQQgGAPgbANQgSgJgIgKg");
	this.shape_28.setTransform(-49.8,-197);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E8EFE8").s().p("AghgEQABgRANgHQAJgGARgBQAdAagCAMQgCAPghASQgkgKAEgeg");
	this.shape_29.setTransform(-49.8,-102.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E9F0EA").s().p("AgGgjQASACAKAGQANAJAAASQgBATgMAJQgKAHgSABQg4gkA4gjg");
	this.shape_30.setTransform(-10.3,-118.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F2C5C7").s().p("AghgEQACgSAMgGQAJgFARgCQAdAagCANQgCAOghASQgigJACgfg");
	this.shape_31.setTransform(-49.7,-132);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EBC5C2").s().p("AgPgiQAWgBAJAEQAQAGACAVQAEAlgrACQgzgcApgpg");
	this.shape_32.setTransform(-10.4,-134.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E6EEE6").s().p("AgQgjQAaABADABQAQAEAFATQAIAfgoAOQg/gUAtgyg");
	this.shape_33.setTransform(-10.3,-180.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#76BC6E").s().p("AggAAQAQgEAPABQAKAAAYADQgXAEgLAAIgDAAQgNAAgPgEg");
	this.shape_34.setTransform(255.7,-29);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#76BC6E").s().p("AgfAAQAPgEAOABQALAAAXADQgXAEgLABQgOAAgPgFg");
	this.shape_35.setTransform(284.7,-29);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#77BD6F").s().p("AgbAAQAdgJAaAJQgPAFgNAAQgOAAgNgFg");
	this.shape_36.setTransform(287.4,-89);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#78BD6F").s().p("AACAFQgNgBgTgGIAigCQARAAAKAEQgPAFgMAAIgCAAg");
	this.shape_37.setTransform(273,-89);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#78BD6F").s().p("AgbgBIA3AAQgPADgNAAQgNAAgOgDg");
	this.shape_38.setTransform(259.8,-88.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#77BD6F").s().p("AgeAAQAPgEANAAQAOABATAGIgiACIgCAAQgPAAgKgFg");
	this.shape_39.setTransform(245.8,-89);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#76BC6E").s().p("AgdADQAVgFAMABQAOAAAMAEg");
	this.shape_40.setTransform(290.7,30.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#76BC6E").s().p("AAAAEIgXgCQAKgFANgBQAHAAARADQgJAGgMAAIgDgBg");
	this.shape_41.setTransform(248.5,30.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#76BC6E").s().p("AgdADQAVgFAMABQANAAANAEg");
	this.shape_42.setTransform(247.7,150.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#76BC6E").s().p("AgDACQgNAAgNgEIA7AAQgUAFgLAAIgCgBg");
	this.shape_43.setTransform(292,151);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#76BC6E").s().p("AgDACQgNAAgMgEIA5AAQgTAFgLAAIgCgBg");
	this.shape_44.setTransform(256.1,91);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#76BC6E").s().p("AgcABQAXgFAKABQAOAAAKAHIg5gDg");
	this.shape_45.setTransform(283.6,90.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#73BB6B").s().p("AggACQAigJAfAJg");
	this.shape_46.setTransform(269.3,-29.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#73BB6B").s().p("AghgBIBDAAQgUADgPAAQgRAAgPgDg");
	this.shape_47.setTransform(277.6,151);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#73BB6B").s().p("AgbgCIA3AAQgOAFgOAAQgMAAgPgFg");
	this.shape_48.setTransform(263,150.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#73BB6B").s().p("AAAAEIgdgEQAggIAbAIQgLAEgPAAIgEAAg");
	this.shape_49.setTransform(277.1,31);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#73BB6B").s().p("AgZABIgCgBIA3AAIAAABg");
	this.shape_50.setTransform(269.8,90.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#73BB6B").s().p("AgbgCIA3AAQgPAFgNAAQgNAAgOgFg");
	this.shape_51.setTransform(262.9,31.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8BC679").s().p("AgJgZQALAHAEAMIAEAVQgHALgMAAg");
	this.shape_52.setTransform(268,181.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#8FC981").s().p("AgTAoQgDgIAAgOIAshJQADAcgNAgQgOAmgBANQgLgEgFgMg");
	this.shape_53.setTransform(277.2,182.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3D7636").s().p("AgiADIgJgSQAGgHAJgCIARgBQAXABAHACQARAEAHAQQADAGgGAGQgFAFgJACQgXAIgJABIgBAAQgTAAgIgXg");
	this.shape_54.setTransform(283.3,192.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F356AE").s().p("Agbg7IAHAEQAEACABACQADAKAXgIQAVgGgFAYIgKA2QgKAfgiAGg");
	this.shape_55.setTransform(276.7,171.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F283C6").s().p("AgWAPQgYglAIgUQADgHAGgCQAGgBAFAEQALAIAKgIQAQgLAEABQAjA9giA5QgYgFgWgog");
	this.shape_56.setTransform(271.4,171.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#159157").s().p("AhDAqQgRAAgHgVQABgHABgDQAQgcAngKIBBgNQASgGAPATQAJAKANAXQAIANgDALQgEALgSABg");
	this.shape_57.setTransform(281.7,-121.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#159157").s().p("Ag8AoQgWAAgHgOQgEgJAFgIIAKgLQAhglAyAAQA1gBAVAkQAQAYgFAKQgGAJggABg");
	this.shape_58.setTransform(281.7,118.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#159157").s().p("AhHApQgRgCgBgRQgBgTAPgLQANgNAUgEIAfgFQAQgEANgFQAVgIAaAYQAbAXgCAWQgCATgVAAIhsAAIgSABIgMgBg");
	this.shape_59.setTransform(281.8,-1.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#98C452").s().p("AhnA4QgaAAgHgRQgDgLAFgIQADgFAKgJIArglQAagRAfAOIAFgBIAFgCQBAgZAYAJQAXAJAgA7QALAUgJALQgIAJgVABIhpAAg");
	this.shape_60.setTransform(267.9,-110.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#98C452").s().p("AABA4IhiAAQgQAAgGgCQgMgDgEgMQgFgLAHgJQACgEAOgMQAlgiADgCQAZgQAeAPIAJgDQBDgXARAGQASAGAoA5QAOAVgHAMQgGAMgYABIg0ABIg1AAg");
	this.shape_61.setTransform(267.9,129.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#98C452").s().p("AhkA4QgOAAgIgDQgKgEgEgMQgDgLAGgIQADgEALgJQAOgKAagaQAZgSAeAPQADABALgFQA8gZAbALQAbAKAdA6QAJATgIAKQgHAKgTABIhsAAg");
	this.shape_62.setTransform(267.9,9.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#98C452").s().p("ABRBBQghgBgxAAIhVAAIgdAAQgQgDgGgRQgFgNAJgMQAFgHANgMQAhgtAvAOQAOAEAMgLQANgOAGgCQAJgLAMAAIA5AMQAIAFADAOQAEAPAFAFQACAVATAHQAPAHgGANQgSAggkAAIgDgBg");
	this.shape_63.setTransform(265.9,189.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#7BB94D").s().p("Ai6EEQgvgBgRgSQgSgTAAgwIAAlbQAAgxASgSQATgSAygBIFwAAQAuABASARQASATAAAsQABCygBCzQAAAtgSARQgSASguABg");
	this.shape_64.setTransform(269.9,60.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#31932F").s().p("Ai6EEQgtgBgTgRQgSgSAAgsIAAlmQAAgtASgSQASgRAugBIF1AAQAvABARASQASATAAAvQABCugBCuQAAAxgSASQgTASgyABg");
	this.shape_65.setTransform(269.9,-59.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#8DB881").s().p("AAAAFQgMAAgHgFQAHgEAMAAIAUAAIAAAJIgUAAg");
	this.shape_66.setTransform(-251.1,150.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#8DB881").s().p("AAAAFQgMAAgHgFQAHgEAMAAIAUAAIAAAJIgUAAg");
	this.shape_67.setTransform(-251.1,-149);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8DB881").s().p("AAAAFQgMAAgHgFQAHgEAMAAIAUABIAAAIIgUAAg");
	this.shape_68.setTransform(-251.1,30.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#79BE75").s().p("AgTAAQAIgEALAAIAUAAIAAAIIgUABIAAAAQgMAAgHgFg");
	this.shape_69.setTransform(-251.1,-29);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#42A54D").s().p("AACAHQgGgBgDgFQgCgCACgDQACgDAFABQACAAAGAFQAEAIgJAAIgBAAg");
	this.shape_70.setTransform(-285.7,-105.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#8DB881").s().p("AgWACQALgFAMAAIAVgBIAAAJg");
	this.shape_71.setTransform(-251.3,-89);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#8DB881").s().p("AAAAFQgMAAgHgFQAHgEAMAAIAUAAIAAAJIgUAAg");
	this.shape_72.setTransform(-251.1,90.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#299D4D").s().p("AgMgDQAAgJANAIIALAHIgFAEIgGACIgBAAQgMAAAAgMg");
	this.shape_73.setTransform(-283.6,-7.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#8AB780").s().p("AgdAAQAPgEAOAAQAMAAASAEQgQAFgOAAQgMAAgRgFg");
	this.shape_74.setTransform(-278.5,90.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#8BB780").s().p("AgFADQgOAAgKgFIA7AAQgWAFgLAAIgCAAg");
	this.shape_75.setTransform(-263.7,90.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#77BE74").s().p("AgeAAQANgEAPAAQAKABAXADQgYAEgJABIgDAAQgOAAgLgFg");
	this.shape_76.setTransform(-278.1,-29);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#78BE74").s().p("AgWADQAWgLAXALg");
	this.shape_77.setTransform(-264.5,-29.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#8BB780").s().p("AgbADQAPgGANABQALABAQAEg");
	this.shape_78.setTransform(-264.8,30.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#8AB780").s().p("AAAAEIgZgDQAZgKAaAJQgKAEgMAAIgEAAg");
	this.shape_79.setTransform(-278.3,30.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#8AB780").s().p("AgaADQAOgHANACIAZAFg");
	this.shape_80.setTransform(-278.6,150.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#8BB780").s().p("AAAADIgagFIA0AAQgKAFgMAAIgEAAg");
	this.shape_81.setTransform(-264.4,150.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#8BB780").s().p("AgbADQAPgGANABQALABAQAEg");
	this.shape_82.setTransform(-264.8,-149.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#8AB780").s().p("AgdAAQAdgIAeAIQgPAFgPAAQgKAAgTgFg");
	this.shape_83.setTransform(-278.6,-149);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#8BB780").s().p("AgfAAQANgEAPAAIAjAEQgWAEgMABQgOAAgPgFg");
	this.shape_84.setTransform(-264.1,-89);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8AB780").s().p("AADAEIgigDQAigJAdAIQgMAEgOAAIgDAAg");
	this.shape_85.setTransform(-278.9,-89);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#89B77E").s().p("AgbgBIA3AAQgPADgNAAQgOAAgNgDg");
	this.shape_86.setTransform(-292.1,-88.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#74BC70").s().p("AgBgbQAKAcgKAbg");
	this.shape_87.setTransform(-179.4,-15.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#74BC70").s().p("AgCgiQAGAXgBAQQAAAOgFAQg");
	this.shape_88.setTransform(-239.4,-16.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3BA24C").s().p("AACAJIgKAAQgGgBgBgIQgBgJAMABIANAAQAHABAAAHQAAAFgEADIgGABIgEAAg");
	this.shape_89.setTransform(-283.2,-123.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#86B67B").s().p("AgggBIBBAAQgSADgPAAQgQAAgQgDg");
	this.shape_90.setTransform(-292.4,-148.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#75BC70").s().p("AgcACIAAgDIA5AAIAAADg");
	this.shape_91.setTransform(-293,-29);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#86B67B").s().p("AgaACIgBgDIA2AAIABADg");
	this.shape_92.setTransform(-293,90.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#86B67B").s().p("AgaACIgBgDIA2AAIABADg");
	this.shape_93.setTransform(-293,150.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#86B67B").s().p("AgmAAQAVgDARgBQAPAAAYAEQgVAEgSABQgOAAgYgFg");
	this.shape_94.setTransform(-293,30.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#75BD71").s().p("AgBAdIAAg5IADAAIAAA5g");
	this.shape_95.setTransform(-179.5,12.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#75BD71").s().p("AAAgeQAJAegJAfQgIgfAIgeg");
	this.shape_96.setTransform(-239.5,12.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#75BC71").s().p("AgEAAQAAgPAEgOQAKAkgKAXIgEgeg");
	this.shape_97.setTransform(-239.5,-1.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#75BC71").s().p("AgBgbQAKAbgKAcg");
	this.shape_98.setTransform(-179.4,-1.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#2E9F4D").s().p("AgWAIQAJgOALgBQAFgBATAFQgKAKgMACIgWgBg");
	this.shape_99.setTransform(-283.3,10.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EAF0EA").s().p("AgXgfQAZgEAHABQARADAHATQAGAPgLANQgEAFgUAOQg8gRAhgxg");
	this.shape_100.setTransform(-249.5,108.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F1C5C6").s().p("AgVAcQgMgJgBgRQgCgfAogGQAfAYAAALQAAAMgfAZQgQgDgJgGg");
	this.shape_101.setTransform(-249.5,70.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EBF0EA").s().p("AgiAHQgDgMAYgdQAUAAAGACQAPAFAFAPQAGAQgKANQgGAGgSANQgjgQgEgNg");
	this.shape_102.setTransform(-249.5,-139.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#ECC5C2").s().p("AgWggIAfgCQASACAGATQAGAPgKAOQgGAJgSALQg9gSAigyg");
	this.shape_103.setTransform(-249.5,-196.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E9EFE8").s().p("AgigGQAEgOAjgPQASAKAGAKQAKAMgGAQQgFAQgOAEQgGACgVABQgYgfADgLg");
	this.shape_104.setTransform(-249.5,133);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E4EDE3").s().p("AgjADQALgtAjAJQAVAFADASQACAJgEAXQgSANgOAAQgVAAgPggg");
	this.shape_105.setTransform(-196.4,-21.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E9C4BF").s().p("AgQAdQgJgHgKgRQAQgjAOgEQALgDAeAYQAAAVgCAGQgFAPgQAEQgGACgGAAQgIAAgJgGg");
	this.shape_106.setTransform(-227.5,23.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E4EDE3").s().p("AgjgCQAfg8AoAyQAAAUgDAJQgGAPgSADIgIAAQgbAAgJglg");
	this.shape_107.setTransform(-196.4,23.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E7EFE7").s().p("AgMAhQgQgFgEgOQgDgIAAgTQAegYAMADQANAEAQAjQgKARgJAHQgIAGgJAAQgFAAgHgCg");
	this.shape_108.setTransform(-139.6,23.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E9EFE8").s().p("AgWAhQgjg1A9gOQASAKAHAJQAKANgGAPQgHATgRADIgGAAQgHAAgSgCg");
	this.shape_109.setTransform(-249.5,-44);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#E7EEE6").s().p("AgXAhQghg1A8gPQATALAGAJQAKANgGAPQgHAUgRACIgEABQgHAAgVgDg");
	this.shape_110.setTransform(-249.5,61);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EDC5C3").s().p("AgCgjQAqAJgFAjQgDASgQAFQgEACgZACQgwgnA7ggg");
	this.shape_111.setTransform(-249.6,81);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E6EEE5").s().p("AgjANQAAgSADgIQAEgPAQgFQAQgFANAJQAJAHAKARQgOAkgPAEIgEABQgNAAgZgXg");
	this.shape_112.setTransform(-139.6,-21.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EAC5C0").s().p("AgjACQAJgoAgAEQAUACAGAPQAEAJAAAUQgUAXgQAAQgTABgQgig");
	this.shape_113.setTransform(-227.5,-21.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#1C9458").s().p("AgqAsIgegBQgQgEgBgSQgBgRANgLQALgLASgEQArgHAUgLQARgIAQALQAFADAUAWIAOAQQAGALgFAKQgHAOgPAEQgHABgXAAg");
	this.shape_114.setTransform(-272.7,110.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#9CCB79").s().p("AgSAEIAAgHIAlAAQABADgBAEg");
	this.shape_115.setTransform(186.9,-29);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#33A04D").s().p("AgUADQAHgFALgBIAXgCQgLAJgKACIgBAAQgHAAgMgDg");
	this.shape_116.setTransform(221.9,-124.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#33A04D").s().p("AAAgDQAIgCAQABQgKAIgNABQgOgBgKACQANgHAKgCg");
	this.shape_117.setTransform(221.5,55.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#9BCA77").s().p("AgEgcIAHAAQgBAKADATQAAASgJAKg");
	this.shape_118.setTransform(180.4,27.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#33A04D").s().p("AgWAFQAMgGAKgCQAHgCAQABQgKAIgMABQgOgBgJABg");
	this.shape_119.setTransform(221.5,175.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#76BC6E").s().p("AgEAAQgBgVAKgMIAAAhQABAWgJAMIgBgig");
	this.shape_120.setTransform(240.4,-60.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#76BD6E").s().p("AgEAAQgBgUAJgNIABAiQABAVgJAMIgBgig");
	this.shape_121.setTransform(240.4,13.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#76BD6E").s().p("AgEAAQgBgUAJgNIABAiQABAVgJAMIgBgig");
	this.shape_122.setTransform(240.4,73.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#34A04D").s().p("AgVgBIAXgDQAMAAAIAHQgJACgIAAQgOAAgMgGg");
	this.shape_123.setTransform(221.7,73.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#76BC6E").s().p("AgEAAQgBgVAKgMIAAAhQABAWgJAMIgBgig");
	this.shape_124.setTransform(240.4,-0.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#78BD6F").s().p("AAFghIAABDQgVgiAVghg");
	this.shape_125.setTransform(240.3,87.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#8CB782").s().p("AAAADQgLgBgQgEIA3AAQgNAFgOAAIgBAAg");
	this.shape_126.setTransform(229.7,-88.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#76BD6E").s().p("AgEAAQgBgVAJgMIABAiQABAVgJAMIgBgig");
	this.shape_127.setTransform(240.4,-46.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#76BC6E").s().p("AgEAAQgBgVAKgMIAAAhQABAVgJANIgBgig");
	this.shape_128.setTransform(240.4,59.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#79BE75").s().p("AgcABQAXgFALABQAOAAAJAHIg5gDg");
	this.shape_129.setTransform(228.6,-29);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#78BE74").s().p("AgbACQAcgJAaAJg");
	this.shape_130.setTransform(215,-29.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#78BD6F").s().p("AAFghIAABDQgVgiAVghg");
	this.shape_131.setTransform(240.3,-32.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#77BE74").s().p("AgYAAIAYgDQAOgBALAEQgKAEgMAAQgLAAgQgEg");
	this.shape_132.setTransform(201.5,-29.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#8CB782").s().p("AgbADQAbgKAcAKg");
	this.shape_133.setTransform(229,30.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#8BB780").s().p("AgdADQAXgGAMABQAOAAAKAFg");
	this.shape_134.setTransform(214.5,30.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#8AB780").s().p("AgdADQAogMATAMg");
	this.shape_135.setTransform(200.5,30.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#8BB780").s().p("AgZAAQAMgEANABIAaADQgMAEgOAAQgLAAgOgEg");
	this.shape_136.setTransform(215.2,-149);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#77BD6F").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_137.setTransform(240.4,147.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#8AB780").s().p("AgdAAQAPgEAOAAQALAAATAEQgRAFgNAAQgMAAgRgFg");
	this.shape_138.setTransform(201.4,-149);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#8AB780").s().p("AgdAAQAdgIAeAIQgQAFgOAAQgLAAgSgFg");
	this.shape_139.setTransform(201.3,150.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#8BB780").s().p("AAEAFIgjgFQAWgDAMAAQAPgBAOAEQgMAFgOAAIgCAAg");
	this.shape_140.setTransform(214.9,150.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#8CB782").s().p("AgcgCIA5AAQgOAFgPAAQgMAAgQgFg");
	this.shape_141.setTransform(228.9,150.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#78BD6F").s().p("AgEghQAVAhgVAig");
	this.shape_142.setTransform(240.5,161.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#78BD6F").s().p("AgEghQAVAhgVAig");
	this.shape_143.setTransform(240.5,175.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#7AB86C").s().p("AACgaIAAA1QgJgbAJgag");
	this.shape_144.setTransform(240.2,-156.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#7BB96C").s().p("AAAgbQAKAdgKAaQgJgcAJgbg");
	this.shape_145.setTransform(240.4,-171);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#77BD6F").s().p("AgEAAIABghQAJAMgBAVIgBAiQgJgMABgWg");
	this.shape_146.setTransform(240.4,189.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#7CB96D").s().p("AgEADQABgOAGgTIACAiQAAARgFAKQgEgPAAgNg");
	this.shape_147.setTransform(240.4,-185.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#34A04D").s().p("AAAAFQgOgFgHAAQANgEAIgBQALAAALAFQgIAGgJAAIgFgBg");
	this.shape_148.setTransform(222.2,193.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#7DB96D").s().p("AAAgVIABgBIAAAsIgBACg");
	this.shape_149.setTransform(240.3,-199);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#76BC6E").s().p("AgEABIABgiQAJAMgBAVIgBAiQgJgMABgVg");
	this.shape_150.setTransform(240.4,203.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#8BB780").s().p("AgZgBIAzAAQgLADgOAAQgLAAgPgDg");
	this.shape_151.setTransform(215.6,-88.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#8AB780").s().p("AgXACIACgDIAtAAIAAADg");
	this.shape_152.setTransform(201.3,-89.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#8AB780").s().p("AgdAAQAPgEAOAAQALAAATAEQgRAFgNAAQgMAAgRgFg");
	this.shape_153.setTransform(201.4,90.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#8BB780").s().p("AgdAAQAcgIAfAIQgPAEgPAAQgKAAgTgEg");
	this.shape_154.setTransform(215.3,90.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#8CB782").s().p("AgdAAQAagIAhAIQgPAEgPAAQgOAAgPgEg");
	this.shape_155.setTransform(229.4,90.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#34A04D").s().p("AgDAFQgIgCgNgHIAxADQgNAGgLAAIgEAAg");
	this.shape_156.setTransform(222.6,-106);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#76BD6E").s().p("AgEAAQgBgVAJgMIABAhQABAWgJAMIgBgig");
	this.shape_157.setTransform(240.4,-106);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#76BD6E").s().p("AgEAAQgBgUAJgNIABAhQABAWgJAMIgBgig");
	this.shape_158.setTransform(240.4,133.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#8CB782").s().p("AADAFQgKgBgYgEQAZgDAJgBQAQAAANAEQgMAFgOAAIgDAAg");
	this.shape_159.setTransform(229,-149);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#76BC6E").s().p("AghgDIAhgBQAWgBAMAJIgiABIgDAAQgTAAgLgIg");
	this.shape_160.setTransform(255.4,-149);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#76BC6E").s().p("AAAAFIghgBQANgJAUABIAiABQgLAIgUAAIgDAAg");
	this.shape_161.setTransform(284.4,-149);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#76BC6E").s().p("AgEAAQgBgVAKgMIAAAhQABAWgJAMIgBgig");
	this.shape_162.setTransform(240.4,-120.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#76BC6E").s().p("AgEAAQgBgVAKgMIAAAhQABAWgJAMIgBgig");
	this.shape_163.setTransform(240.4,119.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#73BB6B").s().p("AgEgmQAVAmgVAng");
	this.shape_164.setTransform(240.5,-14.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#74BC70").s().p("AgCgBQABgIAEgVIAAA9QgHgRACgPg");
	this.shape_165.setTransform(180.3,-15.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#74BC70").s().p("AAAgeQAJAegJAfQgIghAIgcg");
	this.shape_166.setTransform(120.4,-15.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#98C27C").s().p("AgeADIAAgEIAwgDIAMAEIgMAFg");
	this.shape_167.setTransform(187.1,-89);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#73BB6B").s().p("AgmgEIBNAAQgUAJgTAAQgSAAgUgJg");
	this.shape_168.setTransform(269.9,-148.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#73BB6B").s().p("AgEgmQAVAmgVAng");
	this.shape_169.setTransform(240.5,-134.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#73BB6B").s().p("AgEgmQAVAmgVAng");
	this.shape_170.setTransform(240.5,-74.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#98C27C").s().p("AgeADIAAgEIAwgDIAMAEIgMAFg");
	this.shape_171.setTransform(187.1,-149);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#73BB6B").s().p("AgEgmQAVAmgVAng");
	this.shape_172.setTransform(240.5,45.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#98C27C").s().p("AgeADIAAgEIAwgDIAMAEIgMAFg");
	this.shape_173.setTransform(187.1,150.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#75BD71").s().p("AACghIAABDQgJglAJgeg");
	this.shape_174.setTransform(180.2,13.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#75BD71").s().p("AgCgbQALAbgLAbg");
	this.shape_175.setTransform(120.6,12.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#98C27C").s().p("AgeADIAAgEIAwgDIAMAEIgMAFg");
	this.shape_176.setTransform(187.1,90.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#73BB6B").s().p("AgEgmQAVAmgVAng");
	this.shape_177.setTransform(240.5,105.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#98C27C").s().p("AgDAFQgRgBgNgFIA3gDIAMAEIgMAFIgZAAg");
	this.shape_178.setTransform(186.7,30.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#75BC71").s().p("AACghIAABDQgJglAJgeg");
	this.shape_179.setTransform(180.2,-0.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#75BC71").s().p("AgDAAQADgTAAgKQAJAfgJAcQgFgOACgQg");
	this.shape_180.setTransform(120.4,-1.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#78BD6F").s().p("AAFgwIAABhQgVgwAVgxg");
	this.shape_181.setTransform(240.3,-90.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#78BD6F").s().p("AAFgwIAABhQgVgwAVgxg");
	this.shape_182.setTransform(240.3,29.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E9EFE9").s().p("AgcAQQgKgNAGgPQAFgQAPgEQAFgCAWAAQAXAdgEALQgDANgiAQQgTgLgGgIg");
	this.shape_183.setTransform(189.4,108.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#EAEFE9").s().p("AgcAQQgJgNAFgPQAFgQAPgEIAbgDQAXAegEAMQgEANghAQQgSgKgHgKg");
	this.shape_184.setTransform(189.4,-139.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#E4EDE3").s().p("AgjADQALgtAjAJQAVAFADASQACAJgEAXQgSANgOAAQgVAAgPggg");
	this.shape_185.setTransform(163.5,-21.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#EFC5C4").s().p("AgcAQQgJgNAFgQQAHgTASgCQAIgBAXADQAgA0g8APQgRgKgHgJg");
	this.shape_186.setTransform(189.4,-196.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#E7EEE5").s().p("AgMAiQgPgEgFgRQgFgQAJgNQAHgKASgJQAiAQADANQAEALgXAfIgbgCg");
	this.shape_187.setTransform(189.4,133);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#E7EFE7").s().p("AgMAhQgQgFgEgOQgDgIAAgTQAegYAMADQANAEAQAjQgKARgJAHQgIAGgJAAQgFAAgHgCg");
	this.shape_188.setTransform(100.4,23.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E7EEE5").s().p("AgIAjQgSgCgGgUQgKgcAngTQA7AOghA0QgSADgIAAIgFAAg");
	this.shape_189.setTransform(189.4,-44);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#E9EFE9").s().p("AgFAkQgRgCgIgQQgIgSAJgNQAHgLATgLQA7APggA0QgWAEgGAAIgBAAg");
	this.shape_190.setTransform(189.4,61);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#EFC5C4").s().p("AgiAAQAAgNAggWQAmAFgBAgQgBARgLAJQgJAHgQACQgggYAAgNg");
	this.shape_191.setTransform(189.3,70.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#E4EDE3").s().p("AgjgCQAfg8AoAyQAAAUgDAJQgGAPgSADIgIAAQgbAAgJglg");
	this.shape_192.setTransform(163.5,23.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#EBC4C1").s().p("AgPAhQgQgFgCgTQgGgjArgIQA5AegvAnIgdgCg");
	this.shape_193.setTransform(189.5,81);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#E9C4BF").s().p("AgPAdQgKgHgKgRQAQgjAOgEQALgDAeAYQgBAVgCAGQgEAPgQAEQgGACgGAAQgIAAgIgGg");
	this.shape_194.setTransform(132.4,23.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#E6EEE5").s().p("AgjANQAAgSADgIQAEgPAQgFQAQgFANAJQAJAHAKARQgOAkgPAEIgEABQgNAAgZgXg");
	this.shape_195.setTransform(100.4,-21.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#EAC5C0").s().p("AgjACQAJgoAgAEQAUACAGAPQAEAJAAAUQgUAXgQAAQgTABgQgig");
	this.shape_196.setTransform(132.4,-21.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#7EBB52").s().p("Ai5EEQgugBgSgRQgTgSAAgsIAAlmQAAgsASgSQASgSAugBIF0AAQAuABASARQATASAAAsQABCzgBCzQAAAsgSASQgSASguABg");
	this.shape_197.setTransform(269.9,-179.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#74B750").s().p("AgcgDIA5AAQgPAHgOAAQgOAAgOgHg");
	this.shape_198.setTransform(-229,-28.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#74B750").s().p("AgcgDIA5AAQgPAHgOAAQgNAAgPgHg");
	this.shape_199.setTransform(-215,-28.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#74B750").s().p("AgcgDIA5AAQgPAHgOAAQgNAAgPgHg");
	this.shape_200.setTransform(-201,-28.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#9BCB77").s().p("AgEAdIABg4IAHgBIABA5g");
	this.shape_201.setTransform(120.4,27.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#74B750").s().p("AgcgDIA5AAQgQAHgNAAQgOAAgOgHg");
	this.shape_202.setTransform(-130,-28.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#74B850").s().p("AgcgDIA5AAQgPAHgOAAQgNAAgPgHg");
	this.shape_203.setTransform(172.9,-28.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#74B750").s().p("AgcgDIA5AAQgPAHgOAAQgNAAgPgHg");
	this.shape_204.setTransform(158.9,-28.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#74B750").s().p("AgcgDIA5AAQgPAHgOAAQgNAAgPgHg");
	this.shape_205.setTransform(144.9,-28.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#74B750").s().p("AgcgDIA5AAQgPAHgOAAQgOAAgOgHg");
	this.shape_206.setTransform(130.9,-28.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#9BCB77").s().p("AgDgdIAHAAIABA5IgIACg");
	this.shape_207.setTransform(-239.5,27.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#74B750").s().p("AgcgDIA4AAIABAGIgdABIgBAAQgRAAgKgHg");
	this.shape_208.setTransform(110,-28.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#9BCB77").s().p("AgEAfIAAg5QAEgJAFAJIAAA5g");
	this.shape_209.setTransform(-179.5,27.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#A3CE82").s().p("AAAAHQgHgCgWgMIA7AAQgLAPgOAAIgFgBg");
	this.shape_210.setTransform(-180,-28.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#9BCA77").s().p("AgfADIgCgMIBEACQgJAHgYAAQgVAAgKAKIAAAAIgCgHg");
	this.shape_211.setTransform(-236.5,-28.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#9BCA77").s().p("AACAGQgtgGgYABQgFgBACgCQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAAAAAICLAAQgXALgiAAIgMAAg");
	this.shape_212.setTransform(119.7,-28.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#7FBB52").s().p("AklAmQgMgbALgdIBPgBQAzAZAWgtIALAMQAHAHAEgBQAkAABIAEQA/ABArgMQApAoAggzQAMAUAXABQANAAAbgBQARABAkAAQALAcgLAdIgBAAg");
	this.shape_213.setTransform(150.4,26.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#7FBB52").s().p("AklAnQgMgbALgeIBPAAQAzAZAWgtIALAMQAHAGAEAAQAkAABIADQA/ABArgLQApAoAggzQAWAYAogCQA6gEAHACQAMAbgMAeg");
	this.shape_214.setTransform(-209.5,26.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#7EBB52").s().p("ADzAoQhtgCibgBIkLAAQgYgdAYgcIEwABQAUAAAJgDQAPgEAIgNQAYAtAwgaICeAAQAIAhgMAOQgMANgiAAIgFAAg");
	this.shape_215.setTransform(-150,26.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#7EBB52").s().p("AkxAOQAHgegEgNQARALAYAAIApgBQBNABCZgBQAUABAJgDQAPgFAIgNQAYAuAwgaICgABQAXAcgXAcIowABIgBABQgmAAAAgag");
	this.shape_216.setTransform(90.5,26.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#7FBB52").s().p("AhuAKQgJgDggAXQgsgMhAABQhIAEgkgBQgFAAgGAHIgMALQgag0guAqQgYgMgiAAIg6ADQgnADgOgNQgRgMAHglQgFgDABgEIAEgDIBaAAIAAAAQAPAHAUgBQAMAAAXgEIALAAQAaAIAggIIBSAAQAbAHAfgHIBSAAQAbAHAfgHICVAAQAmALAWgLIG5AAQAYAHAigHQA8gBAGAFQAFAGgCA4IidAAQgwgagZAuQgIgMgMgFQgKgDgRAAQkjABhngCQgUAAgNAHQgNAHgJAQQgUglgJgCg");
	this.shape_217.setTransform(-184.8,-24.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#50AA45").s().p("AEHEsQgsgBjbAAIkHABQgTAAgIgGQgIgIAAgTQABkYgBj3QAAgXAIgIQAJgIAWAAQEEACEFgCQAWAAAIAHQAHAHAAAWQgCEHACEIQAAAVgGAIQgIAHgTAAIgDAAg");
	this.shape_218.setTransform(-30,0.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#50A945").s().p("AEHEnQgtgBjeAAIkEABQgTAAgIgHQgHgHAAgUQABjygCkSQAAgXAJgIQAJgIAXAAQEDACEGgCQAWAAAHAHQAIAIAAAVQgCECACEDQAAAVgIAIQgHAHgTAAIgDAAg");
	this.shape_219.setTransform(-150,-119);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#50A945").s().p("AkDEsQgXAAgIgIQgIgIAAgXQABkcgCjkQgBgcALgKQAKgKAcAAQD1ADELgCQAXgBAIAJQAIAIAAAXQgBAsAADXQAADbABAsQAAAWgIAHQgHAIgWAAQkGgCkEACg");
	this.shape_220.setTransform(-150,120.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#50A945").s().p("AkDEsQgXAAgIgJQgIgIAAgXQABjWgCkqQAAgZAHgKQAKgMAaAAQD3ADEOgCQAXgBAJAJQAHAJAAAXQgCBYABCuQAADZABArQAAAVgIAIQgIAHgVAAQkGgCkEACg");
	this.shape_221.setTransform(90,-119.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#50A945").s().p("AkDEsQgXAAgIgIQgIgIAAgXQABkcgCjkQgBgcALgKQAKgKAcAAQD1ADELgCQAXgBAIAJQAIAIAAAXQgCBXABCsQAADcABAsQAAAVgIAHQgHAIgWAAQkGgCkEACg");
	this.shape_222.setTransform(89.9,120.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#78BD6F").s().p("AgXAFQAIgJAPABIAYAAIAAAIg");
	this.shape_223.setTransform(297.4,-149);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#78BD6F").s().p("AgTAAQAHgEAMAAIAUABIAAAIIgUAAIgBAAQgLAAgHgFg");
	this.shape_224.setTransform(297.8,90.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#78BD6F").s().p("AgTAAQAHgEAMAAIAUAAIAAAIIgUABQgMAAgHgFg");
	this.shape_225.setTransform(297.8,-29);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#97C655").s().p("AiGA8IAAgyQAWgeAygNQBKgUAGgDQAdgNArAhQAsAhAAAgQABATgNAHQgJAFgUAAIjjAAg");
	this.shape_226.setTransform(-286.5,122.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#7FBB52").s().p("Ag7JYIAByJQAAgXAGgHQAHgKAVADQAYACAxgBQgMAvABBIQADBpgBAOQgBAWAAAHQACARAIALQglAlAbAlIABA7QgfAsAzAcQgWAQAAAfIABAyQgHAEgKABQAKABAHADQABAIgCA5QAAAnALAZQgoAjAfAmIgBCyQAAATABAGQADAOAGAJQgnAmAeAkIgBBZg");
	this.shape_227.setTransform(-54,150.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#7FBB52").s().p("AgtJOQgMgMAAhLIgCxNIBiAAQACAPgDAgQABAcAVAOQgxAYAcAvIAAG2QgHAEgKABQAKABAHAEQABAIgCA5QAAAnALAYQgoAjAfAmIgBCzQAAASABAGQADAOAGAJQgnAnAeAjIAABYIgfAAQgsAAgKgJg");
	this.shape_228.setTransform(-54,-149.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#7EBB52").s().p("AgJJXIgdgBIAAjCQAAgVgBgGQgCgPgHgLQAsgkgsgmQAWgvgWgxQAYgegCgJQgBgJgfgXQANgKAFgQQACgLAAgVIAAlAQAegqgygeQAMgIAFgPQADgKAAgTIAAjPIBiAAIAARnQAAA2gJAJQgJAJguAAIgFgBg");
	this.shape_229.setTransform(-6,-149.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#7EBB52").s().p("AggJaIAAjFQAAgUgBgGQgCgPgHgLQArgkgrglQAXgwgXgxQAZgdgCgJQgBgJgfgYQAUgTAAgcQgChsACikQAAgRgEgKQgFgMgMgIQAzgegfgqIgBhoQAAg+ACgrQABgagIgNQgKgPgXgFQAWAAAwgHQAogDASAQQARAPgCAoQgBAXgFAuIAAQqg");
	this.shape_230.setTransform(-6.7,150.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#7FBB52").s().p("Ag5OiIAB5/IgCiGIgBgHQgBgUABgIQACgPAJgKQAPAAAFgBQBHgMgMBIQgHAFgJABQAKABAGAEIAAEDQgRAaAJASQAIAPAdAKQgCAGgOAHQgNAFAAALQgYAlAYAlIAJAcQgpAqA0AeQgQAIgEARIAAAgQgGAFgLABQAKABAHAFIgBBfQgBAbAWAOQguAaAaAuIAACpQgdAuAxAaQgTAMgCAYQgBAOACAbIAAA8QgGAFgLABQAKABAHAFIAAJNg");
	this.shape_231.setTransform(185.8,117.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#7EBB52").s().p("AgdN8QACgoAAgUQgBgjgdgQQA6gTgegyIAAmaQgFgDABgEQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIAAnLQAYgwgsgYQAQgIAEgRIAAggQgFgDABgEQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIAAmuQARgagJgSQgJgPgcgLQAagPADgfQgBgkABgSIBYAAIAAcGQgWAPgWAAQgVAAgXgPg");
	this.shape_232.setTransform(-246,-118.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#7EBB52").s().p("AgjOhIAApOQgFgDABgEQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIAAhcQACghgWgMQAwgcgcgtIAAipQAcgyg5gSQAVgJAGgUQADgLgBgcIAAhJQgFgDABgEQABgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAIgBggQgDgRgQgJQA2gegsgqIAKgcQATgmgTgkQAAgLgMgFQgPgHgCgFQAcgLAIgPQAKgSgRgaIAAkDQgFgEABgDQABgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQACgzAFgEQAIgGBJABQAXAdgWAgIgBcEg");
	this.shape_233.setTransform(-245.4,117.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#7EBB52").s().p("AjLEJIAAoQIEpAAQBBAAAXAWQAXAXgBA/IAAFDQABA1gWAVQgWAXg0AAg");
	this.shape_234.setTransform(-279.5,-60.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#7FBB52").s().p("AF8OOQgJgDggAXQgsgMhAABQhIAEgkgBQgFAAgGAHIgMALQgag2guAsQgigMg3ABIhcABQgNgBgTABIghAAQgwgcgZAwQgIgOgPgEQgJgCgUAAIk6AAQgCg0AIgJQAIgJA1AAIGSACQALAEATAAIAegBQAXAAAvACQApABAagGIALAAQAaAIAggIIBSAAQAbAHAfgHIBSAAQAbAHAfgHIBSAAQAfAHAbgHQAYACAJgIQAKgJAAgaIgB1QIgBmPIBaAAQADASgEAlQACAfAcAPQgdAKgIAPQgJARARAbIABGtQgHAFgLABQAKABAIAFIAAAfQADARAQAIQgwAeAcArIABHJQgHAFgLABQAKABAIAFIgBGZQggAzA9ARQgdARgBAjQgBAUABAoQgHAFgLAAQALAAAHAFQAHAjgNAPQgOAPgkgEQgTgCgjABQglABgSgCQgTgCgNAJQgMAHgKAQQgUglgJgCg");
	this.shape_235.setTransform(125.9,-114.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#51AA4C").s().p("AjHJXQgNgRgBgWQgBgNAFgbQAVgbAEgRQAEgYgYgWQgLgtAAg7QAAgYAFhQQAWgbAFgPQAJgYgcgWQgLgYAAgkQABgogBgUIAAgPQAAgiABgQQABgeAQgSQAYgUgKgVIgagjQgIgYAIgZQAwgogvguQgKg1ABhJIADh+QAAgaAWgKIFdABQA4gEgBA8IAABjQABA8gFAmQgFAOgWAbQgNAYAbAWQAFAFABADQAcDIgfCZQgpAoApAkQAYAwgYAxQgZAUAGAXQADANAVAbQALBTAAAlQABBCgSA1g");
	this.shape_236.setTransform(-30,150.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#51AA4C").s().p("AjHJXQgNgQgBgWQAAgNAEgcQAWgYAEgTQAEgXgZgWQgLgtAAg7QAAgZAFhQQAYgkACgGQAIgYgbgWQgKgZgBglQACgqgBgWIgBgPIgBjPQgBh6AEhUQAEgSAPgPQAbgbgcgbQgjgwAegsIGOAAQAQATgCAcIACBqQACA/gTApQgbAVALAZQAHAOAUAbQAGBEAABeIgDCfQAAAUgLASQgqApApAjQAYAxgYAwQgYAUAFAXQADAOAVAaQALBSAAAmQABBCgSA0g");
	this.shape_237.setTransform(-30,-149.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#50A945").s().p("AEIcIIoygBIAJgeQgGgLACgYQABgXgGgLIgBgkQACgVAIgOQgGgLACgYQABgXgGgLIAAhHQAMgjgMgjIAAhGQAMgjgMgjIAAhGQAGgLgBgYQgCgYAGgLQgIgOgCgUIABglQAGgLgBgXQgCgYAGgLQgIgOgBgVIAAgkQAGgLgBgXQgCgYAHgLQgJgOgBgVIAAgkQAMgngMgnQgEgTAHggQAHgkgBgPQgLgjALgiQgIgOgCgUIABglQAGgLgBgXQgCgYAGgLQgIgOgBgVIAAgkQAGgLgBgXQgCgYAHgLQgJgOgBgVIAAgkQAMgngMgnIAAgkQABgVAIgOQgLgvALgyQgIgOgCgVIABgkQAGgLgBgYQgCgYAGgKQgIgOgBgVIAAgkQAGgLgBgYQgCgYAHgLQgJgOgBgUIAAgkQAMgngMgoQgEgSAHggQAHgkgBgPQgLgkALghQgIgOgCgVIABgkQAGgLgBgYQgCgYAGgKQgIgOgBgVIAAgkQAGgLgBgYQgCgYAHgLQgJgOgBgUIAAgkQAMgngMgoIAAgkQABgVAIgOQgLgxALgyQgIgOgCgVIABgkQAGgLgBgYQgCgYAGgKQgIgOgBgVIAAgkQAGgLgBgYQgCgYAHgLQgJgOgBgUIAAgkQAMgngMgoQgBhNATgRQATgRBTABQALAGAYgBQAYgCALAGQAOgIAUgBIAkAAQAmAMAngMIAkAAQAVABAOAIQAKgGAYACQAYABALgGIAkgBQAUACAPAIQAZgLAZALIAASmQgHAEgKABQAKABAHAEIAASkQgHAEgKABQAKABAHAEIAASDQAAAXgGAGQgHAHgUAAIgDAAg");
	this.shape_238.setTransform(269.9,30.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#51AA4C").s().p("EgN8AguQgGgFAAgTIABsWQALgLASgCQALgBAVAAIBOAAIBNgBQAWgBAHgIQAGgKgNgWQgWgkgUgGQgRgFgwAIQgYAFgqARQgrASgWAFIAA4gQANgLASgDQAJgBAaAAIB2AAQBIAAAtgBQA1AAAUgUQATgUABg2QACi9gCh+QgBgwgTgTQgTgUgxgCQgvgChJABIh4AAQgeAAgFgBQgTgDgMgLIgByjQAAgbAGgIQAJgKAbABQBhACCJgBIDqAAQAiA2guAyQgRAWARAXQAXAfACAGQAJD2gLCcQgEANgMADQgHACgRgBQAAAAgBAAQgBABAAAAQAAABAAABQAAAAABABQAEAEgDgGQABAAAAgBQAAAAABAAQAAAAABgBQABAAABAAIAOAAQAIABAGADQATAhgeAfQgcAaAaAZQASASAEAPQAFBWgBB2IgCDMQAAAPgHAOQgHAKgMABIgTgBQACACAQAAQANAAAGAJQAKARgBAkIABCoQAABlgEBCQAAAHgYAdQgSAVAQAXQAYAUADAeQABARgFAoQgDAIgGAEIgPADIgEAAIAIABQANAAAFAJQAFAXAOAJQAOAKAYAAIA6gCQAgABAXAMQAUAVAPADQAUAEASgXQA0gVBAABQAoAABLANIAkAXQAUAJAUgVQALgNATgFQAMgEAWAAQClgBDQABQArABASAPQAWAcAXgLQAagUANgIIBKgHQArAAAeARIAAHUQgdARgrgBIhKgFQgagUgNgIQgXgNgWAcQgSAQgYAAIiYACQhZABg/gHQgPgLgMAJQgzAHgOAAQgjAAgagUQgUgYgUAJIgkAZQhOAMglAAQhAABgzgUQgUgbgVAKQgNAGgYAVQgOAFgUABIgjAAIgQAAQglgDgRAGQgaAJgFAjQgGAEgKAAIgSAAIAVABQAMABAFAKQAKA0gBBCIgEB2QgCAJgWAaQgSAUAMAWQAFAGAMALQAJAKgEAMQgZATgBAPQgEATAdAQQAHAPgMASQgSAUgDAMQgEASAVARQAcAegTAhQgHADgIABQAKABAIAHQALAygBAWQgBAogaAcQgUAWARAVQAXAfABAEQAKBMgKBHQgEANgXAYQgOAXAbAWQATAeAAAlQABAdgLApQgGAGgLABIgYABIAbABQANACAFALQAFANABARIABAdIgBHCQAAAeAAAHQgDAVgNAOInfAAQgTAAgGgGgAmmOMQADAGAAgGIABgBQAGgCAFAAIgMgBIgBAAQgBAAAAAAQgBAAAAABQAAAAAAABQAAABAAABg");
	this.shape_239.setTransform(-210.1,0.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#51AA4C").s().p("EABYAg0QgPgSAAgdIgBkBQgBiVADhsIADgOQAAgCAKgNQAHgIgNgIQgJgxAAgUQABgmATgcQAbgVgOgXQgWgXgFgNQgKhCAJhRQAEgPAOgNQAdgZgfgcQgTgbgBglIAGhEIAJgKQAHgGgNgHQgOgiAcgZQAUgRgFgRQgDgLgSgUQgMgSAHgPQAcgQgEgTQgCgNgXgWQgEgMAJgKIAQgRQANgWgRgTQgXgbgBgHQgKh+AKhqQgBgDAKgJQAJgHgNgHQgEgggWgJQgPgGgiAEIgNAAIhAABQgmgBgXgTQgTgXgVAIIgkAZQhOAMgmAAQhBABgygVQgVgbgWALQgYAUgMAHQgPAFgVABIgkAAIgRAAIhHABQgrAAgdgFQgagUgNgHQgXgMgWAcQgPANgRAAQh0AHi1gGQgagBgJgWIgBnKQAJgJAPgEQAIgCASAAQCtgBBWABQAkAAAUAQQAVAcAXgKQAOgGAagXQBRgGAjAAQBBgBAyAMQAbAWAKAEQAVAHAUgYQAOgNAUgEQANgCAXABQAcABA2gCQAxgBAgALQALAGAWASQAUAKAUgRQAKgPARgGQAMgEAVgBIBmAAQAXAAALgJQAMgKAAgXIAAgQQgBgoABgUQACgiAZgTQASgWgRgWQgYgfgBgGQgGiIAAg5QAAhsAJhWQAUgEgHgIQgLgIgCgEQgHgRgBgYIABgqIgBiwQgBhrAFhFQACgKAHgKIAPgQQAWgXgZgYQgcgaAMgiQAMgIgHgJQgKgMAAgDQgJjPAJi+QABgGAYgfQARgWgSgWQgugsAig9IQwgBQAXAAAIAHQAIAHAAAYIgBEZIAAEaQgJAJgPADIgbAEIgjgCQgVgBgOABQgngCgfAFQgwgEgYABIhJAAQgPgBgVACIgkACQgcgFgpABIgKABQhEAAgQAPQgPAQAABGIAABIQgBAXAEAwQgFAgACAnQgBAXAEAvQgFAcACAqQgBAYAEAuQgHAxAHA1IgCAkQgCAVABAPIAABJQAAAkADAkQgEAVAAAyQAAAPAEA3QgEAUAAAyIAEBFQgHAtAKAgQACAQgFAgQgEAhABAPIAABLQgBAYAEAwQgFAgACAlQgBAXAEAvQgFAcACAqQgBAYAEAuQgHAxAHA1IgCAkQgCAVABAPIAABJQAAAkADAkQgEAUAAAyQAAAQAEA3QgEAUAAAxIAEBGQgHAsAKAgQACARgFAgQgEAgABAQIAABKQgBAYAEAxQgFAfACAnQgBAYAEAvQgFAbACArQgBAYAEAvQgFAaACAvIAABDQgBAlACAgIAABGQgCAXABAuIAABEQgCAuAFAaIgCAjQgCAWABANQgCArAEAZQABAQgRASg");
	this.shape_240.setTransform(180,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-209.6,600,420);


(lib.goal_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A9CC45").s().p("Aj7AUQgGAAgFgGQgFgGAAgIQAAgHAFgGQAFgGAGAAIH2AAQAIAAAEAGQAEAGABAHQgBAIgEAGQgEAGgIAAg");
	this.shape.setTransform(0,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9CC45").s().p("AiGAcQAagbAjgNQAjgPAmAAQBPABA4A2g");
	this.shape_1.setTransform(0.7,18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A22027").s().p("AgdAIIAAgQIA7AAIAAAQg");
	this.shape_2.setTransform(-0.5,5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1463B").s().p("AgkALQgQgOAAgWIBpAAQAAAWgPAOQgQAPgWAAQgVAAgPgPg");
	this.shape_3.setTransform(-0.5,-7.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A22027").s().p("AgvAOQgUgSAAgdICHAAQAAAdgUASQgUAUgcAAQgbAAgUgUg");
	this.shape_4.setTransform(-0.5,-7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1463B").s().p("AgKA9IAAh5IAVAAIAAB5g");
	this.shape_5.setTransform(-0.5,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A22027").s().p("AgHAIQgDgEAAgEQAAgEADgDQAEgDADAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgDAAgEgDg");
	this.shape_6.setTransform(13.5,-13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPgIIAMAFQAMADAHgFQAAAMgJACQgPgDgHgOg");
	this.shape_7.setTransform(28.4,-13.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9999C8").s().p("AgHAAQAAgCADgCQACgDACAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_8.setTransform(21.4,-18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAJQgDgEgBgFQABgEADgEQAEgEAEAAQAFAAADAEQAFAEAAAEQAAAFgFAEQgDAEgFAAQgEAAgEgEg");
	this.shape_9.setTransform(20.9,-18.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC863F").s().p("AhjA7IBQhJIAPAOIBWhGIAPAPIgEACQAJAVgEAWQgEAVgSALQgTALgcABQgdABgMgOIhLAxg");
	this.shape_10.setTransform(-17.6,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC863F").s().p("ABIBPIisiBIAwglICZChIgOAOg");
	this.shape_11.setTransform(15.8,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC863F").s().p("AhfApQgogaAAgiQAAgTALgOQAMgOAQAAIDBAAQAQAAAMAOQALAOAAATQAAAignAaQgoAag5AAQg3AAgogag");
	this.shape_12.setTransform(1.6,-3.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC863F").s().p("AgKgeQAKAAAEAJQAHAKAAALQAAANgHAJQgEAJgKAAg");
	this.shape_13.setTransform(19.6,-22.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC863F").s().p("AAEAhQgXgCgMgQQgJgMAPgLQAWgWABgCIAlA3QgGAKgSAAIgHAAg");
	this.shape_14.setTransform(20.3,-16.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC863F").s().p("AhXAnICHiKIAoAzIhbCUg");
	this.shape_15.setTransform(14.8,-13.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC863F").s().p("AgGAVQgJgEgDgKQgEgHADgJQADgIAIgEQAIgDAHAEQAIAEAEAKQAEAHgDAJQgEAJgIADIgGABQgDAAgFgCg");
	this.shape_16.setTransform(27.9,-14.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC863F").s().p("AhMAjIA7hXIBeBNIgeAcg");
	this.shape_17.setTransform(21.4,-18.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D1463B").s().p("AgtgRQAthFBOASIgOAZIiNBzQAAgrAggug");
	this.shape_18.setTransform(14.3,-17.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A56837").s().p("AhNBUIA0hkIAPAPIA/heIAPAPIgDAEQALAWACAbQACAcgNAPQgNAQgbADQgbAEgMgPIg1BIg");
	this.shape_19.setTransform(-14.5,3.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A56837").s().p("AAtBdIh1i1IA5gSIBYDNIgSAIg");
	this.shape_20.setTransform(12.3,2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D1463B").s().p("AhYAuIgbgbQAPANAUAAQAVAAAOgOIABAAIA+g+QAOgPAVAAQAVAAAPAPIAbAbQgPgOgUAAQgVAAgOAPIg+A+QgPAOgVAAQgVAAgPgOg");
	this.shape_21.setTransform(-18.3,-6.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A5AAB9").s().p("AAwAVIhkgSQgFgBgDgCQgCgEAAgGQABgFAEgDQAFgCAFAAIBjASQAGABACACQADAFgBAFQAAAFgFADQgDACgDAAIgDAAg");
	this.shape_22.setTransform(1.4,13.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#676C7E").s().p("Ag5ATQgEgDgBgFQAAgFACgFQADgCAFgBIBkgSQAFAAAEACQAFADAAAFQABAGgDAEQgCACgGABIhjASIgDAAQgDAAgEgCg");
	this.shape_23.setTransform(1.4,15.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A5AAB9").s().p("AAwAVIhkgSQgFgBgDgDQgCgEAAgFQABgFAEgDQAFgDAFABIBjASQAFABADACQADAEgBAFQAAAFgFAEQgDACgDAAIgDAAg");
	this.shape_24.setTransform(1.4,10.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#676C7E").s().p("Ag5ATQgEgDgBgGQAAgFACgEQADgCAFgBIBkgSQAFgBAEADQAFADAAAFQABAFgDAFQgCACgGABIhjASIgDAAQgDAAgEgCg");
	this.shape_25.setTransform(1.4,12);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A5AAB9").s().p("AAwAVIhkgSQgFgBgDgCQgCgEAAgGQABgFAEgDQAFgCAFAAIBjASQAGABACACQADAFgBAFQAAAFgFADQgDACgDAAIgDAAg");
	this.shape_26.setTransform(1.4,6.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#676C7E").s().p("Ag5ATQgEgDgBgFQAAgFACgEQADgDAFgBIBkgSQAFAAAEADQAFADAAAFQABAFgDAEQgDACgFABIhjASIgDAAQgDAAgEgCg");
	this.shape_27.setTransform(1.4,8.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A5AAB9").s().p("AAwAVIhkgSQgFgBgDgCQgCgEAAgGQABgFAEgDQAFgCAFAAIBjASQAGABACACQADAFgBAFQAAAFgFADQgDACgDAAIgDAAg");
	this.shape_28.setTransform(1.4,3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#676C7E").s().p("Ag5ATQgEgDgBgFQAAgFACgFQADgCAFgBIBkgSQAFAAAEACQAFADAAAFQABAGgDAEQgCACgGABIhjASIgDAAQgDAAgEgCg");
	this.shape_29.setTransform(1.4,4.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#142616").s().p("Aj+EEQgPAAgKgMQgKgLAAgRQAAgRAKgMQAKgMAPAAICrAAIAOgGQACgEACgCQgEgFgCgHIAAgCIAAgEIAAgEIAAgCQADgIADgEQgEgFgCgHIAAgCIAAgIIAAgCQACgHAEgFIgCgEQgMALgSAGQgPAFgQAAQgOAAgNgFIgqA5QgGAHgIABIgCAAQgIAAgGgGIgMgMQgLgKAHgOIASgjIgeAUQgFAEgGAAQgIAAgGgGIgMgMQgGgGAAgJQAAgIAHgGIApgnQgWgEgQgQIgcgaIAcgcQAKAIAMAAQANAAAIgIIBAhBQAVgUAdAAQAcAAAVAUIADADIB6AAQAIgmASggQAjg+A6gLQACgGADgCQAGgGAIAAQARAAAMANIANACQAJADAFAJQAEAJgGAJIgCAEIBEA4IADAEQAGAGADAIQADAJAAAIIAAADQAAAZgTAIIgFADQgIADgHAAQgSAAgNgPIgHgBQgNAHgQAAIgFAAIgkA7IAAABIBlBpQAFAFABAJQAAAIgHAFIgNAOQgGAGgJAAQgEAAgGgDIgggWIANAdQADAIgDAHQgDAIgHADIgSAJIgIACQgKAAgGgIIgLgOIg3hVIgBACIAAACIAAABQgBAFgEAHIADAGIAAAAIACAHIABABIAAADIgBAEIAAADIAAAAQgBAFgEAHIADAGIAAABIADAIIAAACIgBAEIAAADIAAABQgBAFgEAGIADAGIAAABIADAIIAAADIgBAEIAAABIAAACIgCAFIABAAICdAAQAPAAALAMQAKAMAAARQAAARgKALQgLAMgPAAgAkJDNQgEAGgBAJQABAIAEAGQAEAGAHAAIH3AAQAGAAAFgGQAFgGAAgIQAAgJgFgGQgFgGgGAAIihAAQgXgLgXgFIAVgEQAJgBABgJIAAAAIAAgEIAAAAIgBgCIAAgBQgCgGgHgBIgggGIAggGQAJgBABgJIAAAAIAAgEIAAAAIgBgDQgCgGgHgBIgggGIAggGQAJgBABgJIAAAAIAAgEIAAgBIgBgCQgCgGgHgCIgggFIAggGQAJgCABgIIAAAAIAAgFIAAAAIgBgCIAAAAQgCgHgHgBIgDgBQASgEAUgJIBDBlIALAOIARgJIgrhiIBMA5IAPAJIAPgOIhshwIACgNIAthLQAHACAIAAQAQAAAHgIIAYAEQAIANAMAAIAHgBIAEgDQAIgDAAgNIAAAAQAAgGgBgGQgCgFgGgFIABAAIhRhCIALgTIgUgDQgGgMgLAAIAAAMQg8ADgjA+QgaAtAAAjIiPAAIgEAAIgJgIQgOgPgVAAQgVAAgOAPIhBBAIAAAAQgOAOgVAAQgUAAgOgNIAbAZQAPAPAUAAQAUAAAQgPIBAg+QAOgPAVAAIADAAQgWANAAAdIACAOIg/AxIgPgPIhQBLIAMAMIBLgyQACADAHAEIgrBUIAMAMIA1hIQALAMAVAAQAOAAAOgFQAOgGAHgJQAMgNAAgbIAQAHQgBAEAEAEQADAEAEABIAXAEIAAADIgXAEQgJACgBAIIAAAFQABAIAJACIAgAGIggAFQgIACgCAJIAAAEQACAJAIABIAgAGIggAGQgJABgBAJIAAAEQABAJAJABIAgAGIggAGQgFABgDAEQgCAEAAAFIAAABQgNAEgPAHIivAAQgHAAgEAGg");
	this.shape_30.setTransform(0,-2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#939597").s().p("Ai+AtQhPgTAAgaQAAgZBPgUQBQgSBugBQBwABBOASQBPAUAAAZQAAAahPATQhPAUhvgBQhuABhQgUg");
	this.shape_31.setTransform(0,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-28.1,63.4,57.1);


(lib.goal_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#162618").s().p("AB+DDQgbgUgJgdIgNgtQgFgUgEgFQgFgFgNAAIhjAAQgNAAgEAGQgFAFgGAWIgMAqQgJAdgbAUQgbAVgeAAQggAAgXgXQgWgXAAghIAAjhQAAg1AlglQAlglA0AAIELAAQA0AAAlAlQAlAlAAA1IAADhQAAAhgWAXQgXAXggAAQgeAAgbgVgAAyAzQAaAAAKAQQADAFALAjIAKAhQAGAXAWAQQAWARAXAAQAYAAARgRQAQgSAAgYIAAjhQAAgsgfgfQgfgggsAAIkLAAQgsAAgfAgQgfAfAAAsIAADhQAAAYAQASQARARAYAAQAXAAAWgRQAWgQAGgXIAKghQAKghAFgHQALgQAYAAg");
	this.shape.setTransform(0,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB3938").s().p("AgYAZQgLgLAAgOQAAgNALgLQALgKANAAQAPAAAKAKQALALAAANQAAAOgLALQgKALgPAAQgNAAgLgLg");
	this.shape_1.setTransform(5.3,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF655E").s().p("AgYAZQgLgLAAgOQAAgNALgLQALgKANAAQAOAAALAKQALALAAANQAAAOgLALQgLALgOAAQgNAAgLgLg");
	this.shape_2.setTransform(-5.5,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7FB148").s().p("AgLA4QgGgGAAgIIAAgZIgZAAQgHAAgFgEQgGgGAAgHQAAgGAGgFQAFgGAHAAIAZAAIAAgYQAAgIAGgFQAFgGAGABQAHgBAGAGQAEAFAAAIIAAAYIAZAAQAHAAAGAGQAFAFABAGQgBAHgFAGQgGAEgHAAIgZAAIAAAZQAAAIgEAGQgGAEgHAAQgGAAgFgEg");
	this.shape_3.setTransform(-12,-7.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9AC31").s().p("AgOAPQgGgHAAgIQAAgHAGgHQAGgGAIgBQAIABAHAGQAGAHAAAHQAAAIgGAHQgHAGgIABQgIgBgGgGg");
	this.shape_4.setTransform(7.5,-7.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9AC31").s().p("AgOAPQgGgHAAgIQAAgHAGgHQAGgGAIgBQAIABAHAGQAGAHAAAHQAAAIgGAHQgHAGgIABQgIgBgGgGg");
	this.shape_5.setTransform(16.7,-7.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9AC31").s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgGAIAAQAIAAAHAGQAGAGAAAIQAAAIgGAHQgHAGgIAAQgIAAgGgGg");
	this.shape_6.setTransform(12.1,-2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9AC31").s().p("AgOAPQgGgGAAgJQAAgHAGgHQAGgGAIAAQAIAAAHAGQAGAHAAAHQAAAJgGAGQgHAGgIAAQgIAAgGgGg");
	this.shape_7.setTransform(12.1,-11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#324259").s().p("Ag9A+QgagaAAgkQAAgjAagaQAagaAjAAQAkAAAaAaQAaAaAAAjQAAAkgaAaQgaAagkAAQgjAAgagag");
	this.shape_8.setTransform(12.1,-7.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4E607D").s().p("Ag9A+QgagaAAgkQAAgjAagaQAagaAjAAQAlAAAZAaQAaAaAAAjQAAAkgaAaQgZAaglAAQgjAAgagag");
	this.shape_9.setTransform(-12,-7.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#637793").s().p("AhmCzQgRgSAAgYIAAjhQAAgsAggfQAfggAsAAICEAAIAAD2IgyAAQgZAAgLAQQgEAHgKAhIgKAhQgHAXgUAQQgVARgYAAQgXAAgRgRg");
	this.shape_10.setTransform(-12,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4E607D").s().p("AASCzQgUgQgHgXIgKghQgKgjgDgFQgLgQgZAAIgzAAIAAj2ICFAAQArAAAfAgQAgAfAAAsIAADhQAAAYgQASQgRARgYAAQgYAAgVgRg");
	this.shape_11.setTransform(12.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-21.1,52.2,43.3);


(lib.goal_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#162618").s().p("AilE8QgRAAgMgMQgMgLAAgRQAAgRAMgLQAMgNARAAIATAAIAKgoIgcAAQgYAAgSgRQgRgRAAgZIAAgaQAAgOAGgKQgKgSgHgXQgWgCgPgRQgOgQAAgUIAAgbQAAgWAOgQQAOgQAVgDQAIgbAMgXQgFgLAAgOIAAgaQAAgZARgQQARgRAYAAIAYAAQAPgBANAIQAWgMAYgGQADgXAQgOQAQgPAXAAIAVAAQAXAAARAQQAQAPACAXQAYAHARAKQAOgKARABIAYAAQAYgBASASQARAQAAAZIAAAaQgBAPgHAPQAJAUAIAXQAVADAPAQQAOARAAAWIAAAbQAAAUgPARQgOAQgWACQgFAQgJAVQAKAPAAARIAAAbQgBAYgRARQgRASgYgBIgXAAIgCAAIALAmIASAAQAQAAAMANQAMALAAARQAAARgMALQgMAMgQAAgAi0EFQgGAHAAAIQAAAIAGAHQAGAFAJAAIFVAAQAIAAAGgFQAGgHAAgIQAAgIgGgHQgGgFgIAAIgiAAIgahbIADgCQAMAPASAAIAXAAQAQAAALgMQAMgLAAgQIAAgbQAAgSgPgMQAQgbAIgfIAIAAQAQAAALgLQALgLAAgOIAAgbQAAgQgLgLQgMgMgPAAIgIAAQgHgggTggQAMgMAAgQIAAgaQAAgQgLgMQgLgLgQAAIgYAAQgRAAgMAOQgbgRgkgJIAAgLQABgPgMgMQgLgKgQgBIgVAAQgQABgMAKQgKALgBAQIAAAJQglAJgeARQgLgKgPgBIgYAAQgQABgLAKQgLAMAAAQIAAAaQAAAOAJALQgUAfgIAmIgHAAQgQAAgLALQgLALAAAQIAAAbQAAAOALALQALALAQAAIAIAAQAIAfARAdQgJAKABAOIAAAaQAAARALALQALALAQAAIAXAAQAPAAAKgJIAHADIgWBXIgiAAQgJAAgGAFgAhsCcQAFgKABgKIAAgaQAAgKgHgLIAVgUIAEADIgWBVgABYBFIAAAAIAaAaQgDAIAAAJIAAAbQAAAHACAGIAAABgABgA8QAhgjACgsIAjAAIAAAHQAAAOALALQALALAQAAIADAAQgIAdgNAYQgIgDgGAAIgXAAQgQAAgLALgAB7A7IABABQAMgGANAAIAaAAIAGgOQgZgMgIgbQgGAggTAagAiNBHIgXAAQgLABgKAGQgPgcgGgYIADAAQAPAAAMgLQALgLAAgOIAAgJIAiAAQADAtAfAiIgUAUQgLgIgNgBgAh/A1QgPgWgFgaQgJAagYALIAFAKIAigBQAIAAAGACgABQAsIgTg/IA6AAQgCAogdAegABcAKIAEgKIgIAAgAh3gTIA8AAIgQA6IgNAMQgcgegDgogAhaAOIAFgOIgKAAQACAGADAIgACDgfQgCgyghgjIAZgYQAKAJANAAIAYAAQAIAAAJgEQAQAdAGAcIgDAAQgQAAgLAMQgLALAAAQIAAAIgAB7hzQAUAbAGAgQAHgaAagLIgIgSIgGAAIgYAAQgKAAgKgEgAA6gfIgEgNQgEgKgFgFIgDgDIAuguQAeAhABAsgABgg0QgDgNgHgMIgSARIAEAIIAYAAIAAAAgAh3gfQACgsAdghIAuAuQgIAKgEAMIgCAJgAhgg0IAYAAIAEgHIgRgSQgIAMgDANgAilgfIAAgGQAAgQgLgLQgMgLgPAAIgFAAQAIggARgdQAKAGAKAAIAYAAQAMAAAJgHIAVAVQghAkgBAxgAi2hbQAZAKAJAZQAFgeASgaQgHACgHAAIgYAAIgLgBgAhQh0QAhgdAqgCIAABCQgPACgNAJgAgxhyIAUAUIAEgDIAAgbQgMAEgMAGgAAFhRIAAhCQArACAfAdIguAuQgLgJgRgCgAAZhhIAFACIATgTQgMgGgMgEgAAFifIAAghIAJAAQAQAAALgMQAMgKgBgRIAAgEQAdAIAcAQQgDAJAAAGIAAAaQAAAMAHAKIgZAXQgjgfgwgDgAAhivQAeAGAXARIACgBQgCgJAAgIIAAgaIAAgEIgSgIQgKAYgZAJgAhtiRQAIgLAAgNIAAgaQAAgIgFgKQAdgQAfgHIAAAFQABARAKAKQAMAMAQAAIACAAIAAAhQgwADgjAfgAhSjLIABAiQAAAJgCAGQAagQAcgHQgZgJgIgZg");
	this.shape.setTransform(0,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_1.setTransform(15.2,-23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAQQgBgRAPgKQAHgEAIAAIAAADQgIAAgGAEQgNAIAAAQg");
	this.shape_2.setTransform(12.9,-21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHADQgEAAAAgDQAAgCAEAAIAPAAQAEAAAAACQAAADgEAAg");
	this.shape_3.setTransform(18.2,-17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5C99CF").s().p("AgPAUIAAgnIAFAAQAKAAAIAHQAHAJABAKIAAANg");
	this.shape_4.setTransform(17.7,-20.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C99CF").s().p("AgPAUIAAgNQABgKAHgJQAHgHALAAIAFAAIAAAng");
	this.shape_5.setTransform(13.7,-20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6E2F5").s().p("AgKAzQgQAAgLgLQgMgLAAgQIAAgZQAAgQAMgLQALgLAQAAIAVAAQAQAAALALQAMALAAAQIAAAZQAAAQgMALQgLALgQAAg");
	this.shape_6.setTransform(15.7,-18.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_7.setTransform(21.2,-7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAQQAAgRAPgKQAHgEAIAAIABACQgIABgIAEQgMAIAAAQg");
	this.shape_8.setTransform(18.9,-6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHADQgEAAAAgDQAAgDAEAAIAPAAQAEAAAAADQAAADgEAAg");
	this.shape_9.setTransform(24.2,-1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#62A6D8").s().p("AgOAUIAAgnIADAAQALAAAIAIQAHAIAAAJIAAAOg");
	this.shape_10.setTransform(23.7,-4.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#62A6D8").s().p("AgPAUIAAgOQABgJAHgIQAHgIALAAIAFAAIAAAng");
	this.shape_11.setTransform(19.6,-4.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C75AE").s().p("AgKAzQgQAAgLgLQgMgLAAgQIAAgZQAAgQAMgLQALgLAQAAIAVAAQAQAAALALQALALAAAQIAAAZQAAAQgLALQgLALgQAAg");
	this.shape_12.setTransform(21.7,-3.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_13.setTransform(15.6,7.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAQQAAgRAPgKQAIgEAIAAIAAADQgIAAgIAEQgLAIAAAQg");
	this.shape_14.setTransform(13.3,9.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHADQgEAAAAgDQAAAAAAAAQABgBAAAAQABgBAAAAQABAAABAAIAPAAQAEAAAAACQAAADgEAAg");
	this.shape_15.setTransform(18.6,13.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5C99CF").s().p("AgPAUIAAgnIAFAAQAKAAAIAIQAHAIABAKIAAANg");
	this.shape_16.setTransform(18.2,10.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5C99CF").s().p("AgOAUIAAgNQAAgKAIgIQAGgIAMAAIADAAIAAAng");
	this.shape_17.setTransform(14.1,10.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F5977C").s().p("AgKAzQgQAAgLgLQgLgLAAgQIAAgZQAAgQALgLQALgLAQAAIAVAAQAQAAALALQAMALAAAQIAAAZQAAAQgMALQgLALgQAAg");
	this.shape_18.setTransform(16.1,12.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_19.setTransform(-15.9,7.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPARQAAgSAPgJIAQgGIAAADIgQAFQgLAIAAARg");
	this.shape_20.setTransform(-18.2,9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHADQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgCAEAAIAPAAQAEAAAAACQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_21.setTransform(-12.9,13.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5C99CF").s().p("AgPAUIAAgnIAFAAQAKgBAIAJQAHAIABAKIAAANg");
	this.shape_22.setTransform(-13.3,10.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5C99CF").s().p("AgOAUIAAgNQAAgKAIgIQAGgJAMABIADAAIAAAng");
	this.shape_23.setTransform(-17.4,10.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C6E2F5").s().p("AgKAzQgQAAgLgLQgLgLAAgQIAAgZQAAgQALgLQALgLAQAAIAVAAQAQAAAMALQAKALABAQIAAAZQgBAQgKALQgMALgQAAg");
	this.shape_24.setTransform(-15.4,12);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_25.setTransform(-22.2,-7.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOARQgBgSAPgKIAPgEIAAACIgOAFQgMAIgBARg");
	this.shape_26.setTransform(-24.4,-5.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHADQgEAAAAgDQAAgCAEgBIAPAAQAEABAAACQAAADgEAAg");
	this.shape_27.setTransform(-19.2,-1.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#62A6D8").s().p("AgOAUIAAgnIADAAQALAAAHAIQAIAIAAAJIAAAOg");
	this.shape_28.setTransform(-19.6,-4.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#62A6D8").s().p("AgPAUIAAgOQABgJAHgIQAHgIALAAIAFAAIAAAng");
	this.shape_29.setTransform(-23.7,-4.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3C75AE").s().p("AgLAzQgPAAgMgLQgKgLgBgQIAAgZQABgQAKgLQAMgLAPAAIAWAAQAQAAALALQALALAAAQIAAAZQAAAQgLALQgLALgQAAg");
	this.shape_30.setTransform(-21.6,-2.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQABAAAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_31.setTransform(-15.8,-23.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgOAQQAAgRAOgKQAHgEAJAAIAAADQgIAAgHAFQgNAHAAAQg");
	this.shape_32.setTransform(-18,-21.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgHADQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgCAEAAIAPAAQAEAAAAACQAAADgEAAg");
	this.shape_33.setTransform(-12.8,-17.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5C99CF").s().p("AgOAUIAAgnIADAAQALAAAIAIQAHAIAAAKIAAANg");
	this.shape_34.setTransform(-13.2,-20.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5C99CF").s().p("AgPAUIAAgNQABgKAHgIQAHgIALAAIAFAAIAAAng");
	this.shape_35.setTransform(-17.3,-20.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F5977C").s().p("AgKAzQgQAAgLgLQgMgLAAgQIAAgZQAAgQAMgLQAKgLARAAIAVAAQAQAAALALQALALAAAQIAAAZQAAAQgLALQgLALgQAAg");
	this.shape_36.setTransform(-15.2,-18.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_37.setTransform(-1,13.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgPAQQAAgRAPgKIAPgFIABAEQgHgBgJAFQgMAIAAAQg");
	this.shape_38.setTransform(-3.3,15.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgHADQgEAAAAgDQAAgCAEAAIAPAAQAEAAAAACQAAADgEAAg");
	this.shape_39.setTransform(2,19.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#5C99CF").s().p("AgOAUIAAgoIADAAQALABAHAHQAIAJAAAKIAAANg");
	this.shape_40.setTransform(1.6,16.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5C99CF").s().p("AgPAUIAAgNQABgKAHgJQAHgHALgBIAFAAIAAAog");
	this.shape_41.setTransform(-2.5,16.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FDE370").s().p("AgKAzQgQAAgMgLQgKgLgBgQIAAgZQABgQAKgLQAMgLAQAAIAVAAQAQAAALALQALALAAAQIAAAZQAAAQgLALQgLALgQAAg");
	this.shape_42.setTransform(-0.5,18.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_43.setTransform(-0.2,-29.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgPARQAAgSAPgKQAHgEAIAAIABACQgHABgJAEQgMAIAAARg");
	this.shape_44.setTransform(-2.5,-27.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHADQgEAAAAgDQAAgCAEAAIAPAAQAEAAAAACQAAADgEAAg");
	this.shape_45.setTransform(2.8,-23.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#5C99CF").s().p("AgOAUIAAgnIADAAQALAAAHAIQAJAIgBAKIAAANg");
	this.shape_46.setTransform(2.4,-26.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#5C99CF").s().p("AgPAUIAAgNQAAgKAJgIQAGgIALAAIAFAAIAAAng");
	this.shape_47.setTransform(-1.7,-26.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FDE370").s().p("AgKAzQgQAAgMgLQgKgLgBgQIAAgZQABgQAKgLQAMgLAQAAIAVAAQAQAAALALQAMALgBAQIAAAZQABAQgMALQgLALgQAAg");
	this.shape_48.setTransform(0.3,-24.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#5C99CF").s().p("AgTAUQgJgJABgLQgBgLAJgIQAJgJAKAAQAMAAAIAJQAIAIAAALQAAALgIAJQgIAJgMAAQgKAAgJgJg");
	this.shape_49.setTransform(0.1,-3.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgRANgMQANgMAQAAQARAAANAMQANAMAAARQAAARgNANQgNAMgRAAQgQAAgNgMg");
	this.shape_50.setTransform(0.1,-3.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AiqAUQgJAAgFgGQgHgGAAgIQAAgHAHgGQAFgGAJAAIFVAAQAJAAAGAGQAFAGABAHQgBAIgFAGQgGAGgJAAg");
	this.shape_51.setTransform(0.5,27.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AifCXIE2k2IAJAJIk2E2g");
	this.shape_52.setTransform(0,-3.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AifiWIAJgJIE2E2IgJAJg");
	this.shape_53.setTransform(0,-3.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AjbAGIAAgKIG3AAIAAAKg");
	this.shape_54.setTransform(0.1,-3.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgFDcIAAm3IAKAAIAAG3g");
	this.shape_55.setTransform(0,-3.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgmAng3AAQg1AAgngngAhUhUQgjAkAAAwQAAAxAjAjQAkAkAwAAQAxAAAjgkQAkgjAAgxQAAgwgkgkQgjgjgxAAQgwAAgkAjg");
	this.shape_56.setTransform(0,-3.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AifCgQhChDAAhdQAAhcBChDQBDhCBcAAQBdAABDBCQBCBDAABcQAABdhCBDQhDBChdAAQhcAAhDhCgAiWiWQg/A+AABYQAABYA/A/QA+A/BYAAQBYAAA/g/QA/g/AAhYQAAhYg/g+Qg/g/hYAAQhYAAg+A/g");
	this.shape_57.setTransform(0,-3.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D7D6D6").s().p("AiPC1IBUlAQAFgRAPgMQAQgMATABQAagBASAWQAEAFAFALIBfFDg");
	this.shape_58.setTransform(0.6,9.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#939596").s().p("Ai9ApQhPgSAAgXQAAgXBPgQQBPgRBuAAQBvAABPARQBPAQAAAXQAAAXhPASQhPAQhvAAQhuAAhPgQg");
	this.shape_59.setTransform(0.3,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.6,-32.1,57.3,65.2);


(lib.Path_124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C654").s().p("AjfEoQghAAgXgYQgYgXAAghIAAmvQAAghAYgXQAXgYAhAAIG/AAQAhAAAXAYQAYAXAAAhIAAGvQAAAhgYAXQgXAYghAAg");
	this.shape.setTransform(30.4,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.9,59.3);


(lib.Path_123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C654").s().p("AjeEoQgiAAgXgYQgYgXAAghIAAmvQAAghAYgXQAXgYAiAAIG+AAQAhAAAXAYQAYAXAAAhIAAGvQAAAhgYAXQgXAYghAAg");
	this.shape.setTransform(30.4,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.8,59.3);


(lib.Path_103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C654").s().p("AjfEoQghAAgXgYQgYgXAAghIAAmvQAAghAYgXQAXgYAhAAIG/AAQAhAAAXAYQAYAXAAAhIAAGvQAAAhgYAXQgXAYghAAg");
	this.shape.setTransform(30.4,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.9,59.3);


(lib.Path_102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("AgiB9IAAj5IBFAAIAAD5g");
	this.shape.setTransform(3.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.Path_75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A847").s().p("Ah8AjIAAhFID5AAIAABFg");
	this.shape.setTransform(12.5,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,7);


(lib.Path_73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C654").s().p("AjfEoQghAAgXgYQgYgXAAghIAAmvQAAghAYgXQAXgYAhAAIG/AAQAhAAAXAYQAYAXAAAhIAAGvQAAAhgYAXQgXAYghAAg");
	this.shape.setTransform(30.4,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.9,59.3);


(lib.Path_72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#162618").s().p("AlvIDQgIAAgGgGQgGgFAAgJIAAqwIgUAAQgIAAgGgGQgGgGAAgIIAAkZQAAgIAGgGQAGgGAIAAIMvAAQAJAAAFAGQAGAGAAAIIAAEZQAAAIgGAGQgFAGgJAAIgUAAIAAKwQAAAJgGAFQgFAGgJAAgAmXjVIAoAAIAALEILfAAIAArEIAoAAIAAkZIsvAAg");
	this.shape.setTransform(42.9,51.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.8,103.2);


(lib.Path_71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020303").s().p("AgCCQIAAkfIAFAAIAAEfg");
	this.shape.setTransform(0.3,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.7,29);


(lib.Path_70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020303").s().p("AgCCQIAAkfIAFAAIAAEfg");
	this.shape.setTransform(0.3,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.6,29);


(lib.Path_69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020303").s().p("AgCCQIAAkfIAFAAIAAEfg");
	this.shape.setTransform(0.3,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.7,29);


(lib.Path_68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020303").s().p("AgCCQIAAkfIAFAAIAAEfg");
	this.shape.setTransform(0.3,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.6,29);


(lib.Path_67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020303").s().p("AgCCQIAAkfIAFAAIAAEfg");
	this.shape.setTransform(0.4,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.8,29);


(lib.Path_66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020303").s().p("AlRADIAAgFIKiAAIAAAFg");
	this.shape.setTransform(33.8,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.6,0.7);


(lib.Path_65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgHAAgLQAAgJAIgIQAIgIAJAAQALAAAHAIQAIAIAAAJQAAALgIAHQgHAIgLAAQgJAAgIgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgHAAgLQAAgKAIgHQAIgIAJAAQALAAAHAIQAIAHAAAKQAAAKgIAIQgHAIgLAAQgJAAgIgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgHAAgLQAAgKAIgHQAIgIAJAAQALAAAHAIQAIAHAAAKQAAAKgIAIQgHAIgLAAQgJAAgIgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgHAAgLQAAgKAIgHQAIgIAJAAQALAAAHAIQAIAHAAAKQAAAKgIAIQgHAIgLAAQgJAAgIgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgHAAgLQAAgKAIgHQAIgIAJAAQALAAAHAIQAIAHAAAKQAAAKgIAIQgHAIgLAAQgJAAgIgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgHAAgLQAAgKAIgHQAIgIAJAAQALAAAHAIQAIAHAAAKQAAAKgIAIQgHAIgLAAQgJAAgIgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgHAAgLQAAgKAIgHQAIgIAJAAQALAAAHAIQAIAHAAAKQAAAKgIAIQgHAIgLAAQgJAAgIgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgJgHAAgLQAAgKAJgHQAHgIAKAAQALAAAHAIQAJAHAAAKQAAALgJAHQgHAIgLAAQgKAAgHgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgJgHAAgLQAAgKAJgHQAHgIAKAAQALAAAHAIQAJAHAAAKQAAALgJAHQgHAIgLAAQgKAAgHgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgHAAgLQAAgKAIgHQAIgIAJAAQALAAAHAIQAIAHAAAKQAAAKgIAIQgHAIgLAAQgJAAgIgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgHAAgLQAAgKAIgHQAIgIAJAAQALAAAHAIQAIAHAAAKQAAAKgIAIQgHAIgLAAQgJAAgIgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgHAAgLQAAgKAIgHQAIgIAJAAQALAAAHAIQAIAHAAAKQAAAKgIAIQgHAIgLAAQgJAAgIgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgJgHAAgLQAAgKAJgHQAHgIAKAAQALAAAHAIQAJAHAAAKQAAALgJAHQgHAIgLAAQgKAAgHgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgJgHAAgLQAAgKAJgHQAHgIAKAAQALAAAHAIQAJAHAAAKQAAALgJAHQgHAIgLAAQgKAAgHgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C654").s().p("AhOT8MAABgn3ICcAAMgABAn3g");
	this.shape.setTransform(7.9,127.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.8,255.3);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C654").s().p("AhOT8MAABgn3ICcAAMgABAn3g");
	this.shape.setTransform(7.9,127.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.8,255.3);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C654").s().p("AhMUGMgADgoLICcAAMAADAoLg");
	this.shape.setTransform(8,128.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.1,257.3);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.1);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape.setTransform(0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.1,1.2);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB432").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgJAKAAQALAAAHAJQAIAHAAAKQAAALgIAHQgHAJgLAAQgKAAgHgJg");
	this.shape.setTransform(2.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,5.4);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020303").s().p("AlJA5QiJgXAAgiQAAggCJgYQCJgYDAAAQDBAACJAYQCJAYAAAgQAAAiiJAXQiJAYjBAAQjAAAiJgYg");
	this.shape.setTransform(46.8,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93.6,16.3);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C654").s().p("AhMUGMgADgoLICbAAMAAEAoLg");
	this.shape.setTransform(8,128.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.1,257.3);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C654").s().p("AhPUGMAADgoLICcAAMgADAoLg");
	this.shape.setTransform(8,128.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.1,257.3);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C654").s().p("AhPUGMAADgoLICcAAMgADAoLg");
	this.shape.setTransform(8,128.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.1,257.2);


(lib.Path_3_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020303").s().p("AkmACIAAgDIJNAAIAAADg");
	this.shape.setTransform(29.6,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.2,0.6);


(lib.Path_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C654").s().p("AsYAlIAAhKIYwABIAABKg");
	this.shape.setTransform(79.3,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158.6,7.8);


(lib.Path_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C654").s().p("AsYAlIAAhKIYwABIAABKg");
	this.shape.setTransform(79.3,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158.6,7.8);


(lib.Path_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C654").s().p("AsYgkIYwgCIAABLI4wACg");
	this.shape.setTransform(79.3,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158.6,7.8);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C654").s().p("AsYgkIYwgCIAABLI4wACg");
	this.shape.setTransform(79.3,3.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158.6,7.8);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C654").s().p("AhMPxIgD/hICbAAIAEfhg");
	this.shape.setTransform(8,100.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.1,201.9);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99C654").s().p("AhMUGMgADgoLICcAAMAADAoLg");
	this.shape.setTransform(8,128.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.1,257.2);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020303").s().p("AgiALIAAgVIBFAAIAAAVg");
	this.shape.setTransform(3.6,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,2.3);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020303").s().p("AgiALIAAgVIBFAAIAAAVg");
	this.shape.setTransform(3.5,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,2.3);


(lib.Group_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAKQgDgDADgEQADgGADgDQADgFAEADQAEADgFAFIgCADQgCAEgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.2);


(lib.Group_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAKQgDgDADgEQADgGADgDQAEgGADADQAEAEgFAFIgCADQgCAEgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.3);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAJQgDgCADgEQADgGADgEQADgFAEADQABABAAAAQAAABABAAQAAABAAABQAAAAgBABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAIgCADIgEAGIgDACIgDgCg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.2);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAKQgDgDADgEQADgGADgDQADgFAEADQAEADgFAFIgCADQgCAEgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.2);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAKQgDgDADgEQADgGADgDQADgFAEADQAEADgFAFIgCADQgCAEgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.2);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAKQgDgDADgEQADgGADgDQAEgGADADQAEAEgFAFIgCADQgCAEgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.3);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAKQgDgDADgEQADgGADgDQADgFAEADQAAAAABAAQAAABAAAAQABABAAABQAAAAgBABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgBAAgBADIgEAGIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.8,2.2);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAKQgDgDADgEQADgGADgDQADgGAEADQAAABABABQAAAAAAABQABAAAAABQAAAAgBABQAAADgCABIgCADIgEAGQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.8,2.3);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAKQgDgDADgEQADgGADgDQADgFAEADQAEADgFAFQgBAAgBADIgEAGIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.2);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAKQgDgDADgEQADgGADgDQADgGAEAEQAAAAABABQAAAAAAABQABAAAAABQAAAAgBABQAAADgCABIgCAEIgEAFIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.8,2.3);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAKQgDgDADgEQADgGADgDQAEgFADADQAEADgFAFIgCADQgCAEgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.2);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAKQgDgDADgEQADgGADgDQADgGAEAEQAEAEgFAEIgCAEQgCADgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.3);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAKQgDgDADgEQADgGADgDQAEgFADADQAEADgFAFIgCADQgCAEgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.2);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAKQgDgDADgEQADgGADgDQADgGAEAEQAEAEgFAEIgCAEQgCADgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.3);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAKQgDgDADgEQADgGADgDQAEgFADADQAEADgFAFIgCADQgCAEgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.2);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAKQgDgDADgEQADgGADgDQADgGAEAEQAEAEgFAEIgCAEQgCADgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.3);


(lib.Group_3_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgEAAgDQABgDAEgCQABgBAAAAQAAAAAAAAQAAAAAAABQABAAAAABQAAADADADQADABAAADQgBADgDABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.9);


(lib.Group_3_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgEAAgDQAAgDAEgCQADgDAAAEQAAADADADQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.9);


(lib.Group_3_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgEAAgDQABgDAEgCQABgCABAEQAAACADADQADABAAADQAAADgEACIgCAAQgCAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.9);


(lib.Group_3_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgEABgDQAAgDAEgCQAAgBABAAQAAAAAAAAQAAAAAAABQAAAAABABQAAADADADQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.9);


(lib.Group_3_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgEAAgDQABgDAEgCQABgBAAAAQAAAAAAAAQAAAAAAABQABAAAAABQAAADADADQADABAAADQgBADgDABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.9);


(lib.Group_3_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgEAAgDQAAgDAEgCQADgDAAAEQAAADADADQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.9);


(lib.Group_3_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgEABgDQAAgDAEgCQABgBAAAAQAAAAAAAAQAAAAAAABQABAAAAABQAAADADADQADABAAADQAAADgEACIgDAAQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.9);


(lib.Group_3_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgFABgDQAAgCAEgCQACgDAAAEIADAGQADABAAADQAAACgEACIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.9);


(lib.Group_3_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgEABgDQAAgDAEgCQABgBAAAAQAAAAAAAAQAAAAAAABQABAAAAABIADAGQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.9);


(lib.Group_3_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgFABgDQAAgCAEgCQACgDAAAEIADAGQADABAAADQAAACgEACIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.9);


(lib.Group_3_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgEAAgDQAAgDAEgCQABgBABAAQAAAAAAAAQAAAAAAABQABAAAAABQAAADADADQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.9);


(lib.Group_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgEABgEQAAgCAEgCQACgDAAAEIADAGQADABAAADQAAACgEACIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.9);


(lib.Group_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgEAAgDQAAgDAEgCQABgBABAAQAAAAAAAAQAAAAAAABQABAAAAABQAAADADADQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.9);


(lib.Group_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgEABgEQAAgCAEgCQACgDAAAEIADAGQADABAAADQAAACgEACIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.9);


(lib.Group_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgEAAgDQAAgDAEgCQABgBABAAQAAAAAAAAQAAAAAAABQABAAAAABQAAADADADQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.9);


(lib.Group_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgEABgEQAAgCAEgCQACgDAAAEIADAGQADABAAADQAAACgEACIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.9);


(lib.Group_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgEAAgDQABgDAEgCQABgBAAAAQAAAAAAAAQAAAAAAABQABAAAAABQAAADADADQADABAAADQgBADgDABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,1.9);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgDAFQgDgEAAgDQAAgDAEgCQADgDAAAEQAAADADADQADABAAADQAAADgEABIgDABQgBAAgCgEg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.9);


(lib.Group_2_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Group_1_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCAAAGQAAAEACADQADAEgFAEQgDADgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.7,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,2.4);


(lib.Group_1_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCAAAGQgBADADAEQADAEgFAEQgDADgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.7,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,2.4);


(lib.Group_1_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCAAAGQAAAFACACQADAEgFAEQgDACgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.7,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,2.4);


(lib.Group_1_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCAAAGQAAAEACADQADAEgFAEQgDADgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.7,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,2.4);


(lib.Group_1_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCAAAGQAAAEACADQADAEgFAEQgDADgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.7,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,2.4);


(lib.Group_1_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCAAAGQgBADADAEQADAEgFAEQgDADgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.7,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,2.4);


(lib.Group_1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCgBAGQAAAFADACQADAEgGAEQAAABgBAAQAAABgBAAQgBAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.4);


(lib.Group_1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgFAAgHQAAgFAGgCQAEgCgBAGQAAAFADACQADAEgGAEQAAABgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.4);


(lib.Group_1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCgBAGQAAAEADADQADAEgGAEQAAABgBAAQAAABgBAAQgBAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.4);


(lib.Group_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgFAAgHQAAgFAGgCQAEgCgBAGQAAAFADACQADAEgGAEQAAABgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.4);


(lib.Group_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCAAAGQgBADADAEQADAEgFAEQgDADgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,1.5,2.4);


(lib.Group_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgFAAgHQAAgFAGgCQAEgCgBAGQAAAEADADQADAEgFAEQgDACgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.4);


(lib.Group_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCAAAGQgBADADAEQADAEgFAEQgDADgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,1.5,2.4);


(lib.Group_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgFAAgHQAAgFAGgCQAEgCgBAGQAAAEADADQADAEgFAEQgDACgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.4);


(lib.Group_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCAAAGQgBADADAEQADAEgFAEQgDADgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,1.5,2.4);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgFAAgHQAAgFAGgCQAEgCgBAGQAAAEADADQADAEgFAEQgDACgBAAQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape.setTransform(0.8,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.6,2.4);


(lib.Group_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCAAAGQAAAEACADQADAEgFAEQgDADgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.7,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,2.4);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgCAJQgEgGAAgGQAAgFAGgCQAEgCAAAGQgBADADAEQADAEgFAEQgDADgBAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(0.7,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,2.4);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAKQgDgDADgEQADgGADgDQADgFAEADQAEADgFAFIgCADQgCAEgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.2);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90B760").s().p("AgGAKQgDgDADgEQADgGADgDQAEgGADADQAEAEgFAFIgCADQgCAEgCACIgDACIgDgBg");
	this.shape.setTransform(0.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.9,2.3);


(lib.Group_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB212E").s().p("AhoCYIAAkvIDRAAIAAEvg");
	this.shape_1.setTransform(10.5,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.1,30.5);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgxBnQhYgsAyhiQAEgJAJgMQgHgMABgPQABgQAJgMIABAAIAVATQAFAEADAEQAYgMAZADQALAAANAEIAHgVIAEAHIgFAQQALAEAJAGIAuBMQADAUgFAVQgJAsgmAXQgXANgbAAQgZAAgegNgAA7hRIgPgaIACgFIA2BBIgIABQgMgWgVgNgAAshrg");
	mask.setTransform(10.6,11.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAwQgUgFgMgSQgLgSADgSQAEgUARgLQARgKASAFQAVAFALASQAMASgEASQgDAUgSALQgLAHgNAAQgEAAgHgCg");
	this.shape.setTransform(18.9,19.7);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

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

	this.instance = new lib.ClipGroup();
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:2.9,y:11.3,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:2.9,y:11.3,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:2.9,y:11.3,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-4.9,y:12,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-4.9,y:12,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.386,skewY:0,x:-4.9,y:12,scaleY:1.386}},{t:this.shape_65,p:{scaleX:1.386,scaleY:1.386,y:-0.3,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.386,scaleY:1.386,y:-0.3,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.386,scaleY:1.386,y:-17.3,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.386,scaleY:1.386,y:-17.3,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.386,scaleY:1.386,y:-8.1,skewY:0,x:-13.9}},{t:this.shape_60,p:{scaleX:1.386,scaleY:1.386,y:0.1,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.386,scaleY:1.386,y:0.1,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_57,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_56,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_55,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_54,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_53,p:{scaleX:1.386,scaleY:1.386,y:5.4,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_51,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_50,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_49,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_48,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_47,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_46,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_45,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_44,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_43,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_42,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_41,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_40,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_39,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_38,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_37,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_36,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_35,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_34,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_33,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_32,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_31,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_30,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_29,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_28,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_27,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_26,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_25,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_24,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_23,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_22,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_21,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_20,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_19,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_18,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_17,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_16,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_15,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_14,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_13,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_12,p:{scaleX:1.386,scaleY:1.386,y:5.4,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_10,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_9,p:{scaleX:1.386,scaleY:1.386,y:-4.2,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.1,scaleX:1.386,scaleY:1.386,y:0.1,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.386,scaleY:1.386,rotation:0,y:6.6,x:-6.4,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.386,scaleY:1.386,rotation:0,y:6.6,x:-6.4,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-6.4,y:6.6,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.386,scaleY:1.386,x:10.6,skewY:0,y:9}},{t:this.shape_4,p:{scaleX:1.386,scaleY:1.386,x:13.5,y:2,skewY:0}},{t:this.shape_3,p:{scaleX:1.386,scaleY:1.386,x:13.5,y:2,skewY:0}},{t:this.shape_2,p:{scaleX:1.386,scaleY:1.386,x:14.6,y:2.1,skewY:0}},{t:this.shape_1,p:{scaleX:1.386,scaleY:1.386,x:14.6,y:2.1,skewY:0}},{t:this.shape,p:{scaleX:1.386,scaleY:1.386,x:14.7,skewY:0,y:2.1}}]}).to({state:[{t:this.shape_71,p:{scaleX:1.379,scaleY:1.379,rotation:-15,x:5.3,y:10.9,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.379,scaleY:1.379,rotation:-15,x:5.3,y:10.9,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.379,scaleY:1.379,rotation:-15,x:5.3,y:10.9,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.379,scaleY:1.379,rotation:30,x:-7.1,y:11.3,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.379,scaleY:1.379,rotation:30,x:-7.1,y:11.2,skewY:0,skewX:0}},{t:this.shape_65,p:{scaleX:1.38,scaleY:1.38,y:-0.2,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.38,scaleY:1.38,y:-0.2,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.38,scaleY:1.38,y:-17.2,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.38,scaleY:1.38,y:-17.2,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.38,scaleY:1.38,y:-8,skewY:0,x:-13.9}},{t:this.shape_60,p:{scaleX:1.38,scaleY:1.38,y:0.2,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.38,scaleY:1.38,y:0.2,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.38,scaleY:1.38,x:1.2,y:5.4,skewY:0}},{t:this.shape_57,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_56,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_55,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_54,p:{scaleX:1.38,scaleY:1.38,x:1.2,y:5.4,skewY:0}},{t:this.shape_53,p:{scaleX:1.38,scaleY:1.38,y:5.4,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_51,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_50,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_49,p:{scaleX:1.38,scaleY:1.38,x:1.2,y:5.4,skewY:0}},{t:this.shape_48,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_47,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_46,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_45,p:{scaleX:1.38,scaleY:1.38,x:1.1,y:5.4,skewY:0}},{t:this.shape_44,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_43,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_42,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_41,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_40,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_39,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_38,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_37,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_36,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_35,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_34,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_33,p:{scaleX:1.38,scaleY:1.38,x:1.1,y:5.4,skewY:0}},{t:this.shape_32,p:{scaleX:1.38,scaleY:1.38,x:1.2,y:5.4,skewY:0}},{t:this.shape_31,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_30,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_29,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_28,p:{scaleX:1.38,scaleY:1.38,x:1.2,y:5.4,skewY:0}},{t:this.shape_27,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_26,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_25,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_24,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_23,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_22,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_21,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_20,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_19,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_18,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_17,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_16,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_15,p:{scaleX:1.38,scaleY:1.38,x:1.1,skewY:0,y:5.4}},{t:this.shape_14,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_13,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_12,p:{scaleX:1.38,scaleY:1.38,y:5.4,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.38,scaleY:1.38,skewY:0,x:1.2,y:5.4}},{t:this.shape_10,p:{scaleX:1.38,scaleY:1.38,x:1.2,skewY:0,y:5.4}},{t:this.shape_9,p:{scaleX:1.38,scaleY:1.38,y:-4.1,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.2,scaleX:1.38,scaleY:1.38,y:0,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.379,scaleY:1.379,rotation:30,y:7,x:-6.4,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.379,scaleY:1.379,rotation:30,y:7,x:-6.4,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.379,scaleY:1.379,rotation:30,x:-6.5,y:7,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.38,scaleY:1.38,x:10.6,skewY:0,y:9}},{t:this.shape_4,p:{scaleX:1.38,scaleY:1.38,x:13.4,y:2,skewY:0}},{t:this.shape_3,p:{scaleX:1.38,scaleY:1.38,x:13.4,y:2.1,skewY:0}},{t:this.shape_2,p:{scaleX:1.38,scaleY:1.38,x:14.5,y:2.2,skewY:0}},{t:this.shape_1,p:{scaleX:1.38,scaleY:1.38,x:14.5,y:2.1,skewY:0}},{t:this.shape,p:{scaleX:1.38,scaleY:1.38,x:14.6,skewY:0,y:2.1}}]},4).to({state:[{t:this.shape_71,p:{scaleX:1.375,scaleY:1.375,rotation:-15,x:5.3,y:11,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.375,scaleY:1.375,rotation:-15,x:5.3,y:11.1,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.375,scaleY:1.375,rotation:-15,x:5.3,y:11,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.375,scaleY:1.375,rotation:15,x:-7.2,y:11.6,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.375,scaleY:1.375,rotation:15,x:-7.2,y:11.6,skewY:0,skewX:0}},{t:this.shape_65,p:{scaleX:1.375,scaleY:1.375,y:-0.2,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.375,scaleY:1.375,y:-0.2,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.375,scaleY:1.375,y:-17.1,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.375,scaleY:1.375,y:-17.1,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.375,scaleY:1.375,y:-8,skewY:0,x:-13.9}},{t:this.shape_60,p:{scaleX:1.375,scaleY:1.375,y:0.2,x:3.9,skewY:0}},{t:this.shape_59,p:{scaleX:1.375,scaleY:1.375,y:0.2,x:3.9,skewY:0}},{t:this.shape_58,p:{scaleX:1.375,scaleY:1.375,x:1.1,y:5.5,skewY:0}},{t:this.shape_57,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_56,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_55,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_54,p:{scaleX:1.375,scaleY:1.375,x:1.1,y:5.5,skewY:0}},{t:this.shape_53,p:{scaleX:1.375,scaleY:1.375,y:5.5,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_51,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_50,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_49,p:{scaleX:1.375,scaleY:1.375,x:1.1,y:5.5,skewY:0}},{t:this.shape_48,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_47,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_46,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_45,p:{scaleX:1.375,scaleY:1.375,x:1.1,y:5.5,skewY:0}},{t:this.shape_44,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_43,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_42,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_41,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_40,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_39,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_38,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_37,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_36,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_35,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_34,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_33,p:{scaleX:1.375,scaleY:1.375,x:1.1,y:5.5,skewY:0}},{t:this.shape_32,p:{scaleX:1.375,scaleY:1.375,x:1.1,y:5.5,skewY:0}},{t:this.shape_31,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_30,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_29,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_28,p:{scaleX:1.375,scaleY:1.375,x:1.1,y:5.5,skewY:0}},{t:this.shape_27,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_26,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_25,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_24,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_23,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_22,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_21,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_20,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_19,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_18,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_17,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_16,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_15,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_14,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_13,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_12,p:{scaleX:1.375,scaleY:1.375,y:5.5,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.375,scaleY:1.375,skewY:0,x:1.2,y:5.4}},{t:this.shape_10,p:{scaleX:1.375,scaleY:1.375,x:1.1,skewY:0,y:5.4}},{t:this.shape_9,p:{scaleX:1.375,scaleY:1.375,y:-4.1,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.2,scaleX:1.375,scaleY:1.375,y:0.3,regX:12,x:1.9,skewY:0}},{t:this.shape_8,p:{scaleX:1.374,scaleY:1.374,rotation:45,y:7.2,x:-6.8,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.374,scaleY:1.374,rotation:45,y:7.2,x:-6.8,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.375,scaleY:1.375,x:10.5,skewY:0,y:9}},{t:this.shape_4,p:{scaleX:1.375,scaleY:1.375,x:13.4,y:2.1,skewY:0}},{t:this.shape_3,p:{scaleX:1.375,scaleY:1.375,x:13.4,y:2.1,skewY:0}},{t:this.shape_2,p:{scaleX:1.375,scaleY:1.375,x:14.5,y:2.2,skewY:0}},{t:this.shape_1,p:{scaleX:1.375,scaleY:1.375,x:14.5,y:2.2,skewY:0}},{t:this.shape,p:{scaleX:1.375,scaleY:1.375,x:14.6,skewY:0,y:2.1}}]},4).to({state:[]},3).to({state:[{t:this.shape_71,p:{scaleX:1.385,scaleY:1.386,rotation:0,x:-2.9,y:11.5,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.385,scaleY:1.386,rotation:0,x:-2.9,y:11.5,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.385,scaleY:1.386,rotation:0,x:-2.9,y:11.5,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.385,scaleY:1.386,rotation:0,x:4.9,y:12.3,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.385,scaleY:1.386,rotation:0,x:4.9,y:12.2,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.385,skewY:180,x:4.9,y:12.2,scaleY:1.386}},{t:this.shape_65,p:{scaleX:1.385,scaleY:1.386,y:0,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.385,scaleY:1.386,y:-0.1,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.385,scaleY:1.386,y:-17.1,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.385,scaleY:1.386,y:-17.1,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.385,scaleY:1.386,y:-7.9,skewY:180,x:13.9}},{t:this.shape_60,p:{scaleX:1.385,scaleY:1.386,y:0.4,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.385,scaleY:1.386,y:0.4,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.385,scaleY:1.386,x:-1.2,y:5.7,skewY:180}},{t:this.shape_57,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_56,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_55,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_54,p:{scaleX:1.385,scaleY:1.386,x:-1.2,y:5.7,skewY:180}},{t:this.shape_53,p:{scaleX:1.385,scaleY:1.386,y:5.7,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_51,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_50,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_49,p:{scaleX:1.385,scaleY:1.386,x:-1.2,y:5.6,skewY:180}},{t:this.shape_48,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_47,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_46,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_45,p:{scaleX:1.385,scaleY:1.386,x:-1.2,y:5.7,skewY:180}},{t:this.shape_44,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_43,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_42,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_41,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_40,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_39,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_38,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_37,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_36,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_35,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_34,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_33,p:{scaleX:1.385,scaleY:1.386,x:-1.2,y:5.7,skewY:180}},{t:this.shape_32,p:{scaleX:1.385,scaleY:1.386,x:-1.2,y:5.7,skewY:180}},{t:this.shape_31,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_30,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_29,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_28,p:{scaleX:1.385,scaleY:1.386,x:-1.2,y:5.7,skewY:180}},{t:this.shape_27,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_26,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_25,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_24,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_23,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_22,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_21,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_20,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_19,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_18,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_17,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_16,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_15,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_14,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_13,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_12,p:{scaleX:1.385,scaleY:1.386,y:5.7,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_10,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_9,p:{scaleX:1.385,scaleY:1.386,y:-4,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.2,scaleX:1.385,scaleY:1.386,y:0.9,regX:11.8,x:-1.7,skewY:180}},{t:this.shape_8,p:{scaleX:1.385,scaleY:1.386,rotation:0,y:6.8,x:6.4,skewY:180,skewX:0}},{t:this.shape_7,p:{scaleX:1.385,scaleY:1.386,rotation:0,y:6.8,x:6.4,skewY:180,skewX:0}},{t:this.shape_6,p:{scaleX:1.385,scaleY:1.386,rotation:0,x:6.4,y:6.9,skewY:180,skewX:0}},{t:this.shape_5,p:{scaleX:1.385,scaleY:1.386,x:-10.6,skewY:180,y:9.2}},{t:this.shape_4,p:{scaleX:1.385,scaleY:1.386,x:-13.5,y:2.2,skewY:180}},{t:this.shape_3,p:{scaleX:1.385,scaleY:1.386,x:-13.5,y:2.3,skewY:180}},{t:this.shape_2,p:{scaleX:1.385,scaleY:1.386,x:-14.6,y:2.4,skewY:180}},{t:this.shape_1,p:{scaleX:1.385,scaleY:1.386,x:-14.6,y:2.3,skewY:180}},{t:this.shape,p:{scaleX:1.385,scaleY:1.386,x:-14.7,skewY:180,y:2.3}}]},1).to({state:[{t:this.shape_71,p:{scaleX:1.356,scaleY:1.356,rotation:0,x:-5.2,y:11.3,skewY:-165,skewX:15}},{t:this.shape_70,p:{scaleX:1.356,scaleY:1.356,rotation:0,x:-5.2,y:11.3,skewY:-165,skewX:15}},{t:this.shape_69,p:{scaleX:1.356,scaleY:1.356,rotation:0,x:-5.2,y:11.3,skewY:-165,skewX:15}},{t:this.shape_68,p:{scaleX:1.356,scaleY:1.356,rotation:0,x:6.9,y:12,skewY:150,skewX:-30}},{t:this.shape_67,p:{scaleX:1.356,scaleY:1.356,rotation:0,x:6.9,y:12,skewY:150,skewX:-30}},{t:this.shape_65,p:{scaleX:1.356,scaleY:1.356,y:-0.2,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.356,scaleY:1.356,y:-0.2,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.356,scaleY:1.356,y:-16.9,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.356,scaleY:1.356,y:-16.9,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.356,scaleY:1.356,y:-7.9,skewY:180,x:13.6}},{t:this.shape_60,p:{scaleX:1.356,scaleY:1.356,y:0.2,x:-3.9,skewY:180}},{t:this.shape_59,p:{scaleX:1.356,scaleY:1.356,y:0.2,x:-3.9,skewY:180}},{t:this.shape_58,p:{scaleX:1.356,scaleY:1.356,x:-1.2,y:5.4,skewY:180}},{t:this.shape_57,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_56,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_55,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_54,p:{scaleX:1.356,scaleY:1.356,x:-1.2,y:5.4,skewY:180}},{t:this.shape_53,p:{scaleX:1.356,scaleY:1.356,y:5.4,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_51,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_50,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_49,p:{scaleX:1.356,scaleY:1.356,x:-1.2,y:5.4,skewY:180}},{t:this.shape_48,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_47,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_46,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_45,p:{scaleX:1.356,scaleY:1.356,x:-1.1,y:5.4,skewY:180}},{t:this.shape_44,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_43,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_42,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_41,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_40,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_39,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_38,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_37,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_36,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_35,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_34,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_33,p:{scaleX:1.356,scaleY:1.356,x:-1.1,y:5.4,skewY:180}},{t:this.shape_32,p:{scaleX:1.356,scaleY:1.356,x:-1.2,y:5.4,skewY:180}},{t:this.shape_31,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_30,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_29,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_28,p:{scaleX:1.356,scaleY:1.356,x:-1.2,y:5.4,skewY:180}},{t:this.shape_27,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_26,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_25,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_24,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_23,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_22,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.4}},{t:this.shape_21,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_20,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_19,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_18,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_17,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_16,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_15,p:{scaleX:1.356,scaleY:1.356,x:-1.1,skewY:180,y:5.3}},{t:this.shape_14,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_13,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_12,p:{scaleX:1.356,scaleY:1.356,y:5.4,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.356,scaleY:1.356,skewY:180,x:-1.2,y:5.3}},{t:this.shape_10,p:{scaleX:1.356,scaleY:1.356,x:-1.2,skewY:180,y:5.3}},{t:this.shape_9,p:{scaleX:1.356,scaleY:1.356,y:-4.1,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.3,scaleX:1.356,scaleY:1.356,y:0,regX:11.9,x:-1.7,skewY:180}},{t:this.shape_8,p:{scaleX:1.356,scaleY:1.356,rotation:0,y:7,x:6.3,skewY:150,skewX:-30}},{t:this.shape_7,p:{scaleX:1.356,scaleY:1.356,rotation:0,y:7,x:6.3,skewY:150,skewX:-30}},{t:this.shape_6,p:{scaleX:1.356,scaleY:1.356,rotation:0,x:6.3,y:7,skewY:150,skewX:-30}},{t:this.shape_5,p:{scaleX:1.356,scaleY:1.356,x:-10.4,skewY:180,y:8.8}},{t:this.shape_4,p:{scaleX:1.356,scaleY:1.356,x:-13.2,y:2,skewY:180}},{t:this.shape_3,p:{scaleX:1.356,scaleY:1.356,x:-13.2,y:2,skewY:180}},{t:this.shape_2,p:{scaleX:1.356,scaleY:1.356,x:-14.3,y:2.1,skewY:180}},{t:this.shape_1,p:{scaleX:1.356,scaleY:1.356,x:-14.3,y:2.1,skewY:180}},{t:this.shape,p:{scaleX:1.356,scaleY:1.356,x:-14.4,skewY:180,y:2.1}}]},4).to({state:[{t:this.shape_71,p:{scaleX:1.401,scaleY:1.401,rotation:0,x:-5.4,y:11.1,skewY:-165,skewX:15}},{t:this.shape_70,p:{scaleX:1.401,scaleY:1.401,rotation:0,x:-5.4,y:11.1,skewY:-165,skewX:15}},{t:this.shape_69,p:{scaleX:1.401,scaleY:1.401,rotation:0,x:-5.4,y:11.1,skewY:-165,skewX:15}},{t:this.shape_68,p:{scaleX:1.401,scaleY:1.401,rotation:0,x:7.3,y:11.2,skewY:165,skewX:-15}},{t:this.shape_67,p:{scaleX:1.401,scaleY:1.401,rotation:0,x:7.3,y:11.2,skewY:165,skewX:-15}},{t:this.shape_65,p:{scaleX:1.401,scaleY:1.401,y:0.1,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.401,scaleY:1.401,y:0.1,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.401,scaleY:1.401,y:-17.2,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.401,scaleY:1.401,y:-17.2,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.401,scaleY:1.401,y:-7.8,skewY:180,x:14.1}},{t:this.shape_60,p:{scaleX:1.401,scaleY:1.401,y:0.5,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.401,scaleY:1.401,y:0.5,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.401,scaleY:1.401,x:-1.2,y:5.8,skewY:180}},{t:this.shape_57,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_56,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_55,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_54,p:{scaleX:1.401,scaleY:1.401,x:-1.2,y:5.8,skewY:180}},{t:this.shape_53,p:{scaleX:1.401,scaleY:1.401,y:5.8,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_51,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_50,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_49,p:{scaleX:1.401,scaleY:1.401,x:-1.2,y:5.8,skewY:180}},{t:this.shape_48,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_47,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_46,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_45,p:{scaleX:1.401,scaleY:1.401,x:-1.2,y:5.8,skewY:180}},{t:this.shape_44,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_43,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_42,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_41,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_40,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_39,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_38,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_37,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_36,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_35,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_34,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_33,p:{scaleX:1.401,scaleY:1.401,x:-1.2,y:5.8,skewY:180}},{t:this.shape_32,p:{scaleX:1.401,scaleY:1.401,x:-1.2,y:5.8,skewY:180}},{t:this.shape_31,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_30,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_29,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_28,p:{scaleX:1.401,scaleY:1.401,x:-1.2,y:5.8,skewY:180}},{t:this.shape_27,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_26,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_25,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_24,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_23,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_22,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_21,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_20,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_19,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_18,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_17,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_16,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_15,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_14,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_13,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_12,p:{scaleX:1.401,scaleY:1.401,y:5.8,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.401,scaleY:1.401,skewY:180,x:-1.2,y:5.8}},{t:this.shape_10,p:{scaleX:1.401,scaleY:1.401,x:-1.2,skewY:180,y:5.8}},{t:this.shape_9,p:{scaleX:1.401,scaleY:1.401,y:-3.9,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.2,scaleX:1.401,scaleY:1.401,y:0,regX:11.9,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.4,scaleY:1.4,rotation:0,y:7.3,x:7,skewY:135,skewX:-45}},{t:this.shape_7,p:{scaleX:1.4,scaleY:1.4,rotation:0,y:7.3,x:7,skewY:135,skewX:-45}},{t:this.shape_5,p:{scaleX:1.401,scaleY:1.401,x:-10.7,skewY:180,y:9.4}},{t:this.shape_4,p:{scaleX:1.401,scaleY:1.401,x:-13.6,y:2.4,skewY:180}},{t:this.shape_3,p:{scaleX:1.401,scaleY:1.401,x:-13.6,y:2.4,skewY:180}},{t:this.shape_2,p:{scaleX:1.401,scaleY:1.401,x:-14.8,y:2.5,skewY:180}},{t:this.shape_1,p:{scaleX:1.401,scaleY:1.401,x:-14.8,y:2.5,skewY:180}},{t:this.shape,p:{scaleX:1.401,scaleY:1.401,x:-14.8,skewY:180,y:2.5}}]},4).to({state:[]},3).to({state:[{t:this.shape_190,p:{scaleX:1.39,scaleY:1.39,x:-8,y:12.3}},{t:this.shape_189,p:{scaleX:1.39,scaleY:1.39,x:-8,y:12.3}},{t:this.shape_188,p:{scaleX:1.39,scaleY:1.39,x:-8,y:12.3}},{t:this.shape_187,p:{scaleX:1.39,scaleY:1.39,y:11.8,x:7.5}},{t:this.shape_186,p:{scaleX:1.39,scaleY:1.39,y:11.8}},{t:this.shape_185,p:{scaleX:1.39,scaleY:1.39,y:11.8,x:7.5}},{t:this.shape_184,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:5.1}},{t:this.shape_183,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:5}},{t:this.shape_182,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:5}},{t:this.shape_181,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:5.1}},{t:this.shape_180,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:5.1}},{t:this.shape_179,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:5.1}},{t:this.shape_178,p:{scaleX:1.39,scaleY:1.39,y:0.4}},{t:this.shape_177,p:{scaleX:1.39,scaleY:1.39,y:0.4,x:-0.6}},{t:this.shape_176,p:{scaleX:1.39,scaleY:1.39,x:7.1,y:0.8}},{t:this.shape_175,p:{scaleX:1.39,scaleY:1.39,y:0.8}},{t:this.shape_174,p:{scaleX:1.39,scaleY:1.39,x:-7.5,y:0.8}},{t:this.shape_173,p:{scaleX:1.39,scaleY:1.39,x:-7.5,y:0.8}},{t:this.shape_172,p:{scaleX:1.39,scaleY:1.39,y:9.5}},{t:this.shape_171,p:{scaleX:1.39,scaleY:1.39,y:-16.6}},{t:this.shape_170,p:{scaleX:1.39,scaleY:1.39,y:-16.6}},{t:this.shape_169,p:{scaleX:1.39,scaleY:1.39,x:12.9,y:-7.6}},{t:this.shape_168,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_167,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_166,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_165,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_164,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_163,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_162,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_161,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_160,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_159,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_158,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_157,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_156,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_155,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_154,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_43,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:5.3}},{t:this.shape_153,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:5.3}},{t:this.shape_152,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:5.3}},{t:this.shape_151,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_150,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_149,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_148,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_147,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_146,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_145,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_144,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_143,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_142,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_141,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_140,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_139,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_138,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_137,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_136,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_24,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:10.2,y:5.3}},{t:this.shape_135,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_22,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:10.2,y:5.3}},{t:this.shape_134,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_133,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_132,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_18,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:5.3}},{t:this.shape_17,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:5.3}},{t:this.shape_131,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_15,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:5.3}},{t:this.shape_130,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_129,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_128,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_127,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_126,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_125,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_124,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_123,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_122,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_121,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_120,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_119,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_118,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_117,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_116,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_115,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_114,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_113,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_112,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_111,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_110,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_109,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_41,p:{scaleX:1.39,scaleY:1.39,x:-10.3,skewY:0,y:6}},{t:this.shape_40,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:-10.3,y:6}},{t:this.shape_108,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_107,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_106,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_105,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_104,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_103,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_102,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_101,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_100,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_99,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_98,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_97,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_96,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_95,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_94,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_93,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_92,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_91,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_90,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_89,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_88,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_87,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_86,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_85,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_84,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_83,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_82,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_81,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_80,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_10,p:{scaleX:1.39,scaleY:1.39,x:-10.3,skewY:0,y:6}},{t:this.shape_79,p:{scaleX:1.39,scaleY:1.39,y:4.1,x:-0.3}},{t:this.shape_78,p:{scaleX:1.39,scaleY:1.39,y:4.1,x:-0.3}},{t:this.shape_77,p:{scaleX:1.39,scaleY:1.39,y:4.2}},{t:this.shape_76,p:{scaleX:1.39,scaleY:1.39,y:4.1}},{t:this.shape_75,p:{scaleX:1.39,scaleY:1.39,x:-8.2,y:-3.6}},{t:this.shape_74,p:{scaleX:1.39,scaleY:1.39,y:-3.5,x:8.1}},{t:this.shape_73,p:{scaleX:1.39,scaleY:1.39,x:-13.9,y:-7.3}},{t:this.shape_72,p:{scaleX:1.39,scaleY:1.39,y:10.3}}]},1).to({state:[{t:this.shape_190,p:{scaleX:1.379,scaleY:1.379,x:-7.9,y:10.5}},{t:this.shape_189,p:{scaleX:1.379,scaleY:1.379,x:-7.9,y:10.5}},{t:this.shape_188,p:{scaleX:1.379,scaleY:1.379,x:-7.9,y:10}},{t:this.shape_187,p:{scaleX:1.379,scaleY:1.379,y:12,x:7.5}},{t:this.shape_186,p:{scaleX:1.379,scaleY:1.379,y:12.1}},{t:this.shape_185,p:{scaleX:1.379,scaleY:1.379,y:12.1,x:7.5}},{t:this.shape_184,p:{scaleX:1.379,scaleY:1.379,x:13.4,y:4.6}},{t:this.shape_183,p:{scaleX:1.379,scaleY:1.379,x:13.4,y:4.5}},{t:this.shape_182,p:{scaleX:1.379,scaleY:1.379,x:13.4,y:4.6}},{t:this.shape_181,p:{scaleX:1.379,scaleY:1.379,x:-14,y:4.6}},{t:this.shape_180,p:{scaleX:1.379,scaleY:1.379,x:-14,y:4.6}},{t:this.shape_179,p:{scaleX:1.379,scaleY:1.379,x:-14,y:4.6}},{t:this.shape_178,p:{scaleX:1.379,scaleY:1.379,y:-0.1}},{t:this.shape_177,p:{scaleX:1.379,scaleY:1.379,y:-0.1,x:-0.6}},{t:this.shape_176,p:{scaleX:1.379,scaleY:1.379,x:7,y:0.3}},{t:this.shape_175,p:{scaleX:1.379,scaleY:1.379,y:0.3}},{t:this.shape_174,p:{scaleX:1.379,scaleY:1.379,x:-7.4,y:0.3}},{t:this.shape_173,p:{scaleX:1.379,scaleY:1.379,x:-7.4,y:0.3}},{t:this.shape_172,p:{scaleX:1.379,scaleY:1.379,y:9}},{t:this.shape_171,p:{scaleX:1.379,scaleY:1.379,y:-16.9}},{t:this.shape_170,p:{scaleX:1.379,scaleY:1.379,y:-16.9}},{t:this.shape_169,p:{scaleX:1.379,scaleY:1.379,x:12.8,y:-8}},{t:this.shape_168,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_167,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_166,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_165,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_164,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_163,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_162,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_161,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_160,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_159,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_158,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_157,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_156,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_155,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_154,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_43,p:{scaleX:1.379,scaleY:1.379,x:10,skewY:0,y:4.8}},{t:this.shape_153,p:{scaleX:1.379,scaleY:1.379,x:10,y:4.8}},{t:this.shape_152,p:{scaleX:1.379,scaleY:1.379,x:10,y:4.8}},{t:this.shape_151,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_150,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_149,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_148,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_147,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_146,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_145,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_144,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_143,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_142,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_141,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_140,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_139,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_138,p:{scaleX:1.379,scaleY:1.379,y:4.9,x:10.1}},{t:this.shape_137,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_136,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_24,p:{scaleX:1.379,scaleY:1.379,skewY:0,x:10.1,y:4.8}},{t:this.shape_135,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_22,p:{scaleX:1.379,scaleY:1.379,skewY:0,x:10.1,y:4.8}},{t:this.shape_134,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_133,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_132,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_18,p:{scaleX:1.379,scaleY:1.379,x:10.1,skewY:0,y:4.8}},{t:this.shape_17,p:{scaleX:1.379,scaleY:1.379,x:10.1,skewY:0,y:4.8}},{t:this.shape_131,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_15,p:{scaleX:1.379,scaleY:1.379,x:10,skewY:0,y:4.8}},{t:this.shape_130,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_129,p:{scaleX:1.379,scaleY:1.379,x:10.1,y:4.8}},{t:this.shape_128,p:{scaleX:1.379,scaleY:1.379,y:4.9,x:10.1}},{t:this.shape_127,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_126,p:{scaleX:1.379,scaleY:1.379,y:4.8,x:10.1}},{t:this.shape_125,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_124,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_123,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_122,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_121,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_120,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_119,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_118,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_117,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_116,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_115,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_114,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_113,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_112,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_111,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_110,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_109,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_41,p:{scaleX:1.379,scaleY:1.379,x:-10.2,skewY:0,y:5.5}},{t:this.shape_40,p:{scaleX:1.379,scaleY:1.379,skewY:0,x:-10.2,y:5.5}},{t:this.shape_108,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_107,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_106,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_105,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_104,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_103,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_102,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_101,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_100,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_99,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_98,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_97,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_96,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_95,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_94,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_93,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_92,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_91,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_90,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_89,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_88,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_87,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_86,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_85,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_84,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_83,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_82,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_81,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_80,p:{scaleX:1.379,scaleY:1.379,x:-10.2,y:5.5}},{t:this.shape_10,p:{scaleX:1.379,scaleY:1.379,x:-10.2,skewY:0,y:5.5}},{t:this.shape_79,p:{scaleX:1.379,scaleY:1.379,y:3.6,x:-0.3}},{t:this.shape_78,p:{scaleX:1.379,scaleY:1.379,y:3.6,x:-0.3}},{t:this.shape_77,p:{scaleX:1.379,scaleY:1.379,y:3.7}},{t:this.shape_76,p:{scaleX:1.379,scaleY:1.379,y:3.6}},{t:this.shape_75,p:{scaleX:1.379,scaleY:1.379,x:-8.1,y:-4}},{t:this.shape_74,p:{scaleX:1.379,scaleY:1.379,y:-3.9,x:8.1}},{t:this.shape_73,p:{scaleX:1.379,scaleY:1.379,x:-13.8,y:-7.7}},{t:this.shape_72,p:{scaleX:1.379,scaleY:1.379,y:9.8}}]},4).to({state:[{t:this.shape_190,p:{scaleX:1.389,scaleY:1.389,x:-8,y:12.4}},{t:this.shape_189,p:{scaleX:1.389,scaleY:1.389,x:-8,y:12.4}},{t:this.shape_188,p:{scaleX:1.389,scaleY:1.389,x:-8,y:11.9}},{t:this.shape_187,p:{scaleX:1.389,scaleY:1.389,y:10.1,x:7.5}},{t:this.shape_186,p:{scaleX:1.389,scaleY:1.389,y:10.1}},{t:this.shape_184,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:5.1}},{t:this.shape_183,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:5.1}},{t:this.shape_182,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:5.1}},{t:this.shape_181,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:5.2}},{t:this.shape_180,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:5.2}},{t:this.shape_179,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:5.2}},{t:this.shape_178,p:{scaleX:1.389,scaleY:1.389,y:0.4}},{t:this.shape_177,p:{scaleX:1.389,scaleY:1.389,y:0.5,x:-0.7}},{t:this.shape_176,p:{scaleX:1.389,scaleY:1.389,x:7.1,y:0.9}},{t:this.shape_175,p:{scaleX:1.389,scaleY:1.389,y:0.8}},{t:this.shape_174,p:{scaleX:1.389,scaleY:1.389,x:-7.5,y:0.9}},{t:this.shape_173,p:{scaleX:1.389,scaleY:1.389,x:-7.5,y:0.8}},{t:this.shape_172,p:{scaleX:1.389,scaleY:1.389,y:9.6}},{t:this.shape_171,p:{scaleX:1.389,scaleY:1.389,y:-16.5}},{t:this.shape_170,p:{scaleX:1.389,scaleY:1.389,y:-16.5}},{t:this.shape_169,p:{scaleX:1.389,scaleY:1.389,x:12.9,y:-7.5}},{t:this.shape_168,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_167,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_166,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_165,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_164,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_163,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_162,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_161,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_160,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_159,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_158,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_157,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_156,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_155,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_154,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_43,p:{scaleX:1.389,scaleY:1.389,x:10.1,skewY:0,y:5.4}},{t:this.shape_153,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_152,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_151,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_150,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_149,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_148,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_147,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_146,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_145,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_144,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_143,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_142,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_141,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_140,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_139,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_138,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_137,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_136,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_24,p:{scaleX:1.389,scaleY:1.389,skewY:0,x:10.1,y:5.4}},{t:this.shape_135,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_22,p:{scaleX:1.389,scaleY:1.389,skewY:0,x:10.1,y:5.4}},{t:this.shape_134,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_133,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_132,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_18,p:{scaleX:1.389,scaleY:1.389,x:10.1,skewY:0,y:5.4}},{t:this.shape_17,p:{scaleX:1.389,scaleY:1.389,x:10.1,skewY:0,y:5.4}},{t:this.shape_131,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_15,p:{scaleX:1.389,scaleY:1.389,x:10.1,skewY:0,y:5.4}},{t:this.shape_130,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:5.4}},{t:this.shape_129,p:{scaleX:1.389,scaleY:1.389,x:10.2,y:5.4}},{t:this.shape_128,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_127,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_126,p:{scaleX:1.389,scaleY:1.389,y:5.4,x:10.1}},{t:this.shape_125,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_124,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_123,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6}},{t:this.shape_122,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_121,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_120,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_119,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_118,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_117,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_116,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_115,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_114,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_113,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_112,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_111,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_110,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_109,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_41,p:{scaleX:1.389,scaleY:1.389,x:-10.3,skewY:0,y:6.1}},{t:this.shape_40,p:{scaleX:1.389,scaleY:1.389,skewY:0,x:-10.3,y:6.1}},{t:this.shape_108,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_107,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_106,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_105,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_104,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_103,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_102,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_101,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_100,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_99,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_98,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_97,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_96,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_95,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_94,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_93,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_92,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_91,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_90,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_89,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_88,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_87,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_86,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_85,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_84,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_83,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_82,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_81,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_80,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:6.1}},{t:this.shape_10,p:{scaleX:1.389,scaleY:1.389,x:-10.3,skewY:0,y:6.1}},{t:this.shape_79,p:{scaleX:1.389,scaleY:1.389,y:4.2,x:-0.3}},{t:this.shape_78,p:{scaleX:1.389,scaleY:1.389,y:4.2,x:-0.3}},{t:this.shape_77,p:{scaleX:1.389,scaleY:1.389,y:4.2}},{t:this.shape_76,p:{scaleX:1.389,scaleY:1.389,y:4.2}},{t:this.shape_75,p:{scaleX:1.389,scaleY:1.389,x:-8.2,y:-3.5}},{t:this.shape_74,p:{scaleX:1.389,scaleY:1.389,y:-3.4,x:8.1}},{t:this.shape_73,p:{scaleX:1.389,scaleY:1.389,x:-13.9,y:-7.2}},{t:this.shape_72,p:{scaleX:1.389,scaleY:1.389,y:10.4}}]},4).to({state:[]},3).to({state:[{t:this.shape_206,p:{scaleX:1.378,scaleY:1.378,x:-7.9,y:11.9}},{t:this.shape_205,p:{scaleX:1.378,scaleY:1.378,x:-7.9,y:11.9}},{t:this.shape_204,p:{scaleX:1.378,scaleY:1.378,x:-7.9,y:11.9}},{t:this.shape_203,p:{scaleX:1.378,scaleY:1.378,x:7.4,y:11.3}},{t:this.shape_202,p:{scaleX:1.378,scaleY:1.378,x:7.4,y:11.4}},{t:this.shape_201,p:{scaleX:1.378,scaleY:1.378,y:11.4,x:7.5}},{t:this.shape_200,p:{scaleX:1.378,scaleY:1.378,x:13.4,y:4.7}},{t:this.shape_199,p:{scaleX:1.378,scaleY:1.378,x:13.4,y:4.6}},{t:this.shape_198,p:{scaleX:1.378,scaleY:1.378,x:13.4,y:4.7}},{t:this.shape_197,p:{scaleX:1.378,scaleY:1.378,x:-14.1,y:4.7}},{t:this.shape_196,p:{scaleX:1.378,scaleY:1.378,x:-14,y:4.7}},{t:this.shape_195,p:{scaleX:1.378,scaleY:1.378,x:-14,y:4.8}},{t:this.shape_194,p:{scaleX:1.378,scaleY:1.378,y:0}},{t:this.shape_193,p:{scaleX:1.378,scaleY:1.378,y:0}},{t:this.shape_192,p:{scaleX:1.378,scaleY:1.378,y:-16.8}},{t:this.shape_191,p:{scaleX:1.378,scaleY:1.378,y:-16.8}}]},1).to({state:[{t:this.shape_206,p:{scaleX:1.388,scaleY:1.388,x:-8,y:10.9}},{t:this.shape_205,p:{scaleX:1.388,scaleY:1.388,x:-8,y:10.9}},{t:this.shape_204,p:{scaleX:1.388,scaleY:1.388,x:-8,y:10.9}},{t:this.shape_203,p:{scaleX:1.388,scaleY:1.388,x:7.5,y:12.1}},{t:this.shape_202,p:{scaleX:1.388,scaleY:1.388,x:7.5,y:12.1}},{t:this.shape_201,p:{scaleX:1.388,scaleY:1.388,y:12.1,x:7.5}},{t:this.shape_200,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:4.9}},{t:this.shape_199,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:4.8}},{t:this.shape_198,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:4.9}},{t:this.shape_197,p:{scaleX:1.388,scaleY:1.388,x:-14.2,y:4.9}},{t:this.shape_196,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:4.9}},{t:this.shape_195,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:4.9}},{t:this.shape_194,p:{scaleX:1.388,scaleY:1.388,y:0.1}},{t:this.shape_193,p:{scaleX:1.388,scaleY:1.388,y:0.2}},{t:this.shape_192,p:{scaleX:1.388,scaleY:1.388,y:-16.8}},{t:this.shape_191,p:{scaleX:1.388,scaleY:1.388,y:-16.8}}]},4).to({state:[{t:this.shape_206,p:{scaleX:1.37,scaleY:1.37,x:-7.9,y:12.4}},{t:this.shape_205,p:{scaleX:1.37,scaleY:1.37,x:-7.9,y:12.4}},{t:this.shape_204,p:{scaleX:1.37,scaleY:1.37,x:-7.9,y:12.4}},{t:this.shape_203,p:{scaleX:1.37,scaleY:1.37,x:7.4,y:10.4}},{t:this.shape_202,p:{scaleX:1.37,scaleY:1.37,x:7.4,y:10.4}},{t:this.shape_201,p:{scaleX:1.37,scaleY:1.37,y:10.4,x:7.4}},{t:this.shape_200,p:{scaleX:1.37,scaleY:1.37,x:13.3,y:4.7}},{t:this.shape_199,p:{scaleX:1.37,scaleY:1.37,x:13.3,y:4.7}},{t:this.shape_198,p:{scaleX:1.37,scaleY:1.37,x:13.3,y:4.7}},{t:this.shape_197,p:{scaleX:1.37,scaleY:1.37,x:-14,y:4.8}},{t:this.shape_196,p:{scaleX:1.37,scaleY:1.37,x:-14,y:4.7}},{t:this.shape_195,p:{scaleX:1.37,scaleY:1.37,x:-13.9,y:4.8}},{t:this.shape_194,p:{scaleX:1.37,scaleY:1.37,y:0}},{t:this.shape_193,p:{scaleX:1.37,scaleY:1.37,y:0}},{t:this.shape_192,p:{scaleX:1.37,scaleY:1.37,y:-16.7}},{t:this.shape_191,p:{scaleX:1.37,scaleY:1.37,y:-16.7}}]},4).to({state:[]},3).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:11,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:11,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:11,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:11.8,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:11.8,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,skewY:0,x:-4.9,y:11.8,scaleY:1.387}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-0.5,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-0.5,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-17.6,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-17.6,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-8.4,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:-0.1,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:-0.1,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:5.2,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.2}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.2}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.2}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:5.2,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:5.2,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.1}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.1}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.2}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:5.2,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.2}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.1}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.2}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:5.2,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.1}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.2}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.2}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.2}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.1}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.2}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:5.2,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:5.2,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.1}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.1}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:5.2,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.1}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.1}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.2}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.1}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.2}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.2}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.1}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.1}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.2}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.2}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.1}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:5.2,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.2}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.1}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-4.4,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.6,scaleX:1.387,scaleY:1.387,y:0.4,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.387,scaleY:1.387,rotation:0,y:6.4,x:-6.5,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.387,scaleY:1.387,rotation:0,y:6.4,x:-6.5,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-6.5,y:6.4,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:8.7}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:1.8,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:1.8,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:1.9,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:1.9,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:1.8}}]},1).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:3.2,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:3.2,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:3.2,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:3.9,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:3.9,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,skewY:0,x:-4.9,y:3.9,scaleY:1.387}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-8.4,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-8.4,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-25.4,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-25.4,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-16.2,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:-8,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:-8,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-2.7,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-2.7,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:-2.7,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-2.7,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-2.7,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-2.7,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-2.7,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-2.7,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.7}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:-2.7,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.7}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.7}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-12.3,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.2,scaleX:1.387,scaleY:1.387,y:-8.6,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.387,scaleY:1.387,rotation:22,y:-1.6,x:-7.6,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.387,scaleY:1.387,rotation:22,y:-1.6,x:-7.6,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.387,scaleY:1.387,rotation:23.7,x:-7.8,y:-2.1,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:0.9}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-6.1,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-6.1,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-6,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-6,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:-6}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:-5.2,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-5.2,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-5.2,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-4.5,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-4.5,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,skewY:0,x:-4.9,y:-4.5,scaleY:1.387}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-16.8,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-16.8,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-33.8,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-33.8,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-24.6,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:-16.4,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:-16.4,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-11.1,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-11.1,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:-11.1,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-11.1,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-11.1,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-11.1,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-11.1,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-11.1,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:-11.1,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-20.7,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.3,scaleX:1.387,scaleY:1.387,y:-16.4,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.387,scaleY:1.387,rotation:40.7,y:-11.1,x:-8.4,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.387,scaleY:1.387,rotation:40.7,y:-11.1,x:-8.4,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.387,scaleY:1.387,rotation:45,x:-8.6,y:-11,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:-7.5}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-14.5,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-14.5,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-14.4,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-14.4,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:-14.4}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:-13.2,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-13.2,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-13.2,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-12.5,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-12.5,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,skewY:0,x:-4.9,y:-12.5,scaleY:1.387}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-24.8,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-24.8,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-41.8,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-41.8,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-32.6,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:-24.4,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:-24.4,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-19.1,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-19.1,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:-19.1,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-19.1,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-19.1,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-19.1,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-19.1,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-19.1,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:-19.1,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-28.7,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.6,scaleX:1.387,scaleY:1.387,y:-24.3,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.386,scaleY:1.386,rotation:67.4,y:-20.7,x:-9.6,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.386,scaleY:1.386,rotation:67.4,y:-21,x:-9.3,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.386,scaleY:1.386,rotation:69.7,x:-9.1,y:-20.8,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:-15.5}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-22.5,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-22.5,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-22.4,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-22.4,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:-22.4}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:-21.4,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-21.3,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:-21.4,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-20.6,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-20.6,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,skewY:0,x:-4.9,y:-20.6,scaleY:1.387}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-32.9,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-32.9,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-50,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-50,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-40.8,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:-32.5,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:-32.5,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-27.2,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-27.2,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:-27.2,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.3}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-27.2,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.3}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-27.2,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.3}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-27.2,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-27.2,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.3}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.2}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-27.2,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.3}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.3}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.3}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.3}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-27.2}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.3}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:-27.2,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-27.2}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-27.3}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-36.8,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.5,scaleX:1.387,scaleY:1.387,y:-32.7,regX:12,x:1.9,skewY:0}},{t:this.shape_8,p:{scaleX:1.387,scaleY:1.387,rotation:90,y:-29.4,x:-9.4,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.386,scaleY:1.386,rotation:90,y:-29.9,x:-9.7,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.386,scaleY:1.386,rotation:90,x:-9.7,y:-29.9,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:-23.7}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-30.6,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-30.6,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-30.5,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-30.5,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:-30.6}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:-13.2,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-13.2,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-13.2,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-12.5,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-12.5,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,skewY:0,x:-4.9,y:-12.5,scaleY:1.387}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-24.8,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-24.8,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-41.8,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-41.8,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-32.6,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:-24.4,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:-24.4,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-19.1,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-19.1,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:-19.1,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-19.1,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-19.1,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-19.1,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-19.1,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-19.1,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-19.1}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:-19.1,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-19.1}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-19.1}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-28.7,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.5,scaleX:1.387,scaleY:1.387,y:-24.2,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.387,scaleY:1.387,rotation:67.4,y:-20.9,x:-9.6,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.386,scaleY:1.386,rotation:67.4,y:-21.1,x:-9.3,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.387,scaleY:1.386,rotation:69.7,x:-9.1,y:-20.8,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:-15.5}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-22.5,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-22.5,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-22.4,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-22.4,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:-22.4}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:-5.2,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-5.2,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:-5.2,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-4.4,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:-4.4,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,skewY:0,x:-4.9,y:-4.4,scaleY:1.387}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-16.7,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-16.7,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-33.8,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-33.8,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-24.6,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:-16.3,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:-16.3,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-11,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-11,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:-11,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-11,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-11,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-11,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-11,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-11,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11.1}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-11}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11.1}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:-11,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-11}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-11.1}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-20.6,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.3,scaleX:1.387,scaleY:1.387,y:-16.4,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.387,scaleY:1.387,rotation:40.7,y:-11.3,x:-8.4,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.387,scaleY:1.387,rotation:40.7,y:-11.3,x:-8.4,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.387,scaleY:1.387,rotation:45,x:-8.6,y:-11.1,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:-7.5}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-14.4,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-14.4,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-14.3,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-14.3,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:-14.4}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:3.4,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:3.4,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:3.4,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:4.1,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:4.1,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,skewY:0,x:-4.9,y:4.1,scaleY:1.387}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-8.2,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-8.2,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-25.2,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-25.2,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-16,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:-7.8,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:-7.8,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-2.5,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-2.5,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:-2.5,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:-2.5,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-2.5,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-2.5,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-2.5,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:-2.5,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:-2.5}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:-2.5,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:-2.5}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:-2.5}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-12.1,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.3,scaleX:1.387,scaleY:1.387,y:-8.1,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.387,scaleY:1.387,rotation:22,y:-1.8,x:-7.6,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.387,scaleY:1.387,rotation:22,y:-1.8,x:-7.6,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.387,scaleY:1.387,rotation:23.7,x:-7.7,y:-1.8,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:1.1}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-5.9,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-5.9,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-5.8,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:-5.8,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:-5.8}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.9,y:11.5,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:11.5,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:2.8,y:11.5,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:12.2,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-4.9,y:12.2,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.387,skewY:0,x:-4.9,y:12.2,scaleY:1.387}},{t:this.shape_65,p:{scaleX:1.387,scaleY:1.387,y:-0.1,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.387,scaleY:1.387,y:-0.1,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.387,scaleY:1.387,y:-17.1,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.387,scaleY:1.387,y:-17.1,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.387,scaleY:1.387,y:-7.9,skewY:0,x:-14}},{t:this.shape_60,p:{scaleX:1.387,scaleY:1.387,y:0.3,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.387,scaleY:1.387,y:0.3,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:5.6,skewY:0}},{t:this.shape_57,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_56,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_55,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_54,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:5.6,skewY:0}},{t:this.shape_53,p:{scaleX:1.387,scaleY:1.387,y:5.6,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_51,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_50,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_49,p:{scaleX:1.387,scaleY:1.387,x:1.2,y:5.6,skewY:0}},{t:this.shape_48,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_47,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_46,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_45,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:5.6,skewY:0}},{t:this.shape_44,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_42,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_39,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_38,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_37,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_36,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_35,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_34,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_33,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:5.6,skewY:0}},{t:this.shape_32,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:5.6,skewY:0}},{t:this.shape_31,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_30,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_29,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_28,p:{scaleX:1.387,scaleY:1.387,x:1.1,y:5.6,skewY:0}},{t:this.shape_27,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_26,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_25,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_23,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_21,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_20,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_19,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_16,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:1.1,skewY:0,y:5.6}},{t:this.shape_14,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_13,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_12,p:{scaleX:1.387,scaleY:1.387,y:5.6,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:1.2,y:5.6}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:1.2,skewY:0,y:5.6}},{t:this.shape_9,p:{scaleX:1.387,scaleY:1.387,y:-4,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.4,scaleX:1.387,scaleY:1.387,y:0.2,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.387,scaleY:1.387,rotation:0,y:6.8,x:-6.5,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.387,scaleY:1.387,rotation:0,y:6.8,x:-6.5,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.387,scaleY:1.387,rotation:0,x:-6.5,y:6.9,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.387,scaleY:1.387,x:10.6,skewY:0,y:9.2}},{t:this.shape_4,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:2.2,skewY:0}},{t:this.shape_3,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:2.2,skewY:0}},{t:this.shape_2,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:2.3,skewY:0}},{t:this.shape_1,p:{scaleX:1.387,scaleY:1.387,x:14.6,y:2.3,skewY:0}},{t:this.shape,p:{scaleX:1.387,scaleY:1.387,x:14.7,skewY:0,y:2.3}}]},3).to({state:[]},2).to({state:[{t:this.shape_71,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:-2.8,y:11.5,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:-2.8,y:11.5,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:-2.8,y:11.5,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:5,y:12.2,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:5,y:12.2,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.385,skewY:180,x:5,y:12.2,scaleY:1.385}},{t:this.shape_65,p:{scaleX:1.385,scaleY:1.385,y:-0.1,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.385,scaleY:1.385,y:-0.1,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.385,scaleY:1.385,y:-17.1,skewY:180,x:0.8}},{t:this.shape_62,p:{scaleX:1.385,scaleY:1.385,y:-17.1,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.385,scaleY:1.385,y:-7.9,skewY:180,x:14}},{t:this.shape_60,p:{scaleX:1.385,scaleY:1.385,y:0.4,x:-3.9,skewY:180}},{t:this.shape_59,p:{scaleX:1.385,scaleY:1.385,y:0.4,x:-3.9,skewY:180}},{t:this.shape_58,p:{scaleX:1.385,scaleY:1.385,x:-1.1,y:5.7,skewY:180}},{t:this.shape_57,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_56,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_55,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_54,p:{scaleX:1.385,scaleY:1.385,x:-1.1,y:5.6,skewY:180}},{t:this.shape_53,p:{scaleX:1.385,scaleY:1.385,y:5.6,skewY:180,x:-1.1}},{t:this.shape_52,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_51,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_50,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_49,p:{scaleX:1.385,scaleY:1.385,x:-1.1,y:5.6,skewY:180}},{t:this.shape_48,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_47,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_46,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.1,y:5.6}},{t:this.shape_45,p:{scaleX:1.385,scaleY:1.385,x:-1.1,y:5.6,skewY:180}},{t:this.shape_44,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_43,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_42,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.1,y:5.6}},{t:this.shape_41,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_40,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.1,y:5.6}},{t:this.shape_39,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_38,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_37,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_36,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_35,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_34,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_33,p:{scaleX:1.385,scaleY:1.385,x:-1.1,y:5.6,skewY:180}},{t:this.shape_32,p:{scaleX:1.385,scaleY:1.385,x:-1.1,y:5.6,skewY:180}},{t:this.shape_31,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.1,y:5.6}},{t:this.shape_30,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.1,y:5.6}},{t:this.shape_29,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_28,p:{scaleX:1.385,scaleY:1.385,x:-1.1,y:5.7,skewY:180}},{t:this.shape_27,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_26,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_25,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_24,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_23,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_22,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_21,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_20,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_19,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_18,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_17,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_16,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_15,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_14,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.2,y:5.6}},{t:this.shape_13,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.1,y:5.6}},{t:this.shape_12,p:{scaleX:1.385,scaleY:1.385,y:5.6,skewY:180,x:-1.1}},{t:this.shape_11,p:{scaleX:1.385,scaleY:1.385,skewY:180,x:-1.1,y:5.6}},{t:this.shape_10,p:{scaleX:1.385,scaleY:1.385,x:-1.1,skewY:180,y:5.6}},{t:this.shape_9,p:{scaleX:1.385,scaleY:1.385,y:-4,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.5,scaleX:1.385,scaleY:1.385,y:0.3,regX:11.9,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.385,scaleY:1.385,rotation:0,y:6.8,x:6.5,skewY:180,skewX:0}},{t:this.shape_7,p:{scaleX:1.385,scaleY:1.385,rotation:0,y:6.8,x:6.5,skewY:180,skewX:0}},{t:this.shape_6,p:{scaleX:1.385,scaleY:1.385,rotation:0,x:6.5,y:6.9,skewY:180,skewX:0}},{t:this.shape_5,p:{scaleX:1.385,scaleY:1.385,x:-10.6,skewY:180,y:9.2}},{t:this.shape_4,p:{scaleX:1.385,scaleY:1.385,x:-13.4,y:2.2,skewY:180}},{t:this.shape_3,p:{scaleX:1.385,scaleY:1.385,x:-13.4,y:2.3,skewY:180}},{t:this.shape_2,p:{scaleX:1.385,scaleY:1.385,x:-14.6,y:2.4,skewY:180}},{t:this.shape_1,p:{scaleX:1.385,scaleY:1.385,x:-14.5,y:2.3,skewY:180}},{t:this.shape,p:{scaleX:1.385,scaleY:1.385,x:-14.6,skewY:180,y:2.3}}]},1).to({state:[{t:this.shape_71,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:2.8,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:2.8,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:2.8,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:4.9,y:3.5,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:4.9,y:3.5,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.388,skewY:180,x:4.9,y:3.5,scaleY:1.388}},{t:this.shape_65,p:{scaleX:1.388,scaleY:1.388,y:-8.8,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.388,scaleY:1.388,y:-8.8,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.388,scaleY:1.388,y:-25.9,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.388,scaleY:1.388,y:-25.9,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.388,scaleY:1.388,y:-16.7,skewY:180,x:14}},{t:this.shape_60,p:{scaleX:1.388,scaleY:1.388,y:-8.4,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.388,scaleY:1.388,y:-8.4,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-3.1,skewY:180}},{t:this.shape_57,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_56,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_55,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_54,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-3.1,skewY:180}},{t:this.shape_53,p:{scaleX:1.388,scaleY:1.388,y:-3.1,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_51,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_50,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_49,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-3.1,skewY:180}},{t:this.shape_48,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_47,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_46,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_45,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-3.1,skewY:180}},{t:this.shape_44,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_43,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_42,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_41,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_40,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_39,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_38,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_37,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_36,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_35,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_34,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_33,p:{scaleX:1.388,scaleY:1.388,x:-1.1,y:-3.1,skewY:180}},{t:this.shape_32,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-3.1,skewY:180}},{t:this.shape_31,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_30,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_29,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_28,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-3.1,skewY:180}},{t:this.shape_27,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_26,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_25,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_24,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_23,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_22,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_21,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_20,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_19,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_18,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_17,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_16,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_15,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_14,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_13,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_12,p:{scaleX:1.388,scaleY:1.388,y:-3.1,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-3.1}},{t:this.shape_10,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-3.1}},{t:this.shape_9,p:{scaleX:1.388,scaleY:1.388,y:-12.7,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.2,scaleX:1.388,scaleY:1.388,y:-8.4,regX:11.9,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.388,scaleY:1.388,rotation:0,y:-1.7,x:7.7,skewY:158,skewX:-22}},{t:this.shape_7,p:{scaleX:1.388,scaleY:1.388,rotation:0,y:-1.7,x:7.7,skewY:158,skewX:-22}},{t:this.shape_6,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:7.8,y:-2,skewY:156.3,skewX:-23.7}},{t:this.shape_5,p:{scaleX:1.388,scaleY:1.388,x:-10.6,skewY:180,y:0.5}},{t:this.shape_4,p:{scaleX:1.388,scaleY:1.388,x:-13.5,y:-6.5,skewY:180}},{t:this.shape_3,p:{scaleX:1.388,scaleY:1.388,x:-13.5,y:-6.5,skewY:180}},{t:this.shape_2,p:{scaleX:1.388,scaleY:1.388,x:-14.6,y:-6.4,skewY:180}},{t:this.shape_1,p:{scaleX:1.388,scaleY:1.388,x:-14.6,y:-6.4,skewY:180}},{t:this.shape,p:{scaleX:1.388,scaleY:1.388,x:-14.7,skewY:180,y:-6.4}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:-5.3,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:-5.3,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:-5.3,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:4.9,y:-4.6,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:4.9,y:-4.6,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.388,skewY:180,x:4.9,y:-4.6,scaleY:1.388}},{t:this.shape_65,p:{scaleX:1.388,scaleY:1.388,y:-16.9,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.388,scaleY:1.388,y:-16.9,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.388,scaleY:1.388,y:-34,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.388,scaleY:1.388,y:-34,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.388,scaleY:1.388,y:-24.8,skewY:180,x:14}},{t:this.shape_60,p:{scaleX:1.388,scaleY:1.388,y:-16.5,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.388,scaleY:1.388,y:-16.5,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-11.2,skewY:180}},{t:this.shape_57,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_56,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_55,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_54,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-11.2,skewY:180}},{t:this.shape_53,p:{scaleX:1.388,scaleY:1.388,y:-11.2,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_51,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_50,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_49,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-11.2,skewY:180}},{t:this.shape_48,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_47,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_46,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_45,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-11.2,skewY:180}},{t:this.shape_44,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_43,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_42,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_41,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_40,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_39,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_38,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_37,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_36,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_35,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_34,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_33,p:{scaleX:1.388,scaleY:1.388,x:-1.1,y:-11.2,skewY:180}},{t:this.shape_32,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-11.2,skewY:180}},{t:this.shape_31,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_30,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_29,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_28,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-11.2,skewY:180}},{t:this.shape_27,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_26,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_25,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_24,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_23,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_22,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_21,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_20,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_19,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_18,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_17,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_16,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_15,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_14,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_13,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_12,p:{scaleX:1.388,scaleY:1.388,y:-11.2,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-11.2}},{t:this.shape_10,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-11.2}},{t:this.shape_9,p:{scaleX:1.388,scaleY:1.388,y:-20.8,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.3,scaleX:1.388,scaleY:1.388,y:-16.3,regX:11.9,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.388,scaleY:1.388,rotation:0,y:-11.4,x:8.4,skewY:139.3,skewX:-40.7}},{t:this.shape_7,p:{scaleX:1.388,scaleY:1.388,rotation:0,y:-11.4,x:8.4,skewY:139.3,skewX:-40.7}},{t:this.shape_6,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:8.6,y:-11.2,skewY:135,skewX:-45}},{t:this.shape_5,p:{scaleX:1.388,scaleY:1.388,x:-10.6,skewY:180,y:-7.6}},{t:this.shape_4,p:{scaleX:1.388,scaleY:1.388,x:-13.5,y:-14.6,skewY:180}},{t:this.shape_3,p:{scaleX:1.388,scaleY:1.388,x:-13.5,y:-14.6,skewY:180}},{t:this.shape_2,p:{scaleX:1.388,scaleY:1.388,x:-14.6,y:-14.5,skewY:180}},{t:this.shape_1,p:{scaleX:1.388,scaleY:1.388,x:-14.6,y:-14.5,skewY:180}},{t:this.shape,p:{scaleX:1.388,scaleY:1.388,x:-14.7,skewY:180,y:-14.5}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:-12.6,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:-12.6,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:-2.9,y:-12.6,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:4.9,y:-11.9,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:4.9,y:-11.9,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.388,skewY:180,x:4.9,y:-11.9,scaleY:1.388}},{t:this.shape_65,p:{scaleX:1.388,scaleY:1.388,y:-24.2,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.388,scaleY:1.388,y:-24.2,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.388,scaleY:1.388,y:-41.3,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.388,scaleY:1.388,y:-41.3,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.388,scaleY:1.388,y:-32.1,skewY:180,x:14}},{t:this.shape_60,p:{scaleX:1.388,scaleY:1.388,y:-23.8,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.388,scaleY:1.388,y:-23.8,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-18.5,skewY:180}},{t:this.shape_57,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_56,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_55,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_54,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-18.5,skewY:180}},{t:this.shape_53,p:{scaleX:1.388,scaleY:1.388,y:-18.5,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_51,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_50,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_49,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-18.5,skewY:180}},{t:this.shape_48,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_47,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_46,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_45,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-18.5,skewY:180}},{t:this.shape_44,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_43,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_42,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_41,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_40,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_39,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_38,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_37,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_36,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_35,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_34,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_33,p:{scaleX:1.388,scaleY:1.388,x:-1.1,y:-18.5,skewY:180}},{t:this.shape_32,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-18.5,skewY:180}},{t:this.shape_31,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_30,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_29,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_28,p:{scaleX:1.388,scaleY:1.388,x:-1.2,y:-18.5,skewY:180}},{t:this.shape_27,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_26,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_25,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_24,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_23,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_22,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_21,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_20,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_19,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_18,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_17,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_16,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_15,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_14,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_13,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_12,p:{scaleX:1.388,scaleY:1.388,y:-18.5,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.388,scaleY:1.388,skewY:180,x:-1.2,y:-18.5}},{t:this.shape_10,p:{scaleX:1.388,scaleY:1.388,x:-1.2,skewY:180,y:-18.5}},{t:this.shape_9,p:{scaleX:1.388,scaleY:1.388,y:-28.1,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.1,scaleX:1.388,scaleY:1.388,y:-24.7,regX:11.9,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.388,scaleY:1.388,rotation:0,y:-20.3,x:9.6,skewY:112.6,skewX:-67.4}},{t:this.shape_7,p:{scaleX:1.388,scaleY:1.388,rotation:0,y:-20.6,x:9.3,skewY:112.6,skewX:-67.4}},{t:this.shape_6,p:{scaleX:1.388,scaleY:1.388,rotation:0,x:9.2,y:-20.4,skewY:110.3,skewX:-69.7}},{t:this.shape_5,p:{scaleX:1.388,scaleY:1.388,x:-10.6,skewY:180,y:-14.9}},{t:this.shape_4,p:{scaleX:1.388,scaleY:1.388,x:-13.5,y:-21.9,skewY:180}},{t:this.shape_3,p:{scaleX:1.388,scaleY:1.388,x:-13.5,y:-21.9,skewY:180}},{t:this.shape_2,p:{scaleX:1.388,scaleY:1.388,x:-14.6,y:-21.8,skewY:180}},{t:this.shape_1,p:{scaleX:1.388,scaleY:1.388,x:-14.6,y:-21.8,skewY:180}},{t:this.shape,p:{scaleX:1.388,scaleY:1.388,x:-14.7,skewY:180,y:-21.8}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.384,scaleY:1.384,rotation:0,x:-2.9,y:-21.5,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.384,scaleY:1.384,rotation:0,x:-2.9,y:-21.5,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.384,scaleY:1.384,rotation:0,x:-2.9,y:-21.5,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.384,scaleY:1.384,rotation:0,x:4.9,y:-20.8,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.384,scaleY:1.384,rotation:0,x:4.9,y:-20.8,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.384,skewY:180,x:4.9,y:-20.8,scaleY:1.384}},{t:this.shape_65,p:{scaleX:1.384,scaleY:1.384,y:-33.1,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.384,scaleY:1.384,y:-33.1,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.384,scaleY:1.384,y:-50.1,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.384,scaleY:1.384,y:-50.1,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.384,scaleY:1.384,y:-40.9,skewY:180,x:13.9}},{t:this.shape_60,p:{scaleX:1.384,scaleY:1.384,y:-32.7,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.384,scaleY:1.384,y:-32.7,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.384,scaleY:1.384,x:-1.2,y:-27.4,skewY:180}},{t:this.shape_57,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_56,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_55,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_54,p:{scaleX:1.384,scaleY:1.384,x:-1.2,y:-27.4,skewY:180}},{t:this.shape_53,p:{scaleX:1.384,scaleY:1.384,y:-27.4,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_51,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_50,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_49,p:{scaleX:1.384,scaleY:1.384,x:-1.2,y:-27.4,skewY:180}},{t:this.shape_48,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_47,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_46,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_45,p:{scaleX:1.384,scaleY:1.384,x:-1.2,y:-27.4,skewY:180}},{t:this.shape_44,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_43,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_42,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_41,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_40,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_39,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_38,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_37,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_36,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_35,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_34,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_33,p:{scaleX:1.384,scaleY:1.384,x:-1.1,y:-27.4,skewY:180}},{t:this.shape_32,p:{scaleX:1.384,scaleY:1.384,x:-1.2,y:-27.4,skewY:180}},{t:this.shape_31,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_30,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_29,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_28,p:{scaleX:1.384,scaleY:1.384,x:-1.2,y:-27.4,skewY:180}},{t:this.shape_27,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_26,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_25,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_24,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_23,p:{scaleX:1.384,scaleY:1.384,x:-1.1,skewY:180,y:-27.4}},{t:this.shape_22,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_21,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_20,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_19,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_18,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_17,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_16,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_15,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_14,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_13,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_12,p:{scaleX:1.384,scaleY:1.384,y:-27.4,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.384,scaleY:1.384,skewY:180,x:-1.2,y:-27.4}},{t:this.shape_10,p:{scaleX:1.384,scaleY:1.384,x:-1.2,skewY:180,y:-27.4}},{t:this.shape_9,p:{scaleX:1.384,scaleY:1.384,y:-37,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.7,scaleX:1.384,scaleY:1.384,y:-32.4,regX:12,x:-2,skewY:180}},{t:this.shape_8,p:{scaleX:1.384,scaleY:1.384,rotation:0,y:-29.9,x:9.3,skewY:90,skewX:-90}},{t:this.shape_7,p:{scaleX:1.383,scaleY:1.383,rotation:0,y:-30.1,x:9.6,skewY:90,skewX:-90}},{t:this.shape_6,p:{scaleX:1.383,scaleY:1.383,rotation:0,x:9.6,y:-30.1,skewY:90,skewX:-90}},{t:this.shape_5,p:{scaleX:1.384,scaleY:1.384,x:-10.6,skewY:180,y:-23.8}},{t:this.shape_4,p:{scaleX:1.384,scaleY:1.384,x:-13.5,y:-30.8,skewY:180}},{t:this.shape_3,p:{scaleX:1.384,scaleY:1.384,x:-13.5,y:-30.7,skewY:180}},{t:this.shape_2,p:{scaleX:1.384,scaleY:1.384,x:-14.6,y:-30.7,skewY:180}},{t:this.shape_1,p:{scaleX:1.384,scaleY:1.384,x:-14.6,y:-30.7,skewY:180}},{t:this.shape,p:{scaleX:1.384,scaleY:1.384,x:-14.7,skewY:180,y:-30.7}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.392,scaleY:1.392,rotation:0,x:-2.8,y:-14.1,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.392,scaleY:1.392,rotation:0,x:-2.8,y:-14,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.392,scaleY:1.392,rotation:0,x:-2.8,y:-14.1,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.392,scaleY:1.392,rotation:0,x:5,y:-13.3,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.392,scaleY:1.392,rotation:0,x:5.1,y:-13.3,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.392,skewY:180,x:5,y:-13.3,scaleY:1.392}},{t:this.shape_65,p:{scaleX:1.392,scaleY:1.392,y:-25.7,skewY:180,x:0.9}},{t:this.shape_64,p:{scaleX:1.392,scaleY:1.392,y:-25.7,skewY:180,x:0.9}},{t:this.shape_63,p:{scaleX:1.392,scaleY:1.392,y:-42.8,skewY:180,x:0.8}},{t:this.shape_62,p:{scaleX:1.392,scaleY:1.392,y:-42.8,skewY:180,x:0.8}},{t:this.shape_61,p:{scaleX:1.392,scaleY:1.392,y:-33.5,skewY:180,x:14.1}},{t:this.shape_60,p:{scaleX:1.392,scaleY:1.392,y:-25.2,x:-3.9,skewY:180}},{t:this.shape_59,p:{scaleX:1.392,scaleY:1.392,y:-25.2,x:-3.9,skewY:180}},{t:this.shape_58,p:{scaleX:1.392,scaleY:1.392,x:-1.1,y:-19.9,skewY:180}},{t:this.shape_57,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_56,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_55,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_54,p:{scaleX:1.392,scaleY:1.392,x:-1.1,y:-19.9,skewY:180}},{t:this.shape_53,p:{scaleX:1.392,scaleY:1.392,y:-19.9,skewY:180,x:-1.1}},{t:this.shape_52,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_51,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_50,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_49,p:{scaleX:1.392,scaleY:1.392,x:-1.1,y:-19.9,skewY:180}},{t:this.shape_48,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_47,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_46,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-19.9}},{t:this.shape_45,p:{scaleX:1.392,scaleY:1.392,x:-1.1,y:-19.9,skewY:180}},{t:this.shape_44,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_43,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_42,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-20}},{t:this.shape_41,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_40,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-19.9}},{t:this.shape_39,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_38,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_37,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_36,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_35,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_34,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_33,p:{scaleX:1.392,scaleY:1.392,x:-1,y:-19.9,skewY:180}},{t:this.shape_32,p:{scaleX:1.392,scaleY:1.392,x:-1.1,y:-19.9,skewY:180}},{t:this.shape_31,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-20}},{t:this.shape_30,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-20}},{t:this.shape_29,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_28,p:{scaleX:1.392,scaleY:1.392,x:-1.1,y:-19.9,skewY:180}},{t:this.shape_27,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-20}},{t:this.shape_26,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_25,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_24,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-19.9}},{t:this.shape_23,p:{scaleX:1.392,scaleY:1.392,x:-1,skewY:180,y:-20}},{t:this.shape_22,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-19.9}},{t:this.shape_21,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-19.9}},{t:this.shape_20,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_19,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_18,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_17,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_16,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_15,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-19.9}},{t:this.shape_14,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-20}},{t:this.shape_13,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-20}},{t:this.shape_12,p:{scaleX:1.392,scaleY:1.392,y:-19.9,skewY:180,x:-1.1}},{t:this.shape_11,p:{scaleX:1.392,scaleY:1.392,skewY:180,x:-1.1,y:-20}},{t:this.shape_10,p:{scaleX:1.392,scaleY:1.392,x:-1.1,skewY:180,y:-20}},{t:this.shape_9,p:{scaleX:1.392,scaleY:1.392,y:-29.6,skewY:180,x:-3.2}},{t:this.instance,p:{regY:13,scaleX:1.392,scaleY:1.392,y:-24.3,regX:11.8,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.391,scaleY:1.391,rotation:0,y:-20.7,x:9.7,skewY:112.6,skewX:-67.4}},{t:this.shape_7,p:{scaleX:1.391,scaleY:1.391,rotation:0,y:-20.7,x:9.3,skewY:112.6,skewX:-67.4}},{t:this.shape_6,p:{scaleX:1.391,scaleY:1.391,rotation:0,x:9.1,y:-20.1,skewY:110.3,skewX:-69.7}},{t:this.shape_5,p:{scaleX:1.392,scaleY:1.392,x:-10.6,skewY:180,y:-16.4}},{t:this.shape_4,p:{scaleX:1.392,scaleY:1.392,x:-13.4,y:-23.4,skewY:180}},{t:this.shape_3,p:{scaleX:1.392,scaleY:1.392,x:-13.5,y:-23.3,skewY:180}},{t:this.shape_2,p:{scaleX:1.392,scaleY:1.392,x:-14.6,y:-23.2,skewY:180}},{t:this.shape_1,p:{scaleX:1.392,scaleY:1.392,x:-14.6,y:-23.3,skewY:180}},{t:this.shape,p:{scaleX:1.392,scaleY:1.392,x:-14.7,skewY:180,y:-23.3}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.389,scaleY:1.389,rotation:0,x:-2.9,y:-5.1,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.389,scaleY:1.389,rotation:0,x:-2.9,y:-5,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.389,scaleY:1.389,rotation:0,x:-2.9,y:-5.1,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.389,scaleY:1.389,rotation:0,x:4.9,y:-4.3,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.389,scaleY:1.389,rotation:0,x:4.9,y:-4.3,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.389,skewY:180,x:4.9,y:-4.3,scaleY:1.389}},{t:this.shape_65,p:{scaleX:1.389,scaleY:1.389,y:-16.6,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.389,scaleY:1.389,y:-16.6,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.389,scaleY:1.389,y:-33.7,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.389,scaleY:1.389,y:-33.7,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.389,scaleY:1.389,y:-24.5,skewY:180,x:14}},{t:this.shape_60,p:{scaleX:1.389,scaleY:1.389,y:-16.2,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.389,scaleY:1.389,y:-16.2,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.389,scaleY:1.389,x:-1.2,y:-10.9,skewY:180}},{t:this.shape_57,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_56,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_55,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_54,p:{scaleX:1.389,scaleY:1.389,x:-1.2,y:-10.9,skewY:180}},{t:this.shape_53,p:{scaleX:1.389,scaleY:1.389,y:-10.9,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_51,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_50,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_49,p:{scaleX:1.389,scaleY:1.389,x:-1.2,y:-10.9,skewY:180}},{t:this.shape_48,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_47,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_46,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-10.9}},{t:this.shape_45,p:{scaleX:1.389,scaleY:1.389,x:-1.2,y:-10.9,skewY:180}},{t:this.shape_44,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_43,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_42,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-10.9}},{t:this.shape_41,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_40,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-10.9}},{t:this.shape_39,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_38,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_37,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_36,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_35,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_34,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_33,p:{scaleX:1.389,scaleY:1.389,x:-1.2,y:-10.9,skewY:180}},{t:this.shape_32,p:{scaleX:1.389,scaleY:1.389,x:-1.2,y:-10.9,skewY:180}},{t:this.shape_31,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-11}},{t:this.shape_30,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-11}},{t:this.shape_29,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_28,p:{scaleX:1.389,scaleY:1.389,x:-1.2,y:-10.9,skewY:180}},{t:this.shape_27,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-11}},{t:this.shape_26,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_25,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_24,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-10.9}},{t:this.shape_23,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_22,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-10.9}},{t:this.shape_21,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-10.9}},{t:this.shape_20,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_19,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_18,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_17,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_16,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_15,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-10.9}},{t:this.shape_14,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-10.9}},{t:this.shape_13,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-11}},{t:this.shape_12,p:{scaleX:1.389,scaleY:1.389,y:-10.9,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.389,scaleY:1.389,skewY:180,x:-1.2,y:-10.9}},{t:this.shape_10,p:{scaleX:1.389,scaleY:1.389,x:-1.2,skewY:180,y:-11}},{t:this.shape_9,p:{scaleX:1.389,scaleY:1.389,y:-20.6,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.2,scaleX:1.389,scaleY:1.389,y:-16.3,regX:11.9,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.389,scaleY:1.389,rotation:0,y:-11,x:8.4,skewY:139.3,skewX:-40.7}},{t:this.shape_7,p:{scaleX:1.389,scaleY:1.389,rotation:0,y:-11,x:8.4,skewY:139.3,skewX:-40.7}},{t:this.shape_6,p:{scaleX:1.389,scaleY:1.389,rotation:0,x:8.6,y:-10.7,skewY:135,skewX:-45}},{t:this.shape_5,p:{scaleX:1.389,scaleY:1.389,x:-10.7,skewY:180,y:-7.4}},{t:this.shape_4,p:{scaleX:1.389,scaleY:1.389,x:-13.5,y:-14.3,skewY:180}},{t:this.shape_3,p:{scaleX:1.389,scaleY:1.389,x:-13.5,y:-14.3,skewY:180}},{t:this.shape_2,p:{scaleX:1.389,scaleY:1.389,x:-14.6,y:-14.2,skewY:180}},{t:this.shape_1,p:{scaleX:1.389,scaleY:1.389,x:-14.6,y:-14.2,skewY:180}},{t:this.shape,p:{scaleX:1.389,scaleY:1.389,x:-14.7,skewY:180,y:-14.3}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-2.9,y:3.2,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-2.9,y:3.2,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-2.9,y:3.2,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:4.9,y:3.9,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:4.9,y:3.9,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.386,skewY:180,x:4.9,y:3.9,scaleY:1.386}},{t:this.shape_65,p:{scaleX:1.386,scaleY:1.386,y:-8.4,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.386,scaleY:1.386,y:-8.4,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.386,scaleY:1.386,y:-25.4,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.386,scaleY:1.386,y:-25.4,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.386,scaleY:1.386,y:-16.2,skewY:180,x:13.9}},{t:this.shape_60,p:{scaleX:1.386,scaleY:1.386,y:-8,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.386,scaleY:1.386,y:-8,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:-2.7,skewY:180}},{t:this.shape_57,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_56,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_55,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_54,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:-2.7,skewY:180}},{t:this.shape_53,p:{scaleX:1.386,scaleY:1.386,y:-2.7,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_51,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_50,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_49,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:-2.7,skewY:180}},{t:this.shape_48,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_47,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_46,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_45,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:-2.7,skewY:180}},{t:this.shape_44,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_43,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_42,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_41,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_40,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_39,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_38,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_37,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_36,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_35,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_34,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_33,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:-2.7,skewY:180}},{t:this.shape_32,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:-2.7,skewY:180}},{t:this.shape_31,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_30,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_29,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_28,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:-2.7,skewY:180}},{t:this.shape_27,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_26,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_25,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_24,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_23,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_22,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_21,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_20,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_19,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_18,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_17,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_16,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_15,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_14,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_13,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_12,p:{scaleX:1.386,scaleY:1.386,y:-2.7,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:-2.7}},{t:this.shape_10,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:-2.7}},{t:this.shape_9,p:{scaleX:1.386,scaleY:1.386,y:-12.3,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.5,scaleX:1.386,scaleY:1.386,y:-8,regX:11.9,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.386,scaleY:1.386,rotation:0,y:-1.7,x:7.6,skewY:158,skewX:-22}},{t:this.shape_7,p:{scaleX:1.386,scaleY:1.386,rotation:0,y:-1.7,x:7.6,skewY:158,skewX:-22}},{t:this.shape_6,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:7.7,y:-1.7,skewY:156.3,skewX:-23.7}},{t:this.shape_5,p:{scaleX:1.386,scaleY:1.386,x:-10.6,skewY:180,y:0.9}},{t:this.shape_4,p:{scaleX:1.386,scaleY:1.386,x:-13.5,y:-6.1,skewY:180}},{t:this.shape_3,p:{scaleX:1.386,scaleY:1.386,x:-13.5,y:-6.1,skewY:180}},{t:this.shape_2,p:{scaleX:1.386,scaleY:1.386,x:-14.6,y:-6,skewY:180}},{t:this.shape_1,p:{scaleX:1.386,scaleY:1.386,x:-14.6,y:-6,skewY:180}},{t:this.shape,p:{scaleX:1.386,scaleY:1.386,x:-14.7,skewY:180,y:-6}}]},3).to({state:[{t:this.shape_71,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-2.9,y:11.4,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-2.9,y:11.4,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-2.9,y:11.4,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:4.9,y:12.1,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:4.9,y:12.1,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.386,skewY:180,x:4.9,y:12.1,scaleY:1.386}},{t:this.shape_65,p:{scaleX:1.386,scaleY:1.386,y:-0.2,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.386,scaleY:1.386,y:-0.2,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.386,scaleY:1.386,y:-17.2,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.386,scaleY:1.386,y:-17.2,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.386,scaleY:1.386,y:-8,skewY:180,x:13.9}},{t:this.shape_60,p:{scaleX:1.386,scaleY:1.386,y:0.2,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.386,scaleY:1.386,y:0.2,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:5.5,skewY:180}},{t:this.shape_57,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_56,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_55,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_54,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:5.5,skewY:180}},{t:this.shape_53,p:{scaleX:1.386,scaleY:1.386,y:5.5,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_51,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_50,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_49,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:5.5,skewY:180}},{t:this.shape_48,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_47,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_46,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_45,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:5.5,skewY:180}},{t:this.shape_44,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_43,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_42,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_41,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_40,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_39,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_38,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_37,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_36,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_35,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_34,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_33,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:5.5,skewY:180}},{t:this.shape_32,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:5.5,skewY:180}},{t:this.shape_31,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_30,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_29,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_28,p:{scaleX:1.386,scaleY:1.386,x:-1.2,y:5.5,skewY:180}},{t:this.shape_27,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_26,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_25,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_24,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_23,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_22,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_21,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_20,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_19,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_18,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_17,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_16,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_15,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_14,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_13,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_12,p:{scaleX:1.386,scaleY:1.386,y:5.5,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.386,scaleY:1.386,skewY:180,x:-1.2,y:5.5}},{t:this.shape_10,p:{scaleX:1.386,scaleY:1.386,x:-1.2,skewY:180,y:5.5}},{t:this.shape_9,p:{scaleX:1.386,scaleY:1.386,y:-4.1,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.3,scaleX:1.386,scaleY:1.386,y:0.1,regX:11.9,x:-1.8,skewY:180}},{t:this.shape_8,p:{scaleX:1.386,scaleY:1.386,rotation:0,y:6.7,x:6.4,skewY:180,skewX:0}},{t:this.shape_7,p:{scaleX:1.386,scaleY:1.386,rotation:0,y:6.7,x:6.4,skewY:180,skewX:0}},{t:this.shape_6,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:6.4,y:6.7,skewY:180,skewX:0}},{t:this.shape_5,p:{scaleX:1.386,scaleY:1.386,x:-10.6,skewY:180,y:9.1}},{t:this.shape_4,p:{scaleX:1.386,scaleY:1.386,x:-13.5,y:2.1,skewY:180}},{t:this.shape_3,p:{scaleX:1.386,scaleY:1.386,x:-13.5,y:2.1,skewY:180}},{t:this.shape_2,p:{scaleX:1.386,scaleY:1.386,x:-14.6,y:2.2,skewY:180}},{t:this.shape_1,p:{scaleX:1.386,scaleY:1.386,x:-14.6,y:2.2,skewY:180}},{t:this.shape,p:{scaleX:1.386,scaleY:1.386,x:-14.7,skewY:180,y:2.2}}]},3).to({state:[]},2).to({state:[{t:this.shape_190,p:{scaleX:1.389,scaleY:1.389,x:-8,y:11.8}},{t:this.shape_189,p:{scaleX:1.389,scaleY:1.389,x:-8,y:11.8}},{t:this.shape_188,p:{scaleX:1.389,scaleY:1.389,x:-8,y:11.8}},{t:this.shape_187,p:{scaleX:1.389,scaleY:1.389,y:11.3,x:7.5}},{t:this.shape_186,p:{scaleX:1.389,scaleY:1.389,y:11.3}},{t:this.shape_185,p:{scaleX:1.389,scaleY:1.389,y:11.3,x:7.5}},{t:this.shape_184,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:4.5}},{t:this.shape_183,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:4.5}},{t:this.shape_182,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:4.5}},{t:this.shape_181,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:4.6}},{t:this.shape_180,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:4.6}},{t:this.shape_179,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:4.6}},{t:this.shape_178,p:{scaleX:1.389,scaleY:1.389,y:-0.2}},{t:this.shape_177,p:{scaleX:1.389,scaleY:1.389,y:-0.1,x:-0.7}},{t:this.shape_176,p:{scaleX:1.389,scaleY:1.389,x:7.1,y:0.3}},{t:this.shape_175,p:{scaleX:1.389,scaleY:1.389,y:0.2}},{t:this.shape_174,p:{scaleX:1.389,scaleY:1.389,x:-7.5,y:0.3}},{t:this.shape_173,p:{scaleX:1.389,scaleY:1.389,x:-7.5,y:0.2}},{t:this.shape_172,p:{scaleX:1.389,scaleY:1.389,y:9}},{t:this.shape_171,p:{scaleX:1.389,scaleY:1.389,y:-17.1}},{t:this.shape_170,p:{scaleX:1.389,scaleY:1.389,y:-17.1}},{t:this.shape_169,p:{scaleX:1.389,scaleY:1.389,x:12.9,y:-8.1}},{t:this.shape_168,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_167,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_166,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_165,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_164,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_163,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_162,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_161,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_160,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_159,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_158,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_157,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_156,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_155,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_154,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_43,p:{scaleX:1.389,scaleY:1.389,x:10.1,skewY:0,y:4.8}},{t:this.shape_153,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_152,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_151,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_150,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_149,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_148,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_147,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_146,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_145,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_144,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_143,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_142,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_141,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_140,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_139,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_138,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_137,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_136,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_24,p:{scaleX:1.389,scaleY:1.389,skewY:0,x:10.1,y:4.8}},{t:this.shape_135,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_22,p:{scaleX:1.389,scaleY:1.389,skewY:0,x:10.1,y:4.8}},{t:this.shape_134,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_133,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_132,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_18,p:{scaleX:1.389,scaleY:1.389,x:10.1,skewY:0,y:4.8}},{t:this.shape_17,p:{scaleX:1.389,scaleY:1.389,x:10.1,skewY:0,y:4.8}},{t:this.shape_131,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_15,p:{scaleX:1.389,scaleY:1.389,x:10.1,skewY:0,y:4.8}},{t:this.shape_130,p:{scaleX:1.389,scaleY:1.389,x:10.1,y:4.8}},{t:this.shape_129,p:{scaleX:1.389,scaleY:1.389,x:10.2,y:4.8}},{t:this.shape_128,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_127,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_126,p:{scaleX:1.389,scaleY:1.389,y:4.8,x:10.1}},{t:this.shape_125,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_124,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_123,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.4}},{t:this.shape_122,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_121,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_120,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_119,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_118,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_117,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_116,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_115,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_114,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_113,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_112,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_111,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_110,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_109,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_41,p:{scaleX:1.389,scaleY:1.389,x:-10.3,skewY:0,y:5.5}},{t:this.shape_40,p:{scaleX:1.389,scaleY:1.389,skewY:0,x:-10.3,y:5.5}},{t:this.shape_108,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_107,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_106,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_105,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_104,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_103,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_102,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_101,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_100,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_99,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_98,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_97,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_96,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_95,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_94,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_93,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_92,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_91,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_90,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_89,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_88,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_87,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_86,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_85,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_84,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_83,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_82,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_81,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_80,p:{scaleX:1.389,scaleY:1.389,x:-10.3,y:5.5}},{t:this.shape_10,p:{scaleX:1.389,scaleY:1.389,x:-10.3,skewY:0,y:5.5}},{t:this.shape_79,p:{scaleX:1.389,scaleY:1.389,y:3.6,x:-0.3}},{t:this.shape_78,p:{scaleX:1.389,scaleY:1.389,y:3.6,x:-0.3}},{t:this.shape_77,p:{scaleX:1.389,scaleY:1.389,y:3.6}},{t:this.shape_76,p:{scaleX:1.389,scaleY:1.389,y:3.6}},{t:this.shape_75,p:{scaleX:1.389,scaleY:1.389,x:-8.2,y:-4.1}},{t:this.shape_74,p:{scaleX:1.389,scaleY:1.389,y:-4,x:8.1}},{t:this.shape_73,p:{scaleX:1.389,scaleY:1.389,x:-13.9,y:-7.8}},{t:this.shape_72,p:{scaleX:1.389,scaleY:1.389,y:9.8}}]},1).to({state:[{t:this.shape_190,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.1}},{t:this.shape_189,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.1}},{t:this.shape_188,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.1}},{t:this.shape_187,p:{scaleX:1.387,scaleY:1.387,y:2.6,x:7.5}},{t:this.shape_186,p:{scaleX:1.387,scaleY:1.387,y:2.6}},{t:this.shape_185,p:{scaleX:1.387,scaleY:1.387,y:2.6,x:7.5}},{t:this.shape_184,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-4.1}},{t:this.shape_183,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-4.2}},{t:this.shape_182,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-4.2}},{t:this.shape_181,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-4.1}},{t:this.shape_180,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-4.1}},{t:this.shape_179,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-4.1}},{t:this.shape_178,p:{scaleX:1.387,scaleY:1.387,y:-8.8}},{t:this.shape_177,p:{scaleX:1.387,scaleY:1.387,y:-8.8,x:-0.6}},{t:this.shape_176,p:{scaleX:1.387,scaleY:1.387,x:7.1,y:-8.4}},{t:this.shape_175,p:{scaleX:1.387,scaleY:1.387,y:-8.4}},{t:this.shape_174,p:{scaleX:1.387,scaleY:1.387,x:-7.5,y:-8.4}},{t:this.shape_173,p:{scaleX:1.387,scaleY:1.387,x:-7.4,y:-8.4}},{t:this.shape_172,p:{scaleX:1.387,scaleY:1.387,y:0.3}},{t:this.shape_171,p:{scaleX:1.387,scaleY:1.387,y:-25.8}},{t:this.shape_170,p:{scaleX:1.387,scaleY:1.387,y:-25.7}},{t:this.shape_169,p:{scaleX:1.387,scaleY:1.387,x:12.9,y:-16.8}},{t:this.shape_168,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.9}},{t:this.shape_167,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.9}},{t:this.shape_166,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.9}},{t:this.shape_165,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_164,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_163,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_162,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_161,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_160,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.9}},{t:this.shape_159,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_158,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_157,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_156,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_155,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_154,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:10.1,skewY:0,y:-3.9}},{t:this.shape_153,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_152,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_151,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_150,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_149,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_148,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_147,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_146,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_145,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_144,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_143,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_142,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_141,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_140,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_139,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_138,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_137,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_136,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:10.1,y:-3.9}},{t:this.shape_135,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:10.1,y:-3.9}},{t:this.shape_134,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_133,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_132,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:10.1,skewY:0,y:-3.9}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:10.1,skewY:0,y:-3.9}},{t:this.shape_131,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:10.1,skewY:0,y:-3.9}},{t:this.shape_130,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.9}},{t:this.shape_129,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.9}},{t:this.shape_128,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_127,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_126,p:{scaleX:1.387,scaleY:1.387,y:-3.9,x:10.1}},{t:this.shape_125,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_124,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_123,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_122,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_121,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_120,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_119,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_118,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_117,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_116,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_115,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_114,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_113,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_112,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_111,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_110,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_109,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:-10.3,skewY:0,y:-3.2}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:-10.2,y:-3.2}},{t:this.shape_108,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_107,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_106,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_105,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_104,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_103,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_102,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_101,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_100,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_99,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_98,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_97,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_96,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_95,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_94,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_93,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_92,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_91,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_90,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_89,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_88,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_87,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_86,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_85,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_84,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_83,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_82,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-3.2}},{t:this.shape_81,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_80,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-3.2}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:-10.3,skewY:0,y:-3.2}},{t:this.shape_79,p:{scaleX:1.387,scaleY:1.387,y:-5.1,x:-0.2}},{t:this.shape_78,p:{scaleX:1.387,scaleY:1.387,y:-5.1,x:-0.3}},{t:this.shape_77,p:{scaleX:1.387,scaleY:1.387,y:-5}},{t:this.shape_76,p:{scaleX:1.387,scaleY:1.387,y:-5.1}},{t:this.shape_75,p:{scaleX:1.387,scaleY:1.387,x:-8.1,y:-12.7}},{t:this.shape_74,p:{scaleX:1.387,scaleY:1.387,y:-12.7,x:8.1}},{t:this.shape_73,p:{scaleX:1.387,scaleY:1.387,x:-13.9,y:-16.5}},{t:this.shape_72,p:{scaleX:1.387,scaleY:1.387,y:1.1}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.39,scaleY:1.39,x:-8,y:-4.7}},{t:this.shape_189,p:{scaleX:1.39,scaleY:1.39,x:-8,y:-4.7}},{t:this.shape_188,p:{scaleX:1.39,scaleY:1.39,x:-8,y:-4.7}},{t:this.shape_187,p:{scaleX:1.39,scaleY:1.39,y:-5.3,x:7.5}},{t:this.shape_186,p:{scaleX:1.39,scaleY:1.39,y:-5.2}},{t:this.shape_185,p:{scaleX:1.39,scaleY:1.39,y:-5.2,x:7.5}},{t:this.shape_184,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:-12}},{t:this.shape_183,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:-12}},{t:this.shape_182,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:-12}},{t:this.shape_181,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:-12}},{t:this.shape_180,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:-11.9}},{t:this.shape_179,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:-11.9}},{t:this.shape_178,p:{scaleX:1.39,scaleY:1.39,y:-16.7}},{t:this.shape_177,p:{scaleX:1.39,scaleY:1.39,y:-16.7,x:-0.6}},{t:this.shape_176,p:{scaleX:1.39,scaleY:1.39,x:7.1,y:-16.3}},{t:this.shape_175,p:{scaleX:1.39,scaleY:1.39,y:-16.3}},{t:this.shape_174,p:{scaleX:1.39,scaleY:1.39,x:-7.5,y:-16.3}},{t:this.shape_173,p:{scaleX:1.39,scaleY:1.39,x:-7.5,y:-16.3}},{t:this.shape_172,p:{scaleX:1.39,scaleY:1.39,y:-7.5}},{t:this.shape_171,p:{scaleX:1.39,scaleY:1.39,y:-33.7}},{t:this.shape_170,p:{scaleX:1.39,scaleY:1.39,y:-33.6}},{t:this.shape_169,p:{scaleX:1.39,scaleY:1.39,x:12.9,y:-24.6}},{t:this.shape_168,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_167,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_166,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_165,p:{scaleX:1.39,scaleY:1.39,y:-11.8,x:10.1}},{t:this.shape_164,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_163,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_162,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_161,p:{scaleX:1.39,scaleY:1.39,y:-11.8,x:10.1}},{t:this.shape_160,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_159,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_158,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.2}},{t:this.shape_157,p:{scaleX:1.39,scaleY:1.39,y:-11.8,x:10.2}},{t:this.shape_156,p:{scaleX:1.39,scaleY:1.39,y:-11.8,x:10.2}},{t:this.shape_155,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.2}},{t:this.shape_154,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_43,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:-11.7}},{t:this.shape_153,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:-11.7}},{t:this.shape_152,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:-11.7}},{t:this.shape_151,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.2}},{t:this.shape_150,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.8}},{t:this.shape_149,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_148,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_147,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_146,p:{scaleX:1.39,scaleY:1.39,y:-11.8,x:10.1}},{t:this.shape_145,p:{scaleX:1.39,scaleY:1.39,y:-11.8,x:10.1}},{t:this.shape_144,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_143,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_142,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_141,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_140,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_139,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_138,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.2}},{t:this.shape_137,p:{scaleX:1.39,scaleY:1.39,y:-11.8,x:10.1}},{t:this.shape_136,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.8}},{t:this.shape_24,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:10.2,y:-11.7}},{t:this.shape_135,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_22,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:10.2,y:-11.7}},{t:this.shape_134,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_133,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_132,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_18,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:-11.8}},{t:this.shape_17,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:-11.7}},{t:this.shape_131,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_15,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:-11.7}},{t:this.shape_130,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.7}},{t:this.shape_129,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-11.8}},{t:this.shape_128,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_127,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_126,p:{scaleX:1.39,scaleY:1.39,y:-11.7,x:10.1}},{t:this.shape_125,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_124,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_123,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_122,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_121,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_120,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_119,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_118,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_117,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_116,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_115,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_114,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_113,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_112,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_111,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_110,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_109,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_41,p:{scaleX:1.39,scaleY:1.39,x:-10.3,skewY:0,y:-11}},{t:this.shape_40,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:-10.3,y:-11}},{t:this.shape_108,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_107,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_106,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_105,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_104,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_103,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_102,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_101,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_100,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_99,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_98,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_97,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_96,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_95,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_94,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_93,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_92,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_91,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_90,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_89,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_88,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_87,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_86,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_85,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_84,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_83,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_82,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_81,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11}},{t:this.shape_80,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-11.1}},{t:this.shape_10,p:{scaleX:1.39,scaleY:1.39,x:-10.3,skewY:0,y:-11.1}},{t:this.shape_79,p:{scaleX:1.39,scaleY:1.39,y:-13,x:-0.3}},{t:this.shape_78,p:{scaleX:1.39,scaleY:1.39,y:-13,x:-0.3}},{t:this.shape_77,p:{scaleX:1.39,scaleY:1.39,y:-12.9}},{t:this.shape_76,p:{scaleX:1.39,scaleY:1.39,y:-13}},{t:this.shape_75,p:{scaleX:1.39,scaleY:1.39,x:-8.1,y:-20.6}},{t:this.shape_74,p:{scaleX:1.39,scaleY:1.39,y:-20.6,x:8.1}},{t:this.shape_73,p:{scaleX:1.39,scaleY:1.39,x:-13.9,y:-24.4}},{t:this.shape_72,p:{scaleX:1.39,scaleY:1.39,y:-6.7}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.39,scaleY:1.39,x:-8,y:-13}},{t:this.shape_189,p:{scaleX:1.39,scaleY:1.39,x:-8,y:-13}},{t:this.shape_188,p:{scaleX:1.39,scaleY:1.39,x:-8,y:-13}},{t:this.shape_187,p:{scaleX:1.39,scaleY:1.39,y:-13.5,x:7.5}},{t:this.shape_186,p:{scaleX:1.39,scaleY:1.39,y:-13.5}},{t:this.shape_185,p:{scaleX:1.39,scaleY:1.39,y:-13.5,x:7.5}},{t:this.shape_184,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:-20.2}},{t:this.shape_183,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:-20.3}},{t:this.shape_182,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:-20.3}},{t:this.shape_181,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:-20.2}},{t:this.shape_180,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:-20.2}},{t:this.shape_179,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:-20.2}},{t:this.shape_178,p:{scaleX:1.39,scaleY:1.39,y:-24.9}},{t:this.shape_177,p:{scaleX:1.39,scaleY:1.39,y:-24.9,x:-0.6}},{t:this.shape_176,p:{scaleX:1.39,scaleY:1.39,x:7.1,y:-24.5}},{t:this.shape_175,p:{scaleX:1.39,scaleY:1.39,y:-24.6}},{t:this.shape_174,p:{scaleX:1.39,scaleY:1.39,x:-7.5,y:-24.5}},{t:this.shape_173,p:{scaleX:1.39,scaleY:1.39,x:-7.5,y:-24.6}},{t:this.shape_172,p:{scaleX:1.39,scaleY:1.39,y:-15.8}},{t:this.shape_171,p:{scaleX:1.39,scaleY:1.39,y:-41.9}},{t:this.shape_170,p:{scaleX:1.39,scaleY:1.39,y:-41.9}},{t:this.shape_169,p:{scaleX:1.39,scaleY:1.39,x:12.9,y:-32.9}},{t:this.shape_168,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_167,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_166,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_165,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_164,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_163,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_162,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_161,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_160,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_159,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_158,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_157,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_156,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_155,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_154,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:-20}},{t:this.shape_43,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:-20}},{t:this.shape_153,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:-20}},{t:this.shape_152,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:-20}},{t:this.shape_151,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_150,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:-20}},{t:this.shape_149,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:-20}},{t:this.shape_148,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:-20}},{t:this.shape_147,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_146,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_145,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_144,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_143,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_142,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_141,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_140,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_139,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_138,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_137,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_136,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_24,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:10.2,y:-20}},{t:this.shape_135,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_22,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:10.2,y:-20}},{t:this.shape_134,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_133,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_132,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_18,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:-20}},{t:this.shape_17,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:-20}},{t:this.shape_131,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_15,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:-20}},{t:this.shape_130,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_129,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:-20}},{t:this.shape_128,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_127,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_126,p:{scaleX:1.39,scaleY:1.39,y:-20,x:10.1}},{t:this.shape_125,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_124,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_123,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_122,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_121,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_120,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_119,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_118,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_117,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_116,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_115,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_114,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_113,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_112,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_111,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_110,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_109,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_41,p:{scaleX:1.39,scaleY:1.39,x:-10.3,skewY:0,y:-19.3}},{t:this.shape_40,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:-10.3,y:-19.3}},{t:this.shape_108,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_107,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_106,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_105,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_104,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_103,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_102,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_101,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_100,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_99,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_98,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_97,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_96,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_95,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_94,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_93,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_92,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_91,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_90,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_89,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_88,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_87,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_86,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_85,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_84,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_83,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_82,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_81,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_80,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:-19.3}},{t:this.shape_10,p:{scaleX:1.39,scaleY:1.39,x:-10.3,skewY:0,y:-19.3}},{t:this.shape_79,p:{scaleX:1.39,scaleY:1.39,y:-21.2,x:-0.3}},{t:this.shape_78,p:{scaleX:1.39,scaleY:1.39,y:-21.2,x:-0.3}},{t:this.shape_77,p:{scaleX:1.39,scaleY:1.39,y:-21.1}},{t:this.shape_76,p:{scaleX:1.39,scaleY:1.39,y:-21.2}},{t:this.shape_75,p:{scaleX:1.39,scaleY:1.39,x:-8.2,y:-28.9}},{t:this.shape_74,p:{scaleX:1.39,scaleY:1.39,y:-28.8,x:8.1}},{t:this.shape_73,p:{scaleX:1.39,scaleY:1.39,x:-13.9,y:-32.6}},{t:this.shape_72,p:{scaleX:1.39,scaleY:1.39,y:-15}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.385,scaleY:1.385,x:-7.9,y:-21.2}},{t:this.shape_189,p:{scaleX:1.385,scaleY:1.385,x:-8,y:-21.2}},{t:this.shape_188,p:{scaleX:1.385,scaleY:1.385,x:-8,y:-21.2}},{t:this.shape_187,p:{scaleX:1.385,scaleY:1.385,y:-21.7,x:7.5}},{t:this.shape_186,p:{scaleX:1.385,scaleY:1.385,y:-21.7}},{t:this.shape_185,p:{scaleX:1.385,scaleY:1.385,y:-21.7,x:7.5}},{t:this.shape_184,p:{scaleX:1.385,scaleY:1.385,x:13.4,y:-28.4}},{t:this.shape_183,p:{scaleX:1.385,scaleY:1.385,x:13.4,y:-28.5}},{t:this.shape_182,p:{scaleX:1.385,scaleY:1.385,x:13.5,y:-28.4}},{t:this.shape_181,p:{scaleX:1.385,scaleY:1.385,x:-14.1,y:-28.4}},{t:this.shape_180,p:{scaleX:1.385,scaleY:1.385,x:-14.1,y:-28.4}},{t:this.shape_179,p:{scaleX:1.385,scaleY:1.385,x:-14.1,y:-28.4}},{t:this.shape_178,p:{scaleX:1.385,scaleY:1.385,y:-33.1}},{t:this.shape_177,p:{scaleX:1.385,scaleY:1.385,y:-33.1,x:-0.7}},{t:this.shape_176,p:{scaleX:1.385,scaleY:1.385,x:7,y:-32.7}},{t:this.shape_175,p:{scaleX:1.385,scaleY:1.385,y:-32.7}},{t:this.shape_174,p:{scaleX:1.385,scaleY:1.385,x:-7.5,y:-32.7}},{t:this.shape_173,p:{scaleX:1.385,scaleY:1.385,x:-7.5,y:-32.7}},{t:this.shape_172,p:{scaleX:1.385,scaleY:1.385,y:-24}},{t:this.shape_171,p:{scaleX:1.385,scaleY:1.385,y:-50}},{t:this.shape_170,p:{scaleX:1.385,scaleY:1.385,y:-50}},{t:this.shape_169,p:{scaleX:1.385,scaleY:1.385,x:12.8,y:-41}},{t:this.shape_168,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_167,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_166,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_165,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_164,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_163,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_162,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_161,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_160,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_159,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_158,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_157,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_156,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_155,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_154,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_43,p:{scaleX:1.385,scaleY:1.385,x:10.1,skewY:0,y:-28.2}},{t:this.shape_153,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_152,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_151,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_150,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_149,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_148,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_147,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_146,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_145,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_144,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_143,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_142,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_141,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_140,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_139,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_138,p:{scaleX:1.385,scaleY:1.385,y:-28.1,x:10.1}},{t:this.shape_137,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_136,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_24,p:{scaleX:1.385,scaleY:1.385,skewY:0,x:10.1,y:-28.2}},{t:this.shape_135,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_22,p:{scaleX:1.385,scaleY:1.385,skewY:0,x:10.1,y:-28.2}},{t:this.shape_134,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_133,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_132,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_18,p:{scaleX:1.385,scaleY:1.385,x:10.1,skewY:0,y:-28.2}},{t:this.shape_17,p:{scaleX:1.385,scaleY:1.385,x:10.1,skewY:0,y:-28.2}},{t:this.shape_131,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_15,p:{scaleX:1.385,scaleY:1.385,x:10.1,skewY:0,y:-28.2}},{t:this.shape_130,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_129,p:{scaleX:1.385,scaleY:1.385,x:10.1,y:-28.2}},{t:this.shape_128,p:{scaleX:1.385,scaleY:1.385,y:-28.1,x:10.1}},{t:this.shape_127,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_126,p:{scaleX:1.385,scaleY:1.385,y:-28.2,x:10.1}},{t:this.shape_125,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_124,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_123,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_122,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_121,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_120,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_119,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_118,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_117,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_116,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_115,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_114,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_113,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_112,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_111,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_110,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_109,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_41,p:{scaleX:1.385,scaleY:1.385,x:-10.3,skewY:0,y:-27.5}},{t:this.shape_40,p:{scaleX:1.385,scaleY:1.385,skewY:0,x:-10.3,y:-27.5}},{t:this.shape_108,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_107,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_106,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_105,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_104,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_103,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_102,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_101,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_100,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_99,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_98,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_97,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_96,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_95,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_94,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_93,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_92,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_91,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_90,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_89,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_88,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_87,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_86,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_85,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_84,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_83,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_82,p:{scaleX:1.385,scaleY:1.385,x:-10.2,y:-27.5}},{t:this.shape_81,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_80,p:{scaleX:1.385,scaleY:1.385,x:-10.3,y:-27.5}},{t:this.shape_10,p:{scaleX:1.385,scaleY:1.385,x:-10.3,skewY:0,y:-27.5}},{t:this.shape_79,p:{scaleX:1.385,scaleY:1.385,y:-29.4,x:-0.3}},{t:this.shape_78,p:{scaleX:1.385,scaleY:1.385,y:-29.4,x:-0.3}},{t:this.shape_77,p:{scaleX:1.385,scaleY:1.385,y:-29.3}},{t:this.shape_76,p:{scaleX:1.385,scaleY:1.385,y:-29.4}},{t:this.shape_75,p:{scaleX:1.385,scaleY:1.385,x:-8.1,y:-37}},{t:this.shape_74,p:{scaleX:1.385,scaleY:1.385,y:-37,x:8.1}},{t:this.shape_73,p:{scaleX:1.385,scaleY:1.385,x:-13.9,y:-40.8}},{t:this.shape_72,p:{scaleX:1.385,scaleY:1.385,y:-23.2}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.391,scaleY:1.391,x:-8,y:-13.1}},{t:this.shape_189,p:{scaleX:1.391,scaleY:1.391,x:-8,y:-13.1}},{t:this.shape_188,p:{scaleX:1.391,scaleY:1.391,x:-8,y:-13.1}},{t:this.shape_187,p:{scaleX:1.391,scaleY:1.391,y:-13.6,x:7.6}},{t:this.shape_186,p:{scaleX:1.391,scaleY:1.391,y:-13.6}},{t:this.shape_185,p:{scaleX:1.391,scaleY:1.391,y:-13.6,x:7.6}},{t:this.shape_184,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:-20.4}},{t:this.shape_183,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:-20.4}},{t:this.shape_182,p:{scaleX:1.391,scaleY:1.391,x:13.6,y:-20.4}},{t:this.shape_181,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-20.3}},{t:this.shape_180,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-20.3}},{t:this.shape_179,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-20.3}},{t:this.shape_178,p:{scaleX:1.391,scaleY:1.391,y:-25.1}},{t:this.shape_177,p:{scaleX:1.391,scaleY:1.391,y:-25.1,x:-0.6}},{t:this.shape_176,p:{scaleX:1.391,scaleY:1.391,x:7.1,y:-24.7}},{t:this.shape_175,p:{scaleX:1.391,scaleY:1.391,y:-24.7}},{t:this.shape_174,p:{scaleX:1.391,scaleY:1.391,x:-7.5,y:-24.7}},{t:this.shape_173,p:{scaleX:1.391,scaleY:1.391,x:-7.5,y:-24.7}},{t:this.shape_172,p:{scaleX:1.391,scaleY:1.391,y:-15.9}},{t:this.shape_171,p:{scaleX:1.391,scaleY:1.391,y:-42.1}},{t:this.shape_170,p:{scaleX:1.391,scaleY:1.391,y:-42}},{t:this.shape_169,p:{scaleX:1.391,scaleY:1.391,x:12.9,y:-33}},{t:this.shape_168,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_167,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_166,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_165,p:{scaleX:1.391,scaleY:1.391,y:-20.2,x:10.2}},{t:this.shape_164,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_163,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_162,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_161,p:{scaleX:1.391,scaleY:1.391,y:-20.2,x:10.2}},{t:this.shape_160,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_159,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_158,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_157,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_156,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_155,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_154,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_43,p:{scaleX:1.391,scaleY:1.391,x:10.1,skewY:0,y:-20.1}},{t:this.shape_153,p:{scaleX:1.391,scaleY:1.391,x:10.1,y:-20.1}},{t:this.shape_152,p:{scaleX:1.391,scaleY:1.391,x:10.1,y:-20.1}},{t:this.shape_151,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_150,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.2}},{t:this.shape_149,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_148,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_147,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_146,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_145,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_144,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_143,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_142,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_141,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_140,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_139,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_138,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_137,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_136,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_24,p:{scaleX:1.391,scaleY:1.391,skewY:0,x:10.2,y:-20.1}},{t:this.shape_135,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_22,p:{scaleX:1.391,scaleY:1.391,skewY:0,x:10.2,y:-20.1}},{t:this.shape_134,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_133,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_132,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_18,p:{scaleX:1.391,scaleY:1.391,x:10.1,skewY:0,y:-20.2}},{t:this.shape_17,p:{scaleX:1.391,scaleY:1.391,x:10.1,skewY:0,y:-20.1}},{t:this.shape_131,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_15,p:{scaleX:1.391,scaleY:1.391,x:10.1,skewY:0,y:-20.1}},{t:this.shape_130,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_129,p:{scaleX:1.391,scaleY:1.391,x:10.2,y:-20.1}},{t:this.shape_128,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_127,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_126,p:{scaleX:1.391,scaleY:1.391,y:-20.1,x:10.2}},{t:this.shape_125,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_124,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_123,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_122,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_121,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_120,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_119,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_118,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_117,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_116,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_115,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_114,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_113,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_112,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_111,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_110,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_109,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_41,p:{scaleX:1.391,scaleY:1.391,x:-10.3,skewY:0,y:-19.4}},{t:this.shape_40,p:{scaleX:1.391,scaleY:1.391,skewY:0,x:-10.3,y:-19.4}},{t:this.shape_108,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_107,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_106,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_105,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_104,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_103,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_102,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_101,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_100,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_99,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_98,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_97,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_96,p:{scaleX:1.391,scaleY:1.391,x:-10.2,y:-19.4}},{t:this.shape_95,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_94,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_93,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_92,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_91,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_90,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_89,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_88,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_87,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_86,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_85,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_84,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_83,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_82,p:{scaleX:1.391,scaleY:1.391,x:-10.2,y:-19.4}},{t:this.shape_81,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.4}},{t:this.shape_80,p:{scaleX:1.391,scaleY:1.391,x:-10.3,y:-19.5}},{t:this.shape_10,p:{scaleX:1.391,scaleY:1.391,x:-10.3,skewY:0,y:-19.4}},{t:this.shape_79,p:{scaleX:1.391,scaleY:1.391,y:-21.4,x:-0.2}},{t:this.shape_78,p:{scaleX:1.391,scaleY:1.391,y:-21.3,x:-0.3}},{t:this.shape_77,p:{scaleX:1.391,scaleY:1.391,y:-21.3}},{t:this.shape_76,p:{scaleX:1.391,scaleY:1.391,y:-21.3}},{t:this.shape_75,p:{scaleX:1.391,scaleY:1.391,x:-8.1,y:-29}},{t:this.shape_74,p:{scaleX:1.391,scaleY:1.391,y:-29,x:8.2}},{t:this.shape_73,p:{scaleX:1.391,scaleY:1.391,x:-13.9,y:-32.8}},{t:this.shape_72,p:{scaleX:1.391,scaleY:1.391,y:-15.1}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-4.7}},{t:this.shape_189,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-4.7}},{t:this.shape_188,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-4.7}},{t:this.shape_187,p:{scaleX:1.388,scaleY:1.388,y:-5.2,x:7.5}},{t:this.shape_186,p:{scaleX:1.388,scaleY:1.388,y:-5.2}},{t:this.shape_185,p:{scaleX:1.388,scaleY:1.388,y:-5.2,x:7.5}},{t:this.shape_184,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-12}},{t:this.shape_183,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-12}},{t:this.shape_182,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-12}},{t:this.shape_181,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-11.9}},{t:this.shape_180,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-11.9}},{t:this.shape_179,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-11.9}},{t:this.shape_178,p:{scaleX:1.388,scaleY:1.388,y:-16.7}},{t:this.shape_177,p:{scaleX:1.388,scaleY:1.388,y:-16.6,x:-0.7}},{t:this.shape_176,p:{scaleX:1.388,scaleY:1.388,x:7.1,y:-16.2}},{t:this.shape_175,p:{scaleX:1.388,scaleY:1.388,y:-16.3}},{t:this.shape_174,p:{scaleX:1.388,scaleY:1.388,x:-7.5,y:-16.2}},{t:this.shape_173,p:{scaleX:1.388,scaleY:1.388,x:-7.5,y:-16.3}},{t:this.shape_172,p:{scaleX:1.388,scaleY:1.388,y:-7.5}},{t:this.shape_171,p:{scaleX:1.388,scaleY:1.388,y:-33.6}},{t:this.shape_170,p:{scaleX:1.388,scaleY:1.388,y:-33.6}},{t:this.shape_169,p:{scaleX:1.388,scaleY:1.388,x:12.9,y:-24.6}},{t:this.shape_168,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_167,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_166,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_165,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_164,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_163,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_162,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_161,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_160,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_159,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_158,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_157,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_156,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_155,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_154,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_43,p:{scaleX:1.388,scaleY:1.388,x:10.1,skewY:0,y:-11.7}},{t:this.shape_153,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_152,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_151,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_150,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_149,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_148,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_147,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_146,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_145,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_144,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_143,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_142,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_141,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_140,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_139,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_138,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_137,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_136,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_24,p:{scaleX:1.388,scaleY:1.388,skewY:0,x:10.1,y:-11.7}},{t:this.shape_135,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_22,p:{scaleX:1.388,scaleY:1.388,skewY:0,x:10.1,y:-11.7}},{t:this.shape_134,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_133,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_132,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_18,p:{scaleX:1.388,scaleY:1.388,x:10.1,skewY:0,y:-11.7}},{t:this.shape_17,p:{scaleX:1.388,scaleY:1.388,x:10.1,skewY:0,y:-11.7}},{t:this.shape_131,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_15,p:{scaleX:1.388,scaleY:1.388,x:10.1,skewY:0,y:-11.7}},{t:this.shape_130,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_129,p:{scaleX:1.388,scaleY:1.388,x:10.1,y:-11.7}},{t:this.shape_128,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_127,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_126,p:{scaleX:1.388,scaleY:1.388,y:-11.7,x:10.1}},{t:this.shape_125,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_124,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_123,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11.1}},{t:this.shape_122,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11.1}},{t:this.shape_121,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_120,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_119,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_118,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_117,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_116,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_115,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_114,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_113,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_112,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_111,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_110,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_109,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_41,p:{scaleX:1.388,scaleY:1.388,x:-10.3,skewY:0,y:-11}},{t:this.shape_40,p:{scaleX:1.388,scaleY:1.388,skewY:0,x:-10.3,y:-11}},{t:this.shape_108,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11.1}},{t:this.shape_107,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11.1}},{t:this.shape_106,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_105,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_104,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_103,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_102,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_101,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_100,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11.1}},{t:this.shape_99,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_98,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_97,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_96,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_95,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_94,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_93,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_92,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_91,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_90,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_89,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_88,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_87,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11.1}},{t:this.shape_86,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_85,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_84,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_83,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_82,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_81,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11}},{t:this.shape_80,p:{scaleX:1.388,scaleY:1.388,x:-10.3,y:-11.1}},{t:this.shape_10,p:{scaleX:1.388,scaleY:1.388,x:-10.3,skewY:0,y:-11}},{t:this.shape_79,p:{scaleX:1.388,scaleY:1.388,y:-12.9,x:-0.3}},{t:this.shape_78,p:{scaleX:1.388,scaleY:1.388,y:-12.9,x:-0.3}},{t:this.shape_77,p:{scaleX:1.388,scaleY:1.388,y:-12.9}},{t:this.shape_76,p:{scaleX:1.388,scaleY:1.388,y:-12.9}},{t:this.shape_75,p:{scaleX:1.388,scaleY:1.388,x:-8.2,y:-20.6}},{t:this.shape_74,p:{scaleX:1.388,scaleY:1.388,y:-20.5,x:8.1}},{t:this.shape_73,p:{scaleX:1.388,scaleY:1.388,x:-13.9,y:-24.3}},{t:this.shape_72,p:{scaleX:1.388,scaleY:1.388,y:-6.7}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.7}},{t:this.shape_189,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.7}},{t:this.shape_188,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.7}},{t:this.shape_187,p:{scaleX:1.387,scaleY:1.387,y:3.1,x:7.5}},{t:this.shape_186,p:{scaleX:1.387,scaleY:1.387,y:3.1}},{t:this.shape_185,p:{scaleX:1.387,scaleY:1.387,y:3.2,x:7.5}},{t:this.shape_184,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-3.6}},{t:this.shape_183,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-3.6}},{t:this.shape_182,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-3.6}},{t:this.shape_181,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-3.6}},{t:this.shape_180,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-3.5}},{t:this.shape_179,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-3.5}},{t:this.shape_178,p:{scaleX:1.387,scaleY:1.387,y:-8.3}},{t:this.shape_177,p:{scaleX:1.387,scaleY:1.387,y:-8.3,x:-0.6}},{t:this.shape_176,p:{scaleX:1.387,scaleY:1.387,x:7.1,y:-7.8}},{t:this.shape_175,p:{scaleX:1.387,scaleY:1.387,y:-7.9}},{t:this.shape_174,p:{scaleX:1.387,scaleY:1.387,x:-7.5,y:-7.8}},{t:this.shape_173,p:{scaleX:1.387,scaleY:1.387,x:-7.4,y:-7.9}},{t:this.shape_172,p:{scaleX:1.387,scaleY:1.387,y:0.9}},{t:this.shape_171,p:{scaleX:1.387,scaleY:1.387,y:-25.2}},{t:this.shape_170,p:{scaleX:1.387,scaleY:1.387,y:-25.2}},{t:this.shape_169,p:{scaleX:1.387,scaleY:1.387,x:12.9,y:-16.2}},{t:this.shape_168,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_167,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_166,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_165,p:{scaleX:1.387,scaleY:1.387,y:-3.4,x:10.1}},{t:this.shape_164,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_163,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_162,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_161,p:{scaleX:1.387,scaleY:1.387,y:-3.4,x:10.1}},{t:this.shape_160,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_159,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_158,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.2}},{t:this.shape_157,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.2}},{t:this.shape_156,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.2}},{t:this.shape_155,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.2}},{t:this.shape_154,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_43,p:{scaleX:1.387,scaleY:1.387,x:10.1,skewY:0,y:-3.3}},{t:this.shape_153,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.3}},{t:this.shape_152,p:{scaleX:1.387,scaleY:1.387,x:10.1,y:-3.3}},{t:this.shape_151,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.2}},{t:this.shape_150,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.4}},{t:this.shape_149,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_148,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_147,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_146,p:{scaleX:1.387,scaleY:1.387,y:-3.4,x:10.1}},{t:this.shape_145,p:{scaleX:1.387,scaleY:1.387,y:-3.4,x:10.1}},{t:this.shape_144,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_143,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_142,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_141,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_140,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_139,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_138,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_137,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_136,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_24,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:10.2,y:-3.3}},{t:this.shape_135,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_22,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:10.2,y:-3.3}},{t:this.shape_134,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_133,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_132,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_18,p:{scaleX:1.387,scaleY:1.387,x:10.1,skewY:0,y:-3.4}},{t:this.shape_17,p:{scaleX:1.387,scaleY:1.387,x:10.1,skewY:0,y:-3.3}},{t:this.shape_131,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_15,p:{scaleX:1.387,scaleY:1.387,x:10.1,skewY:0,y:-3.3}},{t:this.shape_130,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_129,p:{scaleX:1.387,scaleY:1.387,x:10.2,y:-3.3}},{t:this.shape_128,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_127,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_126,p:{scaleX:1.387,scaleY:1.387,y:-3.3,x:10.1}},{t:this.shape_125,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_124,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_123,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_122,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_121,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_120,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.6}},{t:this.shape_119,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.6}},{t:this.shape_118,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_117,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_116,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_115,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_114,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_113,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_112,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_111,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_110,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_109,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_41,p:{scaleX:1.387,scaleY:1.387,x:-10.3,skewY:0,y:-2.6}},{t:this.shape_40,p:{scaleX:1.387,scaleY:1.387,skewY:0,x:-10.2,y:-2.6}},{t:this.shape_108,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_107,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_106,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_105,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.6}},{t:this.shape_104,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_103,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_102,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_101,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_100,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_99,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.6}},{t:this.shape_98,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.6}},{t:this.shape_97,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_96,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_95,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_94,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_93,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_92,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_91,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_90,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_89,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.6}},{t:this.shape_88,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_87,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_86,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_85,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.6}},{t:this.shape_84,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_83,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_82,p:{scaleX:1.387,scaleY:1.387,x:-10.2,y:-2.7}},{t:this.shape_81,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.6}},{t:this.shape_80,p:{scaleX:1.387,scaleY:1.387,x:-10.3,y:-2.7}},{t:this.shape_10,p:{scaleX:1.387,scaleY:1.387,x:-10.3,skewY:0,y:-2.7}},{t:this.shape_79,p:{scaleX:1.387,scaleY:1.387,y:-4.6,x:-0.2}},{t:this.shape_78,p:{scaleX:1.387,scaleY:1.387,y:-4.6,x:-0.2}},{t:this.shape_77,p:{scaleX:1.387,scaleY:1.387,y:-4.5}},{t:this.shape_76,p:{scaleX:1.387,scaleY:1.387,y:-4.6}},{t:this.shape_75,p:{scaleX:1.387,scaleY:1.387,x:-8.1,y:-12.2}},{t:this.shape_74,p:{scaleX:1.387,scaleY:1.387,y:-12.2,x:8.1}},{t:this.shape_73,p:{scaleX:1.387,scaleY:1.387,x:-13.9,y:-15.9}},{t:this.shape_72,p:{scaleX:1.387,scaleY:1.387,y:1.7}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.386,scaleY:1.386,x:-7.9,y:11.6}},{t:this.shape_189,p:{scaleX:1.386,scaleY:1.386,x:-7.9,y:11.7}},{t:this.shape_188,p:{scaleX:1.386,scaleY:1.386,x:-7.9,y:11.6}},{t:this.shape_187,p:{scaleX:1.386,scaleY:1.386,y:11.1,x:7.5}},{t:this.shape_186,p:{scaleX:1.386,scaleY:1.386,y:11.1}},{t:this.shape_185,p:{scaleX:1.386,scaleY:1.386,y:11.1,x:7.5}},{t:this.shape_184,p:{scaleX:1.386,scaleY:1.386,x:13.5,y:4.4}},{t:this.shape_183,p:{scaleX:1.386,scaleY:1.386,x:13.5,y:4.4}},{t:this.shape_182,p:{scaleX:1.386,scaleY:1.386,x:13.5,y:4.4}},{t:this.shape_181,p:{scaleX:1.386,scaleY:1.386,x:-14.1,y:4.4}},{t:this.shape_180,p:{scaleX:1.386,scaleY:1.386,x:-14.1,y:4.5}},{t:this.shape_179,p:{scaleX:1.386,scaleY:1.386,x:-14.1,y:4.5}},{t:this.shape_178,p:{scaleX:1.386,scaleY:1.386,y:-0.3}},{t:this.shape_177,p:{scaleX:1.386,scaleY:1.386,y:-0.3,x:-0.6}},{t:this.shape_176,p:{scaleX:1.386,scaleY:1.386,x:7.1,y:0.1}},{t:this.shape_175,p:{scaleX:1.386,scaleY:1.386,y:0.1}},{t:this.shape_174,p:{scaleX:1.386,scaleY:1.386,x:-7.5,y:0.1}},{t:this.shape_173,p:{scaleX:1.386,scaleY:1.386,x:-7.5,y:0.1}},{t:this.shape_172,p:{scaleX:1.386,scaleY:1.386,y:8.8}},{t:this.shape_171,p:{scaleX:1.386,scaleY:1.386,y:-17.2}},{t:this.shape_170,p:{scaleX:1.386,scaleY:1.386,y:-17.2}},{t:this.shape_169,p:{scaleX:1.386,scaleY:1.386,x:12.9,y:-8.2}},{t:this.shape_168,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_167,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_166,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_165,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_164,p:{scaleX:1.386,scaleY:1.386,y:4.7,x:10.1}},{t:this.shape_163,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_162,p:{scaleX:1.386,scaleY:1.386,y:4.7,x:10.1}},{t:this.shape_161,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_160,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_159,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_158,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_157,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_156,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_155,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_154,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_43,p:{scaleX:1.386,scaleY:1.386,x:10.1,skewY:0,y:4.6}},{t:this.shape_153,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_152,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_151,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_150,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_149,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_148,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_147,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_146,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_145,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_144,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_143,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.7}},{t:this.shape_142,p:{scaleX:1.386,scaleY:1.386,y:4.7,x:10.1}},{t:this.shape_141,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_140,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_139,p:{scaleX:1.386,scaleY:1.386,y:4.7,x:10.1}},{t:this.shape_138,p:{scaleX:1.386,scaleY:1.386,y:4.7,x:10.1}},{t:this.shape_137,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_136,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_24,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:10.1,y:4.6}},{t:this.shape_135,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_22,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:10.1,y:4.6}},{t:this.shape_134,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_133,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_132,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_18,p:{scaleX:1.386,scaleY:1.386,x:10.1,skewY:0,y:4.6}},{t:this.shape_17,p:{scaleX:1.386,scaleY:1.386,x:10.1,skewY:0,y:4.6}},{t:this.shape_131,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_15,p:{scaleX:1.386,scaleY:1.386,x:10.1,skewY:0,y:4.6}},{t:this.shape_130,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_129,p:{scaleX:1.386,scaleY:1.386,x:10.1,y:4.6}},{t:this.shape_128,p:{scaleX:1.386,scaleY:1.386,y:4.7,x:10.1}},{t:this.shape_127,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_126,p:{scaleX:1.386,scaleY:1.386,y:4.6,x:10.1}},{t:this.shape_125,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_124,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_123,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_122,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_121,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_120,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_119,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_118,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_117,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_116,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_115,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_114,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_113,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_112,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_111,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_110,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_109,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_41,p:{scaleX:1.386,scaleY:1.386,x:-10.3,skewY:0,y:5.3}},{t:this.shape_40,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:-10.3,y:5.3}},{t:this.shape_108,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_107,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_106,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_105,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_104,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_103,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_102,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_101,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_100,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_99,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_98,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_97,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_96,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_95,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_94,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_93,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_92,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_91,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_90,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_89,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_88,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_87,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_86,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_85,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_84,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_83,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_82,p:{scaleX:1.386,scaleY:1.386,x:-10.2,y:5.3}},{t:this.shape_81,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_80,p:{scaleX:1.386,scaleY:1.386,x:-10.3,y:5.3}},{t:this.shape_10,p:{scaleX:1.386,scaleY:1.386,x:-10.3,skewY:0,y:5.3}},{t:this.shape_79,p:{scaleX:1.386,scaleY:1.386,y:3.4,x:-0.3}},{t:this.shape_78,p:{scaleX:1.386,scaleY:1.386,y:3.4,x:-0.3}},{t:this.shape_77,p:{scaleX:1.386,scaleY:1.386,y:3.5}},{t:this.shape_76,p:{scaleX:1.386,scaleY:1.386,y:3.4}},{t:this.shape_75,p:{scaleX:1.386,scaleY:1.386,x:-8.1,y:-4.2}},{t:this.shape_74,p:{scaleX:1.386,scaleY:1.386,y:-4.2,x:8.1}},{t:this.shape_73,p:{scaleX:1.386,scaleY:1.386,x:-13.9,y:-7.9}},{t:this.shape_72,p:{scaleX:1.386,scaleY:1.386,y:9.6}}]},3).to({state:[]},2).to({state:[{t:this.shape_190,p:{scaleX:1.391,scaleY:1.391,x:-8,y:12.1}},{t:this.shape_189,p:{scaleX:1.391,scaleY:1.391,x:-8,y:12.1}},{t:this.shape_188,p:{scaleX:1.391,scaleY:1.391,x:-8,y:12.1}},{t:this.shape_187,p:{scaleX:1.391,scaleY:1.391,y:11.5,x:7.6}},{t:this.shape_186,p:{scaleX:1.391,scaleY:1.391,y:11.5}},{t:this.shape_185,p:{scaleX:1.391,scaleY:1.391,y:11.5,x:7.6}},{t:this.shape_184,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:4.8}},{t:this.shape_183,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:4.7}},{t:this.shape_182,p:{scaleX:1.391,scaleY:1.391,x:13.6,y:4.8}},{t:this.shape_181,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:4.8}},{t:this.shape_180,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:4.8}},{t:this.shape_179,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:4.8}},{t:this.shape_178,p:{scaleX:1.391,scaleY:1.391,y:0.1}},{t:this.shape_177,p:{scaleX:1.391,scaleY:1.391,y:0.1,x:-0.6}},{t:this.shape_171,p:{scaleX:1.391,scaleY:1.391,y:-16.9}},{t:this.shape_170,p:{scaleX:1.391,scaleY:1.391,y:-16.9}}]},1).to({state:[{t:this.shape_190,p:{scaleX:1.391,scaleY:1.391,x:-8,y:3.4}},{t:this.shape_189,p:{scaleX:1.391,scaleY:1.391,x:-8,y:3.4}},{t:this.shape_188,p:{scaleX:1.391,scaleY:1.391,x:-8,y:3.4}},{t:this.shape_187,p:{scaleX:1.391,scaleY:1.391,y:2.9,x:7.6}},{t:this.shape_186,p:{scaleX:1.391,scaleY:1.391,y:2.9}},{t:this.shape_185,p:{scaleX:1.391,scaleY:1.391,y:2.9,x:7.6}},{t:this.shape_184,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:-3.9}},{t:this.shape_183,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:-3.9}},{t:this.shape_182,p:{scaleX:1.391,scaleY:1.391,x:13.6,y:-3.9}},{t:this.shape_181,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-3.8}},{t:this.shape_180,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-3.8}},{t:this.shape_179,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-3.8}},{t:this.shape_178,p:{scaleX:1.391,scaleY:1.391,y:-8.6}},{t:this.shape_177,p:{scaleX:1.391,scaleY:1.391,y:-8.6,x:-0.6}},{t:this.shape_171,p:{scaleX:1.391,scaleY:1.391,y:-25.6}},{t:this.shape_170,p:{scaleX:1.391,scaleY:1.391,y:-25.5}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.389,scaleY:1.389,x:-8,y:-4.7}},{t:this.shape_189,p:{scaleX:1.389,scaleY:1.389,x:-8,y:-4.7}},{t:this.shape_188,p:{scaleX:1.389,scaleY:1.389,x:-8,y:-4.7}},{t:this.shape_187,p:{scaleX:1.389,scaleY:1.389,y:-5.2,x:7.5}},{t:this.shape_186,p:{scaleX:1.389,scaleY:1.389,y:-5.2}},{t:this.shape_185,p:{scaleX:1.389,scaleY:1.389,y:-5.2,x:7.5}},{t:this.shape_184,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:-12}},{t:this.shape_183,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:-12}},{t:this.shape_182,p:{scaleX:1.389,scaleY:1.389,x:13.5,y:-12}},{t:this.shape_181,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:-11.9}},{t:this.shape_180,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:-11.9}},{t:this.shape_179,p:{scaleX:1.389,scaleY:1.389,x:-14.1,y:-11.9}},{t:this.shape_178,p:{scaleX:1.389,scaleY:1.389,y:-16.7}},{t:this.shape_177,p:{scaleX:1.389,scaleY:1.389,y:-16.6,x:-0.7}},{t:this.shape_171,p:{scaleX:1.389,scaleY:1.389,y:-33.6}},{t:this.shape_170,p:{scaleX:1.389,scaleY:1.389,y:-33.6}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-13.4}},{t:this.shape_189,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-13.4}},{t:this.shape_188,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-13.4}},{t:this.shape_187,p:{scaleX:1.388,scaleY:1.388,y:-13.9,x:7.5}},{t:this.shape_186,p:{scaleX:1.388,scaleY:1.388,y:-13.9}},{t:this.shape_185,p:{scaleX:1.388,scaleY:1.388,y:-13.9,x:7.5}},{t:this.shape_184,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-20.7}},{t:this.shape_183,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-20.7}},{t:this.shape_182,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-20.7}},{t:this.shape_181,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-20.6}},{t:this.shape_180,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-20.6}},{t:this.shape_179,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-20.6}},{t:this.shape_178,p:{scaleX:1.388,scaleY:1.388,y:-25.4}},{t:this.shape_177,p:{scaleX:1.388,scaleY:1.388,y:-25.3,x:-0.7}},{t:this.shape_171,p:{scaleX:1.388,scaleY:1.388,y:-42.3}},{t:this.shape_170,p:{scaleX:1.388,scaleY:1.388,y:-42.3}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-21.1}},{t:this.shape_189,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-21.1}},{t:this.shape_188,p:{scaleX:1.388,scaleY:1.388,x:-8,y:-21.1}},{t:this.shape_187,p:{scaleX:1.388,scaleY:1.388,y:-21.7,x:7.5}},{t:this.shape_186,p:{scaleX:1.388,scaleY:1.388,y:-21.7}},{t:this.shape_185,p:{scaleX:1.388,scaleY:1.388,y:-21.7,x:7.5}},{t:this.shape_184,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-28.4}},{t:this.shape_183,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-28.4}},{t:this.shape_182,p:{scaleX:1.388,scaleY:1.388,x:13.5,y:-28.4}},{t:this.shape_181,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-28.4}},{t:this.shape_180,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-28.3}},{t:this.shape_179,p:{scaleX:1.388,scaleY:1.388,x:-14.1,y:-28.3}},{t:this.shape_178,p:{scaleX:1.388,scaleY:1.388,y:-33.1}},{t:this.shape_177,p:{scaleX:1.388,scaleY:1.388,y:-33.1,x:-0.7}},{t:this.shape_171,p:{scaleX:1.388,scaleY:1.388,y:-50.1}},{t:this.shape_170,p:{scaleX:1.388,scaleY:1.388,y:-50}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.391,scaleY:1.391,x:-8,y:-12.9}},{t:this.shape_189,p:{scaleX:1.391,scaleY:1.391,x:-8,y:-12.9}},{t:this.shape_188,p:{scaleX:1.391,scaleY:1.391,x:-8,y:-12.9}},{t:this.shape_187,p:{scaleX:1.391,scaleY:1.391,y:-13.5,x:7.6}},{t:this.shape_186,p:{scaleX:1.391,scaleY:1.391,y:-13.5}},{t:this.shape_185,p:{scaleX:1.391,scaleY:1.391,y:-13.5,x:7.6}},{t:this.shape_184,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:-20.2}},{t:this.shape_183,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:-20.3}},{t:this.shape_182,p:{scaleX:1.391,scaleY:1.391,x:13.6,y:-20.2}},{t:this.shape_181,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-20.2}},{t:this.shape_180,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-20.2}},{t:this.shape_179,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:-20.2}},{t:this.shape_178,p:{scaleX:1.391,scaleY:1.391,y:-24.9}},{t:this.shape_177,p:{scaleX:1.391,scaleY:1.391,y:-24.9,x:-0.6}},{t:this.shape_171,p:{scaleX:1.391,scaleY:1.391,y:-41.9}},{t:this.shape_170,p:{scaleX:1.391,scaleY:1.391,y:-41.9}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:-4.6}},{t:this.shape_189,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:-4.6}},{t:this.shape_188,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:-4.6}},{t:this.shape_187,p:{scaleX:1.387,scaleY:1.387,y:-5.1,x:7.5}},{t:this.shape_186,p:{scaleX:1.387,scaleY:1.387,y:-5.1}},{t:this.shape_185,p:{scaleX:1.387,scaleY:1.387,y:-5.1,x:7.5}},{t:this.shape_184,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-11.8}},{t:this.shape_183,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-11.9}},{t:this.shape_182,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-11.8}},{t:this.shape_181,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-11.8}},{t:this.shape_180,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-11.8}},{t:this.shape_179,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-11.8}},{t:this.shape_178,p:{scaleX:1.387,scaleY:1.387,y:-16.5}},{t:this.shape_177,p:{scaleX:1.387,scaleY:1.387,y:-16.5,x:-0.6}},{t:this.shape_171,p:{scaleX:1.387,scaleY:1.387,y:-33.5}},{t:this.shape_170,p:{scaleX:1.387,scaleY:1.387,y:-33.4}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.6}},{t:this.shape_189,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.6}},{t:this.shape_188,p:{scaleX:1.387,scaleY:1.387,x:-7.9,y:3.6}},{t:this.shape_187,p:{scaleX:1.387,scaleY:1.387,y:3.1,x:7.5}},{t:this.shape_186,p:{scaleX:1.387,scaleY:1.387,y:3.1}},{t:this.shape_185,p:{scaleX:1.387,scaleY:1.387,y:3.1,x:7.5}},{t:this.shape_184,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-3.6}},{t:this.shape_183,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-3.7}},{t:this.shape_182,p:{scaleX:1.387,scaleY:1.387,x:13.5,y:-3.6}},{t:this.shape_181,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-3.6}},{t:this.shape_180,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-3.6}},{t:this.shape_179,p:{scaleX:1.387,scaleY:1.387,x:-14.1,y:-3.6}},{t:this.shape_178,p:{scaleX:1.387,scaleY:1.387,y:-8.3}},{t:this.shape_177,p:{scaleX:1.387,scaleY:1.387,y:-8.3,x:-0.6}},{t:this.shape_171,p:{scaleX:1.387,scaleY:1.387,y:-25.3}},{t:this.shape_170,p:{scaleX:1.387,scaleY:1.387,y:-25.2}}]},3).to({state:[{t:this.shape_190,p:{scaleX:1.391,scaleY:1.391,x:-8,y:11.7}},{t:this.shape_189,p:{scaleX:1.391,scaleY:1.391,x:-8,y:11.7}},{t:this.shape_188,p:{scaleX:1.391,scaleY:1.391,x:-8,y:11.7}},{t:this.shape_187,p:{scaleX:1.391,scaleY:1.391,y:11.1,x:7.6}},{t:this.shape_186,p:{scaleX:1.391,scaleY:1.391,y:11.1}},{t:this.shape_185,p:{scaleX:1.391,scaleY:1.391,y:11.1,x:7.6}},{t:this.shape_184,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:4.4}},{t:this.shape_183,p:{scaleX:1.391,scaleY:1.391,x:13.5,y:4.3}},{t:this.shape_182,p:{scaleX:1.391,scaleY:1.391,x:13.6,y:4.4}},{t:this.shape_181,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:4.4}},{t:this.shape_180,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:4.4}},{t:this.shape_179,p:{scaleX:1.391,scaleY:1.391,x:-14.1,y:4.4}},{t:this.shape_178,p:{scaleX:1.391,scaleY:1.391,y:-0.3}},{t:this.shape_177,p:{scaleX:1.391,scaleY:1.391,y:-0.3,x:-0.6}},{t:this.shape_171,p:{scaleX:1.391,scaleY:1.391,y:-17.3}},{t:this.shape_170,p:{scaleX:1.391,scaleY:1.391,y:-17.3}}]},3).to({state:[]},2).to({state:[{t:this.shape_71,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:2.9,y:11.3,skewY:0,skewX:0}},{t:this.shape_70,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:2.9,y:11.3,skewY:0,skewX:0}},{t:this.shape_69,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:2.9,y:11.3,skewY:0,skewX:0}},{t:this.shape_68,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-4.9,y:12,skewY:0,skewX:0}},{t:this.shape_67,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-4.9,y:12,skewY:0,skewX:0}},{t:this.shape_66,p:{scaleX:1.386,skewY:0,x:-4.9,y:12,scaleY:1.386}},{t:this.shape_65,p:{scaleX:1.386,scaleY:1.386,y:-0.3,skewY:0,x:-0.8}},{t:this.shape_64,p:{scaleX:1.386,scaleY:1.386,y:-0.3,skewY:0,x:-0.8}},{t:this.shape_63,p:{scaleX:1.386,scaleY:1.386,y:-17.3,skewY:0,x:-0.7}},{t:this.shape_62,p:{scaleX:1.386,scaleY:1.386,y:-17.3,skewY:0,x:-0.7}},{t:this.shape_61,p:{scaleX:1.386,scaleY:1.386,y:-8.1,skewY:0,x:-13.9}},{t:this.shape_60,p:{scaleX:1.386,scaleY:1.386,y:0.1,x:4,skewY:0}},{t:this.shape_59,p:{scaleX:1.386,scaleY:1.386,y:0.1,x:4,skewY:0}},{t:this.shape_58,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_57,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_56,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_55,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_54,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_53,p:{scaleX:1.386,scaleY:1.386,y:5.4,skewY:0,x:1.2}},{t:this.shape_52,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_51,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_50,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_49,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_48,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_47,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_46,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_45,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_44,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_43,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_42,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_41,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_40,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_39,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_38,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_37,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_36,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_35,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_34,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_33,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_32,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_31,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_30,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_29,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_28,p:{scaleX:1.386,scaleY:1.386,x:1.2,y:5.4,skewY:0}},{t:this.shape_27,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_26,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_25,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_24,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_23,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_22,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_21,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_20,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_19,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_18,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_17,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_16,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_15,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_14,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_13,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_12,p:{scaleX:1.386,scaleY:1.386,y:5.4,skewY:0,x:1.2}},{t:this.shape_11,p:{scaleX:1.386,scaleY:1.386,skewY:0,x:1.2,y:5.4}},{t:this.shape_10,p:{scaleX:1.386,scaleY:1.386,x:1.2,skewY:0,y:5.4}},{t:this.shape_9,p:{scaleX:1.386,scaleY:1.386,y:-4.2,skewY:0,x:3.3}},{t:this.instance,p:{regY:12.1,scaleX:1.386,scaleY:1.386,y:0.1,regX:11.9,x:1.8,skewY:0}},{t:this.shape_8,p:{scaleX:1.386,scaleY:1.386,rotation:0,y:6.6,x:-6.4,skewY:0,skewX:0}},{t:this.shape_7,p:{scaleX:1.386,scaleY:1.386,rotation:0,y:6.6,x:-6.4,skewY:0,skewX:0}},{t:this.shape_6,p:{scaleX:1.386,scaleY:1.386,rotation:0,x:-6.4,y:6.6,skewY:0,skewX:0}},{t:this.shape_5,p:{scaleX:1.386,scaleY:1.386,x:10.6,skewY:0,y:9}},{t:this.shape_4,p:{scaleX:1.386,scaleY:1.386,x:13.5,y:2,skewY:0}},{t:this.shape_3,p:{scaleX:1.386,scaleY:1.386,x:13.5,y:2,skewY:0}},{t:this.shape_2,p:{scaleX:1.386,scaleY:1.386,x:14.6,y:2.1,skewY:0}},{t:this.shape_1,p:{scaleX:1.386,scaleY:1.386,x:14.6,y:2.1,skewY:0}},{t:this.shape,p:{scaleX:1.386,scaleY:1.386,x:14.7,skewY:0,y:2.1}}]},1).to({state:[{t:this.shape_71,p:{scaleX:1.385,scaleY:1.386,rotation:0,x:-2.9,y:11.5,skewY:180,skewX:0}},{t:this.shape_70,p:{scaleX:1.385,scaleY:1.386,rotation:0,x:-2.9,y:11.5,skewY:180,skewX:0}},{t:this.shape_69,p:{scaleX:1.385,scaleY:1.386,rotation:0,x:-2.9,y:11.5,skewY:180,skewX:0}},{t:this.shape_68,p:{scaleX:1.385,scaleY:1.386,rotation:0,x:4.9,y:12.3,skewY:180,skewX:0}},{t:this.shape_67,p:{scaleX:1.385,scaleY:1.386,rotation:0,x:4.9,y:12.2,skewY:180,skewX:0}},{t:this.shape_66,p:{scaleX:1.385,skewY:180,x:4.9,y:12.2,scaleY:1.386}},{t:this.shape_65,p:{scaleX:1.385,scaleY:1.386,y:0,skewY:180,x:0.8}},{t:this.shape_64,p:{scaleX:1.385,scaleY:1.386,y:-0.1,skewY:180,x:0.8}},{t:this.shape_63,p:{scaleX:1.385,scaleY:1.386,y:-17.1,skewY:180,x:0.7}},{t:this.shape_62,p:{scaleX:1.385,scaleY:1.386,y:-17.1,skewY:180,x:0.7}},{t:this.shape_61,p:{scaleX:1.385,scaleY:1.386,y:-7.9,skewY:180,x:13.9}},{t:this.shape_60,p:{scaleX:1.385,scaleY:1.386,y:0.4,x:-4,skewY:180}},{t:this.shape_59,p:{scaleX:1.385,scaleY:1.386,y:0.4,x:-4,skewY:180}},{t:this.shape_58,p:{scaleX:1.385,scaleY:1.386,x:-1.2,y:5.7,skewY:180}},{t:this.shape_57,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_56,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_55,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_54,p:{scaleX:1.385,scaleY:1.386,x:-1.2,y:5.7,skewY:180}},{t:this.shape_53,p:{scaleX:1.385,scaleY:1.386,y:5.7,skewY:180,x:-1.2}},{t:this.shape_52,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_51,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_50,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_49,p:{scaleX:1.385,scaleY:1.386,x:-1.2,y:5.6,skewY:180}},{t:this.shape_48,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_47,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_46,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_45,p:{scaleX:1.385,scaleY:1.386,x:-1.2,y:5.7,skewY:180}},{t:this.shape_44,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_43,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_42,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_41,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_40,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_39,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_38,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_37,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_36,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_35,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_34,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_33,p:{scaleX:1.385,scaleY:1.386,x:-1.2,y:5.7,skewY:180}},{t:this.shape_32,p:{scaleX:1.385,scaleY:1.386,x:-1.2,y:5.7,skewY:180}},{t:this.shape_31,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_30,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_29,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_28,p:{scaleX:1.385,scaleY:1.386,x:-1.2,y:5.7,skewY:180}},{t:this.shape_27,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_26,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_25,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_24,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_23,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_22,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_21,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_20,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_19,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_18,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_17,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_16,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_15,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_14,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_13,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_12,p:{scaleX:1.385,scaleY:1.386,y:5.7,skewY:180,x:-1.2}},{t:this.shape_11,p:{scaleX:1.385,scaleY:1.386,skewY:180,x:-1.2,y:5.6}},{t:this.shape_10,p:{scaleX:1.385,scaleY:1.386,x:-1.2,skewY:180,y:5.6}},{t:this.shape_9,p:{scaleX:1.385,scaleY:1.386,y:-4,skewY:180,x:-3.3}},{t:this.instance,p:{regY:12.2,scaleX:1.385,scaleY:1.386,y:0.9,regX:11.8,x:-1.7,skewY:180}},{t:this.shape_8,p:{scaleX:1.385,scaleY:1.386,rotation:0,y:6.8,x:6.4,skewY:180,skewX:0}},{t:this.shape_7,p:{scaleX:1.385,scaleY:1.386,rotation:0,y:6.8,x:6.4,skewY:180,skewX:0}},{t:this.shape_6,p:{scaleX:1.385,scaleY:1.386,rotation:0,x:6.4,y:6.9,skewY:180,skewX:0}},{t:this.shape_5,p:{scaleX:1.385,scaleY:1.386,x:-10.6,skewY:180,y:9.2}},{t:this.shape_4,p:{scaleX:1.385,scaleY:1.386,x:-13.5,y:2.2,skewY:180}},{t:this.shape_3,p:{scaleX:1.385,scaleY:1.386,x:-13.5,y:2.3,skewY:180}},{t:this.shape_2,p:{scaleX:1.385,scaleY:1.386,x:-14.6,y:2.4,skewY:180}},{t:this.shape_1,p:{scaleX:1.385,scaleY:1.386,x:-14.6,y:2.3,skewY:180}},{t:this.shape,p:{scaleX:1.385,scaleY:1.386,x:-14.7,skewY:180,y:2.3}}]},1).to({state:[{t:this.shape_190,p:{scaleX:1.39,scaleY:1.39,x:-8,y:12.3}},{t:this.shape_189,p:{scaleX:1.39,scaleY:1.39,x:-8,y:12.3}},{t:this.shape_188,p:{scaleX:1.39,scaleY:1.39,x:-8,y:12.3}},{t:this.shape_187,p:{scaleX:1.39,scaleY:1.39,y:11.8,x:7.5}},{t:this.shape_186,p:{scaleX:1.39,scaleY:1.39,y:11.8}},{t:this.shape_185,p:{scaleX:1.39,scaleY:1.39,y:11.8,x:7.5}},{t:this.shape_184,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:5.1}},{t:this.shape_183,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:5}},{t:this.shape_182,p:{scaleX:1.39,scaleY:1.39,x:13.5,y:5}},{t:this.shape_181,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:5.1}},{t:this.shape_180,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:5.1}},{t:this.shape_179,p:{scaleX:1.39,scaleY:1.39,x:-14.1,y:5.1}},{t:this.shape_178,p:{scaleX:1.39,scaleY:1.39,y:0.4}},{t:this.shape_177,p:{scaleX:1.39,scaleY:1.39,y:0.4,x:-0.6}},{t:this.shape_176,p:{scaleX:1.39,scaleY:1.39,x:7.1,y:0.8}},{t:this.shape_175,p:{scaleX:1.39,scaleY:1.39,y:0.8}},{t:this.shape_174,p:{scaleX:1.39,scaleY:1.39,x:-7.5,y:0.8}},{t:this.shape_173,p:{scaleX:1.39,scaleY:1.39,x:-7.5,y:0.8}},{t:this.shape_172,p:{scaleX:1.39,scaleY:1.39,y:9.5}},{t:this.shape_171,p:{scaleX:1.39,scaleY:1.39,y:-16.6}},{t:this.shape_170,p:{scaleX:1.39,scaleY:1.39,y:-16.6}},{t:this.shape_169,p:{scaleX:1.39,scaleY:1.39,x:12.9,y:-7.6}},{t:this.shape_168,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_167,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_166,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_165,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_164,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_163,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_162,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_161,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_160,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_159,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_158,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_157,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_156,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_155,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_154,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_43,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:5.3}},{t:this.shape_153,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:5.3}},{t:this.shape_152,p:{scaleX:1.39,scaleY:1.39,x:10.1,y:5.3}},{t:this.shape_151,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_150,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_149,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_148,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_147,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_146,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_145,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_144,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_143,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_142,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_141,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_140,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_139,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_138,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_137,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_136,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_24,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:10.2,y:5.3}},{t:this.shape_135,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_22,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:10.2,y:5.3}},{t:this.shape_134,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_133,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_132,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_18,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:5.3}},{t:this.shape_17,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:5.3}},{t:this.shape_131,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_15,p:{scaleX:1.39,scaleY:1.39,x:10.1,skewY:0,y:5.3}},{t:this.shape_130,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_129,p:{scaleX:1.39,scaleY:1.39,x:10.2,y:5.3}},{t:this.shape_128,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_127,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_126,p:{scaleX:1.39,scaleY:1.39,y:5.3,x:10.1}},{t:this.shape_125,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_124,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_123,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_122,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_121,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_120,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_119,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_118,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_117,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_116,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_115,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_114,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_113,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_112,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_111,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_110,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_109,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_41,p:{scaleX:1.39,scaleY:1.39,x:-10.3,skewY:0,y:6}},{t:this.shape_40,p:{scaleX:1.39,scaleY:1.39,skewY:0,x:-10.3,y:6}},{t:this.shape_108,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_107,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_106,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_105,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_104,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_103,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_102,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_101,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_100,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_99,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_98,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_97,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_96,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_95,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_94,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_93,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_92,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_91,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_90,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_89,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_88,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_87,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_86,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_85,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_84,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_83,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_82,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_81,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_80,p:{scaleX:1.39,scaleY:1.39,x:-10.3,y:6}},{t:this.shape_10,p:{scaleX:1.39,scaleY:1.39,x:-10.3,skewY:0,y:6}},{t:this.shape_79,p:{scaleX:1.39,scaleY:1.39,y:4.1,x:-0.3}},{t:this.shape_78,p:{scaleX:1.39,scaleY:1.39,y:4.1,x:-0.3}},{t:this.shape_77,p:{scaleX:1.39,scaleY:1.39,y:4.2}},{t:this.shape_76,p:{scaleX:1.39,scaleY:1.39,y:4.1}},{t:this.shape_75,p:{scaleX:1.39,scaleY:1.39,x:-8.2,y:-3.6}},{t:this.shape_74,p:{scaleX:1.39,scaleY:1.39,y:-3.5,x:8.1}},{t:this.shape_73,p:{scaleX:1.39,scaleY:1.39,x:-13.9,y:-7.3}},{t:this.shape_72,p:{scaleX:1.39,scaleY:1.39,y:10.3}}]},1).to({state:[{t:this.shape_206,p:{scaleX:1.378,scaleY:1.378,x:-7.9,y:11.9}},{t:this.shape_205,p:{scaleX:1.378,scaleY:1.378,x:-7.9,y:11.9}},{t:this.shape_204,p:{scaleX:1.378,scaleY:1.378,x:-7.9,y:11.9}},{t:this.shape_203,p:{scaleX:1.378,scaleY:1.378,x:7.4,y:11.3}},{t:this.shape_202,p:{scaleX:1.378,scaleY:1.378,x:7.4,y:11.4}},{t:this.shape_201,p:{scaleX:1.378,scaleY:1.378,y:11.4,x:7.5}},{t:this.shape_200,p:{scaleX:1.378,scaleY:1.378,x:13.4,y:4.7}},{t:this.shape_199,p:{scaleX:1.378,scaleY:1.378,x:13.4,y:4.6}},{t:this.shape_198,p:{scaleX:1.378,scaleY:1.378,x:13.4,y:4.7}},{t:this.shape_197,p:{scaleX:1.378,scaleY:1.378,x:-14.1,y:4.7}},{t:this.shape_196,p:{scaleX:1.378,scaleY:1.378,x:-14,y:4.7}},{t:this.shape_195,p:{scaleX:1.378,scaleY:1.378,x:-14,y:4.8}},{t:this.shape_194,p:{scaleX:1.378,scaleY:1.378,y:0}},{t:this.shape_193,p:{scaleX:1.378,scaleY:1.378,y:0}},{t:this.shape_192,p:{scaleX:1.378,scaleY:1.378,y:-16.8}},{t:this.shape_191,p:{scaleX:1.378,scaleY:1.378,y:-16.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.7,-20.6,35.1,42);


(lib.goal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#162618").s().p("AiFEWQg9gNAAggQAAgnBVgLIAAgiQgGACgGAAQgKAAgIgHQgHgHgBgKIgFgcIiNAAQgIAAgGgGQgGgFAAgJIAAlYQAAgIAGgGQAGgGAIAAIHcAAQAIAAAGAGQAGAGAAAIIAADRQAfAHAZATIACABIAQAQIAAAAQAhAjADAwIABADIAAANIgBACQgDAwggAlIgKAKIgGAFIgCABQgiAcgsACIgCABIgOAAIgCgBQgsgCgjgcIgLgKQgcgcgJgmIgDAOQAAAKgIAHQgIAHgKAAQgIAAgGgFIgDACIAAAiQA1AGAYARQARALAAARQAAAgg+ANQghAIgsAAQgsAAgjgIgAhgBnIACAWQAAAFAFABIAABGQglADgYAJQgYAJAAALQAAAOAjAJQAjAKAyAAQAyAAAhgKQAkgJAAgOQAAgMgcgJQgbgJgngCIAAhiIACAAIgCAWQAAAGAGAAQAHAAAAgGIABgWIAVAAIgEAWQAAAGAGAAQAGAAAAgGIAIguIAeAAIAAAGIABAAQACAvAiAhIAAABIAAAAIAIAHIAAAAQAeAZAoACIAMAAQAngCAfgZIAGgGIABAAIABgBIABgBIAEgFQAeggABgrIABAAIAAgMIgBAAQgBgrgegeIgEgEIgCgDIgBAAIgHgGIAAAAQgcgXglgDIAAjiIncAAIAAFYICeAAIAIAuQAAAGAGAAQAGAAAAgGIgDgWgAgOBaIABgLIAXAAIgCALgAgdBaIAAgLIAEAAIgBALgAh4BaIgCgLIAYAAIABALg");
	this.shape.setTransform(0,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#492630").s().p("Ag6B4IgBjvIAGAAIAAByIAsAAQADgxAUgmIABgBIAHAHIAAAAIABABQgUAjgCAtIA7AAIAAAKIg8AAQABAxAXAfIAAAAIgBABIgBABIAAAAIgHAGIgBgBQgXgkAAgzIgsAAIAABzg");
	this.shape_1.setTransform(23.4,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#71341B").s().p("AgEB4IAAhzIgsAAQAAA0gaAkIAAAAIgIgHIgBAAIAAgBQAXgfABgxIg8AAIAAgFIAAgFIA7AAQgCgtgUgjIAAgBIAIgHIABABQAWAlADAyIAsAAIAAhyIAJAAIAAByIAsAAQADgxAWgmIABgBIAHAHIAAAAIABABQgUAjgCAtIA7AAIAAAKIg8AAQABAxAXAfIAAAAIgCACIAAAAIgHAGIgBgBQgZgkAAgzIgsAAIAABzg");
	this.shape_2.setTransform(17.4,7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F27F32").s().p("Ag7h3IABAAQAwAAAgAhIAAAAIACACIAFAFQAfAhAAAuQAAAugfAjIgFAEIgCACIAAAAQggAhgwAAg");
	this.shape_3.setTransform(23.4,7.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F69731").s().p("AhSBWIgBAAQgkgkAAgyQAAgyAkgjIABgBQAjghAvAAIAAAAQAwAAAiAhIAAAAIACACIAFAFQAfAhAAAuQAAAugfAjIgFAEIgCACIAAAAQgiAhgwAAQgvAAgjgig");
	this.shape_4.setTransform(17.4,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#592462").s().p("AhrAMQgFAAgEgEQgDgDAAgFQAAgEADgDQAEgDAFAAIDXAAQAFAAAEADQADADAAAEQAAAFgDADQgEAEgFAAg");
	this.shape_5.setTransform(-5.5,-11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA7BxIAEgWIgXAAIgBAWQAAAGgHAAQgGAAAAgGIACgWIgWAAIAAAWQAAAGgGAAQgFAAAAgGIAAgWIgWAAIACAWQAAAGgGAAQgGAAAAgGIgCgWIgWAAIADAWQAAAGgGAAQgGAAAAgGIgmjhQAAgGAGAAQAGAAAAAGIAGAjIAlAAIgDgjQAAgGAGAAQAGAAAAAGIADAjIAkAAIAAgjQAAgGAFAAQAGAAAAAGIAAAjIAkAAIADgjQAAgGAGAAQAHAAAAAGIgDAjIAkAAIAGgjQAAgGAGAAQAGAAAAAGIgmDhQAAAGgGAAQgGAAAAgGgAApBOIAYAAIAEgaIgZAAgAAGBOIAXAAIACgaIgZAAgAgcBOIAXAAIAAgaIgZAAgAgoBOIgCgaIgaAAIAFAaIAXAAgAAtAnIAaAAIAFgbIgdAAgAAGAnIAaAAIADgbIgdAAgAgfAnIAaAAIAAgbIgcAAgAgrAnIgDgbIgdAAIAFAbIAbAAgAAwAAIAeAAIAEgZIggAAgAAGAAIAeAAIACgZIggAAgAgiAAIAdAAIAAgZIggAAgAgvAAIgCgZIggAAIAEAZIAeAAgAAzgmIAhAAIAFgaIgjAAgAAGgmIAhAAIACgaIgjAAgAgmgmIAhAAIAAgaIgjAAgAgygmIgCgaIgkAAIAFAaIAhAAg");
	this.shape_6.setTransform(-5.7,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7D2E8A").s().p("AjtCtIAAlZIHbAAIAAFZgAjVCVIGsAAIAAkoImsAAg");
	this.shape_7.setTransform(-5.5,-10);

	this.instance = new lib.Group_4_1();
	this.instance.setTransform(5,-10.4,1,1,0,0,0,10.5,15.2);
	this.instance.alpha = 0.199;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE582F").s().p("AjVCYIAAkvIGsAAIAAEvg");
	this.shape_8.setTransform(-5.5,-10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EE582F").s().p("AgUCcQgIgJgBgMIAAkNQABgMAIgJQAJgJALAAQAMAAAIAJQAKAJAAAMIAAENQAAAMgKAJQgIAJgMAAQgLAAgJgJg");
	this.shape_9.setTransform(-6,7.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7D2E8A").s().p("AhUAXQgjgJAAgOQAAgMAjgJQAkgKAwAAQAxAAAjAKQAkAJAAAMQAAAOgkAJQgjAKgxAAQgwAAgkgKg");
	this.shape_10.setTransform(-5.5,22.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#939596").s().p("AiuAsQhJgTAAgZQAAgZBJgRQBJgTBlAAQBmAABJATQBIARAAAZQAAAZhIATQhJAShmAAQhlAAhJgSg");
	this.shape_11.setTransform(-5.5,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.4,-29.3,62.9,59.5);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg1GAlMMAAAhKWMBqNAAAMAAABKWg");
	mask_1.setTransform(356.4,399);

	// Layer 3
	this.instance = new lib.Group_19();
	this.instance.setTransform(334.2,411.7,1,1,0,0,0,0.9,1.1);

	this.instance_1 = new lib.Group_1_16();
	this.instance_1.setTransform(332.1,411.4,1,1,0,0,0,0.8,1.2);

	this.instance_2 = new lib.Group_2_16();
	this.instance_2.setTransform(331.8,411.5);

	this.instance_3 = new lib.Group_3_16();
	this.instance_3.setTransform(329.7,411.6,1,1,0,0,0,0.7,0.9);

	this.instance_4 = new lib.Group_18();
	this.instance_4.setTransform(311.2,388.7,1,1,0,0,0,0.9,1.1);

	this.instance_5 = new lib.Group_1_15();
	this.instance_5.setTransform(309.1,388.4,1,1,0,0,0,0.8,1.2);

	this.instance_6 = new lib.Group_2_15();
	this.instance_6.setTransform(308.8,388.6);

	this.instance_7 = new lib.Group_3_15();
	this.instance_7.setTransform(306.7,388.6,1,1,0,0,0,0.7,0.9);

	this.instance_8 = new lib.Path_124();
	this.instance_8.setTransform(322.3,399,1,1,0,0,0,30.4,29.6);
	this.instance_8.alpha = 0.602;

	this.instance_9 = new lib.Path_123();
	this.instance_9.setTransform(391.5,603,1,1,0,0,0,3.5,12.5);
	this.instance_9.alpha = 0.199;

	this.instance_10 = new lib.Path_122();
	this.instance_10.setTransform(119.5,467,1,1,0,0,0,3.5,12.5);
	this.instance_10.alpha = 0.199;

	this.instance_11 = new lib.Path_121();
	this.instance_11.setTransform(254.4,195,1,1,0,0,0,12.5,3.5);
	this.instance_11.alpha = 0.199;

	this.instance_12 = new lib.Path_120();
	this.instance_12.setTransform(255.5,263,1,1,0,0,0,3.5,12.5);
	this.instance_12.alpha = 0.199;

	this.instance_13 = new lib.Path_119();
	this.instance_13.setTransform(255.5,331,1,1,0,0,0,3.5,12.5);
	this.instance_13.alpha = 0.199;

	this.instance_14 = new lib.Path_118();
	this.instance_14.setTransform(255.5,399,1,1,0,0,0,3.5,12.5);
	this.instance_14.alpha = 0.199;

	this.instance_15 = new lib.Path_117();
	this.instance_15.setTransform(255.5,467,1,1,0,0,0,3.5,12.5);
	this.instance_15.alpha = 0.199;

	this.instance_16 = new lib.Path_116();
	this.instance_16.setTransform(255.5,535,1,1,0,0,0,3.5,12.5);
	this.instance_16.alpha = 0.199;

	this.instance_17 = new lib.Path_115();
	this.instance_17.setTransform(255.5,603,1,1,0,0,0,3.5,12.5);
	this.instance_17.alpha = 0.199;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF7D7").s().p("EgFTAplMAAAhTJIKnAAMAAABTJg");
	this.shape_1.setTransform(254.4,402.8);

	this.instance_18 = new lib.Path_114();
	this.instance_18.setTransform(458.4,467,1,1,0,0,0,12.5,3.5);
	this.instance_18.alpha = 0.199;

	this.instance_19 = new lib.Path_113();
	this.instance_19.setTransform(186.4,467,1,1,0,0,0,12.5,3.5);
	this.instance_19.alpha = 0.199;

	this.instance_20 = new lib.Path_112();
	this.instance_20.setTransform(391.5,467,1,1,0,0,0,3.5,12.5);
	this.instance_20.alpha = 0.199;

	this.instance_21 = new lib.Path_111();
	this.instance_21.setTransform(527.5,467,1,1,0,0,0,3.5,12.5);
	this.instance_21.alpha = 0.199;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF7D7").s().p("EglEAFMIAAqWMBKJAAAIAAKWg");
	this.shape_2.setTransform(323.7,466.5);

	this.instance_22 = new lib.Path_110();
	this.instance_22.setTransform(186.4,331,1,1,0,0,0,12.5,3.5);
	this.instance_22.alpha = 0.199;

	this.instance_23 = new lib.Path_109();
	this.instance_23.setTransform(458.4,331,1,1,0,0,0,12.5,3.5);
	this.instance_23.alpha = 0.199;

	this.instance_24 = new lib.Path_108();
	this.instance_24.setTransform(322.4,331,1,1,0,0,0,12.5,3.5);
	this.instance_24.alpha = 0.199;

	this.instance_25 = new lib.Path_107();
	this.instance_25.setTransform(527.5,331,1,1,0,0,0,3.5,12.5);
	this.instance_25.alpha = 0.199;

	this.instance_26 = new lib.Path_106();
	this.instance_26.setTransform(390.4,331,1,1,0,0,0,12.5,3.5);
	this.instance_26.alpha = 0.199;

	this.instance_27 = new lib.Path_105();
	this.instance_27.setTransform(118.4,331,1,1,0,0,0,12.5,3.5);
	this.instance_27.alpha = 0.199;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF7D7").s().p("Egk8AFMIAAqXMBJ4AAAIAAKXg");
	this.shape_3.setTransform(322.9,331.8);

	this.instance_28 = new lib.Group_17();
	this.instance_28.setTransform(43.8,343.3,1,1,0,0,0,0.8,1.1);

	this.instance_29 = new lib.Group_1_14();
	this.instance_29.setTransform(41.8,343,1,1,0,0,0,0.8,1.2);

	this.instance_30 = new lib.Group_2_14();
	this.instance_30.setTransform(41.5,343.1);

	this.instance_31 = new lib.Group_3_14();
	this.instance_31.setTransform(39.4,343.3,1,1,0,0,0,0.7,1);

	this.instance_32 = new lib.Group_16();
	this.instance_32.setTransform(21,320.3,1,1,0,0,0,0.9,1.1);

	this.instance_33 = new lib.Group_1_13();
	this.instance_33.setTransform(18.8,320.1,1,1,0,0,0,0.8,1.2);

	this.instance_34 = new lib.Group_2_13();
	this.instance_34.setTransform(18.5,320.2);

	this.instance_35 = new lib.Group_3_13();
	this.instance_35.setTransform(16.5,320.2,1,1,0,0,0,0.7,0.9);

	this.instance_36 = new lib.Path_104();
	this.instance_36.setTransform(32.1,330.6,1,1,0,0,0,30.4,29.6);
	this.instance_36.alpha = 0.602;

	this.instance_37 = new lib.Group_15();
	this.instance_37.setTransform(674.2,207.7,1,1,0,0,0,0.9,1.1);

	this.instance_38 = new lib.Group_1_12();
	this.instance_38.setTransform(672.1,207.4,1,1,0,0,0,0.8,1.2);

	this.instance_39 = new lib.Group_2_12();
	this.instance_39.setTransform(671.8,207.5);

	this.instance_40 = new lib.Group_3_12();
	this.instance_40.setTransform(669.7,207.6,1,1,0,0,0,0.7,0.9);

	this.instance_41 = new lib.Group_14();
	this.instance_41.setTransform(651.2,184.7,1,1,0,0,0,0.9,1.1);

	this.instance_42 = new lib.Group_1_11();
	this.instance_42.setTransform(649.1,184.4,1,1,0,0,0,0.8,1.2);

	this.instance_43 = new lib.Group_2_11();
	this.instance_43.setTransform(648.8,184.6);

	this.instance_44 = new lib.Group_3_11();
	this.instance_44.setTransform(646.7,184.6,1,1,0,0,0,0.7,0.9);

	this.instance_45 = new lib.Path_103();
	this.instance_45.setTransform(662.3,195,1,1,0,0,0,30.4,29.6);
	this.instance_45.alpha = 0.602;

	this.instance_46 = new lib.Path_102();
	this.instance_46.setTransform(186.4,603,1,1,0,0,0,12.5,3.5);
	this.instance_46.alpha = 0.199;

	this.instance_47 = new lib.Path_101();
	this.instance_47.setTransform(254.4,603,1,1,0,0,0,12.5,3.5);
	this.instance_47.alpha = 0.199;

	this.instance_48 = new lib.Path_100();
	this.instance_48.setTransform(254.4,195,1,1,0,0,0,12.5,3.5);
	this.instance_48.alpha = 0.199;

	this.instance_49 = new lib.Path_99();
	this.instance_49.setTransform(390.4,195,1,1,0,0,0,12.5,3.5);
	this.instance_49.alpha = 0.199;

	this.instance_50 = new lib.Path_98();
	this.instance_50.setTransform(391.5,263,1,1,0,0,0,3.5,12.5);
	this.instance_50.alpha = 0.199;

	this.instance_51 = new lib.Path_97();
	this.instance_51.setTransform(391.5,331,1,1,0,0,0,3.5,12.5);
	this.instance_51.alpha = 0.199;

	this.instance_52 = new lib.Path_96();
	this.instance_52.setTransform(391.5,399,1,1,0,0,0,3.5,12.5);
	this.instance_52.alpha = 0.199;

	this.instance_53 = new lib.Path_95();
	this.instance_53.setTransform(391.5,467,1,1,0,0,0,3.5,12.5);
	this.instance_53.alpha = 0.199;

	this.instance_54 = new lib.Path_94();
	this.instance_54.setTransform(391.5,535,1,1,0,0,0,3.5,12.5);
	this.instance_54.alpha = 0.199;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF7D7").s().p("EgFTAplMAAAhTJIKnAAMAAABTJg");
	this.shape_4.setTransform(390.4,402.8);

	this.instance_55 = new lib.Path_93();
	this.instance_55.setTransform(527.5,263,1,1,0,0,0,3.5,12.5);
	this.instance_55.alpha = 0.199;

	this.instance_56 = new lib.Path_92();
	this.instance_56.setTransform(527.5,331,1,1,0,0,0,3.5,12.5);
	this.instance_56.alpha = 0.199;

	this.instance_57 = new lib.Path_91();
	this.instance_57.setTransform(527.5,467,1,1,0,0,0,3.5,12.5);
	this.instance_57.alpha = 0.199;

	this.instance_58 = new lib.Path_90();
	this.instance_58.setTransform(527.5,535,1,1,0,0,0,3.5,12.5);
	this.instance_58.alpha = 0.199;

	this.instance_59 = new lib.Path_89();
	this.instance_59.setTransform(186.4,195,1,1,0,0,0,12.5,3.5);
	this.instance_59.alpha = 0.199;

	this.instance_60 = new lib.Path_88();
	this.instance_60.setTransform(254.4,195,1,1,0,0,0,12.5,3.5);
	this.instance_60.alpha = 0.199;

	this.instance_61 = new lib.Path_87();
	this.instance_61.setTransform(390.4,195,1,1,0,0,0,12.5,3.5);
	this.instance_61.alpha = 0.199;

	this.instance_62 = new lib.Path_86();
	this.instance_62.setTransform(458.4,195,1,1,0,0,0,12.5,3.5);
	this.instance_62.alpha = 0.199;

	this.instance_63 = new lib.Path_85();
	this.instance_63.setTransform(527.5,195,1,1,0,0,0,3.5,12.5);
	this.instance_63.alpha = 0.199;

	this.instance_64 = new lib.Path_84();
	this.instance_64.setTransform(119.5,195,1,1,0,0,0,3.5,12.5);
	this.instance_64.alpha = 0.199;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF7D7").s().p("Av2HbIAAu1IftAAIAAO1g");
	this.shape_5.setTransform(458.3,181.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF7D7").s().p("Av2HbIAAu1IftAAIAAO1g");
	this.shape_6.setTransform(185.9,181.4);

	this.instance_65 = new lib.Path_83();
	this.instance_65.setTransform(119.5,263,1,1,0,0,0,3.5,12.5);
	this.instance_65.alpha = 0.199;

	this.instance_66 = new lib.Path_82();
	this.instance_66.setTransform(119.5,331,1,1,0,0,0,3.5,12.5);
	this.instance_66.alpha = 0.199;

	this.instance_67 = new lib.Path_81();
	this.instance_67.setTransform(119.5,467,1,1,0,0,0,3.5,12.5);
	this.instance_67.alpha = 0.199;

	this.instance_68 = new lib.Path_80();
	this.instance_68.setTransform(119.5,535,1,1,0,0,0,3.5,12.5);
	this.instance_68.alpha = 0.199;

	this.instance_69 = new lib.Path_79();
	this.instance_69.setTransform(119.5,603,1,1,0,0,0,3.5,12.5);
	this.instance_69.alpha = 0.199;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF7D7").s().p("AlTQCMAAAggDIKnAAMAAAAgDg");
	this.shape_7.setTransform(118.4,261.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF7D7").s().p("AlTQCMAAAggEIKnAAMAAAAgEg");
	this.shape_8.setTransform(118.4,536.6);

	this.instance_70 = new lib.Path_78();
	this.instance_70.setTransform(254.4,603,1,1,0,0,0,12.5,3.5);
	this.instance_70.alpha = 0.199;

	this.instance_71 = new lib.Path_77();
	this.instance_71.setTransform(390.4,603,1,1,0,0,0,12.5,3.5);
	this.instance_71.alpha = 0.199;

	this.instance_72 = new lib.Path_76();
	this.instance_72.setTransform(527.5,603,1,1,0,0,0,3.5,12.5);
	this.instance_72.alpha = 0.199;

	this.instance_73 = new lib.Path_75();
	this.instance_73.setTransform(186.4,467,1,1,0,0,0,12.5,3.5);
	this.instance_73.alpha = 0.199;

	this.instance_74 = new lib.Path_74();
	this.instance_74.setTransform(458.4,467,1,1,0,0,0,12.5,3.5);
	this.instance_74.alpha = 0.199;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF7D7").s().p("Av7FLIAAqWIf2AAIAAKWg");
	this.shape_9.setTransform(458.4,602.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF7D7").s().p("Av7FLIAAqWIf3AAIAAKWg");
	this.shape_10.setTransform(186.4,602.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF7D7").s().p("AlSRvMAAAgjdIKlAAMAAAAjdg");
	this.shape_11.setTransform(526.4,547.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF7D7").s().p("AlSRvMAAAgjdIKlAAMAAAAjdg");
	this.shape_12.setTransform(526.4,250.2);

	this.instance_75 = new lib.Group_13();
	this.instance_75.setTransform(36.6,410.6,1,1,0,0,0,0.9,1.1);

	this.instance_76 = new lib.Group_1_10();
	this.instance_76.setTransform(34.4,410.4,1,1,0,0,0,0.8,1.2);

	this.instance_77 = new lib.Group_2_10();
	this.instance_77.setTransform(34.2,410.5);

	this.instance_78 = new lib.Group_3_10();
	this.instance_78.setTransform(32,410.6,1,1,0,0,0,0.7,1);

	this.instance_79 = new lib.Group_12();
	this.instance_79.setTransform(36.1,389.9,1,1,0,0,0,0.9,1.1);

	this.instance_80 = new lib.Group_1_9();
	this.instance_80.setTransform(33.9,389.7,1,1,0,0,0,0.8,1.2);

	this.instance_81 = new lib.Group_2_9();
	this.instance_81.setTransform(33.7,389.8);

	this.instance_82 = new lib.Group_3_9();
	this.instance_82.setTransform(31.5,389.9,1,1,0,0,0,0.7,1);

	this.instance_83 = new lib.Group_11();
	this.instance_83.setTransform(36.6,278.6,1,1,0,0,0,0.9,1.1);

	this.instance_84 = new lib.Group_1_8();
	this.instance_84.setTransform(34.4,278.3,1,1,0,0,0,0.8,1.2);

	this.instance_85 = new lib.Group_2_8();
	this.instance_85.setTransform(34.2,278.4);

	this.instance_86 = new lib.Group_3_8();
	this.instance_86.setTransform(32,278.5,1,1,0,0,0,0.7,0.9);

	this.instance_87 = new lib.Group_10();
	this.instance_87.setTransform(36.1,257.9,1,1,0,0,0,0.9,1.1);

	this.instance_88 = new lib.Group_1_7();
	this.instance_88.setTransform(33.9,257.6,1,1,0,0,0,0.8,1.2);

	this.instance_89 = new lib.Group_2_7();
	this.instance_89.setTransform(33.7,257.7);

	this.instance_90 = new lib.Group_3_7();
	this.instance_90.setTransform(31.5,257.9,1,1,0,0,0,0.7,1);

	this.instance_91 = new lib.Group_9();
	this.instance_91.setTransform(610,618.6,1,1,0,0,0,0.9,1.1);

	this.instance_92 = new lib.Group_1_6();
	this.instance_92.setTransform(607.9,618.3,1,1,0,0,0,0.8,1.2);

	this.instance_93 = new lib.Group_2_6();
	this.instance_93.setTransform(607.6,618.4);

	this.instance_94 = new lib.Group_3_6();
	this.instance_94.setTransform(605.5,618.5,1,1,0,0,0,0.7,0.9);

	this.instance_95 = new lib.Group_8();
	this.instance_95.setTransform(609.5,597.9,1,1,0,0,0,0.9,1.1);

	this.instance_96 = new lib.Group_1_5();
	this.instance_96.setTransform(607.4,597.6,1,1,0,0,0,0.8,1.2);

	this.instance_97 = new lib.Group_2_5();
	this.instance_97.setTransform(607.1,597.7);

	this.instance_98 = new lib.Group_3_5();
	this.instance_98.setTransform(605,597.9,1,1,0,0,0,0.7,1);

	this.instance_99 = new lib.Group_7();
	this.instance_99.setTransform(610,482.6,1,1,0,0,0,0.9,1.1);

	this.instance_100 = new lib.Group_1_4();
	this.instance_100.setTransform(607.9,482.3,1,1,0,0,0,0.8,1.2);

	this.instance_101 = new lib.Group_2_4();
	this.instance_101.setTransform(607.6,482.4);

	this.instance_102 = new lib.Group_3_4();
	this.instance_102.setTransform(605.5,482.5,1,1,0,0,0,0.7,0.9);

	this.instance_103 = new lib.Group_6();
	this.instance_103.setTransform(609.5,461.9,1,1,0,0,0,0.9,1.1);

	this.instance_104 = new lib.Group_1_3();
	this.instance_104.setTransform(607.4,461.6,1,1,0,0,0,0.8,1.2);

	this.instance_105 = new lib.Group_2_3();
	this.instance_105.setTransform(607.1,461.7);

	this.instance_106 = new lib.Group_3_3();
	this.instance_106.setTransform(605,461.9,1,1,0,0,0,0.7,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#139158").s().p("AhWAuQgIAAgGgHQgFgGAAgJQAAgIAFgGQAGgHAIAAIAFAAQADgNAMgJQALgJAPAAQAQAAANAMQAGgNAKgIQAMgIAPAAQAVAAAPAOQAPAPAAATIAEAAQAIAAAGAHQAFAGAAAIQAAAJgFAGQgGAHgIAAg");
	this.shape_13.setTransform(47.2,524);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#99C654").s().p("AiABEQgMAAgIgJQgIgKAAgMQAAgNAIgKQAIgKAMAAIAHAAQAFgSAQgOQARgOAWAAQAaAAASASQAJgTAQgMQASgMAWAAQAfAAAVAWQAWAVAAAcIAHAAQALAAAJAKQAIAKAAANQAAAMgIAKQgJAJgLAAg");
	this.shape_14.setTransform(31.5,537.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#359449").s().p("AjfEoQghAAgXgYQgYgXAAghIAAmvQAAghAYgXQAXgYAhAAIG/AAQAhAAAXAYQAYAXAAAhIAAGvQAAAhgYAXQgXAYghAAg");
	this.shape_15.setTransform(665.7,330.3);

	this.instance_107 = new lib.Group_5();
	this.instance_107.setTransform(610,278.6,1,1,0,0,0,0.9,1.1);

	this.instance_108 = new lib.Group_1_2();
	this.instance_108.setTransform(607.9,278.3,1,1,0,0,0,0.8,1.2);

	this.instance_109 = new lib.Group_2_2();
	this.instance_109.setTransform(607.6,278.4);

	this.instance_110 = new lib.Group_3_2();
	this.instance_110.setTransform(605.5,278.5,1,1,0,0,0,0.7,0.9);

	this.instance_111 = new lib.Group_4();
	this.instance_111.setTransform(609.5,257.9,1,1,0,0,0,0.9,1.1);

	this.instance_112 = new lib.Group_1_1();
	this.instance_112.setTransform(607.4,257.6,1,1,0,0,0,0.8,1.2);

	this.instance_113 = new lib.Group_2_1();
	this.instance_113.setTransform(607.1,257.7);

	this.instance_114 = new lib.Group_3_1();
	this.instance_114.setTransform(605,257.9,1,1,0,0,0,0.7,1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#99C654").s().p("AiNBLQgNAAgKgKQgIgKgBgPQABgOAIgLQAKgKANAAIAIAAQAFgVASgPQATgPAYAAQAbAAAVATQAKgVASgNQAUgNAZAAQAhAAAZAYQAYAYAAAfIAGAAQANAAAKAKQAJALAAAOQAAAPgJAKQgKAKgNAAg");
	this.shape_16.setTransform(657.1,619.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9BCE8E").s().p("AgaA5QgEgRALggQAKgZATgbIASgWIgvCFQgEgCgDgIg");
	this.shape_17.setTransform(682.1,596.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#65B452").s().p("AAYhCIAAAdQgCAigJAZQgMAggMAKIgMADg");
	this.shape_18.setTransform(682.5,596.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#65B452").s().p("AgbhCIASAWQATAbAKAZQALAggEARQgCAIgFACg");
	this.shape_19.setTransform(676.6,596.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9BCE8E").s().p("AAMBAQgMgKgLggQgKgZgCgiIAAgdIAvCFIgCAAQgEAAgGgDg");
	this.shape_20.setTransform(676.2,596.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EC334A").s().p("AgOg0IAOAUQAPAYAAAUQAAAZgPALIgOAFg");
	this.shape_21.setTransform(680.9,584.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EF6678").s().p("AAAAwQgOgLAAgZQAAgUAOgYQAHgMAIgIIAABpQgIAAgHgFg");
	this.shape_22.setTransform(677.7,584.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E5243F").s().p("AgZAxQgCgYAGgYQALguAlgDIgTBHQgCAHgFAGQgJANgQAAIgBAAg");
	this.shape_23.setTransform(681.9,585.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E5243F").s().p("AAAAkIgHgNIgThHQAmADALAuQAFAYgCAXIgBABQgRAAgIgNg");
	this.shape_24.setTransform(676.7,585.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#65B452").s().p("AAABOIgBibIADAAIAACbg");
	this.shape_25.setTransform(679.6,595.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9BCE8E").s().p("AgBBOIAAibIACAAIABCbg");
	this.shape_26.setTransform(679.2,595.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9BCE8E").s().p("AgoBXQgHgaASgwQAPgnAdgqQAQgVAMgMIhIDLQgIgCgDgNg");
	this.shape_27.setTransform(663.5,611.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#65B452").s().p("AAlhlIAAArQgDA0gPAoQgSAxgTAPIgSAEg");
	this.shape_28.setTransform(664.2,611.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#65B452").s().p("AgqhlIAcAhQAdAqAQAnQARAwgHAaQgDANgHACg");
	this.shape_29.setTransform(655.1,611.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9BCE8E").s().p("AATBhQgUgPgSgwQgOgngDg1IAAgsIBJDMIgEABQgGAAgIgGg");
	this.shape_30.setTransform(654.5,611.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EC559D").s().p("AgXhRIAXAfQAYAmAAAfQAAAmgYAQIgWAJg");
	this.shape_31.setTransform(661.7,593.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E896BF").s().p("AAABJQgXgQAAgmQAAgfAXgmQALgTAMgMIABCjQgMgBgMgIg");
	this.shape_32.setTransform(656.9,593.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E372AB").s().p("AgnBKQgDgjAIglQARhHA6gEIgdBtQgCAKgIAKQgNASgZAAIgDAAg");
	this.shape_33.setTransform(663.3,594.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E372AB").s().p("AgBA3IgLgUIgchsQA5AEASBHQAIAkgDAkIgDAAQgYAAgOgTg");
	this.shape_34.setTransform(655.3,594.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#65B452").s().p("AgBB3IgBjtIAEAAIABDtg");
	this.shape_35.setTransform(659.7,609.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9BCE8E").s().p("AgCB3IAAjtIAEAAIABDtg");
	this.shape_36.setTransform(659.1,609.4);

	this.instance_115 = new lib.Group_0();
	this.instance_115.setTransform(674.2,479.7,1,1,0,0,0,0.9,1.1);

	this.instance_116 = new lib.Group_1_0();
	this.instance_116.setTransform(672.1,479.4,1,1,0,0,0,0.8,1.2);

	this.instance_117 = new lib.Group_2_0();
	this.instance_117.setTransform(671.8,479.5);

	this.instance_118 = new lib.Group_3_0();
	this.instance_118.setTransform(669.7,479.6,1,1,0,0,0,0.7,0.9);

	this.instance_119 = new lib.Group();
	this.instance_119.setTransform(651.2,456.7,1,1,0,0,0,0.9,1.1);

	this.instance_120 = new lib.Group_1();
	this.instance_120.setTransform(649.1,456.4,1,1,0,0,0,0.8,1.2);

	this.instance_121 = new lib.Group_2();
	this.instance_121.setTransform(648.8,456.6);

	this.instance_122 = new lib.Group_3();
	this.instance_122.setTransform(646.7,456.6,1,1,0,0,0,0.7,0.9);

	this.instance_123 = new lib.Path_73();
	this.instance_123.setTransform(662.3,467,1,1,0,0,0,30.4,29.6);
	this.instance_123.alpha = 0.602;

	this.instance_124 = new lib.Path_72();
	this.instance_124.setTransform(772,51.6,1,1,0,0,0,42.9,51.6);

	this.instance_125 = new lib.Path_71();
	this.instance_125.setTransform(795.6,77.1,1,1,0,0,0,0.3,14.5);
	this.instance_125.alpha = 0.199;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EA4182").s().p("AgNCQIAAkfIAcAAIAAEfg");
	this.shape_37.setTransform(793.6,77.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#ED6096").s().p("AgOCQIAAkfIAdAAIAAEfg");
	this.shape_38.setTransform(790.7,77.1);

	this.instance_126 = new lib.Path_70();
	this.instance_126.setTransform(782.3,77.1,1,1,0,0,0,0.3,14.5);
	this.instance_126.alpha = 0.199;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EA4182").s().p("AgOCQIAAkfIAdAAIAAEfg");
	this.shape_39.setTransform(780.3,77.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ED6096").s().p("AgNCQIAAkfIAcAAIAAEfg");
	this.shape_40.setTransform(777.4,77.1);

	this.instance_127 = new lib.Path_69();
	this.instance_127.setTransform(769,77.1,1,1,0,0,0,0.3,14.5);
	this.instance_127.alpha = 0.199;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EA4182").s().p("AgNCQIAAkfIAcAAIAAEfg");
	this.shape_41.setTransform(767,77.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#ED6096").s().p("AgOCQIAAkfIAdAAIAAEfg");
	this.shape_42.setTransform(764.1,77.1);

	this.instance_128 = new lib.Path_68();
	this.instance_128.setTransform(755.8,77.1,1,1,0,0,0,0.3,14.5);
	this.instance_128.alpha = 0.199;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EA4182").s().p("AgOCQIAAkfIAdAAIAAEfg");
	this.shape_43.setTransform(753.8,77.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#ED6096").s().p("AgNCQIAAkfIAcAAIAAEfg");
	this.shape_44.setTransform(750.8,77.1);

	this.instance_129 = new lib.Path_67();
	this.instance_129.setTransform(742.9,77.1,1,1,0,0,0,0.4,14.5);
	this.instance_129.alpha = 0.199;

	this.instance_130 = new lib.Path_1_2();
	this.instance_130.setTransform(805.2,31.2,1,1,0,0,0,3.5,1.1);
	this.instance_130.alpha = 0.199;

	this.instance_131 = new lib.Path_2_2();
	this.instance_131.setTransform(738.7,31.2,1,1,0,0,0,3.6,1.1);
	this.instance_131.alpha = 0.199;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgEAhIAAg1IgQAAIgBgBIAAgBIAAgHQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIApAAIABAAIAAACIAAAHIAAABIgBABIgQAAIAAAzIAAACg");
	this.shape_45.setTransform(789.2,16);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgNAhIgDgBIgBgCIAAg6IABgDIACAAIAcAAIACAAIAAAJIAAABIgCABIgTAAIAAAQIATAAIABAAIAAACIAAAFIAAABIgBABIgTAAIAAARIAUAAIACABIAAABIAAAHIAAABIgCABg");
	this.shape_46.setTransform(782.1,16);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAKAhIgQgcIgFAFIAAAVIAAACIgLAAIAAgCIAAg8QAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIAJAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAABIAAAZIATgaIAAgBIALAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAgBABIgUAbIAWAhQABAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_47.setTransform(774.6,16);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgDAfQgHgDgDgEQgFgFgCgGQgDgGAAgHQAAgFADgIQACgFAFgFQAEgFAGgCQAFgDAHAAIAHABQAEAAADABIABABIAAAJIgBACIgJgCIgGgBQgEAAgEACQgDACgCADQgEADAAAEQgCAEAAAEQAAAFACADIAEAIIAFAFQAEACAEAAQAEABADgBIAHgCIABAAIABABIAAAIIAAABIgCAAQgCACgDAAIgIABQgHAAgFgDg");
	this.shape_48.setTransform(766.3,16);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgEAhIAAgCIAAg8QAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAHAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAAA+g");
	this.shape_49.setTransform(760,16);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgEAhIAAg1IgQAAIgBgBIAAgBIAAgHQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIApAAIABAAIAAACIAAAHIAAABIgBABIgQAAIAAAzIAAACg");
	this.shape_50.setTransform(754.2,16);

	this.instance_132 = new lib.Path_66();
	this.instance_132.setTransform(771.9,8.4,1,1,0,0,0,33.8,0.3);
	this.instance_132.alpha = 0.199;

	this.instance_133 = new lib.Path_65();
	this.instance_133.setTransform(809.4,4.8,1,1,0,0,0,0.6,0.6);
	this.instance_133.alpha = 0.301;

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F5A632").s().p("AgSAFQAGADAFAAQAHAAAGgGQAGgEAAgIIgBgHQAIAHAAAKQAAAGgGAGQgFAGgIAAQgMAAgGgNg");
	this.shape_51.setTransform(810,5.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FAB432").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_52.setTransform(809.9,5.7);

	this.instance_134 = new lib.Path_64();
	this.instance_134.setTransform(809.8,5.6,1,1,0,0,0,2.6,2.6);
	this.instance_134.alpha = 0.102;

	this.instance_135 = new lib.Path_63();
	this.instance_135.setTransform(809.4,11.9,1,1,0,0,0,0.6,0.6);
	this.instance_135.alpha = 0.301;

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F5A632").s().p("AgSAFQAGADAFAAQAHAAAGgGQAGgEAAgIIgBgHQAIAHAAAJQAAAHgGAGQgFAGgIAAQgMAAgGgNg");
	this.shape_53.setTransform(810,13);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FAB432").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_54.setTransform(809.9,12.8);

	this.instance_136 = new lib.Path_62();
	this.instance_136.setTransform(809.8,12.8,1,1,0,0,0,2.6,2.6);
	this.instance_136.alpha = 0.102;

	this.instance_137 = new lib.Path_61();
	this.instance_137.setTransform(809.4,19.1,1,1,0,0,0,0.6,0.6);
	this.instance_137.alpha = 0.301;

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F5A632").s().p("AgSAFQAGADAFAAQAHAAAGgGQAGgEAAgIIgBgHQAIAGAAAKQAAAHgGAGQgFAGgIAAQgMAAgGgNg");
	this.shape_55.setTransform(810,20.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FAB432").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_56.setTransform(809.9,20);

	this.instance_138 = new lib.Path_60();
	this.instance_138.setTransform(809.8,19.9,1,1,0,0,0,2.6,2.6);
	this.instance_138.alpha = 0.102;

	this.instance_139 = new lib.Path_59();
	this.instance_139.setTransform(809.4,26.2,1,1,0,0,0,0.6,0.6);
	this.instance_139.alpha = 0.301;

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F5A632").s().p("AgSAFQAGADAFAAQAHAAAGgFQAGgFAAgIIgBgHQAIAGAAAKQAAAHgGAGQgFAFgIAAQgMAAgGgMg");
	this.shape_57.setTransform(810,27.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FAB432").s().p("AgNAOQgGgGAAgIQAAgHAGgFQAGgHAHABQAIgBAGAHQAGAGAAAGQAAAIgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_58.setTransform(809.9,27.1);

	this.instance_140 = new lib.Path_58();
	this.instance_140.setTransform(809.8,27.1,1,1,0,0,0,2.6,2.6);
	this.instance_140.alpha = 0.102;

	this.instance_141 = new lib.Path_57();
	this.instance_141.setTransform(801.9,4.5,1,1,0,0,0,0.6,0.6);
	this.instance_141.alpha = 0.301;

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgGQAGgEAAgIIgBgHQAIAHAAAJQAAAHgGAGQgGAGgHAAQgMAAgGgNg");
	this.shape_59.setTransform(802.4,5.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FAB432").s().p("AgNAOQgGgGABgIQgBgHAGgGQAGgGAHAAQAIAAAGAGQAFAGAAAHQAAAIgFAGQgGAGgIAAQgHAAgGgGg");
	this.shape_60.setTransform(802.4,5.4);

	this.instance_142 = new lib.Path_56();
	this.instance_142.setTransform(802.3,5.4,1,1,0,0,0,2.6,2.6);
	this.instance_142.alpha = 0.102;

	this.instance_143 = new lib.Path_55();
	this.instance_143.setTransform(794.3,4.5,1,1,0,0,0,0.6,0.6);
	this.instance_143.alpha = 0.301;

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgGQAGgEAAgIIgBgHQAIAHAAAJQAAAHgGAGQgGAGgHAAQgMAAgGgNg");
	this.shape_61.setTransform(794.9,5.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FAB432").s().p("AgMAOQgHgGABgIQgBgHAHgGQAFgGAHAAQAIAAAGAGQAFAGAAAHQAAAIgFAGQgGAGgIAAQgHAAgFgGg");
	this.shape_62.setTransform(794.8,5.4);

	this.instance_144 = new lib.Path_54();
	this.instance_144.setTransform(794.7,5.4,1,1,0,0,0,2.6,2.6);
	this.instance_144.alpha = 0.102;

	this.instance_145 = new lib.Path_53();
	this.instance_145.setTransform(786.8,4.5,1,1,0,0,0,0.6,0.6);
	this.instance_145.alpha = 0.301;

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgGQAGgEAAgIIgBgHQAIAHAAAJQAAAHgGAGQgGAGgHAAQgMAAgGgNg");
	this.shape_63.setTransform(787.3,5.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FAB432").s().p("AgMAOQgHgGAAgIQAAgHAHgGQAGgGAGAAQAIAAAGAGQAFAGAAAHQAAAIgFAGQgGAGgIAAQgHAAgFgGg");
	this.shape_64.setTransform(787.3,5.4);

	this.instance_146 = new lib.Path_52();
	this.instance_146.setTransform(787.2,5.4,1,1,0,0,0,2.6,2.6);
	this.instance_146.alpha = 0.102;

	this.instance_147 = new lib.Path_51();
	this.instance_147.setTransform(779.2,4.5,1,1,0,0,0,0.6,0.6);
	this.instance_147.alpha = 0.301;

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgGQAGgEAAgIIgBgHQAIAHAAAJQAAAHgGAGQgGAGgHAAQgMAAgGgNg");
	this.shape_65.setTransform(779.8,5.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FAB432").s().p("AgMAOQgHgGAAgIQAAgHAHgGQAGgGAGAAQAIAAAGAGQAFAGABAHQgBAIgFAGQgGAGgIAAQgHAAgFgGg");
	this.shape_66.setTransform(779.7,5.4);

	this.instance_148 = new lib.Path_50();
	this.instance_148.setTransform(779.7,5.4,1,1,0,0,0,2.7,2.6);
	this.instance_148.alpha = 0.102;

	this.instance_149 = new lib.Path_49();
	this.instance_149.setTransform(771.7,4.5,1,1,0,0,0,0.6,0.6);
	this.instance_149.alpha = 0.301;

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgGQAGgEAAgIIgBgHQAIAHAAAJQAAAHgGAGQgGAGgHAAQgMAAgGgNg");
	this.shape_67.setTransform(772.2,5.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FAB432").s().p("AgMAOQgHgGAAgIQAAgHAHgGQAFgGAHAAQAIAAAFAGQAGAGABAHQgBAIgGAGQgFAGgIAAQgHAAgFgGg");
	this.shape_68.setTransform(772.2,5.4);

	this.instance_150 = new lib.Path_48();
	this.instance_150.setTransform(772.2,5.4,1,1,0,0,0,2.7,2.6);
	this.instance_150.alpha = 0.102;

	this.instance_151 = new lib.Path_47();
	this.instance_151.setTransform(764.1,4.5,1,1,0,0,0,0.6,0.6);
	this.instance_151.alpha = 0.301;

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgGQAGgEAAgIIgBgHQAIAHAAAJQAAAHgGAGQgGAGgHAAQgMAAgGgNg");
	this.shape_69.setTransform(764.7,5.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FAB432").s().p("AgMAOQgGgGgBgIQABgHAGgGQAFgGAHAAQAIAAAFAGQAHAGAAAHQAAAIgHAGQgFAGgIAAQgHAAgFgGg");
	this.shape_70.setTransform(764.6,5.4);

	this.instance_152 = new lib.Path_46();
	this.instance_152.setTransform(764.6,5.4,1,1,0,0,0,2.6,2.6);
	this.instance_152.alpha = 0.102;

	this.instance_153 = new lib.Path_45();
	this.instance_153.setTransform(756.6,4.5,1,1,0,0,0,0.6,0.6);
	this.instance_153.alpha = 0.301;

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgGQAGgEAAgIIgBgHQAIAHAAAJQAAAHgGAGQgGAGgHAAQgMAAgGgNg");
	this.shape_71.setTransform(757.1,5.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FAB432").s().p("AgNAOQgFgGgBgIQABgHAFgGQAHgGAGAAQAIAAAFAGQAHAGAAAHQAAAIgHAGQgFAGgIAAQgHAAgGgGg");
	this.shape_72.setTransform(757.1,5.4);

	this.instance_154 = new lib.Path_44();
	this.instance_154.setTransform(757,5.4,1,1,0,0,0,2.6,2.6);
	this.instance_154.alpha = 0.102;

	this.instance_155 = new lib.Path_43();
	this.instance_155.setTransform(749,4.5,1,1,0,0,0,0.6,0.6);
	this.instance_155.alpha = 0.301;

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgGQAFgEAAgIIgBgHQAJAHAAAJQAAAHgGAGQgGAGgHAAQgMAAgGgNg");
	this.shape_73.setTransform(749.6,5.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FAB432").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_74.setTransform(749.5,5.4);

	this.instance_156 = new lib.Path_42();
	this.instance_156.setTransform(749.5,5.4,1,1,0,0,0,2.6,2.6);
	this.instance_156.alpha = 0.102;

	this.instance_157 = new lib.Path_41();
	this.instance_157.setTransform(741.5,4.5,1,1,0,0,0,0.6,0.6);
	this.instance_157.alpha = 0.301;

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F5A632").s().p("AgSAFQAGADAFAAQAHAAAGgGQAFgEAAgIIAAgHQAIAHAAAJQAAAHgGAGQgGAGgHAAQgMAAgGgNg");
	this.shape_75.setTransform(742.1,5.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FAB432").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_76.setTransform(742,5.4);

	this.instance_158 = new lib.Path_40();
	this.instance_158.setTransform(741.9,5.4,1,1,0,0,0,2.6,2.6);
	this.instance_158.alpha = 0.102;

	this.instance_159 = new lib.Path_39();
	this.instance_159.setTransform(801.9,26.2,1,1,0,0,0,0.6,0.6);
	this.instance_159.alpha = 0.301;

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgFQAGgFAAgIIgBgHQAIAGAAAKQAAAHgGAGQgGAFgHAAQgNAAgFgMg");
	this.shape_77.setTransform(802.4,27.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FAB432").s().p("AgNAOQgGgGABgIQgBgHAGgFQAGgHAHABQAIgBAGAHQAFAGAAAGQAAAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape_78.setTransform(802.4,27.1);

	this.instance_160 = new lib.Path_38();
	this.instance_160.setTransform(802.3,27.1,1,1,0,0,0,2.6,2.6);
	this.instance_160.alpha = 0.102;

	this.instance_161 = new lib.Path_37();
	this.instance_161.setTransform(794.3,26.2,1,1,0,0,0,0.6,0.6);
	this.instance_161.alpha = 0.301;

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgFQAGgFAAgIIgBgHQAIAGAAAKQAAAHgGAGQgGAFgHAAQgNAAgFgMg");
	this.shape_79.setTransform(794.9,27.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FAB432").s().p("AgMAOQgHgGABgIQgBgGAHgGQAFgHAHABQAIgBAGAHQAFAGAAAGQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_80.setTransform(794.8,27.1);

	this.instance_162 = new lib.Path_36();
	this.instance_162.setTransform(794.7,27.1,1,1,0,0,0,2.6,2.6);
	this.instance_162.alpha = 0.102;

	this.instance_163 = new lib.Path_35();
	this.instance_163.setTransform(786.8,26.2,1,1,0,0,0,0.6,0.6);
	this.instance_163.alpha = 0.301;

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgFQAGgFAAgIIgBgHQAIAGAAAKQAAAHgGAGQgGAFgHAAQgNAAgFgMg");
	this.shape_81.setTransform(787.3,27.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FAB432").s().p("AgMAOQgHgGAAgIQAAgGAHgGQAGgHAGABQAIgBAGAHQAFAGAAAGQAAAIgFAGQgGAFgIAAQgGAAgGgFg");
	this.shape_82.setTransform(787.3,27.1);

	this.instance_164 = new lib.Path_34();
	this.instance_164.setTransform(787.2,27.1,1,1,0,0,0,2.6,2.6);
	this.instance_164.alpha = 0.102;

	this.instance_165 = new lib.Path_33();
	this.instance_165.setTransform(779.2,26.2,1,1,0,0,0,0.6,0.6);
	this.instance_165.alpha = 0.301;

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgFQAGgFAAgIIgBgHQAIAGAAAKQAAAHgGAGQgGAFgHAAQgNAAgFgMg");
	this.shape_83.setTransform(779.8,27.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FAB432").s().p("AgMAOQgHgGAAgIQAAgGAHgGQAGgHAGABQAIgBAGAHQAFAGABAGQgBAIgFAGQgGAFgIAAQgGAAgGgFg");
	this.shape_84.setTransform(779.7,27.1);

	this.instance_166 = new lib.Path_32();
	this.instance_166.setTransform(779.7,27.1,1,1,0,0,0,2.7,2.6);
	this.instance_166.alpha = 0.102;

	this.instance_167 = new lib.Path_31();
	this.instance_167.setTransform(771.7,26.2,1,1,0,0,0,0.6,0.6);
	this.instance_167.alpha = 0.301;

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgFQAGgFAAgIIgBgHQAIAGAAAKQAAAHgGAGQgGAFgHAAQgNAAgFgMg");
	this.shape_85.setTransform(772.2,27.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FAB432").s().p("AgMAOQgHgGAAgIQAAgGAHgGQAFgHAHABQAIgBAFAHQAGAGABAGQgBAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_86.setTransform(772.2,27.1);

	this.instance_168 = new lib.Path_30();
	this.instance_168.setTransform(772.2,27.1,1,1,0,0,0,2.7,2.6);
	this.instance_168.alpha = 0.102;

	this.instance_169 = new lib.Path_29();
	this.instance_169.setTransform(764.1,26.2,1,1,0,0,0,0.6,0.6);
	this.instance_169.alpha = 0.301;

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgFQAGgFAAgIIgBgHQAIAGAAAKQAAAHgGAGQgGAFgHAAQgNAAgFgMg");
	this.shape_87.setTransform(764.7,27.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FAB432").s().p("AgMAOQgGgGgBgIQABgGAGgGQAFgHAHABQAIgBAFAHQAHAGAAAGQAAAIgHAGQgFAFgIAAQgHAAgFgFg");
	this.shape_88.setTransform(764.6,27.1);

	this.instance_170 = new lib.Path_26();
	this.instance_170.setTransform(764.6,27.1,1,1,0,0,0,2.6,2.6);
	this.instance_170.alpha = 0.102;

	this.instance_171 = new lib.Path_25();
	this.instance_171.setTransform(756.6,26.2,1,1,0,0,0,0.6,0.6);
	this.instance_171.alpha = 0.301;

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgFQAGgFAAgIIgBgHQAIAGAAAKQAAAHgGAGQgGAFgHAAQgNAAgFgMg");
	this.shape_89.setTransform(757.1,27.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FAB432").s().p("AgNAOQgFgGgBgIQABgGAFgGQAHgHAGABQAIgBAFAHQAHAGAAAGQAAAIgHAGQgFAFgIAAQgGAAgHgFg");
	this.shape_90.setTransform(757.1,27.1);

	this.instance_172 = new lib.Path_24();
	this.instance_172.setTransform(757,27.1,1,1,0,0,0,2.6,2.6);
	this.instance_172.alpha = 0.102;

	this.instance_173 = new lib.Path_23();
	this.instance_173.setTransform(749,26.2,1,1,0,0,0,0.6,0.6);
	this.instance_173.alpha = 0.301;

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgFQAFgFAAgIIgBgHQAJAHAAAJQAAAHgGAGQgGAFgHAAQgNAAgFgMg");
	this.shape_91.setTransform(749.6,27.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FAB432").s().p("AgNAOQgGgGAAgIQAAgGAGgGQAGgHAHABQAIgBAGAHQAGAGAAAGQAAAIgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_92.setTransform(749.5,27.1);

	this.instance_174 = new lib.Path_22();
	this.instance_174.setTransform(749.5,27.1,1,1,0,0,0,2.6,2.6);
	this.instance_174.alpha = 0.102;

	this.instance_175 = new lib.Path_21();
	this.instance_175.setTransform(741.5,26.2,1,1,0,0,0,0.6,0.6);
	this.instance_175.alpha = 0.301;

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F5A632").s().p("AgSAFQAGADAFAAQAHAAAGgFQAFgFAAgIIAAgHQAIAHAAAJQAAAHgGAGQgGAFgHAAQgNAAgFgMg");
	this.shape_93.setTransform(742.1,27.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FAB432").s().p("AgNAOQgGgGAAgIQAAgGAGgGQAGgHAHABQAIgBAGAHQAGAFAAAHQAAAIgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_94.setTransform(742,27.1);

	this.instance_176 = new lib.Path_20();
	this.instance_176.setTransform(741.9,27.1,1,1,0,0,0,2.6,2.6);
	this.instance_176.alpha = 0.102;

	this.instance_177 = new lib.Path_19();
	this.instance_177.setTransform(733.9,26.2,1,1,0,0,0,0.6,0.6);
	this.instance_177.alpha = 0.301;

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgFQAGgFAAgIIgBgHQAIAHAAAJQAAAHgGAGQgGAFgHAAQgNAAgFgMg");
	this.shape_95.setTransform(734.5,27.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FAB432").s().p("AgNAOQgGgGAAgIQAAgGAGgGQAGgHAHABQAIgBAGAHQAGAFAAAHQAAAIgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_96.setTransform(734.4,27.1);

	this.instance_178 = new lib.Path_18();
	this.instance_178.setTransform(734.4,27.1,1,1,0,0,0,2.6,2.6);
	this.instance_178.alpha = 0.102;

	this.instance_179 = new lib.Path_16();
	this.instance_179.setTransform(733.9,18.9,1,1,0,0,0,0.6,0.6);
	this.instance_179.alpha = 0.301;

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgGQAGgEAAgIIgBgHQAIAGAAAKQAAAHgGAGQgGAGgHAAQgMAAgGgNg");
	this.shape_97.setTransform(734.5,20);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FAB432").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_98.setTransform(734.4,19.8);

	this.instance_180 = new lib.Path_15();
	this.instance_180.setTransform(734.4,19.7,1,1,0,0,0,2.6,2.6);
	this.instance_180.alpha = 0.102;

	this.instance_181 = new lib.Path_14();
	this.instance_181.setTransform(733.9,11.5,1,1,0,0,0,0.6,0.6);
	this.instance_181.alpha = 0.301;

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F5A632").s().p("AgSAFQAFADAGAAQAHAAAGgGQAGgEAAgIIgBgHQAIAHAAAJQAAAHgGAGQgGAGgHAAQgMAAgGgNg");
	this.shape_99.setTransform(734.5,12.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FAB432").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_100.setTransform(734.4,12.4);

	this.instance_182 = new lib.Path_13();
	this.instance_182.setTransform(734.4,12.4,1,1,0,0,0,2.6,2.6);
	this.instance_182.alpha = 0.102;

	this.instance_183 = new lib.Path_12();
	this.instance_183.setTransform(733.9,4.5,1,1,0,0,0,0.6,0.6);
	this.instance_183.alpha = 0.301;

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F5A632").s().p("AgSAFQAGAEAFgBQAHAAAGgFQAGgFAAgIIgBgHQAIAHAAAKQAAAGgGAGQgGAFgHAAQgNAAgFgMg");
	this.shape_101.setTransform(734.5,5.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FAB432").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgFAHAAQAIAAAGAFQAGAGAAAHQAAAIgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_102.setTransform(734.4,5.4);

	this.instance_184 = new lib.Path_11();
	this.instance_184.setTransform(734.4,5.4,1,1,0,0,0,2.6,2.7);
	this.instance_184.alpha = 0.102;

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EA4182").s().p("AlQBQIAAifIKiAAIAACfg");
	this.shape_103.setTransform(771.9,16.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#382B32").s().p("AmXCMIAAkXIMvAAIAAEXg");
	this.shape_104.setTransform(771.9,16.1);

	this.instance_185 = new lib.Path_3_6();
	this.instance_185.setTransform(772.1,62.8,1,1,0,0,0,29.6,0.2);
	this.instance_185.alpha = 0.199;

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#EA4182").s().p("AgQF+IAAr7IAiAAIAAL7g");
	this.shape_105.setTransform(807,62.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#ED6096").s().p("AgRF+IAAr7IAjAAIAAL7g");
	this.shape_106.setTransform(803.5,62.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EA4182").s().p("AgRF+IAAr7IAjAAIAAL7g");
	this.shape_107.setTransform(740.4,62.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#ED6096").s().p("AgRF+IAAr7IAiAAIAAL7g");
	this.shape_108.setTransform(736.9,62.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EA4182").s().p("AlsAYIAAgvILYAAIAAAvg");
	this.shape_109.setTransform(771.6,98.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#ED6096").s().p("AlsAYIAAgvILYAAIAAAvg");
	this.shape_110.setTransform(771.6,94);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EA4182").s().p("AlsAYIAAgvILYAAIAAAvg");
	this.shape_111.setTransform(771.6,61.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#ED6096").s().p("AlsAYIAAgvILYAAIAAAvg");
	this.shape_112.setTransform(771.6,56.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EA4182").s().p("AlsDqIAAnTILYAAIAAHTg");
	this.shape_113.setTransform(771.6,77.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#1E1D1E").s().p("Aj+FNQgkAAgagZQgZgaAAgkIAAnrQAAgkAZgaQAagZAkAAIH9AAQAkAAAaAZQAZAaAAAkIAAHrQAAAkgZAaQgaAZgkAAg");
	this.shape_114.setTransform(770.7,45.8);

	this.instance_186 = new lib.Path_10();
	this.instance_186.setTransform(772,100.4,1,1,0,0,0,46.8,8.2);
	this.instance_186.alpha = 0.301;

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F2F2F2").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_115.setTransform(73.5,549.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F2F2F2").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_116.setTransform(73.5,521.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F9C8CC").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_117.setTransform(73.5,490.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F2F2F2").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_118.setTransform(73.5,468.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F2F2F2").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_119.setTransform(471.4,425.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F2F2F2").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_120.setTransform(535.4,425.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F9C8CC").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_121.setTransform(508.3,425.6);

	this.instance_187 = new lib.Path_3_5();
	this.instance_187.setTransform(491.2,430.1,1,1,0,0,0,79.3,3.9);
	this.instance_187.alpha = 0.602;

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#F2F2F2").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_122.setTransform(134,425.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F2F2F2").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_123.setTransform(198,425.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F9C8CC").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_124.setTransform(98.7,425.6);

	this.instance_188 = new lib.Path_3_4();
	this.instance_188.setTransform(153.8,430.1,1,1,0,0,0,79.3,3.9);
	this.instance_188.alpha = 0.602;

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F2F2F2").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_125.setTransform(471.4,373.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F2F2F2").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_126.setTransform(535.4,373.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F9C8CC").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_127.setTransform(508.3,373.6);

	this.instance_189 = new lib.Path_3_3();
	this.instance_189.setTransform(491.2,369.2,1,1,0,0,0,79.3,3.9);
	this.instance_189.alpha = 0.602;

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F2F2F2").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_128.setTransform(134,373.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F2F2F2").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_129.setTransform(198,373.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F9C8CC").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_130.setTransform(98.7,373.6);

	this.instance_190 = new lib.Path_3_2();
	this.instance_190.setTransform(153.8,369.2,1,1,0,0,0,79.3,3.9);
	this.instance_190.alpha = 0.602;

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F2F2F2").s().p("AgbAbQgLgLAAgQQAAgPALgLQANgMAOAAQAPAAAMAMQAMALAAAPQAAAQgMALQgMAMgPAAQgOAAgNgMg");
	this.shape_131.setTransform(344.8,264.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#F2F2F2").s().p("AgbAbQgLgLAAgQQAAgPALgLQANgMAOAAQAPAAAMAMQAMALAAAPQAAAQgMALQgMAMgPAAQgOAAgNgMg");
	this.shape_132.setTransform(344.8,194);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F9C8CC").s().p("AgbAbQgLgLAAgQQAAgPALgLQANgMAOAAQAPAAAMAMQAMALAAAPQAAAQgMALQgMAMgPAAQgOAAgNgMg");
	this.shape_133.setTransform(344.8,245.3);

	this.instance_191 = new lib.Path_3_1();
	this.instance_191.setTransform(353.4,243.4,1,1,0,0,0,8,100.9);
	this.instance_191.alpha = 0.602;

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F2F2F2").s().p("AgbAbQgLgLAAgQQAAgPALgLQANgMAOAAQAPAAAMAMQAMALAAAPQAAAQgMALQgMAMgPAAQgOAAgNgMg");
	this.shape_134.setTransform(344.8,606.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F2F2F2").s().p("AgbAbQgLgLAAgQQAAgPALgLQANgMAOAAQAPAAAMAMQAMALAAAPQAAAQgMALQgMAMgPAAQgOAAgNgMg");
	this.shape_135.setTransform(344.8,536);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#F2F2F2").s().p("AgbAcQgLgMAAgQQAAgPALgLQANgMAOAAQAPAAAMAMQAMALAAAPQAAAQgMAMQgMALgPAAQgOAAgNgLg");
	this.shape_136.setTransform(344.8,724.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F9C8CC").s().p("AgbAbQgLgLAAgQQAAgPALgLQANgMAOAAQAPAAAMAMQAMALAAAPQAAAQgMALQgMAMgPAAQgOAAgNgMg");
	this.shape_137.setTransform(344.8,587.3);

	this.instance_192 = new lib.Path_4_2();
	this.instance_192.setTransform(353.4,613,1,1,0,0,0,8,128.6);
	this.instance_192.alpha = 0.602;

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F2F2F2").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_138.setTransform(299.8,538.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F2F2F2").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_139.setTransform(299.8,727.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#F9C8CC").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_140.setTransform(299.8,628.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F9C8CC").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_141.setTransform(299.8,554.1);

	this.instance_193 = new lib.Path_4_1();
	this.instance_193.setTransform(291.2,615.7,1,1,0,0,0,8,128.6);
	this.instance_193.alpha = 0.602;

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#F2F2F2").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_142.setTransform(299.8,282.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F2F2F2").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_143.setTransform(299.8,347.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F9C8CC").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_144.setTransform(299.8,248.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#F9C8CC").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_145.setTransform(299.8,174.7);

	this.instance_194 = new lib.Path_4_0();
	this.instance_194.setTransform(291.2,236.3,1,1,0,0,0,8,128.6);
	this.instance_194.alpha = 0.602;

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#F2F2F2").s().p("AgaAcQgMgMAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMAMQgLALgQAAQgPAAgLgLg");
	this.shape_146.setTransform(73.5,240.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F2F2F2").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_147.setTransform(73.5,348.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F9C8CC").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_148.setTransform(73.5,175.7);

	this.instance_195 = new lib.Path_3_0();
	this.instance_195.setTransform(82.1,237.3,1,1,0,0,0,8,128.6);
	this.instance_195.alpha = 0.602;

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F9C8CC").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgPATAAQAUAAAOAPQAPAOAAATQAAAUgPAOQgOAPgUAAQgSAAgPgPg");
	this.shape_149.setTransform(73.5,142.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#F9C8CC").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_150.setTransform(73.5,478.9);

	this.instance_196 = new lib.Path_17();
	this.instance_196.setTransform(82.1,561.6,1,1,0,0,0,8,128.6);
	this.instance_196.alpha = 0.602;

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F2F2F2").s().p("AgbAbQgLgLAAgQQAAgPALgLQAMgMAPAAQAQAAAMAMQALALAAAPQAAAQgLALQgMAMgQAAQgPAAgMgMg");
	this.shape_151.setTransform(571.1,549.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F2F2F2").s().p("AgbAbQgLgLAAgQQAAgPALgLQAMgMAPAAQAQAAAMAMQALALAAAPQAAAQgLALQgMAMgQAAQgPAAgMgMg");
	this.shape_152.setTransform(571.1,521.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F9C8CC").s().p("AgbAbQgLgLAAgQQAAgPALgLQAMgMAPAAQAQAAAMAMQALALAAAPQAAAQgLALQgMAMgQAAQgPAAgMgMg");
	this.shape_153.setTransform(571.1,490.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#F2F2F2").s().p("AgbAbQgLgLAAgQQAAgPALgLQAMgMAPAAQAQAAAMAMQALALAAAPQAAAQgLALQgMAMgQAAQgPAAgMgMg");
	this.shape_154.setTransform(571.1,468.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F2F2F2").s().p("AgbAcQgLgMAAgQQAAgPALgLQAMgMAPAAQAQAAAMAMQALALAAAPQAAAQgLAMQgMALgQAAQgPAAgMgLg");
	this.shape_155.setTransform(571.1,240.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#F2F2F2").s().p("AgbAbQgLgLAAgQQAAgPALgLQAMgMAPAAQAQAAAMAMQALALAAAPQAAAQgLALQgMAMgQAAQgPAAgMgMg");
	this.shape_156.setTransform(571.1,348.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#F9C8CC").s().p("AghAiQgPgOAAgUQAAgTAPgOQAOgPATAAQAUAAAOAPQAOAOAAATQAAAUgOAOQgOAPgUAAQgTAAgOgPg");
	this.shape_157.setTransform(571.1,142.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F9C8CC").s().p("AgbAbQgLgLAAgQQAAgPALgLQAMgMAPAAQAQAAAMAMQALALAAAPQAAAQgLALQgMAMgQAAQgPAAgMgMg");
	this.shape_158.setTransform(571.1,175.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F9C8CC").s().p("AgbAbQgLgLAAgQQAAgPALgLQAMgMAPAAQAQAAAMAMQALALAAAPQAAAQgLALQgMAMgQAAQgPAAgMgMg");
	this.shape_159.setTransform(571.1,478.9);

	this.instance_197 = new lib.Path_27();
	this.instance_197.setTransform(562.6,560.4,1,1,0,0,0,7.9,127.7);
	this.instance_197.alpha = 0.602;

	this.instance_198 = new lib.Path_28();
	this.instance_198.setTransform(562.6,236.3,1,1,0,0,0,7.9,127.6);
	this.instance_198.alpha = 0.602;

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#52A94C").s().p("Eg3eAoUMAAAhQnMBu9AAAMAAABQng");
	this.shape_160.setTransform(355.2,404.6);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.shape_1.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.shape_2.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = this.shape_3.mask = this.instance_28.mask = this.instance_29.mask = this.instance_30.mask = this.instance_31.mask = this.instance_32.mask = this.instance_33.mask = this.instance_34.mask = this.instance_35.mask = this.instance_36.mask = this.instance_37.mask = this.instance_38.mask = this.instance_39.mask = this.instance_40.mask = this.instance_41.mask = this.instance_42.mask = this.instance_43.mask = this.instance_44.mask = this.instance_45.mask = this.instance_46.mask = this.instance_47.mask = this.instance_48.mask = this.instance_49.mask = this.instance_50.mask = this.instance_51.mask = this.instance_52.mask = this.instance_53.mask = this.instance_54.mask = this.shape_4.mask = this.instance_55.mask = this.instance_56.mask = this.instance_57.mask = this.instance_58.mask = this.instance_59.mask = this.instance_60.mask = this.instance_61.mask = this.instance_62.mask = this.instance_63.mask = this.instance_64.mask = this.shape_5.mask = this.shape_6.mask = this.instance_65.mask = this.instance_66.mask = this.instance_67.mask = this.instance_68.mask = this.instance_69.mask = this.shape_7.mask = this.shape_8.mask = this.instance_70.mask = this.instance_71.mask = this.instance_72.mask = this.instance_73.mask = this.instance_74.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.instance_75.mask = this.instance_76.mask = this.instance_77.mask = this.instance_78.mask = this.instance_79.mask = this.instance_80.mask = this.instance_81.mask = this.instance_82.mask = this.instance_83.mask = this.instance_84.mask = this.instance_85.mask = this.instance_86.mask = this.instance_87.mask = this.instance_88.mask = this.instance_89.mask = this.instance_90.mask = this.instance_91.mask = this.instance_92.mask = this.instance_93.mask = this.instance_94.mask = this.instance_95.mask = this.instance_96.mask = this.instance_97.mask = this.instance_98.mask = this.instance_99.mask = this.instance_100.mask = this.instance_101.mask = this.instance_102.mask = this.instance_103.mask = this.instance_104.mask = this.instance_105.mask = this.instance_106.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.instance_107.mask = this.instance_108.mask = this.instance_109.mask = this.instance_110.mask = this.instance_111.mask = this.instance_112.mask = this.instance_113.mask = this.instance_114.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.instance_115.mask = this.instance_116.mask = this.instance_117.mask = this.instance_118.mask = this.instance_119.mask = this.instance_120.mask = this.instance_121.mask = this.instance_122.mask = this.instance_123.mask = this.instance_124.mask = this.instance_125.mask = this.shape_37.mask = this.shape_38.mask = this.instance_126.mask = this.shape_39.mask = this.shape_40.mask = this.instance_127.mask = this.shape_41.mask = this.shape_42.mask = this.instance_128.mask = this.shape_43.mask = this.shape_44.mask = this.instance_129.mask = this.instance_130.mask = this.instance_131.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.instance_132.mask = this.instance_133.mask = this.shape_51.mask = this.shape_52.mask = this.instance_134.mask = this.instance_135.mask = this.shape_53.mask = this.shape_54.mask = this.instance_136.mask = this.instance_137.mask = this.shape_55.mask = this.shape_56.mask = this.instance_138.mask = this.instance_139.mask = this.shape_57.mask = this.shape_58.mask = this.instance_140.mask = this.instance_141.mask = this.shape_59.mask = this.shape_60.mask = this.instance_142.mask = this.instance_143.mask = this.shape_61.mask = this.shape_62.mask = this.instance_144.mask = this.instance_145.mask = this.shape_63.mask = this.shape_64.mask = this.instance_146.mask = this.instance_147.mask = this.shape_65.mask = this.shape_66.mask = this.instance_148.mask = this.instance_149.mask = this.shape_67.mask = this.shape_68.mask = this.instance_150.mask = this.instance_151.mask = this.shape_69.mask = this.shape_70.mask = this.instance_152.mask = this.instance_153.mask = this.shape_71.mask = this.shape_72.mask = this.instance_154.mask = this.instance_155.mask = this.shape_73.mask = this.shape_74.mask = this.instance_156.mask = this.instance_157.mask = this.shape_75.mask = this.shape_76.mask = this.instance_158.mask = this.instance_159.mask = this.shape_77.mask = this.shape_78.mask = this.instance_160.mask = this.instance_161.mask = this.shape_79.mask = this.shape_80.mask = this.instance_162.mask = this.instance_163.mask = this.shape_81.mask = this.shape_82.mask = this.instance_164.mask = this.instance_165.mask = this.shape_83.mask = this.shape_84.mask = this.instance_166.mask = this.instance_167.mask = this.shape_85.mask = this.shape_86.mask = this.instance_168.mask = this.instance_169.mask = this.shape_87.mask = this.shape_88.mask = this.instance_170.mask = this.instance_171.mask = this.shape_89.mask = this.shape_90.mask = this.instance_172.mask = this.instance_173.mask = this.shape_91.mask = this.shape_92.mask = this.instance_174.mask = this.instance_175.mask = this.shape_93.mask = this.shape_94.mask = this.instance_176.mask = this.instance_177.mask = this.shape_95.mask = this.shape_96.mask = this.instance_178.mask = this.instance_179.mask = this.shape_97.mask = this.shape_98.mask = this.instance_180.mask = this.instance_181.mask = this.shape_99.mask = this.shape_100.mask = this.instance_182.mask = this.instance_183.mask = this.shape_101.mask = this.shape_102.mask = this.instance_184.mask = this.shape_103.mask = this.shape_104.mask = this.instance_185.mask = this.shape_105.mask = this.shape_106.mask = this.shape_107.mask = this.shape_108.mask = this.shape_109.mask = this.shape_110.mask = this.shape_111.mask = this.shape_112.mask = this.shape_113.mask = this.shape_114.mask = this.instance_186.mask = this.shape_115.mask = this.shape_116.mask = this.shape_117.mask = this.shape_118.mask = this.shape_119.mask = this.shape_120.mask = this.shape_121.mask = this.instance_187.mask = this.shape_122.mask = this.shape_123.mask = this.shape_124.mask = this.instance_188.mask = this.shape_125.mask = this.shape_126.mask = this.shape_127.mask = this.instance_189.mask = this.shape_128.mask = this.shape_129.mask = this.shape_130.mask = this.instance_190.mask = this.shape_131.mask = this.shape_132.mask = this.shape_133.mask = this.instance_191.mask = this.shape_134.mask = this.shape_135.mask = this.shape_136.mask = this.shape_137.mask = this.instance_192.mask = this.shape_138.mask = this.shape_139.mask = this.shape_140.mask = this.shape_141.mask = this.instance_193.mask = this.shape_142.mask = this.shape_143.mask = this.shape_144.mask = this.shape_145.mask = this.instance_194.mask = this.shape_146.mask = this.shape_147.mask = this.shape_148.mask = this.instance_195.mask = this.shape_149.mask = this.shape_150.mask = this.instance_196.mask = this.shape_151.mask = this.shape_152.mask = this.shape_153.mask = this.shape_154.mask = this.shape_155.mask = this.shape_156.mask = this.shape_157.mask = this.shape_158.mask = this.shape_159.mask = this.instance_197.mask = this.instance_198.mask = this.shape_160.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_160},{t:this.instance_198},{t:this.instance_197},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.instance_196},{t:this.shape_150},{t:this.shape_149},{t:this.instance_195},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.instance_194},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.instance_193},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.instance_192},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.instance_191},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.instance_190},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.instance_189},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.instance_188},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.instance_187},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.instance_186},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.instance_185},{t:this.shape_104},{t:this.shape_103},{t:this.instance_184},{t:this.shape_102},{t:this.shape_101},{t:this.instance_183},{t:this.instance_182},{t:this.shape_100},{t:this.shape_99},{t:this.instance_181},{t:this.instance_180},{t:this.shape_98},{t:this.shape_97},{t:this.instance_179},{t:this.instance_178},{t:this.shape_96},{t:this.shape_95},{t:this.instance_177},{t:this.instance_176},{t:this.shape_94},{t:this.shape_93},{t:this.instance_175},{t:this.instance_174},{t:this.shape_92},{t:this.shape_91},{t:this.instance_173},{t:this.instance_172},{t:this.shape_90},{t:this.shape_89},{t:this.instance_171},{t:this.instance_170},{t:this.shape_88},{t:this.shape_87},{t:this.instance_169},{t:this.instance_168},{t:this.shape_86},{t:this.shape_85},{t:this.instance_167},{t:this.instance_166},{t:this.shape_84},{t:this.shape_83},{t:this.instance_165},{t:this.instance_164},{t:this.shape_82},{t:this.shape_81},{t:this.instance_163},{t:this.instance_162},{t:this.shape_80},{t:this.shape_79},{t:this.instance_161},{t:this.instance_160},{t:this.shape_78},{t:this.shape_77},{t:this.instance_159},{t:this.instance_158},{t:this.shape_76},{t:this.shape_75},{t:this.instance_157},{t:this.instance_156},{t:this.shape_74},{t:this.shape_73},{t:this.instance_155},{t:this.instance_154},{t:this.shape_72},{t:this.shape_71},{t:this.instance_153},{t:this.instance_152},{t:this.shape_70},{t:this.shape_69},{t:this.instance_151},{t:this.instance_150},{t:this.shape_68},{t:this.shape_67},{t:this.instance_149},{t:this.instance_148},{t:this.shape_66},{t:this.shape_65},{t:this.instance_147},{t:this.instance_146},{t:this.shape_64},{t:this.shape_63},{t:this.instance_145},{t:this.instance_144},{t:this.shape_62},{t:this.shape_61},{t:this.instance_143},{t:this.instance_142},{t:this.shape_60},{t:this.shape_59},{t:this.instance_141},{t:this.instance_140},{t:this.shape_58},{t:this.shape_57},{t:this.instance_139},{t:this.instance_138},{t:this.shape_56},{t:this.shape_55},{t:this.instance_137},{t:this.instance_136},{t:this.shape_54},{t:this.shape_53},{t:this.instance_135},{t:this.instance_134},{t:this.shape_52},{t:this.shape_51},{t:this.instance_133},{t:this.instance_132},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.shape_44},{t:this.shape_43},{t:this.instance_128},{t:this.shape_42},{t:this.shape_41},{t:this.instance_127},{t:this.shape_40},{t:this.shape_39},{t:this.instance_126},{t:this.shape_38},{t:this.shape_37},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.shape_8},{t:this.shape_7},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.shape_6},{t:this.shape_5},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.shape_4},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_3},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.shape_2},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_1},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.4,161,680,476);


(lib.mainBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(46.6,-23.2,0.882,0.882,0,0,0,409.2,372.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-314.4,-351.6,722.4,656.8);


// stage content:
(lib.stage_1_4_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;