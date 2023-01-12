import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {
  BookList=[]
  constructor(private book:BookService) { }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook(){
    this.book.getAllBook().subscribe((res:any)=>{
      console.log(res);
      this.BookList=res.result;
      console.log(this.BookList);
      })
  }
}
