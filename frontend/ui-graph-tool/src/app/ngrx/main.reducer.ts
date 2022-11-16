import { Action, createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';


// ACTIONS

export const PushLoader = createAction('[Main Action] PushLoader'); //, props<{url: string}>());
export const PopLoader = createAction('[Main Action] PopLoader');


// STATE


export type mainState = {
  loaderTasks: number,
}
const initialState: mainState = {
  loaderTasks: 0,
};


// REDUCER

export const mainReducer = createReducer(
  initialState,
  on(PushLoader, (state) => ({...state, action: PushLoader.type, loaderTasks: state.loaderTasks+1})),
  on(PopLoader, (state) => ({...state, action: PopLoader.type, loaderTasks: state.loaderTasks-1})),
  // on(PushLoader, (state, { url }) => ({...state, action: PushLoader.type, loadedMainUrl: url})),
)

export const mainFeatureKey = 'mainFeatureKey';
export const selectMainState = createFeatureSelector<mainState>(mainFeatureKey);

export const selectLoaderTasks = createSelector(
  selectMainState,
  (state) => state.loaderTasks
);
