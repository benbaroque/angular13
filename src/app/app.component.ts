import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // parentName = { id: 1, value: "BEN" }
  parentName = new User(1,"Ben");

  onResponse(event: User): void {
    console.table(event);
  }
}
