import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {
  @Input() recieveBookList: any;
  
  constructor(private route:Router,private dataService:DataService) { }

  ngOnInit(): void {  }
  onclick(book:any){ 
    this.dataService.SendBookDetails(book)
    this.route.navigateByUrl('/home/details')   
  }
}
