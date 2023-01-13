import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  @Output() RefreshEvent = new EventEmitter<string>();
  BookList = []
  Book: any
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
  constructor(private book: BookService, private dataService: DataService) {
  }
  cart() {
    let Book = {
      product_id: this.Book._id,
    }
    console.log(Book)
    this.book.addCart(Book).subscribe((res: any) => {
      console.log(res)
      this.RefreshEvent.emit(res)
    })
  }
  
  wish() {
    let Book = {
      product_id: this.Book._id,
    }
    console.log(Book)
    this.book.addWish(Book).subscribe((res: any) => {
      console.log(res)
    })
  }

  

}
