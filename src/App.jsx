import { BrowserRouter, Routes, Route} from 'react-router';

import React from 'react';
import TicketForm from './pages/TicketForm';
import TicketShown from './pages/TicketShown';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TicketForm />} />
          <Route path="/ticket" element={<TicketShown />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
