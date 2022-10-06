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

   this.acon= this.ds.currentAcno
   this.transaction= this.ds.getTransaction(this.acon)
   console.log(this.transaction);
   
   }

  ngOnInit(): void {
  }
//transaction button home
home(){
  this.router.navigateByUrl('dashboard')

}
}
