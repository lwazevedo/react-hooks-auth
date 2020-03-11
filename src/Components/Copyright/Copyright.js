import React from 'react';
import {Typography, Link} from '@material-ui/core';


const Copyright = ({ text, date, align, variant, color }) => (
  <Typography variant={variant} color={color} align={align}>
    {'Copyright © '}
    <Link color="inherit" href="https://material-ui.com/">
      {text}
    </Link>{' '}
    {date}
    {'.'}
  </Typography>
);

export default Copyright;