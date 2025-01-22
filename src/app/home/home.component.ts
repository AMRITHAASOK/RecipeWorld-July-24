import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  recipeList:any=[]
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getRecipes()
  }

  getRecipes(){
    this.api.getAllRecipeAPI().subscribe({
      next:(res:any)=>{
        console.log(res.slice(0,6));
        this.recipeList=res.slice(0,6)
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
