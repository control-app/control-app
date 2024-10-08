import { AppUI } from './AppUI';
import { ControlProvider } from "../ControlContext";
import React from "react";
import './App.css'

function App() {
  return (
    <ControlProvider>
      <AppUI />
    </ControlProvider>
  );
}

export default App;
