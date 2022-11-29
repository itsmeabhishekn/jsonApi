import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  passengerData = ()=>{
    return this.http.get('https://api.instantwebtools.net/v1/passenger?page=0&size=30')
  }
  usPublicData = ()=>{
    return this.http.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
  }
  userInfoData = ()=>{
    return this.http.get('https://reqres.in/api/users?page=1')
    
  }
  productData = ()=>{
    return this.http.get('https://dummyjson.com/products')
  }
  userData = ()=>{
    return this.http.get('https://dummyjson.com/users')
  }
  todoData = ()=>{
    return this.http.get('https://dummyjson.com/todos')
  }
  quotesData = ()=>{
    return this.http.get('https://dummyjson.com/quotes')
  }

  petsData = () => {
    return this.http.get('https://api.publicapis.org/entries')
  }

}