import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  lifevalue: number = 100;
  damagetaken: number = 1;


  getLifeValue() {
    return this.lifevalue;
  }

  damagetoLife() {
    this.lifevalue -= this.damagetaken;
    return this.lifevalue;
  }
}
