import { Component } from '@angular/core';
import { PlayerService } from '../../services/player.service';
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

  constructor(public PlayerService: PlayerService, public MonsterService: MonsterService) {
    this.lifeValue = this.PlayerService.lifeValue;
    this.attack = this.PlayerService.attackValue;
  }

  attackAction() {
    this.PlayerService.attackAction();
    this.attack = this.PlayerService.attackValue;
    this.MonsterService.damagetaken = this.attack;
    this.MonsterService.damagetoLife();
  }

  superAttackAction() {
    this.PlayerService.superAttackAction();
    this.superAttack = this.PlayerService.superAttackValue
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
