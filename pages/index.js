import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Form from "../src/components/Forms/Form";

const App = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Form method={methods} />
    </FormProvider>
  );
};

export default App;
