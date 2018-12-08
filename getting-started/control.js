var getDieRoll = function (dieSize) {
    var result = Math.ceil(dieSize * Math.random());
    return result;
};


let roll = getDieRoll(6);
// if (roll >= 2 && roll <= 3) {
// if (roll == 1 || roll == 6) {
if (!(roll == 1 || roll == 6)) {
    console.log('Great Roll');
}
console.log('You rolled a ' + roll);


var things = [1, 2, 'pizza'];
for (let i = 0; i < things.length; i++) {
    console.log(things[i]);
}

for (let k of things) {
    console.log(k);
}