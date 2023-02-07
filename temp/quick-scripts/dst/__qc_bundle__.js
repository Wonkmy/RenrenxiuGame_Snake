
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Block');
require('./assets/scripts/Main');
require('./assets/scripts/Snake/Body');
require('./assets/scripts/Snake/Snake');
require('./assets/scripts/Utils/MyBtn');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Block.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d96b8DxB9Dg5rzyh0PD9YX', 'Block');
// scripts/Block.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fruitType = -1;
        return _this;
    }
    Block.prototype.init = function (picTexture, pos, _fruitType) {
        if (pos === void 0) { pos = cc.Vec2.ZERO; }
        if (_fruitType === void 0) { _fruitType = 1; }
        this.fruitType = _fruitType;
        var sprite = this.node.getComponent(cc.Sprite);
        var width = this.node.width;
        var height = this.node.height;
        if (this.fruitType == 0) {
            var frame = new cc.SpriteFrame(picTexture, cc.rect(pos.x * width, pos.y * height, width, height));
            sprite.spriteFrame = frame;
        }
        else if (this.fruitType == 1) {
            sprite.spriteFrame = picTexture;
        }
    };
    Block = __decorate([
        ccclass
    ], Block);
    return Block;
}(cc.Component));
exports.default = Block;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmxvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUFtQkM7UUFqQkcsZUFBUyxHQUFDLENBQUMsQ0FBQyxDQUFBOztJQWlCaEIsQ0FBQztJQWZHLG9CQUFJLEdBQUosVUFBSyxVQUFVLEVBQUMsR0FBZ0IsRUFBQyxVQUFjO1FBQS9CLG9CQUFBLEVBQUEsTUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUk7UUFBQywyQkFBQSxFQUFBLGNBQWM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBQyxVQUFVLENBQUM7UUFDMUIsSUFBSSxNQUFNLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBRSxDQUFDLEVBQUM7WUFDakIsSUFBSSxLQUFLLEdBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFDLEtBQUssRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzVGLE1BQU0sQ0FBQyxXQUFXLEdBQUMsS0FBSyxDQUFDO1NBQzVCO2FBQ0ksSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFFLENBQUMsRUFBQztZQUN0QixNQUFNLENBQUMsV0FBVyxHQUFDLFVBQVUsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFoQmdCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FtQnpCO0lBQUQsWUFBQztDQW5CRCxBQW1CQyxDQW5Ca0MsRUFBRSxDQUFDLFNBQVMsR0FtQjlDO2tCQW5Cb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIGZydWl0VHlwZT0tMVxyXG5cclxuICAgIGluaXQocGljVGV4dHVyZSxwb3M9Y2MuVmVjMi5aRVJPLF9mcnVpdFR5cGUgPSAxKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5mcnVpdFR5cGU9X2ZydWl0VHlwZTtcclxuICAgICAgICBsZXQgc3ByaXRlPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodDtcclxuICAgICAgICBpZih0aGlzLmZydWl0VHlwZT09MCl7XHJcbiAgICAgICAgICAgIGxldCBmcmFtZT1uZXcgY2MuU3ByaXRlRnJhbWUocGljVGV4dHVyZSxjYy5yZWN0KHBvcy54ICogd2lkdGgscG9zLnkgKiBoZWlnaHQsd2lkdGgsaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZT1mcmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmZydWl0VHlwZT09MSl7XHJcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZT1waWNUZXh0dXJlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixpQ0FBNEI7QUFDNUIsdUNBQWtDO0FBQ2xDLHVDQUFrQztBQUU1QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQWlHQztRQTlGRyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLDBCQUFvQixHQUFtQixJQUFJLENBQUM7UUFHNUMsdUJBQWlCLEdBQW1CLElBQUksQ0FBQztRQUd6QyxhQUFPLEdBQVUsSUFBSSxDQUFDO1FBR3RCLGVBQVMsR0FBVSxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFVLElBQUksQ0FBQztRQUd4QixnQkFBVSxHQUFVLElBQUksQ0FBQzs7SUF5RTdCLENBQUM7SUF2RUcscUJBQU0sR0FBTjtRQUNJLGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUM7UUFFL0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCw4QkFBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUMsSUFB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N0ZEO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUMsQ0FBQzswQ0FDQTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsTUFBTSxFQUFDLENBQUM7NkNBQ0c7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxDQUFDO3NEQUNZO0lBRzVDO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUMsQ0FBQzttREFDUztJQUd6QztRQURDLFFBQVEsQ0FBQyxlQUFLLENBQUM7eUNBQ007SUFHdEI7UUFEQyxRQUFRLENBQUMsZUFBSyxDQUFDOzJDQUNRO0lBR3hCO1FBREMsUUFBUSxDQUFDLGVBQUssQ0FBQzsyQ0FDUTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxlQUFLLENBQUM7NENBQ1M7SUF4QlIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWlHeEI7SUFBRCxXQUFDO0NBakdELEFBaUdDLENBakdpQyxFQUFFLENBQUMsU0FBUyxHQWlHN0M7a0JBakdvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEJsb2NrIGZyb20gXCIuL0Jsb2NrXCI7XHJcbmltcG9ydCBTbmFrZSBmcm9tIFwiLi9TbmFrZS9TbmFrZVwiO1xyXG5pbXBvcnQgTXlCdG4gZnJvbSBcIi4vVXRpbHMvTXlCdG5cIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLlByZWZhYn0pXHJcbiAgICBiaWdmcnVpdDogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuUHJlZmFifSlcclxuICAgIHNuYWtlUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5TcHJpdGVGcmFtZX0pXHJcbiAgICBiaWdGcnVpdE9yZ2luX3Nwcml0ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5TcHJpdGVGcmFtZX0pXHJcbiAgICBmcnVpdE9yZ2luX3Nwcml0ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShNeUJ0bilcclxuICAgIHVwQXJyb3c6IE15QnRuID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoTXlCdG4pXHJcbiAgICBkb3duQXJyb3c6IE15QnRuID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoTXlCdG4pXHJcbiAgICBsZWZ0QXJyb3c6IE15QnRuID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoTXlCdG4pXHJcbiAgICByaWdodEFycm93OiBNeUJ0biA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgLy90aGlzLkdlbmVyYXRvckJpZ0Zvb2QodGhpcy5iaWdGcnVpdE9yZ2luX3Nwcml0ZS5nZXRUZXh0dXJlKCkpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVOZXdGb29kKCk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQ9dHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckFsbEV2ZW50cygpO1xyXG5cclxuICAgICAgICB0aGlzLkdlbmVyYXRvclNuYWtlKCk7XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZU5ld0Zvb2QoKXtcclxuICAgICAgICB0aGlzLkdlbmVyYXRvckZvb2QodGhpcy5mcnVpdE9yZ2luX3Nwcml0ZSxuZXcgY2MuVmVjMih0aGlzLm15cmFuZG9tKC0yODAsMjgwKSx0aGlzLm15cmFuZG9tKC0yODAsMzgwKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQWxsRXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy51cEFycm93Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsKCk9PntcclxuICAgICAgICAgICAgdGhpcy51cEFycm93Lm9uUHJlc3NlZCgpO1xyXG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJtb3ZlX3VwXCIsXCJ1cFwiKTtcclxuICAgICAgICB9LHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZG93bkFycm93Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsKCk9PntcclxuICAgICAgICAgICAgdGhpcy5kb3duQXJyb3cub25QcmVzc2VkKCk7XHJcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcIm1vdmVfZG93blwiLFwiZG93blwiKTtcclxuICAgICAgICB9LHRoaXMpO1xyXG4gICAgICAgIHRoaXMubGVmdEFycm93Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsKCk9PntcclxuICAgICAgICAgICAgdGhpcy5sZWZ0QXJyb3cub25QcmVzc2VkKCk7XHJcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcIm1vdmVfbGVmdFwiLFwibGVmdFwiKTtcclxuICAgICAgICB9LHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmlnaHRBcnJvdy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHRBcnJvdy5vblByZXNzZWQoKTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KFwibW92ZV9yaWdodFwiLFwicmlnaHRcIik7XHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgY2MuZ2FtZS5vbihcImVhdGluZ1wiLHRoaXMuZ2VuZXJhdGVOZXdGb29kLHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIEdlbmVyYXRvclNuYWtlKCl7XHJcbiAgICAgICAgbGV0IG5ld1NuYWtlID0gY2MuaW5zdGFudGlhdGUodGhpcy5zbmFrZVByZWZhYik7XHJcbiAgICAgICAgbmV3U25ha2Uuc2V0UGFyZW50KHRoaXMubm9kZSk7XHJcbiAgICAgICAgbmV3U25ha2Uuc2V0UG9zaXRpb24oY2MuVmVjMi5aRVJPKTtcclxuICAgICAgICBuZXdTbmFrZS5nZXRDb21wb25lbnQoU25ha2UpLmluaXRTbmFrZSgyKTtcclxuXHJcbiAgICAgICAgbmV3U25ha2UuZ2V0Q29tcG9uZW50KFNuYWtlKS5zdGFydE1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBHZW5lcmF0b3JCaWdGb29kKGJpZ0ZyaXV0U3ByaXRlKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5iaWdmcnVpdCk7XHJcbiAgICAgICAgICAgICAgICBuZXdCbG9jay5wYXJlbnQ9dGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgbmV3QmxvY2suc2V0UG9zaXRpb24oaiAqIG5ld0Jsb2NrLndpZHRoKjEuMisyMDAsLWkgKiBuZXdCbG9jay5oZWlnaHQqMS4yKzIwMCk7XHJcbiAgICAgICAgICAgICAgICBuZXdCbG9jay5nZXRDb21wb25lbnQoQmxvY2spLmluaXQoYmlnRnJpdXRTcHJpdGUsbmV3IGNjLlZlYzIoaixpKSwwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBHZW5lcmF0b3JGb29kKGZvb2RTcHJpdGUscG9zKXtcclxuICAgICAgICBsZXQgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJpZ2ZydWl0KTtcclxuICAgICAgICBuZXdCbG9jay5wYXJlbnQ9dGhpcy5ub2RlO1xyXG4gICAgICAgIG5ld0Jsb2NrLnNldFBvc2l0aW9uKHBvcy54LHBvcy55KTtcclxuICAgICAgICBuZXdCbG9jay5nZXRDb21wb25lbnQoQmxvY2spLmluaXQoZm9vZFNwcml0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgR2VuZXJhdG9yQm9tYihib21iU3ByaXRlLHBvcyl7XHJcbiAgICAgICAgbGV0IG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5iaWdmcnVpdCk7XHJcbiAgICAgICAgbmV3QmxvY2sucGFyZW50PXRoaXMubm9kZTtcclxuICAgICAgICBuZXdCbG9jay5zZXRQb3NpdGlvbihwb3MueCxwb3MueSk7XHJcbiAgICAgICAgbmV3QmxvY2suZ2V0Q29tcG9uZW50KEJsb2NrKS5pbml0KGJvbWJTcHJpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG15cmFuZG9tKGxvd2VyOm51bWJlciwgdXBwZXI6bnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh1cHBlciAtIGxvd2VyKSkgKyBsb3dlcjtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Snake/Body.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '02256OWLZ1EWq8rz5C87aZn', 'Body');
// scripts/Snake/Body.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    function Body() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Body.prototype.start = function () {
        this.node.scale = 0.95;
    };
    Body.prototype.playAnim = function (duration) {
        var _this = this;
        this.node.getComponent(cc.BoxCollider).enabled = false;
        cc.tween(this.node)
            .to(this.myrandom(duration, duration * 2), { scale: 1.6 }).to(duration, { scale: 0.95 })
            .call(function () {
            _this.node.getComponent(cc.BoxCollider).enabled = true;
        })
            .start();
    };
    Body.prototype.myrandom = function (lower, upper) {
        return Math.floor(Math.random() * (upper - lower)) + lower;
    };
    Body = __decorate([
        ccclass
    ], Body);
    return Body;
}(cc.Component));
exports.default = Body;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU25ha2VcXEJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7O0lBbUJBLENBQUM7SUFqQmEsb0JBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQTtJQUN4QixDQUFDO0lBRUQsdUJBQVEsR0FBUixVQUFTLFFBQVE7UUFBakIsaUJBUUM7UUFQRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFDLEtBQUssQ0FBQztRQUNyRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBQyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsQ0FBQzthQUM1RSxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxHQUFDLElBQUksQ0FBQztRQUN4RCxDQUFDLENBQUM7YUFDTCxLQUFLLEVBQUUsQ0FBQTtJQUNaLENBQUM7SUFFRCx1QkFBUSxHQUFSLFVBQVMsS0FBWSxFQUFFLEtBQVk7UUFDbEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUM1RCxDQUFDO0lBbEJnQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBbUJ4QjtJQUFELFdBQUM7Q0FuQkQsQUFtQkMsQ0FuQmlDLEVBQUUsQ0FBQyxTQUFTLEdBbUI3QztrQkFuQm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvZHkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGU9MC45NVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlBbmltKGR1cmF0aW9uKXtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJveENvbGxpZGVyKS5lbmFibGVkPWZhbHNlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnRvKHRoaXMubXlyYW5kb20oZHVyYXRpb24sZHVyYXRpb24qMikse3NjYWxlOjEuNn0pLnRvKGR1cmF0aW9uLHtzY2FsZTowLjk1fSlcclxuICAgICAgICAgICAgLmNhbGwoKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLmVuYWJsZWQ9dHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIG15cmFuZG9tKGxvd2VyOm51bWJlciwgdXBwZXI6bnVtYmVyKSB7XHJcbiAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh1cHBlciAtIGxvd2VyKSkgKyBsb3dlcjtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Snake/Snake.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.isMove = true;
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
            this.bodies.splice(i, 0, newBody);
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
        if (this.isMove == false)
            return;
        // if(this.node.x>=294-this.node.width){
        //     this.isMove=false;
        // }
        // if(this.node.x<=-294+this.node.width){
        //     this.isMove=false;
        // }
        var vposition = this.node.position;
        this.node.x += this.node.width * this.curDir.x;
        this.node.y += this.node.height * this.curDir.y;
        if (this.isEat) {
            var newBody = cc.instantiate(this.bodyPrefab);
            //newBody.parent=this.node;
            cc.find("Canvas").addChild(newBody);
            newBody.position = vposition;
            this.bodies.splice(0, 0, newBody);
            if (this.bodies.length > 1) {
                for (var i = 0; i < this.bodies.length; i++) {
                    this.bodies[i].getComponent(Body_1.default).playAnim(0.3);
                }
            }
            this.isEat = false;
        }
        else if (this.bodies.length > 0) {
            this.bodies[this.bodies.length - 1].position = vposition;
            this.bodies.splice(0, 0, this.bodies[this.bodies.length - 1]);
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
            cc.game.emit("eating");
            other.node.destroy();
        }
        if (other.tag == 0 || other.tag == 2) { //墙壁/身体
            this.isMove = false;
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU25ha2VcXFNuYWtlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtCQUEwQjtBQUVwQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQXNHQztRQW5HRyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBRXBCLFlBQU0sR0FBVyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUVwQyxlQUFTLEdBQUMsQ0FBQyxDQUFDO1FBRVosV0FBSyxHQUFDLEtBQUssQ0FBQztRQUVaLFlBQU0sR0FBQyxJQUFJLENBQUM7O0lBeUZoQixDQUFDO0lBdkZHLHFCQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx5QkFB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Q0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7U0FDdkI7UUFFRCxJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUUsQ0FBQyxFQUFDLEVBQUMsT0FBTztZQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFsR0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDUztJQUhaLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FzR3pCO0lBQUQsWUFBQztDQXRHRCxBQXNHQyxDQXRHa0MsRUFBRSxDQUFDLFNBQVMsR0FzRzlDO2tCQXRHb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBCb2R5IGZyb20gXCIuL0JvZHlcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25ha2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBib2R5UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIGJvZGllczpjYy5Ob2RlW109W107XHJcblxyXG4gICAgY3VyRGlyOmNjLlZlYzMgPSBuZXcgY2MuVmVjMygxLDAsMCk7XHJcblxyXG4gICAgYm9keUNvdW50PTM7XHJcblxyXG4gICAgaXNFYXQ9ZmFsc2U7XHJcblxyXG4gICAgaXNNb3ZlPXRydWU7XHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBjYy5nYW1lLm9uKFwibW92ZV91cFwiLHRoaXMuT25DaGFuZ2VTbmFrZURpcix0aGlzKTtcclxuICAgICAgICBjYy5nYW1lLm9uKFwibW92ZV9kb3duXCIsdGhpcy5PbkNoYW5nZVNuYWtlRGlyLHRoaXMpO1xyXG4gICAgICAgIGNjLmdhbWUub24oXCJtb3ZlX2xlZnRcIix0aGlzLk9uQ2hhbmdlU25ha2VEaXIsdGhpcyk7XHJcbiAgICAgICAgY2MuZ2FtZS5vbihcIm1vdmVfcmlnaHRcIix0aGlzLk9uQ2hhbmdlU25ha2VEaXIsdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFNuYWtlKGRlZmF1bHRCb2R5Q291bnQpe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmYXVsdEJvZHlDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdCb2R5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib2R5UHJlZmFiKTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZChuZXdCb2R5KTtcclxuICAgICAgICAgICAgbmV3Qm9keS5zZXRQb3NpdGlvbigtaSpuZXdCb2R5LndpZHRoLW5ld0JvZHkud2lkdGgsMCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9kaWVzLnNwbGljZShpLDAsbmV3Qm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYm9keUNvdW50PXRoaXMuYm9kaWVzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydE1vdmUoKXtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgICAgIH0sMC41KTtcclxuICAgIH1cclxuICAgIG1vdmUoKXtcclxuICAgICAgICBpZih0aGlzLmlzTW92ZT09ZmFsc2UpcmV0dXJuO1xyXG4gICAgICAgIC8vIGlmKHRoaXMubm9kZS54Pj0yOTQtdGhpcy5ub2RlLndpZHRoKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc01vdmU9ZmFsc2U7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmKHRoaXMubm9kZS54PD0tMjk0K3RoaXMubm9kZS53aWR0aCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNNb3ZlPWZhbHNlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgdnBvc2l0aW9uPXRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICB0aGlzLm5vZGUueCs9dGhpcy5ub2RlLndpZHRoICogdGhpcy5jdXJEaXIueDtcclxuICAgICAgICB0aGlzLm5vZGUueSs9dGhpcy5ub2RlLmhlaWdodCAqIHRoaXMuY3VyRGlyLnk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNFYXQpe1xyXG4gICAgICAgICAgICBsZXQgbmV3Qm9keSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYm9keVByZWZhYik7XHJcbiAgICAgICAgICAgIC8vbmV3Qm9keS5wYXJlbnQ9dGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmFkZENoaWxkKG5ld0JvZHkpO1xyXG4gICAgICAgICAgICBuZXdCb2R5LnBvc2l0aW9uPXZwb3NpdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5ib2RpZXMuc3BsaWNlKDAsMCxuZXdCb2R5KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvZGllcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9kaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2RpZXNbaV0uZ2V0Q29tcG9uZW50KEJvZHkpLnBsYXlBbmltKDAuMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc0VhdD1mYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmJvZGllcy5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgIHRoaXMuYm9kaWVzW3RoaXMuYm9kaWVzLmxlbmd0aCAtIDFdLnBvc2l0aW9uID0gdnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmJvZGllcy5zcGxpY2UoMCwwLHRoaXMuYm9kaWVzW3RoaXMuYm9kaWVzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgdGhpcy5ib2RpZXMucG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keUNvdW50PXRoaXMuYm9kaWVzLmxlbmd0aCsxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBPbkNoYW5nZVNuYWtlRGlyKGN1ckRpcil7XHJcbiAgICAgICAgaWYoY3VyRGlyPT1cInVwXCIpe1xyXG4gICAgICAgICAgICBpZihjdXJEaXIhPVwiZG93blwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyRGlyID0gbmV3IGNjLlZlYzMoMCwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKGN1ckRpcj09XCJkb3duXCIpe1xyXG4gICAgICAgICAgICBpZihjdXJEaXIhPVwidXBcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckRpciA9IG5ldyBjYy5WZWMzKDAsLTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYoY3VyRGlyPT1cImxlZnRcIil7XHJcbiAgICAgICAgICAgIGlmKGN1ckRpciE9XCJyaWdodFwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyRGlyID0gbmV3IGNjLlZlYzMoLTEsMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihjdXJEaXI9PVwicmlnaHRcIil7XHJcbiAgICAgICAgICAgIGlmKGN1ckRpciE9XCJsZWZ0XCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJEaXIgPSBuZXcgY2MuVmVjMygxLDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIswqBzZWxmKcKge1xyXG4gICAgICAgIGlmKG90aGVyLnRhZz09MSl7Ly/po5/nialcclxuICAgICAgICAgICAgdGhpcy5pc0VhdD10cnVlO1xyXG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJlYXRpbmdcIik7XHJcbiAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvdGhlci50YWc9PTAgfHwgb3RoZXIudGFnPT0yKXsvL+WimeWjgS/ouqvkvZNcclxuICAgICAgICAgICAgdGhpcy5pc01vdmU9ZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Utils/MyBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a3b0yIO51C0KOw/PsgEemT', 'MyBtn');
// scripts/Utils/MyBtn.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MyBtn = /** @class */ (function (_super) {
    __extends(MyBtn, _super);
    function MyBtn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyBtn.prototype.start = function () {
        this.pressed_node = this.node.children[0];
        this.pressed_node.active = false;
    };
    MyBtn.prototype.onPressed = function () {
        var _this = this;
        this.pressed_node.active = true;
        this.scheduleOnce(function () {
            _this.pressed_node.active = false;
        }, 0.2);
    };
    MyBtn = __decorate([
        ccclass
    ], MyBtn);
    return MyBtn;
}(cc.Component));
exports.default = MyBtn;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVXRpbHNcXE15QnRuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DOztJQWVBLENBQUM7SUFYRyxxQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVELHlCQUFTLEdBQVQ7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO1FBQ25DLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUNYLENBQUM7SUFkZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWV6QjtJQUFELFlBQUM7Q0FmRCxBQWVDLENBZmtDLEVBQUUsQ0FBQyxTQUFTLEdBZTlDO2tCQWZvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUJ0biBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJlc3NlZF9ub2RlOiBjYy5Ob2RlO1xyXG5cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5wcmVzc2VkX25vZGU9dGhpcy5ub2RlLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIHRoaXMucHJlc3NlZF9ub2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvblByZXNzZWQoKXtcclxuICAgICAgICB0aGlzLnByZXNzZWRfbm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnByZXNzZWRfbm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgfSwwLjIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
