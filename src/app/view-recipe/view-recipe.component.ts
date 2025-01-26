import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-recipe',
  standalone: true,
  imports: [],
  templateUrl: './view-recipe.component.html',
  styleUrl: './view-recipe.component.css'
})
export class ViewRecipeComponent implements OnInit{

  recipeId:any=""
  recipe:any={}//to hold particular recipe

  constructor(private ar: ActivatedRoute,private api:ApiService){}
  
  ngOnInit(): void {
      this.ar.params.subscribe((res:any)=>{
        console.log(res);//id: "678de44309f73ef537594e01"
        this.recipeId=res.id
        console.log(this.recipeId);
        this.viewARecipe()
      })
  }

  viewARecipe(){
    this.api.getARecipeAPI(this.recipeId).subscribe({
      next:(res:any)=>{
        console.log(res); //{}
        this.recipe=res
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
