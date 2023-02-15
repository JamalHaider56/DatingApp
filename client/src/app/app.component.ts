import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http : HttpClient){

  }
  users : any
  ngOnInit(): void {
    this.http.get("http://localhost:5053/api/users").subscribe(response =>{
this.users= response
    }, error=>{
      console.log(error)
    })
  }
  title = 'client';
}
