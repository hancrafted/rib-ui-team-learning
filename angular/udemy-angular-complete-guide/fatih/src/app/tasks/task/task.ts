import { Component, inject, Input } from '@angular/core';
//import { DatePipe } from '@angular/common';
import { TaskItem } from './task.model';
//import { Card } from '../../shared/card/card';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  //imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({ required: true }) task!: TaskItem;
  // nicht mehr benötigt by using service. @Output() complete = new EventEmitter<string>(); //typ-annotation
  private tasksService = inject(TasksService);

  onCompleteTask() {
  //  this.complete.emit(this.task.id);
    this.tasksService.removeTask(this.task.id);
  }


}
