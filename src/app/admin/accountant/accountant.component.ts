import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MyServiceService } from 'src/app/shared/my-service.service';
import { UploadMovieComponent } from '../upload-movie/upload-movie.component';
import { UploadeAccountantComponent } from '../uploade-accountant/uploade-accountant.component';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
})
export class AccountantComponent implements OnInit {
  Accountant:any=[{}];
  constructor(public myDialog:MatDialog,private servie: MyServiceService,private spinner:NgxSpinnerService,private toaster:ToastrService) {
    
   }

  ngOnInit(): void {
    this.getAccountant();
  }

  getAccountant(){
    this.spinner.show();
    this.servie
    .requestCall(
      'https://localhost:44391/api/Accountant/GetAccountant',
      'Get'
    )
    ?.subscribe((data) => {

      setTimeout(() => {
        this.spinner.hide();
      }, 1500);

      this.Accountant = data;
      

      this.spinner.hide();
    });
  }
  Update(){
    const dialogvar= this.myDialog.open(UploadMovieComponent, {  
       height: '700px',  
       width: '1400px',  
     })
}
Upload(){
  const dialogvar= this.myDialog.open(UploadeAccountantComponent, {  
     height: '700px',  
     width: '700px',   
   }
   )
   dialogvar.afterClosed().subscribe(()=> this.getAccountant());
}

Delete(id:any){
  this.servie.requestCall("https://localhost:44391/api/Accountant/DeleteAccountant/"+id,"Delete")?.subscribe(
      (data) => {
        setTimeout(() => {
          this.spinner.hide();
        }, 1500);
        this.getAccountant()
        this.toaster.success('Deleted successfully');
      },
      (err) => {
        setTimeout(() => {
          this.spinner.hide();
        }, 1500);
       this.toaster.error('Error While Deleting')
      }
    );
  
 }
}