import React from 'react';
import ReactDOM from 'react-dom';
import './store';
import 'modules/common/style/style.less';
import 'modules/common/style/fonts.less';
import 'modules/common/style/variables.less';
import { App } from 'App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';


const root = document.querySelector('#root');

ReactDOM.render(<App />, root);
