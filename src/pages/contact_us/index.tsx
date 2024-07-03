import React from "react";
import styles from "./Contact.module.scss";
import Image from "next/image";
import contact_us_image from "/public/assets/images/contact_us_image.png";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/app/constants/validation";
import { toast } from "react-toastify";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <>
      <div className={styles.contact_us}>
        <div className={styles.left_part}>
          <ContactForm />
        </div>

        <div className={styles.right_part}>
          <Image src={contact_us_image} alt="Eurasia Group Logo" className={styles.contact_us_image} sizes="100vh" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
