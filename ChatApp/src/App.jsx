import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

function App() {
  if(!localStorage.getItem('username')){
    return <LoginForm/>
  }
  return (    
    <ChatEngine
        height='100vh'
        projectID='702d4a3b-309e-4853-ba64-189943d4eb5c'
        userName='Sameer'
        userSecret='123123'
        // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
