var xcell = 10;
var ycell = 7;
var blockSize = (canvas.width / 10);

class GameObject extends createjs.Container {
  constructor(graphic) {
    super();

    if (graphic !== undefined) {
      this.graphic = graphic;
      this.addChild(this.graphic);

      var b = this.graphic.nominalBounds;
      this.setBounds(b.x, b.y, b.width, b.height);
    }
  }
}

class MovableGameObject extends GameObject {
  constructor(graphic) {
    super(graphic);

    this.on("tick", this.tick);
  }

  tick() {

  }

}


class Sprite extends MovableGameObject {
  constructor() {
    super(new lib.sprite());
  }

  moveForward() {
    if (this.rotate == 1) { // right
      var newPos = this.x + blockSize;
      this.graphic.gotoAndPlay("walkRight");
      createjs.Tween.get(this, {override: true}).to({x: newPos}, 400, createjs.Ease.none).call(function () {
        this.graphic.gotoAndStop("standRight");
        game.ready = true;
      });
    } else if (this.rotate == 2) { // down
      var newPos = this.y + blockSize;
      this.graphic.gotoAndPlay("walkBottom");
      createjs.Tween.get(this, {override: true}).to({y: newPos}, 400, createjs.Ease.none).call(function () {
        this.graphic.gotoAndStop("standBottom");
        game.ready = true;
      });
    } else if (this.rotate == 3) { // left
      var newPos = this.x - blockSize;
      this.graphic.gotoAndPlay("walkLeft");
      createjs.Tween.get(this, {override: true}).to({x: newPos}, 400, createjs.Ease.none).call(function () {
        this.graphic.gotoAndStop("standLeft");
        game.ready = true;
      });
    } else if (this.rotate == 4) { // top
      var newPos = this.y - blockSize;
      this.graphic.gotoAndPlay("walkTop");
      createjs.Tween.get(this, {override: true}).to({y: newPos}, 400, createjs.Ease.none).call(function () {
        this.graphic.gotoAndStop("standTop");
        game.ready = true;
      });
    }
  }

  moveRotate(rotate) {
    // sprite.rotate = 3; // right 1 down 2 left 3 top 4

    if (rotate == "left") {
      switch (this.rotate) {
        case 1: // right
          this.rotate = 4;
          this.graphic.gotoAndStop("standTop");
          break;
        case 2: // down
          this.rotate = 1;
          this.graphic.gotoAndStop("standRight");
          break;
        case 3: // left
          this.rotate = 2;
          this.graphic.gotoAndStop("standBottom");
          break;
        case 4: // top
          this.rotate = 3;
          this.graphic.gotoAndStop("standLeft");
          break;
      }
    } else {
      switch (this.rotate) {
        case 1: // right
          this.rotate = 2;
          this.graphic.gotoAndStop("standBottom");
          break;
        case 2: // down
          this.rotate = 3;
          this.graphic.gotoAndStop("standLeft");
          break;
        case 3: // left
          this.rotate = 4;
          this.graphic.gotoAndStop("standTop");
          break;
        case 4: // top
          this.rotate = 1;
          this.graphic.gotoAndStop("standRight");
          break;
      }
    }

  }

  moveRight() {
    var newPos = this.x + blockSize;
    this.graphic.gotoAndPlay("walkRight");
    createjs.Tween.get(this, {override: true}).to({x: newPos}, 200, createjs.Ease.quintOut).call(function () {
      console.log("standRight");
      game.ready = true;
      this.graphic.gotoAndStop("standRight");
    });
  }

  moveLeft() {
    var newPos = this.x - blockSize;
    this.graphic.gotoAndPlay("walkLeft");
    createjs.Tween.get(this, {override: true}).to({x: newPos}, 200, createjs.Ease.quintOut).call(function () {
      console.log("standLeft");
      game.ready = true;
      this.graphic.gotoAndStop("standLeft");
    });
  }

  moveTop() {
    var newPos = this.y - blockSize;
    this.graphic.gotoAndPlay("walkTop");
    createjs.Tween.get(this, {override: true}).to({y: newPos}, 200, createjs.Ease.quintOut).call(function () {
      console.log("standTop");
      game.ready = true;
      this.graphic.gotoAndStop("standTop");
    });
  }

  moveDown() {
    var newPos = this.y + blockSize;
    this.graphic.gotoAndPlay("walkBottom");
    createjs.Tween.get(this, {override: true}).to({y: newPos}, 200, createjs.Ease.quintOut).call(function () {
      console.log("standBottom");
      this.graphic.gotoAndStop("standBottom");
      game.ready = true;
    });
  }
}

class Goal extends MovableGameObject {
  constructor(type) {
    if (type == 1) {
      super(new lib.goal_1());
    } else if (type == 2) {
      super(new lib.goal_2());
    } else if (type == 3) {
      super(new lib.goal_3());
    } else if (type == 4) {
      super(new lib.goal_4());
    } else {
      super(new lib.goal());
    }
  }
}

class Obstacle extends MovableGameObject {
  constructor(type) {
    if (type == 1) {
      super(new lib.obstacle_1());
    }
  }
}

class Wall extends MovableGameObject {
  constructor() {
    super(new lib.wallBG());
  }
}


class Game {
  constructor() {

    //현재 게임이 진행가능한 상태인지 확인
    this.ready = true;

    this.canvas = document.getElementById("canvas");
    this.stage = new createjs.Stage(this.canvas);

    this.stage.width = this.canvas.width;
    this.stage.height = this.canvas.height;

    createjs.Ticker.setFPS(60);

    this.restartGame();
    createjs.Ticker.on("tick", this.stage);
    window.resetGame = this.restartGame;

  }

  restartGame() {
    console.log("restarted");
    window.success = false;
    window.fail = false;
    //remove all obj
    this.stage.removeAllChildren();

    // background
    var mainBG = new lib.mainBG();
    mainBG.x = blockSize * (xcell * 0.5);
    mainBG.y = blockSize * (ycell * 0.5);

    this.stage.addChild(mainBG);
    // generating world
    this.world = new World();
    //adding world
    this.stage.addChild(this.world);
  }
}

class World extends createjs.Container {
  constructor() {
    super();

    this.on("tick", this.tick);

    this.goalList = [];
    this.addWall();
    this.addGoal(1, 1, 1, 0);
    this.addGoal(2, 2, 1, 6);
    this.addGoal(3, 3, 7, 0);
    this.addGoal(4, 4, 7, 6);
    this.addSprite(4, 2);

    this.crash = _.once(function () {
      alert("장애물에 충돌하였습니다.");
      window.fail = true;
    });
    this.suc = _.once(function () {
      alert("성공하였습니다.");
      window.success = true;
    });
    this.failMsg = _.once(function () {
      alert("미션을 실패하였습니다.");
      window.fail = true;
    });
    this.noti = _.once(function (msg) {
      alert(msg);
    });
    //window register
    window.moveRight = this.sprite.moveRight.bind(this.sprite);
    window.moveLeft = this.sprite.moveLeft.bind(this.sprite);
    window.moveTop = this.sprite.moveTop.bind(this.sprite);
    window.moveDown = this.sprite.moveDown.bind(this.sprite);
    window.moveForward = this.sprite.moveForward.bind(this.sprite);
    window.moveRotate = this.sprite.moveRotate.bind(this.sprite);

  }


  tick() {
    // ..easel hit 작동이 안되서 일단 스킵
    // var pt = this.sprite.localToLocal(0, 0, this.goal);
    // if (this.goal.hitTest(pt.x, pt.y)) {
    //     this.suc();
    //     window.success = true;
    // }
    // if (this.sprite.x == this.goal.x && this.sprite.y == this.goal.y) {
    //     this.suc();
    //     window.success = true;
    // }
    var crash = this.crash;
    var suc = this.suc;
    var failMsg = this.failMsg;
    var noti = this.noti;
    var sprite = this.sprite;
    var goalList = this.goalList;

    var pt = this.sprite.localToLocal(0, 0, this.wall);

    if (this.wall.hitTest(pt.x, pt.y)) {
      crash();
    }

    this.goalList.forEach(function (v, i) {
      var pt = sprite.localToLocal(0, 0, v);
      if (!v.eaten && v.hitTest(pt.x, pt.y)) {
        v.eaten = true;
        v.removeAllChildren();
        // this.removeChild(v);
        sprite.eatenSize += 1;
        if (sprite.eatenSize == 4) {
          suc();
        }
      }
    });

  }

  addSprite(x, y) {
    x *= blockSize;
    y *= blockSize;
    var sprite = new Sprite();
    sprite.graphic.gotoAndStop("standLeft");
    this.addChild(sprite);
    sprite.x = x + (blockSize * 0.5);
    sprite.y = y + (blockSize * 0.5);
    sprite.eatenSize = 0;
    sprite.rotate = 3; // right 1 down 2 left 3 top 4
    this.sprite = sprite;
  }

  addGoal(sequence, type, x, y) {
    x *= blockSize;
    y *= blockSize;
    var goal = new Goal(type);
    this.addChild(goal);
    goal.x = x + (blockSize * 0.5);
    goal.y = y + (blockSize * 0.5);
    goal.sequence = sequence;
    goal.type = type;
    goal.eaten = false;
    this.goalList.push(goal);
  }

  addWall() {
    var wall = new Wall();
    this.addChild(wall);
    wall.x = blockSize * (xcell * 0.5);
    wall.y = blockSize * (ycell * 0.5);
    this.wall = wall;
  }

  addObstacle(type, x, y) {
    x *= blockSize;
    y *= blockSize;
    var obstacle = new Obstacle(type);
    this.addChild(obstacle);
    obstacle.x = x;
    obstacle.y = y;
    this.obstacleList.push(obstacle);
  }
}
// start the game
var game = new Game();
