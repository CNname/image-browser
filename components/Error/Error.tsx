import styles from "./error.module.css";

type ErrorProps = {
  code: number;
  message: string;
};

const Error = ({ code, message }: ErrorProps) => {
  return (
    <div className={styles.error}>
      <h1>{code}</h1>

      <p>{message}</p>
    </div>
  );
};

export default Error;
