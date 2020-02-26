import styled from 'styled-components';
import * as Variables from '../../assets/theme/variables';

export const Container = styled.div`
    align-items: center;
    display: flex;
    height: auto;
    justify-content: center;
    padding: 22px;
    width: 100%;
`;

export const Text = styled.p`
    color: ${Variables.thirdColor};
    font-size: 18px;
    font-weight: bold;
`;
