import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DownloadListComponent } from './download-list/download-list.component';
import { RecepiListComponent } from './recepi-list/recepi-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { ManageRecipeComponent } from './manage-recipe/manage-recipe.component';
import { RequestListComponent } from './request-list/request-list.component';

const routes: Routes = [
  {
    path:"",component:DashboardComponent
  },
  {
    path:"download-list",component:DownloadListComponent
  },
  {
    path:"recipe-list",component:RecepiListComponent
  },
  {
    path:"user-list",component:UserListComponent
  },
  {
    path:"request-list",component:RequestListComponent
  },
  {
    path:"addRecipe",component:ManageRecipeComponent
  },
  {
    path:"editRecipe/:id",component:ManageRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
