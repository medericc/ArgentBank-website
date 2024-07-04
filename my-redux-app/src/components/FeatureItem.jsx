import PropTypes from 'prop-types';

const Feature = ({ img, alt, title, content }) => {
  return (
    <div className='feature-item'>
      <img src={img} alt={alt} className='feature-icon' />
      <h3 className='feature-item-title'>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

Feature.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Feature;