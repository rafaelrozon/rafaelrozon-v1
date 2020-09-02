import { render } from '../../../utils/testUtils';
import * as React from 'react';
import Icon from '..';

describe('Icon', () => {
    it('should render', () => {
        const { container } = render(<Icon name="github" />);
        expect(container).toMatchSnapshot();
    });
});
