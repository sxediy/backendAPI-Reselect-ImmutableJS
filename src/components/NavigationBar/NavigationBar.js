import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './NavigationBar.less';


const NavigationBar = (props) => (
  <header className={styles.navBar}>
    {props.routes.map(route => (
      <NavLink exact={route.isExact} activeClassName='active' key={route.path} to={route.path}>{route.name}</NavLink>
    ))}
  </header>
);

export default NavigationBar;

NavigationBar.propTypes = {
  routes: PropTypes.array,
};
