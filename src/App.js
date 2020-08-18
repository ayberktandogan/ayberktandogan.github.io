import React from 'react';

import About from './components/about'
import Talents from './components/talents'
import Projects from './components/projects'
import ContactMe from './components/contact-me'
import Footer from './components/footer'

import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/styles/makeStyles'
import { Divider } from '@material-ui/core';

function SectionContainer(props) {
  if (props.withSpecialStyle) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" py={2}>
        <Box maxWidth={1000} width={"100%"}>
          {props.children}
        </Box>
      </Box>
    )
  }

  return (
    <Box>
      <Box>
        {props.children}
      </Box>
    </Box>
  )
}

function App() {

  return (
    <>
      <SectionContainer>
        <About />
      </SectionContainer>
      <Divider />
      <SectionContainer>
        <Projects />
      </SectionContainer>
      <Divider />
      <SectionContainer>
        <Talents />
      </SectionContainer>
      <Divider />
      <SectionContainer withSpecialStyle>
        <ContactMe />
      </SectionContainer>
      <SectionContainer withSpecialStyle>
        <Footer />
      </SectionContainer>
    </>
  );
}

export default App;
