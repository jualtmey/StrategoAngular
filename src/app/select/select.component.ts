import { Component, OnInit } from '@angular/core';
import {WebsocketService} from "../websocket/websocket.service";
import {Select} from "../modules/select";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  private select : Select = {characterList:[]};

  constructor(private webSocketService : WebsocketService) { }

  ngOnInit() {
    this.webSocketService.observable.subscribe(
      item => {
        if (item != null) {
          this.select = JSON.parse(item).select;
        }
      });
  }

}
