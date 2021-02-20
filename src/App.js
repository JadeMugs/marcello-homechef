import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import './index.scss';
import './style/home.scss';
import './style/components.scss';
import Home from './components/Home';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <AdminRouter path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;

const AdminRouter = ({ component: Component, ...rest }) => {
  // TODO change
  const loggedIn = false;
  return (
    <Route
      {...rest}
      render={(props) =>
        !loggedIn ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};
