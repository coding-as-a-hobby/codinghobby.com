import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { NavigationComponent } from './public/navigation/navigation.component';
import { FooterComponent } from './public/footer/footer.component';
import { AuthGuardService } from './services/auth-gaurd.service';
import { NgProgressModule } from '@ngx-progressbar/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppRoutes } from './app-route.service';
// For MDB Angular Pro
import {
  WavesModule, NavbarModule, InputsModule, ButtonsModule, ModalModule, TooltipModule, PopoverModule ,
  SidenavModule, AccordionModule, MDBSpinningPreloader, IconsModule, CheckboxModule, CardsModule, SelectModule
} from 'ng-uikit-pro-standard';
// MDB Angular Pro
import { IntroComponent } from './public/intro/intro.component';
import { VideosComponent } from './public/videos/videos.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { AwsComponent } from './public/aws/aws.component';
import { MyaccountComponent } from './public/myaccount/myaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    IntroComponent,
    VideosComponent,
    AwsComponent,
    MyaccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CheckboxModule, CardsModule, SelectModule,
    ModalModule, TooltipModule, PopoverModule,
    WavesModule,
    NavbarModule,
    AmplifyAngularModule,
    SharedModule,
    InputsModule,
    ButtonsModule,
    SidenavModule,
    AccordionModule,
    IconsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    FormsModule, ReactiveFormsModule,
    VgBufferingModule,
    AppRoutes
  ],
  providers: [MDBSpinningPreloader,AmplifyService, AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressModule, multi: true }],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
