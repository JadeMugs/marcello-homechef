import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './index.scss';
import './style/home.scss';
import './style/components.scss';
import Home from './components/Home';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import { authReducer, initialAuthState } from './utils/reducer';
import { AuthContext } from './utils/context';

function App() {
  const _token = localStorage.getItem('token');
  const [state, dispatch] = React.useReducer(
    authReducer,
    _token ? { token: _token } : initialAuthState
  );
  const authvalue = { state, dispatch };

  return (
    <AuthContext.Provider value={authvalue}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <AdminRouter path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

const AdminRouter = ({ component, path, exact }) => {
  const context = React.useContext(AuthContext);

  return context?.state?.token ? (
    <Route path={path} component={component} exact={exact || false} />
  ) : (
    <Redirect to='/login' />
  );
};
