
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0Jsb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBbUJDO1FBakJHLGVBQVMsR0FBQyxDQUFDLENBQUMsQ0FBQTs7SUFpQmhCLENBQUM7SUFmRyxvQkFBSSxHQUFKLFVBQUssVUFBVSxFQUFDLEdBQWdCLEVBQUMsVUFBYztRQUEvQixvQkFBQSxFQUFBLE1BQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJO1FBQUMsMkJBQUEsRUFBQSxjQUFjO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUMsVUFBVSxDQUFDO1FBQzFCLElBQUksTUFBTSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUUsQ0FBQyxFQUFDO1lBQ2pCLElBQUksS0FBSyxHQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBQyxLQUFLLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM1RixNQUFNLENBQUMsV0FBVyxHQUFDLEtBQUssQ0FBQztTQUM1QjthQUNJLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBRSxDQUFDLEVBQUM7WUFDdEIsTUFBTSxDQUFDLFdBQVcsR0FBQyxVQUFVLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBaEJnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBbUJ6QjtJQUFELFlBQUM7Q0FuQkQsQUFtQkMsQ0FuQmtDLEVBQUUsQ0FBQyxTQUFTLEdBbUI5QztrQkFuQm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9jayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBmcnVpdFR5cGU9LTFcblxuICAgIGluaXQocGljVGV4dHVyZSxwb3M9Y2MuVmVjMi5aRVJPLF9mcnVpdFR5cGUgPSAxKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZnJ1aXRUeXBlPV9mcnVpdFR5cGU7XG4gICAgICAgIGxldCBzcHJpdGU9dGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5ub2RlLndpZHRoO1xuICAgICAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQ7XG4gICAgICAgIGlmKHRoaXMuZnJ1aXRUeXBlPT0wKXtcbiAgICAgICAgICAgIGxldCBmcmFtZT1uZXcgY2MuU3ByaXRlRnJhbWUocGljVGV4dHVyZSxjYy5yZWN0KHBvcy54ICogd2lkdGgscG9zLnkgKiBoZWlnaHQsd2lkdGgsaGVpZ2h0KSk7XG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWU9ZnJhbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmZydWl0VHlwZT09MSl7XG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWU9cGljVGV4dHVyZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxufVxuIl19
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bigfruit = null;
        _this.snakePrefab = null;
        _this.bigFruitOrgin_sprite = null;
        _this.upArrow = null;
        _this.downArrow = null;
        _this.leftArrow = null;
        _this.rightArrow = null;
        return _this;
    }
    Main.prototype.onLoad = function () {
        this.GeneratorBigFood(this.bigFruitOrgin_sprite.getTexture());
        cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
        this.upArrow.on(cc.Node.EventType.TOUCH_END, function () {
            console.log("move!!!");
            cc.game.emit("move_up", "up");
        }, this);
        this.downArrow.on(cc.Node.EventType.TOUCH_END, function () {
            console.log("move!!!");
            cc.game.emit("move_down", "down");
        }, this);
        this.leftArrow.on(cc.Node.EventType.TOUCH_END, function () {
            console.log("move!!!");
            cc.game.emit("move_left", "left");
        }, this);
        this.rightArrow.on(cc.Node.EventType.TOUCH_END, function () {
            console.log("move!!!");
            cc.game.emit("move_right", "right");
        }, this);
        this.GeneratorSnake();
    };
    Main.prototype.GeneratorSnake = function () {
        var newSnake = cc.instantiate(this.snakePrefab);
        newSnake.setParent(this.node);
        newSnake.setPosition(cc.Vec2.ZERO);
        //newSnake.getComponent(Snake).initSnake(0);
        newSnake.getComponent(Snake_1.default).startMove();
    };
    Main.prototype.GeneratorBigFood = function (bigFriutSprite) {
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 2; j++) {
                var newBlock = cc.instantiate(this.bigfruit);
                newBlock.parent = this.node;
                newBlock.setPosition(j * newBlock.width * 1.2, -i * newBlock.height * 1.2);
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
        property(cc.Node)
    ], Main.prototype, "upArrow", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "downArrow", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "leftArrow", void 0);
    __decorate([
        property(cc.Node)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsaUNBQTRCO0FBQzVCLHVDQUFrQztBQUU1QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQWlGQztRQTlFRyxjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRzNCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRzlCLDBCQUFvQixHQUFtQixJQUFJLENBQUM7UUFHNUMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7O0lBNEQvQixDQUFDO0lBMURHLHFCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDOUQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUM7UUFDL0MsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUE7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFBO1FBQ1AsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUVQLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUNJLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyw0Q0FBNEM7UUFFNUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsK0JBQWdCLEdBQWhCLFVBQWlCLGNBQWM7UUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0MsUUFBUSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUMxQixRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0RSxRQUFRLENBQUMsWUFBWSxDQUFDLGVBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzthQUN4RTtTQUNKO0lBQ0wsQ0FBQztJQUVELDRCQUFhLEdBQWIsVUFBYyxVQUFVLEVBQUMsR0FBRztRQUN4QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxRQUFRLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxRQUFRLENBQUMsWUFBWSxDQUFDLGVBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsNEJBQWEsR0FBYixVQUFjLFVBQVUsRUFBQyxHQUFHO1FBQ3hCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLFFBQVEsQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUE3RUQ7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLE1BQU0sRUFBQyxDQUFDOzBDQUNBO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUMsQ0FBQzs2Q0FDRztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLENBQUMsV0FBVyxFQUFDLENBQUM7c0RBQ1k7SUFHNUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDUztJQXJCVixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBaUZ4QjtJQUFELFdBQUM7Q0FqRkQsQUFpRkMsQ0FqRmlDLEVBQUUsQ0FBQyxTQUFTLEdBaUY3QztrQkFqRm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJsb2NrIGZyb20gXCIuL0Jsb2NrXCI7XG5pbXBvcnQgU25ha2UgZnJvbSBcIi4vU25ha2UvU25ha2VcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5QcmVmYWJ9KVxuICAgIGJpZ2ZydWl0OiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOmNjLlByZWZhYn0pXG4gICAgc25ha2VQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuU3ByaXRlRnJhbWV9KVxuICAgIGJpZ0ZydWl0T3JnaW5fc3ByaXRlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1cEFycm93OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRvd25BcnJvdzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsZWZ0QXJyb3c6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmlnaHRBcnJvdzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKXtcbiAgICAgICAgdGhpcy5HZW5lcmF0b3JCaWdGb29kKHRoaXMuYmlnRnJ1aXRPcmdpbl9zcHJpdGUuZ2V0VGV4dHVyZSgpKTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQ9dHJ1ZTtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnVwQXJyb3cub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmUhISFcIik7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJtb3ZlX3VwXCIsXCJ1cFwiKTtcbiAgICAgICAgfSx0aGlzKVxuICAgICAgICB0aGlzLmRvd25BcnJvdy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsKCk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW92ZSEhIVwiKTtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcIm1vdmVfZG93blwiLFwiZG93blwiKTtcbiAgICAgICAgfSx0aGlzKVxuICAgICAgICB0aGlzLmxlZnRBcnJvdy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsKCk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW92ZSEhIVwiKTtcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChcIm1vdmVfbGVmdFwiLFwibGVmdFwiKTtcbiAgICAgICAgfSx0aGlzKVxuICAgICAgICB0aGlzLnJpZ2h0QXJyb3cub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmUhISFcIik7XG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJtb3ZlX3JpZ2h0XCIsXCJyaWdodFwiKTtcbiAgICAgICAgfSx0aGlzKVxuXG4gICAgICAgIHRoaXMuR2VuZXJhdG9yU25ha2UoKTtcbiAgICB9XG5cbiAgICBHZW5lcmF0b3JTbmFrZSgpe1xuICAgICAgICBsZXQgbmV3U25ha2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNuYWtlUHJlZmFiKTtcbiAgICAgICAgbmV3U25ha2Uuc2V0UGFyZW50KHRoaXMubm9kZSk7XG4gICAgICAgIG5ld1NuYWtlLnNldFBvc2l0aW9uKGNjLlZlYzIuWkVSTyk7XG4gICAgICAgIC8vbmV3U25ha2UuZ2V0Q29tcG9uZW50KFNuYWtlKS5pbml0U25ha2UoMCk7XG5cbiAgICAgICAgbmV3U25ha2UuZ2V0Q29tcG9uZW50KFNuYWtlKS5zdGFydE1vdmUoKTtcbiAgICB9XG5cbiAgICBHZW5lcmF0b3JCaWdGb29kKGJpZ0ZyaXV0U3ByaXRlKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5iaWdmcnVpdCk7XG4gICAgICAgICAgICAgICAgbmV3QmxvY2sucGFyZW50PXRoaXMubm9kZTtcbiAgICAgICAgICAgICAgICBuZXdCbG9jay5zZXRQb3NpdGlvbihqICogbmV3QmxvY2sud2lkdGgqMS4yLC1pICogbmV3QmxvY2suaGVpZ2h0KjEuMik7XG4gICAgICAgICAgICAgICAgbmV3QmxvY2suZ2V0Q29tcG9uZW50KEJsb2NrKS5pbml0KGJpZ0ZyaXV0U3ByaXRlLG5ldyBjYy5WZWMyKGosaSksMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBHZW5lcmF0b3JGb29kKGZvb2RTcHJpdGUscG9zKXtcbiAgICAgICAgbGV0IG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5iaWdmcnVpdCk7XG4gICAgICAgIG5ld0Jsb2NrLnBhcmVudD10aGlzLm5vZGU7XG4gICAgICAgIG5ld0Jsb2NrLnNldFBvc2l0aW9uKHBvcy54LHBvcy55KTtcbiAgICAgICAgbmV3QmxvY2suZ2V0Q29tcG9uZW50KEJsb2NrKS5pbml0KGZvb2RTcHJpdGUpO1xuICAgIH1cblxuICAgIEdlbmVyYXRvckJvbWIoYm9tYlNwcml0ZSxwb3Mpe1xuICAgICAgICBsZXQgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJpZ2ZydWl0KTtcbiAgICAgICAgbmV3QmxvY2sucGFyZW50PXRoaXMubm9kZTtcbiAgICAgICAgbmV3QmxvY2suc2V0UG9zaXRpb24ocG9zLngscG9zLnkpO1xuICAgICAgICBuZXdCbG9jay5nZXRDb21wb25lbnQoQmxvY2spLmluaXQoYm9tYlNwcml0ZSk7XG4gICAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NuYWtlL1NuYWtlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtCQUEwQjtBQUVwQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQXlGQztRQXRGRyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixZQUFNLEdBQVcsRUFBRSxDQUFBO1FBRW5CLFlBQU0sR0FBVyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtRQUVuQyxlQUFTLEdBQUMsQ0FBQyxDQUFBO1FBRVgsV0FBSyxHQUFDLEtBQUssQ0FBQTs7SUE4RWYsQ0FBQztJQTVFRyxxQkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQseUJBQVMsR0FBVCxVQUFVLGdCQUFnQjtRQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDOUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBQyxPQUFPLENBQUMsS0FBSyxHQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsNEJBQTRCO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN0QyxDQUFDO0lBRUQseUJBQVMsR0FBVDtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsb0JBQUksR0FBSjtRQUNJLElBQUksU0FBUyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRTlDLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBQztZQUNWLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzlDLDJCQUEyQjtZQUMzQixFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxPQUFPLENBQUMsUUFBUSxHQUFDLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDO2dCQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7aUJBQ3REO2FBQ0o7WUFFRCxJQUFJLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztTQUNwQjthQUFLLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxtRkFBbUY7WUFDbkYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFFRCxnQ0FBZ0IsR0FBaEIsVUFBaUIsTUFBTTtRQUNuQixJQUFHLE1BQU0sSUFBRSxJQUFJLEVBQUM7WUFDWixJQUFHLE1BQU0sSUFBRSxNQUFNLEVBQUM7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0o7YUFBSyxJQUFHLE1BQU0sSUFBRSxNQUFNLEVBQUM7WUFDcEIsSUFBRyxNQUFNLElBQUUsSUFBSSxFQUFDO2dCQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25DO1NBQ0o7YUFBSyxJQUFHLE1BQU0sSUFBRSxNQUFNLEVBQUM7WUFDcEIsSUFBRyxNQUFNLElBQUUsT0FBTyxFQUFDO2dCQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25DO1NBQ0o7YUFBSyxJQUFHLE1BQU0sSUFBRSxPQUFPLEVBQUM7WUFDckIsSUFBRyxNQUFNLElBQUUsTUFBTSxFQUFDO2dCQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzthQUNsQztTQUNKO0lBQ0wsQ0FBQztJQUVELGdDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUUsQ0FBQyxFQUFDLEVBQUMsSUFBSTtZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQztZQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1NBQ3ZCO0lBQ0wsQ0FBQztJQXJGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNTO0lBSFosS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXlGekI7SUFBRCxZQUFDO0NBekZELEFBeUZDLENBekZrQyxFQUFFLENBQUMsU0FBUyxHQXlGOUM7a0JBekZvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCb2R5IGZyb20gXCIuL0JvZHlcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbmFrZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJvZHlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBib2RpZXM6Y2MuTm9kZVtdPVtdXG5cbiAgICBjdXJEaXI6Y2MuVmVjMyA9IG5ldyBjYy5WZWMzKDEsMCwwKVxuXG4gICAgYm9keUNvdW50PTNcblxuICAgIGlzRWF0PWZhbHNlXG5cbiAgICBzdGFydCgpe1xuICAgICAgICBjYy5nYW1lLm9uKFwibW92ZV91cFwiLHRoaXMuT25DaGFuZ2VTbmFrZURpcix0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcIm1vdmVfZG93blwiLHRoaXMuT25DaGFuZ2VTbmFrZURpcix0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcIm1vdmVfbGVmdFwiLHRoaXMuT25DaGFuZ2VTbmFrZURpcix0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcIm1vdmVfcmlnaHRcIix0aGlzLk9uQ2hhbmdlU25ha2VEaXIsdGhpcyk7XG4gICAgfVxuXG4gICAgaW5pdFNuYWtlKGRlZmF1bHRCb2R5Q291bnQpe1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlZmF1bHRCb2R5Q291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5ld0JvZHkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJvZHlQcmVmYWIpO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZChuZXdCb2R5KTtcbiAgICAgICAgICAgIG5ld0JvZHkuc2V0UG9zaXRpb24oLWkqbmV3Qm9keS53aWR0aC1uZXdCb2R5LndpZHRoLDApO1xuICAgICAgICAgICAgLy90aGlzLmJvZGllcy5wdXNoKG5ld0JvZHkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9keUNvdW50PXRoaXMuYm9kaWVzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBzdGFydE1vdmUoKXtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+e1xuICAgICAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIH0sMC41KTtcbiAgICB9XG5cbiAgICBtb3ZlKCl7XG4gICAgICAgIGxldCB2cG9zaXRpb249dGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLm5vZGUueCs9dGhpcy5ub2RlLndpZHRoICogdGhpcy5jdXJEaXIueDtcbiAgICAgICAgdGhpcy5ub2RlLnkrPXRoaXMubm9kZS5oZWlnaHQgKiB0aGlzLmN1ckRpci55O1xuXG4gICAgICAgIGlmKHRoaXMuaXNFYXQpe1xuICAgICAgICAgICAgbGV0IG5ld0JvZHkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJvZHlQcmVmYWIpO1xuICAgICAgICAgICAgLy9uZXdCb2R5LnBhcmVudD10aGlzLm5vZGU7XG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmFkZENoaWxkKG5ld0JvZHkpO1xuICAgICAgICAgICAgbmV3Qm9keS5wb3NpdGlvbj12cG9zaXRpb247XG4gICAgICAgICAgICB0aGlzLmJvZGllcy5zcGxpY2UoMCwwLG5ld0JvZHkpO1xuICAgICAgICAgICAgaWYodGhpcy5ib2RpZXMubGVuZ3RoPjMpe1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2RpZXNbaV0uZ2V0Q29tcG9uZW50KEJvZHkpLnBsYXlBbmltKGkgLyAxMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmlzRWF0PWZhbHNlO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmJvZGllcy5sZW5ndGg+MCl7XG4gICAgICAgICAgICB0aGlzLmJvZGllc1t0aGlzLmJvZGllcy5sZW5ndGggLSAxXS5wb3NpdGlvbiA9IHZwb3NpdGlvbjtcbiAgICAgICAgICAgIHRoaXMuYm9kaWVzLnNwbGljZSgwLDAsdGhpcy5ib2RpZXNbdGhpcy5ib2RpZXMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgLy90aGlzLmJvZGllcy5zcGxpY2UodGhpcy5ib2RpZXMubGVuZ3RoIC0gMSwxLHRoaXMuYm9kaWVzW3RoaXMuYm9kaWVzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgIHRoaXMuYm9kaWVzLnBvcCgpO1xuICAgICAgICAgICAgdGhpcy5ib2R5Q291bnQ9dGhpcy5ib2RpZXMubGVuZ3RoKzE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBPbkNoYW5nZVNuYWtlRGlyKGN1ckRpcil7XG4gICAgICAgIGlmKGN1ckRpcj09XCJ1cFwiKXtcbiAgICAgICAgICAgIGlmKGN1ckRpciE9XCJkb3duXCIpe1xuICAgICAgICAgICAgICAgIHRoaXMuY3VyRGlyID0gbmV3IGNjLlZlYzMoMCwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYoY3VyRGlyPT1cImRvd25cIil7XG4gICAgICAgICAgICBpZihjdXJEaXIhPVwidXBcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJEaXIgPSBuZXcgY2MuVmVjMygwLC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYoY3VyRGlyPT1cImxlZnRcIil7XG4gICAgICAgICAgICBpZihjdXJEaXIhPVwicmlnaHRcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJEaXIgPSBuZXcgY2MuVmVjMygtMSwwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYoY3VyRGlyPT1cInJpZ2h0XCIpe1xuICAgICAgICAgICAgaWYoY3VyRGlyIT1cImxlZnRcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJEaXIgPSBuZXcgY2MuVmVjMygxLDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcizCoHNlbGYpwqB7XG4gICAgICAgIGlmKG90aGVyLnRhZz09MSl7Ly/po5/nialcbiAgICAgICAgICAgIHRoaXMuaXNFYXQ9dHJ1ZTtcbiAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
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
    Body.prototype.playAnim = function (duration) {
        var _this = this;
        cc.tween(this.node)
            .to(duration, { scale: 1.3 })
            .to(duration, { scale: 1.0 })
            .to(duration, { scale: 1.2 })
            .to(duration, { scale: 1.0 })
            .call(function () {
            _this.node.resumeAllActions();
        })
            .start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NuYWtlL0JvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7O0lBYUEsQ0FBQztJQVhHLHVCQUFRLEdBQVIsVUFBUyxRQUFRO1FBQWpCLGlCQVVDO1FBVEcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLFFBQVEsRUFBQyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsQ0FBQzthQUN4QixFQUFFLENBQUMsUUFBUSxFQUFDLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxDQUFDO2FBQ3hCLEVBQUUsQ0FBQyxRQUFRLEVBQUMsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLENBQUM7YUFDeEIsRUFBRSxDQUFDLFFBQVEsRUFBQyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsQ0FBQzthQUN4QixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7UUFDaEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQVpnQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBYXhCO0lBQUQsV0FBQztDQWJELEFBYUMsQ0FiaUMsRUFBRSxDQUFDLFNBQVMsR0FhN0M7a0JBYm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2R5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHBsYXlBbmltKGR1cmF0aW9uKXtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uLHtzY2FsZToxLjN9KVxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uLHtzY2FsZToxLjB9KVxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uLHtzY2FsZToxLjJ9KVxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uLHtzY2FsZToxLjB9KVxuICAgICAgICAgICAgLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVzdW1lQWxsQWN0aW9ucygpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KClcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
