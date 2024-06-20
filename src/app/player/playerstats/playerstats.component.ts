import { Component } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-playerstats',
  templateUrl: './playerstats.component.html',
  styleUrl: './playerstats.component.css'
})
export class PlayerstatsComponent {
  life : number ;

  constructor(public PlayerService : PlayerService){
    this.updateLifeValue();  
    this.life = this.PlayerService.lifevalue
  }

  updateLifeValue(){
   return this.life = this.PlayerService.getLifeValue();
  }
}
