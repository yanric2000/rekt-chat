import React, { Component, useState, useEffect  } from 'react';
import { Container, Message, Name } from './styles';
import toastr from 'toastr';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

export default class MessageList extends Component {
    constructor(props) {
        super(props);

        const dummyData = [];

        this.state = {
            messages: dummyData,
            ownUserName: "yan"
        };

        const instanceLocatorKey = 'v1:us1:6ea5028d-82fc-4d7a-afbc-bea1c50fbeec';
        const tokenProviderUrl = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/6ea5028d-82fc-4d7a-afbc-bea1c50fbeec/token';
        const userId = 'yan';
        this.roomId = '0f03495b-9f01-4112-a02b-caee3805fbdb';
        
        this.chatManager = new ChatManager({
            instanceLocator: instanceLocatorKey,
            userId,
            tokenProvider: new TokenProvider({ url: tokenProviderUrl })
        });
    }

    sendMessage(text) {
        const roomId = this.roomId;
        this.chatManager.connect()
        .then(currentUser => {
            currentUser.sendSimpleMessage({
                roomId: roomId,
                text,
            })
            .then(messageId => {
                console.log(`Added message to ${roomId}`)
            })
            .catch(err => {
                console.log(`Error adding message to ${roomId}: ${err}`)
            });
        })
        .catch(err => {
            toastr.error('Erro ao enviar sua mensagem');
        })
    }

    componentDidMount() {
        const roomId = this.roomId;

        this.chatManager.connect()
        .then(currentUser => {
            toastr.success('Conectado com sucesso');
            currentUser.fetchMessages({
                roomId,
            })
            .then(messages => {
                this.setState({ messages: [...this.state.messages, ...messages] });
            })
            .catch(err => {
                toastr.error('Falha ao atualizar as mensagens');
            })
        })
        .catch(err => {
            console.log('Error on connection', err)
        });
    }

    render() {
        const { ownUserName } = this.state;

        return (
            <Container>
                <ul>
                    {this.state.messages.map((message) => {
                        const boolOwnUserName = message.senderId === ownUserName ? true : false;
                        return (
                            <Message key={message.id.toString()}>
                                <Name ownName={boolOwnUserName}> {message.senderId}: </Name>
                                {message.text}
                            </Message>
                        );
                    })}
                </ul>
            </Container>
        )
    }
}