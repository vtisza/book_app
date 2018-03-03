import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';
import 'grommet/grommet-hpe.min.css';


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
