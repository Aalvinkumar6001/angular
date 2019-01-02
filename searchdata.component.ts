import { Component, OnInit,Input } from '@angular/core';
import { IBooks } from '../bookmodel';
import { BookserviceService } from '../bookservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchdata',
  templateUrl: './searchdata.component.html',
  styleUrls: ['./searchdata.component.css']
})
export class SearchdataComponent implements OnInit {

  public userId;
  public book;
    constructor(private route:ActivatedRoute,private _bookservice: BookserviceService) { }
  
    ngOnInit() {
      let id =parseInt(this.route.snapshot.paramMap.get('userId'));//this id from url
        this.userId=id;
        this._bookservice.getBooksById(this.userId)
        .subscribe(data => this.book = data)
       
  
    }
}
