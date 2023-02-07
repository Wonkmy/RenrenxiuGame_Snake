
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