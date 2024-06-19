import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  public randomNumber: number = 1;
  public min : number = 1;
  public max : number = 20;
  public lifeValue : number = 50;
  public healValue : number = 1;

    constructor() { }

  getLifeValue(){
    return this.lifeValue
  }

  randomGenerator(){
     this.randomNumber = Math.floor(Math.random()*(this.max - this.min + 1));
     return this.randomNumber
  }

  healAction(){
    this.randomGenerator();
    this.healValue = this.randomNumber;
    this.lifeValue = Math.min(this.lifeValue + this.healValue, 100);    
    return this.lifeValue
  }

}
