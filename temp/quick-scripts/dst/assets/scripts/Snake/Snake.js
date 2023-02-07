
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
        _this.isMove = true;
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
            this.bodies.splice(i, 0, newBody);
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
        if (this.isMove == false)
            return;
        // if(this.node.x>=294-this.node.width){
        //     this.isMove=false;
        // }
        // if(this.node.x<=-294+this.node.width){
        //     this.isMove=false;
        // }
        var vposition = this.node.position;
        this.node.x += this.node.width * this.curDir.x;
        this.node.y += this.node.height * this.curDir.y;
        if (this.isEat) {
            var newBody = cc.instantiate(this.bodyPrefab);
            //newBody.parent=this.node;
            cc.find("Canvas").addChild(newBody);
            newBody.position = vposition;
            this.bodies.splice(0, 0, newBody);
            if (this.bodies.length > 1) {
                for (var i = 0; i < this.bodies.length; i++) {
                    this.bodies[i].getComponent(Body_1.default).playAnim(0.3);
                }
            }
            this.isEat = false;
        }
        else if (this.bodies.length > 0) {
            this.bodies[this.bodies.length - 1].position = vposition;
            this.bodies.splice(0, 0, this.bodies[this.bodies.length - 1]);
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
            cc.game.emit("eating");
            other.node.destroy();
        }
        if (other.tag == 0 || other.tag == 2) { //墙壁/身体
            this.isMove = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU25ha2VcXFNuYWtlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtCQUEwQjtBQUVwQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQXNHQztRQW5HRyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixZQUFNLEdBQVcsRUFBRSxDQUFDO1FBRXBCLFlBQU0sR0FBVyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUVwQyxlQUFTLEdBQUMsQ0FBQyxDQUFDO1FBRVosV0FBSyxHQUFDLEtBQUssQ0FBQztRQUVaLFlBQU0sR0FBQyxJQUFJLENBQUM7O0lBeUZoQixDQUFDO0lBdkZHLHFCQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx5QkFB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Q0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7U0FDdkI7UUFFRCxJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUUsQ0FBQyxFQUFDLEVBQUMsT0FBTztZQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFsR0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDUztJQUhaLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FzR3pCO0lBQUQsWUFBQztDQXRHRCxBQXNHQyxDQXRHa0MsRUFBRSxDQUFDLFNBQVMsR0FzRzlDO2tCQXRHb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBCb2R5IGZyb20gXCIuL0JvZHlcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU25ha2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBib2R5UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIGJvZGllczpjYy5Ob2RlW109W107XHJcblxyXG4gICAgY3VyRGlyOmNjLlZlYzMgPSBuZXcgY2MuVmVjMygxLDAsMCk7XHJcblxyXG4gICAgYm9keUNvdW50PTM7XHJcblxyXG4gICAgaXNFYXQ9ZmFsc2U7XHJcblxyXG4gICAgaXNNb3ZlPXRydWU7XHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBjYy5nYW1lLm9uKFwibW92ZV91cFwiLHRoaXMuT25DaGFuZ2VTbmFrZURpcix0aGlzKTtcclxuICAgICAgICBjYy5nYW1lLm9uKFwibW92ZV9kb3duXCIsdGhpcy5PbkNoYW5nZVNuYWtlRGlyLHRoaXMpO1xyXG4gICAgICAgIGNjLmdhbWUub24oXCJtb3ZlX2xlZnRcIix0aGlzLk9uQ2hhbmdlU25ha2VEaXIsdGhpcyk7XHJcbiAgICAgICAgY2MuZ2FtZS5vbihcIm1vdmVfcmlnaHRcIix0aGlzLk9uQ2hhbmdlU25ha2VEaXIsdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFNuYWtlKGRlZmF1bHRCb2R5Q291bnQpe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmYXVsdEJvZHlDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdCb2R5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib2R5UHJlZmFiKTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZChuZXdCb2R5KTtcclxuICAgICAgICAgICAgbmV3Qm9keS5zZXRQb3NpdGlvbigtaSpuZXdCb2R5LndpZHRoLW5ld0JvZHkud2lkdGgsMCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9kaWVzLnNwbGljZShpLDAsbmV3Qm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYm9keUNvdW50PXRoaXMuYm9kaWVzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydE1vdmUoKXtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgICAgIH0sMC41KTtcclxuICAgIH1cclxuICAgIG1vdmUoKXtcclxuICAgICAgICBpZih0aGlzLmlzTW92ZT09ZmFsc2UpcmV0dXJuO1xyXG4gICAgICAgIC8vIGlmKHRoaXMubm9kZS54Pj0yOTQtdGhpcy5ub2RlLndpZHRoKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc01vdmU9ZmFsc2U7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmKHRoaXMubm9kZS54PD0tMjk0K3RoaXMubm9kZS53aWR0aCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNNb3ZlPWZhbHNlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgdnBvc2l0aW9uPXRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICB0aGlzLm5vZGUueCs9dGhpcy5ub2RlLndpZHRoICogdGhpcy5jdXJEaXIueDtcclxuICAgICAgICB0aGlzLm5vZGUueSs9dGhpcy5ub2RlLmhlaWdodCAqIHRoaXMuY3VyRGlyLnk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNFYXQpe1xyXG4gICAgICAgICAgICBsZXQgbmV3Qm9keSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYm9keVByZWZhYik7XHJcbiAgICAgICAgICAgIC8vbmV3Qm9keS5wYXJlbnQ9dGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmFkZENoaWxkKG5ld0JvZHkpO1xyXG4gICAgICAgICAgICBuZXdCb2R5LnBvc2l0aW9uPXZwb3NpdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5ib2RpZXMuc3BsaWNlKDAsMCxuZXdCb2R5KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvZGllcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9kaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2RpZXNbaV0uZ2V0Q29tcG9uZW50KEJvZHkpLnBsYXlBbmltKDAuMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc0VhdD1mYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmJvZGllcy5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgIHRoaXMuYm9kaWVzW3RoaXMuYm9kaWVzLmxlbmd0aCAtIDFdLnBvc2l0aW9uID0gdnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmJvZGllcy5zcGxpY2UoMCwwLHRoaXMuYm9kaWVzW3RoaXMuYm9kaWVzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgdGhpcy5ib2RpZXMucG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keUNvdW50PXRoaXMuYm9kaWVzLmxlbmd0aCsxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBPbkNoYW5nZVNuYWtlRGlyKGN1ckRpcil7XHJcbiAgICAgICAgaWYoY3VyRGlyPT1cInVwXCIpe1xyXG4gICAgICAgICAgICBpZihjdXJEaXIhPVwiZG93blwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyRGlyID0gbmV3IGNjLlZlYzMoMCwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKGN1ckRpcj09XCJkb3duXCIpe1xyXG4gICAgICAgICAgICBpZihjdXJEaXIhPVwidXBcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckRpciA9IG5ldyBjYy5WZWMzKDAsLTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYoY3VyRGlyPT1cImxlZnRcIil7XHJcbiAgICAgICAgICAgIGlmKGN1ckRpciE9XCJyaWdodFwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyRGlyID0gbmV3IGNjLlZlYzMoLTEsMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihjdXJEaXI9PVwicmlnaHRcIil7XHJcbiAgICAgICAgICAgIGlmKGN1ckRpciE9XCJsZWZ0XCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJEaXIgPSBuZXcgY2MuVmVjMygxLDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIswqBzZWxmKcKge1xyXG4gICAgICAgIGlmKG90aGVyLnRhZz09MSl7Ly/po5/nialcclxuICAgICAgICAgICAgdGhpcy5pc0VhdD10cnVlO1xyXG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoXCJlYXRpbmdcIik7XHJcbiAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvdGhlci50YWc9PTAgfHwgb3RoZXIudGFnPT0yKXsvL+WimeWjgS/ouqvkvZNcclxuICAgICAgICAgICAgdGhpcy5pc01vdmU9ZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==