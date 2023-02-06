// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Food extends cc.Component {

    init(picTexture,pos): void {
        let sprite=this.node.getComponent(cc.Sprite);
        let width = this.node.width;
        let height = this.node.height;
        let frame=new cc.SpriteFrame(picTexture,cc.rect(pos.x * width,pos.y * height,width,height));
        sprite.spriteFrame=frame;
    }
}
