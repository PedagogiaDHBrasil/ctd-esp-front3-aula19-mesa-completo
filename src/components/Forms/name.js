import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const Name = () => {
  const {
    register,
    watch,
    setFocus,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  console.log(watch("email"));

  return (
    <div>
      <h2>Inscreva-se na Newsletter</h2>
      <input
        type="text"
        placeholder="Digite seu nome"
        {...register("name", { required: true })}
      />
      <p>{errors.name?.type === "required" && "Digite seu name"}</p>
    </div>
  );
};

export default Name;
