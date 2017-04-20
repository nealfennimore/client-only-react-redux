import React, {Component, PropTypes} from 'react';
import GlobalSEO from './LayoutSEO';
import Navigation from 'components/global/Navigation';
import Footer from 'components/global/Footer';

import styles from './Layout.scss';

export default class Layout extends Component {
    render() {
        return (
            <div className={`${styles.container}`}>
                <GlobalSEO />
                <Navigation />
                { this.props.children }
                <Footer />
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object
};
