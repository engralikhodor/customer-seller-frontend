import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public list_tasks: Task[] = [];
  constructor(public taskService: TaskService) { }
  /*------------------------------------------*/
  ngOnInit(): void {
    this.get_list_tasks();
  }
  /*------------------------------------------*/
  get_list_tasks() {
    this.taskService.getAll().subscribe(
      (data: Task[]) => {
        this.list_tasks = data;
        console.log(this.list_tasks);
      }
    )
  }
  /*------------------------------------------*/
  deleteTask(id: number) {
    this.taskService.delete(id).subscribe(
      res => {
        this.list_tasks = this.list_tasks.filter(item => item.id !== id);
        console.log("Task " + id + " has been removed!");
      }
    )
  }
  /*------------------------------------------*/

}
