import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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

  constructor(private router:Router,private ds:DataService) { }  //  access  specifier can be set to public and private    if we dont set it  it will be  public   (if we set private ( private router:Router) )

  ngOnInit(): void {
  }
login(){
  var acno=this.acno
  var pass=this.pass
const result=this.ds.login(acno,pass)
if(result){
  alert('login success')
  this.router.navigateByUrl('dashboard')
}
}

// login(a:any,b:any){
//   console.log(a.value);
//   console.log(b.value);
  
  
//   var acno=a.value
//   var pass=b.value
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
acnoChange(event:any){
  this.acno=event.target.value
  console.log(this.acno);
  
 }
 passchange(event:any){
   this.pass=event.target.value
   console.log(this.pass)

 }

}