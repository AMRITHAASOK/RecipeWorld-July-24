import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,

  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  testimonyForm:FormGroup // group creation

  constructor(private fb:FormBuilder,private api:ApiService,private toastr:ToastrService){

    this.testimonyForm = this.fb.group({ 
      name:["",[Validators.required,Validators.pattern("[a-zA-Z ]*")]], //array creation
      email:["",[Validators.required,Validators.pattern("[a-zA-Z@. ]*")]],
      message:["",[Validators.required,Validators.pattern("[a-zA-Z ]*")]]
    })
  }

  //control passess through html
  addTestimony(){
    if(this.testimonyForm.valid){
      let name = this.testimonyForm.value.name;
      let email = this.testimonyForm.value.email;
      let message = this.testimonyForm.value.message
      this.api.addTestimonyAPI({name,email,message}).subscribe({
        next:(res:any)=>{
          console.log(res);
          alert("Thank you for your valuable feedback")
          // this.toastr.success("Thank you for your valuable feedback")
          //this.toastr.success('Hello world!', 'Toastr fun!');
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      
      })
     
    }
    else{
      alert("Invalid Form")
    }
  }

}
