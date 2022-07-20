import React from "react";
import { useFormContext } from "react-hook-form";

const Email = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <input
        type="text"
        placeholder="Digite seu e-mail"
        {...register("email", { required: true })}
      />
      <p>{errors.email?.type === "required" && "Digite seu e-mail"}</p>
    </div>
  );
};

export default Email;
