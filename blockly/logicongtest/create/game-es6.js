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

    moveRight() {
        var newPos = this.x + 68;
        createjs.Tween.get(this, {override: true}).to({x: newPos}, 200, createjs.Ease.quintOut).call(function () {
            game.ready = true;
        });
    }

    moveLeft() {
        var newPos = this.x - 68;
        createjs.Tween.get(this, {override: true}).to({x: newPos}, 200, createjs.Ease.quintOut).call(function () {
            game.ready = true;
        });
    }

    moveTop() {
        var newPos = this.y - 68;
        createjs.Tween.get(this, {override: true}).to({y: newPos}, 200, createjs.Ease.quintOut).call(function () {
            game.ready = true;
        });
    }

    moveDown() {
        var newPos = this.y + 68;
        createjs.Tween.get(this, {override: true}).to({y: newPos}, 200, createjs.Ease.quintOut).call(function () {
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
        this.stage.addChild(new lib.mainBG());
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
        this.obstacleList = [];
        this.addGoal(1, 1, 272, 272);
        this.addGoal(2, 2, 272, 136);
        this.addObstacle(1, 136, 136);
        this.addSprite(0, 136);

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
        this.obstacleList.forEach(function (v, i) {
            if (sprite.x == v.x && sprite.y == v.y) {
                crash();
            }
        });

        this.goalList.forEach(function (v, i) {
            if (!v.eaten && sprite.x == v.x && sprite.y == v.y) {
                v.eaten = true;
                sprite.eatenSize += 1;
                console.log(v.type);
                console.log(sprite.eatenSize);
                noti(v.sequence + "번째 골에 도착했습니다.");
                if (v.sequence == goalList.length) {
                    if (v.sequence == sprite.eatenSize) suc();
                    else failMsg();
                }
            }
        });

    }

    addSprite(x, y) {
        var sprite = new Sprite();
        console.log(sprite);
        this.addChild(sprite);
        sprite.x = x;
        sprite.y = y;
        sprite.eatenSize = 0;
        this.sprite = sprite;
    }

    addGoal(sequence, type, x, y) {
        var goal = new Goal(type);
        this.addChild(goal);
        goal.x = x;
        goal.y = y;
        goal.sequence = sequence;
        goal.type = type;
        goal.eaten = false;
        this.goalList.push(goal);
    }

    addObstacle(type, x, y) {
        var obstacle = new Obstacle(type);
        this.addChild(obstacle);
        obstacle.x = x;
        obstacle.y = y;
        this.obstacleList.push(obstacle);
    }
}
// start the game
var game = new Game();
