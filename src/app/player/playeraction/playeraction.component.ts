import { Component } from '@angular/core';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-playeraction',
  templateUrl: './playeraction.component.html',
  styleUrl: './playeraction.component.css'
})
export class PlayeractionComponent {
  attack: number;
  superAttack: number;
  lifeValue : number;

  constructor(public PlayerService : PlayerService){
    this.attack = this.PlayerService.randomNumber;
    this.superAttack = this.PlayerService.randomNumber;
    this.lifeValue = this.PlayerService.lifeValue;
  }



  attackAction(){
    this.PlayerService.randomGenerator();
    this.attack = this.PlayerService.randomNumber;
  }

  superAttackAction(){
    this.PlayerService.randomGenerator();
    this.superAttack = this.PlayerService.randomNumber;
    this.superAttack += 15
  }

  healAction(){
      this.PlayerService.healAction();
    }

    giveUpAction(){
      this.PlayerService.giveupAction();
      alert("you surrender")
    }
}
