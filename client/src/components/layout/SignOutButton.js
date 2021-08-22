import React from 'react';
import PropTypes from 'prop-types';

const SignOutButton = ({ logout }, context) =>
  context.auth.loggedIn
    ? (
      <button
        data-cy="sign-out-button"
        className="button"
        onClick={() => logout()}
      >
        Sign out
      </button>
    )
    : null;

SignOutButton.contextTypes = {
  auth: PropTypes.object
};

SignOutButton.propTypes = {
  logout: PropTypes.func.isRequired
};

export default SignOutButton;
