import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StrategoComponent } from './stratego/stratego.component';
import {WebsocketService} from "./websocket/websocket.service";
import { CellComponent } from './cell/cell.component';
import { SelectComponent } from './select/select.component';
import { SelectCellComponent } from './select-cell/select-cell.component';

@NgModule({
  declarations: [
    StrategoComponent,
    CellComponent,
    SelectComponent,
    SelectCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WebsocketService],
  bootstrap: [StrategoComponent]
})
export class AppModule { }
