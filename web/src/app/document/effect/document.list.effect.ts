import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';

import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {DocumentService} from "../document.service";
import {Action} from "@ngrx/store";
import {Observable} from "rxjs";
import { of } from 'rxjs/observable/of';
import * as PathListAction from '../action/document.list.action';
import {DocumentItem} from "../model/document.model";
import {HttpClient} from "@angular/common/http";
/**
 * Created by newmann on 2017-10-01.
 */


@Injectable()
export class PathListEffects {
  constructor(private actions$: Actions,  private documentService: DocumentService) {}

  // @Effect() loadPathList$: Observable<Action> = this.actions$
  //   .ofType(PathListAction.LOAD_DOCUMENTITEM)
  //   .switchMap(() =>
  //     // this.http
  //     //   .get("http://localhost:4200/api/document/list-all-paths?path=" + encodeURI("\\"))
  //     //   .do((lists:DocumentItem[]) => {console.log(lists)})
  //     //   .map((lists:DocumentItem[])=>{new pathListAction.LoadDocumentItemSuccess(lists)})
  //     //   .catch((error) => of(new pathListAction.LoadDocumentItemFail(error) || {}))
  //     this.documentService
  //       .getAllPathList()
  //       // .do((lists:DocumentItem[]) => {console.log(lists)})
  //       .map((lists:DocumentItem[])=>{
  //         console.log('开始发送action LoadDocumentItemSuccess');
  //         console.log(lists);
  //         return new PathListAction.LoadDocumentItemSuccess(lists);
  //       })
  //       .catch((error) => of(new PathListAction.LoadDocumentItemFail(error) || {}))
  //
  //   );

}
