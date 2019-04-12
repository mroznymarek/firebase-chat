import React from 'react'

import TextField from '@material-ui/core/TextField'

const NewMessageForm = (props) => (
  <div>
    <form
      onSubmit={event => {
        event.preventDefault()

        props.onMessageSent()
      }}
    >
      <TextField
        fullWidth={true}
        value={props.newMessageText}
        onChange={props.onNewMessageTextChanged}
      />
    </form>
  </div>
)

export default NewMessageForm