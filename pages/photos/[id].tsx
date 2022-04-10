import Image from "next/image";
import { Photo } from "../index";
import NetworkError from "../../components/NetworkError";
import HomeLink from "../../components/HomeLink";
import { BLUR_DATA_URL, httpStatusCodes } from "../../lib/consts";

import layout from "../../styles/Layout.module.css";
import styles from "../../styles/Photo.module.css";

type PhotoProps = {
  photo?: Photo;
  error?: string;
};

const SinglePhoto = ({ photo, error }: PhotoProps) => {
  if (error) {
    return (
      <div className={layout.page}>
        <NetworkError
          code={httpStatusCodes.INTERNAL_SERVER_ERROR}
          message={error.toString()}
        />
      </div>
    );
  }

  if (!photo || !photo.thumbnailUrl) {
    return <></>;
  }

  return (
    <div className={layout.page}>
      <HomeLink />
      <div className={layout.content}>
        <Image
          src={photo.url}
          alt={photo.title}
          height={600}
          width={600}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        <div className={styles.title}>
          <sup>Title</sup>
          <h3>{photo.title}</h3>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }: { params: { id: string } }) {
  let photo: Photo | null = null;
  let error: string | null = null;

  try {
    const res = await fetch(
      `${process.env.API_URL}/photos/${encodeURIComponent(params.id)}`
    );
    photo = await res.json();
    if (!photo?.thumbnailUrl) {
      return {
        notFound: true,
      };
    }
  } catch {
    return {
      notFound: true,
    };
  }

  return { props: { photo, error } };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default SinglePhoto;
