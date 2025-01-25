import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    registerForm:FormGroup // group creation
    
      constructor(private fb:FormBuilder,private api:ApiService,private router:Router){
    
        this.registerForm= this.fb.group({ 
          username:["",[Validators.required,Validators.pattern("[a-zA-Z ]*")]], //array creation
          email:["",[Validators.required,Validators.pattern("[a-zA-Z@. ]*")]],
          password:["",[Validators.required,Validators.pattern("[a-zA-Z0-9 ]*")]]
        })
      }
    
      //control passess through html
      register(){
        if(this.registerForm.valid){
          let username = this.registerForm.value.username;
          let email = this.registerForm.value.email;
          let password = this.registerForm.value.password
          this.api.registerAPI({username,email,password}).subscribe({
            next:(res:any)=>{
              console.log(res);
              alert("Register Successful")
              this.router.navigateByUrl("/login")
            },
            error:(err:any)=>{
              console.log(err);
              
            }
          
          })
          // alert("tested")
         
        }
        else{
          alert("Invalid Form")
        }
      }
    
}
