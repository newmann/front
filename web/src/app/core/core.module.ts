import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { ConfigService } from './config.service';
import {WebsocketService} from "./websocket.service";
import {CustomeHttpInterceptor} from "./custome-http.interceptor";
import {AuthDataService} from "./auth-data.service";

@NgModule({
  providers: [AuthService,
    AuthDataService,
    ConfigService,
    WebsocketService,
    CustomeHttpInterceptor]
})
export class CoreModule {
}
