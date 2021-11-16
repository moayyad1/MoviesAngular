import { Component, OnInit } from '@angular/core';

  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 myScriptFile:HTMLScriptElement;
 
 seconScript:HTMLScriptElement;
  constructor() { 
    
     
    this.myScriptFile=document.createElement("script")
    this.myScriptFile.src="../../../../assets/jsFile/navSlider.js"
    this.seconScript=document.createElement("script")
     document.body.appendChild(this.myScriptFile)
  }

  ngOnInit(): void {
  }

}
