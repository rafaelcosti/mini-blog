import { ReactElement, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuthValue } from '../../context/auth/AuthContext';
import User from '../../interfaces/user/User';
import ISbxRouter from './ISbxRouter';

const SbxRouter = (prop: { routers?: Array<ISbxRouter> }) : ReactElement =>  {
  /**
   * user data
   */
  const user = useAuthValue();

  /**
   * 
   */
  const [itemsNavbar, setItemsNavbar] = useState<Array<ISbxRouter>>([]);

  /**
   * 
   */
  useEffect(() => {
    if (prop.routers) {
      if (user) {
        const us : User = (user as User);
        if (us.logged) {
          setItemsNavbar(prop.routers?.filter((item) => { 
            return !item.hiddenLogged; 
          }));
          return ;
        }
      } 
      
      setItemsNavbar(prop.routers.filter((item) => { return !item.hiddenLogout; }));
    }
  }, [user]);

  return (
    <Routes>
      {
        itemsNavbar.map((item, index) => (
          <Route path={item.path} element={item.element} key={index} />
        )
      )}
    </Routes>
  );}
  
  export default SbxRouter;