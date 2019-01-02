import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { NgForm } from '@angular/forms';

import { Book } from '../Book';
import { IBooks } from '../bookmodel';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  mybook=true;
  mysubject=false;
  // bookModel: Book= new Book();

  ngOnInit() {
  }
  //bookModel:IBooks={userId:null,id:null, title:'',body:''}
   constructor(private _bookservice:BookserviceService ) {}
  //customer: Customer = { name: '', age: 0, address: { street: '', postcode: '' } };


//   onSubmit(data) {
//     //console.log(data.value)
// this.bookModel=data
//    console.log(this.bookModel)
//     this._bookservice.addbook(this.bookModel)
//       .subscribe(
//         response => console.log('Success!', response),
       
//       )
//       this.bookModel.userId=null
//       this.bookModel.id=null;
//       this.bookModel.title=""
//       this.bookModel.body=""
//   }
onSelectsubject(){
  this.mybook=false;
this.mysubject=true;
}
onSelectbook(){
this.mysubject=false;
this.mybook=true;
}
}