import { Injectable } from '@angular/core';
import { ToolbarNotificationModel } from './toolbar-notification.model';

import {WebsocketService} from "../../../core/websocket.service";
import {Observer} from "rxjs/Observer";
import {BeiyelinMessageModel} from "../../../core/beiyelin-message.model";

@Injectable()
export class ToolbarNotificationService {

  notifications: ToolbarNotificationModel[];
  notifySource: Observer<BeiyelinMessageModel<any>>;
  constructor(private msgServie: WebsocketService) {

    this.msgServie.chatMessage.subscribe(this.notifySource);

    this.notifications = [
      // {
      //   id: 'id',
      //   title: '计划升级到angular 5',
      //   lastTime: '23 分钟之前',
      //   state: 'state'
      // },
      // {
      //   id: 'id',
      //   title: '0.4.5 版本更新记录',
      //   lastTime: '23 分钟之前',
      //   state: 'state'
      // },
      // {
      //   id: 'id',
      //   title: '优化项目结构',
      //   lastTime: '23 分钟之前',
      //   state: 'state'
      // },
      // {
      //   id: 'id',
      //   title: '添加base框架分支',
      //   lastTime: '23 分钟之前',
      //   state: 'state'
      // },
      // {
      //   id: 'id',
      //   title: '框架搭建完成',
      //   lastTime: '23 分钟之前',
      //   state: 'state'
      // }

    ];

    this.notifySource = {
      next: msg => {
        let item : ToolbarNotificationModel = new ToolbarNotificationModel();
        item.id = msg.id;
        item.title = msg.data.toString();
        item.lastTime = msg.sendTime.toDateString();
        item.state = "state";
        this.notifications.push(item);
      },
      error: err => {},
      complete: () => {}
      }
  }

  select() {
    return this.notifications;
  }

  delete(notification) {

  }

  update() {

  }

}
