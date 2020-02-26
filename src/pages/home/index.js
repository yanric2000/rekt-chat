import React, { Component } from 'react';
import { Container, ContainerFullScreen } from './styles';
import Title from '../../components/Title';
import MessageList from '../../components/MessageList';
import MessageForm from '../../components/MessageForm';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { InstanceLocatorKey, TokenProviderUrl, UserId, RoomId } from '../../services/credentialsChatkit';
import toastr from 'toastr';

window.localStorage.setItem('roomId', '0f03495b-9f01-4112-a02b-caee3805fbdb');
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        }

        this.roomId = RoomId;
        this.chatManager = new ChatManager({
            instanceLocator: InstanceLocatorKey,
            userId: UserId,
            tokenProvider: new TokenProvider({ url: TokenProviderUrl })
        });

        this.sendMessage = this.sendMessage.bind(this);
        this.refreshMessages = this.refreshMessages.bind(this);
    }
    
    sendMessage(text) {
        const roomId = this.roomId;

        this.chatManager.connect()
        .then(currentUser => {
            currentUser.sendSimpleMessage({
                roomId,
                text,
            })
            .then(messageId => {
                toastr.success('Mensagem enviada');
                this.refreshMessages();
            })
            .catch(err => {
                toastr.error('Falha ao enviar sua mensagem')
            });
        })
        .catch(err => {
            toastr.error('Erro ao enviar sua mensagem');
        });
    }

    refreshMessages() {
        const roomId = this.roomId;

        this.chatManager.connect()
        .then(currentUser => {
            currentUser.fetchMessages({
                roomId,
            })
            .then(messages => {
                this.setState({ messages: [...messages] });
            })
            .catch(err => {
                toastr.error('Falha ao atualizar as mensagens');
            })
        })
        .catch(err => {
            console.log('Erro na conexão')
        });
    }

    render() {
        const sendMessageHandler = this.sendMessage;
        const refreshMessagesHandler = this.refreshMessages;
        const messages = this.state.messages;

        return (
            <ContainerFullScreen>
                <Title customHeight="10%" title="Bem Vindo ao RektChat"></Title>
                <Container customHeight="90%">
                    <MessageList refreshMessages={refreshMessagesHandler} messages={messages} />
                    <MessageForm sendMessage={sendMessageHandler}/>
                </Container>
            </ContainerFullScreen>
        );
    }
}


export default Home;