import { Component } from '@angular/core';

@Component({
  selector: 'app-playeraction',
  templateUrl: './playeraction.component.html',
  styleUrl: './playeraction.component.css'
})
export class PlayeractionComponent {
  attackAction(){
    const attack: number = Math.random();
  }
}
