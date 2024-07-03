import * as yup from "yup";
export const schema = yup.object().shape({
  name: yup.string().required("Имя обязательно для заполнения"),
  email: yup.string().email("Введите действительный email").required("Email обязателен для заполнения"),
  phone: yup
    .string()
    .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Введите действительный телефон")
    .required("Телефон обязателен для заполнения"),
  agreement: yup
    .bool()
    .oneOf([true], "Необходимо согласие с политикой конфиденциальности")
    .required("Необходимо согласие с политикой конфиденциальности"),
});
