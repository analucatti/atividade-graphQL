import React from 'react';
import {Box} from '@material-ui/core';
import NavBar from '../../components/NavBar';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

import {StyledContainer, StyledBox, StyledFooter} from './styles';

function App() {

  return (
    <StyledContainer>
      <Box id='header'>
        <NavBar/>
      </Box>
      <StyledBox id='content'>
        <Main/>
      </StyledBox>
      <StyledFooter id='footer'>
        <Footer/>
      </StyledFooter>
    </StyledContainer>
  );
}

export default App;
