import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

const WithRouter = () => (
    <BrowserRouter>
        <MuiThemeProvider>
            <App/>
        </MuiThemeProvider>
    </BrowserRouter>
)


ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
