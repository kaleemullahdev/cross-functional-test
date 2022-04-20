import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import Typhography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";

const StyledEmailIcon = styled(MarkEmailUnreadOutlinedIcon)`
  color: #67ecd0;
  font-size: 60px;
`;

export const AccountRequestConfirmation = () => {
  return (
    <Box>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={3}>
          <StyledEmailIcon />
        </Grid>
        <Grid item xs={9}>
          <Typhography variant="h6" fontWeight="lighter">
            Thanks, John!
          </Typhography>
          <Typhography variant="h6" fontWeight="lighter">
            We've recieved your application
          </Typhography>
        </Grid>
      </Grid>
      <Box mt={3}>
        <Typhography variant="body2" fontWeight="lighter" align="left">
          We'll process your application as soon as possible and send you a
          decision within 30 days to (914) 740-5693 or juanperez53@gmail.com. We
          will contact you in case more information is needed.
        </Typhography>
      </Box>
      <Box mt={2}>
        <Typhography variant="body2" fontWeight="lighter">
          While we're reviewing your application, please don't submit another
          application for the uPet's breeder program.
        </Typhography>
      </Box>
    </Box>
  );
};
