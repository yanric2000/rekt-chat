import React, { useState, useEffect } from 'react';
import { Textarea, Button, Form } from './styles';

function MessageForm({ onSubmit }) {
    const [message, setMessage] = useState([]);

    function resize(e) {
        const element = e.target;
        element.style.height = "5px";
        element.style.height = (element.scrollHeight)+"px";
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await onSubmit(e);
        return false;
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Textarea placeholder="Sua Mensagem" onChange={ (e) => { setMessage(e.target.value) } } value={message} onInput={resize} required name="message" id="message"></Textarea>
            <Button type="submit"> Enviar <span> ( enter ) </span> </Button>
            <Button className="exit" type="submit"> Finalizar </Button>
        </Form>
    );
}

export default MessageForm;