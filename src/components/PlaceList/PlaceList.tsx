"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
// import { toggleVisited } from '@/redux/visitedPlacesSlice';
import Link from "next/link";

import styles from "./PlaceList.module.scss";
import Image from "next/image";

export const PlacesList: React.FC = () => {
  const places = useSelector((state: RootState) => state.visitedPlaces.places);

  return (
    <div className={styles.block}>
      {places.map((place) => (
        <div key={place.id} className={styles.card}>
         {place.imageUrl ? (
            <Image
              className={styles.card__image}
              src={place.imageUrl}
              width={200}
              height={240}
              alt="Picture of the author"
            />
          ) : (
            <div className={styles.card__image_placeholder}>No Image Available</div>
          )}
          <div className={styles.card__block}>
            <h2 className={styles.card__block_title}>{place.name}</h2>
            <span className={styles.card__block_details}>
              <Link href={`/places/${place.id}`}>View Details</Link>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
