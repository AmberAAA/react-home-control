import React from 'react'
import ReactDom from 'react-dom'
import './index.scss'
import WelCome from './WelCome'

function App() {
  return (
    <div>
      <WelCome name="amber"/>
    </div>
  )
}

ReactDom.render(App(),document.getElementById('root'))

