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
  attack: number;
  lifeValue: number;
  superAttack: number = 0;

  constructor(
    public PlayerService: PlayerService,
    public MonsterService: MonsterService,
    public CombatsService: CombatsService,
    public ResetService: ResetService
  ) {
    this.lifeValue = this.PlayerService.lifevalue;
    this.attack = this.CombatsService.attackvalue;
  }

  attackAction() {
    this.CombatsService.attackAction();
    this.attack = this.CombatsService.attackvalue;
    this.MonsterService.damagetaken = this.attack;
    this.MonsterService.damagetoLife();
    this.CombatsService.monsterCounterAttack();
    this.PlayerService.lifevalue -= this.CombatsService.monsterattackvalue;    
  }

  superAttackAction() {
    this.CombatsService.superAttackAction();
    this.superAttack = this.CombatsService.superattackvalue;
    this.MonsterService.damagetaken = this.superAttack;
    this.MonsterService.damagetoLife();
    this.CombatsService.monsterCounterAttack();
    this.PlayerService.lifevalue -= this.CombatsService.monsterattackvalue;  
  }

  healAction() {
    this.PlayerService.healAction();
    this.CombatsService.monsterCounterAttack();
    this.PlayerService.lifevalue -= this.CombatsService.monsterattackvalue;  
  }

  giveUpAction() {
    this.ResetService.giveupAction();
    this.MonsterService.lifevalue = this.ResetService.lifemonster
    this.PlayerService.lifevalue = this.ResetService.lifeplayer
    alert('you surrender');
  }
}
