import {Injectable} from '@angular/core';
import {WebsocketService} from "../websocket/websocket.service";
import {SelectCell} from "../modules/select-cell";
import {Cell} from "../modules/cell";
import {CellComponent} from "../cell/cell.component";
import {SelectCellComponent} from "../select-cell/select-cell.component";

@Injectable()
export class InputHandlerService {

  private state : string;

  private lastClickedSelectCell : SelectCellComponent;
  private lastClickedCell : CellComponent;

  constructor(private webSocketService : WebsocketService)  {
    this.webSocketService.observable.subscribe(
      item => {
        if (item != null) {
          this.state = JSON.parse(item).state;
        }
      });
  }

  public inputSelect(selectCellComponent: SelectCellComponent): void {
    if (this.lastClickedCell != null) {
      this.webSocketService.remove(this.lastClickedCell.cell.row, this.lastClickedCell.cell.column);
      this.lastClickedCell = null;
    } else {
      this.lastClickedSelectCell = selectCellComponent;
    }
  }

  public inputField(cellComponent : CellComponent) : void {
    if (this.state === "start") {
      if (this.lastClickedSelectCell != null) {
        console.log(this.state); // TODO test
        this.webSocketService.add(cellComponent.cell.row, cellComponent.cell.column, this.lastClickedSelectCell.selectCell.rank);
        this.lastClickedSelectCell.selected = false;
        cellComponent.selected = false;
        this.lastClickedSelectCell = null;
      } else if (this.lastClickedCell != null) {
        this.webSocketService.swap(this.lastClickedCell.cell.row, this.lastClickedCell.cell.column,cellComponent.cell.row, cellComponent.cell.column)
        this.lastClickedCell = null;
      } else {
        this.lastClickedCell = cellComponent;
      }
    } else if (this.state === "turn") {
      if (this.lastClickedCell != null) {
        this.webSocketService.move(this.lastClickedCell.cell.row, this.lastClickedCell.cell.column, cellComponent.cell.row, cellComponent.cell.column);
        this.lastClickedCell = null;
      } else {
        this.lastClickedCell = cellComponent;
      }
    }
  }
}
