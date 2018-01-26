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
  defaultUri:string = "http://localhost:8090/beiyelin";
   ws: any = null;
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
    this.socketjs = new SockJS(this.defaultUri);
  }
  this.stompClient = Stomp.over(this.socketjs);
  if (this.stompClient.connected) {
    console.log('Stomp client is connecting');
  } else {
    this.stompClient.connect({'Authorization': this.authData.token},
      frame => {
        console.log('Connected: ' + frame);
      },
      err => {
        console.log('err', err);
      },
    );
  }
    // this._stompService.config = this.config;
    // this._stompService.initAndConnect();
    // this.websocketState = this._stompService.state
    //    .map((state: number) => StompState[state]);
    // this.generalMessage = this._stompService.subscribe('/topic');

  }

  public connectWS(uri: string){
    if ((this.ws == null) || (this.ws.readyState=== WebSocket.CLOSED)){
      this.ws = new WebSocket(uri);
      this.ws.onopen = function(e) {
        // Check the protocol chosen by the server
        console.log("WS opened ");
      };
// Event handler for receiving text messages
      this.ws.onmessage = function(e) {
        if(typeof e.data === "string"){
          console.log("WS String message received", e, e.data);
        } else {
          console.log("WS Other message received", e, e.data);
        }
      };
// Event handler for errors in the WebSocket object
      this.ws.onerror = function(e) {
        console.log("WS Error: " , e);
        //Custom function for handling errors

      };
// Event handler for closed connections
      this.ws.onclose = function(e) {
        console.log("WS Connection closed", e);
      };
    }
  }

  public disconnectWS(){
    this.ws.close();
  }

  public connectSockjs(uri: string){

    if (this.socketjs == null) {
      this.socketjs = new SockJS(uri);
      console.log('connect Sockjs')
    }

  }
  public disconnectSockjs(){
    if (this.socketjs != null) {
      this.socketjs.close();
      this.socketjs = null;
      console.log('disconnect Sockjs')
    }

  }
  public connectStomp(){
    if (this.stompClient == null){
      this.stompClient = Stomp.over(this.socketjs);
    };
    this.stompClient.connect({'Authorization': this.authData.token},
      frame =>{console.log('Connected: ' + frame);},
      err=>{console.log('connect err',err);},
    );

  }
  public disconnectStomp(){
    if (this.stompClient != null){
      // this.stompClient = Stomp.over(this.socketjs);
      this.stompClient.disconnect(
        frame =>{console.log('disonnected: ' + frame);
          // this.stompClient = null;
          },
        err=>{console.log('disconnected err',err);
          // this.stompClient = null;
          },
      );
    }
  }

}
