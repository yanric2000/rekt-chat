import React, { Component } from 'react';
import { Container, TitleText } from './styles';

export default class Title extends Component {
    render() {
        return (
            <Container theme={{ height: this.props.customHeight }}>
                <TitleText> {this.props.title} </TitleText>
            </Container>
        )
    }
}