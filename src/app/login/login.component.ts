import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = 'your perfect banking partner'

  acnt = 'enter your account number'

  acno = ''

  pass = ''

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pass: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9@]+')]]
  })


  constructor(private fb: FormBuilder, private router: Router, private ds: DataService) { }  //  access  specifier can be set to public and private    if we dont set it  it will be  public   (if we set private ( private router:Router) )

  ngOnInit(): void {
  }
  login() {
    var acno = this.loginForm.value.acno
    var pass = this.loginForm.value.pass
    if (this.loginForm.valid) {
      this.ds.login(acno, pass).subscribe((result: any) => {
        localStorage.setItem('currentUser',JSON.stringify(result.currentUser))        
        localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
        localStorage.setItem('token',JSON.stringify(result.token))


        alert(result.message)
        this.router.navigateByUrl('dashboard')
      },
        result => {
          alert(result.error.message)
        }
      )
    }
    else {
      alert('enter in valid format')
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
  acnoChange(event: any) {
    this.acno = event.target.value
    console.log(this.acno);

  }
  passchange(event: any) {
    this.pass = event.target.value
    console.log(this.pass)

  }

}
