import React, { PropTypes } from 'react';
import NavigationLinks from 'components/global/NavigationLinks';
import styles from './Navigation.scss';

const Navigation = (props) => {
    return (
        <div className={`${styles.container} row expanded`}>
            <nav className={`${styles.navigation} row align-middle align-justify`}>
                <NavigationLinks />
            </nav>
        </div>
    );
};

Navigation.propTypes = {

};

export default Navigation;