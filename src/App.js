import React from 'react';
import { ChatEngine }  from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
			projectID='dbec9764-6fd4-4809-8de6-ca075e4f83c7'
			userName='sahibakumari'
			userSecret='0915'
      renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
		/>
  )
}

export default App