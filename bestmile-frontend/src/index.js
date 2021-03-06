import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { connectToSocket } from './websocket/websocket-client';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
connectToSocket();