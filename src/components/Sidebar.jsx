import { NavLink } from 'react-router';
import './Sidebar.css';

export function Sidebar() {

  const closeSidebar = () => {
    const sidebarAbove = document.querySelector('.above');
    // cerrar sidebar
    if (sidebarAbove.className === 'above') {
      sidebarAbove.classList.remove('above')
      sidebarAbove.classList.add('sidebar-container')
      console.log('clicked');
    }
  }
  return (
    <nav className='sidebar'>
      <div className='nav-header'>
        <div className='nav-header-inner'>

          <img
            src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
            alt='Logo'
          />
          <p>Gym Admin</p>
        </div>

        <i className='bx bx-x sidebar-close-button' onClick={closeSidebar}></i>
      </div>
      <div className='nav-section-wraper'>

        <div className='nav-section'>

          <div className='nav-section-links'>
            <div className='nav-section-title'>
              <p>Main</p>
              <span className='line'></span>
            </div>
            <div className='nav-links'>
              <NavLink
                to=''
                end
                className={({ isActive }) =>
                  isActive ? 'link active-link' : 'inactive-link'
                }
              >
                <i className='bx bxs-home-alt-2'></i> HOME
              </NavLink>{' '}
              <NavLink
                to='blog'
                className={({ isActive }) =>
                  isActive ? 'link active-link' : 'inactive-link'
                }
              >
                <i className='bx bxs-notepad'></i>BLOG
              </NavLink>
              <NavLink
                to='contact'
                className={({ isActive }) =>
                  isActive ? 'link active-link' : 'inactive-link'
                }
              >
                <i className='bx bxs-contact'></i> CONTACT
              </NavLink>
              <NavLink
                to='users'
                className={({ isActive }) =>
                  isActive ? 'link active-link' : 'inactive-link'
                }
              >
                <i className='bx bxs-user'></i> USERS
              </NavLink>
              <NavLink
                to='tasks'
                className={({ isActive }) =>
                  isActive ? 'link active-link' : 'inactive-link'
                }
              >
                <i className='bx bxs-spreadsheet'></i> TASKS
              </NavLink>
            </div>
          </div>

          {/* <div className='nav-section-links'>
            <div className='nav-section-title'>
              <p>Main</p>
              <span className='line'></span>
            </div>
            <div className='nav-links'>
              <NavLink
                to=''
                end
                className={({ isActive }) =>
                  isActive ? 'link active-link' : 'inactive-link'
                }
              >
                <i className='bx bxs-home-alt-2'></i> HOME
              </NavLink>{' '}
              <NavLink
                to='blog'
                className={({ isActive }) =>
                  isActive ? 'link active-link' : 'inactive-link'
                }
              >
                <i className='bx bxs-notepad'></i>BLOG
              </NavLink>
              <NavLink
                to='contact'
                className={({ isActive }) =>
                  isActive ? 'link active-link' : 'inactive-link'
                }
              >
                <i className='bx bxs-contact'></i> CONTACT
              </NavLink>
              <NavLink
                to='users'
                className={({ isActive }) =>
                  isActive ? 'link active-link' : 'inactive-link'
                }
              >
                <i className='bx bxs-user'></i> USERS
              </NavLink>
              <NavLink
                to='tasks'
                className={({ isActive }) =>
                  isActive ? 'link active-link' : 'inactive-link'
                }
              >
                <i className='bx bxs-spreadsheet'></i> TASKS
              </NavLink>
            </div>
          </div> */}

          {/* <div className='nav-section-links'>
            <div className='nav-section-title'>
              <p>Main</p>
              <span className='line'></span>
            </div>
            <div className='nav-links'>
              <NavLink
                to=''
                end
                className={({ isActive }) =>
                  isActive ? 'link active-link' : 'inactive-link'
                }
              >
                <i className='bx bxs-home-alt-2'></i> HOME
              </NavLink>{' '}
              <NavLink
                to='blog'
                className={({ isActive }) =>
                  isActive ? 'link active-link' : 'inactive-link'
                }
              >
                <i className='bx bxs-notepad'></i>BLOG
              </NavLink>
              <NavLink
                to='contact'
                className={({ isActive }) =>
                  isActive ? 'link active-link' : 'inactive-link'
                }
              >
                <i className='bx bxs-contact'></i> CONTACT
              </NavLink>
              <NavLink
                to='users'
                className={({ isActive }) =>
                  isActive ? 'link active-link' : 'inactive-link'
                }
              >
                <i className='bx bxs-user'></i> USERS
              </NavLink>
              <NavLink
                to='tasks'
                className={({ isActive }) =>
                  isActive ? 'link active-link' : 'inactive-link'
                }
              >
                <i className='bx bxs-spreadsheet'></i> TASKS
              </NavLink>
            </div>
          </div> */}

        </div>

        <div className='sidebar-footer'>
          <div className='nav-section-title'>
            <p>Configuarations</p>
            <span className='line'></span>
          </div>
          <NavLink
            to='settings'
            end
            className={({ isActive }) =>
              isActive ? 'link active-link' : 'inactive-link'
            }
          >
            <i className='bx bxs-cog'></i> Settings
          </NavLink>
          <NavLink
            to='/'
            end
            className={({ isActive }) =>
              isActive ? 'link active-link' : 'inactive-link'
            }
          >
            <i className='bx bxs-log-out'></i> Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
