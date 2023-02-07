
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bigfruit = null;
        _this.bigFruitOrgin_sprite = null;
        return _this;
    }
    Main.prototype.onLoad = function () {
        this.GeneratorBigFood(this.bigFruitOrgin_sprite.getTexture());
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
        property({ type: cc.SpriteFrame })
    ], Main.prototype, "bigFruitOrgin_sprite", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsaUNBQTRCO0FBRXRCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBb0NDO1FBakNHLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsMEJBQW9CLEdBQW1CLElBQUksQ0FBQzs7SUE4QmhELENBQUM7SUE1QkcscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsK0JBQWdCLEdBQWhCLFVBQWlCLGNBQWM7UUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0MsUUFBUSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUMxQixRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0RSxRQUFRLENBQUMsWUFBWSxDQUFDLGVBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzthQUN4RTtTQUNKO0lBQ0wsQ0FBQztJQUVELDRCQUFhLEdBQWIsVUFBYyxVQUFVLEVBQUMsR0FBRztRQUN4QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxRQUFRLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxRQUFRLENBQUMsWUFBWSxDQUFDLGVBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsNEJBQWEsR0FBYixVQUFjLFVBQVUsRUFBQyxHQUFHO1FBQ3hCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQixRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLFFBQVEsQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFoQ0Q7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLE1BQU0sRUFBQyxDQUFDOzBDQUNBO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUMsQ0FBQztzREFDWTtJQU4zQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBb0N4QjtJQUFELFdBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ2lDLEVBQUUsQ0FBQyxTQUFTLEdBb0M3QztrQkFwQ29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJsb2NrIGZyb20gXCIuL0Jsb2NrXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6Y2MuUHJlZmFifSlcbiAgICBiaWdmcnVpdDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTpjYy5TcHJpdGVGcmFtZX0pXG4gICAgYmlnRnJ1aXRPcmdpbl9zcHJpdGU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIG9uTG9hZCgpe1xuICAgICAgICB0aGlzLkdlbmVyYXRvckJpZ0Zvb2QodGhpcy5iaWdGcnVpdE9yZ2luX3Nwcml0ZS5nZXRUZXh0dXJlKCkpO1xuICAgIH1cblxuICAgIEdlbmVyYXRvckJpZ0Zvb2QoYmlnRnJpdXRTcHJpdGUpe1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJpZ2ZydWl0KTtcbiAgICAgICAgICAgICAgICBuZXdCbG9jay5wYXJlbnQ9dGhpcy5ub2RlO1xuICAgICAgICAgICAgICAgIG5ld0Jsb2NrLnNldFBvc2l0aW9uKGogKiBuZXdCbG9jay53aWR0aCoxLjIsLWkgKiBuZXdCbG9jay5oZWlnaHQqMS4yKTtcbiAgICAgICAgICAgICAgICBuZXdCbG9jay5nZXRDb21wb25lbnQoQmxvY2spLmluaXQoYmlnRnJpdXRTcHJpdGUsbmV3IGNjLlZlYzIoaixpKSwwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEdlbmVyYXRvckZvb2QoZm9vZFNwcml0ZSxwb3Mpe1xuICAgICAgICBsZXQgbmV3QmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJpZ2ZydWl0KTtcbiAgICAgICAgbmV3QmxvY2sucGFyZW50PXRoaXMubm9kZTtcbiAgICAgICAgbmV3QmxvY2suc2V0UG9zaXRpb24ocG9zLngscG9zLnkpO1xuICAgICAgICBuZXdCbG9jay5nZXRDb21wb25lbnQoQmxvY2spLmluaXQoZm9vZFNwcml0ZSk7XG4gICAgfVxuXG4gICAgR2VuZXJhdG9yQm9tYihib21iU3ByaXRlLHBvcyl7XG4gICAgICAgIGxldCBuZXdCbG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmlnZnJ1aXQpO1xuICAgICAgICBuZXdCbG9jay5wYXJlbnQ9dGhpcy5ub2RlO1xuICAgICAgICBuZXdCbG9jay5zZXRQb3NpdGlvbihwb3MueCxwb3MueSk7XG4gICAgICAgIG5ld0Jsb2NrLmdldENvbXBvbmVudChCbG9jaykuaW5pdChib21iU3ByaXRlKTtcbiAgICB9XG59XG4iXX0=
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Block.prototype.init = function (picTexture, pos, fruitType) {
        if (pos === void 0) { pos = cc.Vec2.ZERO; }
        if (fruitType === void 0) { fruitType = 1; }
        var sprite = this.node.getComponent(cc.Sprite);
        var width = this.node.width;
        var height = this.node.height;
        if (fruitType == 0) {
            var frame = new cc.SpriteFrame(picTexture, cc.rect(pos.x * width, pos.y * height, width, height));
            sprite.spriteFrame = frame;
        }
        else if (fruitType == 1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0Jsb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DOztJQWNBLENBQUM7SUFaRyxvQkFBSSxHQUFKLFVBQUssVUFBVSxFQUFDLEdBQWdCLEVBQUMsU0FBYTtRQUE5QixvQkFBQSxFQUFBLE1BQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJO1FBQUMsMEJBQUEsRUFBQSxhQUFhO1FBQzFDLElBQUksTUFBTSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFHLFNBQVMsSUFBRSxDQUFDLEVBQUM7WUFDWixJQUFJLEtBQUssR0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDNUYsTUFBTSxDQUFDLFdBQVcsR0FBQyxLQUFLLENBQUM7U0FDNUI7YUFDSSxJQUFHLFNBQVMsSUFBRSxDQUFDLEVBQUM7WUFDakIsTUFBTSxDQUFDLFdBQVcsR0FBQyxVQUFVLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBYmdCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FjekI7SUFBRCxZQUFDO0NBZEQsQUFjQyxDQWRrQyxFQUFFLENBQUMsU0FBUyxHQWM5QztrQkFkb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGluaXQocGljVGV4dHVyZSxwb3M9Y2MuVmVjMi5aRVJPLGZydWl0VHlwZSA9IDEpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNwcml0ZT10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBsZXQgd2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodDtcbiAgICAgICAgaWYoZnJ1aXRUeXBlPT0wKXtcbiAgICAgICAgICAgIGxldCBmcmFtZT1uZXcgY2MuU3ByaXRlRnJhbWUocGljVGV4dHVyZSxjYy5yZWN0KHBvcy54ICogd2lkdGgscG9zLnkgKiBoZWlnaHQsd2lkdGgsaGVpZ2h0KSk7XG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWU9ZnJhbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihmcnVpdFR5cGU9PTEpe1xuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lPXBpY1RleHR1cmU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
