import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-saved-recipe',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './saved-recipe.component.html',
  styleUrl: './saved-recipe.component.css'
})
export class SavedRecipeComponent implements OnInit{

  savedList:any=[]
  constructor(private api:ApiService) {
    
  }
  ngOnInit(): void {
    this.getSavedRecipe()
  }
  getSavedRecipe(){
    this.api.getSavedRecipeAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.savedList=res
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }
  deleteSavedRecipe(id:any){
    this.api.deleteSavedRecipeAPI(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getSavedRecipe()
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
