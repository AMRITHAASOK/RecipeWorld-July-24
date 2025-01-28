import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  //GET ALL RECIPES API - http://localhost:3000/allRecipes
  getAllRecipeAPI() {
    return this.http.get(`${this.server_url}/allRecipes`)
  }

  //add Testimony API - http://localhost:3000/addTestimony
  addTestimonyAPI(reqBody: any) {
    return this.http.post(`${this.server_url}/addTestimony`, reqBody)
  }

  //add Testimony API - http://localhost:3000/register
  registerAPI(reqBody: any) {
    return this.http.post(`${this.server_url}/register`, reqBody)
  }
  //login API - http://localhost:3000/login 
  loginAPI(reqBody: any) {
    return this.http.post(`${this.server_url}/login`, reqBody)
  }
  appendToken(){
    let headers= new HttpHeaders()
    const token = sessionStorage.getItem("token")
    console.log(token);
    
    if(token){
      headers=headers.append("Authorization",`Bearer ${token}`)
    }
    return {headers}
  }

  //GET A RECIPES API - http://localhost:3000/getARecipe/876879
  getARecipeAPI(id:any) {
    return this.http.get(`${this.server_url}/getARecipe/${id}`,this.appendToken())
  }

   //GET A RECIPES API -http://localhost:3000/relatedRecipe?cuisine=Pakistani
   getRelatedRecipeAPI(cuisine:any) {
    return this.http.get(`${this.server_url}/relatedRecipe?cuisine=${cuisine}`,this.appendToken())
  }

}
