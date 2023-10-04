import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  userDetails: any=[{
    firstName: "Tushar",
    lastName: "Soni",
    jobPost: "Ui UX Designer",
    address: "New Delhi",
    description:"Hello everyon, I am a MCA student",
    email:"tsoni@gmail.com",
    phone:9876543214,
    lat: 28.7041,
    lng: 77.1025,
    status: true
  },
  {
    firstName: "Michael",
    lastName: "Deo",
    jobPost: "Ui UX Designer",
    address: "Pune",
    description:"Hello world!!. I am a Ui UX Designer",
    email:"tsoni@gmail.com",
    phone:9876543214,
    lat: 18.5204,
    lng: 73.8567,
    status: true
    
  },
  {
    firstName: "Sourabh",
    lastName: "Soni",
    jobPost: "Ui UX Designer",
    address: "Bangalore",
    description:"Hellow world",
    email:"tsoni@gmail.com",
    phone:9876543214,
    lat: 12.9716,
    lng: 77.5946,
    status: true
  }
];
  
constructor() {}

insert(user: any): void {
  console.log(user)
  this.userDetails.push(user[0]);
  console.log(this.userDetails)
}



getAllUsers(): any[] {
  return this.userDetails;
}

foundUser:any={};
getUserByFirstName(firstNameToFind: string): any | undefined {

  return this.userDetails.find((user:any) => user.firstName === firstNameToFind);

}

}
