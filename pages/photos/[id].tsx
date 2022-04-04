import Image from "next/image";
import { Photo } from "../index";

import layout from "../../styles/Layout.module.css";

type PhotoProps = {
  photo?: Photo;
  error?: string;
};

const SinglePhoto = ({ photo, error }: PhotoProps) => {
  if (error) {
    return <p>{error}</p>;
  }

  if (!photo || !photo.thumbnailUrl) {
    return <></>;
  }

  return (
    <div className={layout.page}>
      <Image src={photo.url} alt={photo.title} height={600} width={600} />
      <h3>{photo.title}</h3>

      <div>
        <h4>Appears in album</h4>
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
