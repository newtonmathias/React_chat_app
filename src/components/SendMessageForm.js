import React, { Component } from 'react'

class SendMessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.sendMessage(this.state.message)
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="send-message-form">
          <input
           value={this.state.message}
           onChange={this.handleChange}
           type="text"
           placeholder="Type ypur message and hit ENTER" />
      </form>
    )
  }
}

export default SendMessageForm
