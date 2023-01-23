import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BookService } from 'src/app/Services/BookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {
  BookList:any=[]
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity:any
  price: any;
  id: any;
  Search='';
  Feedback=[];
  bookDiscription:any;
  bookTitle:any;
  bookId:any
  recieveBookList:any
  
  constructor(private route:Router,private dataService:DataService,private book:BookService) { }

  ngOnInit(): void { this.getAllBook(); 

    this.dataService.getBookDetails.subscribe((res:any)=>{
      console.log(res);
      
      this.Search=res;
    })
  }

  onclick(book:any){ 
    this.dataService.SendBookDetails(book)
    this.route.navigateByUrl('/home/quick') 
    localStorage.setItem("BookId" ,book._id)
    localStorage.setItem("bookDiscription" ,book.description)
    localStorage.setItem("bookName" ,book.bookName)
    localStorage.setItem("bookdprice" ,book.discountPrice)
    localStorage.setItem("bookprice" ,book.price)
    localStorage.setItem("bookAuthor" ,book.author)
  }

  getAllBook(){
    this.book.getAllBook().subscribe((res:any)=>{
      this.BookList=res.result;
      console.log(res);
      localStorage.setItem('setlocalStorage',res.result)
      })
  }

  lowtohigh(){
    this.BookList= this.BookList.sort((low:any,high:any)=> low.discountPrice-high.discountPrice); 
    }
  hightolow(){
    this.BookList= this.BookList.sort((low:any,high:any)=> high.discountPrice-low.discountPrice);
  }
  newestarrivals(){
    this.BookList.reverse();
  }
}
