import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DatePipe } from '@angular/common';
import { SearchPipe } from '../pipes/search.pipe';
import {FormsModule } from '@angular/forms'
import { Router, RouterLink } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [DatePipe,SearchPipe,FormsModule,RouterLink,NgxPaginationModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit{

    recipeList:any=[]//To hold alll recipe data
    cuisineType:any=[]//To hold all cuisine Type details
    
    nestedMealArray:any=[]//to hold nested meal array
    newMealArray:any=[]//hold all measls details into single array
    updateMealArray:any=[]//meals array with out duplications
    dummyRecipeList:any=[] 
    p: number = 1;
    constructor(private api :ApiService,private route:Router){}

    today=new Date()
    searchKey:string=""//to hold search value from input box

  ngOnInit(): void {
    this.getAllRecipes()

  }

      getAllRecipes(){
        this.api.getAllRecipeAPI().subscribe({
          next:(res:any)=>{
            console.log(res);
            this.recipeList=res
            this.dummyRecipeList=res
            // cuisine filter
            this.recipeList.forEach((item:any) => {
            !this.cuisineType.includes(item.cuisine) &&  this.cuisineType.push(item.cuisine)
            });
           console.log(this.cuisineType);

            // mealTYpe filter
           this.nestedMealArray= this.recipeList.map((item:any)=>item.mealType)// [ [], [],]
            console.log(this.nestedMealArray);//nested array
            console.log(this.nestedMealArray.flat());//single
            this.newMealArray=this.nestedMealArray.flat()

            
            this.newMealArray.forEach((item:any) => {
              !this.updateMealArray.includes(item) &&  this.updateMealArray.push(item)
              });
             console.log(this.updateMealArray);
          },
          error:(err:any)=>{
            console.log(err);
            
          }
        })
      }

      filterRecipe(key:string,value:string){
          this.recipeList=this.dummyRecipeList.filter((item:any)=>
            item[key].includes(value)
          )
          console.log(this.recipeList);
          
      }

      viewRecipe(id:any){
          if(sessionStorage.getItem("token")){
            this.route.navigateByUrl(`viewRecipe/${id}`)
          }
          else{
            alert("Please login")
          }
      }
}
