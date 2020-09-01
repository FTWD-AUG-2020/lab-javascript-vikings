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
  battleCry = () => {
    return 'Odin Owns You All!'
  }
}
let Sigfried = new Viking("Sigfried", 500, 200);
// Saxon
class Saxon extends Soldier {
  receiveDamage = (dmg) => {
    this.health -= dmg;
    if (this.health > 0) {
      return `A Saxon has received ${dmg} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  };
}

let Steve = new Saxon(100, 50);

// War
class War {
  vikingArmy = []
  saxonArmy = []

  addViking(soldier) {
    this.vikingArmy.push(soldier)
  }
  addSaxon(soldier) {
    this.saxonArmy.push(soldier)
  }
  vikingAttack() {
    let v = Math.floor(Math.random() * this.vikingArmy.length)
    let randomV = this.vikingArmy[v]
    let s = Math.floor(Math.random() * this.saxonArmy.length)
    let randomS = this.saxonArmy[s]
    let result = randomS.receiveDamage(randomV.strength)
    if (randomS.health < 0) {
      this.saxonArmy.splice(s, 1)
    }
    console.log(result)
    return result
  }

  saxonAttack(){
    let s = Math.floor(Math.random()*this.saxonArmy.length)
    let randomS = this.saxonArmy[s]
    let v = Math.floor(Math.random()*this.vikingArmy.length)
    let randomV = this.vikingArmy[v]
    let result = randomV.receiveDamage(randomS.strength)
    if (randomV.health<0) {
      this.vikingArmy.splice(v,1)
    }
    console.log(result)
    return result
  }
}

let flameWar = new War
flameWar.addSaxon(Steve)
flameWar.addViking(Sigfried)
flameWar.vikingAttack();

let George = new Saxon(500,1000)
flameWar.addSaxon(George)
flameWar.saxonAttack()