// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Block from "./Block";
import Snake from "./Snake/Snake";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property({type:cc.Prefab})
    bigfruit: cc.Prefab = null;

    @property({type:cc.Prefab})
    snakePrefab: cc.Prefab = null;

    @property({type:cc.SpriteFrame})
    bigFruitOrgin_sprite: cc.SpriteFrame = null;

    @property(cc.Node)
    upArrow: cc.Node = null;

    @property(cc.Node)
    downArrow: cc.Node = null;

    @property(cc.Node)
    leftArrow: cc.Node = null;

    @property(cc.Node)
    rightArrow: cc.Node = null;

    onLoad(){
        this.GeneratorBigFood(this.bigFruitOrgin_sprite.getTexture());
        cc.director.getCollisionManager().enabled=true;
        cc.director.getPhysicsManager().enabled = true;

        this.upArrow.on(cc.Node.EventType.TOUCH_END,()=>{
            console.log("move!!!");
            cc.game.emit("move_up","up");
        },this)
        this.downArrow.on(cc.Node.EventType.TOUCH_END,()=>{
            console.log("move!!!");
            cc.game.emit("move_down","down");
        },this)
        this.leftArrow.on(cc.Node.EventType.TOUCH_END,()=>{
            console.log("move!!!");
            cc.game.emit("move_left","left");
        },this)
        this.rightArrow.on(cc.Node.EventType.TOUCH_END,()=>{
            console.log("move!!!");
            cc.game.emit("move_right","right");
        },this)

        this.GeneratorSnake();
    }

    GeneratorSnake(){
        let newSnake = cc.instantiate(this.snakePrefab);
        newSnake.setParent(this.node);
        newSnake.setPosition(cc.Vec2.ZERO);
        //newSnake.getComponent(Snake).initSnake(0);

        newSnake.getComponent(Snake).startMove();
    }

    GeneratorBigFood(bigFriutSprite){
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                let newBlock = cc.instantiate(this.bigfruit);
                newBlock.parent=this.node;
                newBlock.setPosition(j * newBlock.width*1.2,-i * newBlock.height*1.2);
                newBlock.getComponent(Block).init(bigFriutSprite,new cc.Vec2(j,i),0);
            }
        }
    }

    GeneratorFood(foodSprite,pos){
        let newBlock = cc.instantiate(this.bigfruit);
        newBlock.parent=this.node;
        newBlock.setPosition(pos.x,pos.y);
        newBlock.getComponent(Block).init(foodSprite);
    }

    GeneratorBomb(bombSprite,pos){
        let newBlock = cc.instantiate(this.bigfruit);
        newBlock.parent=this.node;
        newBlock.setPosition(pos.x,pos.y);
        newBlock.getComponent(Block).init(bombSprite);
    }
}
