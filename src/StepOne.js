import React from 'react'

// Hooks
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useData } from "./DataContext";

// Styles
import Typography from "@material-ui/core/Typography";

// Components
import MainContainer from "./components/MainContainer";
import Form from "./components/Form";
import Input from "./components/Input";
import PrimaryButton from "./components/PrimaryButton";

// Validation
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
});

export const StepOne = () => {

  const { setValues, data } = useData();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onBlur",
    resolver: yupResolver(schema)
  });

  const history = useHistory();

  const onSubmit = (data) => {
    history.push("./stepTwo");
    setValues(data);
  }

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input 
          ref={ register }
          name="firstName"
          type="text"
          label="First Name"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          ref={ register }
          name="lastName"
          type="text"
          label="Last Name"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryButton type="submit">Next</PrimaryButton>
      </Form>
      
    </MainContainer>
  )
}
