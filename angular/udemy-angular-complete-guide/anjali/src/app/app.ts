import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header/header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserComponent, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  // protected readonly title = signal('anjali');
  user = DUMMY_USERS;
  selectedUser?: string;

  onUserSelected(id: string) {
    console.log('Selected user id: ' + id);
    this.selectedUser = id;
  }

  get selectedUserName() {
    return this.user.find((u) => u.id === this.selectedUser)?.name || '';
  }
}
