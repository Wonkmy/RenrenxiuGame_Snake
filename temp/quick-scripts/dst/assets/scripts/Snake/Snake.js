
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
            //this.bodies.push(newBody);
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
        var vposition = this.node.position;
        this.node.x += this.node.width * this.curDir.x;
        this.node.y += this.node.height * this.curDir.y;
        if (this.isEat) {
            var newBody = cc.instantiate(this.bodyPrefab);
            //newBody.parent=this.node;
            cc.find("Canvas").addChild(newBody);
            newBody.position = vposition;
            this.bodies.splice(0, 0, newBody);
            if (this.bodies.length > 3) {
                for (var i = 0; i < this.bodies.length; i++) {
                    this.bodies[i].getComponent(Body_1.default).playAnim(i / 10);
                }
            }
            this.isEat = false;
        }
        else if (this.bodies.length > 0) {
            this.bodies[this.bodies.length - 1].position = vposition;
            this.bodies.splice(0, 0, this.bodies[this.bodies.length - 1]);
            //this.bodies.splice(this.bodies.length - 1,1,this.bodies[this.bodies.length - 1]);
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
            other.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1NuYWtlL1NuYWtlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtCQUEwQjtBQUVwQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQXlGQztRQXRGRyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixZQUFNLEdBQVcsRUFBRSxDQUFBO1FBRW5CLFlBQU0sR0FBVyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtRQUVuQyxlQUFTLEdBQUMsQ0FBQyxDQUFBO1FBRVgsV0FBSyxHQUFDLEtBQUssQ0FBQTs7SUE4RWYsQ0FBQztJQTVFRyxxQkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQseUJBQVMsR0FBVCxVQUFVLGdCQUFnQjtRQUN0QixLQUFL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a0JBekZvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCb2R5IGZyb20gXCIuL0JvZHlcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbmFrZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJvZHlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBib2RpZXM6Y2MuTm9kZVtdPVtdXG5cbiAgICBjdXJEaXI6Y2MuVmVjMyA9IG5ldyBjYy5WZWMzKDEsMCwwKVxuXG4gICAgYm9keUNvdW50PTNcblxuICAgIGlzRWF0PWZhbHNlXG5cbiAgICBzdGFydCgpe1xuICAgICAgICBjYy5nYW1lLm9uKFwibW92ZV91cFwiLHRoaXMuT25DaGFuZ2VTbmFrZURpcix0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcIm1vdmVfZG93blwiLHRoaXMuT25DaGFuZ2VTbmFrZURpcix0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcIm1vdmVfbGVmdFwiLHRoaXMuT25DaGFuZ2VTbmFrZURpcix0aGlzKTtcbiAgICAgICAgY2MuZ2FtZS5vbihcIm1vdmVfcmlnaHRcIix0aGlzLk9uQ2hhbmdlU25ha2VEaXIsdGhpcyk7XG4gICAgfVxuXG4gICAgaW5pdFNuYWtlKGRlZmF1bHRCb2R5Q291bnQpe1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlZmF1bHRCb2R5Q291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5ld0JvZHkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJvZHlQcmVmYWIpO1xuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZChuZXdCb2R5KTtcbiAgICAgICAgICAgIG5ld0JvZHkuc2V0UG9zaXRpb24oLWkqbmV3Qm9keS53aWR0aC1uZXdCb2R5LndpZHRoLDApO1xuICAgICAgICAgICAgLy90aGlzLmJvZGllcy5wdXNoKG5ld0JvZHkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9keUNvdW50PXRoaXMuYm9kaWVzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBzdGFydE1vdmUoKXtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+e1xuICAgICAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgICAgIH0sMC41KTtcbiAgICB9XG5cbiAgICBtb3ZlKCl7XG4gICAgICAgIGxldCB2cG9zaXRpb249dGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLm5vZGUueCs9dGhpcy5ub2RlLndpZHRoICogdGhpcy5jdXJEaXIueDtcbiAgICAgICAgdGhpcy5ub2RlLnkrPXRoaXMubm9kZS5oZWlnaHQgKiB0aGlzLmN1ckRpci55O1xuXG4gICAgICAgIGlmKHRoaXMuaXNFYXQpe1xuICAgICAgICAgICAgbGV0IG5ld0JvZHkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJvZHlQcmVmYWIpO1xuICAgICAgICAgICAgLy9uZXdCb2R5LnBhcmVudD10aGlzLm5vZGU7XG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzXCIpLmFkZENoaWxkKG5ld0JvZHkpO1xuICAgICAgICAgICAgbmV3Qm9keS5wb3NpdGlvbj12cG9zaXRpb247XG4gICAgICAgICAgICB0aGlzLmJvZGllcy5zcGxpY2UoMCwwLG5ld0JvZHkpO1xuICAgICAgICAgICAgaWYodGhpcy5ib2RpZXMubGVuZ3RoPjMpe1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2RpZXNbaV0uZ2V0Q29tcG9uZW50KEJvZHkpLnBsYXlBbmltKGkgLyAxMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmlzRWF0PWZhbHNlO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmJvZGllcy5sZW5ndGg+MCl7XG4gICAgICAgICAgICB0aGlzLmJvZGllc1t0aGlzLmJvZGllcy5sZW5ndGggLSAxXS5wb3NpdGlvbiA9IHZwb3NpdGlvbjtcbiAgICAgICAgICAgIHRoaXMuYm9kaWVzLnNwbGljZSgwLDAsdGhpcy5ib2RpZXNbdGhpcy5ib2RpZXMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgLy90aGlzLmJvZGllcy5zcGxpY2UodGhpcy5ib2RpZXMubGVuZ3RoIC0gMSwxLHRoaXMuYm9kaWVzW3RoaXMuYm9kaWVzLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgIHRoaXMuYm9kaWVzLnBvcCgpO1xuICAgICAgICAgICAgdGhpcy5ib2R5Q291bnQ9dGhpcy5ib2RpZXMubGVuZ3RoKzE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBPbkNoYW5nZVNuYWtlRGlyKGN1ckRpcil7XG4gICAgICAgIGlmKGN1ckRpcj09XCJ1cFwiKXtcbiAgICAgICAgICAgIGlmKGN1ckRpciE9XCJkb3duXCIpe1xuICAgICAgICAgICAgICAgIHRoaXMuY3VyRGlyID0gbmV3IGNjLlZlYzMoMCwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYoY3VyRGlyPT1cImRvd25cIil7XG4gICAgICAgICAgICBpZihjdXJEaXIhPVwidXBcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJEaXIgPSBuZXcgY2MuVmVjMygwLC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYoY3VyRGlyPT1cImxlZnRcIil7XG4gICAgICAgICAgICBpZihjdXJEaXIhPVwicmlnaHRcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJEaXIgPSBuZXcgY2MuVmVjMygtMSwwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYoY3VyRGlyPT1cInJpZ2h0XCIpe1xuICAgICAgICAgICAgaWYoY3VyRGlyIT1cImxlZnRcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJEaXIgPSBuZXcgY2MuVmVjMygxLDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcizCoHNlbGYpwqB7XG4gICAgICAgIGlmKG90aGVyLnRhZz09MSl7Ly/po5/nialcbiAgICAgICAgICAgIHRoaXMuaXNFYXQ9dHJ1ZTtcbiAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=