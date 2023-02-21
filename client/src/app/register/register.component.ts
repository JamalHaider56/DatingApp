import { AccountService } from './../services/account.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private accountService: AccountService){

  }

  model :any = {};
@Output() cancelRegister = new EventEmitter()
  register(){
console.log(this.model)
  }

  registerUser(){
this.accountService.registerUser(this.model).subscribe(response =>{
console.log(response)
this.cancel()
})
  }

  cancel(){
this.cancelRegister.emit(false);
  }
}
