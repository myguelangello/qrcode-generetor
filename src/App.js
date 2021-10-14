import { useState } from 'react';
import './App.css';
import QRCodeCanvas from './QRCodeCanvas';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <main>
        <h1>QRCode Generetor</h1>
        <input
          onChange={(element) => {
            setText(element.target.value);
          }}
          value={text}
          placeholder="Digite a sua URL..."
        />
        <QRCodeCanvas text={text}></QRCodeCanvas>
      </main>
    </div>
  );
}

export default App;
