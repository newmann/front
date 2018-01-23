/**
 * @Description:
 * @Author: newmann
 * @Date: Created in 21:04 2018-01-22
 */
import {IBaseModel} from "./i-base.model";

export class Permission extends IBaseModel{

  packageName: string;
  moduleName: string;
  action: string;
}
