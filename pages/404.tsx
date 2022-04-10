import HomeLink from "../components/HomeLink";
import NetworkError from "../components/NetworkError";

import { httpStatusCodes } from "../lib/consts";

import styles from "../styles/Layout.module.css";

export default function ErrorPage() {
  return (
    <article className={styles.page}>
      <HomeLink />
      <NetworkError code={httpStatusCodes.NOT_FOUND} message="Page Not Found" />
    </article>
  );
}
