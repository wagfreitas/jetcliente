import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RideinfoPageRoutingModule } from './rideinfo-routing.module';

import { RideinfoPage } from './rideinfo.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RideinfoPageRoutingModule
  ],
  declarations: [RideinfoPage]
})
export class RideinfoPageModule {}
