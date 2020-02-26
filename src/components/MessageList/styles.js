import styled from 'styled-components';
import * as Variables from '../../assets/theme/variables';

export const Container = styled.div`
    align-items: center;
    background-color: ${Variables.secondaryColor};
    border: 1px solid ${Variables.secondaryShadowThirdColor};
    border-radius: 6px;
    display: flex;
    flex-flow: column;
    height: calc(100% - 140px);
    justify-content: end;
    margin: 0 auto 24px auto;
    padding: 22px;
    width: 100%;
`;

export const Message = styled.li`
    color: ${Variables.thirdColor};
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
    width: 100%;
`;

export const Name = styled.span`
    color: ${
        (props) => {
            return props.ownName.toString() === 'false' ? Variables.primaryColorLighter : Variables.thirdColor;
        }
    };
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
    margin-right: 12px;
`;