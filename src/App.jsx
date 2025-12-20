import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import CodeMirrorPage from './CodeMirrorPage'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
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

const About = () => {
  return (
    <div className="about-page">
      <h1>关于页</h1>
      <p>这是通过路由新增的页面</p>
      <footer>&copy; 2025 huangxiancong.</footer>
    </div>
  )
}

function App() {
  return (
    <div>
    <nav style={{ padding: '10px', background: '#f5f5f5' }}>
      <Link to="/" style={{ margin: '10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '10px' }}>About</Link>
      <Link to="/codemirror" style={{ margin: '10px' }}>CodeMirror</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/codemirror" element={<CodeMirrorPage />} />
    </Routes>
    </div>
  )
}

export default App
