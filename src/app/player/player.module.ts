import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayeractionComponent } from './playeraction/playeraction.component';



@NgModule({
  declarations: [PlayeractionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PlayeractionComponent,
  ]
})
export class PlayerModule { }
