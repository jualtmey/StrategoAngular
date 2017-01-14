import { Component, OnInit } from '@angular/core';
import {WebsocketService} from "../websocket/websocket.service";
import {Field} from "../modules/field";

@Component({
  selector: 'stratego-root',
  templateUrl: './stratego.component.html',
  styleUrls: ['./stratego.component.css']
})
export class StrategoComponent implements OnInit {
  private webSocketAddress = "ws://localhost:9000/ws";
  private playerOne;
  private playerTwo;
  private field : Field = {innerField : []};

  constructor(private webSocketService : WebsocketService) { }

  startWebSocket(): void {
    this.webSocketService.initWebSocket(this.webSocketAddress);
  }

  finish(): void {
    this.webSocketService.finish()
  }
  ngOnInit() {
    this.webSocketService.observable.subscribe(
      item => {
        if (item != null) {
          let {field: field, playerOne: playerOne, playerTwo: playerTwo} = JSON.parse(item)
          this.field = field;
          this.playerOne = playerOne;
          this.playerTwo = playerTwo;
        }
      });
  }
}
