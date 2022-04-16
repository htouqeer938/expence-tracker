import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Alert from "@material-ui/lab/Alert";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import Copyright from "./Copyright";
import { loginAuthCall } from "../actions";
import { setCookie, deleteCookie } from "../Reuseable/helperFunction";

const theme = createTheme();

export default function SignIn() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const loginUser = () => {
    let data = {
      email: email,
      password: password,
    };
    if (email && password) {
      loginAuthCall(
        data,
        (res) => {
          console.log(res);
          localStorage.setItem(
            "user_detail",
            Object.entries(res).length > 0
              ? JSON.stringify(res)
              : JSON.stringify(null)
          );
          history.push("/app");
          setCookie("email", email, 30);
          setCookie("password", password, 30);
          setLoginError(false);
        },
        (error) => {
          console.log(error);
          deleteCookie("email");
          deleteCookie("password");
          setLoginError(true);
        }
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              loginUser();
            }}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => {
                setLoginError(false);
                setEmail(e.target.value);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setLoginError(false);
                setPassword(e.target.value);
              }}
            />
            <div>
              {loginError && (
                <Box mb={3}>
                  <Alert icon={false} severity="warning">
                    Incorrect Username Or Password
                  </Alert>
                </Box>
              )}
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
