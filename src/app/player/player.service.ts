import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  public randomNumber: number = 1;
  public min : number = 1;
  public max : number = 20;
    constructor() { }

  randomGenerator(){
     this.randomNumber = Math.floor(Math.random()*(this.max - this.min + 1));
     return this.randomNumber
  }

}
