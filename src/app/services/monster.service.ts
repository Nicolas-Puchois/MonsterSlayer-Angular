import { Injectable } from '@angular/core';
import { CombatsService } from './combats.service';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  lifevalue: number = 100;
  damagetaken: number = 1;

  constructor(private CombatService: CombatsService){}

  getLifeValue() {
    return this.lifevalue;
  }

  damagetoLife() {
    this.damagetaken = this.CombatService.attackvalue
    this.lifevalue -= this.damagetaken;
    return this.lifevalue;
  }

  superDamagetolife(){
    this.damagetaken = this.CombatService.superattackvalue;
    this.lifevalue -= this.damagetaken;
    return this.lifevalue;
  }
}
