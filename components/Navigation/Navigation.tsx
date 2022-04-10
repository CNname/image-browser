import Link from "next/link";

import styles from "./navigation.module.css";

type NavigationProps = {
  appName: string;
};

const Navigtion = ({ appName }: NavigationProps): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href={"/"}>
            <h1 className={styles.appName}>{appName}</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigtion;
