const { ccclass, property } = cc._decorator;

@ccclass
export default class Poker extends cc.Component {
    private suit: number = 0; // 花色
    private number: number = 0; // 点数
    private isMarked: boolean = false; // 是否标记为待消除

    public uiNode: cc.Node = null;

    public setPoker(suit: number, number: number) {
        this.suit = suit;
        this.number = number;
        // 根据花色和点数设置扑克牌显示
    }
    public init(parent: Node) {

        // cc.resources.load("prefab/card", function (err, prefab) {
        //     if (err) {
        //         cc.error("Failed to load prefab:", err);
        //         return;
        //     }

        //     const node = cc.instantiate(prefab);
        //     cc.director.getScene().addChild(node);
        // });
    }

    public getSuit(): number {
        return this.suit;
    }

    public getNumber(): number {
        return this.number;
    }

    public mark() {
        this.isMarked = true;
        // 添加标记效果
    }

    public unmark() {
        this.isMarked = false;
        // 取消标记效果
    }

    public isMarkedForRemoval(): boolean {
        return this.isMarked;
    }
}
