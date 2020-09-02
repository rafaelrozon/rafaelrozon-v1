import * as React from 'react';
import {
    FontAwesomeIcon,
    Props as FontAwesomeProps,
} from '@fortawesome/react-fontawesome';
import {
    faMedium,
    faTwitterSquare,
    faGithubSquare,
    faLinkedinIn,
    faStackOverflow,
    faDev,
    faSpotify,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

enum SupportedIcons {
    medium = 'medium',
    twitter = 'twitter',
    linkedin = 'linkedin',
    github = 'github',
    stackoverflow = 'stackoverflow',
    devto = 'devto',
    spotify = 'spotify',
    instagram = 'instagram',
    gitbook = 'gitbook',
}

const toIcon = name => {
    const map: { [key in SupportedIcons]: any } = {
        medium: faMedium,
        twitter: faTwitterSquare,
        linkedin: faLinkedinIn,
        github: faGithubSquare,
        stackoverflow: faStackOverflow,
        devto: faDev,
        spotify: faSpotify,
        instagram: faInstagram,
        gitbook: faBook,
    };
    return map[name];
};

interface Props {
    name: SupportedIcons;
    size?: FontAwesomeProps['size'];
}

const Icon: React.FC<Props> = ({ name, size = 'lg' }) => {
    return <FontAwesomeIcon icon={toIcon(name)} size={size} />;
};

export default Icon;
