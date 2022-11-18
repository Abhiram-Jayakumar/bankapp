import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  acon:any
  transaction:any

  constructor(private router:Router,private ds:DataService) {

   this.acon=JSON.parse(localStorage.getItem('currentUser') || '')

  this.ds.getTransaction(this.acon).subscribe((result: any) => {
this.transaction=result.transaction
  },
      result => {
        alert(result.error.message)
      }
    )
  }
  ngOnInit(): void {
  }
//transaction button home
home(){
  this.router.navigateByUrl('dashboard')

}
}
