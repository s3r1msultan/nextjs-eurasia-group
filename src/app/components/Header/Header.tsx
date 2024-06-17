import Image from "next/image";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.menuIcon}>
        <span>&#9776;</span>
      </div>
      <div className={styles.logo}>
        <Image src="/assets/images/logo.png" alt="Logo" width={150} height={50} />
      </div>
      <div className={styles.profileIcon}>
        <Image src="/assets/images/profile.png" alt="Profile" width={30} height={30} />
      </div>
    </header>
  );
};

export default Header;
