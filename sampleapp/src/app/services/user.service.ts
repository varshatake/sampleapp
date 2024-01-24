import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userurl = "https://jsonplaceholder.typicode.com/users";
  constructor(private _httpclient :HttpClient) { }

  getuser():Observable<any> {
    return this._httpclient.get(this.userurl);
  }
}
