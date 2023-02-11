// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameBrain extends cc.Component {

    public static brainList:GameBrainData[]=[]

    protected start(): void {
        this.initGameBrainData();
    }

    initGameBrainData(){
        let brain1 = new GameBrainData([1,1],60,30,[0,0]);
        let brain2 = new GameBrainData([2,2],90,50,[1,1]);
        let brain3 = new GameBrainData([3,5],120,60,[2,2]);
        let brain4 = new GameBrainData([6,10],120,70,[3,3]);
        let brain5 = new GameBrainData([11,20],120,80,[1,3]);
        let brain6 = new GameBrainData([21,30],150,90,[2,4]);
        let brain7 = new GameBrainData([31,40],150,100,[3,5]);
        let brain8 = new GameBrainData([41,50],150,120,[2,6]);
        let brain9 = new GameBrainData([51,60],180,140,[1,9]);
        let brain10 = new GameBrainData([61,70],180,150,[1,9]);
        let brain11 = new GameBrainData([71,80],180,170,[1,9]);
        let brain12 = new GameBrainData([81,90],200,180,[1,9]);
        let brain13 = new GameBrainData([91,99],200,200,[1,9]);

        GameBrain.brainList.push(brain1,brain2,brain3,brain4,brain5,brain6,brain7,brain8,brain9,brain10,brain11,brain12,brain13);
    }

    getGameBrain(level){
        let newBrain:GameBrainData=null;
        GameBrain.brainList.forEach(brain => {
            if(level>=brain.level[0]&&level<=brain.level[1]){
                console.log("a在关卡范围["+brain.level[0]+","+brain.level[1]+"]中");
                newBrain = brain;
            }
        });
        return newBrain;
    }
}


class GameBrainData{
    public level;
    public gameTime:number=0;
    public targetScore:number=0;
    public mapShapeId;

    constructor(level,gameTime:number,targetScore:number,mapShapeId){
        this.level=level;
        this.gameTime=gameTime;
        this.targetScore=targetScore;
        this.mapShapeId=mapShapeId;
    }
}
