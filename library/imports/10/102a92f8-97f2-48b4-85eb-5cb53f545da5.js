"use strict";
cc._RF.push(module, '102a9L4l/JItIXrXLU/VF2l', 'Snake');
// scripts/Snake/Snake.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Body_1 = require("./Body");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bodyPrefab = null;
        _this.bodies = [];
        _this.curDir = new cc.Vec3(1, 0, 0);
        _this.bodyCount = 3;
        _this.isEat = false;
        return _this;
    }
    Snake.prototype.start = function () {
        cc.game.on("move_up", this.OnChangeSnakeDir, this);
        cc.game.on("move_down", this.OnChangeSnakeDir, this);
        cc.game.on("move_left", this.OnChangeSnakeDir, this);
        cc.game.on("move_right", this.OnChangeSnakeDir, this);
    };
    Snake.prototype.initSnake = function (defaultBodyCount) {
        for (var i = 0; i < defaultBodyCount; i++) {
            var newBody = cc.instantiate(this.bodyPrefab);
            cc.find("Canvas").addChild(newBody);
            newBody.setPosition(-i * newBody.width - newBody.width, 0);
            //this.bodies.push(newBody);
        }
        this.bodyCount = this.bodies.length;
    };
    Snake.prototype.startMove = function () {
        var _this = this;
        this.schedule(function () {
            _this.move();
        }, 0.5);
    };
    Snake.prototype.move = function () {
        var vposition = this.node.position;
        this.node.x += this.node.width * this.curDir.x;
        this.node.y += this.node.height * this.curDir.y;
        if (this.isEat) {
            var newBody = cc.instantiate(this.bodyPrefab);
            //newBody.parent=this.node;
            cc.find("Canvas").addChild(newBody);
            newBody.position = vposition;
            this.bodies.splice(0, 0, newBody);
            if (this.bodies.length > 3) {
                for (var i = 0; i < this.bodies.length; i++) {
                    this.bodies[i].getComponent(Body_1.default).playAnim(i / 10);
                }
            }
            this.isEat = false;
        }
        else if (this.bodies.length > 0) {
            this.bodies[this.bodies.length - 1].position = vposition;
            this.bodies.splice(0, 0, this.bodies[this.bodies.length - 1]);
            //this.bodies.splice(this.bodies.length - 1,1,this.bodies[this.bodies.length - 1]);
            this.bodies.pop();
            this.bodyCount = this.bodies.length + 1;
        }
    };
    Snake.prototype.OnChangeSnakeDir = function (curDir) {
        if (curDir == "up") {
            if (curDir != "down") {
                this.curDir = new cc.Vec3(0, 1);
            }
        }
        else if (curDir == "down") {
            if (curDir != "up") {
                this.curDir = new cc.Vec3(0, -1);
            }
        }
        else if (curDir == "left") {
            if (curDir != "right") {
                this.curDir = new cc.Vec3(-1, 0);
            }
        }
        else if (curDir == "right") {
            if (curDir != "left") {
                this.curDir = new cc.Vec3(1, 0);
            }
        }
    };
    Snake.prototype.onCollisionEnter = function (other, self) {
        if (other.tag == 1) { //食物
            this.isEat = true;
            other.node.destroy();
        }
    };
    __decorate([
        property(cc.Prefab)
    ], Snake.prototype, "bodyPrefab", void 0);
    Snake = __decorate([
        ccclass
    ], Snake);
    return Snake;
}(cc.Component));
exports.default = Snake;

cc._RF.pop();