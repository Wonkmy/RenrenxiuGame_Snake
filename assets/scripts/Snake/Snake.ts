// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Body from "./Body";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Snake extends cc.Component {

    @property(cc.Prefab)
    bodyPrefab: cc.Prefab = null;

    bodies:cc.Node[]=[]

    curDir:cc.Vec3 = new cc.Vec3(1,0,0)

    bodyCount=3

    isEat=false

    start(){
        cc.game.on("move_up",this.OnChangeSnakeDir,this);
        cc.game.on("move_down",this.OnChangeSnakeDir,this);
        cc.game.on("move_left",this.OnChangeSnakeDir,this);
        cc.game.on("move_right",this.OnChangeSnakeDir,this);
    }

    initSnake(defaultBodyCount){
        for (let i = 0; i < defaultBodyCount; i++) {
            let newBody = cc.instantiate(this.bodyPrefab);
            cc.find("Canvas").addChild(newBody);
            newBody.setPosition(-i*newBody.width-newBody.width,0);
            //this.bodies.push(newBody);
        }
        this.bodyCount=this.bodies.length;
    }

    startMove(){
        this.schedule(()=>{
            this.move();
        },0.5);
    }

    move(){
        let vposition=this.node.position;
        this.node.x+=this.node.width * this.curDir.x;
        this.node.y+=this.node.height * this.curDir.y;

        if(this.isEat){
            let newBody = cc.instantiate(this.bodyPrefab);
            //newBody.parent=this.node;
            cc.find("Canvas").addChild(newBody);
            newBody.position=vposition;
            this.bodies.splice(0,0,newBody);
            if(this.bodies.length>3){
                for (let i = 0; i < this.bodies.length; i++) {
                    this.bodies[i].getComponent(Body).playAnim(i / 10);
                }
            }
            
            this.isEat=false;
        }else if(this.bodies.length>0){
            this.bodies[this.bodies.length - 1].position = vposition;
            this.bodies.splice(0,0,this.bodies[this.bodies.length - 1]);
            //this.bodies.splice(this.bodies.length - 1,1,this.bodies[this.bodies.length - 1]);
            this.bodies.pop();
            this.bodyCount=this.bodies.length+1;
        }
    }

    OnChangeSnakeDir(curDir){
        if(curDir=="up"){
            if(curDir!="down"){
                this.curDir = new cc.Vec3(0,1);
            }
        }else if(curDir=="down"){
            if(curDir!="up"){
                this.curDir = new cc.Vec3(0,-1);
            }
        }else if(curDir=="left"){
            if(curDir!="right"){
                this.curDir = new cc.Vec3(-1,0);
            }
        }else if(curDir=="right"){
            if(curDir!="left"){
                this.curDir = new cc.Vec3(1,0);
            }
        }
    }

    onCollisionEnter(other, self) {
        if(other.tag==1){//食物
            this.isEat=true;
            other.node.destroy()
        }
    }
}
