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

function App() {
  const classes = useStyles()
  const splitter = <div className={classes.splitter} />

  document.getElementsByTagName("body")[0].style.backgroundColor = "#121212"

  return (
    <Box display="flex" flexDirection="column" alignItems="center" py={2}>
      <Box maxWidth="1000px">
        {splitter}
        <Header />
        {splitter}
        <About />
        {splitter}
        <Talents />
        {splitter}
        <Projects />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
