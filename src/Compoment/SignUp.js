import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Avatar,
  Button,
  IconButton,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/SignUp.css";
import signupImg from "../img/signupimage.jpeg";
import signup from "../img/signup.png";
import Navigation from "./Navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import Visibility from "@mui/icons-material/Visibility"; // Import Visibility Icon
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      Conpassword: "",
      userType: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Name Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(8, "Minimum 8 character Password Required.")
        .required("Password Required"),
      Conpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match") // Check if Conpassword matches password
        .required("Confirm Password is required"),
        userType: Yup.string().required("User Type is required"),
    }),
    onSubmit: (values) => {
      const userObj = {
        Name: values.name,
        Email: values.email,
        Password: values.password,
        userType: values.userType,
      };
      console.log(userObj);
      axios
        .post("http://localhost:5000/api/routes/registerUser", userObj, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then((res) => {
          navigate("/signIn");
          console.log(res);
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
    },
  });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConPasswordVisibility = () => {
    setShowConPassword(!showConPassword);
  };
  return (
    <>
      <Navigation />
      <Box className="MainContent">
        <Box className="img-Con">
          <img className="img" src={signupImg} alt="Signup" />
        </Box>
        <Box className="SignUp-card">
          <Box className="header">
            <center>
              <Avatar style={{ m: 1, bgcolor: "secondary.main" }}>
                <img src={signup} alt="Signup Avatar" />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
            </center>
          </Box>
          <Box
            className="body-con"
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <TextField
              className="textField"
              id="name"
              name="name"
              type="text"
              label="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div style={{ color: "red" }}>{formik.errors.name}</div>
            ) : null}
            <br />
            <br />
            <TextField
              className="textField"
              id="email"
              name="email"
              type="email"
              label="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
            <br />
            <br />
            <TextField
              className="textField"
              id="userType"
              name="userType"
              select
              label="User Type"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userType}
            >
              <MenuItem value="customer">Customer</MenuItem>
              <MenuItem value="shopKeeper">Shop Keeper</MenuItem>
              <MenuItem value="manager">Manager</MenuItem>
            </TextField>
            {formik.touched.userType && formik.errors.userType ? (
              <div style={{ color: "red" }}>{formik.errors.userType}</div>
            ) : null}
            <br />
            <br />
            <TextField
              className="textField"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
            <br />
            <br />
            <TextField
              className="textField"
              id="Conpassword"
              name="Conpassword"
              type={showConPassword ? "text" : "password"}
              label="Confirm Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Conpassword}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={toggleConPasswordVisibility} edge="end">
                    {showConPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
            {formik.touched.Conpassword && formik.errors.Conpassword ? (
              <div style={{ color: "red" }}>{formik.errors.Conpassword}</div>
            ) : null}
            <br />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{
                mt: 3,
                mb: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "",
              }}
              style={{
                width: "55%",
                marginTop: "15px",
                fontSize: "16px",
                marginLeft: "15%",
              }}
            >
              SignUp
            </Button>
            <Link
              className="signtext"
              to="/signin"
              style={{ fontSize: "16px", marginLeft: "15%" }}
            >
              Are you already a member?
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default SignUp;
