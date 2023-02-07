// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Block extends cc.Component {

    init(picTexture,pos=cc.Vec2.ZERO,fruitType = 1): void {
        let sprite=this.node.getComponent(cc.Sprite);
            let width = this.node.width;
            let height = this.node.height;
        if(fruitType==0){
            let frame=new cc.SpriteFrame(picTexture,cc.rect(pos.x * width,pos.y * height,width,height));
            sprite.spriteFrame=frame;
        }
        else if(fruitType==1){
            sprite.spriteFrame=picTexture;
        }
    }
}
