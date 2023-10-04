import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileListComponentComponent } from './profile-list-component/profile-list-component.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponentComponent,
    MenuBarComponent,
    ProfileDetailsComponent,
    MapComponent,
    AdminComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
