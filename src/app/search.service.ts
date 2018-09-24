import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private username:string;

  constructor(private http:Http) {
    console.log("service is now ready!");
    this.username = 'Peet-pitz';
   }

   getSearchInfo(){
     return this.http.get("https://api.github.com/users/" + this.username);
   }
}
