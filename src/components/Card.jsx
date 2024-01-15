import styles from "@/styles/Home.module.css";
import array from "./dataArray";
export default function Card() {
  console.log(array);

  return (
    <>
      {array.map((el) => (
        <div className={styles.container}>
          <img className={styles.zurag} src={el.avatar} alt="" />
          <h1 className={styles.name}>{el.first_name}</h1>
          <div className={styles.containerJob}>
            <p className={styles.job}>{el.employment.title}</p>
            <p className={styles.job}>{el.gender}</p>
          </div>
          <p className={styles.email}>{el.email}</p>
        </div>
      ))}
    </>
  );
}
