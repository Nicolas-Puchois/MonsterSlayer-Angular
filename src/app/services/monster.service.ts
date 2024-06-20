import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  lifeValue : number = 100;
  damagetaken: number = 1;
  randomNumber: number = 1;
  min : number = 1;
  max : number = 20;
  attackvalue: number = 0;

  randomGenerator(){
    this.randomNumber = Math.floor(Math.random()*(this.max - this.min + 1));
    return this.randomNumber
 }

  getLifeValue(){
    return this.lifeValue
  }

  damagetoLife(){
    this.lifeValue -= this.damagetaken;
    return this.lifeValue
  }

  attackAction(){
    this.randomGenerator();
    this.attackvalue = this.randomNumber;
    return this.attackvalue;
  }
}
