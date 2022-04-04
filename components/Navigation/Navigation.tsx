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
            <h1>{appName}</h1>
          </Link>
        </div>

        <menu className={styles.actions}>
          <Link href="/users">
            <div className={styles.action}>
              <span className="material-icons">supervisor_account</span>
              <span>Users</span>
            </div>
          </Link>

          <Link href="/albums">
            <div className={styles.action}>
              <span className="material-icons">collections</span>
              <span>Albums</span>
            </div>
          </Link>
        </menu>
      </div>
    </nav>
  );
};

export default Navigtion;
