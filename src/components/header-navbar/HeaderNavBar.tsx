import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import IHeaderNavBar from './IHeaderNavBar';
import styles from './HeaderNavBar.module.scss';

/**
 * 
 * @param prop 
 * @returns 
 */
const HeaderNavBar = (prop: IHeaderNavBar) : ReactElement => {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className="sbx-container">
          <NavLink to="/" className={styles.brand}>
            <div className="headernavbar-brand">
              { prop.logo }
            </div>
          </NavLink>
          <ul className={styles.menulist}>
            { 
              prop.items?.filter((item) => { 
                return !item.hidden && !item.internal; 
              }).map((item, index) => (
                <li className="sb-navbar-menu-list-item" key={index} >
                  <NavLink to={item.path} className={ ({isActive}) => (isActive ? styles.active : "") }>{item.description}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderNavBar;