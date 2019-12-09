import { $, render } from 'omis'
import React from 'react'
import ReactDOM from 'react-dom'

const Counter = $({
  render() {
    return <div>{$.store.data.count}</div>
  },
  use: ['count'],
  // or
  // useSelf: ['count']
})

const App = $({
  render() {
    return (
      <div>
        <Counter />
      </div>
    )
  },
})

export default App
