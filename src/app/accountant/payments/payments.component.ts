import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgxPrintModule} from 'ngx-print';
import { MyServiceService } from 'src/app/shared/my-service.service';
import * as XLSX from 'xlsx';
import  jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  paymentList:any=[]
searchList:any=[]
startDate:Date=new Date
endDate:Date=new Date
searchValue=''
fileName=''//this will be used to name the file when eporting PDF/Excel


  constructor(private myService:MyServiceService,private printer:NgxPrintModule) {


    myService.requestCall("https://localhost:44391/api/payment/getPayment","Get")?.subscribe(data=>{
      
    this.paymentList=data

    this.paymentList.forEach((element:any) => {
      let value:any =new Date(element.time)
      let year = value.getFullYear()
      let month = value.getMonth()+1
      let day = value.getDate()
      let fullDate = month+'-'+day+'-'+year
      element.time=fullDate
      console.warn(new Date(fullDate));
      
       
       

      this.myService.requestCall("https://localhost:44391/api/Customer/GetCustomerById/"+element.customerId,'Get')?.subscribe(data=>{
        element.firstName=data.firstName
      
    
      })
    
      
    });
    this.paymentList.forEach((element:any) => {
      element.movieName='ree'
      this.myService.requestCall("https://localhost:44391/api/Movie/GetMovieByID/"+element.movieId,'Get')?.subscribe(data=>{
        element.movieName=data.name
        this.searchList=this.paymentList
      })
    
      
    });
  })
  
 
   }

  ngOnInit(): void {
  }

//resetting the list to be the exact same as its from API
resetSearch()
{
  this.searchList=this.paymentList
  this.searchValue=''
  this.startDate=new Date()
  this.endDate=new Date()
}

//searhcing in list 
  searchInTable(formData:NgForm){
    this.searchList=this.paymentList
    let mylist:any=[]
    let value =(formData.value.textName)
    if(value=='')
    {
      this.searchList=this.paymentList
    }
    else
    {
     this.searchList.forEach((x:any) => {
       if(x.firstName.toLowerCase() ==value.toLowerCase()  ||x.customerId==value|| x.time==value ||x.movieName.toLowerCase() ==value.toLowerCase() ||x.movieId==value||x.value==value||x.id==value){
       mylist.push(x)
       }
    });
    this.searchList=mylist
  }
    
    
  }
  findbetweenDate(){
    this.searchList=this.paymentList
    this.searchValue=''

    this.searchList.forEach((element:any) => {
      element.newDate = new Date(element.time)
       });

  console.warn(this.startDate+'/  '+this.endDate);
 let list:any=[]
    this.searchList.filter((m:any) => {
     
      if(new Date(this.startDate)<=new Date(m.time) && new Date(this.endDate)>= new Date(m.time))
      {
        list.push(m)
      }
  });

  this.searchList=list
  

 


  }

  exportexcel(): void
  {
    this.fileName='PaymentRecords.xlsx'
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
   
  }

  
  generatePDF() {
    let data :any = document.getElementById('print-section');
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      var pdf = new jspdf();
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('newPDF.pdf');
    });
  }
}
