import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerModule } from './player/player.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MonsterSlayer-Angular';
}
