import { ReactElement } from 'react';
import IContact from './IContact';
import styles from './Contact.module.scss';

/**
 * 
 * @param prop 
 * @returns 
 */
const Contact = (prop: IContact) : ReactElement => {
  return (
    <div className="sbx-container">
      <h1>Contact</h1>
    </div>
  );
}

export default Contact;