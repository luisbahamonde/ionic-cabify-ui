import { Component, NgZone } from '@angular/core';
import { IonicPage, Platform, Events } from 'ionic-angular';

import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})

/**
 * MAP EVENTS *************************************************
 *
 * MAP_READY: 'map_ready',
 * MAP_LOADED: 'map_loaded',
 * MAP_CLICK: 'map_click',
 * MAP_LONG_CLICK: 'map_long_click',
 * MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
 * INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
 * INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
 * CAMERA_MOVE_START: 'camera_move_start',
 * CAMERA_MOVE: 'camera_move',
 * CAMERA_MOVE_END: 'camera_move_end',
 * OVERLAY_CLICK: 'overlay_click',
 * POLYGON_CLICK: 'polygon_click',
 * POLYLINE_CLICK: 'polyline_click',
 * CIRCLE_CLICK: 'circle_click',
 * GROUND_OVERLAY_CLICK: 'groundoverlay_click',
 * INFO_CLICK: 'info_click',
 * INFO_LONG_CLICK: 'info_long_click',
 * INFO_CLOSE: 'info_close',
 * INFO_OPEN: 'info_open',
 * CLUSTER_CLICK: 'cluster_click',
 * MARKER_CLICK: 'marker_click',
 * MARKER_DRAG: 'marker_drag',
 * MARKER_DRAG_START: 'marker_drag_start',
 * MARKER_DRAG_END: 'marker_drag_end',
 * MAP_DRAG: 'map_drag',
 * MAP_DRAG_START: 'map_drag_start',
 * MAP_DRAG_END: 'map_drag_end'
 */

export class MapaPage {

  zone:any;
  map: GoogleMap;
  mapElement: HTMLElement;

  classTransActive:boolean = false;

  constructor(
    platform: Platform,
    public googleMaps: GoogleMaps,
    public events: Events,
    private geolocation: Geolocation,
    public ngZone: NgZone
  ) {

    this.zone = new NgZone({ enableLongStackTrace: false });

    platform.ready().then(() => {

      this.loadMap();

    });

    events.subscribe('map:block', (bloquar:boolean) => {

      if(this.map){

        this.map.setClickable(!bloquar);
      }

    });
  }

  ionViewDidLoad() {

  }


  loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 40.0741904,
          lng: -3.3809802
        },
        zoom: 10,
      },
      controls:{
        myLocationButton:false,
        compass:false,
        mapToolbar:false
      },
      preferences:{

        padding: {

          bottom: 60
        },
      },
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "saturation": 100
            },
            {
              "weight": 8
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#444444"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#ffffff"
            },
            {
              "weight": 3
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#eceaf0"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#eceaf0"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#37610c"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.business",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#dfe9e7"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#227021"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#beb3fa"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }
      ]
    };

    this.mapElement = document.getElementById('map');
    this.map = this.googleMaps.create(this.mapElement, mapOptions);

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {

      this.map.setMyLocationEnabled(true);
      this.locateMe();

    });

    this.map.on(GoogleMapsEvent.CAMERA_MOVE_START).subscribe(() => {

      this.toggleTrans(true);
    });

    this.map.on(GoogleMapsEvent.CAMERA_MOVE_END).subscribe(() => {

      this.toggleTrans(false);
    });
  }


  toggleTrans(active){
    this.zone.run(() => {
      this.classTransActive = active;
    });
  }


  locateMe(){

    this.geolocation.getCurrentPosition().then((resp) => {


      this.map.animateCamera({
        target: {
          lat: resp.coords.latitude,
          lng: resp.coords.longitude
        },
        zoom: 15,
        duration: 1000
      });

    }).catch((error) => {

      console.log('Error getting location', error);
    });
  }
}
