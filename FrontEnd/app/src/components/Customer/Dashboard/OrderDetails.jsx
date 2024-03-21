import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Card = styled.div`
  width: 24rem;
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Info = styled.p`
  margin-bottom: 0.5rem;
`;

const Button = styled.button`
  background-color: ${props => props.bgColor};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

const OrderDetails = () => {
  const order = {
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    selectedGift: 'Custom Mug',
    selectedTheme: 'Birthday Theme',
    totalPrice: 250,
  };

  return (
    <Container>
      <Card>
        <Title>Order Details</Title>
        <div>
          <Info><strong>Name:</strong> {order.name}</Info>
          <Info><strong>Phone Number:</strong> {order.phoneNumber}</Info>
          <Info><strong>Selected Gift:</strong> {order.selectedGift}</Info>
          <Info><strong>Selected Theme:</strong> {order.selectedTheme}</Info>
          <Info><strong>Total Price:</strong> ${order.totalPrice}</Info>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <Button bgColor="#007bff" hoverColor="#0056b3">
            <Link to="/payment" style={{ textDecoration: 'none', color: 'white' }}>Pay</Link>
          </Button>
          <Link to="/dashboard">
            <Button bgColor="#dc3545" hoverColor="#c82333" style={{ marginLeft: '1rem' }}>
              Cancel Order
            </Button>
          </Link>
        </div>
      </Card>
    </Container>
  );
};

export default OrderDetails
