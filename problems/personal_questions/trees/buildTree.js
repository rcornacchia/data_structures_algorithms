class Node {
    constructor(id, name, parentId) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
        this.children = [];
    }
}

function buildTree(arr) {
    let root;
    let nodes = {};

    arr.map(el => {
        if (!el.parentId) {
            root = new Node(el.id, el.name);
            nodes[root.id] = root;
        }
        else nodes[el.id] = new Node(el.id, el.name, el.parentId);
    });

    Object.keys(nodes).map(id => {
        const parentId = nodes[id].parentId;
        if (parentId) {
            nodes[parentId].children.push(id);
        }
    });
    return root;
}

const arr = [
    { 
        id: 1,
        name: 'one',
        parentId: 4
    },
    { 
        id: 2,
        name: 'two',
        parentId: 4
    },
    { 
        id: 4,
        name: 'four',
        parentId: 5
    },
    {
        id: 5,
        name: 'five',
        parentId: undefined
    },
    {
        id: 6,
        name: 'six',
        parentId: 6
    }
];

console.log(buildTree(arr));