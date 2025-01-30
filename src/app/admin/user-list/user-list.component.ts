import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  userList:any=[]
  p: number = 1;
    constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getUsers()
  }
    getUsers(){
      this.api.getAllUserListAPI().subscribe({
        next:(res:any)=>{
          console.log(res);
          this.userList=res
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
    }
}
