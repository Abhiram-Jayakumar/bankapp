import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any
  currentAcno:any

  userDetails: any = {
    1000: { acno: 1000, username: "amal", password: 123, balance: 10000,transaction:[] },
    1001: { acno: 1001, username: "anu", password: 123, balance: 20000,transaction:[] },
    1002: { acno: 1002, username: "joyal", password: 123, balance: 150000,transaction:[] },
    1003: { acno: 1003, username: "anaga", password: 123, balance: 100000,transaction:[] },
  }


  constructor() { }
  register(acno: any, username: any, password: any) {
    let userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    }
    else {
      userDetails[acno] = { acno, username, password, balance: 0 }
      console.log(userDetails);

      return true
    }
  }
  login(acno: any, pass: any) {
    let userDetails = this.userDetails
    if (acno in userDetails) {
      if (pass == userDetails[acno]['password']) {
        this.currentUser=userDetails[acno]['username']
        this.currentAcno=acno
        return true
      }
      else {
        alert('incorrect password')
        return false
      }

    }
    else {
      alert('user not exist or incurrent ac number')
      return false
    }
  }
deposit(acno:any,pass:any,amnt:any){
  let userDetails=this.userDetails
  var amount=parseInt(amnt) // convert string input data
  if(acno in userDetails){
    if(pass==userDetails[acno]['password']){
    userDetails[acno]['balance']+=amount
    userDetails[acno]['transaction'].push({type:'CREDIT',amount})
    return userDetails[acno]['balance']
  }
  else{
    alert('incorrect password')
  }
  }
  else{
    alert('user not exist')
    return false
  }
}
withdraw(acno:any,pass:any,amnt:any){
  let userDetails=this.userDetails
  var amount=parseInt(amnt) // convert string input data
  if(acno in userDetails){
    if(pass==userDetails[acno]['password']){
      if(userDetails[acno]['balance']>=amnt){
    userDetails[acno]['balance']-=amount
    userDetails[acno]['transaction'].push({type:'DEBIT',amount})

    return userDetails[acno]['balance']
  }
  else{
    alert('insufficient balance')
    return false
  }
  }
  else{
    alert('incorrect password')
  }
  }
  else{
    alert('user not exist')
    return false
  }
}


getTransaction(acno:any){
 return this.userDetails[acno]['transaction']
}

}
