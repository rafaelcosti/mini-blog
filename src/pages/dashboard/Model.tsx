import { ReactElement } from 'react';
import IDashboard from './IDashboard';
import styles from './Dashboard.module.scss';

/**
 * 
 * @param prop 
 * @returns 
 */
const Dashboard = (prop: IDashboard) : ReactElement => {
  return (
    <div className="sbx-container">
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;