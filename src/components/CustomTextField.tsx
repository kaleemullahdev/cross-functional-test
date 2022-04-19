import TextField, { TextFieldProps } from "@mui/material/TextField";
import styled from "@emotion/styled";

const StyledTextField = styled(TextField)`
  label {
    color: #d1d1d1;
  }
  label.Mui-focused {
    color: #67ecd0;
  }
  .MuiFilledInput-input {
    background: white;
    border: 1px solid #d1d1d1;
    border-radius: 2px;
  }
`;

export const CustomTextField: React.FC<TextFieldProps> = (props) => {
  return (
    <StyledTextField
      InputProps={{
        disableUnderline: true,
      }}
      variant="filled"
      {...props}
    />
  );
};
