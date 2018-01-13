import { Injectable } from '@angular/core';

import {DocumentItem} from "./model/document.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';

/**
 *
 */
@Injectable()
export class DocumentService{
  private API_PATH = 'http://localhost:4200/api/document';

  private API_UPLOAD_FILE = "add-file";

  constructor(private http: HttpClient){

  }

  getUploadFileAPI():string{
    return `${this.API_PATH}/${this.API_UPLOAD_FILE}`;
  }

  /**
   * 取所有下级的路径，包括子目录
   */
  getAllPathList():Observable<DocumentItem[]>{
    let path: string ="list-all-paths?path=";
    path = path+ encodeURI("\\");
    return this.http
      .get<DocumentItem[]>(`${this.API_PATH}/${path}`);

  }


}
