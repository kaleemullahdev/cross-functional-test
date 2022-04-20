import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import PetsSharpIcon from "@mui/icons-material/PetsSharp";
import Typography from "@mui/material/Typography";

export const StyledIcon = styled(PetsSharpIcon)`
  color: #545454;
`;

export const Header = () => {
  return (
    <Box mt={4} mb={4} display="flex" alignItems="center">
      <StyledIcon />
      <Typography variant="h5" color="#545454">
        uPet
      </Typography>
    </Box>
  );
};
