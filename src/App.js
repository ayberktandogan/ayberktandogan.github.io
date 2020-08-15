import React from 'react';

import Header from './components/header'
import About from './components/about'
import Talents from './components/talents'
import Projects from './components/projects'
import Footer from './components/footer'

import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  splitter: {
    height: "10px"
  }
}))

function SectionContainer(props) {
  if (props.noSpecialStyle) {
    return (
      <Box>
        <Box>
          {props.children}
        </Box>
      </Box>
    )
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" py={2}>
      <Box maxWidth={1000}>
        {props.children}
      </Box>
    </Box>
  )
}

function App() {
  const classes = useStyles()
  const splitter = <div className={classes.splitter} />

  return (
    <>
      {splitter}
      <SectionContainer>
        <Header />
      </SectionContainer>
      {splitter}
      <SectionContainer>
        <About />
      </SectionContainer>
      {splitter}
      <SectionContainer noSpecialStyle>
        <Projects />
      </SectionContainer>
      {splitter}
      <SectionContainer>
        <Talents />
      </SectionContainer>
      {splitter}
      <SectionContainer>
        <Footer />
      </SectionContainer>
      {splitter}
    </>
  );
}

export default App;
