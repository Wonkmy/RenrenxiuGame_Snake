"use strict";
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