import { Component } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-playeraction',
  templateUrl: './playeraction.component.html',
  styleUrl: './playeraction.component.css',
})
export class PlayeractionComponent {
  attack: number;
  lifeValue: number;
  superAttack: number = 0;

  constructor(public PlayerService: PlayerService) {
    this.lifeValue = this.PlayerService.lifeValue;
    this.attack = this.PlayerService.attackValue;
  }

  attackAction() {
    this.PlayerService.attackAction();
    this.attack = this.PlayerService.attackValue;
  }

  superAttackAction() {
    this.PlayerService.superAttackAction();
    this.superAttack = this.PlayerService.superAttackValue
  }

  healAction() {
    this.PlayerService.healAction();
  }

  giveUpAction() {
    this.PlayerService.giveupAction();
    alert('you surrender');
  }
}
