import NavBar from './header/NavBar'
import Footer from './footer/Footer'

const Layout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer /> 
    </>
  );
};

export default Layout;