import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Facebook, Instagram, Mail } from 'lucide-react';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 48px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
`;

const FooterSection = styled.div`
  h4 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #ccc;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
    transition: fill 0.3s ease;
    margin-right: 12px;
  }

  svg:hover {
    fill: #ccc;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h4>Company</h4>
          <ul>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h4>Contact Us</h4>
          <ul>
            <li><a href="mailto:hashitout.gifts@gmail.com">igloo.gifts@gmail.com</a></li>
            <li><a href="tel:9876543210">9876543210</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h4>Follow Us</h4>
          <SocialLinks>
            <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer"><Facebook /></a>
            <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fedit%2F%3F__coig_login%3D1" target="_blank" rel="noopener noreferrer"><Instagram /></a>
            <a href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Flogin&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Flogin&osid=1&passive=1209600&service=mail&ifkv=AYZoVhdctsQ6bd8rWj3edd492pzxTJEKzQfj_fR5Pl9j6qojazlJdsLY-9cEU2mjW1CCSaJKGupeZw&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank" rel="noopener noreferrer"><Mail /></a>
          </SocialLinks>
        </FooterSection>
        <FooterSection>
          <h4>IGLOO gifts</h4>
          <p>© 2024 All rights reserved.</p>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
