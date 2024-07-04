import PropTypes from 'prop-types';

const Button = ({ txt, className, func, children }) => {
  return (
    <button className={className} onClick={func}>
      {txt} {children}
    </button>
  );
};

Button.propTypes = {
  txt: PropTypes.string.isRequired,
  className: PropTypes.string,
  func: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Button;
