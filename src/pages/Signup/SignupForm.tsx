import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { StyledButton, StyledPhoneInput } from "./elements";
import { CustomTextField, AlertMessage } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import CircularProgress from "@mui/material/CircularProgress";
import FormHelperText from "@mui/material/FormHelperText";
import { AlertColor } from "@mui/material/Alert";
import { useForm, Controller, FieldValues } from "react-hook-form";
import * as yup from "yup";
import "react-phone-input-2/lib/material.css";
import axios from "axios";

enum MessageType {
  "ERROR" = "error",
  "SUCCESS" = "success",
}

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
    }),
});

//Beacuse we dont have great number of utility and it is not being used in other components so for now leaving it here otherwise it should move to utitlity namespace
const capitalizeFirstLetter = (text: string) => {
  const capitalized = text.charAt(0).toUpperCase() + text.slice(1);
  return capitalized;
};

const lowercaseFirstLetter = (text: string) => {
  const lowerCase = text.charAt(0).toLocaleLowerCase() + text.slice(1);
  return lowerCase;
};

export const SignupForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [responseMessage, setResponseMessage] = useState<{
    type: AlertColor | "";
    message: string;
  }>({
    type: "",
    message: "",
  });
  const navigate = useNavigate();

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const onSubmit = (formValues: FieldValues) => {
    setLoading(true);
    axios
      .post("http://localhost:4000/api/account", formValues, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        let messageType: MessageType | "" = "";
        let responseMessage_ = "";
        const {
          data: { data, errors },
        } = response;
        if (data) {
          navigate("request-confirmation", {
            replace: true,
            state: formValues,
          });
        } else {
          const errorMessage = errors.reduce(
            (prev: string, curr: { field: string; message: string }) => {
              return prev + "\n" + curr.message;
            },
            ""
          );
          responseMessage_ = errorMessage;
          messageType = MessageType.ERROR;
        }
        if (responseMessage_) {
          setShowSnackBar(true);
          setResponseMessage({
            type: messageType,
            message: responseMessage_,
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSnackBar(false);
  };

  const { firstName, lastName, email, phoneNumber, password } = errors;
  const phoneInputStyle = {
    width: "100%",
    border: `1px solid ${
      Boolean(phoneNumber?.message) ? "#d32f2f" : "#d1d1d1"
    }`,
    borderRadius: "2px",
    boxShadow: "none",
  };
  const { type, message } = responseMessage;
  return (
    <>
      <AlertMessage
        handleClose={handleClose}
        showSnackBar={showSnackBar}
        type={type}
        message={message}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {phoneNumber && (
              <FormHelperText
                sx={{ marginLeft: "14px", marginRight: "14px" }}
                error={Boolean(phoneNumber)}
              >
                Required*
              </FormHelperText>
            )}
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
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              bgcolor={isValid ? "#01e0b1" : ""}
              size="large"
            >
              {!loading ? (
                "NEXT"
              ) : (
                <CircularProgress color="inherit" size={24} />
              )}
            </StyledButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
