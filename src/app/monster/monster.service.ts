import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  public lifeValue : number = 10;
  constructor() { }

  getLifeValue(){
    return this.lifeValue
  }
}
