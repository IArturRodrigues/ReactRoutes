import { useState } from 'react'
import Menu from './pages/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Menu />
    </div>
  )
}

export default App
