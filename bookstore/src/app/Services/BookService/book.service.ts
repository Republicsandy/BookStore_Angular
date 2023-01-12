import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  token: any;
  accessToken: any;

  constructor(private httpService:HttpService) {
    this.token=localStorage.getItem('token')
   }
  getAllBook(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.getService("/bookstore_user/get/book",true, header)
  }

  addCart(Book:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService("/bookstore_user/add_cart_item/"+Book.product_id, Book, true, header)
  }
  addWish(Book:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService("/bookstore_user/add_wish_list/"+Book.product_id, Book, true, header)
  }
}
