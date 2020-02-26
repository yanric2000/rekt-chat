import React from 'react';
import { Container, ContainerFullHeight } from './styles';
import Title from '../../components/Title';
import MessageList from '../../components/MessageList';
import MessageForm from '../../components/MessageForm';

function Home() {
    async function handleSendMessage(e) {
        return false;
    }
    return (
        <ContainerFullHeight>
            <Title customHeight="10%" title="Bem Vindo ao RektChat"></Title>
            <Container customHeight="90%">
                <MessageList />
                <MessageForm onSubmit={handleSendMessage}></MessageForm>
            </Container>
        </ContainerFullHeight>
    );
}

export default Home;