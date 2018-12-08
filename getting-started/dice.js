var die = {
    size: 6,
    totalRolls: 0,
    roll: function () {
        let result = Math.ceil(this.size * Math.random());
        this.totalRolls++;
        return result;
    }
};

exports.die = die;
exports.name = 'My dice exports';