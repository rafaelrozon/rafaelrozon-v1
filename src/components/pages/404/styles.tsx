import styled from 'styled-components';
import { Link } from 'gatsby';

export const NotFound = styled.h1`
    position: absolute;
    background: ${props => props.theme.color.black};
    color: ${props => props.theme.color.white};
    padding: 1em;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;

export const GoBack = styled(Link)`
    position: absolute;
    text-decoration: none;
    background: ${props => props.theme.color.orange};
    color: ${props => props.theme.color.black};
    padding: 1em;
    left: 50%;
    top: 65%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border: none;
    font-size: 1em;
    border-radius: 3px;
`;

export const BgImage = styled.img`
    width: 100%;
    height: 100%;
`;
