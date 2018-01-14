import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { ConfigService } from './config.service';
import {WebsocketService} from "./websocket.service";

@NgModule({
  providers: [AuthService, ConfigService, WebsocketService]
})
export class CoreModule {
}
