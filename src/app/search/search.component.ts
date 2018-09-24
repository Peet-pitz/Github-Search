import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search:any[];
  repos:any[];
  username:string;

  constructor(private searchingService: SearchService) {
    
   }

   findSearch(){
     this.searchingService.updateSearch(this.username);
     this.searchingService.getSearchInfo().subscribe(search =>{
      console.log(search);
      this.search =search;
    });

    this.searchingService.getSearchRepos().subscribe(repos =>{
      console.log(repos);
      this.repos=repos;
    })
   }

  ngOnInit() {
  }

}
