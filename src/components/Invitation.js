import React from 'react';
import PropTypes from 'prop-types';

const Invitation = ({ children }) => (
  <div>
    <h1>You've been invited!</h1>
    {children}
  </div>
);

Invitation.propTypes = {};

export default Invitation;
