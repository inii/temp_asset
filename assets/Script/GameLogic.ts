// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import Card  from "./Card"  ;

@ccclass
export default class GameLogic extends cc.Component {

    private static instance: GameLogic;

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    public static getInstance(): GameLogic {
        if (!this.instance) {
            this.instance = new GameLogic();
        }
        return this.instance;
    }


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        console.log("GameLogic on load ......... ");
        
    }

    start () {
        let card = new Card();

        console.log("pring info :");
        
        console.log(this.node);
        
        // card.init(this.node);
    }


    public test(){
        console.log("test");
        
    }

    // update (dt) {}
}
