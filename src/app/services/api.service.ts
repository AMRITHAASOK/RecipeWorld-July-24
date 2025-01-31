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

   //GET RELATED RECIPES API -http://localhost:3000/relatedRecipe?cuisine=Pakistani
   getRelatedRecipeAPI(cuisine:any) {
    return this.http.get(`${this.server_url}/relatedRecipe?cuisine=${cuisine}`,this.appendToken())
  }

  //DOWNLOAD PDF - http://localhost:3000/addToDownload/12
   addTODownload(id:any,reqBody: any) {
    return this.http.post(`${this.server_url}/addToDownload/${id}`, reqBody,this.appendToken())
  }

  //Add to save - http://localhost:3000/addToSave/12
  addTOSave(id:any,reqBody: any) {
    return this.http.post(`${this.server_url}/addToSave/${id}`, reqBody,this.appendToken())
  }
   //Add to save - http://localhost:3000/getSavedRecipe
 getSavedRecipeAPI() {
  return this.http.get(`${this.server_url}/getSavedRecipe`, this.appendToken())
}

   //delete to save - http://localhost:3000/getSavedRecipe
  deleteSavedRecipeAPI(id:any) {
    return this.http.delete(`${this.server_url}/deleteSavedRecipe/${id}`, this.appendToken())
  }

   //GET  - http://localhost:3000/allDownloadList
   getAllDownloadListAPI() {
    return this.http.get(`${this.server_url}/allDownloadList`)
  }

  
   //GET I - http://localhost:3000/allDownloadList
   getAllUserListAPI() {
    return this.http.get(`${this.server_url}/allUserList`)
  }
 //GET  - http://localhost:3000/allDownloadList
 getAllTestimonyListAPI() {
  return this.http.get(`${this.server_url}/allTestimonies`)
}
 //GET  - http://localhost:3000/allDownloadList
 getApprovedTestimonyListAPI(id:any,status:string) {
  return this.http.get(`${this.server_url}/updateTestimony/${id}?status=${status}`)
}

}
