import { Component, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  myForm: FormGroup;
  name($event){
  console.log("In the parent "+$event.sku);
  }
  constructor(fb: FormBuilder){
    this.myForm = fb.group(
      {
        'sku2nd': ['ABCD']
      }
    );
  }

}
