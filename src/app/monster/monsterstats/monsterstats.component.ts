import { Component } from '@angular/core';
import { MonsterService } from '../../services/monster.service';

@Component({
  selector: 'app-monsterstats',
  templateUrl: './monsterstats.component.html',
  styleUrl: './monsterstats.component.css',
})
export class MonsterstatsComponent {
  damage: number = 0;

  constructor(public MonsterService: MonsterService) {
    this.MonsterService.getLifeValue();
  }
}
