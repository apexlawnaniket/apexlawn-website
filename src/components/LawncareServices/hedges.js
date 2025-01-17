"use client";
import Image from "next/image";
import styles from "../../../app/lawncare/lawncare.module.css";
import { basePath } from "@/next.config";

export default function Hedges() {
  return (
    <div className={`${styles.service} ${styles.reverse}`}>
      <div className={styles.serviceText}>
        <h2>Hedges</h2>
        <p className={styles.priceList}>
          <strong>Hedge Trimming S $3 · M $6 · L $9 · O $12</strong>
        </p>
        <p>
          Hedges can be rounded or squared. Hedge trimming is priced per hedge.
          Hand-pruning and shaping is also available for an hourly fee.​​​
        </p>
      </div>

      <div className={styles.serviceImage}>
        <Image
          src={`/assets/hedge1.JPG`}
          alt="full Service"
          width={300}
          height={200}
          className={styles.image}
        />
      </div>
    </div>
  );
}
