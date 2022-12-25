import { Action, createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';


// ACTIONS
export const mainActions = {
  PushLoader: createAction('[Main Action] PushLoader'),
  PopLoader: createAction('[Main Action] PopLoader'),
  setSideNavVisible: createAction('[Main Action] setSideNavVisible', props<{status: boolean}>()),
  setKeyboardFocudEle: createAction('[Main Action] setKeyboardFocudEle', props<{payload: any}>()),
  setAllStories: createAction('[Main Action] setAllStories', props<{allStories: any}>()),
  setSelectedStory: createAction('[Main Action] setSelectedStory', props<{selectedStory: any}>()),
}


// STATE


export type mainState = {
  allStories: any[],
  selectedStory: any,
  loaderTasks: number,
  sideNavStatus: boolean,

  payload: any,
  action: string,
}
const initialState: mainState = {
  allStories: null,
  selectedStory: null,
  loaderTasks: 0,
  sideNavStatus: true,

  payload: null,
  action: null,
};


// REDUCER

export const mainReducer = createReducer(
  initialState,

  on(mainActions.PushLoader, (state) => ({...state, action: mainActions.PushLoader.type, loaderTasks: state.loaderTasks+1})),
  on(mainActions.PopLoader, (state) => ({...state, action: mainActions.PopLoader.type, loaderTasks: state.loaderTasks-1})),

  on(mainActions.setAllStories, (state, { allStories }) => ({...state, action: mainActions.setAllStories.type, allStories: allStories})),
  on(mainActions.setSelectedStory, (state, { selectedStory }) => ({...state, action: mainActions.setSelectedStory.type, selectedStory: selectedStory})),
  on(mainActions.setSideNavVisible, (state, { status }) => ({...state, action: mainActions.setSideNavVisible.type, sideNavStatus: status})),
  on(mainActions.setKeyboardFocudEle, (state, { payload }) => ({...state, action: mainActions.setKeyboardFocudEle.type, payload: payload})),
)

export const mainFeatureKey = 'mainFeatureKey';
export const selectMainState = createFeatureSelector<mainState>(mainFeatureKey);

export const selectAllStories = createSelector(
  selectMainState,
  (state) => state.allStories
);

export const selectSelectedStory = createSelector(
  selectMainState,
  (state) => state.selectedStory
);

export const selectLoaderTasks = createSelector(
  selectMainState,
  (state) => state.loaderTasks
);

export const selectSideNavStatus = createSelector(
  selectMainState,
  (state) => state.sideNavStatus
);
