import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url='http://localhost:3000'

  constructor(private http:HttpClient) { }

  //GET ALL RECIPES API - http://localhost:3000/allRecipes
  getAllRecipeAPI(){
  return this.http.get(`${this.server_url}/allRecipes`)
  }

  
}
