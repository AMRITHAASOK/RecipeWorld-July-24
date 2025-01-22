import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit{

    recipeList:any=[]//To hold alll recipe data
    cuisineType:any=[]//To hold all cuisine Type details

      constructor(private api :ApiService){}

  ngOnInit(): void {
    this.getAllRecipes()

  }

      getAllRecipes(){
        this.api.getAllRecipeAPI().subscribe({
          next:(res:any)=>{
            console.log(res);
            this.recipeList=res
            this.recipeList.forEach((item:any) => {
            !this.cuisineType.includes(item.cuisine) &&  this.cuisineType.push(item.cuisine)
            });
           console.log(this.cuisineType);
            
          },
          error:(err:any)=>{
            console.log(err);
            
          }
        })
      }

      filterRecipe(key:string,value:string){
          this.recipeList=this.recipeList.filter((item:any)=>
            item[key].includes(value)
          )
          console.log(this.recipeList);
          
      }
}
