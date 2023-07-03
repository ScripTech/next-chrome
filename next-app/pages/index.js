import styles from "../styles/Home.module.css";

const IndexPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="">BlindSpot</div>
        <h3 className={styles.title}>
          <div className="">
            Last Outcome:{" "}
            <span id="pred_seed" className={styles.pred_seed}>
              5
            </span>
          </div>
          <span>
            Next:{" "}
            <span id="pred_out" className={styles.pred_out}>
              N/P
            </span>
          </span>
        </h3>
        <div className={styles.desc} id="out_prob">
          Prob:{" "}
        </div>
      </main>

      <footer className={styles.footer}>
        <div>eZetsu</div>
      </footer>
    </div>
  );
};

export default IndexPage;
