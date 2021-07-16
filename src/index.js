import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './config/theme/index'
import { BrowserRouter } from 'react-router-dom';

function Mount() {
    return (
        <StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </StrictMode>
    )
}

ReactDOM.render(<Mount />, document.getElementById('root'));