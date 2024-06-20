import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CombatsService {
  attackvalue: number = 0;
  superattackvalue: number = 0;
  randomnumber: number = 1;
  min: number = 1;
  max: number = 20;

  randomGenerator() {
    this.randomnumber = Math.floor(Math.random() * (this.max - this.min + 1));
    return this.randomnumber;
  }

  attackAction() {
    this.randomGenerator();
    this.attackvalue = this.randomnumber;
    return this.attackvalue;
  }

  superAttackAction() {
    this.randomGenerator();
    this.superattackvalue = this.randomnumber;
    this.superattackvalue += 15;
    return this.superattackvalue;
  }
}
