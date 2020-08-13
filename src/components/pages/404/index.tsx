import React from "react"

import SEO from "../../Seo";
import { NotFound, GoBack, BgImage } from './styles';

const NotFoundPage: React.FC<{}> = () => (
    <>
        <SEO title="404: Not found" lang="en" />
        <NotFound>NOT FOUND</NotFound>
        <GoBack onClick={() => window.history.back()}>Go Back?</GoBack>
        <BgImage
            src="https://media.giphy.com/media/rU6L2fuP17sS4/giphy.gif"
        />
    </>
);

export default NotFoundPage
