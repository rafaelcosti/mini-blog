import { ReactElement } from 'react';
import ILogo from './ILogo';
import styles from './Logo.module.scss';

/**
 * 
 * @param prop 
 * @returns 
 */
const Logo = (prop: ILogo) : ReactElement => {
  return (
    <div className="logo">
      Mini<span>Blog</span>
    </div>
  );
}

export default Logo;