
"use client"; 

import { useParams } from 'next/navigation';
import { PlaceDetails } from '@/src/components';

const PlacePage = () => {
  const { id } = useParams(); 

  if (!id) return <div>Loading...</div>;

  return <PlaceDetails id={parseInt(id as string, 10)} />;
};

export default PlacePage;
