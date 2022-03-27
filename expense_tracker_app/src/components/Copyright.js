import React from 'react';
import { Link, Typography } from '@mui/material';

function Copyright(props) {
      return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                  {'Copyright © '}
                  <Link color="inherit" href="https://www.touqeerhussain.me">
                        Expense Tracker
                  </Link>{' '}
                  {new Date().getFullYear()}
                  {'.'}
            </Typography>
      );
}

export default Copyright;
