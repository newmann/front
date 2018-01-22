/**
 * @Description: 所有类的基础类
 * @Author: newmann
 * @Date: Created in 21:08 2018-01-22
 */

export abstract class IBaseModel{
  id: string;
  createDate: Date;
  createBy: string;
  updateDate: Date;
  updateBy: string;
  remarks: string;
}
