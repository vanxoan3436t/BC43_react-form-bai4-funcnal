import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { stote } from './redux/configStote';
import FormNhanVien from './ReactFormRedux/FormNhanVien';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <Provider store={stote}>

<FormNhanVien/>
      
    </Provider>

);
// npx i @reduxjs/toolkit
// npx i react-redux
// npx create-react-app