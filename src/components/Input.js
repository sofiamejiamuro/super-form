import React, { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";

const Input = forwardRef((props, ref) => {
  console.log(ref);
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      {...props}
    />
  );
});

export default Input;