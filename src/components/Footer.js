import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Footer({ footer, onFooterLoaded }) {
    useEffect(() => {
        if (!footer.isLoaded) onFooterLoaded(true);
        window.scrollTo(0, 0);
    });

    return <div></div>;
}

Footer.propTypes = {
    footer: PropTypes.shape({
        isLoaded: PropTypes.bool.isRequired,
        onLoad: PropTypes.shape({ }).isRequired
    }).isRequired,
    onFooterLoaded: PropTypes.func.isRequired
}

export default Footer
