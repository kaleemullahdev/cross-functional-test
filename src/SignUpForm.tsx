import PetsSharpIcon from "@mui/icons-material/PetsSharp";
import Box from "@mui/material/Box";
import Typhography from "@mui/material/Typography";
import { CustomTextField } from "./components";

export const SignUpForm: React.FC = () => {
  return (
    <>
      <Box display="flex" alignItems="center">
        <PetsSharpIcon />
        <Typhography variant="h6">uPet</Typhography>
      </Box>
      <Box>
        <CustomTextField label="First Name" variant="filled" />
      </Box>
    </>
  );
};
