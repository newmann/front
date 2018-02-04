/**
 * @Description: 消息格式定义
 * @Author: newmann
 * @Date: Created in 9:52 2018-01-27
 */
export class ReplayMessage<T>{
  public id: string; //消息uuid
  public submitId: string; 对应来源的消息id
  public action:string; //操作
  public data: T;//返回的信息体
}
