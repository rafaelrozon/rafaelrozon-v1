import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Container = styled.div`
    margin-top: 3em;
`;

export const SubscribeTo = styled.h2`
    text-align: center;
    margin: 1em 0;
    font-size: 18px;
    font-weight: bold;
    font-family: ${props => props.theme.color.header};
`;

export const SubscribeWarning = styled.p`
    font-size: 0.9em;
    text-align: center;
    margin-bottom: 2em;
`;

// Form
export const Label = styled.label`
    display: block;
    margin-bottom: 0.25em;
    font-size: 0.8em;
`;

export const Input = styled(Field)`
    box-sizing: border-box;
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.color.darkGreen};
    font-size: 1em;
    line-height: 1.5em;
    padding: 0.6em;
    font-family: ${props => props.theme.fontFamily.mono};
`;

export const Message = styled.p`
    font-weight: bold;
    background: ${props =>
        props.type === 'error'
            ? props.theme.color.orange
            : props.theme.color.lightGreen};
    padding: 1em 0.75em;
    border-radius: 5px;
    color: ${props => props.theme.color.white};
`;

export const Username = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const Button = styled.input`
    background: white;
    border: 1px solid #126872;
    padding: 0.5em 1em;
    border-radius: 5px;
    font-size: 1em;
    line-height: 1.5em;

    &:hover {
        opacity: 0.8;
    }
`;

export const InputErrorMessage = styled(ErrorMessage)`
    color: ${props => props.theme.color.mediumOrange};
    margin: 0.5em 0;
`;

export const EmailRow = styled.div`
    margin-bottom: 1em;
`;

// Layout
export const Row = styled.div`
    margin-bottom: 0.8em;
`;

export const Col = styled.div`
    width: ${props => (props.col / 12) * 100 + '%'};
    padding-right: 0.5em;

    &:last-of-type {
        padding-right: 0;
    }
`;
