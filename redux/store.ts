import { createStore, combineReducers } from 'redux';
import { placeReducer } from './reducer'; // import the reducer
import { VisitedPlacesState } from './type';

const rootReducer = combineReducers({
  visitedPlaces: placeReducer,
  // other reducers if you have
});

export type RootState = {
  visitedPlaces: VisitedPlacesState;
  // other state types if you have
};

export const store = createStore(rootReducer);
