import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h2>Welcome to <span>Todos</span> Arena</h2>
      <p>Where things get done</p>

      <div className={styles.para_container}>
        <p>Irure excepteur sit qui sint.Sunt eiusmod laborum est do. 
          Lorem irure enim do ut quis exercitation officia irure reprehenderit 
          elit minim laboris. Et proident nisi ex commodo et.
           Nulla magna laborum deserunt amet proident pariatur nisi exercitation proident. 
           Enim anim aliquip non eu do sint aliqua eu voluptate aliquip nulla cupidatat nulla ex.
        </p>
        <p>Irure excepteur sit qui sint.Sunt eiusmod laborum est do. 
          Lorem irure enim do ut quis exercitation officia irure reprehenderit 
          elit minim laboris. Et proident nisi ex commodo et.
           Nulla magna laborum deserunt amet proident pariatur nisi exercitation proident. 
           Enim anim aliquip non eu do sint aliqua eu voluptate aliquip nulla cupidatat nulla ex.
        </p>
        <div className={styles.btn_container}>
          <button className={styles.btn} type="button">
            <Link href="/todos">See All Todos</Link>
          </button>
        </div>
       
      </div>
    </div>
  );
}
