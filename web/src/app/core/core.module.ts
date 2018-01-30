import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { ConfigService } from './config.service';
import {WebsocketService} from "./websocket.service";
import {CustomeHttpInterceptor} from "./custome-http.interceptor";
import {AuthDataService} from "./auth-data.service";
import {CustomeStompRService} from "./custome-stomp-r.service";

@NgModule({
  providers: [AuthService,
    AuthDataService,
    ConfigService,
    WebsocketService,
    CustomeHttpInterceptor,
    CustomeStompRService
  ]
})
export class CoreModule {
}
