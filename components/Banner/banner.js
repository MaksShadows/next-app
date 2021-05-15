import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__container}>
        <h1 className={styles.banner__title}>Choose the day for the meeting</h1>
        <p className={styles.banner__text}>
          We encourage you to book your appointment online.
          <br /> This will save you time.
        </p>
      </div>
    </div>
  );
};

export default Banner;
