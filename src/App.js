import React, { useState } from 'react';
import Calulator from './components/Calculator';

import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className={`app ${theme}-theme`}>
      <div className="calculator-container">
        <div className="theme-selector">
          <span className={theme==='dark' ? '' : 'inactive'} onClick={()=> setTheme('dark')}>Dark</span>
          <span className={theme==='light' ? '' : 'inactive'} onClick={()=> setTheme('light')}>Light</span>
        </div>
        <Calulator/>
      </div>
    </div>
  );
}

export default App;
