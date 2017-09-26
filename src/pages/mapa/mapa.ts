import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  map: GoogleMap;
  mapElement: HTMLElement;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public googleMaps: GoogleMaps,
    public events: Events
  ) {

    events.subscribe('map:block', (bloquar:boolean) => {

      if(this.map){

        this.map.setClickable(!bloquar);
      }

    });
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
