import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps, AlertColor } from "@mui/material/Alert";
import { useState, forwardRef } from "react";

type Props = {
  showSnackBar: boolean;
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  type: AlertColor | "";
  message: string;
};
export const AlertMessage: React.FC<Props> = ({
  showSnackBar,
  handleClose,
  type,
  message,
}) => {
  return (
    <Snackbar
      open={showSnackBar}
      onClose={handleClose}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={type || "info"}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
