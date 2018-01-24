import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Message} from '@stomp/stompjs';
import {AuthDataService} from "./auth-data.service";
import * as SockJS from "sockjs-client";
import * as Stomp from "@stomp/stompjs";

@Injectable()
export class WebsocketService {
  websocketState: Observable<String>;
  generalMessage: Observable<Message>;

  socketjs: any = null;
  stompClient: any = null;

  constructor(private authData: AuthDataService) {
  // private _stompService: StompRService,
    // console.log('Stomp init');
    // this.initStomp();
    // console.log('Status init');
    // this.websocketState = this._stompService.state
    //   .map((state: number) => StompState[state]);
    // console.log('subscribe general channel');
    // this.generalMessage = this._stompService.subscribe('/general');

  }

  public initStomp() {

  if (this.socketjs == null) {
    this.socketjs = new SockJS("http://localhost:8090/beiyelin");
  }
  this.stompClient = Stomp.over(this.socketjs);
  this.stompClient.connect({},
    frame =>{console.log('Connected: ' + frame);},
    err=>{console.log('err',err);},
  );

    // this._stompService.config = this.config;
    // this._stompService.initAndConnect();
    // this.websocketState = this._stompService.state
    //    .map((state: number) => StompState[state]);
    // this.generalMessage = this._stompService.subscribe('/topic');

  }

}
