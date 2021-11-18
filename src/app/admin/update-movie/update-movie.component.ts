import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyServiceService } from 'src/app/shared/my-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  listCategory:any=[]
  movieData:any
  movieName =''
  movieLanguage=''
  movieTrailer=''
  movieCountry=''
  movieCategory=''
  movieDate=new Date()
  moviePrice=0
  movieImage:any
  movieVideo:any
  movieStoryLine=''
  movieID=-1
  



  

 
   constructor(private toast:ToastrService,private spinner:NgxSpinnerService, @Inject(MAT_DIALOG_DATA) public DialogData: any,private service:MyServiceService ,public myDialog:MatDialog) { 
    service.requestCall("https://localhost:44391/api/Category/GetCategory","Get")?.subscribe(data=>{this.listCategory=data})

     service.requestCall("https://localhost:44391/api/Movie/GetMovieByID/"+DialogData.movieID,"Get")?.subscribe( data=>
     { 
       this.movieName=data.name
       this.movieLanguage=data.language
       this.movieTrailer=data.trailer
       this.movieCountry=data.country
       this.movieCategory=data.category
       this.movieDate=new Date(data.releaseDate)
       this.moviePrice=data.price
       this.movieStoryLine=data.storyLine
       this.movieID=DialogData.movieID
     
      })


   
       
       
  }

  ngOnInit(): void {
  }
  close(){
    this.myDialog.closeAll()
     }
     uploadImageVideo(files:any) {
       if (files.length === 0) {
       return;
       }
       let fileToUpload = <File>files[0];
       const formData = new FormData();
       formData.append('file', fileToUpload, fileToUpload.name);
       this.service.uploadMovieImage(formData);
       }
       uploadVideo(files:any) {
         if (files.length === 0) {
         return;
         }
         let fileToUpload = <File>files[0];
         const formData = new FormData();
         formData.append('file', fileToUpload, fileToUpload.name);
         this.service.uploadMovie(formData);
         }
     uploadMovie(movieData:NgForm ,imageFile:any,vidoeFile:any){
       this.spinner.show()
       movieData.value.categoryId=parseInt( movieData.value.categoryId)
       movieData.value.Img=imageFile[0].name
       movieData.value.Video=vidoeFile[0].name
   
      
       this.service.requestCall("https://localhost:44391/api/Movie/UpdateMovie","Put",movieData.value)?.subscribe(
         async data=>{
           console.warn(movieData.value);
           
           
            await this.uploadImageVideo(imageFile)
            await  this.uploadVideo(vidoeFile)
             this.toast.success("Movie Updated Succefully");
             this.spinner.hide()
   
         },
   
         err=>{ this.toast.error("Error Occured");
         this.spinner.hide()}
       )
       
   
     }
   
}
