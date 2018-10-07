import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavigationComponent } from './public/navigation/navigation.component';
import { FooterComponent } from './public/footer/footer.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// For MDB Angular Pro
import {
  WavesModule, NavbarModule, InputsModule, ButtonsModule,
  SidenavModule, AccordionModule, MDBSpinningPreloader, IconsModule
} from 'ng-uikit-pro-standard';
import { IntroComponent } from './public/intro/intro.component';
import { VideosComponent } from './public/videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    IntroComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    WavesModule,
    NavbarModule,
    InputsModule,
    ButtonsModule,
    SidenavModule,
    AccordionModule,
    IconsModule
  ],
  providers: [MDBSpinningPreloader,
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressModule, multi: true }],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
