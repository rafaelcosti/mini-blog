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
        <h1>Footer</h1>
      </div>
    </footer>
  );
}

export default Footer;