import { ReactElement, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss';
import { AuthProvider } from './context/auth/AuthContext';
import Footer from './components/footer/Footer';
import Logo from './components/logo/Logo';
import HeaderNavBar from './components/header-navbar/HeaderNavBar';
import ISbxRouter from './components/sbx-router/ISbxRouter';
import SbxRouter from './components/sbx-router/SbxRouter';
import { RouterConst } from './utils/RouterConst';
import User from './interfaces/user/User';
import { useAuthentication } from './hook/authentication/useAuthentication';
import { Auth, onAuthStateChanged } from 'firebase/auth';

const App = () : ReactElement => {
  /**
   * Routers
   */
  const routers: Array<ISbxRouter> = RouterConst.navigation("");

  /**
   * User data
   */
  const [user, setUser] = useState<User>();

  /**
   * 
   */
  const { auth } = useAuthentication();
 
  /**
   * 
   */
  const loadingUser = user === undefined;

  /**
   * 
   */
  useEffect(() => {
    debugger;
    onAuthStateChanged(auth, (userFb) => {
      debugger;
      const us: User = {
        logged: (userFb ? true : false),
        name: userFb?.displayName,
        email: userFb?.email,
        emailVerified: userFb ? userFb?.emailVerified : false,
      };
      setUser(us);
    });
  }, [auth]);

  /**
   * 
   */
  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <AuthProvider value={{ user }}>
      <BrowserRouter>
        <HeaderNavBar logo={<Logo/>} items={RouterConst.navigation("")}/>
        <main>
          <SbxRouter routers={routers} />
        </main>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;