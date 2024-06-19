import { Component } from '@angular/core';
import { MonsterModule } from '../monster.module';
import { PlayerModule } from '../../player/player.module';

@Component({
  selector: 'app-monsterstats',
  templateUrl: './monsterstats.component.html',
  styleUrl: './monsterstats.component.css'
})
export class MonsterstatsComponent {
 damage : number = 0;
 
 constructor(public MonsterModule : MonsterModule, public PlayerModule: PlayerModule){}

}
