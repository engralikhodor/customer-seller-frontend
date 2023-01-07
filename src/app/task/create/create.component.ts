// import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
// import { Task } from '../task';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  /*------------------------------------------*/
  constructor(
    // public datepipe: DatePipe,
    public taskService: TaskService,
    private router: Router
  ) { }
  /*------------------------------------------*/
  ngOnInit(): void {
    this.form = new FormGroup({
      date_time_from: new FormControl('', [Validators.required]),
      date_time_to: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      location_lat: new FormControl('', [Validators.required]),
      location_lng: new FormControl('', [Validators.required]),
      task_type: new FormControl('', [Validators.required]),
      created_by_id: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      status: new FormControl('', [Validators.required])
    });
  }
  /*------------------------------------------*/
  get f() { return this.form.controls; }
  /*------------------------------------------*/
  submit() {
    this.taskService.create(this.form.value).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl("/task/index");
      }
    );
  }
  /*------------------------------------------*/
}
