import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim='your perfect banking partner'

  acnt='enter your account number'

acno=''

pass=''
  userDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:10000},
    1001:{acno:1001,username:"anu",password:123,balance:20000},
    1002:{acno:1002,username:"joyal",password:123,balance:150000},
    1003:{acno:1003,username:"anaga",password:123,balance:100000},
  }

  constructor() { }

  ngOnInit(): void {
  }
// login(){
//   var acno=this.acno
//   var pass=this.pass
//   let userDetails=this.userDetails
//   if(acno in userDetails){
//     if(pass==userDetails[acno]['password']){
//       alert('login success')
//     }
//     else{
//       alert('incorrect password')
//     }

//   }
//   else{
//   alert('user not exist or incurrent ac number')
// }
// }
login(a:any,b:any){
  console.log(a.value);
  console.log(b.value);
  
  
  var acno=a.value
  var pass=b.value
  let userDetails=this.userDetails
  if(acno in userDetails){
    if(pass==userDetails[acno]['password']){
      alert('login success')
    }
    else{
      alert('incorrect password')
    }

  }
  else{
  alert('user not exist or incurrent ac number')
}
}
acnoChange(event:any){
  this.acno=event.target.value
}
passwordchange(event:any){
  this.pass=event.target.value
}
}
