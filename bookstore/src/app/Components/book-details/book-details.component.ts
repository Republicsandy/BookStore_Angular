import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  @Input() recieveBookList: any;
  Book: any
  constructor(private book: BookService, private dataService: DataService) {
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
