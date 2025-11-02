import styles from "./SectionHeading.module.css";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  useCount: boolean;
}

export default function SectionHeading({ children, className, useCount = true}: Props)
{
  return (
    <h2 className={`${styles.h2} ${className} ${!useCount ? styles.noCount : undefined}`} >
      {children}
    </h2>
  );
}
