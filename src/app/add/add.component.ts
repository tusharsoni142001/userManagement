import { Component } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  
  firstName:any='';
  lastName:any='';
  occupation:any='';
  city:any='';
  description:any='';
  latitude:any='';
  longitude:any='';
  email:any='';
  phone:any='';

  user: any[] = [];
  showAlert: boolean = false;

  constructor(private myFirstService: MyFirstService, private router: Router) {}


  onSubmit(){
    this.user=[{
      firstName: this.firstName,
    lastName: this.lastName,
    jobPost: this.occupation,
    address: this.city,
    description:this.description,
    email:this.email,
    phone:this.phone,
    lat: this.latitude,
    lng: this.longitude,
    status: true
    }]

  this.myFirstService.insert(this.user);
  this.showAlert = true;

  setTimeout(() => {
    this.router.navigate(['home']); 
  }, 2000);

  }


}
