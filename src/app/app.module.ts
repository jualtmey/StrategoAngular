import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StrategoComponent } from './stratego/stratego.component';
import { FieldComponent } from './field/field.component';
import { CellComponent } from './cell/cell.component';

@NgModule({
  declarations: [
    StrategoComponent,
    FieldComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [StrategoComponent]
})
export class AppModule { }
