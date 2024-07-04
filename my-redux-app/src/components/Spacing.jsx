
import PropTypes from 'prop-types';

const Spacing = ({ height }) => {
  return <div style={{ height }} />;
};

Spacing.propTypes = {
  height: PropTypes.number.isRequired,
};

export default Spacing;
