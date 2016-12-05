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
  field : Field = {innerField : [{cells: [{isPassable: true, character: {rank: 1, isVisible: true, player: "PlayerOne"}, containsCharacter: true, column: 0, row: 0},{isPassable: true, character: {rank: 2, isVisible: true, player: "PlayerOne"}, containsCharacter: true, column: 1, row: 0}]},{cells: [{isPassable: true, character: {rank: 3, isVisible: true, player: "PlayerOne"}, containsCharacter: true, column: 0, row: 1},{isPassable: true, character: {rank: 4, isVisible: true, player: "PlayerOne"}, containsCharacter: true, column: 1, row: 1}]}]};

  constructor(private webSocketService : WebsocketService) { }

  startWebSocket(): void {
    this.webSocketService.initWebSocket(this.webSocketAddress);
  }

  add(): void {
    // this.webSocketService.add(); // TODO test
  }
  ngOnInit() {
    this.webSocketService.observable.subscribe(
      item => {
        if (item != null) {
          this.field = JSON.parse(item).field;
        }
      });
    // this.webSocketService.pushButton(); // TODO for TESTing
  }
}
