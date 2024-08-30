import { FC, ReactElement } from "react";
import { Box, Typography } from "@mui/material";

export const AboutUs: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        display: "flex",
        alignItems: "center",
      }}
    >
        <Typography>
            About Us
        </Typography>
    </Box>
  );
};

export default AboutUs;