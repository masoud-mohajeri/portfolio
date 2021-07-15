import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SlidesComponent } from './slides/slides.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, SlidesComponent, PersonalInfoComponent],
})
export class HomePageModule {}
