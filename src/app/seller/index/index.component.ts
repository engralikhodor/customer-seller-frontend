import { Component, OnInit } from '@angular/core';
import { Seller } from '../seller';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public list_sellers: Seller[] = [];

  constructor(public sellerService: SellerService) { }
  /*------------------------------------------*/
  ngOnInit(): void {
    this.get_list_sellers();
  }
  /*------------------------------------------*/
  get_list_sellers() {
    this.sellerService.getAll().subscribe(
      (data: Seller[]) => {
        this.list_sellers = data;
        console.log(this.list_sellers);
      }
    )
  }
  /*------------------------------------------*/
  delete_seller(id: number) {
    this.sellerService.delete(id).subscribe(
      res => {
        this.list_sellers = this.list_sellers.filter(item => item.id !== id);
        console.log("Seller " + id + " has been removed!");
      }
    )
  }
  /*------------------------------------------*/

}
