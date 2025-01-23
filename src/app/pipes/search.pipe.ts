import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(allRecipes:any[],searchKey:string): any {  //allRecipes [gs,egrg,rgrg] searchKey = egrg
    let result:any=[]//to hold search recipe content

      if(!allRecipes||searchKey==""){
        return allRecipes
      }
      else{
        result=allRecipes.filter((item:any)=>item.name.toLowerCase().trim().includes(searchKey.toLowerCase().trim())) //item.name===searchKey
        return result;
      }
   
  }

}
