import { Outlet, Link } from 'react-router-dom';

import Header from './Component/Header';
import Contact from './Component/contact';
import App from './App';
import Footer from './Component/Footer';



function Layout() {
  return (
   <>
    <Header />
     <nav>
        <Link to="/"></Link>
        <Link to="/contact"></Link>
        <Link to="/About"></Link>
      </nav>
      <main>
        <Outlet />
      </main>
   </>
  )
}

export default Layout;