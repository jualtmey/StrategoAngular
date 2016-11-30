import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stratego-root',
  templateUrl: './stratego.component.html',
  styleUrls: ['./stratego.component.css']
})
export class StrategoComponent implements OnInit {

  title = 'app works!';

  constructor() { }

  ngOnInit() {
  }

}
