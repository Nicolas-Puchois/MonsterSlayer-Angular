import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  lifevalue: number = 100;
  healvalue: number = 1;

  randomnumber: number = 1;
  min: number = 1;
  max: number = 20;

  randomGenerator() {
    this.randomnumber = Math.floor(Math.random() * (this.max - this.min + 1));
    return this.randomnumber;
  }

  getLifeValue() {
    return this.lifevalue;
  }

  healAction() {
    this.randomGenerator();
    this.healvalue = this.randomnumber;
    this.lifevalue = Math.min(this.lifevalue + this.healvalue, 100);
    return this.lifevalue;
  }


}
