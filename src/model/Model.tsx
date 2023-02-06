import { ReactElement } from 'react';
import IModel from './IModel';
import styles from './Model.module.scss';

/**
 * 
 * @param prop 
 * @returns 
 */
const Model = (prop: IModel) : ReactElement => {
  return (
    <div className="sbx-container">
      <h1>Model</h1>
    </div>
  );
}

export default Model;