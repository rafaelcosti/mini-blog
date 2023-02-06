import { ReactElement } from 'react';
import IFooter from './IFooter';
import styles from './Footer.module.scss';

/**
 * 
 * @param prop 
 * @returns 
 */
const Footer = (prop: IFooter) : ReactElement => {
  return (
    <div className="sbx-container">
      <h1>Footer</h1>
    </div>
  );
}

export default Footer;