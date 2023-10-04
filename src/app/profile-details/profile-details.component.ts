import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  firstName: string='';
  foundUser:any={};
  userService:any
  constructor(private route: ActivatedRoute,
    private service: MyFirstService) {
    this.userService=service
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.firstName = params['firstName'];
    
      // Now you can use this.firstName in your component

      this.foundUser = this.userService.getUserByFirstName(this.firstName);
     
    });
  }


}
