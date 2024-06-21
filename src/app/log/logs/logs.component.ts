import { Component } from '@angular/core';
import { LogsService } from '../../services/logs.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent {
  constructor(public LogsService: LogsService){}

  showlogs(){
    return this.LogsService.logs
  }
}
