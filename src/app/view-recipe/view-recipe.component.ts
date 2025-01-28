import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

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

  toDownload(){
    this.api.addTODownload(this.recipeId,this.recipe).subscribe({
      next:(res:any)=>{
        console.log(res);
        //download as pdf 
        this.generatePDF()
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  generatePDF(){
    const pdf = new jsPDF()
    pdf.setFontSize(16)
    pdf.setTextColor("red")
    pdf.text(this.recipe.name,10,10)
    pdf.setFontSize(12)
    pdf.setTextColor("black")
    pdf.text(`Cuisine : ${this.recipe.cuisine}`,10,20)
    pdf.text(`Servings : ${this.recipe.servings}`,10,25)
    pdf.text(`Mode of Cooking : ${this.recipe.difficulty}`,10,30)
    pdf.text(`Total Preparation Time : ${this.recipe.prepTimeMinutes} Minutes`,10,35)
    pdf.text(`Total Cooking Time : ${this.recipe.cookTimeMinutes} Minutes`,10,40)
    pdf.text(`Total Calorie Per Servings : ${this.recipe.caloriesPerServing}`,10,45)
    let head = [['Ingredients Needed','Cooking Instructions']]
    let body = []
    body.push([this.recipe.ingredients,this.recipe.instructions])
    autoTable(pdf,{head,body,startY:50})
    pdf.output('dataurlnewwindow')
    pdf.save('download-recipe.pdf')
  }

  savedRecipe(){
    this.api.addTOSave(this.recipeId,this.recipe).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert("Recipe Saved...!")
        
      },
      error:(err:any)=>{
        console.log(err);
        alert(err.error)
      }
    })
  }

}
