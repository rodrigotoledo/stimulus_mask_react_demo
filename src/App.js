// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Stimulus Mask Example</h1>
      <div data-controller="mask">
        <input type="text" data-action="input->mask#mask" data-mask-format="999.999.999-99" placeholder="CPF" />
        <input type="text" data-action="input->mask#mask" data-mask-format="99\\9.999.999-99" placeholder="CPF with char 9" />
        <input type="text" data-action="input->mask#mask" data-mask-format="####-####" placeholder="Anything" />
        <input type="text" data-action="input->mask#mask" data-mask-format="\\#9-999\\#" placeholder="Char # and digits" />
      </div>
    </div>
  );
}

export default App;
