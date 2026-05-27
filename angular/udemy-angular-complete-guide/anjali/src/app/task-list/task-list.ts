import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskListItem } from './task-list.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [DatePipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskListComponent {
  @Input({ required: true }) task!: TaskListItem;
  @Output() taskSelected = new EventEmitter<string>();

  onTaskComplete() {
    this.taskSelected.emit(this.task.id);
  }
}
