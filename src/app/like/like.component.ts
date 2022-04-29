import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() countLike: any ;

  @Output() changedLike = new EventEmitter<any>();
  isClick = false;

  constructor() { }

  onLike(click: any,event :any) {
    if (click) {
      event.target.style.color = "black";
      this.changedLike.emit(this.countLike - 1);
      this.isClick = false;
    }
    else {
      event.target.style.color = "blue";
      this.changedLike.emit(this.countLike + 1);
      this.isClick = true;
    }

  }

  ngOnInit(): void {
  }

}
