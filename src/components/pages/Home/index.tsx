import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import SEO from '../../Seo';
import Icon from '../../Icon';
import Newsletter from '../../Newsletter';
import * as Styles from './styles';

const {
    SocialMediaLink,
    HomeContainer,
    HomeMain,
    Title,
    SocialMediaList,
    Paragraph,
    MainText,
    HR,
    Footer,
    Tooltip,
    Hello,
    Name,
} = Styles;

const IndexPage = props => {
    const { data } = props;
    const {
        allSocialMediaYaml: { nodes },
    } = data;
    const year = new Date().getFullYear();

    return (
        <HomeContainer>

            <SEO title="Home" lang="en" />
            <HomeMain>
                <Title data-testid="greetings">
                    <Hello>Hello.</Hello>
                    <br />
                    <Name>I'm Rafael Rozon</Name>
                </Title>
                <MainText data-testid="main-text">
                    <Paragraph>
                        I'm a Brazilian software developer living in the
                        beautiful British Columbia, Canada.
                    </Paragraph>
                    <Paragraph>
                        I consider myself a Full Stack JavaScript developer, but
                        I'm a programmer before anything else and I'm proud of
                        being able to tackle problems in different programming
                        languages and stacks. I have experience working with
                        enterprise frontend development mainly in React and
                        Typescript and I also like DevOps, Algorithms, Design
                        Patterns, Testing, and the intersection of Design and
                        Engineering.
                    </Paragraph>
                    <Paragraph>
                        I'm in a long learning path to become a Software
                        Architect and I'm teaching myself typography and
                        calligraphy.
                    </Paragraph>
                    <Paragraph>
                        I'm preparing a monthly newsletter about Frontend
                        Development, Software Architecture, and Developer
                        Experience (DX). If you would like to know more, sign up
                        below and let's start a conversation.
                    </Paragraph>
                    <Paragraph>Thanks and have an awesome day!</Paragraph>
                    <Paragraph>Rafael</Paragraph>
                </MainText>
                <HR />
                <SocialMediaList data-testid="social-media-list">
                    {nodes.map(link => {
                        return (
                            <Tooltip key={link.name}>
                                <SocialMediaLink
                                    href={link.href}
                                    alt={link.alt}
                                    target="__blank"
                                >
                                    <Icon name={link.icon} />
                                </SocialMediaLink>
                                <span className="tooltiptext">{link.name}</span>
                            </Tooltip>
                        );
                    })}
                </SocialMediaList>
                <HR />
                <Newsletter onSave={addToMailchimp} />
            </HomeMain>
            <Footer data-testid="footer">&copy; {year} Rafael Rozon</Footer>
        </HomeContainer>
    );
};

export default IndexPage;
