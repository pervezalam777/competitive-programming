const comments = [
    {
        rank: 8
    },
    {
        rank: 2
    },
    {
        rank: 5,
        children: [
            {
                rank: 4
            },
            {
                rank: 3
            }
        ]
    }
];

let predicate = (first, second) => {
    return first.rank - second.rank;
};

function sortComments(input) {
    let clone = [...input];
    clone.sort(predicate);
    clone.forEach(ele => {
        if (ele.children && ele.children.length > 1) {
            ele.children = sortComments(ele.children);
        }
    });
    return clone;
}

let clone = sortComments(comments);
console.log(clone);
  