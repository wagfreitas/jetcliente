import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { CommonService } from '../services/common.service';
import { AuthService } from '../services/auth.service';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { AngularFireDatabase } from '@angular/fire/database';
import { SettingService } from '../services/setting.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {
  langArr = [];
  lang = 'en';
  user: any = {};
  settings: any = {};

  constructor(
    private commonService: CommonService,
    private authService: AuthService,
    private db: AngularFireDatabase,
    private fcm: FirebaseX,
    private ss: SettingService
  ) {
    this.langArr = environment.langArr;
    this.lang = this.commonService.getLang();
    this.ss.getSettings().subscribe(res => res != null ? this.settings = res.payload.val() : this.settings = {});
  }

  openSupport() {
    window.open(this.settings.riderSupportURL, "_blank");
  }

  ngOnInit() {
    this.authService.getUserData().then((user) => {
      this.authService.getUser(user.uid).snapshotChanges().subscribe((user: any) => this.user = { uid: user.key, ...user.payload.val() });
    });
  }

  changeLang() {
    this.commonService.changeLang(this.lang);
  }

  change() {
    console.log(this.user);
    if (this.user.isPushEnabled == false || this.user.isPushEnabled == undefined) {
      this.fcm.getToken().then(token => {
        console.log(token);
        this.authService.getUser(this.user.uid).update({ isPushEnabled: true, pushToken: token });
      }).catch(err => {
        console.log(err);
        this.authService.getUser(this.user.uid).update({ isPushEnabled: false, pushToken: null });
      });
    }
    else {
      this.authService.getUser(this.user.uid).update({ isPushEnabled: false, pushToken: null });
    }
  }

}
