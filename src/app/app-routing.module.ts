import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileListComponentComponent } from './profile-list-component/profile-list-component.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { MapComponent } from './map/map.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '', // Empty path for the default route
    redirectTo: 'home',
    pathMatch: 'full' // Ensure a full match of the path
  },
  {
    path: 'home',
    component: ProfileListComponentComponent
  },
  {
    path: 'home/detail/:firstName', // Define 'firstName' as a route parameter
    component: ProfileDetailsComponent
  },
  {
    path:'home/map/:firstName',
    component:MapComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'admin/add',
    component:AddComponent
  },
  {
    path:'home/edit/:firstName',
    component:EditComponent
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
