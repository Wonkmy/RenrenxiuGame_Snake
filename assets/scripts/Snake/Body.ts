// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Body extends cc.Component {

    playAnim(duration){
        cc.tween(this.node)
            .to(duration,{scale:1.3})
            .to(duration,{scale:1.0})
            .to(duration,{scale:1.2})
            .to(duration,{scale:1.0})
            .call(()=>{
                this.node.resumeAllActions()
            })
            .start()
    }
}
