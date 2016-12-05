import {Component, OnInit, Input} from '@angular/core';
import {SelectCell} from "../modules/select-cell";

@Component({
  selector: 'app-select-cell',
  templateUrl: './select-cell.component.html',
  styleUrls: ['./select-cell.component.css']
})
export class SelectCellComponent implements OnInit {
  @Input()
  private selectCell : SelectCell;
  private selected : boolean = false;

  constructor() { }

  onSelect() {
    this.selected === true ? this.selected = false : this.selected = true;
  }

  whichFigure() : string {
    return this.selectCell.rank.toString();
    // if (this.selectCell.containsCharacter) {
    //   if (this.selectCell.character.isVisible) {
    //   } else {
    //     return "notVisible";
    //   }
    // } else {
    //   return "empty";
    // }
  }

  ngOnInit() {
  }

}
