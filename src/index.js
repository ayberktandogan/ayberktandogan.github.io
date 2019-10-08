import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './config/theme/index'

function Mount() {
    console.log(theme)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <App />
            </CssBaseline>
        </ThemeProvider>
    )
}

ReactDOM.render(<Mount />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
