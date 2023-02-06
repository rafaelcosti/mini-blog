import { ReactElement } from 'react';
import IHome from './IHome';
import styles from './Home.module.scss';

/**
 * 
 * @param prop 
 * @returns 
 */
const Home = (prop: IHome) : ReactElement => {
  return (
    <div className="sbx-container">
      <h1>Home</h1>
    </div>
  );
}

export default Home;