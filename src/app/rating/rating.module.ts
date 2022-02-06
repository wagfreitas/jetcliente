import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingPageRoutingModule } from './rating-routing.module';
import { IonicRatingModule } from 'ionic-rating';

import { RatingPage } from './rating.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    TranslateModule,
    RatingPageRoutingModule
  ],
  declarations: [RatingPage]
})
export class RatingPageModule {}
