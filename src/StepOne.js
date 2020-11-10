import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";

// Components
import MainContainer from "./components/MainContainer";
import Form from "./components/Form";
import Input from "./components/Input";
import PrimaryButton from "./components/PrimaryButton";

const StepOne = () => {

  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    history.push("/stepTwo")
  }

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Step 1
      </Typography>
      <Form>
        <Input 
          ref={ register }
          name="firstName"
          type="text"
          label="First Name"
        />
        <Input
          ref={ register }
          name="last Name"
          type="text"
          label="Last Name"
        />
        <PrimaryButton type="submit">Next</PrimaryButton>
      </Form>
      
    </MainContainer>
  )
}

export default StepOne;