import { ReactElement } from 'react';
import ILogin from './ILogin';
import styles from './Login.module.scss';

/**
 * 
 * @param prop 
 * @returns 
 */
const Login = (prop: ILogin) : ReactElement => {
  return (
    <div className="sbx-container">
      <h1>Login</h1>
    </div>
  );
}

export default Login;