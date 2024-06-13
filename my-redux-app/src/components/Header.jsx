
import PropTypes from 'prop-types';

const Header = ({ title, subtitle }) => (
  <div className="header">
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Header;
