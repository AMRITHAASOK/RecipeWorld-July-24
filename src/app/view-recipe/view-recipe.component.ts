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
  relatedRecipeArray:any=[]
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
        console.log(res); //{} Chicken Karahi
        this.recipe=res
        this.relatedRecipe(res.cuisine)
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  relatedRecipe(cuisine:any){
    this.api.getRelatedRecipeAPI(cuisine).subscribe({
      next:(res:any)=>{
        console.log(res); //{} 6 array 
        this.relatedRecipeArray=res.filter((item:any)=>item.name!=this.recipe.name)
        console.log(this.relatedRecipeArray);// 5 {}
        
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

}
