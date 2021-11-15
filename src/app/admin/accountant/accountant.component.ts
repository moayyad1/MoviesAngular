import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { MyServiceService } from 'src/app/shared/my-service.service';
import { UpdateAccountantComponent } from '../update-accountant/update-accountant.component';
import { UploadMovieComponent } from '../upload-movie/upload-movie.component';
import { UploadeAccountantComponent } from '../uploade-accountant/uploade-accountant.component';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
})
export class AccountantComponent implements OnInit {
  Accountant:any=[{}];
  constructor(public myDialog:MatDialog,private servie: MyServiceService,private spinner:NgxSpinnerService,private toaster:ToastrService,private IdService:MovieServiceService) {
    
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
  Update(id:any){
    this.IdService.accountantId = id;
    const dialogvar= this.myDialog.open(UpdateAccountantComponent, {  
      height: '800px',  
      width: '1000px',   
     })
     dialogvar.afterClosed().subscribe(()=> this.getAccountant());
}
Upload(){
  const dialogvar= this.myDialog.open(UploadeAccountantComponent, {  
     height: '800px',  
     width: '1000px',   
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