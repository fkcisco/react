import NavBar from './Layout/header/NavBar'
import Footer from './Layout/footer/Footer'

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