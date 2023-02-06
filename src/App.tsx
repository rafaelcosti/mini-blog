import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss';
import Footer from './components/footer/Footer';
import Logo from './components/logo/Logo';
import HeaderNavBar from './components/header-navbar/HeaderNavBar';
import ISbxRouter from './components/sbx-router/ISbxRouter';
import SbxRouter from './components/sbx-router/SbxRouter';
import { RouterConst } from './utils/RouterConst';

const App = () : ReactElement => {
  /**
   * Routers
   */
  const routers: Array<ISbxRouter> = RouterConst.navigation("");

  return (
    <BrowserRouter>
      <HeaderNavBar logo={<Logo/>} items={RouterConst.navigation("")}/>
      <main>
        <SbxRouter routers={routers} />
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;