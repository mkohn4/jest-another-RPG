const Potion = require('../lib/Potion');
const Character = require('./Character');


class Enemy extends Character {
    constructor(name, weapon) {

        //call parent constructor here
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();

    }
    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
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
//Enemy.prototype = Object.create(Character.prototype);


/*Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};*/

module.exports = Enemy;