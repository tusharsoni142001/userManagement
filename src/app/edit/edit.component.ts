import { Component, OnInit } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
  userDetails: any[]=[];
  showAlert: boolean = false;

  constructor(private myFirstService: MyFirstService, private router: Router, private route: ActivatedRoute) {
    this.userService = myFirstService;
    this.userDetails = this.myFirstService.getAllUsers();
  }
  
  
  foundUser: any = {};
  userService: any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.firstName = params['firstName'];

      // Now you can use this.firstName in your component
      this.foundUser = this.userService.getUserByFirstName(this.firstName);
      this.lastName = this.foundUser.lastName
      this.occupation = this.foundUser.jobPost
      this.description = this.foundUser.description
      this.city = this.foundUser.address
      this.latitude = this.foundUser.latitude
      this.longitude = this.foundUser.longitude
      this.email = this.foundUser.email
      this.phone = this.foundUser.phone
    });
  }


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
