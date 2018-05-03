
import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { Observable } from 'rxjs/Observable'

interface List {
  title: string,
  date: Date
}

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})

export class EntryListComponent implements OnInit {
list: Array<List>

  constructor(public  listSample : ListServiceService) { }

 
  ngOnInit() {
   this.listSample.retrieveList().subscribe(entry => this.list = entry)
  }

}
