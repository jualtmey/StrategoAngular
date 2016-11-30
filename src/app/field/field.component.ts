import { Component, OnInit } from '@angular/core';
import {CellComponent} from "../cell/cell.component";

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  width = 10;
  height = 10;

  widthHeight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  rows = [];

  constructor() {

  }

  ngOnInit() {
  }

}
