import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Image from "next/image";
import Link from "next/link";

import layout from "../styles/Layout.module.css";
import styles from "../styles/Photos.module.css";

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type PhotosProps = {
  photos: Photo[];
  apiUrl: string;
};

const Photos = ({ photos, apiUrl }: PhotosProps) => {
  const [loadedPhotos, setLoadedPhotos] = useState<Photo[]>(photos);
  const [loading, setLoading] = useState(false);
  const [moreToLoad, setMoreToLoad] = useState(true);

  const loadPhotos = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${apiUrl}/photos?_limit=50&_start=${loadedPhotos.length}`
      );
      const newPhotos = await res.json();
      if (newPhotos.length === 0) {
        setMoreToLoad(false);
      }
      setLoadedPhotos(loadedPhotos.concat(newPhotos));
    } catch {}

    setLoading(false);
  };

  return (
    <InfiniteScroll
      dataLength={loadedPhotos.length}
      next={!loading ? loadPhotos : () => {}}
      hasMore={moreToLoad}
      className={layout.grid}
      loader={<p>Loading</p>}
      endMessage={<p>Nothing more to show</p>}
    >
      {loadedPhotos?.map((photo, index) => (
        <Link href={`/photos/${encodeURIComponent(photo.id)}`} key={index}>
          <div className={styles.wrapper} title={photo.title}>
            <Image
              className={styles.image}
              src={photo.thumbnailUrl}
              alt={photo.title}
              height={200}
              width={200}
            />
            <figcaption className={styles.caption}>{photo.title}</figcaption>
          </div>
        </Link>
      ))}
    </InfiniteScroll>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/photos?_limit=50`);
  const photos = await res.json();

  return {
    props: {
      photos,
      apiUrl: process.env.API_URL,
    },
  };
}

export default Photos;
