import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerstatsComponent } from './playerstats/playerstats.component';



@NgModule({
  declarations: [PlayerstatsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PlayerstatsComponent
  ]
})
export class PlayerModule { }
