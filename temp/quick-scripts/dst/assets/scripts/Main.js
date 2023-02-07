
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