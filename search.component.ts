import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { BookserviceService } from '../bookservice.service';
import { Book } from '../Book';
import { Observable } from 'rxjs';
import { IBooks } from '../bookmodel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
public value=null;
public books;


constructor( private router: Router,private _bookservice: BookserviceService) { }
  onEnter(value) 
  { 
    this.value = value;
    console.log(value)
    
      this.router.navigate(['/searchdata',this.value])//employee is corespond to single instance employees in html
this.value=null
   } 

   ngOnInit() {
    
    
  }

}
