import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  testimonyForm:FormGroup // group creation

  constructor(private fb:FormBuilder){

    this.testimonyForm = this.fb.group({ 
      name:["Amritha"], //array creation
      email:[""],
      message:[""]
    })
  }

  //control passess through html
  

}
