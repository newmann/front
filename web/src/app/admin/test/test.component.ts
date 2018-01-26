import { Component, OnInit } from '@angular/core';
import {WebsocketService} from "../../core/websocket.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  websocketUri: string = "http://localhost:8090/beiyelin";
  sockjsStatus:number;
  constructor(private  websocketService: WebsocketService) {
    // this.sockjsStatus = websocketService.socketjs.State;
  }

  ngOnInit() {
  }
  public sockjsConnect(){
    this.websocketService.connectSockjs(this.websocketUri);
  }
  public  sockjsDisconnect(){

    this.websocketService.disconnectSockjs();
}
  public stompjsConnect(){
    this.websocketService.connectStomp();
  }
  public stompjsDisconnect(){
    this.websocketService.disconnectStomp();
  }

  public wsConnect(){
    this.websocketService.connectWS("ws://localhost:8090/beiyelin");
  }

  public wsDisconnect(){
    this.websocketService.disconnectWS();
  }
}
