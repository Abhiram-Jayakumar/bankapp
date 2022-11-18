import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user = ""

  // acnum = ""
  // pswrd = ""
  // amnt = ""

  // acnum1 = ""
  // pswrd1 = ""
  // amnt1 = ""
  acno:any

  dashbordForm = this.fb.group({
    acnum: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]],

    acnum1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    amnt1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pswrd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9@]+')]],
    pswrd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9@]+')]]
  })
  depositForm: any;
  sDEtails: any;

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) {
    if(localStorage.getItem('currentUser')){
    this.user = JSON.parse(localStorage.getItem('currentUser') || '')
    this.sDEtails=new Date()
  }
  
}

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      alert('please login first')
      this.router.navigateByUrl('')
    }
  }
  deposit() {
    var acnum = this.dashbordForm.value.acnum
    var pswrd = this.dashbordForm.value.pswrd
    var amnt = this.dashbordForm.value.amnt
    if (this.depositForm.valid) {
      this.ds.deposit(acnum, pswrd, amnt).subscribe((result: any) => {
        alert(result.message)
      },
        result => {
          alert(result.error.message)
        }
      )
    }
    else{
      alert('invalidform')
    }
  }
    withdraw(){
      var acnum1 = this.dashbordForm.value.acnum1
      var pswrd1 = this.dashbordForm.value.pswrd1
      var amnt1 = this.dashbordForm.value.amnt1
      if (this.depositForm.valid) {
        this.ds.deposit(acnum1, pswrd1, amnt1).subscribe((result: any) => {
          alert(result.message)
        },
          result => {
            alert(result.error.message)
          }
        )
      }
      else{
        alert('invalidform')
      }
      
      
    }
    logout(){
      localStorage.removeItem('currentUser')
      localStorage.removeItem('currentAcno')
      localStorage.removeItem('token')

      this.router.navigateByUrl('')
    }
    deleteconfirm(){
      this.acno=JSON.parse(localStorage.getItem('currentAcno')|| '')
    }

    oncancel(){
      this.acno=""
    }
    onDelete(event:any){
      this.ds.deleteAcc(event).subscribe((result:any)=>{
        alert(result.message)
        // this.router.navigateByUrl('')
        this.logout()
      },
        result=>{
          alert(result.error.message)
      })
    }
  }
