
import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { ActivatedRoute } from '@angular/router';

interface Single {
  title: string,
  date: Date,
  content: string
}

@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.css']
})
export class SingleComponentComponent implements OnInit {
single: Single

  constructor(public listSample : ListServiceService, private router : ActivatedRoute) {

   }

  ngOnInit() {
    this.router.params.subscribe(params => {
    this.listSample.retrieveSingle(params.id).subscribe(pepe => this.single = pepe)
    })
  }

}
