import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgProgressModule } from '@ngx-progressbar/core';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import {
  AccordionModule,
  ButtonsModule,
  CardsModule,
  CheckboxModule,
  IconsModule,
  InputsModule,
  MDBSpinningPreloader,
  ModalModule,
  NavbarModule,
  PopoverModule,
  SelectModule,
  SidenavModule,
  TooltipModule,
  WavesModule,
} from 'ng-uikit-pro-standard';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgControlsModule } from 'videogular2/controls';
import { VgCoreModule } from 'videogular2/core';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';

import { AppRoutes } from './app-route.service';
import { AppComponent } from './app.component';
import { PlayerComponent } from './private/player/player.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { UserfooterComponent } from './private/userfooter/userfooter.component';
import { FilterPipe, UsernavigationComponent } from './private/usernavigation/usernavigation.component';
import { FooterComponent } from './public/footer/footer.component';
import { IntroComponent } from './public/intro/intro.component';
import { NavigationComponent } from './public/navigation/navigation.component';
import { AuthGuardService } from './services/auth-gaurd.service';
import { PlayerService } from './services/player.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    IntroComponent,
    PlayerComponent,
    DashboardComponent,
    UsernavigationComponent,
    UserfooterComponent,
    FilterPipe
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
    AppRoutes,
  ],
  providers: [MDBSpinningPreloader, AmplifyService, PlayerService, AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressModule, multi: true }],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
