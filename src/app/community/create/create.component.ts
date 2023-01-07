import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Community } from '../community.model';
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  private newCommunity = new Community(0, '', false, '');//empty instance

  constructor(
    public communityService: CommunityService,
    private router: Router
  ) { }
  /*------------------------------------------*/
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('')
    });
  }
  /*------------------------------------------*/
  get f() { return this.form.controls; }
  /*------------------------------------------*/
  submit() {
    this.communityService.create(this.form.value).subscribe(
      res => {
        console.log("added");
        this.router.navigateByUrl("/community/index");
      }
    );
  }
  /*------------------------------------------*/


}
