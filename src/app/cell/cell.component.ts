import {Component, OnInit, Input} from '@angular/core';
import {Cell} from "../modules/cell";

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input()
  private cell : Cell;
  private selected : boolean = false;

  constructor() { }

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
  }

}
