import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  public bookModel: Book= new Book()
  constructor(private _bookservice: BookserviceService) { 
    
  }

  ngOnInit() {
  }
  onSubmit(data) {
    //console.log(data.value)
this.bookModel=data
   console.log(this.bookModel)
     this._bookservice.addbook(this.bookModel)
      .subscribe(
        response => console.log('Success!', response),
      )
      this.bookModel.bookId=null
      this.bookModel.title="";
      this.bookModel.price=null;
      this.bookModel.volume=null;
      this.bookModel.publishDate;
  }
}
