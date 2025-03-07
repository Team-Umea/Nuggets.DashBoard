import React, { useState } from 'react';
import Navbar from './Navbar';

export default function App() {
  const [showBasic, setShowBasic] = useState(false); // Lägg till state för att hantera navbar-kollapsen

  return (
    <header>
<Navbar></Navbar>

    </header>
  );
}