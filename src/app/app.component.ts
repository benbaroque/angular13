import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '12';

  datas = [
    { id: 1, name: "bhattarayudh" },
    { id: 2, name: "ben" }
  ];


  doSomeThing(newName: string) {
    this.name = newName;
  }
}
