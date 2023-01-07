import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  /*------------------------------------------*/
  constructor(
    public customerservice: CustomerService,
    private router: Router
  ) { }
  /*------------------------------------------*/
  ngOnInit(): void {
    this.form = new FormGroup({
      //pattern for English and Arabic 
      first_name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]),
      last_name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z\u0600-\u06FF ]*')]),
      email: new FormControl('', [Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required])
    });
  }
  /*------------------------------------------*/
  get f() {
    return this.form.controls;
  }
  /*------------------------------------------*/
  submit() {
    console.log(this.form.value);
    this.customerservice.create(this.form.value).subscribe(
      res => {
        console.log("saved");
        this.router.navigateByUrl("customer/index");
      }
    );
  }
  /*------------------------------------------*/


}
