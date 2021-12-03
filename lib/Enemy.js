const Potion = require('../lib/Potion');
const Character = require('./Character');


function Enemy(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
};

/*
//removed for consolidation with constructor functions

Enemy.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
};

Enemy.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    } else {
        return true;
    }
};

Enemy.prototype.reduceHealth = function(health) {
    this.health -= health;
    
    if (this.health < 0) {
        this.health = 0;
    }
};

Enemy.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max-min) + min);
};*/

//inherit Character prototype functions here
Enemy.prototype = Object.create(Character.prototype);


Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

module.exports = Enemy;