class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }
}

const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);

function levelWidth(root) {
    const counters = [];
    const arrEven = [root];
    const arrOdd = [];

    let arrParents = arrEven;
    let arrChildren = arrOdd;

    while (arrEven.length || arrOdd.length) {
        counters.push(arrParents.length);

        arrParents.forEach(node => {
            arrChildren.push(...node.children);
        });

        debugger;

        [arrParents, arrChildren] = [arrChildren, arrParents];
        arrChildren.length = 0;

        debugger;
    }

    return counters;
}

levelWidth(root);
