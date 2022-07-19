import NavBar from './Layout/header/Header'
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