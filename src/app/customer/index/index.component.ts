import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer/customer';
import { CustomerService } from 'src/app/customer/customer.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public list_customers: Customer[] = [];
  constructor(public customerService: CustomerService) { }
  /*------------------------------------------*/
  ngOnInit(): void {
    this.get_list_customers();
  }
  /*------------------------------------------*/
  get_list_customers() {
    this.customerService.getAll().subscribe(
      (data: Customer[]) => {
        this.list_customers = data;
        console.log(this.list_customers);
      }
    )
  }
  /*------------------------------------------*/
  delete_customer(id: number) {
    this.customerService.delete(id).subscribe(
      res => {
        this.list_customers = this.list_customers.filter(item => item.id !== id);
        console.log("Customer " + id + " has been removed!");
      }
    )
  }
  /*------------------------------------------*/


}
