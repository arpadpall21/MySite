module.exports = class Animal {
  constructor(race, wild){
    this.race = race;
    this.wild = wild;
  }
  
  getAnimal(){
    return {
      race: this.race,
      wild: this.wild
    }
  }
}

