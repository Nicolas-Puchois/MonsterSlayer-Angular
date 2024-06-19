import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterstatsComponent } from './monsterstats/monsterstats.component';



@NgModule({
  declarations: [
    MonsterstatsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MonsterModule { 

  public lifeValue : number = 50;

  getLifeValue(){
    return this.lifeValue
  }
}
