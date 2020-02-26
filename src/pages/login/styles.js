import styled from 'styled-components';
import * as Variables from '../../assets/theme/variables';

export const FullScreenContainer = styled.div`
    background-color: ${Variables.thirdColor};
    height: 100%;
    width: 100%;
`;

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-flow: wrap;
    height: auto;
    justify-content: center;
    margin-top: 60px;
    padding: 22px;
    width: 100%;
`;

export const Title = styled.h2`
    color: ${Variables.secondaryColor};
    font-size: 24px;
    font-weight: bold;
    line-height: 1.3;
    letter-spacing: 0.3px;
    margin-bottom: 30px;
    text-align: center;
    width: 100%;
`;

export const Form = styled.form`
    align-items: center;
    background-color: ${Variables.shadowThirdColor};
    border-radius: 6px;
    display: flex;
    flex-flow: column;
    margin: 0 auto 18px auto;
    max-width: 100%;
    padding: 50px;
    width: 470px;
    input {
        border: 1px solid ${Variables.shadowThirdColor};
        border-radius: 6px;
        color: ${Variables.thirdColor};
        font-size: 16px;
        height: 38px;
        line-height: 1.25;
        margin-bottom: 12px;
        padding: 0 20px;
        width: 100%;
        &:last-child {
            margin-bottom: 0;
        }
        &.error {
            background-color: ${Variables.fifthColor};
            color: ${Variables.secondaryColor};
        }
    }
    label {
        color: ${Variables.secondaryColor};
        margin-bottom: 10px;
        margin-right: auto;
    }
`;