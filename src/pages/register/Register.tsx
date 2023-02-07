import { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import IRegister from './IRegister';
import styles from './Register.module.scss';

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
   * 
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
   * 
   * @param e 
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    alert(e);
  }

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
                     value={password}
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
            <div className="form-control">
              <button className='button'>Cadastrar</button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;