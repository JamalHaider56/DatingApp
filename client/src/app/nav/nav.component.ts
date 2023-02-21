import { ToastrModule, ToastrService } from 'ngx-toastr';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private accountService: AccountService, private router : Router, private toaster: ToastrService) {

  }
  model: any = {}
  loggedIn = false

  // when we use asyn pipe start
  currentUser$: Observable<User>;
  // when we use asyn pipe end

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
    // this.setCurrentUser()
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members');
      console.log(response)
      // this.loggedIn = true
    }, error => {
    this.toaster.error(error.error)
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
    // this.loggedIn = false
  }

  // setCurrentUser(){
  //   this.accountService.currentUser$.subscribe(user => {

  //     this.loggedIn = !! user
  //     },error => {
  //       console.log(error)
  //     })
  // }
}
