import styled from 'styled-components';
import * as Variables from '../../assets/theme/variables';

export const ContainerFullScreen = styled.div `
    background-color: ${Variables.secondaryShadowSecondaryColor};
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
`;

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-flow: column;
    justify-content: baseline;
    height: ${
        (props) =>{
            return props.customHeight ? props.customHeight : `100%`
        }
    };
    padding: 0 60px;
    width: 100%;
`;

export const Text = styled.div`
    color: ${Variables.thirdColor};
    font-size: 18px;
    font-weight: bold;
`;