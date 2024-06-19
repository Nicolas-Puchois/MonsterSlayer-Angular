import { Component } from '@angular/core';
import { PlayerService } from '../player.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-playeraction',
  templateUrl: './playeraction.component.html',
  styleUrl: './playeraction.component.css'
})
export class PlayeractionComponent {
  attack: number;
  superAttack: number;
  healValue : number;

  constructor(public PlayerService : PlayerService){
    this.attack = this.PlayerService.randomNumber;
    this.superAttack = this.PlayerService.randomNumber;
    this.healValue = this.PlayerService.randomNumber;
  }



  attackAction(){
    this.PlayerService.randomGenerator();
    this.attack = this.PlayerService.randomNumber;
    console.log(this.attack);
  }

  superAttackAction(){
    this.PlayerService.randomGenerator();
    this.superAttack = this.PlayerService.randomNumber;
    this.superAttack += 15
  }

  healAction(){

  }
}
