import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

import { worker } from './api/server'

import './primitiveui.css'
import './index.css'


async function start() {
  
  await worker.start({ onUnhandledRequest: 'bypass' })

  const root = createRoot(document.getElementById('root')!)

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

start()
