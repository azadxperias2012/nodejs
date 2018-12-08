// const express = require('express');
// const server = express();

// server.set('view engine', 'ejs');

// server.get('/', (req, res) => {
//     res.render('index');
// });

// server.listen(4242, () => {
//     console.log('Express Server is running...');
// });

function convertArrayToObject(arr) {
    return arr.reduce((acc, curr) => {
        acc[curr[0]] = curr[1];
        return acc;
    }, {});
}

const obj = convertArrayToObject([
    [1, 'One'],
    [2, 'Two'],
    [3, 'Three'],
    [4, 'Four'],
    [5, 'Five']
]);

console.log(obj);