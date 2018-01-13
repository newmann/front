import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import {DataSource} from "@angular/cdk/collections";
import {FileItem, FileUploader} from "ng2-file-upload";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {DocumentService} from "../../document.service";

@Component({
  selector: 'byl-document-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @Input("uploadPath")
  uploadPath: String | "";//文件提交到后台的路径

  @ViewChild('fileUpload')
  fileUpload: ElementRef;

  displayedColumns = ['name', 'size', 'progress', 'status','action'];

  uploader: FileUploader;
  dataSource: FileDataSource | null;
  fileList$: BehaviorSubject<FileItem[]>;

  constructor(docService: DocumentService) {
    this.uploader = new FileUploader({
      url: docService.getUploadFileAPI(),
      method: "POST",
      itemAlias: "file",
      autoUpload: false

    });
  }

  ngOnInit() {

    this.fileList$ = new BehaviorSubject<FileItem[]>([]);
    this.dataSource = new FileDataSource(this.fileList$);

    this.uploader.onBuildItemForm = this.buildItemForm;
    this.uploader.onBeforeUploadItem = this.onBeforeUploadItem;
  }

  buildItemForm(fileItem: FileItem, form: any): any{
    console.log("in buildItemForm");
    form.append("name", fileItem.file.name);
    form.append("parentPath", this.uploadPath);
    form.append("createTime", fileItem._file.lastModifiedDate.valueOf());
    form.append("desc", fileItem.file.type);
    return { fileItem, form };
  }

  onBeforeUploadItem(fileItem: FileItem): any {
    console.log("in onBeforeUploadItem");
    console.log(fileItem);
    return { fileItem };
  }

  selectedFileOnChanged(event:FileItem[]) {
    // 这里是文件选择完成后的操作处理

    //将后台需要的文件提交的信息绑定到FileItem上
    for (let file of event) {
      console.log(file);
      // file.formData.push("name: " + file.file.name);
      // file.formData.push("parentPath: " + this.uploadPath);
      // file.formData.push("createTime: " + file.file.lastModifiedDate);
      // file.formData.push("desc: " + file.file.type);
    }
    console.log(this.uploader.queue);
    this.fileList$.next(this.uploader.queue);//将选择的文档发送出去
  }

  // // 定义事件，上传文件
  // uploadFile() {
  //   // 上传
  //   this.uploader.queue[0].onSuccess = function (response, status, headers) {
  //     // 上传文件成功
  //     if (status == 200) {
  //       // 上传文件后获取服务器返回的数据
  //       let tempRes = JSON.parse(response);
  //     } else {
  //       // 上传文件后获取服务器返回的数据错误
  //       alert("");
  //     }
  //   };
  //   this.uploader.queue[0].upload(); // 开始上传
  // }

  fileSelect(): any{
    this.fileUpload.nativeElement.click();
  }
  fileAllUp(): any{
    this.uploader.uploadAll();
  }
  fileAllCancel(): any{
    this.uploader.cancelAll();
  }

  fileAllDelete(): any{
    this.uploader.clearQueue();
    this.fileList$.next(this.uploader.queue);//将清除后的的文档列表发送出去
  }

  //删除某个文件
  removeFile(item: FileItem){
    item.remove();
    this.fileList$.next(this.uploader.queue);
  }

}

export interface uploadFile {
  name: string;
  size: number;
  progress: number;
  status: string;
}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class FileDataSource extends DataSource<FileItem> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */

  constructor(private fileList$:Observable<FileItem[]>){
    super()
  }

  connect(): Observable<FileItem[]> {
    return this.fileList$;
  }

  disconnect() {}
}
