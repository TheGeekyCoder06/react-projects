import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (specialChars) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 0; i < length; i++) {
        const char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, specialChars, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, specialChars, passwordGenerator]);

  return (
    <>
      <h1 className='text-5xl text-white text-center mt-4'>Password Generator</h1>
      <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-5 my-10 text-xl text-orange-500 bg-gray-700'>
        <h2 className="text-white text-2xl mb-4">Generate a strong password</h2>
        <div className='flex shadow rounded-lg overflow-hidden mb-6'>
          <input
            type="text"
            value={password}
            readOnly
            className='outline-none w-full py-2 px-4 bg-gray-800 text-white'
            placeholder='Generated Password'
          />
         <button
              onClick={() => {
                  copyPasswordToClipboard();
                  alert('Password copied to clipboard');
              }}
              className='outline-none bg-blue-500 text-white px-4 py-1 shrink-0 hover:bg-blue-600'
              >
              Copy
        </button>
        </div>
        <div className='flex flex-col md:flex-row text-lg gap-4'>
          <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer w-full'
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="min-w-max">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              className="w-5 h-5"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              defaultChecked={specialChars}
              id='charInput'
              className="w-5 h-5"
              onChange={() => setSpecialChars((prev) => !prev)}
            />
            <label htmlFor='charInput'>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

