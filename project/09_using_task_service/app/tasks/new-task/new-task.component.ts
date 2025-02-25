import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter();
  @Output() add = new EventEmitter<NewTaskData>();

  title!:string;
  summary!:string;
  dueDate!:string;

  onCancelNewTask(){
    this.cancel.emit();
  }

  onSubmit(){
    console.log(this.title, this.summary, this.dueDate);
    this.add.emit({title:this.title, summary:this.summary, dueDate:this.dueDate});
    this.cancel.emit();
  }
}
