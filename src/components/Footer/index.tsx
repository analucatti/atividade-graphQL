import React from 'react';
import {Typography} from "@material-ui/core";


export default function Footer() {
  return (
    <footer>
      <Typography style={{ textAlign: 'center' }} variant="body1">{'Copyright © '} My footer 2020.</Typography>
    </footer>
  );
}