"use strict";
cc._RF.push(module, '2a8a0FAPtVLkaKkP6aohY7H', 'Main');
// scripts/Main.ts

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
var Block_1 = require("./Block");
var Snake_1 = require("./Snake/Snake");
var MyBtn_1 = require("./Utils/MyBtn");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bigfruit = null;
        _this.snakePrefab = null;
        _this.bigFruitOrgin_sprite = null;
        _this.fruitOrgin_sprite = null;
        _this.upArrow = null;
        _this.downArrow = null;
        _this.leftArrow = null;
        _this.rightArrow = null;
        return _this;
    }
    Main.prototype.onLoad = function () {
        //this.GeneratorBigFood(this.bigFruitOrgin_sprite.getTexture());
        this.generateNewFood();
        cc.director.getCollisionManager().enabled = true;
        this.registerAllEvents();
        this.GeneratorSnake();
    };
    Main.prototype.generateNewFood = function () {
        this.GeneratorFood(this.fruitOrgin_sprite, new cc.Vec2(this.myrandom(-280, 280), this.myrandom(-280, 380)));
    };
    Main.prototype.registerAllEvents = function () {
        var _this = this;
        this.upArrow.node.on(cc.Node.EventType.TOUCH_START, function () {
            _this.upArrow.onPressed();
            cc.game.emit("move_up", "up");
        }, this);
        this.downArrow.node.on(cc.Node.EventType.TOUCH_START, function () {
            _this.downArrow.onPressed();
            cc.game.emit("move_down", "down");
        }, this);
        this.leftArrow.node.on(cc.Node.EventType.TOUCH_START, function () {
            _this.leftArrow.onPressed();
            cc.game.emit("move_left", "left");
        }, this);
        this.rightArrow.node.on(cc.Node.EventType.TOUCH_START, function () {
            _this.rightArrow.onPressed();
            cc.game.emit("move_right", "right");
        }, this);
        cc.game.on("eating", this.generateNewFood, this);
    };
    Main.prototype.GeneratorSnake = function () {
        var newSnake = cc.instantiate(this.snakePrefab);
        newSnake.setParent(this.node);
        newSnake.setPosition(cc.Vec2.ZERO);
        newSnake.getComponent(Snake_1.default).initSnake(2);
        newSnake.getComponent(Snake_1.default).startMove();
    };
    Main.prototype.GeneratorBigFood = function (bigFriutSprite) {
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 2; j++) {
                var newBlock = cc.instantiate(this.bigfruit);
                newBlock.parent = this.node;
                newBlock.setPosition(j * newBlock.width * 1.2 + 200, -i * newBlock.height * 1.2 + 200);
                newBlock.getComponent(Block_1.default).init(bigFriutSprite, new cc.Vec2(j, i), 0);
            }
        }
    };
    Main.prototype.GeneratorFood = function (foodSprite, pos) {
        var newBlock = cc.instantiate(this.bigfruit);
        newBlock.parent = this.node;
        newBlock.setPosition(pos.x, pos.y);
        newBlock.getComponent(Block_1.default).init(foodSprite);
    };
    Main.prototype.GeneratorBomb = function (bombSprite, pos) {
        var newBlock = cc.instantiate(this.bigfruit);
        newBlock.parent = this.node;
        newBlock.setPosition(pos.x, pos.y);
        newBlock.getComponent(Block_1.default).init(bombSprite);
    };
    Main.prototype.myrandom = function (lower, upper) {
        return Math.floor(Math.random() * (upper - lower)) + lower;
    };
    __decorate([
        property({ type: cc.Prefab })
    ], Main.prototype, "bigfruit", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], Main.prototype, "snakePrefab", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], Main.prototype, "bigFruitOrgin_sprite", void 0);
    __decorate([
        property({ type: cc.SpriteFrame })
    ], Main.prototype, "fruitOrgin_sprite", void 0);
    __decorate([
        property(MyBtn_1.default)
    ], Main.prototype, "upArrow", void 0);
    __decorate([
        property(MyBtn_1.default)
    ], Main.prototype, "downArrow", void 0);
    __decorate([
        property(MyBtn_1.default)
    ], Main.prototype, "leftArrow", void 0);
    __decorate([
        property(MyBtn_1.default)
    ], Main.prototype, "rightArrow", void 0);
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

cc._RF.pop();