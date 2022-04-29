import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dislike',
  templateUrl: './dislike.component.html',
  styleUrls: ['./dislike.component.css']
})
export class DislikeComponent implements OnInit {

  constructor() { }

  @Input() countDisLike: any;

  @Output() changedDisLike = new EventEmitter<any>();
  isClick = false;

  ngOnInit(): void {
  }

  onDisLike(click: any,event :any) {
    if (click) {
      event.target.style.color = "black";
      this.changedDisLike.emit(this.countDisLike - 1);
      this.isClick = false;
    }
    else {
      event.target.style.color = "blue";
      this.changedDisLike.emit(this.countDisLike + 1);
      this.isClick = true;
    }

  }

}
