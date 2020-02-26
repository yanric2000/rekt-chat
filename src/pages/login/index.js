import React, { Component } from 'react';
import { Container, Title, FullScreenContainer, Form } from './styles';
import Button from '../../components/ButtonForm';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { InstanceLocatorKey, TokenProviderUrl } from '../../services/credentialsChatkit';
import toastr from 'toastr';
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const username = this.state.username;

        this.validadeLogin(username);

        return false;
    }

    addClass(el, className = 'active') {
        if(!el)
            return false;
        
        el.classList.add(className);

        return true;
    }

    removeClass(el, className = 'active') {
        if(!el)
            return false;
        
        el.classList.remove(className);

        return true;
    }
    
    validadeLogin(username) {
        const chatManager = new ChatManager({
            instanceLocator: InstanceLocatorKey,
            userId: username,
            tokenProvider: new TokenProvider({ url: TokenProviderUrl })
        }).connect()
        .then(currentUser => {
            window.localStorage.setItem('userId', currentUser.id);
            window.location.reload();
        })
        .catch(err => {
            const inputUsername = document.getElementById('username');
            this.addClass(inputUsername, 'error');
            toastr.error('Credenciais incorretas');
        });
    }

    render() {
        const handleSubmit = this.handleSubmit;
        const removeClass = this.removeClass;
        
        if (window.localStorage.userId) {
            return <Redirect to='/'/>;
        }

        return (
            <FullScreenContainer>
                <Container>
                    <Title> Efetue o Login <br/> para continuar </Title>
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor="username"> Nome de Usuário: </label>
                        <input
                            required
                            type="text"
                            id="username"
                            name="username"
                            onChange={(e) => this.setState({ username : e.target.value })}
                            value={ this.state.username }
                            onInput={(e) => removeClass(e.target, 'error')}
                        />
                        <Button type="submit"> Login </Button>
                    </Form>
                </Container>
            </FullScreenContainer>
        )
    }
}
