import React from 'react';
import ReactDOM from 'react-dom';
import './store';
import './style.less';
import { App } from 'App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';


const root = document.querySelector('#root');

ReactDOM.render(<App />, root);
