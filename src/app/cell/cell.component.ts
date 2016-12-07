import {Component, OnInit, Input} from '@angular/core';
import {Cell} from "../modules/cell";
import {InputHandlerService} from "../input-handler/input-handler.service";

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input()
  public cell : Cell;
  @Input()
  public playerOne : string;
  @Input()
  public playerTwo : string;

  public selected : boolean = false;

  constructor(private inputHandlerService : InputHandlerService) { }

  private onSelect() {
    this.inputHandlerService.inputField(this);
    this.selected === true ? this.selected = false : this.selected = true;
  }

  private getPlayer() : string {
    if (this.cell.containsCharacter) {
      return this.cell.character.player;
    }
  }

  private whichFigure() : string {
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
  }

}
