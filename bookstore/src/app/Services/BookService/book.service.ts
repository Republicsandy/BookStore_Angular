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
}
