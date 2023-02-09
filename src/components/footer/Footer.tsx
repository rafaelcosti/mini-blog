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
    <footer>
      <div className={styles.footer}>
        <h3>Escreva sobre o que você tem interesse!</h3>
        <p>Mini Blog &copy; 2023</p>
      </div>
    </footer>
  );
}

export default Footer;