import styles from "./SectionHeading.module.css";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

export default function SectionHeading({children}: Props)
{
  return (
    <h2 className={styles.h2}>
      {children}
    </h2>
  );
}
