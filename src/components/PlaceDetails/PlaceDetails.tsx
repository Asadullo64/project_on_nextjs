// components/PlaceDetails.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setPlaceDetails } from "@/redux/action";
import Image from "next/image";
import Link from "next/link";

import styles from "./PlaceDetails.module.scss";

interface PlaceDetailsProps {
  id: number;
}

export const PlaceDetails: React.FC<PlaceDetailsProps> = ({ id }) => {
  const place = useSelector((state: RootState) =>
    state.visitedPlaces.places.find((p) => p.id === id)
  );
  const dispatch = useDispatch();

  if (!place) return <div>Loading...</div>;

  const handleUpdate = () => {
    const updatedPlace = { ...place, visited: !place.visited };
    dispatch(setPlaceDetails(updatedPlace));
  };

  return (
    <div className={styles.detail}>
      <div className="padding">
        <button className={styles.button}>
          <Link href={`/`}>Back</Link>
        </button>
      </div>
      <div className="container">
        <div className={styles.detail__block}>
          <div>
          {place.imageUrl ? (
              <Image
                className={styles.detail__image}
                src={place.imageUrl}
                width={200}
                height={240}
                alt="Picture of the author"
              />
            ) : (
              <div>No Image Available</div>
            )}
          </div>
          <div className={styles.detail__info}>
            <h1 className={styles.detail__info__name}>{place.name}</h1>
            <p className={styles.detail__info__descr}>{place.description1}</p>
            <br />
            <p className={styles.detail__info__descr}>{place.description2}</p>
            <div className="padding">
              <button
                className={`${styles.button} ${
                  place.visited ? styles.unmarkButton : styles.markButton
                }`}
                onClick={handleUpdate}
              >
                {place.visited ? "Unmark as Visited" : "Mark as Visited"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
