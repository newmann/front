/**
 * Created by newmann on 2017-10-01.
 */
import * as fromPathList from './document.list.reducer';
import * as fromRoot from '../../reducer';
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface DocumentState {
  pathList: fromPathList.State;
}

export interface State extends fromRoot.State {
  'document': DocumentState;
}

export const reducers = {
  pathList: fromPathList.reducer
};

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */

export const getDocumentState = createFeatureSelector<DocumentState>('document');
/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */

export const getPathListState = createSelector(
  getDocumentState,
  (state: DocumentState) => state.pathList
);

export const getPathListLoaded = createSelector(
  getPathListState,
  fromPathList.getLoaded
);

export const getPathListLoading = createSelector(
  getPathListState,
  fromPathList.getLoading
);

export const getPathList = createSelector(
  getPathListState,
  fromPathList.getPathList
);
