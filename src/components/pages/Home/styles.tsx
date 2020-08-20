import styled from 'styled-components';

export const Hello = styled.span`
    font-size: 1.4em;

    @media screen and (min-width: 560px) {
        font-size: 2em;
    }

    @media screen and (min-width: 1080px) {
        font-size: 2.5em;
    }
`;

export const Name = styled.span`
    font-size: 1.2em;

    @media screen and (min-width: 561px) and (max-width: 1079px) {
        font-size: 1.7em;
    }

    @media screen and (min-width: 1080px) {
        font-size: 1.9em;
    }
`;

export const Title = styled.h1`
    font-family: ${props => props.theme.fontFamily.mono};
    font-size: 26px;
`;

export const MainText = styled.div`
    margin: 2em 0 2em;
`;

export const SocialMediaList = styled.div`
    margin: 0.5em auto;
    padding: 0;

    @media screen and (min-width: 561px) {
        display: flex;
        justify-content: space-evenly;
    }
`;

export const Paragraph = styled.p`
    margin: 0 0 1em;
    line-height: 1.6em;
    font-size: 0.9em;

    @media screen and (min-width: 400px) {
        line-height: 1.8em;
        font-size: 1em;
    }
`;

export const SocialMediaLink = styled.a`
    margin: 1em;
    padding: 0;
    text-decoration: none;
    color: ${props => props.theme.color.green};
    display: inline-block;

    &:hover {
        text-decoration: underline;
        opacity: 0.7;
    }
`;

export const Tooltip = styled.div`
    position: relative;
    display: inline-block;

    & .tooltiptext {
        visibility: hidden;
        width: 110px;
        background-color: ${props => props.theme.color.lightGreen};
        color: ${props => props.theme.color.black};
        text-align: center;
        padding: 6px;
        border-radius: 3px;
        font-size: 14px;

        /* Position the tooltip text */
        position: absolute;
        z-index: 1;

        top: 100%;
        left: 50%;
        margin-left: -55px;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    &:hover .tooltiptext {
        visibility: visible;
    }
`;

export const HomeContainer = styled.div`
`;

export const HomeMain = styled.div`
    margin: 2em 0;
    padding: 1em;
    font-family: ${props => props.theme.fontFamily.body};
    max-width: 600px;


    @media (min-width: 425px) {
        margin: 2em auto;
    }
`;

export const HR = styled.hr`
    background: ${props => props.theme.color.orange};
`;

export const Footer = styled.p`
    font-family: ${props => props.theme.fontFamily.mono};
    text-align: center;
    margin: 1.5em 0;
`;
