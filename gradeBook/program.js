var book = require('./lib/grades').book;
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<h1>Hello, World!</h1>');
});

app.get('/grade', function (req, res) {

    var grades = req.query.grades.split(',');
    for (var i = 0; i < grades.length; i++) {
        book.addGrade(parseInt(grades[i]));
    }
    let average = book.getAverage();
    let letterGrade = book.getLetterGrade();

    res.send('Your average is ' + average + ' grade ' + letterGrade);

});

app.listen(3000);
console.log('Server ready...');

// for (var i = 2; i < process.argv.length; i++) {
//     book.addGrade(parseInt(process.argv[i]));
// }
//
// console.log(book.getAverage());