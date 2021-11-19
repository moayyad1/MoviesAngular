import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  apiUrl='https://localhost:44391/api/'
  display_image:any
  constructor(private http:HttpClient) { }

  uploadAttachment(file:FormData){
    const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
    const requestOptions = {
    headers: new HttpHeaders(headerDict),
    };
    this.http.post(this.apiUrl +'Customer/uploadImage',file).subscribe((data: any) => {
    this.display_image=data.image;
    
    if(data){
    console.log(data);}
    }, err => {
    
    })
    }

    uploadMovieImage(file:FormData){
      const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };
      this.http.post(this.apiUrl +'Movie/uploadVideoImage',file).subscribe((data: any) => {
        console.log("image Uploaded: "+data);
      
      if(data){
      console.log(data);}
      }, err => {
      
      })
      }
  
      uploadAccountantImage(file:FormData){
        const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
        const requestOptions = {
        headers: new HttpHeaders(headerDict),
        };
        this.http.post(this.apiUrl +'Accountant/uploadAccountantImage',file).subscribe((data: any) => {
          console.log("image Uploaded: "+data);
        
        if(data){
        console.log(data);}
        }, err => {
        
        })
        }
    

    uploadMovie(file:FormData){
      const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
      const requestOptions = {
      headers: new HttpHeaders(headerDict),
      };
      this.http.post(this.apiUrl +'Movie/uploadVideo',file).subscribe((data: any) => {
     
      
      if(data){
      console.log("vidoer Uploaded: "+data);}
      }, err => {
      
      })
      }

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