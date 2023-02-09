import { ReactElement } from 'react';
import IAbout from './IAbout';
import styles from './About.module.scss';
import { Link } from 'react-router-dom';

/**
 * 
 * @param prop 
 * @returns 
 */
const About = (prop: IAbout) : ReactElement => {
  return (
    <div className="sbx-container">
      <div className={styles.about}>
        <h1>
          Sobre o Mini <span>Blog</span>
        </h1>
        <p>
          Este projeto consiste em um blog feito com React no front-end e Firebase
          no back-end.
        </p>
        <Link to="/post/create" className="btn">
          Criar post
        </Link>
      </div>
    </div>
  );
}

export default About;