import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayeractionComponent } from './playeraction/playeraction.component';
import { PlayerstatsComponent } from './playerstats/playerstats.component';



@NgModule({
  declarations: [PlayeractionComponent,PlayerstatsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PlayeractionComponent,
    PlayerstatsComponent
  ]
})
export class PlayerModule { }
