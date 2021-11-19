import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MyServiceService } from 'src/app/shared/my-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  customerID:any
  customer:any
  customerMovies:any=[] 
  customerComments:any=[]
MoiveList:any=[]
  
   constructor(private toast:ToastrService,private spinner:NgxSpinnerService, @Inject(MAT_DIALOG_DATA) public DialogData: any,private service:MyServiceService ,public myDialog:MatDialog) { 
      this.customerID=DialogData.customerID
      service.requestCall("https://localhost:44391/api/Customer/GetCustomerById/"+this.customerID,"Get")?.subscribe(data=>{this.customer=data})
      service.requestCall("https://localhost:44391/api/Payment/GetPayment","Get")?.subscribe(data=>{
  
     data.forEach((element:any) => {
      if(element.customerId==this.customerID)
      {
        this.customerMovies.push(element)
      }
     });
      })

      service.requestCall("https://localhost:44391/api/Movie/getMovie","Get")?.subscribe(data=>{

        data.forEach((element:any) => {
            this.customerMovies.forEach((customer:any) => {
                if(element.id == customer.movieId){
                    customer.movieName=element.name;
                    console.warn(customer.movieName);
                    
                }
            });
        });
      })


  
    
    
             
    
      service.requestCall("https://localhost:44391/api/Comments/GetComments","Get")?.subscribe(data=>{
        let count= 0 
       
           data.forEach((element:any) => {
              if(element.customerId==this.customerID){
                count++
                this.customerComments.push(element)
              }
           });
  
           this.customer.commentsCount=count
         
      })
      console.warn(this.customerMovies);
      
      this.appendJs()
  
    }
  
  
    appendJs(){
      var myScriptFile:HTMLScriptElement;
       myScriptFile=document.createElement("script")
       myScriptFile.src="../../../../assets/jsFile/cardUser.js"
       document.body.appendChild(myScriptFile)
      }
  
      deleteComment(id:any){
        this.service.requestCall("https://localhost:44391/api/Comments/DeleteComments/"+id,"Delete")?.subscribe(
         data=>{   this.toast.success("Comment Deleted Successfully!")}
        )
     
      }
    ngOnInit(): void {
    }
  
}
