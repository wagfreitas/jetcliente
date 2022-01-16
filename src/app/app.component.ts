import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { TripService } from './services/trip.service';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public appPages = [
    {
      title: 'HOME',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Minhas Solicitações',
      url: '/history',
      icon: 'time'
    },
    {
      title: 'Pagamentos',
      url: '/payments',
      icon: 'card'
    },
    {
      title: 'Perfil',
      url: '/profile',
      icon: 'person'
    }
    

  ];
  user: any = {};

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private router: Router,
    private tripService: TripService,
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();

      if (this.platform.is("android")) this.statusBar.styleLightContent();
      else this.statusBar.styleDefault();


      this.translate.setDefaultLang('en');

      let lang = localStorage.getItem('lang')
      console.log(lang);
      if (lang == null || lang == undefined)
        this.translate.use('en');
      else
        this.translate.use(lang);

      if (localStorage.getItem('isLoggedIn') === 'true') {

        this.router.navigateByUrl('/home', { skipLocationChange: true, replaceUrl: true });

        this.afAuth.authState.pipe(take(1)).subscribe(authData => {
          if (authData != null) {

            this.authService.getUser(authData.uid).valueChanges().subscribe(user => {
              this.user = user
            });

            this.tripService.getTrips(authData.uid).valueChanges().subscribe((trips: any) => {
              trips.forEach(trip => {
                if (trip.status === 'waiting' || trip.status === 'accepted' || trip.status === 'going') {
                  this.tripService.setId(trip.key)
                  this.router.navigateByUrl('/tracking');
                }
                else if (trip.status === 'finished') {
                  this.router.navigateByUrl('/home', { skipLocationChange: true, replaceUrl: true });
                }
              })
            })
            this.router.navigateByUrl('/home', { skipLocationChange: true, replaceUrl: true });
          } else {
            this.router.navigateByUrl('/login', { skipLocationChange: true, replaceUrl: true });
          }
        });
      }
      else {
        this.router.navigateByUrl('/login', { skipLocationChange: true, replaceUrl: true });
      }
    });
  }

  ngOnInit() { }
}
