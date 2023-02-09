import { ReactElement } from 'react';
import ICreatePost from './ICreatePost';
import styles from './CreatePost.module.scss';

/**
 * 
 * @param prop 
 * @returns 
 */
const CreatePost = (prop: ICreatePost) : ReactElement => {
  return (
    <div className="sbx-container">
      <h1>Create Post</h1>
    </div>
  );
}

export default CreatePost;