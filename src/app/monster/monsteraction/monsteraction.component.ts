import { Component } from '@angular/core';
import { MonsterService } from '../../services/monster.service';

@Component({
  selector: 'app-monsteraction',
  standalone: true,
  imports: [],
  templateUrl: './monsteraction.component.html',
  styleUrl: './monsteraction.component.css'
})
export class MonsteractionComponent {

  constructor(public MonsterService: MonsterService) {
    this.MonsterService.getLifeValue();
  }

}
