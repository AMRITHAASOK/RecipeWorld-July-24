import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-recepi-list',
  templateUrl: './recepi-list.component.html',
  styleUrl: './recepi-list.component.css'
})
export class RecepiListComponent implements OnInit{

    recipeList:any=[]
    p: number = 1;
    searchKey:string=""
    constructor(private api:ApiService){}
    
  ngOnInit(): void {
    this.allRecipes()
  }

    allRecipes(){
      this.api.getAllRecipeAPI().subscribe({
        next:(res:any)=>{
          console.log(res);
          this.recipeList=res
        },error:(err:any)=>{
          console.log(err);
          
        }
      })
    }
}
