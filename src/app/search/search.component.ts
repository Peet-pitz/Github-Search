import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search:any[];

  constructor(private searchService: SearchService) {
    this.searchService.getSearchInfo().subscribe(search =>{
      console.log(search);
      this.search = this.search;
    });
   }

  ngOnInit() {
  }

}
