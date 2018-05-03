import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs'

@Injectable()
export class ListServiceService {
Base_Url: string = 'http://localhost:3000'
constructor(private http: Http) { 
  
}
retrieveList(){
  return this.http.get(`${this.Base_Url}/api/journal-entries`)
    .map((res) => res.json())
}
retrieveSingle(id){
  return this.http.get(`${this.Base_Url}/api/journal-entries/${id}`)
  .map((res) => res.json())
}
}
