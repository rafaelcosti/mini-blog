import { ReactElement, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthentication } from '../../hook/authentication/useAuthentication';
import { useAuthValue } from '../../context/auth/AuthContext';
import IHeaderNavBar from './IHeaderNavBar';
import styles from './HeaderNavBar.module.scss';
import ISbxRouter from '../sbx-router/ISbxRouter';
import User from '../../interfaces/user/User';

/**
 * 
 * @param prop 
 * @returns 
 */
const HeaderNavBar = (prop: IHeaderNavBar) : ReactElement => {
  /**
   * user data
   */
  const user = useAuthValue();

  /**
   * 
   */
  const { logout } = useAuthentication();

  /**
   * 
   */
  const [itemsNavbar, setItemsNavbar] = useState<Array<ISbxRouter>>([]);

  /**
   * 
   */
  useEffect(() => {
    if (prop.items) {
      if (user) {
        const us : User = (user as User);
        if (us.logged) {
          setItemsNavbar(prop.items?.filter((item) => { 
            return !item.hiddenLogged; 
          }));
          return ;
        }
      } 
      
      setItemsNavbar(prop.items.filter((item) => { return !item.hiddenLogout; }));
    }
  }, [user]);

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
              itemsNavbar.map((item, index) => (
                <li className="sb-navbar-menu-list-item" key={index} >
                  <NavLink to={item.path} className={ ({isActive}) => (isActive ? styles.active : "") }>{item.description}</NavLink>
                </li>
              ))
            }
            {
              (user as User).logged ? 
                <li className="sb-navbar-menu-list-item">
                  <button onClick={logout}>Sair</button>
                </li>
              :
                <></>
            }
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderNavBar;