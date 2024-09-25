export interface Place {
  id: number;
  name: string;
  visited: boolean;
  description?: string; // Add description for detailed view
  description1?: string;
  description2?: string;
  imageUrl?: string; // Optional image URL
}

export interface VisitedPlacesState {
  places: Place[];
}
