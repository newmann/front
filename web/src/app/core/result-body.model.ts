/**
 * 从服务器调用api后返回的消息体格式
 */
export interface IResultBody{
  msg:string; //错误消息
  code: number;//错误代码，
  data: any;//返回的信息体
}
