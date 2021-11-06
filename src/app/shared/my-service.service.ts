import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { }

  requestCall(apiUrl:string , method:string,Data?:any){

    let respons;
    switch(method)
    {
      case 'Get':{
        respons=this.http.get<any>(apiUrl)
        break;
      }
        case 'Post':{
        respons=this.http.post(apiUrl,Data)
        break;

      }
      case 'Put':{
        respons=this.http.put(apiUrl,Data)
        break;
      }
      case 'Delete':{
        respons=this.http.delete(apiUrl,Data)
        break;
      }

    }
    return respons
  }
}