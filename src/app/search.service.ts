import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private username:string;
  private clientid = 'd9edb8eb40e2c392b4ac'
  private clientsecret = 'db3726d68047f9c14f57d0cbeefdf5233e69b620'

  constructor(private http:Http) {
    console.log("service is now ready!");
    this.username = 'Peet-pitz';
   }

   getSearchInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .pipe(map(res => res.json()));
   }

   getSearchRepos(){
     return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .pipe(map(res => res.json()));
   }
}
