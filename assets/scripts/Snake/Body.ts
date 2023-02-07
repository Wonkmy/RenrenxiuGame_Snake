// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Body extends cc.Component {

    protected start(): void {
        this.node.scale=0.95
    }

    playAnim(duration){
        this.node.getComponent(cc.BoxCollider).enabled=false;
        cc.tween(this.node)
            .to(this.myrandom(duration,duration*2),{scale:1.4}).to(duration,{scale:0.95})
            .call(()=>{
                this.node.getComponent(cc.BoxCollider).enabled=true;
            })
        .start()
    }

    myrandom(lower:number, upper:number) {
     return Math.floor(Math.random() * (upper - lower)) + lower;
    }
}
