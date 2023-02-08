import React, { FormEventHandler, ReactElement } from 'react';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useAuthentication } from '../../hook/authentication/useAuthentication';
import UserRegisteRequest from '../../interfaces/user/UserRegisteRequest';
import IRegister from './IRegister';
//import styles from './Register.module.scss';

/**
 * 
 * @param prop 
 * @returns 
 */
const Register = (prop: IRegister) : ReactElement => {
  /**
   * 
   */
  const [name, setName] = useState("");
  
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
  const [confirmPassword, setConfirmPassword] = useState("");
  
  /**
   * 
   */
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Hook auth
   */    
  const { createUser, error: authError, loading } = useAuthentication();

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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const user: UserRegisteRequest = {
      name, eMail, password, confirmPassword 
    };

    if (password.length < 6) {
      setErrorMessage("A senha deve conter no mínimo 6 caracteres");
      return;
    } else {
      if (confirmPassword !== password){
        setErrorMessage("A confirmação de senha não confere");
        return;
      }
    }

    const response = await createUser(user);

    setName("");
    setEMail("");
    setConfirmPassword("");
    setPassword("");
  };

  return (
    <div className="sbx-container">
      <Row className='sbx-row'>
        <Col>
          <h1>Cadastre-se</h1>
        </Col>
      </Row>
      <Row className='sbx-row'>
        <Col>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="name">
                Nome:
              </label>
              <input type="text" required={true} name="name" placeholder="informe seu nome"
                     value={name} 
                     onChange={(e: React.ChangeEvent<HTMLInputElement> ) => setName(e.target.value)} />
            </div>
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
            <div className="form-control">
              <label>
                  Confirme a sua senha:
                </label>
              <input type="password" required={true} name="confirmPassword" placeholder="Confirme sua senha"
                      value={confirmPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement> ) => setConfirmPassword(e.target.value)} />
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
                  <button className='button'>Cadastrar</button>
              }
              
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;