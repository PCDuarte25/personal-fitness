import avatar from '../../assets/avatar.svg';
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faUserClock } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ sideBarOpen, openSideBar }) => {
    return (
        <nav className='navbar'>
            <div className='nav_icon' onClick={() => openSideBar()}>
                <i><FontAwesomeIcon icon={faBars} className='fa-bars' aria-hidden='true'></FontAwesomeIcon></i>
            </div>

            <div className='navbar__left'>
                <a href="#">Routines</a>
                <a href="#">Users</a>
                <a href="#" className='active_link'>Admin</a>
            </div>

            <div className='navbar__right'>
                <a href="#">
                    <i><FontAwesomeIcon icon={faSearch} className='fa-search'></FontAwesomeIcon></i>
                </a>

                <a href="#">
                    <i><FontAwesomeIcon icon={faUserClock} className='fa-user-clock'></FontAwesomeIcon></i>
                </a>

                <a href="#">
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>
    )
}
export default Navbar;