import { Component } from '@angular/core';

import { AppPage } from './../../e2e/src/app.po';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '',
      icon: 'home'
    },
    {
    title: 'List',
    url: '/list',
    icon: 'list'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'lock'
    },
    {
      title: 'Members',
      url: '/members',
      icon: 'person'
    },
    {
      title: 'Dashboard',
      url: '/members/dashboard',
      icon: 'today'
    }
  ];

public tabPages = [
  {
    title: 'Tab 1',
    url: '/tabs/tab1',
    icon: 'flash'
  },
  {
    title: 'Tab 2',
    url: '/tabs/tab2',
    icon: 'apps'
  },
  {
    title: 'Tab 3',
    url: '/tabs/tab3',
    icon: 'send'
  },
]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authenticationService.authenticationState.subscribe(state => {
        if (state) {
          this.router.navigate(['members', 'dashboard']);
        } else {
          this.router.navigate(['login']);
        }
      });
    });
  }
}
