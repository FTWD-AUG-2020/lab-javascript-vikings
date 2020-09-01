// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack = () => {
        return this.strength
    }
    receiveDamage(dmg) {
        this.health -= dmg
    }


}
let Arnie = new Soldier(800, 80);
// Viking
class Viking { }

// Saxon
class Saxon { }

// War
class War { }
