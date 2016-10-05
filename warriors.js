function Warrior(name, gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.floor((Math.random() * 100) + 1);
    
}

Warrior.prototype = {
    fight: function() {return `${this.name} rushes to the arena with a big ${this.weapon}.`},
    faceOff: function(opponent) {
        if (this.power > opponent.power) {
            return `${this.name} won the big fight.`;
        } else {
            return `${opponent.name} won the big fight.`;
        }
    }
};

var simon = new Warrior("Simon", "M");
var tony = new Warrior("Tony", "M");
var jill = new Warrior("Jill", "F");

console.log(simon.fight());
console.log(simon.faceOff(tony));
console.log(jill.faceOff(simon));