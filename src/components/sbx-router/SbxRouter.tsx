import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import ISbxRouter from './ISbxRouter';

const SbxRouter = (prop: { routers?: Array<ISbxRouter> }) : ReactElement =>  { 
  return (
    <Routes>
      {
        prop.routers?.map((item, index) => (
          <Route path={item.path} element={item.element} key={index} />
        )
      )}
    </Routes>
  );}
  
  export default SbxRouter;