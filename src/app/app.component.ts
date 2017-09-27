import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = 'MapaPage';

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public events: Events
  ) {

    platform.ready().then(() => {


      setTimeout(()=>{

        statusBar.styleDefault();
        splashScreen.hide();

      },2000);

    });
  }

  menuClosed() {
    this.events.publish('map:block', false);
  }

  menuOpened() {
    this.events.publish('map:block', true);
  }
}

