import { Component, EventEmitter, Input, inject, Output } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  //imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
  @Input({ required: true }) userId!: string; 
  /*
  wird mit inject nicht nehr gebraucht
  @Output() cancel = new EventEmitter<void>(); //EventEmitter, der keine Daten überträgt(gesendet werden).
  @Output() add = new EventEmitter<NewTaskData>(); 
  */
 @Output() close = new EventEmitter<void>();


  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService);

  onCancel() {
    //this.cancel.emit(); //neues Ereignis auszugeben, das keine Daten enthällt.
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    
    this.close.emit();
  }
}
