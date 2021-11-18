import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MyServiceService } from 'src/app/shared/my-service.service';
import { UserDetailsComponent } from '../user-details/user-details.component';


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

  constructor(public myDialog: MatDialog ,private servie:MyServiceService) { 
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
userDetails(id:any){
const dialogConfig = new MatDialogConfig()
  
dialogConfig.height='800px'
dialogConfig.width='1400px'
dialogConfig.data={customerID:id}
const DialogRef=this.myDialog.open(UserDetailsComponent,dialogConfig)

}


searchinCustomer(){
  this.appendJs()
}
  
  
}
