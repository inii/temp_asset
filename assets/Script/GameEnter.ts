// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameLogic  from "./GameLogic"  ;
const {ccclass, property} = cc._decorator;


@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    logicInst:GameLogic = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        console.log("Gmae.start......");
        this.logicInst = GameLogic.getInstance();
    }

    // update (dt) {}
}
