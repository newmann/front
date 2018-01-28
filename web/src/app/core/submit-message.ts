/**
 * @Description: 通过stomp提交消息的消息体
 * @Author: newmann
 * @Date: Created in 9:54 2018-01-27
 */
export class SubmitMessage<T>{
  public id: string; //消息uuid
  public action:string; //操作
  public data: T;//返回的信息体
}
