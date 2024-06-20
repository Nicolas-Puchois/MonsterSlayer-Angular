import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {

  lifevalue: number = 50;
  healvalue: number = 1;


  getLifeValue() {
    return this.lifevalue;
  }



  healAction() {
    this.randomGenerator();
    this.healvalue = this.randomnumber;
    this.lifevalue = Math.min(this.lifevalue + this.healvalue, 100);
    return this.lifevalue;
  }

  giveupAction() {
    this.lifevalue = 100;
  }
}
