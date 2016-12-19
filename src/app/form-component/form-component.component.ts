import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

@Output() pass2Parent: EventEmitter<string> = new EventEmitter<string>();

  onSubmit(p:any){
    console.log("got the "+p.sku);
    this.pass2Parent.emit(p);
  }
  constructor() { }

  ngOnInit() {
  }

}
