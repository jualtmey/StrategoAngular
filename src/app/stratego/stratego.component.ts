import { Component, OnInit } from '@angular/core';
import {WebsocketService} from "../websocket/websocket.service";
import {Subject, Subscription} from "rxjs";
import {Field} from "../modules/field";
import {Cell} from "../modules/cell";

@Component({
  selector: 'stratego-root',
  templateUrl: './stratego.component.html',
  styleUrls: ['./stratego.component.css']
})
export class StrategoComponent implements OnInit {
  private webSocketAddress = "ws://localhost:9000/ws";
  private title = 'app works!';
  result: string;
  fieldHeight : number = 10; // TODO muss in Json vll unter field auf höhe von innerfield
  fieldWidth : number = 10; // TODO siehe fieldHeight
  field : Field = {innerField : [{isPassable: true, character: {rank: 9, isVisible: true, player: "PlayerOne"}, containsCharacter: true, column: 0, row: 0},{isPassable: true, character: {rank: 10, isVisible: true, player: "PlayerOne"}, containsCharacter: true, column: 0, row: 0}]};
  cellJson : Cell = {isPassable: true, character: {rank: 10, isVisible: true, player: "PlayerOne"}, containsCharacter: true, column: 0, row: 0}; //TODO

  constructor(private webSocketService : WebsocketService) { }

  startWebSocket(): void {
    this.webSocketService.initWebSocket(this.webSocketAddress);
  }

  add(): void {
    this.webSocketService.add();
  }
  ngOnInit() {
    this.webSocketService.observable.subscribe(
        item => this.result = item);
    this.webSocketService.pushButton(); // TODO for TESTing
  }

}
