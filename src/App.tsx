import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'

import amplifyConfig from './aws-exports'

Amplify.configure(amplifyConfig)

function App() {
  return (
    <div className='App'>
      <Authenticator>
        {({ signOut }) => (
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn React
            </a>
            <button onClick={signOut}>Log Out</button>
          </header>
        )}
      </Authenticator>
    </div>
  )
}

export default App
