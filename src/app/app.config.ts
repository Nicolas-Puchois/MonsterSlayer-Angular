import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { PlayerModule } from './player/player.module';
import { MonsterModule } from './monster/monster.module';
import { ActionModule } from './action/action.module';
import { LogModule } from './log/log.module';
import { importProvidersFrom } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers:[
  provideRouter([]),
  importProvidersFrom(BrowserModule, 
    PlayerModule,
    MonsterModule,
    ActionModule,
    LogModule),
],
};
