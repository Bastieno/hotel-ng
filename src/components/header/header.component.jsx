import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as MenuIcon } from '../../assets/svg/home.svg';
import { ReactComponent as NotificationIcon } from '../../assets/svg/notification-icon.svg';

import './header.styles.scss';

export default function Header() {
  return (
    <header className="header">
      <MenuIcon />
      <div className="user-info">
        <NotificationIcon />
        <div className="user">
          <h3>Bidemi Yusuf
            <FontAwesomeIcon
              icon='caret-down'
              size='sm'
              className="icon"
            />
          </h3>
          <p>Executive</p>
        </div>
      </div>
    </header>

  )
}
