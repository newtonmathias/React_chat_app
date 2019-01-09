import React, { Component } from 'react'


 class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        <div className="help-text">
            { this.props.messages.map((message, index) => {
                return (
                    <div key ={index} className="message">
                        <div className="message-username">{message.senderId}</div>
                        <div className="message-text">{message.text}</div>
                    </div>
                )
            })}
        </div>
      </div>
    )
  }
}

export default MessageList
