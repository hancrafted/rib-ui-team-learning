import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserItem } from './user.model';
//import { Card } from '../shared/card/card';
//import { type UserItem } from './user.model';

@Component({
  selector: 'app-user',
  standalone: false,
 // imports: [Card], //remove after init standalone false
  templateUrl: './user.html',
  styleUrl: './user.scss',
})

export class User {
  @Input({ required: true }) user!: UserItem;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
  //selectedUser = DUMMY_USERS[0];
}
