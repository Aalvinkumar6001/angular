import { Component, OnInit } from '@angular/core';
import { Subject } from '../Subject';
import { BookserviceService } from '../bookservice.service';
import { Book } from '../Book';

@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {
public subjectModel :Subject = new Subject();
 public books;
 public booksarray= [];
 public errorMsg;
 //map = new Map<String, String>();
  mySet = new Set();
  constructor(private _bookservice: BookserviceService) {
    //this.booksarray=Array.from(this.books.values());
   }

  ngOnInit() {
    this._bookservice.getBooks()
    .subscribe(data => this.booksarray = data,
      error => this.errorMsg = error);
      
  }
  onSubmit(data) {
    
    //console.log(data.value)
this.subjectModel=data
   console.log(this.subjectModel)
     this._bookservice.addsubject(this.subjectModel)
      .subscribe(
        response => console.log('Success!', response),
      )
      console.log(this.subjectModel.references)
    
  }

}
