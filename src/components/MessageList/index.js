import React, { Component  } from 'react';
import { Container, Message, Name, List } from './styles';
import toastr from 'toastr';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { InstanceLocatorKey, TokenProviderUrl, UserId, RoomId } from '../../services/credentialsChatkit';
export default class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ownUserName: UserId
        };
        
        this.roomId = RoomId;
        this.chatManager = new ChatManager({
            instanceLocator: InstanceLocatorKey,
            userId: UserId,
            tokenProvider: new TokenProvider({ url: TokenProviderUrl })
        });
        this.refreshMessages = this.props.refreshMessages.bind(this);
    }

    componentDidMount() {
        this.props.refreshMessages();
    }

    render() {
        const { ownUserName } = this.state;
        const messages = this.props.messages;
        
        return (
            <Container>
                <List>
                    {messages.map((message) => {
                        const boolOwnUserName = message.senderId === ownUserName ? true : false;
                        return (
                            <Message key={message.id.toString()}>
                                <Name ownName={boolOwnUserName}> {message.senderId}: </Name>
                                {message.text}
                            </Message>
                        );
                    })}
                </List>
            </Container>
        )
    }
}