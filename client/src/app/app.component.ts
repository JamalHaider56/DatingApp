import { AccountService } from './services/account.service';
import { User } from './models/user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http : HttpClient, private accountService : AccountService){

  }
  users : any
  ngOnInit(): void {
  this.getUser()
  this.setCurrentUser()
  }

  getUser(){
    this.http.get("http://localhost:5053/api/users").subscribe(response =>{
      this.users= response
          }, error=>{
            console.log(error)
          })
  }

  setCurrentUser(){
const user : User = JSON.parse(localStorage.getItem("user"));
this.accountService.setCurrentUser(user)
  }
  title = 'client';
}
