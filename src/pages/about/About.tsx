import { ReactElement } from 'react';
import IAbout from './IAbout';
import styles from './About.module.scss';

/**
 * 
 * @param prop 
 * @returns 
 */
const About = (prop: IAbout) : ReactElement => {
  return (
    <div className="sbx-container">
      <h1>About</h1>
    </div>
  );
}

export default About;