import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrl: './request-list.component.css'
})
export class RequestListComponent implements OnInit{
    testimonies:any=[]
    p:number=1
    constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAllTestimonies()
    
  }

    getAllTestimonies(){
      this.api.getAllTestimonyListAPI().subscribe({
        next:(res:any)=>{
          console.log(res);
          this.testimonies=res
          // this.updateStatus(res._id,res.status)
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
    }

    updateStatus(id:any,status:string){
      this.api.getApprovedTestimonyListAPI(id,status).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.getAllTestimonies()
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
    }
}
