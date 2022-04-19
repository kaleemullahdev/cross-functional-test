import TextField, { TextFieldProps } from "@mui/material/TextField";
import FilledInput from "@mui/material/FilledInput";
import styled from "@emotion/styled";

const StyledTextField = styled(TextField)`
  .MuiInputLabel-root {
    color: red;
  }
  .MuiFilledInput-root input {
    border: 1px solid red;
    border-radius: 5px;
    background: white;
  }
`;
export const CustomTextField: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      InputProps={{
        disableUnderline: true,
      }}
      {...props}
    />
  );
};
