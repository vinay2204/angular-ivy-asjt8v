import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  number: number = 0;
  @Input() boxColor;
  @Input() placeholderText;

  @Output() Event = new EventEmitter();

  onCreate(inpVal) {
    if (inpVal.value.length > 0) {
      this.number = this.number += 1;
      this.Event.emit(inpVal.value);
      console.log(inpVal);
    }
  }
}
