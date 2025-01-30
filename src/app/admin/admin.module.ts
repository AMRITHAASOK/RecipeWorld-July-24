import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DownloadListComponent } from './download-list/download-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RecepiListComponent } from './recepi-list/recepi-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManageRecipeComponent } from './manage-recipe/manage-recipe.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DownloadListComponent,
    UserListComponent,
    RequestListComponent,
    RecepiListComponent,
    SidebarComponent,
    ManageRecipeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
