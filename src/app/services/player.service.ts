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
  public attackValue: number = 0;
  public superAttackValue: number = 0;


  getLifeValue(){
    return this.lifeValue
  }

  randomGenerator(){
     this.randomNumber = Math.floor(Math.random()*(this.max - this.min + 1));
     return this.randomNumber
  }

  attackAction(){
    this.randomGenerator();
    this.attackValue = this.randomNumber;
    return this.attackValue;
  }

  superAttackAction(){
    this.randomGenerator();
    this.superAttackValue = this.randomNumber;
    this.superAttackValue += 15;
    return this.superAttackValue;
  }

  healAction(){
    this.randomGenerator();
    this.healValue = this.randomNumber;
    this.lifeValue = Math.min(this.lifeValue + this.healValue, 100);    
    return this.lifeValue
  }

  giveupAction(){
    this.lifeValue = 100;
  }

}
