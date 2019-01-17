import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import {LoginModule} from './pages/login/login.module';
import {ModulesModule} from './modules/modules.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';

import {CustomSerializer} from './shared/utils';

import { reducers, metaReducers } from './store/auth.reducers';
import { AuthEffects } from './store/auth.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    ModulesModule,
    LoginModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AuthEffects]),
    // EffectsModule.forFeature([AuthEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'})
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
