import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/shared/my-service.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
CustomerList:any=[]
searchList:any=[]
searchValue=''
search:any

  constructor(servie:MyServiceService) { 
   servie.requestCall("https://localhost:44391/api/Customer/getCustomer","Get")?.subscribe(data=>{
     
   this.CustomerList=data
   this.searchList=this.CustomerList
  })

  this.appendJs()

  }

  appendJs(){
  var myScriptFile:HTMLScriptElement;
   myScriptFile=document.createElement("script")
   myScriptFile.src="../../../../assets/jsFile/bubblyBtn.js"
   document.body.appendChild(myScriptFile)
  }
  ngOnInit(): void { 
   
   

}

searchinCustomer(){
  this.appendJs()
}
  
  customerDetail(){

    
    this.appendJs()
  }
}
