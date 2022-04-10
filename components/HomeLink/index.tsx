import Link from "next/link";

import styles from "./HomeLink.module.css";

const HomeLink = () => (
  <div className={styles.wrapper}>
    <Link href="/">
      <a>
        <span className="material-icons">undo</span>
        Go back home
      </a>
    </Link>
  </div>
);

export default HomeLink;
