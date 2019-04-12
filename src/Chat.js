import React from 'react'

import { database } from './firebaseConf'

import MessageList from './MessageList'
import NewMessageForm from './NewMessageForm'
import { auth } from 'firebase';

class Chat extends React.Component {
    state = {
        messages: null,
        newMessageText: '',
    }

    componentDidMount() {
        database.ref('JFDDL7/chat').on(
            'value',
            (snapshot) => this.setState({
                messages: snapshot.val()
            })
        )
    }

    componentWillUnmount() {
        database.ref('JFDDL7/chat').off()
    }

    onNewMessageTextChanged = (event) => this.setState({
        newMessageText: event.target.value
    })

    onMessageSent = () => {
        database.ref('JFDDL7/chat').push({
            text: this.state.newMessageText,
            date: Date.now(),
            author: {
                displayName: auth.currentUser.displayName,
                email: auth.current.email,
                photoURL: auth.currentUser.photoURL
            }
        })
        .then(
            () => {
                this.set.State({
                    newMessageText: '',
                })
            }
        )
    }


    render() {
        return (
            <div>
                <MessageList
                    messages={this.state.messages}
                />
                <NewMessageForm
                    newMessageText={this.state.newMessageText}
                    onNewMessageTextChanged={this.state.onNewMessageTextChanged}
                    onMessageSent={this.state.onMessageSent}

                />
            </div>
        )
    }
}

export default Chat