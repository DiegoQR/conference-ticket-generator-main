import { BrowserRouter, Routes, Route} from 'react-router';

import React from 'react';
import Layout from './components/Layout';
import Ticket from './components/Ticket';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
