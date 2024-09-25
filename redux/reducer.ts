import { initialState } from "./initialState";
import { VisitedPlacesState } from "./type";

export const placeReducer = (
  state: VisitedPlacesState = initialState,
  action: any
) => {
  switch (action.type) {
    case "SET_PLACE_DETAILS":
      return {
        ...state,
        places: state.places.map((place) =>
          place.id === action.payload.id ? action.payload : place
        ),
      };
    // other cases
    default:
      return state;
  }
};
