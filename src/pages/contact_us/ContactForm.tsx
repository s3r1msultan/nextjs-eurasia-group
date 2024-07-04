import React, { useState } from "react";
import { useForm, Controller, set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
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
    <div className={styles.contact_form_wrapper}>
      <h2 className={`section_title ${styles.title}`}>Связаться с нами</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.contact_form}>
        <div className={styles.form_group}>
          <label htmlFor="name">Имя</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <input {...field} type="text" placeholder="Введите имя" value={field.value || ""} />}
          />
          {errors.name && <span className={styles.error}>{errors.name.message}</span>}
        </div>

        <div className={styles.form_group}>
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input {...field} type="email" placeholder="Введите email" value={field.value || ""} />
            )}
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>

        <div className={styles.form_group}>
          <label htmlFor="phone">Телефон</label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="tel"
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

        <div className={styles.form_group}>
          <Controller
            name="agreement"
            control={control}
            render={({ field }) => (
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  {...field}
                  checked={field.value || false}
                  value={field.value ? "true" : "false"}
                />
                <span>
                  Я соглашаюсь с <a href="#">политикой конфиденциальности</a>
                </span>
              </div>
            )}
          />
          {errors.agreement && <span className={styles.error}>{errors.agreement.message}</span>}
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Отправка..." : "Отправить"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
