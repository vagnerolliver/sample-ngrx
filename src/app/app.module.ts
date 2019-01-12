import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import {CursosModule} from './pages/cursos/cursos.module';
import {LoginModule} from './pages/login/login.module';
import {ModulesModule} from './modules/modules.module';
import { AppRoutingModule } from './app-routing.module';

import {LoginService} from './pages/login/login.service';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, metaReducers } from './store/reducers';

import { AppEffects } from './store/effects/app.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ModulesModule,
    LoginModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
