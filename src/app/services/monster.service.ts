import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  public lifeValue : number = 100;
  public damagetaken: number = 1;



  getLifeValue(){
    return this.lifeValue
  }

  damagetoLife(){
    this.lifeValue -= this.damagetaken;
    return this.lifeValue
  }
}
