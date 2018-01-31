import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {Message} from '@stomp/stompjs';
import {AuthDataService} from "./auth-data.service";
// import * as SockJS from "sockjs-client";
// import * as Stomp from "@stomp/stompjs";
import {StompConfig, StompRService, StompState} from "@stomp/ng2-stompjs";
import {SubmitMessage} from "./submit-message";
import {CustomeStompRService} from "./custome-stomp-r.service";

@Injectable()
export class WebsocketService {
  websocketState: Observable<String>;
  generalMessage: Observable<String>;
  chatMessage: Observable<String>;
  defaultUri:string = "http://localhost:8090/beiyelin?Authorization=123456";
  //  ws: any = null;
  // socketjs: any = null;
  // stompClient: any = null;
  stompConfig: StompConfig

  constructor(private authData: AuthDataService,private stompService: CustomeStompRService) {
  // private _stompService: StompRService,
    // console.log('Stomp init');
    // this.initStomp();
    // console.log('Status init');
    // this.websocketState = this._stompService.state
    //   .map((state: number) => StompState[state]);
    // console.log('subscribe general channel');
    // this.generalMessage = this._stompService.subscribe('/general');
    this.stompConfig = {
      // Which server?
      url: this.defaultUri,

      // Headers
      // Typical keys: login, passcode, host
      headers: {
        user: '123456',
        passcode: '123456'
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

  }

  public initStomp() {

  // if (this.socketjs == null) {
  //   this.socketjs = new SockJS(this.defaultUri);
  // }
  // this.stompClient = Stomp.over(this.socketjs);
  // if (this.stompClient.connected) {
  //   console.log('Stomp client is connecting');
  // } else {
  //   this.stompClient.connect({'Authorization': this.authData.token},
  //     frame => {
  //       console.log('Connected: ' + frame);
  //     },
  //     err => {
  //       console.log('err', err);
  //     },
  //   );

    this.stompService.config = this.stompConfig;
    this.stompService.initAndConnect();
    this.websocketState = this.stompService.state
       .map((state: number) => StompState[state]);
    this.generalMessage = this.stompService.subscribe('/topic')
      .map((message: Message) => {
        console.log("topic:" + message.body);
        return message.body;
      })
      ;
    this.chatMessage = this.stompService.subscribe('/user/system')
      .map((message: Message) => {
        console.log("/user/system:" + message.body);
        return message.body;
      })
      ;
  }

//   public connectWS(uri: string){
//     if ((this.ws == null) || (this.ws.readyState=== WebSocket.CLOSED)){
//       this.ws = new WebSocket(uri);
//       this.ws.onopen = function(e) {
//         // Check the protocol chosen by the server
//         console.log("WS opened ");
//       };
// // Event handler for receiving text messages
//       this.ws.onmessage = function(e) {
//         if(typeof e.data === "string"){
//           console.log("WS String message received", e, e.data);
//         } else {
//           console.log("WS Other message received", e, e.data);
//         }
//       };
// // Event handler for errors in the WebSocket object
//       this.ws.onerror = function(e) {
//         console.log("WS Error: " , e);
//         //Custom function for handling errors
//
//       };
// // Event handler for closed connections
//       this.ws.onclose = function(e) {
//         console.log("WS Connection closed", e);
//       };
//     }
//   }
//
//   public disconnectWS(){
//     this.ws.close();
//   }
//
//   public connectSockjs(uri: string){
//
//     if (this.socketjs == null) {
//       this.socketjs = new SockJS(uri);
//       console.log('connect Sockjs')
//     }
//
//   }
//   public disconnectSockjs(){
//     if (this.socketjs != null) {
//       this.socketjs.close();
//       this.socketjs = null;
//       console.log('disconnect Sockjs')
//     }
//
//   }
  public connectStomp(uri:string){
    this.stompConfig.url = uri;
    this.initStomp();
  }
  public disconnectStomp(){

    this.stompService.disconnectWithHeader(this.stompConfig.headers);
  }

  public sendMsg(msg:string){
    let m = new SubmitMessage<string>();
    m.id = "1";
    m.action = "hello";
    m.data = msg;
    this.stompService.publish('/app/guest/hello',JSON.stringify(m),this.stompConfig.headers);
  }
}
