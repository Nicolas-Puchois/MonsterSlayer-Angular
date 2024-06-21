import { Injectable } from '@angular/core';
import { LogsService } from './logs.service';

@Injectable({
  providedIn: 'root',
})
export class CombatsService {
  attackvalue: number = 0;
  monsterattackvalue: number = 0;
  superattackvalue: number = 0;
  randomnumber: number = 1;
  min: number = 1;
  max: number = 20;

  constructor(public LogsService: LogsService){}


  randomGenerator() {
    this.randomnumber = Math.floor(Math.random() * (this.max - this.min + 1));
    return this.randomnumber;
  }

  attackAction() {
    this.randomGenerator();
    this.attackvalue = this.randomnumber;
    this.LogsService.log(`Vous Avez infliger ${this.attackvalue} dégats`);
    return this.attackvalue;
  }

  superAttackAction() {
    this.randomGenerator();
    this.superattackvalue = this.randomnumber;
    this.superattackvalue *= 2;
    this.LogsService.log(`Vous Avez infliger ${this.superattackvalue} dégats`);
    return this.superattackvalue;
  }

  monsterCounterAttack(){
    this.randomGenerator()
    this.monsterattackvalue = this.randomnumber;
    this.LogsService.log(`Le monstre vous a infliger ${this.monsterattackvalue} dégats`);
    return this.attackvalue;
  }
}
