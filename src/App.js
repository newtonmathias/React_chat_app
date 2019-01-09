import React, { Component } from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';
import { tokenUrl, instanceLocator } from './config'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

  componentDidMount () {
    const chatManager = new ChatManager({
      instanceLocator,
      userId: 'Newton',
      tokenProvider: new TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: '25184618',
        hooks: ({
          onMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            })
          }
        })
      })
    })
  }

  render() {
    console.log('message.text: ', this.state.messages)
    return (
      <div className="app">
        <RoomList />
        <MessageList messages={this.state.messages}/>
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
