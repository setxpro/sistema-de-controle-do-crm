import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import * as C from "./styles";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Template Created with 🖤 by "}
      <Link color="inherit" href="https://mui.com/">
        Patrick Anjos
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function CreateUser() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role] = React.useState("Member");
  const [avatar] = React.useState(
    "https://blog.bagaggio.com.br/wp-content/uploads/2022/06/miniatura-logo.png"
  );
  const [assignment, setAssigment] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name) {
      return toast.error("Name is required");
    }
    if (!email) {
      return toast.error("Email is required");
    }
    if (!assignment) {
      return toast.error("Assignment is required");
    }
    if (!password) {
      return toast.error("Password is required");
    }

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_URL}/auth/register`,
        {
          name,
          email,
          password,
          role,
          avatar,
          assignment,
        }
      );

      toast.success(data.message);
      navigate("/signin");
      return data;
    } catch (error: any) {
      return toast.error(error.data.message);
    }
  };

  return (
    <C.ContentG>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ background: "transparent" }}
      >
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
            Create user
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="fullname"
                  label="Fullname"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="role"
                  label="Role"
                  name="role"
                  autoComplete="role"
                  value={role}
                  onChange={(e) => setName("Member")}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="assignment"
                  label="Assignment"
                  name="assignment"
                  autoComplete="assignment"
                  value={assignment}
                  onChange={(e) => setAssigment(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              CREATE USER
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </C.ContentG>
  );
}
