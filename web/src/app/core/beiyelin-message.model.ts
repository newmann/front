/**
 * @Description: 自定义消息体
 * @Author: newmann
 * @Date: Created in 14:32 2018-02-03
 */

export class BeiyelinMessageModel<T>{
  public id: string; //消息uuid
  public fromId: string; //发送方id,如果是账户，就是账户的id，如果是系统，就是sys。这几个字不会出现在账户id中。
  public toId: string;
  public targetMsgId: string; //针对某个消息的回复
  public sendTime: Date;
  public recvTime: Date;
  public action:string; //操作
  public data: T;//信息体内容

}
