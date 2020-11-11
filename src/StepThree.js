import React from "react";

// Hooks
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useData } from "./DataContext";

// Styles
import Typography from "@material-ui/core/Typography";

// Components
import Form from "./components/Form";
import MainContainer from "./components/MainContainer";
import { FileInput } from "./components/FileInput";
import PrimaryButton from "./components/PrimaryButton";

export const StepThree = () => {
  const history = useHistory();
  const { data, setValues } = useData();

  // control: to manually handle the events
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (data) => {
    history.push("./result");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
