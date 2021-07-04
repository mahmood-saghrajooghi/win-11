import { AppState } from ".";
import { AppActions } from "../types/actions";

export type LoadingState = {
  isLoading: Record<string, boolean>
  loadingStatus: Record<string, string | null>
};

const reducer = (state: LoadingState = {
  isLoading: {},
  loadingStatus: {}
}, action: AppActions): LoadingState => {
  const { type } = action;
  const matches = /(.*)\/(REQUEST|SUCCESS|FAILURE|RESET)/.exec(type);

  // Ignore non-routine actions:
  //   A routine action should have one of three suffixes: 
  //   ['/REQUEST', '/SUCCESS', '/FAILURE']
  if (!matches) return state;

  const [, routineType, status] = matches;

  return {
    ...state,
    // Set loading state to true only when the status is "REQUEST"
    //    Otherwise set the loading state to false
    isLoading: {
      ...state.isLoading,
      [routineType]: status === 'REQUEST'
    },
    loadingStatus: {
      ...state.loadingStatus,
      [routineType]: status
    }
  }
};
export default reducer;



// Select the whole loading state object
export const selectLoadingState = (state: AppState) => state.loading.isLoading;

// Select whether a given routine is loading
export const selectLoading = (routineType: string) => (state: AppState) => {
  return Boolean(state.loading.isLoading[routineType]);
};

export const selectLoadingStatus = (routineType: string) => (state: AppState) => {
  return state.loading.loadingStatus[routineType];
};

// Select whether any routine is loading
export const selectAnyLoading = (state: AppState) => Object.values(state.loading.isLoading).some(Boolean);

// Select whether any of a given set of routines is loading
export const selectSomeLoading = (routineTypes: string[]) => (state: AppState) => {
  return routineTypes.some(routineType => Boolean(state.loading.isLoading[routineType]));
};
