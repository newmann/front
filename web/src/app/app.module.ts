import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app.routing';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

import { SignupComponent } from './admin/signup/signup.component';
import { SigninComponent } from './admin/signin/signin.component';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {RouterStateSerializer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {environment} from "../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {reducers,metaReducers} from "./reducer/index";
import {CustomRouterStateSerializer} from "./shared/routerstate.utils";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {CustomeHttpInterceptor} from "./core/custome-http.interceptor";

// import { FireBaseComponentsModule } from './shared/firebase.module';

@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    AdminModule,
    AppRoutingModule,
    // FireBaseComponentsModule,
    ReactiveFormsModule,
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(reducers, { metaReducers }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule,
    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    !environment.production ? StoreDevtoolsModule.instrument(
      {
        maxAge: 25 //  Retains last 25 states
      }
    ): [],
    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
    EffectsModule.forRoot([]),
  ],
  providers: [
    /**拦截器
     *
     */
    { provide: HTTP_INTERCEPTORS, useClass: CustomeHttpInterceptor, multi: true},
    /**
     * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
     * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
     * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
     */
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
