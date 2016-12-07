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
  private field : Field = {innerField : [{cells: [{isPassable: true, character: {rank: 1, isVisible: true, player: "PlayerOne"}, containsCharacter: true, column: 0, row: 0},{isPassable: true, character: {rank: 2, isVisible: true, player: "PlayerOne"}, containsCharacter: true, column: 1, row: 0}]},{cells: [{isPassable: true, character: {rank: 3, isVisible: true, player: "PlayerOne"}, containsCharacter: true, column: 0, row: 1},{isPassable: true, character: {rank: 4, isVisible: true, player: "PlayerOne"}, containsCharacter: true, column: 1, row: 1}]}]};

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
