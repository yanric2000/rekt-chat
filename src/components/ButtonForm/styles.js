import styled from 'styled-components';
import * as Variables from '../../assets/theme/variables';

export const StyledButton = styled.button`
    align-items: center;
    background-color: ${Variables.fourthColor};
    border: 1px solid ${Variables.fourthColor};
    border-radius: 6px;
    color: ${Variables.secondaryColor};
    display: flex;
    flex-flow: column;
    justify-content: center;
    font-size: 20px;
    line-height: 1;
    max-width: 140px;
    padding: 10px;
    transition: background-color 0.25s, border 0.25s, color 0.25s;
    width: 24%;
    &:hover {
        background-color: ${Variables.shadowFourthColor};
        border: 1px solid ${Variables.shadowFourthColor};
    }
    &.exit {
        background-color: ${Variables.fifthColor};
        border: 1px solid ${Variables.fifthColor};
        &:hover {
            background-color: ${Variables.shadowFifthColor};
            border: 1px solid ${Variables.shadowFifthColor};
        }
    }
    span {
        font-size: 14px;
        line-height: 1;
        margin-top: 8px;
    }
`;
