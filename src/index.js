import React, {useRef, Suspense, useState, useMemo} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import CanvasContents  from './3d_components/canvasContents'
import './styles/index.css';
import UIWrapper from './2d_components/uiWrapper';

ReactDOM.render(
  <React.StrictMode>
      <UIWrapper className="uiContainer"/>
      <CanvasContents />
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
