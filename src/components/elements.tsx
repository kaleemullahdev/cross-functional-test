import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

export const StyledTextField = styled(TextField)`
  label {
    color: #d1d1d1;
  }

  label.Mui-focused {
    color: ${({ error }) => `${error ? "#d32f2f" : "#67ecd0"}`};
  }

  .MuiFilledInput-input {
    background: white;
    border: ${({ error }) => `1px solid ${error ? "#d32f2f" : "#d1d1d1"}`};
    border-radius: 2px;
  }
`;
