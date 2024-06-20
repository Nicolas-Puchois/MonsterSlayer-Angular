import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  public lifeValue : number = 100;
  public damagetaken: number = 1;
  public randomNumber: number = 1;
  public min : number = 1;
  public max : number = 20;

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
}
