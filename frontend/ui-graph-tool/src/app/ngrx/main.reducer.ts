import { Action, createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';


// ACTIONS

export const PushLoader = createAction('[Main Action] PushLoader'); //, props<{url: string}>());
export const PopLoader = createAction('[Main Action] PopLoader');
export const setSideNavVisible = createAction('[Main Action] setSideNavVisible', props<{status: boolean}>());


// STATE


export type mainState = {
  loaderTasks: number,
  sideNavStatus: boolean,
}
const initialState: mainState = {
  loaderTasks: 0,
  sideNavStatus: true,
};


// REDUCER

export const mainReducer = createReducer(
  initialState,
  on(PushLoader, (state) => ({...state, action: PushLoader.type, loaderTasks: state.loaderTasks+1})),
  on(PopLoader, (state) => ({...state, action: PopLoader.type, loaderTasks: state.loaderTasks-1})),
  on(setSideNavVisible, (state, { status }) => ({...state, action: setSideNavVisible.type, sideNavStatus: status})),
)

export const mainFeatureKey = 'mainFeatureKey';
export const selectMainState = createFeatureSelector<mainState>(mainFeatureKey);

export const selectLoaderTasks = createSelector(
  selectMainState,
  (state) => state.loaderTasks
);

export const selectSideNavStatus = createSelector(
  selectMainState,
  (state) => state.sideNavStatus
);
