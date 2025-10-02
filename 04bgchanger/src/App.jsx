import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('yellow');

  const colors = [
    '#ff6363', // vibrant red
    '#ffc556', // sunny yellow
    '#43b929', // bright green
    '#4a72ff', // electric blue
    '#be4aed', // bright magenta
];

  return (
    <>
      <h1 className='text-5xl font-bold text-center mb-8'>Background Color Changer</h1>

      <div
        className="w-full h-screen duration-200 flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full bottom-12 inset-x-0 mx-2">
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className="w-10 h-10 rounded-full border-4 border-white shadow-lg cursor-pointer"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default App;