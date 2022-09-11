import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Test for data transfer between 2 component ';

  Users = [];
  Admins = [];

  pushUser(data) {
    this.Users.push(data);
  }
  onRemoveuser(item) {
    this.Users.splice(item, 1);
  }

  pushAdmin(data) {
    this.Users.push(data);
  }

  onRemoveAdmin(item) {
    this.Admins.splice(item, 1);
  }
}
