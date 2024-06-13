
import PropTypes from 'prop-types';

const FeatureItem = ({ imgSrc, imgAlt, title, children }) => (
  <div className="feature-item">
    <img src={imgSrc} alt={imgAlt} className="feature-icon" />
    <h3 className="feature-item-title">{title}</h3>
    <p>{children}</p>
  </div>
);

FeatureItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FeatureItem;
