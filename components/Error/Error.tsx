import styles from "./error.module.css";

export default function Error() {
  return (
    <div className={styles.error}>
      <h1>404</h1>

      <p>Page Not Found</p>
    </div>
  );
}
