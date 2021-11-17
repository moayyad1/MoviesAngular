import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myScriptFile:HTMLScriptElement;
 
  seconScript:HTMLScriptElement;
  constructor() {        
       this.myScriptFile=document.createElement("script")
       this.myScriptFile.src="../../../../assets/jsFile/homePageSlider.js"
       this.seconScript=document.createElement("script")
        document.body.appendChild(this.myScriptFile)
}
}
