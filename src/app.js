import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch,
  Redirect
} from 'react-router-dom';
import { routes } from './routes';
import NavigationBar from './components/navigationBar';

const App = () => {
  const renderSwitch = () => (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          exact={route.isExact}
          path={route.path}
          component={route.component}
        />
      ))}
      <Redirect from='*' to='/main' />
    </Switch>
  );

  return (
    <Router>
      <main className='app-content'>
        <NavigationBar routes={routes.filter(route => route.isNavBar)}/>
        <div className='ui-content'>
          {renderSwitch()}
        </div>
      </main>
    </Router>
  );
};

export default App;
