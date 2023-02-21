import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "http://localhost:5053/api/"
  constructor(private httpClient: HttpClient) { }
  private currentUserSource = new ReplaySubject<User>(1)
  currentUser$ = this.currentUserSource.asObservable();

  login(model: any) {
    return this.httpClient.post(this.baseUrl + 'account/login', model).pipe(
      map((resp: User) => {
        const user = resp
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user)
        }
      })
    );
  }

  registerUser(model: any) {
    return this.httpClient.post(this.baseUrl + 'account/register', model).pipe(
      map((user: User) => {

        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user)
        }
        return user
      })
    );
  }
  setCurrentUser(user: User) {
    this.currentUserSource.next(user)
  }

  logout() {
    localStorage.removeItem('user')
    this.currentUserSource.next(null)
  }
}
