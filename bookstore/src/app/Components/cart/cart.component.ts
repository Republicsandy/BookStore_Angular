import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/BookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  BookList:any= []
  Book: any
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity: any
  price: any;
  _id: any;
  length: any;
  fullName: any
  isShow = false;
  address = true;
  placeorder = true;
  cont = true;
  summary = true;
  Books: any
  item_qty = 1;
  quentitySend:any

  constructor(private dataService: DataService, private book: BookService,private route:Router) { }
  ngOnInit(): void {
    // this.quentitySend=this.BookList.quantityToBuy
    // console.log(this.quentitySend);
    this.getCartBook()
  }
  deleteItem(Book: any) {
    console.log(Book)
    this.book.removeItem(Book).subscribe((res: any) => {
      this.getCartBook()
    })
  }

  addressBar() {
    this.address = false
    this.placeorder = false
  }

  continueBar() {
    this.summary = false
    this.cont = false
  }

  placeOrder() {
    let orders: Array<any> = []
    for (this.Books of this.BookList) {
      let Book = {
        product_id: this.Books.product_id._id,
        product_name: this.Books.product_id.bookName,
        product_quantity: this.Books.product_id.quantity,
        product_price: this.Books.product_id.price,
      }
      orders.push(Book)
    }
    let payload = {
      orders: orders
    }
    console.log(payload)
    this.book.order(payload).subscribe((res: any) => {
    })
this.route.navigateByUrl('home/order')
  }
  getCartBook(){
    this.book.getCartBook().subscribe((res:any)=>{
      this.BookList=res.result;
      localStorage.setItem('badgeCount',res.result.length)
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
    let payload={
      quantityToBuy: this.item_qty
    }
    this.book.quantity(Book._id,payload).subscribe((res:any)=>{
      this.getCartBook()
    })
  }
}
