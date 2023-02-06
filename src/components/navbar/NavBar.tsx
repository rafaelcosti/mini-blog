import { ReactElement } from 'react';
import INavBar from './INavBar';
import styles from './NavBar.module.scss';

/**
 * 
 * @param prop 
 * @returns 
 */
const NavBar = (prop: INavBar) : ReactElement => {
  return (
    <div className="sbx-container">
      <h1>Model</h1>
    </div>
  );
}

export default NavBar;