import { HttpClient, HttpHeaders } from '@angular/common/http';
<<<<<<< HEAD
import { Injectable } from '@angular/core';
=======

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
<<<<<<< HEAD

  constructor(private http:HttpClient) { }

=======
  apiUrl='https://localhost:44391/api/'
  display_image:any
  constructor(private http:HttpClient) { }

  uploadAttachment(file:FormData){
    debugger
    const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
    const requestOptions = {
    headers: new HttpHeaders(headerDict),
    };
    this.http.post(this.apiUrl +'Customer/uploadImage',file).subscribe((data: any) => {
    this.display_image=data.image;
    debugger
    if(data){
    console.log(data);}
    }, err => {
    
    })
    }

>>>>>>> 048ae54e6b5b60e09e99d51de3128034f7138945
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