import styled from 'styled-components';
import * as Variables from '../../assets/theme/variables';

export const Form = styled.form`
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    width: 100%;
`;

export const Textarea = styled.textarea`
    border: 1px solid ${Variables.shadowThirdColor};
    border-radius: 6px;
    color: ${Variables.thirdColor};
    font-size: 20px;
    min-height: 80px;
    line-height: 1.25;
    width: calc(100% - 140px - 140px - 40px);
`;