import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { Avatar, Button, CssBaseline, TextField, Link, Paper, Box, Grid, Typography } from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Alert from '@material-ui/lab/Alert';

import { useFormik } from 'formik';

import AuthContext from '../../context/authContext/AuthContext';

import SignInStyle from './SignInStyle';
import SignInFormSchema from './SignInFormSchema';
import Copyright from '../copyright/Copyright';



const SignInSide = () => {
  const { login, isAuthencated, setIsAuthencated, error } = useContext(AuthContext);
  const classes = SignInStyle();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignInFormSchema,
    onSubmit: values => {
      login(values)
      if (!error) history.push('/dash');
    },
  });


  return (<Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={classes.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && (<Alert variant="outlined" severity="error">{formik.errors.email}</Alert>)}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && (<Alert variant="outlined" severity="error">{formik.errors.password}</Alert>)}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
            </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
                </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {error && (<Box mt={2}>
            <Alert variant="outlined" severity="error">{error.message}</Alert>
          </Box>)}
          <Box mt={5}>
            <Copyright text="Your Website" date={new Date().getFullYear()} variant="body2" color="textSecondary" align="center" />
          </Box>
        </form>
      </div>
    </Grid>
  </Grid>)
};

export default SignInSide;