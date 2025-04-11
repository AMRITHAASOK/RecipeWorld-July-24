import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RecipeModel } from '../model/recipeModel';

@Component({
  selector: 'app-manage-recipe',
  templateUrl: './manage-recipe.component.html',
  styleUrl: './manage-recipe.component.css'
})
export class ManageRecipeComponent implements OnInit{
  recipeList:any=[]//To hold alll recipe data
  cuisineType:any=[]//To hold all cuisine Type details
  
  nestedMealArray:any=[]//to hold nested meal array
  newMealArray:any=[]//hold all measls details into single array
  updateMealArray:any=[]//meals array with out duplications
  dummyRecipeList:any=[] 
  MealArray:any=[]
  recipeDetails:RecipeModel={}//to hold input values
  IngredientsArray:any=[]
  InstructionArray:any=[]

  @Input() id!:string

    constructor(private api :ApiService){}
  ngOnInit(): void {
    this.getAllRecipes()
    console.log(this.id); 
    
  }

  getAllRecipes(){
    this.api.getAllRecipeAPI().subscribe({
      next:(res:any)=>{
        if(this.id){
          this.recipeDetails=res.find((item:any)=>item._id=this.id)
          this.IngredientsArray=this.recipeDetails.ingredients
          this.InstructionArray=this.recipeDetails.instructions
          this.MealArray=this.recipeDetails.mealType
          
        }

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
 
  addIngredients(Ingredients:any){
      console.log(Ingredients.value);
     this.IngredientsArray.push(Ingredients.value)
      console.log(this.IngredientsArray);
      
  }
  deleteIngredient(ingredient:any){
   this.IngredientsArray= this.IngredientsArray.filter((item:any)=>item!=ingredient)
  }

  addInstruction(instruction:any){
    console.log(instruction.value);
    this.InstructionArray.push(instruction.value)
    console.log(this.InstructionArray);
    
  }
  deleteInstruction(instruction:any){
    this.InstructionArray= this.InstructionArray.filter((item:any)=>item!=instruction)
   }
   selectMeal(event:any){
    console.log(event.target.checked);//true
    if(event.target.checked){
       this.MealArray.push(event.target.name)
      console.log(this.MealArray);
    }
    else{
      this.MealArray.filter((item:any)=>item!=event.target.name)
    }
   }

   addRecipe(){
    this.recipeDetails.ingredients=this.IngredientsArray
    this.recipeDetails.instructions=this.InstructionArray
    this.recipeDetails.mealType=this.MealArray
    console.log(this.recipeDetails);
    this.api.AddRecipeAPI(this.recipeDetails).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert("Added Successsfully  ")
      },
      error:(err:any)=>{
        console.log(err);
        alert(err.error)
      }
    })
  }

  editRecipe(){
    this.recipeDetails.ingredients=this.IngredientsArray
    this.recipeDetails.instructions=this.InstructionArray
    this.recipeDetails.mealType=this.MealArray
    console.log(this.recipeDetails);

  
  }
}
