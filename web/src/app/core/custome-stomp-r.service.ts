/**
 * @Description: ng2-stomp的StompRService中disconnect过程没有提交header信息。这里定制一下
 * @Author: newmann
 * @Date: Created in 22:25 2018-01-30
 */
import {StompRService} from "@stomp/ng2-stompjs";
import {StompHeaders} from "@stomp/ng2-stompjs/src/stomp-headers";

export class CustomeStompRService extends StompRService{

  disconnectWithHeader(header?:StompHeaders):void{
    this.client.disconnect(null,header);
  }
}
