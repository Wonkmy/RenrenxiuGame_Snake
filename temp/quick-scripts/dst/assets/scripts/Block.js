
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