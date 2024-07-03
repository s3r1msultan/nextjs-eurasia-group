import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import styles from "./Contact.module.scss";
import { schema } from "@/app/constants/validation";

const ContactForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [phoneValue, setPhoneValue] = useState("");

  const onSubmit = async (data: any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Форма успешно отправлена!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      });
    } catch (error) {
      toast.error("Произошла ошибка при отправке формы.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "");
    const phoneNumberLength = 11;

    if (input.length <= phoneNumberLength) {
      let formattedValue = "+7 (";
      if (input.length > 1) formattedValue += input.slice(1, 4);
      if (input.length >= 5) formattedValue += `) ${input.slice(4, 7)}`;
      if (input.length >= 8) formattedValue += `-${input.slice(7, 9)}`;
      if (input.length >= 10) formattedValue += `-${input.slice(9, 11)}`;
      setPhoneValue(formattedValue);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
        <h2>СВЯЗАТЬСЯ С НАМИ</h2>

        <div className={styles.formGroup}>
          <label htmlFor="name">Имя</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <input {...field} placeholder="Введите имя" value={field.value || ""} />}
          />
          {errors.name && <span className={styles.error}>{errors.name.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <input {...field} placeholder="Введите email" value={field.value || ""} />}
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Телефон</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                value={phoneValue}
                onChange={(e) => {
                  field.onChange(e);
                  handlePhoneChange(e);
                }}
                placeholder="+7 (___) ___-__-__"
              />
            )}
          />
          {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <Controller
            name="agreement"
            control={control}
            render={({ field }) => (
              <div className={styles.checkbox}>
                <input type="checkbox" {...field} checked={field.value || false} />
                <span>
                  Я соглашаюсь с <a href="#">политикой конфиденциальности</a>
                </span>
              </div>
            )}
          />
          {errors.agreement && <span className={styles.error}>{errors.agreement.message}</span>}
        </div>

        <button type="submit">Отправить</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
