import './Sidebar.css';
import logo from '../../assets/logo-academia.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faHome, faPeopleGroup, faXmark, faPowerOff } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ sideBarOpen, closeSideBar }) => {
  return (
    <div className={sideBarOpen ? "sidebar-responsive" : ""} id='sidebar'>
      <div className='sidebar__title'>
        <div className='sidebar__img'>
          <img src={logo} alt='logo' />
          <h1>Powercamp Fitness</h1>
        </div>

        <i><FontAwesomeIcon
          onClick={() => closeSideBar()}
          icon={faXmark}
          id='sidebarIcon'
          className='fa-xmark'
          aria-hidden='true'
        ></FontAwesomeIcon></i>
      </div>
      <div className='sidebar__menu'>
        <div className='sidebar__link active_menu_link'>
          <i><FontAwesomeIcon icon={faHome} className='fa-home'></FontAwesomeIcon></i>
          <a href='#'>Home</a>
        </div>
        <h2>ADMIN</h2>
        <div className='sidebar__link'>
          <i><FontAwesomeIcon icon={faPeopleGroup} className='fa-people-group'></FontAwesomeIcon></i>
          <a href='#'>Your students</a>
        </div>
        <div className='sidebar__link'>
          <i><FontAwesomeIcon icon={faDumbbell} className='fa-dumbbell'></FontAwesomeIcon></i>
          <a href='#'>Register student</a>
        </div>
        <div className='sidebar__logout'>
          <i><FontAwesomeIcon icon={faPowerOff} className='fa-power-off'></FontAwesomeIcon></i>
          <a href='#'>Log out</a>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;