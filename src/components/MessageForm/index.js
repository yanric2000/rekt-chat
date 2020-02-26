import React, { Component } from 'react';
import { Textarea, Form } from './styles';
import Button from '../ButtonForm';

export default class MessageForm extends Component {
    constructor(props) {
        super(props);

        this.roomId = window.localStorage.getItem('roomId');

        this.state = {
            message: '',
        };

        // Define o componente como o escopo,
        // consigo acessar o THIS do componente
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMessage = this.props.sendMessage.bind(this);
    }

    resize(e) {
        const element = e.target;
        element.style.height = "5px";
        element.style.height = (element.scrollHeight)+"px";
    }

    handleChange(event) {
        this.setState({ message: event.target.value });
        
        event.preventDefault();
    }

    handleSubmit(event) {
        event.preventDefault();

        this.sendMessage(this.state.message);
        this.setState({ message: '' });

        return false;
    }

    render() {
        const handleChange = this.handleChange;
        const message = this.state.message;
        const resize = this.resize;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Textarea placeholder="Sua Mensagem" onChange={handleChange} value={message} onInput={resize} required name="message" id="message"></Textarea>
                <Button type="submit"> Enviar <span> ( enter ) </span> </Button>
                <Button className="exit" type="button"> Finalizar </Button>
            </Form>
        );
    }
}