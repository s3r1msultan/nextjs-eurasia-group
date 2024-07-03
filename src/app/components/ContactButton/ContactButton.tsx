import ArrowTopRightIcon from "@/app/icons/ArrowTopRightIcon";
import Link from "next/link";
import React from "react";
import styles from "./ContactButton.module.scss";

const ContactButton = ({ className, onClick, ...props }: { className?: string; onClick?: () => void }) => {
  return (
    <button className={`${styles.contact_us} ${className}`} {...props} onClick={onClick}>
      <Link href={"/contact_us"}>
        <span>Связаться с нами</span>
        <ArrowTopRightIcon className={styles.arrow} />
      </Link>
    </button>
  );
};

export default ContactButton;
