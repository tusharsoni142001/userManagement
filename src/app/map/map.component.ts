import { Component, OnInit } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';
import { ActivatedRoute } from '@angular/router';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  firstName: string = '';
  foundUser: any = {};
  userService: any;

  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor(private route: ActivatedRoute,
    private service: MyFirstService) {
    this.userService = service;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.firstName = params['firstName'];

      // Now you can use this.firstName in your component

      this.foundUser = this.userService.getUserByFirstName(this.firstName);

      const latitude = parseFloat(this.foundUser.lat);
      const longitude = parseFloat(this.foundUser.lng);

      if (!isNaN(latitude) && !isNaN(longitude)) {
        this.center = {
          lat: latitude,
          lng: longitude
        };

        // Add the marker to the markerPositions array
        this.markerPositions.push({ lat: latitude, lng: longitude });
      } else {
        console.error('Invalid coordinates received.');
      }
    });
  }

  center: google.maps.LatLngLiteral = {
    lat: this.foundUser.lat,
    lng: this.foundUser.lng
  };
  zoom = 8;
  markerOptions: google.maps.MarkerOptions = {
    draggable: false
  };

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }
}
