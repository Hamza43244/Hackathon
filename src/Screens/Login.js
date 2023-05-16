import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SmButton from "../Components/Smbutton";
import SmInput from "../Components/Sminput";
import KeyIcon from "@mui/icons-material/Key";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Link, useNavigate } from "react-router-dom";
import { userLogin, userSignUp, postFbData } from "../Config/Firebasemethods";
import LoginIcon from "@mui/icons-material/Login";
import SmSelect from "../Components/Smselect";
import ReactDatePicker from "react-datepicker";

const Login = () => {
  const [val, setval] = useState({});
  const [type, setType] = useState({});
  const [msg, setErrorMsg] = useState("");
  const [loader, setloader] = useState(false);
  let navigation = useNavigate();

  let goToSignUp = () => {
    navigation("/SignUp");
  };

  let loginUser = () => {
    setloader(true);
    userLogin(val)
      .then((res) => {
        setloader
        (false);
        navigation("/Dashboard");
      })
      .catch((err) => { 
        setErrorMsg(err.message);
        console.log(err.message);
      });
  };
   

  useEffect(() => {}, []);

  return (
    <div>
      <Box
        sx={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center">
        <Paper className="p-4" elevation={8}>
          <Typography className=" text-center text-primary mb-5" variant="h3">
          <Link to='/login'><span className="text-white p-1 rounded-2 bg-primary">Login</span></Link>
          </Typography>
          <Box className="mt-3">
            <SmInput
              variant="filled"
              label="Enter User Email"
              onChange={(e) => setval({ ...val, email: e.target.value })}
            />
          </Box>
          <Box className="mt-3">
            <SmInput
              variant="filled"
              type="password"
              label="Enter User Password"
              onChange={(e) => setval({ ...val, password: e.target.value })}
            />
          </Box>
          <Box className="mt-4 d-flex justify-content-center align-items-center">
            <SmButton
              size="large"
              variant="contained"
              loading={loader}
              onClick={loginUser}
              label="Login"
            />
          </Box>
          <Box className="mt-4 d-flex justify-content-center align-items-center">
            <p>
              Not a member?
              <a href=" " onClick={goToSignUp}>
                SignUp
              </a>
            </p>
          </Box>
          <Box className="mt-4 d-flex justify-content-center align-items-center text-danger">
            <p>{msg}</p>
          </Box>
        </Paper>
      </Box>

      
    </div>
  );
};

export default Login;