import React, { Component } from 'react'

export class SendMessageForm extends Component {
  render() {
    return (
      <form className="send-message-form">
          <input
           type="text"
           placeholder="SendMessageForm" />
      </form>
    )
  }
}

export default SendMessageForm
