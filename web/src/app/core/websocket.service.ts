import { Injectable } from '@angular/core';
import {StompConfig, StompRService, StompState} from "@stomp/ng2-stompjs";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Message} from '@stomp/stompjs';

@Injectable()
export class WebsocketService {
  config: StompConfig;
  websocketState: Observable<String>;
  generalMessage: Observable<Message>;

  constructor(private _stompService: StompRService) {
    // console.log('Stomp init');
    // this.initStomp();
    // console.log('Status init');
    // this.websocketState = this._stompService.state
    //   .map((state: number) => StompState[state]);
    // console.log('subscribe general channel');
    // this.generalMessage = this._stompService.subscribe('/general');

  }

  public initStomp() {


    this.config = {
      // Which server?
      url: 'ws://localhost:8090/beiyelin',

      // Headers
      // Typical keys: login, passcode, host
      headers: {
         login: 'guest',
      //   passcode: 'guest'
      },
      // How often to heartbeat?
      // Interval in milliseconds, set to 0 to disable
      heartbeat_in: 0, // Typical value 0 - disabled
      heartbeat_out: 20000, // Typical value 20000 - every 20 seconds
      // Wait in milliseconds before attempting auto reconnect
      // Set to 0 to disable
      // Typical value 5000 (5 seconds)
      reconnect_delay: 5000,
      // Will log diagnostics on console
      debug: true
    };

    this._stompService.config = this.config;
    this._stompService.initAndConnect();
    this.websocketState = this._stompService.state
       .map((state: number) => StompState[state]);
    this.generalMessage = this._stompService.subscribe('/topic');

  }

}
