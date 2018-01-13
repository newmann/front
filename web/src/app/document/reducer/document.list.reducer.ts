/**
 * Created by newmann on 2017-10-01.
 */
import * as pathlist from '../action/document.list.action';
import {DocumentItem} from "../model/document.model";

export interface State {
  loaded: boolean;
  loading: boolean;
  pathList: DocumentItem[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  pathList: [],
};

export function reducer(
  state = initialState,
  action: pathlist.Actions
): State {
  switch (action.type) {
    case pathlist.LOAD_DOCUMENTITEM: {
      return {
        ...state,
        loading: true,
      };
    }

    case pathlist.LOAD_DOCUMENTITEM_SUCCESS: {
      console.log('调用reducer');
      console.log(action.payload);
      return {
        // ...state,
        loaded: true,
        loading: false,
        pathList: action.payload,
        // pathList: action.payload.map(documentItem => documentItem),
      };
    }

    // case pathlist.ADD_DOCUMENTITEM_SUCCESS:
    // case pathlist.DELETE_DOCUMENTITEM_FAIL: {
    //   return state;
    // }
    //
    // case pathlist.DELETE_DOCUMENTITEM_SUCCESS:
    // case pathlist.ADD_DOCUMENTITEM_FAIL: {
    // }

    default: {
      return state;
    }
  }
}


export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getPathList = (state: State) => state.pathList;
