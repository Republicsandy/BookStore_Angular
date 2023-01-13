import { Component } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity:any
  price: any;
  product_id:any;
  BookList=[]
  Book:any
  _id:any;
  length:any;
  constructor(private dataService:DataService,private book:BookService) { }

  ngOnInit(): void {
    this.getWishBook();
  }
  getWishBook(){
    this.book.getWishBook().subscribe((res:any)=>{
      console.log(res);
      this.BookList=res.result;
      console.log(this.BookList);
      })
  }
  deleteItem(Book:any){
    console.log(Book)
    this.book.removeWish(Book).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
