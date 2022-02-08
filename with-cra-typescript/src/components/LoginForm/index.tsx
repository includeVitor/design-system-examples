import { useCallback, useEffect } from "react";
import {
  Button,
  FormStatus,
  Input,
  useForm,
  useToast,
} from "react-martins-component-library";
import * as Yup from "yup";

const schema = Yup.object().shape({
  Login: Yup.string().required("Preencha o Login"),
  Password: Yup.string().required("Preencha a Senha"),
});

const LoginForm = () => {
  const toast = useToast();

  const {
    fields,
    fieldsErrors,
    formStatus,
    handleChange,
    onFormSubmit,
    setFormStatus,
    setFieldsErrors,
  } = useForm({
    schema,
    fieldsInitialValue: { Login: "", Password: "" },
  });

  const handleSubmit = useCallback(() => {
    setFormStatus(FormStatus.SUBMITTING);

    setTimeout(() => {
      if (fields.Login === "error") {
        setFormStatus(FormStatus.SUBMITTED);

        setTimeout(() => {
          setFieldsErrors({
            Login: "mensagem de error",
            Password: "mensagem de error",
          });
        }, 0);
      } else {
        setFormStatus(FormStatus.COMPLETED);
      }
    }, 3000);
  }, [fields]);

  useEffect(() => {
    if (formStatus == FormStatus.COMPLETED)
      toast.addToast({ message: "sucesso", type: "success" });
  }, [formStatus]);

  return (
    <form onSubmit={onFormSubmit(handleSubmit)}>
      <Input
        error={{ message: fieldsErrors?.Login }}
        name="Login"
        label="Login"
        width={400}
        value={fields.Login}
        onChange={handleChange}
      />
      <Input
        error={{ message: fieldsErrors?.Password }}
        name="Password"
        label="Password"
        width={400}
        value={fields.Password}
        onChange={handleChange}
      />
      <Button
        label="Entrar"
        width="400px"
        loading={formStatus == FormStatus.SUBMITTING}
      />
    </form>
  );
};

export { LoginForm };
