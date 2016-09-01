/**
 * Created by harryhan on 2016. 7. 27..
 */
//시작히기 블록
Blockly.JavaScript['start_block'] = function (block) {
    // let BJS = Blockly.JavaScript;
    return "";
};


Blockly.Blocks['start_block'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("\"시작하기!\"");
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setColour(240);
    }
};
//이동 관련 블록

// upper
Blockly.JavaScript['move_top'] = function (block) {
    // let BJS = Blockly.JavaScript;
    var code = "moveTop();";
    return code;
};


Blockly.Blocks['move_top'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("\"moveTop!\"");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
    }
};
// down
Blockly.JavaScript['move_down'] = function (block) {
    // let BJS = Blockly.JavaScript;
    var code = "moveDown();";
    return code;
};


Blockly.Blocks['move_down'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("\"moveDown\"");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
    }
};

//right
Blockly.JavaScript['move_right'] = function (block) {
    // let BJS = Blockly.JavaScript;
    var code = "moveRight();";
    return code;
};


Blockly.Blocks['move_right'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("\"moveRight\"");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
    }
};

//left
Blockly.JavaScript['move_left'] = function (block) {
    // let BJS = Blockly.JavaScript;
    var code = "moveLeft();";
    return code;
};


Blockly.Blocks['move_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("\"moveLeft\"");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
    }
};


// go
Blockly.JavaScript['move_forward'] = function (block) {
    // let BJS = Blockly.JavaScript;
    var code = "moveForward();";
    return code;
};
Blockly.Blocks['move_forward'] = {
    init: function () {
        this.appendDummyInput()
          .appendField("\"moveForward!\"");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
    }
};


//회전 블록
//rotate
Blockly.JavaScript['move_rotate'] = function (block) {

    var rotate = this.getFieldValue("ROTATE");

    var code = 'moveRotate('+rotate+');';
    return code;
};
Blockly.Blocks['move_rotate'] = {
    init: function () {
        this.appendDummyInput()
          .appendField("\"moveRotate\"")
          .appendField('rotate :')
          .appendField(new Blockly.FieldDropdown([
                ['left', '"left"'],
                ['right', '"right"']
            ]),
            'ROTATE');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null); // 전에꺼랑 이어줌
        this.setNextStatement(true, null); // 다음꺼랑 이어줌
        this.setColour(160);

        // this.setOutput(true); 왼쪽으로 볼록
    }
};