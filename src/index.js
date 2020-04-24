import React from "react";
import ReactDOM from 'react-dom'
import {ApolloProvider} from 'react-apollo';
// import graphQLClient from "./Network/OldAWSGraphQLInterface";
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {applyMiddleware, compose, createStore} from 'redux';
import reducers from './Reducers';
import { CookiesProvider } from "react-cookie";

import App from './Components/App';
import {client} from "./Network/AolloGraphjQL";
import reduxThunk from "redux-thunk";
import Dashboard from "./views/200_Dashboard/Dashboard";
import NotFound from "./Components/NotFound";
import "./index.css";
import Login_010 from "./views/010_Login/010_Login";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

const routes =
    <Switch>
        <Route exact path="/react_zero_alt" component={App}/>
        <Route exact path="/react_zero_alt/dashboard" component={Dashboard}/>
        <Route exact path="/react_zero_alt/login" component={Login_010}/>
        <Route component={NotFound}/>
    </Switch>;

const WithProvider = () => (
    <ApolloProvider client={client}>
      <Provider store={store}>
          <CookiesProvider>
              <Router>
                  { routes }
              </Router>
          </CookiesProvider>
      </Provider>
    </ApolloProvider>
);

ReactDOM.render(<WithProvider/>,
    document.getElementById('root'));

