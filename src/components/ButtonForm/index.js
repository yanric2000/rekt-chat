import React, { Component } from 'react';
import { StyledButton } from './styles';


export default class Button extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const props = this.props;
        const { autofocus, className, disabled, form, formaction, formenctype, 
            formmethod, formnovalidate, formtarget, name, text, type, value } = props;
        
        return (
            <StyledButton 
                autoFocus={autofocus}
                className={className}
                disabled={disabled}
                form={form}
                formAction={formaction}
                formEncType={formenctype}
                formMethod={formmethod}
                formNoValidate={formnovalidate}
                formTarget={formtarget}
                name={name}
                type={type}
                value={value}
            > {props.children} </StyledButton>
        )
    }
}
