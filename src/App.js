import React from 'react'
import './App.css';
import { AuthProvider } from './auth/AuthProvider';
import {AppRouter} from './routes/AppRouter'

function App() {
  return (
    <>
    <AuthProvider>
    <div className="App">
      <AppRouter/> 
    </div> 
    </AuthProvider>
    </>
   
  );
}

export default App;
