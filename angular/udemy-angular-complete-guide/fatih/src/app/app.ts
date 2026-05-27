import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { Header } from './header/header';
//import { User } from './user/user';
//import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
 // imports: [RouterOutlet, Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  //protected readonly title = signal('fatih');
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
