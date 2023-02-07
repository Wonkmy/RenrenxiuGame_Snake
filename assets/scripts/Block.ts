// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Block extends cc.Component {

    fruitType=-1

    init(picTexture,pos=cc.Vec2.ZERO,_fruitType = 1): void {
        this.fruitType=_fruitType;
        let sprite=this.node.getComponent(cc.Sprite);
            let width = this.node.width;
            let height = this.node.height;
        if(this.fruitType==0){
            let frame=new cc.SpriteFrame(picTexture,cc.rect(pos.x * width,pos.y * height,width,height));
            sprite.spriteFrame=frame;
        }
        else if(this.fruitType==1){
            sprite.spriteFrame=picTexture;
        }
    }

    
}
