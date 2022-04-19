import PetsSharpIcon from "@mui/icons-material/PetsSharp";
import Box from "@mui/material/Box";
import Typhography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { StyledButton } from "./elements";
import PhoneInput from "react-phone-input-2";
import { CustomTextField } from "../../components";
import "react-phone-input-2/lib/material.css";

export const SignupForm: React.FC = () => {
  return (
    <>
      <Box mt={4} mb={4} display="flex" alignItems="center">
        <PetsSharpIcon />
        <Typhography variant="h6">uPet</Typhography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomTextField label="First Name" />
        </Grid>
        <Grid item xs={6}>
          <CustomTextField label="Last Name" />
        </Grid>
        <Grid item xs={12}>
          <PhoneInput
            inputStyle={{
              width: "100%",
              border: "1px solid #d1d1d1",
              borderRadius: "2px",
            }}
            country="us"
            specialLabel=""
            onlyCountries={["us"]}
            disableDropdown
            disableCountryCode
            inputProps={{ placeholder: "Phone number" }}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField label="Email" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField label="Password" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <StyledButton fullWidth variant="contained" size="large">
            NEXT
          </StyledButton>
        </Grid>
      </Grid>
    </>
  );
};
