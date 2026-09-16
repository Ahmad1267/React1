import { useState } from 'react'

   // React declarative
function App() {
  const [name, setName] = useState("Ali");

  return (
    <>
      <h1>Hello {name}</h1>

      <button onClick={() => setName("Ahmad")}>
        Change Name
      </button>
    </>
  );
}
export default App
