export class ENode {
    constructor(data, children){
        this.data = data;
        this.children = children
    }

    addChild(node){
        this.children.push(node);
    }

    // [Symbol.iterator](){
    //     let index = -1;
    //     let children = this.children;
    //     return {
    //         next: function(){
    //             return { value: children[++index], done: !(index in children) }
    //         }
    //     }
    // }

    *[Symbol.iterator](){
        let index = 0;
        while(this.children[index] != undefined){
            yield this.children[index++];
        }
    }
}

