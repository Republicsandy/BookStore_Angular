import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = 'https://bookstore.incubation.bridgelabz.com';
  // https://bookstore.incubation.bridgelabz.com/bookstore_user/login
  constructor(private httpclient: HttpClient) {}

  postService(
    url: string,
    reqData: any,
    token: boolean = false,
    httpOptions: any
  ) {
    return this.httpclient.post(
      this.baseUrl + url,
      reqData,
      token && httpOptions
    );
  }
  getService(url: string, token: boolean = true, httpOptions: any) {
    return this.httpclient.get(this.baseUrl + url, token && httpOptions);
  }
  putService(
    url: string,
    reqData: any,
    token: boolean = true,
    httpOptions: any
  ) {
    return this.httpclient.put(
      this.baseUrl + url,
      reqData,
      token && httpOptions
    );
  }
  deleteService(url: string, token: boolean = true, httpOptions: any) {
    return this.httpclient.delete(this.baseUrl + url, token && httpOptions);
  }
  patchService() {}
}
