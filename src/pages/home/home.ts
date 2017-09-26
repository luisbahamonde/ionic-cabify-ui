import { ViewChild, Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
//import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, GoogleMapsMapTypeId, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //@ViewChild('map') mapElement;


  map: GoogleMap;
  mapElement: HTMLElement;

  constructor(
    public navCtrl: NavController,
    public googleMaps: GoogleMaps,
    public platform: Platform
  ) {

  }

  ionViewDidLoad() {

    setTimeout( ()=>{
      this.loadMap();
    }, 1000);
  }

  loadMap() {

    this.mapElement = document.getElementById('map');

    //this.map = new GoogleMap(this.mapElement);
    this.map = this.googleMaps.create(this.mapElement);

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
      console.log('Map is ready!');
    });
  }
}
