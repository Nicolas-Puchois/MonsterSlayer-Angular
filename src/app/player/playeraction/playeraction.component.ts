import { Component } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { CombatsService } from '../../services/combats.service';
import { MonsterService } from '../../services/monster.service';

@Component({
  selector: 'app-playeraction',
  templateUrl: './playeraction.component.html',
  styleUrl: './playeraction.component.css',
})
export class PlayeractionComponent {
  attack: number;
  lifeValue: number;
  superAttack: number = 0;

  constructor(
    public PlayerService: PlayerService,
    public MonsterService: MonsterService,
    public CombatsService: CombatsService
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
  }

  healAction() {
    this.PlayerService.healAction();
  }

  giveUpAction() {
    this.PlayerService.giveupAction();
    alert('you surrender');
  }
}
