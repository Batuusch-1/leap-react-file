import styles from "@/styles/Home.module.css";
export default function Card() {
  return (
    <div className={styles.container}>
      <img
        className={styles.zurag}
        src="https://robohash.org/consecteturautaut.png?size=300x300&set=set1"
        alt=""
      />
      <h1 className={styles.name}>Erick</h1>
      <div className={styles.containerJob}>
        <p className={styles.job}>Job</p>
        <p className={styles.job}>Gender</p>
      </div>
      <p className={styles.email}>Email</p>
    </div>
  );
}
