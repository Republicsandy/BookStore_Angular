import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/BookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() RefreshEvent = new EventEmitter<string>();
  BookList = []
  Book: any
  
cartValue=true;
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity: any
  price: any;
  _id: any;
  array: any;
  Feedback = [];
  BookId: any;
  constructor(private book: BookService, private dataService: DataService ,private route: Router,) { 
    
  }
  
  ngOnInit(): void {
  }

  cart() {
   
  
     this.route.navigateByUrl('/home/cart')
  }

}
