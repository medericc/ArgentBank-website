
import PropTypes from 'prop-types';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => (
  <div>
    <MainNav />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
