
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