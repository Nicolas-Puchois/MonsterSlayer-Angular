import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  randomnumber: number = 1;
  min : number = 1;
  max : number = 20;
  lifevalue : number = 50;
  healvalue : number = 1;
  attackvalue: number = 0;
  superattackvalue: number = 0;


  getLifeValue(){
    return this.lifevalue
  }

  randomGenerator(){
     this.randomnumber = Math.floor(Math.random()*(this.max - this.min + 1));
     return this.randomnumber
  }

  attackAction(){
    this.randomGenerator();
    this.attackvalue = this.randomnumber;
    return this.attackvalue;
  }

  superAttackAction(){
    this.randomGenerator();
    this.superattackvalue = this.randomnumber;
    this.superattackvalue += 15;
    return this.superattackvalue;
  }

  healAction(){
    this.randomGenerator();
    this.healvalue = this.randomnumber;
    this.lifevalue = Math.min(this.lifevalue + this.healvalue, 100);    
    return this.lifevalue
  }

  giveupAction(){
    this.lifevalue = 100;
  }

}
