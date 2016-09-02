Blockly.inject(document.getElementById('blocklyDiv'), {
  collapse: false,
  comments: false,
  toolbox: document.getElementById('toolbox')
});

//
// function checkUsableBlock(event) {
//   //새로이 추가하는 블록에 대한 숨김 처리.
//   if (Blockly.mainWorkspace.topBlocks_.length > 1) {
//     for (var i = 1; i < Blockly.mainWorkspace.topBlocks_.length; i++){
//       Blockly.mainWorkspace.topBlocks_[i].setUnusabled(true);
//       if (Blockly.mainWorkspace.topBlocks_[i].childBlocks_.length > 0) {
//         var temp = Blockly.mainWorkspace.topBlocks_[i].childBlocks_[0];
//         while (true) {
//           temp.setUnusabled(true);
//           if (temp.childBlocks_.length > 0) {
//             temp = temp.childBlocks_[0];
//           } else {
//             break;
//           }
//         }
//       }
//     }
//   }
//
//   //Start 블록 하위에 대한 사용 처리
//   if (Blockly.mainWorkspace.topBlocks_[0].childBlocks_.length > 0) {
//     var temp = Blockly.mainWorkspace.topBlocks_[0].childBlocks_[0];
//     while (true) {
//       temp.setUnusabled(false);
//       if (temp.childBlocks_.length > 0) {
//         temp = temp.childBlocks_[0];
//       } else {
//         break;
//       }
//     }
//   }
// }
// Blockly.mainWorkspace.addChangeListener(checkUsableBlock);


// var textxml = '<xml><block type="start_block" x="20" y="22" movable="false" deletable="false"></block></xml>';
// var textxml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="start_block" id="dWMA}csFBbmk*`IsQhkb" deletable="false" movable="false" x="20" y="22"><next><block type="move_forward" id="nHc=}S,*T4SIg|5vt0`="><next><block type="controls_repeat_ext" id="_F_Y~m78ftRx`4aOULji"><value name="TIMES"><shadow type="math_number" id="R-;.!8wRq:a~M?(5T.,2"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="controls_repeat_ext" id="5n;@9x]U=4?mNW*Vq(G+"><value name="TIMES"><shadow type="math_number" id=":YyzWY=^trtt+%0`97w3"><field name="NUM">3</field></shadow></value><statement name="DO"><block type="move_forward" id="wzw;%d%4b#NEPdcm=T:*"><next><block type="move_forward" id="sb[rtNE8~|~1=539(P+%"><next><block type="move_rotate" id="Jm{jz@v3IQmD_!1o,eKz"><field name="ROTATE">"right"</field></block></next></block></next></block></statement><next><block type="controls_repeat_ext" id="pW18vjj;-RpG=DIH0IDH"><value name="TIMES"><shadow type="math_number" id=")**q1j[Y+wIm+-iT/i#V"><field name="NUM">4</field></shadow></value><statement name="DO"><block type="move_forward" id=");d7ZCtVYBAJqM_./Ii*"></block></statement></block></next></block></statement></block></next></block></next></block></xml>'
// Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, Blockly.Xml.textToDom(textxml));      //초기 블록 셋팅

// Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, document.getElementById('startBlocks'));

var myInterpreter = null;

function initApi(interpreter, scope) {
  // Add an API function for the alert() block.
  var wrapper = function (text) {
    text = text ? text.toString() : '';
    return interpreter.createPrimitive(alert(text));
  };
  interpreter.setProperty(scope, 'alert',
    interpreter.createNativeFunction(wrapper));
  // Add an API function for the prompt() block.
  var wrapper = function (text) {
    text = text ? text.toString() : '';
    return interpreter.createPrimitive(prompt(text));
  };
  interpreter.setProperty(scope, 'prompt',
    interpreter.createNativeFunction(wrapper));
  // Add an API function for highlighting blocks.
  var wrapper = function (id) {
    id = id ? id.toString() : '';
    return interpreter.createPrimitive(highlightBlock(id));
  };
  interpreter.setProperty(scope, 'highlightBlock',
    interpreter.createNativeFunction(wrapper));

  // 이동관련
  var wrapper = function (text) {
    text = text ? text.toString() : '';
    return interpreter.createPrimitive(moveRight(text));
  };
  interpreter.setProperty(scope, 'moveRight',
    interpreter.createNativeFunction(wrapper)); //미리 설정 해주어야함

  var wrapper = function (text) {
    text = text ? text.toString() : '';
    return interpreter.createPrimitive(moveLeft(text));
  };
  interpreter.setProperty(scope, 'moveLeft',
    interpreter.createNativeFunction(wrapper)); //미리 설정 해주어야함

  var wrapper = function (text) {
    text = text ? text.toString() : '';
    return interpreter.createPrimitive(moveTop(text));
  };
  interpreter.setProperty(scope, 'moveTop',
    interpreter.createNativeFunction(wrapper)); //미리 설정 해주어야함

  var wrapper = function (text) {
    text = text ? text.toString() : '';
    return interpreter.createPrimitive(moveDown(text));
  };
  interpreter.setProperty(scope, 'moveDown',
    interpreter.createNativeFunction(wrapper)); //미리 설정 해주어야함

  // move forward
  var wrapper = function (text) {
    text = text ? text.toString() : '';
    return interpreter.createPrimitive(moveForward(text));
  };
  interpreter.setProperty(scope, 'moveForward',
    interpreter.createNativeFunction(wrapper)); //미리 설정 해주어야함

  // move rotate
  var wrapper = function (text) {
    // console.log("in _ js interpreter : " + rotate);
    text = text ? text.toString() : '';
    // text = Blockly.blocks.getFieldValue('ROTATE');
    // text = 123;
    return interpreter.createPrimitive(moveRotate(text));
  };
  interpreter.setProperty(scope, 'moveRotate',
    interpreter.createNativeFunction(wrapper));

}

var highlightPause = false;

function highlightBlock(id) {
  Blockly.mainWorkspace.highlightBlock(id);
  highlightPause = true;
}

function parseCode() {
  // Generate JavaScript code and parse it.
  Blockly.JavaScript.workspaceToCode();
  if (Blockly.JavaScript.blockToCode(Blockly.mainWorkspace.topBlocks_.find(findStartBlock)) == "") {
    alert("블록이 없습니다");
    restart();
    return;
  }
  playing = true;
  parsing = true;
  Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
  Blockly.JavaScript.addReservedWords('highlightBlock');
  var code = Blockly.JavaScript.blockToCode(Blockly.mainWorkspace.topBlocks_.find(findStartBlock));
  myInterpreter = new Interpreter(code, initApi);

  highlightPause = false;
  Blockly.mainWorkspace.traceOn(true);
  Blockly.mainWorkspace.highlightBlock(null);
}

function findStartBlock(block) {
  return block.type === 'start_block';
}

function restart() {
  playing = false;
  parsing = false;
  document.getElementById('startBtn').style.display = "block";
  document.getElementById('gameRestartBtn').style.display = "none";
  Blockly.mainWorkspace.setOnlyReadable(false);
  game.restartGame();
}
// function stepCode() {
//   try {
//     var ok = myInterpreter.step();
//   } finally {
//     if (!ok) {
//       console.log("finish");
//       document.getElementById('stepButton').disabled = 'disabled';
//       ok = false;
//       return false;
//     }
//   }
//   if (highlightPause) {
//     highlightPause = false;
//   } else {
//     stepCode();
//   }
// }

var playing = false;
var parsing = false;

function nextStep(a) {
  if (!parsing && a) {
    Blockly.mainWorkspace.setOnlyReadable(true);
    parseCode();
  }
  if (!window.success && !window.fail && playing) { //성공 했을경우 아래 블록을 실행하지 않는다
    document.getElementById('startBtn').style.display = "none";
    document.getElementById('gameRestartBtn').style.display = "block";
    var ok = myInterpreter.step();
  }
  if (ok) {
    window.setTimeout(nextStep);
  } else {
    setTimeout('notice("블록을 다 사용하였지만 실패하였습니다.")', 800);
  }
}

function notice(msg) {
  if (playing != false && !window.success && !window.fail) alert(msg);
  Blockly.mainWorkspace.setOnlyReadable(false);
}