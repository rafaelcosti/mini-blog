import { ReactElement } from 'react';
import IRoute404 from './IRoute404';
import styles from './Route404.module.scss';

/**
 * 
 * @param prop 
 * @returns 
 */
const Route404 = (prop: IRoute404) : ReactElement => {
  return (
    <div className="sbx-container">
      <h1>404</h1>
    </div>
  );
}

export default Route404;