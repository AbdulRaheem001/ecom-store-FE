import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Navigation from "../Compoment/Navigation";

const containerStyle = {
  textAlign: "center",
  padding: "16px",
  backgroundColor: "#fff", // Change to the desired background color
  borderRadius: "8px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Add shadow for depth
};

const iconStyle = {
  fontSize: "72px",
  color: "#00C853", // Change to the desired color
};

const titleStyle = {
  marginBottom: "16px",
};

const buttonStyle = {
  marginTop: "24px",
};

function RegisterMessage() {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/signup");
  };

  return (
    <>
    <Navigation />
    <Box sx={containerStyle}>
      <CheckCircleOutlineIcon sx={iconStyle} />
      <Typography variant="h4" sx={titleStyle}>
        Thank you for trusting us.
      </Typography>
      <Typography variant="h5">
        Your store is under review. We will inform you shortly.
      </Typography>
      <Typography variant="h5">
        Create a customer account to explore products from other stores.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={buttonStyle}
        startIcon={<PersonAddIcon />}
        onClick={handleCreateAccount}
      >
        Create Customer Account
      </Button>
      <Typography variant="subtitle1" color="textSecondary" marginTop="16px">
        Your satisfaction is our priority.
      </Typography>
    </Box>
    </>
  );
}

export default RegisterMessage;
