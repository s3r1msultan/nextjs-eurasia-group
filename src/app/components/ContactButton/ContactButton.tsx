import ArrowTopRightIcon from "@/app/icons/ArrowTopRightIcon";
import Link from "next/link";
import React from "react";
import styles from "./ContactButton.module.scss";

const ContactButton = ({ className, onClick, ...props }: { className?: string; onClick?: () => void }) => {
  return (
    <Link href={"/contact_us"} className={styles.contact_us_wrapper}>
      <button className={`${styles.contact_us} ${className}`} {...props} onClick={onClick}>
        <span>Связаться с нами</span>
        <ArrowTopRightIcon className={styles.arrow} />
      </button>
    </Link>
  );
};

export default ContactButton;
