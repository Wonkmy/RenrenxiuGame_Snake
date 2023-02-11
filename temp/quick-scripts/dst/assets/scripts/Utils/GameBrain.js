
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Utils/GameBrain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c098eNszL1Bca/AmIkHzel2', 'GameBrain');
// scripts/Utils/GameBrain.ts

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
var GameBrain = /** @class */ (function (_super) {
    __extends(GameBrain, _super);
    function GameBrain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameBrain_1 = GameBrain;
    GameBrain.prototype.start = function () {
        this.initGameBrainData();
    };
    GameBrain.prototype.initGameBrainData = function () {
        var brain1 = new GameBrainData([1, 1], 60, 30, [0, 0]);
        var brain2 = new GameBrainData([2, 2], 90, 50, [1, 1]);
        var brain3 = new GameBrainData([3, 5], 120, 60, [2, 2]);
        var brain4 = new GameBrainData([6, 10], 120, 70, [3, 3]);
        var brain5 = new GameBrainData([11, 20], 120, 80, [1, 3]);
        var brain6 = new GameBrainData([21, 30], 150, 90, [2, 4]);
        var brain7 = new GameBrainData([31, 40], 150, 100, [3, 5]);
        var brain8 = new GameBrainData([41, 50], 150, 120, [2, 6]);
        var brain9 = new GameBrainData([51, 60], 180, 140, [1, 9]);
        var brain10 = new GameBrainData([61, 70], 180, 150, [1, 9]);
        var brain11 = new GameBrainData([71, 80], 180, 170, [1, 9]);
        var brain12 = new GameBrainData([81, 90], 200, 180, [1, 9]);
        var brain13 = new GameBrainData([91, 99], 200, 200, [1, 9]);
        GameBrain_1.brainList.push(brain1, brain2, brain3, brain4, brain5, brain6, brain7, brain8, brain9, brain10, brain11, brain12, brain13);
    };
    GameBrain.prototype.getGameBrain = function (level) {
        var newBrain = null;
        GameBrain_1.brainList.forEach(function (brain) {
            if (level >= brain.level[0] && level <= brain.level[1]) {
                console.log("a在关卡范围[" + brain.level[0] + "," + brain.level[1] + "]中");
                newBrain = brain;
            }
        });
        return newBrain;
    };
    var GameBrain_1;
    GameBrain.brainList = [];
    GameBrain = GameBrain_1 = __decorate([
        ccclass
    ], GameBrain);
    return GameBrain;
}(cc.Component));
exports.default = GameBrain;
var GameBrainData = /** @class */ (function () {
    function GameBrainData(level, gameTime, targetScore, mapShapeId) {
        this.gameTime = 0;
        this.targetScore = 0;
        this.level = level;
        this.gameTime = gameTime;
        this.targetScore = targetScore;
        this.mapShapeId = mapShapeId;
    }
    return GameBrainData;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVXRpbHNcXEdhbWVCcmFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDs7SUFvQ0EsQ0FBQztrQkFwQ29CLFNBQVM7SUFJaEIseUJBQUssR0FBZjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxxQ0FBaUIsR0FBakI7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksTUFBTSxHQUFHLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLE1BQU0sR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksTUFBTSxHQUFHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLE1BQU0sR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksTUFBTSxHQUFHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksT0FBTyxHQUFHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdkQsV0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0gsQ0FBQztJQUVELGdDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2QsSUFBSSxRQUFRLEdBQWUsSUFBSSxDQUFDO1FBQ2hDLFdBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztZQUM3QixJQUFHLEtBQUssSUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFFLEtBQUssSUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUcsR0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5RCxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3BCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOztJQWpDYSxtQkFBUyxHQUFpQixFQUFFLENBQUE7SUFGekIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW9DN0I7SUFBRCxnQkFBQztDQXBDRCxBQW9DQyxDQXBDc0MsRUFBRSxDQUFDLFNBQVMsR0FvQ2xEO2tCQXBDb0IsU0FBUztBQXVDOUI7SUFNSSx1QkFBWSxLQUFLLEVBQUMsUUFBZSxFQUFDLFdBQWtCLEVBQUMsVUFBVTtRQUp4RCxhQUFRLEdBQVEsQ0FBQyxDQUFDO1FBQ2xCLGdCQUFXLEdBQVEsQ0FBQyxDQUFDO1FBSXhCLElBQUksQ0FBQyxLQUFLLEdBQUMsS0FBSyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUMsUUFBUSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUMsV0FBVyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUMsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFDTCxvQkFBQztBQUFELENBWkEsQUFZQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQnJhaW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYnJhaW5MaXN0OkdhbWVCcmFpbkRhdGFbXT1bXVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmluaXRHYW1lQnJhaW5EYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEdhbWVCcmFpbkRhdGEoKXtcclxuICAgICAgICBsZXQgYnJhaW4xID0gbmV3IEdhbWVCcmFpbkRhdGEoWzEsMV0sNjAsMzAsWzAsMF0pO1xyXG4gICAgICAgIGxldCBicmFpbjIgPSBuZXcgR2FtZUJyYWluRGF0YShbMiwyXSw5MCw1MCxbMSwxXSk7XHJcbiAgICAgICAgbGV0IGJyYWluMyA9IG5ldyBHYW1lQnJhaW5EYXRhKFszLDVdLDEyMCw2MCxbMiwyXSk7XHJcbiAgICAgICAgbGV0IGJyYWluNCA9IG5ldyBHYW1lQnJhaW5EYXRhKFs2LDEwXSwxMjAsNzAsWzMsM10pO1xyXG4gICAgICAgIGxldCBicmFpbjUgPSBuZXcgR2FtZUJyYWluRGF0YShbMTEsMjBdLDEyMCw4MCxbMSwzXSk7XHJcbiAgICAgICAgbGV0IGJyYWluNiA9IG5ldyBHYW1lQnJhaW5EYXRhKFsyMSwzMF0sMTUwLDkwLFsyLDRdKTtcclxuICAgICAgICBsZXQgYnJhaW43ID0gbmV3IEdhbWVCcmFpbkRhdGEoWzMxLDQwXSwxNTAsMTAwLFszLDVdKTtcclxuICAgICAgICBsZXQgYnJhaW44ID0gbmV3IEdhbWVCcmFpbkRhdGEoWzQxLDUwXSwxNTAsMTIwLFsyLDZdKTtcclxuICAgICAgICBsZXQgYnJhaW45ID0gbmV3IEdhbWVCcmFpbkRhdGEoWzUxLDYwXSwxODAsMTQwLFsxLDldKTtcclxuICAgICAgICBsZXQgYnJhaW4xMCA9IG5ldyBHYW1lQnJhaW5EYXRhKFs2MSw3MF0sMTgwLDE1MCxbMSw5XSk7XHJcbiAgICAgICAgbGV0IGJyYWluMTEgPSBuZXcgR2FtZUJyYWluRGF0YShbNzEsODBdLDE4MCwxNzAsWzEsOV0pO1xyXG4gICAgICAgIGxldCBicmFpbjEyID0gbmV3IEdhbWVCcmFpbkRhdGEoWzgxLDkwXSwyMDAsMTgwLFsxLDldKTtcclxuICAgICAgICBsZXQgYnJhaW4xMyA9IG5ldyBHYW1lQnJhaW5EYXRhKFs5MSw5OV0sMjAwLDIwMCxbMSw5XSk7XHJcblxyXG4gICAgICAgIEdhbWVCcmFpbi5icmFpbkxpc3QucHVzaChicmFpbjEsYnJhaW4yLGJyYWluMyxicmFpbjQsYnJhaW41LGJyYWluNixicmFpbjcsYnJhaW44LGJyYWluOSxicmFpbjEwLGJyYWluMTEsYnJhaW4xMixicmFpbjEzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHYW1lQnJhaW4obGV2ZWwpe1xyXG4gICAgICAgIGxldCBuZXdCcmFpbjpHYW1lQnJhaW5EYXRhPW51bGw7XHJcbiAgICAgICAgR2FtZUJyYWluLmJyYWluTGlzdC5mb3JFYWNoKGJyYWluID0+IHtcclxuICAgICAgICAgICAgaWYobGV2ZWw+PWJyYWluLmxldmVsWzBdJiZsZXZlbDw9YnJhaW4ubGV2ZWxbMV0pe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJh5Zyo5YWz5Y2h6IyD5Zu0W1wiK2JyYWluLmxldmVsWzBdK1wiLFwiK2JyYWluLmxldmVsWzFdK1wiXeS4rVwiKTtcclxuICAgICAgICAgICAgICAgIG5ld0JyYWluID0gYnJhaW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3QnJhaW47XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBHYW1lQnJhaW5EYXRhe1xyXG4gICAgcHVibGljIGxldmVsO1xyXG4gICAgcHVibGljIGdhbWVUaW1lOm51bWJlcj0wO1xyXG4gICAgcHVibGljIHRhcmdldFNjb3JlOm51bWJlcj0wO1xyXG4gICAgcHVibGljIG1hcFNoYXBlSWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGV2ZWwsZ2FtZVRpbWU6bnVtYmVyLHRhcmdldFNjb3JlOm51bWJlcixtYXBTaGFwZUlkKXtcclxuICAgICAgICB0aGlzLmxldmVsPWxldmVsO1xyXG4gICAgICAgIHRoaXMuZ2FtZVRpbWU9Z2FtZVRpbWU7XHJcbiAgICAgICAgdGhpcy50YXJnZXRTY29yZT10YXJnZXRTY29yZTtcclxuICAgICAgICB0aGlzLm1hcFNoYXBlSWQ9bWFwU2hhcGVJZDtcclxuICAgIH1cclxufVxyXG4iXX0=