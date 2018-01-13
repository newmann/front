/**
 * 文件对象的描述，包括对目录的描述
 */
export interface IDocumentItem{
  id:string; //
  name: string;//文件名
  icon: string;//图标，一般根据文件类型、文件夹来自动匹配
  path: string;//在服务端保存的路径，以便获取
  parentPath: string;//上级目录
  parent: DocumentItem;//上级文件夹
  subItems: DocumentItem[];//本文件夹包含的所有子文件夹或文件
  position: number;
  serial:number;//slide的序号
  itemType: string;
  fileType:string;//文件类型
  createTime:Date;//提交时间
  desc: string;//简要描述
  content:string; //内容

}

export class DocumentItem implements IDocumentItem{
  ITEM_TYPE_DIR:string ="dir";
  ITEM_TYPE_FILE:string = "file";
  ITEM_TYPE_SLIDE:string = "slide";

  id:string; //
  name: string;//文件名
  icon: string;//图标，一般根据文件类型、文件夹来自动匹配
  path: string;//在服务端保存的路径，以便获取
  parentPath: string;//上级目录
  parent: DocumentItem;//上级文件夹
  subItems: DocumentItem[];//本文件夹包含的所有子文件夹或文件
  position: number;
  serial:number;//slide的序号
  itemType: string;
  fileType:string;//文件类型
  createTime:Date;//提交时间
  desc: string;//简要描述
  content:string; //内容

  constructor(model: any = null) {
    if (model) {
      this.id = model.id;
      this.name = model.name;
      this.icon = model.icon;
      this.path = model.path;
      this.parentPath = model.parentPath;
      this.parent = model.parent;
      this.subItems = this.mapSubItems(model.subItems);
      this.position = model.position;
      this.serial = model.serial;
      this.itemType = model.itemType;
      this.fileType = model.fileType;
      this.createTime = model.createTime;
      this.desc = model.desc;
      this.content = model.content;
    }
  }

  hasSubItems() {
    if (this.subItems) {
      return this.subItems.length > 0;
    }

    return false;
  }

  hasParent() {
    return !!this.parent;
  }

  mapSubItems(list: DocumentItem[]) {
    if (list) {
      list.forEach((item, index) => {
        list[index] = new DocumentItem(item);
      });

      return list;
    }
  }
}
