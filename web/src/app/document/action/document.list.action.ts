import {Action} from "@ngrx/store";
import {DocumentItem} from "../model/document.model";
/**
 * Created by newmann on 2017-10-01.
 */

export const ADD_DOCUMENTITEM="[DOCUMENT] ADD";
export const ADD_DOCUMENTITEM_SUCCESS="[DOCUMENT] ADD DOCUMENTITEM SUCCESS";
export const ADD_DOCUMENTITEM_FAIL="[DOCUMENT] ADD DOCUMENTITEM FAIL";
export const DELETE_DOCUMENTITEM="[DOCUMENT] DELETE";
export const DELETE_DOCUMENTITEM_SUCCESS="[DOCUMENT] DELETE SUCCESS";
export const DELETE_DOCUMENTITEM_FAIL="[DOCUMENT] DELETE FAIL";
export const UPDATE_DOCUMENTITEM="[DOCUMENT] UPDATE";
export const UPDATE_DOCUMENTITEM_SUCCESS="[DOCUMENT] UPDATE SUCCESS";
export const UPDATE_DOCUMENTITEM_FAIL="[DOCUMENT] UPDATE FAIL";
export const LOAD_DOCUMENTITEM="[DOCUMENT] LOAD";
export const LOAD_DOCUMENTITEM_SUCCESS="[DOCUMENT] LOAD SUCCESS";
export const LOAD_DOCUMENTITEM_FAIL="[DOCUMENT] LOAD FAIL";

export class AddDocumentItem implements Action {
  readonly type = ADD_DOCUMENTITEM;
  constructor(public payload: DocumentItem) {}
}
export class AddDocumentItemSuccess implements Action {
  readonly type = ADD_DOCUMENTITEM_SUCCESS;
  constructor(public payload: DocumentItem) {}
}
export class AddDocumentItemFail implements Action {
  readonly type = ADD_DOCUMENTITEM_FAIL;
  constructor(public payload: DocumentItem) {}
}

export class DeleteDocumentItem implements Action {
  readonly type = DELETE_DOCUMENTITEM;
  constructor(public payload: DocumentItem) {}
}
export class DeleteDocumentItemSuccess implements Action {
  readonly type = DELETE_DOCUMENTITEM_SUCCESS;
  constructor(public payload: DocumentItem) {}
}
export class DeleteDocumentItemFail implements Action {
  readonly type = DELETE_DOCUMENTITEM_FAIL;
  constructor(public payload: DocumentItem) {}
}

export class UpdateDocumentItem implements Action {
  readonly type = UPDATE_DOCUMENTITEM;
  constructor(public docItem: DocumentItem) {}
}
export class UpdateDocumentItemSuccess implements Action {
  readonly type = UPDATE_DOCUMENTITEM_SUCCESS;
  constructor(public payload: DocumentItem) {}
}
export class UpdateDocumentItemFail implements Action {
  readonly type = UPDATE_DOCUMENTITEM_FAIL;
  constructor(public payload: DocumentItem) {}
}

export class LoadDocumentItem implements Action {
  readonly type = LOAD_DOCUMENTITEM;

}
export class LoadDocumentItemSuccess implements Action {
  readonly type = LOAD_DOCUMENTITEM_SUCCESS;
  constructor(public payload: DocumentItem[]) {}
}
export class LoadDocumentItemFail implements Action {
  readonly type = LOAD_DOCUMENTITEM_FAIL;
  constructor(public payload: any) {}
}

export type Actions = AddDocumentItem | AddDocumentItemSuccess | AddDocumentItemFail
  | DeleteDocumentItem | DeleteDocumentItemSuccess | DeleteDocumentItemFail
  | UpdateDocumentItem | UpdateDocumentItemSuccess | UpdateDocumentItemFail
  | LoadDocumentItem | LoadDocumentItemSuccess | LoadDocumentItemFail;
