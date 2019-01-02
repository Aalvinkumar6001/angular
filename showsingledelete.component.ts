import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-showsingledelete',
  templateUrl: './showsingledelete.component.html',
  styleUrls: ['./showsingledelete.component.css']
})
export class ShowsingledeleteComponent implements OnInit {
public bookId;
public book
  constructor(private route:ActivatedRoute,private _bookservice: BookserviceService) { }

  ngOnInit() {
     let id =parseInt(this.route.snapshot.paramMap.get('value'));//this id from url
      console.log(id)
      this.bookId=id;
      this._bookservice.getBooksById(id)
      .subscribe(data => this.book = data)
  }

}
