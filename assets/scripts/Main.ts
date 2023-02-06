// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Food from "./Food";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property({type:cc.Prefab})
    bigfruit: cc.Prefab = null;

    @property({type:cc.SpriteFrame})
    bigFruitOrgin_sprite: cc.SpriteFrame = null;

    onLoad(){
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                let newBlock = cc.instantiate(this.bigfruit);
                newBlock.parent=this.node;
                newBlock.setPosition(j * newBlock.width,-i * newBlock.height);
                newBlock.getComponent(Food).init(this.bigFruitOrgin_sprite.getTexture(),new cc.Vec2(j,i));
            }
        }
    }
}
