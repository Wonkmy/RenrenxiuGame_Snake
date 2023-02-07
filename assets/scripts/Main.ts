// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Block from "./Block";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property({type:cc.Prefab})
    bigfruit: cc.Prefab = null;

    @property({type:cc.SpriteFrame})
    bigFruitOrgin_sprite: cc.SpriteFrame = null;

    onLoad(){
        this.GeneratorBigFood(this.bigFruitOrgin_sprite.getTexture());
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
