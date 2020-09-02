import * as React from 'react';
import { render } from '../../../../utils/testUtils';
import HomePage from '..';

describe('home page tests', () => {
    it('should render', () => {
        const { container, getByTestId } = render(
            <HomePage
                data={{
                    allSocialMediaYaml: {
                        nodes: [
                            {
                                name: 'twitter',
                                href: 'https://twitter',
                                alt: 'twitter',
                                icon: 'twitter',
                            },
                            {
                                name: 'medium',
                                href: 'https://medium',
                                alt: 'medium',
                                icon: 'medium',
                            },
                        ],
                    },
                }}
            />
        );
        expect(getByTestId('main-text')).toBeTruthy();
        expect(getByTestId('greetings')).toBeTruthy();
        expect(getByTestId('social-media-list')).toBeTruthy();
        expect(getByTestId('newsletter')).toBeTruthy();
        expect(getByTestId('footer')).toBeTruthy();
        expect(container).toMatchSnapshot();
    });
});
