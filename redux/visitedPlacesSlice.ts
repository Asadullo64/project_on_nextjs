import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Place {
  id: number;
  name: string;
  visited: boolean;
}

interface VisitedPlacesState {
  places: Place[];
}

const initialState: VisitedPlacesState = {
  places: [
    { id: 1, name: 'Great Wall of China', visited: false },
    { id: 2, name: 'Eiffel Tower', visited: false },
    { id: 3, name: 'Colosseum', visited: false },
  ],
};

const visitedPlacesSlice = createSlice({
  name: 'visitedPlaces',
  initialState,
  reducers: {
    toggleVisited: (state, action: PayloadAction<number>) => {
      const place = state.places.find(place => place.id === action.payload);
      if (place) {
        place.visited = !place.visited;
      }
    },
  },
});

export const { toggleVisited } = visitedPlacesSlice.actions;
export default visitedPlacesSlice.reducer;
