import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <h1 className='text-4xl'>Vite + React</h1>
      <div className="card bg-red-600">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
