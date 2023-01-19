import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  token: any;
  accessToken: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
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
  addWish(Book: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token,
      }),
    };
    return this.httpService.postService(
      '/bookstore_user/add_wish_list/' + Book.product_id,
      Book,
      true,
      header
    );
  }
  getWishBook(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.getService("/bookstore_user/get_wishlist_items",true, header)
  }
  removeItem(Book:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.deleteService("/bookstore_user/remove_cart_item/"+Book, true, header)
  }

  removeWish(Book:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.deleteService("/bookstore_user/remove_wishlist_item/"+Book, true, header)
  }

  getCartBook() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token,
      }),
    };
    return this.httpService.getService(
      '/bookstore_user/get_cart_items',
      true,
      header
    );

    //https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items
  }

  order(Book:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService("/bookstore_user/add/order", Book, true, header)
  }

  quantity(bookId:any,req:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.putService("/bookstore_user/cart_item_quantity/"+bookId, req, true, header)
  }



}
