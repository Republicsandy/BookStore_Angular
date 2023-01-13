import { Component } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  BookList = []
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

  constructor(private dataService: DataService, private book: BookService) { }


  getCartBook(){
    this.book.getCartBook().subscribe((res:any)=>{
      console.log(res);
      this.BookList=res.result;
      console.log(this.BookList);
      localStorage.setItem('badgeCount',res.result.length)
      })
  }
}
