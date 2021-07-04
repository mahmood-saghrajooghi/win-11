import React from 'react';
import { ToastifyContainer } from './Components/Toast/toastify';
import Layout from './Containers/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout />
      <ToastifyContainer />
    </div>
  );
}

export default App;
