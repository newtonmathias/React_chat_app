import React, { Component } from 'react';
import Message from '../components/Message'


 class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        <div className="help-text">
            { this.props.messages.map((message, index) => {
                return (
                    <Message key ={index} username={message.senderId} text={message.text} />
                )
            })}
        </div>
      </div>
    )
  }
}

export default MessageList
