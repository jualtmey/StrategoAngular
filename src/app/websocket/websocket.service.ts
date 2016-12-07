import { Injectable } from '@angular/core';
import {Observable, Subject, Observer, BehaviorSubject} from "rxjs";
import {Field} from "../modules/field";
import {Character} from "../modules/character";
import {Cell} from "../modules/cell";

@Injectable()
export class WebsocketService {

  webSocket : WebSocket;

  private behaviorSubject = new BehaviorSubject<string>(null);
  public observable : Observable<string> = this.behaviorSubject.asObservable();

  public initWebSocket(url : string): void {
    this.webSocket = new WebSocket(url);
    this.webSocket.onopen = (evt: Event) => { this.onOpen(evt) };
    this.webSocket.onclose = (evt: Event) => { this.onClose(evt) };
    this.webSocket.onmessage = (evt: Event) => { this.onMessage(evt) };
    this.webSocket.onerror = (evt: Event) => { this.onError(evt) };
  }

  private onOpen(evt : Event): void {
    alert("CONNECTED");
    let json = {'command': "lobby"};
    this.webSocket.send(JSON.stringify(json));
  }

  private onClose(evt) : void {
    alert("DISCONNECTED");

  }

  private onMessage(evt): void {
    this.behaviorSubject.next(evt.data);
  }

  private onError(evt): void  {
    alert("ERROR: " + evt.data);
  }
  /*---------------------------------------------------------------*/
  // TODO Testbereich
  private stringStratego: string ='{"playerTwo":"PlayerTwo","select":{"characterList":[{"rank":11,"player":"PlayerOne"},{"rank":11,"player":"PlayerOne"},{"rank":11,"player":"PlayerOne"},{"rank":11,"player":"PlayerOne"},{"rank":11,"player":"PlayerOne"},{"rank":11,"player":"PlayerOne"},{"rank":10,"player":"PlayerOne"},{"rank":9,"player":"PlayerOne"},{"rank":8,"player":"PlayerOne"},{"rank":8,"player":"PlayerOne"},{"rank":7,"player":"PlayerOne"},{"rank":7,"player":"PlayerOne"},{"rank":7,"player":"PlayerOne"},{"rank":6,"player":"PlayerOne"},{"rank":6,"player":"PlayerOne"},{"rank":6,"player":"PlayerOne"},{"rank":6,"player":"PlayerOne"},{"rank":5,"player":"PlayerOne"},{"rank":5,"player":"PlayerOne"},{"rank":5,"player":"PlayerOne"},{"rank":5,"player":"PlayerOne"},{"rank":4,"player":"PlayerOne"},{"rank":4,"player":"PlayerOne"},{"rank":4,"player":"PlayerOne"},{"rank":4,"player":"PlayerOne"},{"rank":3,"player":"PlayerOne"},{"rank":3,"player":"PlayerOne"},{"rank":3,"player":"PlayerOne"},{"rank":3,"player":"PlayerOne"},{"rank":3,"player":"PlayerOne"},{"rank":2,"player":"PlayerOne"},{"rank":2,"player":"PlayerOne"},{"rank":2,"player":"PlayerOne"},{"rank":2,"player":"PlayerOne"},{"rank":2,"player":"PlayerOne"},{"rank":2,"player":"PlayerOne"},{"rank":2,"player":"PlayerOne"},{"rank":2,"player":"PlayerOne"},{"rank":0,"player":"PlayerOne"}]},"field":{"innerField":[{"isPassable":true,"character":{"rank":1,"isVisible":true,"player":"PlayerOne"},"containsCharacter":true,"column":0,"row":0},{"isPassable":true,"containsCharacter":false,"column":0,"row":1},{"isPassable":true,"containsCharacter":false,"column":0,"row":2},{"isPassable":true,"containsCharacter":false,"column":0,"row":3},{"isPassable":true,"containsCharacter":false,"column":0,"row":4},{"isPassable":true,"containsCharacter":false,"column":0,"row":5},{"isPassable":true,"containsCharacter":false,"column":0,"row":6},{"isPassable":true,"containsCharacter":false,"column":0,"row":7},{"isPassable":true,"containsCharacter":false,"column":0,"row":8},{"isPassable":true,"character":{"isVisible":false,"player":"PlayerTwo"},"containsCharacter":true,"column":0,"row":9},{"isPassable":true,"containsCharacter":false,"column":1,"row":0},{"isPassable":true,"containsCharacter":false,"column":1,"row":1},{"isPassable":true,"containsCharacter":false,"column":1,"row":2},{"isPassable":true,"containsCharacter":false,"column":1,"row":3},{"isPassable":true,"containsCharacter":false,"column":1,"row":4},{"isPassable":true,"containsCharacter":false,"column":1,"row":5},{"isPassable":true,"containsCharacter":false,"column":1,"row":6},{"isPassable":true,"containsCharacter":false,"column":1,"row":7},{"isPassable":true,"containsCharacter":false,"column":1,"row":8},{"isPassable":true,"containsCharacter":false,"column":1,"row":9},{"isPassable":true,"containsCharacter":false,"column":2,"row":0},{"isPassable":true,"containsCharacter":false,"column":2,"row":1},{"isPassable":true,"containsCharacter":false,"column":2,"row":2},{"isPassable":true,"containsCharacter":false,"column":2,"row":3},{"isPassable":false,"containsCharacter":false,"column":2,"row":4},{"isPassable":false,"containsCharacter":false,"column":2,"row":5},{"isPassable":true,"containsCharacter":false,"column":2,"row":6},{"isPassable":true,"containsCharacter":false,"column":2,"row":7},{"isPassable":true,"containsCharacter":false,"column":2,"row":8},{"isPassable":true,"containsCharacter":false,"column":2,"row":9},{"isPassable":true,"containsCharacter":false,"column":3,"row":0},{"isPassable":true,"containsCharacter":false,"column":3,"row":1},{"isPassable":true,"containsCharacter":false,"column":3,"row":2},{"isPassable":true,"containsCharacter":false,"column":3,"row":3},{"isPassable":false,"containsCharacter":false,"column":3,"row":4},{"isPassable":false,"containsCharacter":false,"column":3,"row":5},{"isPassable":true,"containsCharacter":false,"column":3,"row":6},{"isPassable":true,"containsCharacter":false,"column":3,"row":7},{"isPassable":true,"containsCharacter":false,"column":3,"row":8},{"isPassable":true,"containsCharacter":false,"column":3,"row":9},{"isPassable":true,"containsCharacter":false,"column":4,"row":0},{"isPassable":true,"containsCharacter":false,"column":4,"row":1},{"isPassable":true,"containsCharacter":false,"column":4,"row":2},{"isPassable":true,"containsCharacter":false,"column":4,"row":3},{"isPassable":true,"containsCharacter":false,"column":4,"row":4},{"isPassable":true,"containsCharacter":false,"column":4,"row":5},{"isPassable":true,"containsCharacter":false,"column":4,"row":6},{"isPassable":true,"containsCharacter":false,"column":4,"row":7},{"isPassable":true,"containsCharacter":false,"column":4,"row":8},{"isPassable":true,"containsCharacter":false,"column":4,"row":9},{"isPassable":true,"containsCharacter":false,"column":5,"row":0},{"isPassable":true,"containsCharacter":false,"column":5,"row":1},{"isPassable":true,"containsCharacter":false,"column":5,"row":2},{"isPassable":true,"containsCharacter":false,"column":5,"row":3},{"isPassable":true,"containsCharacter":false,"column":5,"row":4},{"isPassable":true,"containsCharacter":false,"column":5,"row":5},{"isPassable":true,"containsCharacter":false,"column":5,"row":6},{"isPassable":true,"containsCharacter":false,"column":5,"row":7},{"isPassable":true,"containsCharacter":false,"column":5,"row":8},{"isPassable":true,"containsCharacter":false,"column":5,"row":9},{"isPassable":true,"containsCharacter":false,"column":6,"row":0},{"isPassable":true,"containsCharacter":false,"column":6,"row":1},{"isPassable":true,"containsCharacter":false,"column":6,"row":2},{"isPassable":true,"containsCharacter":false,"column":6,"row":3},{"isPassable":false,"containsCharacter":false,"column":6,"row":4},{"isPassable":false,"containsCharacter":false,"column":6,"row":5},{"isPassable":true,"containsCharacter":false,"column":6,"row":6},{"isPassable":true,"containsCharacter":false,"column":6,"row":7},{"isPassable":true,"containsCharacter":false,"column":6,"row":8},{"isPassable":true,"containsCharacter":false,"column":6,"row":9},{"isPassable":true,"containsCharacter":false,"column":7,"row":0},{"isPassable":true,"containsCharacter":false,"column":7,"row":1},{"isPassable":true,"containsCharacter":false,"column":7,"row":2},{"isPassable":true,"containsCharacter":false,"column":7,"row":3},{"isPassable":false,"containsCharacter":false,"column":7,"row":4},{"isPassable":false,"containsCharacter":false,"column":7,"row":5},{"isPassable":true,"containsCharacter":false,"column":7,"row":6},{"isPassable":true,"containsCharacter":false,"column":7,"row":7},{"isPassable":true,"containsCharacter":false,"column":7,"row":8},{"isPassable":true,"containsCharacter":false,"column":7,"row":9},{"isPassable":true,"containsCharacter":false,"column":8,"row":0},{"isPassable":true,"containsCharacter":false,"column":8,"row":1},{"isPassable":true,"containsCharacter":false,"column":8,"row":2},{"isPassable":true,"containsCharacter":false,"column":8,"row":3},{"isPassable":true,"containsCharacter":false,"column":8,"row":4},{"isPassable":true,"containsCharacter":false,"column":8,"row":5},{"isPassable":true,"containsCharacter":false,"column":8,"row":6},{"isPassable":true,"containsCharacter":false,"column":8,"row":7},{"isPassable":true,"containsCharacter":false,"column":8,"row":8},{"isPassable":true,"containsCharacter":false,"column":8,"row":9},{"isPassable":true,"containsCharacter":false,"column":9,"row":0},{"isPassable":true,"containsCharacter":false,"column":9,"row":1},{"isPassable":true,"containsCharacter":false,"column":9,"row":2},{"isPassable":true,"containsCharacter":false,"column":9,"row":3},{"isPassable":true,"containsCharacter":false,"column":9,"row":4},{"isPassable":true,"containsCharacter":false,"column":9,"row":5},{"isPassable":true,"containsCharacter":false,"column":9,"row":6},{"isPassable":true,"containsCharacter":false,"column":9,"row":7},{"isPassable":true,"containsCharacter":false,"column":9,"row":8},{"isPassable":true,"containsCharacter":false,"column":9,"row":9}]},"controllerStatus":"Added character <Scout> to 0,9.","state":"start","playerStatus":"Set your characters, player PlayerOne!","playerOne":"PlayerOne","info":{"infoList":[{"maxCharacters":1,"currentCharactersPlayerOne":0,"characterName":"Flag","currentCharactersPlayerTwo":0},{"maxCharacters":1,"currentCharactersPlayerOne":1,"characterName":"Spy","currentCharactersPlayerTwo":0},{"maxCharacters":8,"currentCharactersPlayerOne":0,"characterName":"Scout","currentCharactersPlayerTwo":1},{"maxCharacters":5,"currentCharactersPlayerOne":0,"characterName":"Miner","currentCharactersPlayerTwo":0},{"maxCharacters":4,"currentCharactersPlayerOne":0,"characterName":"Sergeant","currentCharactersPlayerTwo":0},{"maxCharacters":4,"currentCharactersPlayerOne":0,"characterName":"Lieutenant","currentCharactersPlayerTwo":0},{"maxCharacters":4,"currentCharactersPlayerOne":0,"characterName":"Captain","currentCharactersPlayerTwo":0},{"maxCharacters":3,"currentCharactersPlayerOne":0,"characterName":"Major","currentCharactersPlayerTwo":0},{"maxCharacters":2,"currentCharactersPlayerOne":0,"characterName":"Colonel","currentCharactersPlayerTwo":0},{"maxCharacters":1,"currentCharactersPlayerOne":0,"characterName":"General","currentCharactersPlayerTwo":0},{"maxCharacters":1,"currentCharactersPlayerOne":0,"characterName":"Marshal","currentCharactersPlayerTwo":0},{"maxCharacters":6,"currentCharactersPlayerOne":0,"characterName":"Bomb","currentCharactersPlayerTwo":0}]}}';
  character : Character;
  cell: Cell;
  field: Field;

  public pushButton() : void {
    let strategoJson = JSON.parse(this.stringStratego);
    let {select: select, field: field, info: info, playerOne: playerOne, playerTwo: playerTwo, state: stateTemp} = strategoJson;
    console.log(field);
    this.character = field.innerField[0].character as Character;
    console.log(this.character);
    this.cell = field.innerField[0] as Cell;
    console.log(this.cell);
    this.field = field;
    console.log(this.field.innerField);
  }
  /*---------------------------------------------------------------*/
  public add(row : number, column : number, rank : number) : void {
    let json = {
      'command': "add",
      'row': row,
      'column': column,
      'rank': rank
    };
    console.log(json.command); // TODO test
    this.webSocket.send(JSON.stringify(json));
  }

  public swap(fromRow : number, fromColumn : number, toRow : number, toColumn : number) : void {
    let json = {
      'command': "swap",
      'fromRow': fromRow,
      'fromColumn': fromColumn,
      'toRow': toRow,
      'toColumn': toColumn
    };
    console.log(json.command); // TODO test
    this.webSocket.send(JSON.stringify(json));
  }

  public remove(row : number, column : number) : void {
    let json = {
      'command': "remove",
      'row': row,
      'column': column,
    };
    console.log(json.command); // TODO test
    this.webSocket.send(JSON.stringify(json));
  }

  public move(fromRow : number, fromColumn : number, toRow : number, toColumn : number) : void {
    let json = {
      'command': "move",
      'fromRow': fromRow,
      'fromColumn': fromColumn,
      'toRow': toRow,
      'toColumn': toColumn
    };
    console.log(json.command); // TODO test
    this.webSocket.send(JSON.stringify(json));
  }

  public finish() : void {
    let json = {
      'command': "finish",
    };
    console.log(json.command); // TODO test
    this.webSocket.send(JSON.stringify(json));
  }

}
