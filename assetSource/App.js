import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import initStore from 'store';
import { MainPage } from 'modules/main/containers/MainPage'
import { Route, Switch } from 'react-router'
import {Check} from "./modules/main/containers/Check";
import {Find} from "./modules/main/containers/Find";

const store = initStore();
class App extends Component {
    render () {
        return (<>
      <BrowserRouter>
          <Provider store={store}>
              <Switch>
                  <Route component={MainPage} exact path='/' />
                  <Route component={Check} exact path='/check' />
                  <Route component={Find} exact path='/find' />
              </Switch>
          </Provider>
      </BrowserRouter>
      </>);
    }
}
export { App };
