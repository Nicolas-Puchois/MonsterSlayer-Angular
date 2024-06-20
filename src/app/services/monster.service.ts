import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  lifevalue : number = 100;
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
    return this.lifevalue
  }

  damagetoLife(){
    this.lifevalue -= this.damagetaken;
    return this.lifevalue
  }

  attackAction(){
    this.randomGenerator();
    this.attackvalue = this.randomNumber;
    return this.attackvalue;
  }
}
