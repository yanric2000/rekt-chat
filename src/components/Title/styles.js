import styled from 'styled-components';
import * as Variables from '../../assets/theme/variables';

export const Container = styled.div`
    align-items: center;
    background-color: ${Variables.primaryColor};
    display: flex;
    justify-content: center;
    height: ${
        (props) =>{
            return props.theme.height ? props.theme.height : `auto`
        }
    };
    padding: 18px 12px;
    margin-bottom: 20px;
    width: 100%;
`;

export const TitleText = styled.h1`
    color: ${Variables.secondaryColor};
    font-size: 18px;
    font-weight: bold;
`;