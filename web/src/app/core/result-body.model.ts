/**
 * 从服务器调用api后返回的消息体格式
 */
export class ResultBody{
  RESULT_CODE_NO_LOGIN:number = -1;
  RESULT_CODE_SUCCESS:number = 0;
  RESULT_CODE_CHECK_FAIL:number = 1;
  RESULT_CODE_CHECK_NO_PERMISSION:number = 2;
  RESULT_CODE_CHECK_UNKNOWN_EXCEPTION:number = -99;

  msg:string; //错误消息
  code: number;//错误代码，
  data: any;//返回的信息体
}
