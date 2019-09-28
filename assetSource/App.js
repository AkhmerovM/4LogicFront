import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import initStore from 'store';
import { MainPage } from 'modules/main/containers/MainPage'
import { Route, Switch } from 'react-router'

const store = initStore();
class App extends Component {
    render () {
        return (<>
      <BrowserRouter>
          <Provider store={store}>
              <Switch>
                  <Route component={MainPage} exact path='/' />
              </Switch>
          </Provider>
      </BrowserRouter>
      </>);
    }
}
export { App };
