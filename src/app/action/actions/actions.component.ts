import { Component } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { CombatsService } from '../../services/combats.service';
import { MonsterService } from '../../services/monster.service';
import { ResetService } from '../../services/reset.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.css'
})
export class ActionsComponent {
  attackValue: number;
  lifeValue: number;
  superAttackValue: number = 0;
  

  constructor(
    public PlayerService: PlayerService,
    public MonsterService: MonsterService,
    public CombatsService: CombatsService,
    public ResetService: ResetService
  ) {
    this.lifeValue = this.PlayerService.lifevalue;
    this.attackValue = this.CombatsService.attackvalue;
  }

  

  attackAction() {
    this.CombatsService.attackAction();
    this.MonsterService.damagetoLife();
    this.CombatsService.monsterCounterAttack();
    this.PlayerService.lifevalue -= this.CombatsService.monsterattackvalue;
    this.ResetService.checkWinner()
  }

  superAttackAction() {
    this.CombatsService.superAttackAction();
    this.MonsterService.superDamagetolife();
    this.CombatsService.monsterCounterAttack();
    this.PlayerService.lifevalue -= this.CombatsService.monsterattackvalue;
    this.ResetService.checkWinner()
  }

  healAction() {
    this.PlayerService.healAction();
    this.CombatsService.monsterCounterAttack();
    this.PlayerService.lifevalue -= this.CombatsService.monsterattackvalue;
    this.ResetService.checkWinner() 
  }



  giveUpAction() {
    this.ResetService.resetAction();
    alert('you surrender');
  }
}
