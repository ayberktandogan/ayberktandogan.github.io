import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './config/theme/index'

function Mount() {
    window.theme = theme

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <App />
            </CssBaseline>
        </ThemeProvider>
    )
}

ReactDOM.render(<Mount />, document.getElementById('root'));