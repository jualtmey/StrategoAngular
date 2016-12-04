import {Component, OnInit, Input} from '@angular/core';
import {Cell} from "../modules/cell";
import {WebsocketService} from "../websocket/websocket.service";

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input()
  private cell : Cell = {isPassable: true, character: null, containsCharacter: false, column: 0, row: 0};
  private selected : boolean = false;

  constructor(private webSocketService : WebsocketService) { }

  onSelect() {
    this.selected === true ? this.selected = false : this.selected = true;
  }

  whichFigure() : string {
    if (this.cell.containsCharacter) {
      if (this.cell.character.isVisible) {
        return this.cell.character.rank.toString();
      } else {
        return "notVisible";
      }
    } else {
      return "empty";
    }
  }

  ngOnInit() {
    // TODO wieder einblenden
    // this.webSocketService.observableCell.subscribe(
    //   c => this.cell = c);
  }

}
