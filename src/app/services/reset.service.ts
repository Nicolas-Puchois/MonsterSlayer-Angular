import { Injectable } from '@angular/core';
import { MonsterService } from './monster.service';
import { PlayerService } from './player.service';
import { LogsService } from './logs.service';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  resetlifeplayer: number = 100;
  resetlifemonster: number = 100;

  constructor(private MonsterService: MonsterService, 
    private PlayerService: PlayerService,
    private LogsService: LogsService) { }

  checkWinner(){
    if(this.MonsterService.lifevalue <= 0){
      alert("Player win");
      return this.resetAction();
    }else if( this.PlayerService.lifevalue <= 0){
      alert("Monster Win");
      return this.resetAction();
    }
  }

  resetAction() {
    this.MonsterService.lifevalue = this.resetlifeplayer;
    this.PlayerService.lifevalue = this.resetlifemonster;
    this.LogsService.logs.length = 0
  }


}
