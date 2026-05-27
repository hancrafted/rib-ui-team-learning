import { Component, Input } from '@angular/core';
//import { Task } from "./task/task";
//import { NewTask } from "./new-task/new-task";
//import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  //imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;

  /*
    Dependency Injection. you tell Angular which type of value you need and Angular creates it and provides it as an argument
  */
  constructor(private tasksService: TasksService) { //wir teilen angular mit, dass dieser service-instanz hier in dieser Komponente benötigt wird.
    }

  get selectedUserTasks() {
    return this.tasksService.getUsertTasks(this.userId);
  }

 

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  /*
  onAddTask(taskData: NewTaskData) {
   
    this.isAddingTask = false;
  }

   onCompleteTask(id: string) {}
   
    */

}
