import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import '../../index.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, enabled, hasIcon, backgroundColor, size, label, ...props }) => {
  const mode = enabled ? `storybook-button--${type}` : `storybook-button--${type}_disabled`;
  const icon = hasIcon ? `storybook-button--${type}_icon svg` : 'storybook-button--noIcon svg';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, icon].join(' ')}
      // style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5885 14.849H16.4115L21.6094 20.0573L20.0573 21.6094L14.849 16.4115V15.5885L14.5677 15.2969C13.3802 16.3177 11.8385 16.9323 10.1615 16.9323C6.42188 16.9323 3.39062 13.901 3.39062 10.1615C3.39062 6.42188 6.42188 3.39062 10.1615 3.39062C13.901 3.39062 16.9323 6.42188 16.9323 10.1615C16.9323 11.8385 16.3177 13.3802 15.2969 14.5677L15.5885 14.849ZM5.47396 10.1615C5.47396 12.7552 7.56771 14.849 10.1615 14.849C12.7552 14.849 14.849 12.7552 14.849 10.1615C14.849 7.56771 12.7552 5.47396 10.1615 5.47396C7.56771 5.47396 5.47396 7.56771 5.47396 10.1615Z" fill="#948F99" />
      </svg>
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this button enabled?
   */
  enabled: PropTypes.bool,
  /**
   * What type of button is it (primary, secondary, link) ?
   */
  type: PropTypes.string,
  /**
   * Has the button an icon?
   */
  hasIcon: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  // backgroundColor: null,
  enabled: true,
  hasIcon: false,
  type: 'primary',
  size: 'medium',
  onClick: undefined,
};
