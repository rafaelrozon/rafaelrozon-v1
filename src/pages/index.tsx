import 'typeface-rokkitt';

import React from 'react';
import { graphql } from 'gatsby';
import Home from '../components/pages/Home';

const IndexPage = props => <Home {...props} />;

export const pageQuery = graphql`
    query {
        allSocialMediaYaml {
            nodes {
                id
                name
                href
                icon
                alt
            }
        }
    }
`;

export default IndexPage;
