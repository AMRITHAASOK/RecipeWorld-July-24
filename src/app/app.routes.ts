import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { SavedRecipeComponent } from './saved-recipe/saved-recipe.component';
import { ProfileComponent } from './profile/profile.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
    {
        path:'admin' , loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
    },
    {
        path:'',component:HomeComponent
    },
    {
        path:'about',component:AboutComponent
    },
    {
        path:'contact',component:ContactComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'register',component:RegisterComponent
    },
    {
        path:'allRecipes',component:RecipesComponent
    },
    {
        path:'viewRecipe/:id',component:ViewRecipeComponent
    },
    {
        path:'savedRecipes',component:SavedRecipeComponent
    },
    {
        path:'profile',component:ProfileComponent
    },
    {
        path:'**',component:PnfComponent
    }
];
