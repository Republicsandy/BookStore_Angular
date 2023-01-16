import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/BookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  @Output() RefreshEvent = new EventEmitter<string>();
  BookList:any= []
  Book: any;
  CartList: any = [];
  quantityToBuy: any;
  cartValue = true;
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity: any;
  price: any;
  _id: any;
  array: any;
  Feedback = [];
  BookId: any;
  item_qty = 1;
  constructor(private dataService: DataService, private book: BookService,private route:Router) { }
  ngOnInit(): void {
    this.dataService.getBookDetails.subscribe((res: any) => {
      this.Book = res;
    });
    
    this.getCartBook();
  }
 
  getCartBook() {
    this.book.getCartBook().subscribe((res: any) => {
      this.CartList = res.result;
      localStorage.setItem('badgeCount', res.result.length);
    });
  }
  wish() {
    let Book = {
      product_id: this.Book._id,
    };
    this.book.addWish(Book).subscribe((res: any) => {
      this.RefreshEvent.emit(res);
    });
    this.route.navigateByUrl('/home/wish');
  }
  cartAdd() {
    this.cartValue = false;
  }
  bookPlusCount(Book:any){
    this.item_qty = Book.quantityToBuy;
    this.item_qty += 1;
    console.log("increased",this.item_qty);
    this.updateCount(Book);
  }
  bookMinusCount(Book:any){
    this.item_qty =Book.quantityToBuy;
    if (this.item_qty > 0) {
      this.item_qty -= 1;
      console.log( "decrease", this.item_qty);
      this.updateCount(Book);
    }
  }
   updateCount(Book:any){
    let payload={
      quantityToBuy: this.item_qty
    }
    this.book.quantity(Book._id,payload).subscribe((res:any)=>{
    })
  }
  
}
