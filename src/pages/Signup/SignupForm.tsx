import Grid from "@mui/material/Grid";
import { StyledButton, StyledLink, StyledPhoneInput } from "./elements";
import { CustomTextField } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import CircularProgress from "@mui/material/CircularProgress";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import "react-phone-input-2/lib/material.css";

const validationSchema = yup.object({
  firstName: yup.string().required("Required*"),
  lastName: yup.string().required("Required*"),
  email: yup.string().email("Invalid email address").required("Required*"),
  phoneNumber: yup.string().required("Required*"),
  password: yup
    .string()
    .required("Required*")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/g, {
      message:
        "Oops! You need a password longer than 8 characters with numbers and letters (One Uppercase, One Lowercase, One Number)",
      excludeEmptyString: true,
    }),
});

// Beacuse we dont have great number of utility and it is not being used in other components so for now leaving it here otherwise it should move to utitlity namespace
const capitalizeFirstLetter = (text: string) => {
  const capitalized = text.charAt(0).toUpperCase() + text.slice(1);
  return capitalized;
};

const lowercaseFirstLetter = (text: string) => {
  const lowerCase = text.charAt(0).toLocaleLowerCase() + text.slice(1);
  return lowerCase;
};

export const SignupForm: React.FC = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const { firstName, lastName, email, phoneNumber, password } = errors;
  console.log("PASSWORD", password);

  const phoneInputStyle = {
    width: "100%",
    border: `1px solid ${
      Boolean(phoneNumber?.message) ? "#d32f2f" : "#d1d1d1"
    }`,
    borderRadius: "2px",
    boxShadow: "none",
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <CustomTextField
          label="First Name"
          control={control}
          fieldName="firstName"
          textParser={capitalizeFirstLetter}
          error={firstName}
        />
      </Grid>
      <Grid item xs={6}>
        <CustomTextField
          label="Last Name"
          control={control}
          fieldName="lastName"
          textParser={capitalizeFirstLetter}
          error={lastName}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <StyledPhoneInput
              inputStyle={phoneInputStyle}
              error={Boolean(phoneNumber?.message)}
              country="us"
              specialLabel=""
              onlyCountries={["us"]}
              disableDropdown
              disableCountryCode
              inputProps={{ placeholder: "Phone number" }}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomTextField
          label="Email"
          fullWidth
          textParser={lowercaseFirstLetter}
          control={control}
          fieldName="email"
          error={email}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomTextField
          label="Password"
          fullWidth
          control={control}
          fieldName="password"
          error={password}
        />
      </Grid>
      <Grid item xs={12}>
        <StyledLink to="detail" state={{ testData: "test" }}>
          <StyledButton
            fullWidth
            variant="contained"
            bgcolor={isValid ? "#01e0b1" : ""}
            size="large"
          >
            NEXT
            {/* <CircularProgress color="inherit" size={24} />  */}
          </StyledButton>
        </StyledLink>
      </Grid>
    </Grid>
  );
};
