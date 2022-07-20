import React from "react";
import Name from "../Forms/name";
import Email from "../Forms/Email";
import { useFormContext } from "react-hook-form";

const Form = (props) => {
  const { method } = props;

  const { reset } = useFormContext();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={method.handleSubmit(onSubmit)}>
      <Name />
      <Email />
      <button type="submit">Inscrever-se</button>
      <button
        onClick={() => {
          reset({
            name: "",
            email: "",
          });
        }}
      >
        Limpar campos
      </button>
    </form>
  );
};

export default Form;
