// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MyBtn extends cc.Component {

    pressed_node: cc.Node;

    start(){
        this.pressed_node=this.node.children[0];
        this.pressed_node.active=false;
    }

    onPressed(){
        this.pressed_node.active=true;
        this.scheduleOnce(()=>{
            this.pressed_node.active=false;
        },0.2);
    }
}
