import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SidenavLogo } from '../../assets/svg/sidenav-logo.svg';
import { ReactComponent as HomeLogo } from '../../assets/svg/menu-icon/home.svg';
import { ReactComponent as ApprovalLogo } from '../../assets/svg/menu-icon/approval.svg';
import { ReactComponent as RequestLogo } from '../../assets/svg/menu-icon/requests.svg';
import './sidenav.styles.scss';

export default function Sidenav() {
  return (
    <div className="sidenav">
      <Link to="/" className="sidenav-logo" >
        <SidenavLogo />
      </Link>
      <Link to="/" ><HomeLogo className="logo" /> <span>Dashboard</span></Link>
      <Link to="/" ><RequestLogo className="logo" /> <span>Budget</span></Link>
      <Link to="/" ><ApprovalLogo className="logo" /> <span>Approvals</span></Link>
    </div>
  );
}
