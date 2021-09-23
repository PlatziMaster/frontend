import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import DataContext from './context/DataContext';
const datas = require('../data.json');

ReactDOM.render(
<DataContext.Provider value={datas}>
<App />
</DataContext.Provider>,
document.getElementById('app'));
