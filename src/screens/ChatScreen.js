import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default function ChatScreen() {

  const [messages, setMessages] = useState([
    /**
     * Mock message data
     */
    // example of system message
    {
      _id: 0,
      text: 'New room created.',
      createdAt: new Date().getTime(),
      system: true
    },
    // example of chat message
    {
      _id: 1,
      text: 'Henlo!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Test User'
      }
    }
  ]);

const send = (newMsg = []) => {
    setMessages(GiftedChat.append(messages, newMsg))
};

return(
    <GiftedChat 
    messages={messages} 
    onSend={send} 
    user={{
        name: 'Nikhil Gupta'
    }} />
);
}