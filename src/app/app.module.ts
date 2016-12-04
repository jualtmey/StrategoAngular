import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StrategoComponent } from './stratego/stratego.component';
import {WebsocketService} from "./websocket/websocket.service";
import { CellComponent } from './cell/cell.component';

@NgModule({
  declarations: [
    StrategoComponent,
    CellComponent
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
