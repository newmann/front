/**
 * @Description: 账户类
 * @Author: newmann
 * @Date: Created in 21:05 2018-01-22
 */
import {IBaseModel} from "./i-base.model";
import {Permission} from "./permission.model";

export class Account extends IBaseModel{
  username:string;
  fullName:string;
  email:string;
  phone:string;
  nickname:string;
  passwordResetDuration:number;
  permissions: Set<Permission>;
}
