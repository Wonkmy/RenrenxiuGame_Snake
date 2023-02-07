
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