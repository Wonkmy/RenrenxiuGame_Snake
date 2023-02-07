
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