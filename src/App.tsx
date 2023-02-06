import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
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
      <SbxRouter routers={routers} />
    </BrowserRouter>
  );
}

export default App;