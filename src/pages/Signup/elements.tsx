import Button, { ButtonProps } from "@mui/material/Button";
import styled from "@emotion/styled";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";

export const StyledButton = styled(Button)<ButtonProps & { bgcolor?: string }>`
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "#67ecd0")};
  padding: 16px 22px;
  font-weight: 400;
  border-radius: 2px;
  :hover {
    background-color: #01e0b1;
  }
`;

export const StyledPhoneInput = styled(PhoneInput)<
  PhoneInputProps & { error: boolean }
>``;
