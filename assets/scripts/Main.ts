// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Block from "./Block";
import Snake from "./Snake/Snake";
import MyBtn from "./Utils/MyBtn";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property({type:cc.Prefab})
    bigfruit: cc.Prefab = null;

    @property({type:cc.Prefab})
    snakePrefab: cc.Prefab = null;

    @property({type:cc.SpriteFrame})
    bigFruitOrgin_sprite: cc.SpriteFrame = null;

    @property({type:cc.SpriteFrame})
    fruitOrgin_sprite: cc.SpriteFrame = null;

    @property(MyBtn)
    upArrow: MyBtn = null;

    @property(MyBtn)
    downArrow: MyBtn = null;

    @property(MyBtn)
    leftArrow: MyBtn = null;

    @property(MyBtn)
    rightArrow: MyBtn = null;

    onLoad(){
        //this.GeneratorBigFood(this.bigFruitOrgin_sprite.getTexture());
        this.generateNewFood();
        cc.director.getCollisionManager().enabled=true;

        this.registerAllEvents();

        this.GeneratorSnake();
    }
    generateNewFood(){
        this.GeneratorFood(this.fruitOrgin_sprite,new cc.Vec2(this.myrandom(-280,280),this.myrandom(-280,380)));
    }

    registerAllEvents(){
        this.upArrow.node.on(cc.Node.EventType.TOUCH_START,()=>{
            this.upArrow.onPressed();
            cc.game.emit("move_up","up");
        },this);
        this.downArrow.node.on(cc.Node.EventType.TOUCH_START,()=>{
            this.downArrow.onPressed();
            cc.game.emit("move_down","down");
        },this);
        this.leftArrow.node.on(cc.Node.EventType.TOUCH_START,()=>{
            this.leftArrow.onPressed();
            cc.game.emit("move_left","left");
        },this);
        this.rightArrow.node.on(cc.Node.EventType.TOUCH_START,()=>{
            this.rightArrow.onPressed();
            cc.game.emit("move_right","right");
        },this);

        cc.game.on("eating",this.generateNewFood,this);
    }

    GeneratorSnake(){
        let newSnake = cc.instantiate(this.snakePrefab);
        newSnake.setParent(this.node);
        newSnake.setPosition(cc.Vec2.ZERO);
        newSnake.getComponent(Snake).initSnake(2);

        newSnake.getComponent(Snake).startMove();
    }

    GeneratorBigFood(bigFriutSprite){
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                let newBlock = cc.instantiate(this.bigfruit);
                newBlock.parent=this.node;
                newBlock.setPosition(j * newBlock.width*1.2+200,-i * newBlock.height*1.2+200);
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

    myrandom(lower:number, upper:number) {
        return Math.floor(Math.random() * (upper - lower)) + lower;
    }
}
