import { Component, OnInit } from '@angular/core';
import { Community } from '../community.model';
import { CommunityService } from '../community.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  public list_communities: Community[] = [];
  constructor(public communityService: CommunityService) { }
  /*------------------------------------------*/
  ngOnInit(): void {
    this.get_list_communities();
  }
  /*------------------------------------------*/
  get_list_communities() {
    this.communityService.getAll().subscribe(
      (data: Community[]) => {
        this.list_communities = data;
        console.log(this.list_communities);
      }
    );
  }
  /*------------------------------------------*/
  delete_community(id: number) {
    this.communityService.delete(id).subscribe(
      res => {
        this.list_communities = this.list_communities.filter(item => item.id !== id);
        console.log("Community " + id + " has been removed!");
      }
    );
  }
  /*------------------------------------------*/
}
