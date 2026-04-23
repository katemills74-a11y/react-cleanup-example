import React from 'react'
import './App.css'
import CounterInputCard from './CounterInputCard'

function App() {
  return (
    <div>
      <h1>React Cleanup Example</h1>
      <CounterInputCard title="Test Component" big showFooter />
    </div>
  )
}

export default App
