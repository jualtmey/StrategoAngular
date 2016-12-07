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

  public add(row : number, column : number, rank : number) : void {
    let json = {
      'command': "add",
      'row': row,
      'column': column,
      'rank': rank
    };
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
    this.webSocket.send(JSON.stringify(json));
  }

  public remove(row : number, column : number) : void {
    let json = {
      'command': "remove",
      'row': row,
      'column': column,
    };
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
    this.webSocket.send(JSON.stringify(json));
  }

  public finish() : void {
    let json = {
      'command': "finish",
    };
    this.webSocket.send(JSON.stringify(json));
  }

}
