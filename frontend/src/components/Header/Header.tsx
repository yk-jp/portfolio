// hash routing
import { HashLink } from 'react-router-hash-link';
// menu icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// event for menu
import MenuController from './controllers/MenuController';

const Header = () => {

  MenuController();

  return (
    <>
      <nav className="black">
        <div className="nav-wrapper">
          {/* menu */}
          <a href="#" data-target="mobile-header" className="sidenav-trigger"><FontAwesomeIcon icon={faBars} className="orange-text text-darken-1" />
          </a>
          <ul className="right hide-on-med-and-down">
            <li><HashLink to="#AboutMe" className="orange-text text-darken-1">About Me</HashLink></li>
            <li><HashLink to="#Projects" className="orange-text text-darken-1">Projects</HashLink></li>
            <li><HashLink to="#Contact" className="orange-text text-darken-1">Contact</HashLink></li>
          </ul>
        </div>
      </nav>

      {/* mobile */}
      <ul className="sidenav grey darken-4" id="mobile-header">
        <li><HashLink to="#AboutMe" className="orange-text text-darken-1">About Me</HashLink></li>
        <li><HashLink to="#Projects" className="orange-text text-darken-1">Projects</HashLink></li>
        <li><HashLink to="#Contact" className="orange-text text-darken-1">Contact</HashLink></li>
      </ul>
    </>
  )
}
export default Header;