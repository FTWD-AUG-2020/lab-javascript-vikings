// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack = () => {
    return this.strength;
  };
  receiveDamage = (dmg) => {
    this.health -= dmg;
  };
}
let Arnie = new Soldier(800, 80);
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage = (dmg) => {
    this.health -= dmg;
    if (this.health > 0) {
      return `${this.name} has received ${dmg} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  };
}
let Sigfried = new Viking("Sigfried", 500, 200);
// Saxon
class Saxon {}

// War
class War {}
