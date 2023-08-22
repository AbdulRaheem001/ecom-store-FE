import React,{useState,useEffect} from "react";
import { Box, TextField, Typography, Avatar, Button, IconButton } from "@mui/material";
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
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setLoginState } from "../Slice/userSlice";
function SignIn() {
  
  const [showPassword, setShowPassword] = useState(false); 
  const dispatch = useDispatch(); 
  
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      setUser({
        Email: values.email,
        Password: values.password,
      });
    },
  });

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/routes/signin", user, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        withCredentials: true,
      })
      .then((res) => {
        dispatch(setLoginState(true));
        const { token, userType } = res?.data;
        console.log(userType);
        dispatch(setUserType(userType));
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem(
          "userToken",
          JSON.stringify(token)
        );
        navigate("/products");
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  }, [navigate, user]);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    
      <Navigation />
      <Box className="MainContent" >
        <Box className="img-Con">
          <img className="img" src={signupImg} alt="Signup" />
        </Box>
        <Box className="SignUp-card">
          <Box className="header">
            <center>
              <Avatar style={{ m: 1, bgcolor: "warning.main" }}>
                <img  src={signup} alt="Signup Avatar" />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign In
              </Typography>
            </center>
          </Box>
          <Box className="body-con"
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}>
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
            <br/><br/>
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
            <br/><br/>
            
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
              SignIn
            </Button>
            <Link
              className="signtext"
              to="/signup"
              style={{ fontSize: "16px", marginLeft: "15%" }}
            >
              Are you not register yet?
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default SignIn;
