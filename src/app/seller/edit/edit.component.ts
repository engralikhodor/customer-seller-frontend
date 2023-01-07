import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Seller } from '../seller';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private id: number = 0;
  public seller: Seller = { id: 0, first_name: '', last_name: '', full_name: '', country: '', city: '', gender: '', skills: '', phone: 0, is_deleted: false };//initialze as empty
  public form: FormGroup = new FormGroup({});

  /*------------------------------------------*/
  constructor(
    public sellerService: SellerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  /*------------------------------------------*/
  ngOnInit(): void {
    //get ID from URL => then assign the data as the current seller
    this.id = this.route.snapshot.params['id'];

    this.sellerService.find(this.id).subscribe((data: Seller) => {
      this.seller = data;
    });

    this.form = new FormGroup({
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
  get f() { return this.form.controls; }
  /*------------------------------------------*/
  submit() {
    this.sellerService.update(this.id, this.form.value).subscribe(
      res => {
        console.log("updated");
        this.router.navigateByUrl("seller/index");
      }
    );
  }
  /*------------------------------------------*/

}
