import React from 'react';
import {Box} from '@material-ui/core';
import waiting from '../../assets/waiting.gif';


const EmptyResult = () => {

  return (
    <Box>
      <img src={waiting} alt={'type a text to search'}/>
    </Box>
  
  )
}

export default EmptyResult;