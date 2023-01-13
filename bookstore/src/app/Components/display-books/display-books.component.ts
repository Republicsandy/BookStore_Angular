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
  // @Input() recieveBookList: any;
  BookList:any=[]
  bookName:any
  
  constructor(private route:Router,private dataService:DataService,private book:BookService) { }

  ngOnInit(): void { this.getAllBook(); }

  onclick(book:any){ 
    this.dataService.SendBookDetails(book)
    this.route.navigateByUrl('/home/details')   
  }


  getAllBook(){
    this.book.getAllBook().subscribe((res:any)=>{
      console.log(res);
      this.BookList=res.result;
      console.log(this.BookList);
      })
  }
}
