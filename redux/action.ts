import { Place } from "./type";

export const setPlaceDetails = (place: Place) => ({
  type: "SET_PLACE_DETAILS",
  payload: place,
});
