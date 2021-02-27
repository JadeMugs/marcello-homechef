import React from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core/';
import { post } from '../../utils/connection';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../utils/context';
import { LOGIN } from '../../utils/contants';

const initialState = {
  username: '',
  password: '',
  error: false,
};

export default function Login() {
  const [state, setState] = React.useState(initialState);
  const { username, password, error } = state;

  const context = React.useContext(AuthContext);
  const history = useHistory();

  React.useEffect(() => {
    if (context?.state?.token) {
      history.push('/dashboard');
    }
  }, [history, context]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value, error: false }));
  };

  const handleLogin = () => {
    post('/login', { username, password })
      .then((response) => {
        context.dispatch({ type: LOGIN, payload: response });
      })
      .catch((error) => {
        setState((prevState) => ({ ...prevState, error: true }));
        console.log('errore');
      });
  };

  return (
    <div>
      <form>
        <FormControl>
          <InputLabel htmlFor='username' error={error}>
            Username
          </InputLabel>
          <Input
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
            id='username'
            aria-describedby='username'
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='password' error={error}>
            Password
          </InputLabel>
          <Input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            id='password'
            aria-describedby='password'
          />
        </FormControl>
        <FormControl>
          <Button onClick={handleLogin}>Accedi</Button>
        </FormControl>
      </form>
    </div>
  );
}
