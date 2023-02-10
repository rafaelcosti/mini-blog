import { ReactElement, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useAuthentication } from '../../hook/authentication/useAuthentication';
import ILogin from './ILogin';
import styles from './Login.module.scss';

/**
 * 
 * @param prop 
 * @returns 
 */
const Login = (prop: ILogin) : ReactElement => {
  /**
   */
  const [eMail, setEMail] = useState("");
  
  /**
   * 
   */
  const [password, setPassword] = useState("");
  
  /**
   * 
   */
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Hook auth
   */    
  const { error: authError, loading } = useAuthentication();

  /**
   * 
   */
  useEffect(() => {
    if (authError) {
      setErrorMessage(authError);
    }
  }, [authError]);
  
  /**
   * 
   * @param e 
   */
  const handleLoginSubmit = async (e: React.FormEvent) => {

  }

  return (
    <div className="sbx-container">
      <Row className='sbx-row'>
        <Col>
          <h1>Login</h1>
        </Col>
      </Row>
      <Row className='sbx-row'>
        <Col>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-control">
              <label htmlFor="name">
                E-mail:
              </label>
              <input type="text" required={true} name="email" placeholder="Informe seu e-mail"
                     value={eMail}
                     onChange={(e: React.ChangeEvent<HTMLInputElement> ) => setEMail(e.target.value)} />
            </div>
            <div className="form-control">
              <label htmlFor="password">
                Senha:
              </label>
              <input type="password" required={true} name="password" placeholder="Informe sua senha"
                     value={password} id="password"
                     onChange={(e: React.ChangeEvent<HTMLInputElement> ) => setPassword(e.target.value)} />
            </div>
            {
              errorMessage ?
                <div className="form-control">
                  <div className="error">
                    { errorMessage }
                  </div>
                </div>
              :
               <></>
            }
            <div className="form-control">
              { loading ? 
                  <button className='button' disabled>Aguarde...</button>
                : 
                  <button className='button'>Entrar</button>
              }
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;