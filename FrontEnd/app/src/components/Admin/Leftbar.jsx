import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LayoutDashboard, CreditCard, BookCheck } from 'lucide-react';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #f8f9fa; /* Change background color */
  color: #212529; /* Change text color */
  border-right: 1px solid #dee2e6; /* Add border */
`;

const SidebarHeader = styled.div`
  height: 10%;
  background-color: #f8f9fa; /* Change background color */
  border-bottom: 1px solid #dee2e6; /* Add border */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const SidebarContent = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SidebarLink = styled(NavLink)`
  padding: 10px 20px;
  font-weight: bold;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid #dee2e6; /* Add border */
  display: flex;
  align-items: center;

  &:hover {
    background-color: #e2e6ea; /* Add hover background color */
  }
`;

const LogoutButton = styled.button`
  width: 75%;
  margin: auto;
  margin-bottom: 10px;
  padding: 10px 20px;
  background-color: #007bff; /* Change button color */
  color: #fff; /* Change text color */
  border: none;
  cursor: pointer;
  font-weight: bold;
  outline: none;

  &:hover {
    background-color: #0056b3; /* Change hover color */
  }
`;

const Leftbar = () => {
  const navigate = useNavigate();

  const UserLinks = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard
    },
    {
      title: 'Orders',
      path: '/orders',
      icon: BookCheck
    },
    {
      title: 'Payment',
      path: '/paymentHistory',
      icon: CreditCard
    }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        IGLOO <span style={{ color: '#007bff' }}>GIFTS</span>
      </SidebarHeader>
      <SidebarContent>
        {UserLinks.map((link, index) => (
          <SidebarLink key={index} to={link.path}>
            {React.createElement(link.icon, { size: 20 })}
            <span style={{ marginLeft: '10px' }}>{link.title}</span>
          </SidebarLink>
        ))}
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Leftbar;
