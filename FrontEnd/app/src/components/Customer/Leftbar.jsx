import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faShoppingCart, faCog, faUser } from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #333;
  color: #fff;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
`;

const SidebarHeader = styled.div`
  margin-bottom: 20px;
`;

const SidebarContent = styled.div``;

const SidebarLink = styled(NavLink)`
  display: block;
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <h3>IGLOO</h3>
      </SidebarHeader>
      <SidebarContent>
        <ul className="list-unstyled components mb-4">
          <li>
            <SidebarLink exact to="/">
              <FontAwesomeIcon icon={faHome} />
              <span className="ml-2">Home</span>
            </SidebarLink>
          </li>
        </ul>
        <div className="sidebar-segment">
          <h5>Dashboard</h5>
          <ul className="list-unstyled components mb-4">
            <li>
              <SidebarLink to="/dashboard">
                <FontAwesomeIcon icon={faChartBar} />
                <span className="ml-2">Dashboard</span>
              </SidebarLink>
            </li>
            <li>
              <SidebarLink to="/orders">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="ml-2">Orders</span>
              </SidebarLink>
            </li>
          </ul>
        </div>
        <div className="sidebar-segment">
          <h5>Profile</h5>
          <ul className="list-unstyled components mb-4">
            <li>
              <SidebarLink to="/profile">
                <FontAwesomeIcon icon={faUser} />
                <span className="ml-2">Profile</span>
              </SidebarLink>
            </li>
          </ul>
        </div>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
