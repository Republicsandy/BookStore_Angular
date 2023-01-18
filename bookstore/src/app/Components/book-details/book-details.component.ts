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
  quantityToBuy:any;
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
  item_qty:number = 1;
  bookDiscription:any;
  bookTitle:any;
  bookId:any;
  bookPrice:any;
  bookDiscountPrice:any
  bookAuthor:any
  product_id:any

  constructor(private dataService: DataService, private book: BookService,private route:Router) {localStorage.getItem('BookId') }
  ngOnInit(): void {
    this.BookId = localStorage.getItem("BookId");
    this.bookDiscription = localStorage.getItem(("bookDiscription"));
    this.bookName = localStorage.getItem(("bookName"));
    this.bookPrice = localStorage.getItem(("bookprice"));
    this.bookDiscountPrice = localStorage.getItem(("bookdprice"));
    this.bookAuthor = localStorage.getItem(("bookAuthor"));
    this.dataService.getBookDetails.subscribe((res: any) => {
      this.Book = res;
    });
    this.getCartBook();
  }
 
  getCartBook() {
    this.book.getCartBook().subscribe((res: any) => {
      this.CartList = res.result;
      console.log(this.CartList);
      
      localStorage.setItem('badgeCount',res.result.length);
    });
  }
  wish() {
    let Book = {
      product_id: localStorage.getItem("BookId")
    };
    console.log(this.product_id);
    this.book.addWish(this.BookId).subscribe((res: any) => {
      this.RefreshEvent.emit(res);
    });
    this.route.navigateByUrl('/home/wish');
  }
  cartAdd() {
    this.cartValue = false;
  }
  cart() {
    let book = {
      product_id: this.Book._id,
    }
    console.log(this.book)
    this.book.addCart(book).subscribe((res: any) => {
      console.log(res)
      this.RefreshEvent.emit(res)
    })
  }
  bookPlusCount(Book:any){
    this.item_qty = Book.quantityToBuy;
    this.item_qty += 1;
    console.log("increased",this.item_qty);
    this.updateCount(Book);

  }
  bookMinusCount(Book:any){
    this.item_qty = Book.quantityToBuy;
    if (this.item_qty > 0) {
      this.item_qty -= 1;
      console.log( "decrease", this.item_qty);
      this.updateCount(Book);
    }
  }
   updateCount(Book:any){
    this.BookId = localStorage.getItem("BookId");
    let payload={
      quantityToBuy: this.item_qty
    }
    this.book.quantity(this.BookId,payload).subscribe((res:any)=>{
      console.log();
      
    })
  }
  
}
