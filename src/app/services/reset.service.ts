import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResetService {
  lifeplayer: number = 100;
  lifemonster: number = 100;

  constructor() { }

  giveupAction() {
    this.lifeplayer = this.lifeplayer;
    this.lifemonster = this.lifemonster;
  }
}
