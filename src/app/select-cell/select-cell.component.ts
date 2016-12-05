import {Component, OnInit, Input} from '@angular/core';
import {SelectCell} from "../modules/select-cell";
import {InputHandlerService} from "../input-handler/input-handler.service";

@Component({
  selector: 'app-select-cell',
  templateUrl: './select-cell.component.html',
  styleUrls: ['./select-cell.component.css']
})
export class SelectCellComponent implements OnInit {
  @Input()
  public selectCell : SelectCell;
  public selected : boolean = false;

  constructor(private inputHandlerService : InputHandlerService) { }

  private onSelect() {
    this.inputHandlerService.inputSelect(this);
    this.selected === true ? this.selected = false : this.selected = true;
  }

  private whichFigure() : string {
    return this.selectCell.rank.toString();
  }

  ngOnInit() {
  }

}
