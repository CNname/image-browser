import Link from "next/link";
import Error from "../components/Error/Error";

import styles from "../styles/Layout.module.css";

export default function ErrorPage() {
  return (
    <article className={styles.page}>
      <Error />

      <Link href="/">
        <a>
          <span className="material-icons">undo</span>
          Go back home
        </a>
      </Link>
    </article>
  );
}
