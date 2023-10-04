import { Component } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-list-component',
  templateUrl: './profile-list-component.component.html',
  styleUrls: ['./profile-list-component.component.css']
})
export class ProfileListComponentComponent {

  userDetails: any[] = [];
  constructor(
    private service: MyFirstService,
    private router: Router
  ) {
    this.userDetails = this.service.getAllUsers();
  }

  navigateToProfileDetails(firstName: string) {
    this.router.navigate(['/home/detail', firstName]);
  }

}
