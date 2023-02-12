import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

import 'hammerjs';
import { MenuComponent } from './components/menu/menu.component';
import { DishdetailComponent } from './components/dishdetail/dishdetail.component';

import { DishService } from './services/dish.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
  ],
  entryComponents: [LoginComponent],
  providers: [
    DishService,
    PromotionService,
    LeaderService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
