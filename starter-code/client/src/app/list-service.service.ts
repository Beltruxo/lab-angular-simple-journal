import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs'

@Injectable()
export class ListServiceService {

constructor(private http: Http) { 
  
}
retrieveList(){
  return this.http.get('http://localhost:3000/api/journal-entries')
    .map((res) => res.json())
}
}
