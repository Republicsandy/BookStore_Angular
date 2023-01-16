import { Component } from '@angular/core';
import { BookService } from 'src/app/Services/BookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity:any
  price: any;
  id: any;
  product_name:any;
  BookList:any=[]
  totalLength:any;
  constructor(private book:BookService,private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getBookDetails.subscribe((res:any)=>{
      console.log(res)

    })
  }

}
