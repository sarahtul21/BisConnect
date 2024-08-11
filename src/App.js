
import { useState } from 'react';
// import { Link } from "react-router-dom";
import { useWindowHeight } from './shared/hook';
import HomePage from './pages/home/HomePage';

import { Route, Routes } from "react-router-dom";

function App() {
  const vh100 = useWindowHeight()

  return (
    
    <div 
      className=" bg-[#f0f2f5]" 
      style={{ 
          "--vh100": `${vh100.toString()}px`
      }}
    >
      <HomePage/>
    </div>
    
  );
}

export default App;
