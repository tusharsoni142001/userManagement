import { Component } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
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

  userDelete(item: any) {
    // Find the index of the selected item in userDetails
    const index = this.userDetails.indexOf(item);

    // Check if the item is found in userDetails
    if (index !== -1) {
      // Update the status property of the selected item to false
      this.userDetails[index].status = false;
    }
  }
}
