import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerModule } from './player/player.module';
import { MonsterModule } from './monster/monster.module';
import { ActionModule } from './action/action.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayerModule, MonsterModule, ActionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MonsterSlayer-Angular';
}
