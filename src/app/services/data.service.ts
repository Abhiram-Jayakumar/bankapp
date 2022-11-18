import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options={
headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private  http:HttpClient){

  }

  register(acno: any, username: any, password: any) {
    const data={acno,username,password}
    return this.http.post('http://localhost:3000/register' ,data)
  }


  login(acno: any, pass: any) {
    const data={acno,pass}
    return this.http.post('http://localhost:3000/login' ,data)

  }
getToken(){
  //fetch token from local storage
  const token=JSON.parse(localStorage.getItem('token')||'')

  //1.append token inside headers
  //1.1 create header

  let headers=new HttpHeaders()
  // 1.2 append token to header
  if(token){
  options. headers=headers.append('token',token)

  }
  return options

}

deposit(acno:any,pass:any,amnt:any){
  const data={acno,pass,amnt}
    return this.http.post('http://localhost:3000/deposit' ,data,this.getToken())

}
withdraw(acno:any,pass:any,amnt:any){
  const data={acno,pass,amnt}
    return this.http.post('http://localhost:3000/withdraw' ,data,this.getToken())
}


getTransaction(acno:any){
  const data={acno}
  return this.http.post('http://localhost:3000/transaction' ,data,this.getToken())
}
deleteAcc(acno:any){
  return this.http.delete('http://localhost:3000/deleteacc/'+acno)
}

}
