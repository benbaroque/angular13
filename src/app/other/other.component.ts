import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  @Input() name: any ;
  @Output() changedNameEvent = new EventEmitter<any>();

  constructor() { }

  doSomeChange(): void{
    console.log("click");
    this.name.age = 30;
    this.changedNameEvent.emit(this.name)
  }

  ngOnInit(): void {
  }

}
