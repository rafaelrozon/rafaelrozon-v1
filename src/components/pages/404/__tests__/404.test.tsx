import * as React from 'react';
import { render } from '../../../../utils/testUtils';
import NotFoundPage from "..";

describe("404 tests", () => {
    it("should render", () => {
        const {container} = render(<NotFoundPage />)
        expect(container).toMatchSnapshot();
    });
});
