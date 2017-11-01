import React from 'react';
import { FormattedMessage } from 'react-intl';
import './app.scss';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar className="teststyle">
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
          <HeaderLink to="/aboutus">
            <FormattedMessage {...messages.aboutus} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
