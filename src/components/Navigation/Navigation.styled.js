import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.nav`
  background: transparent;
  color: white;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 30px;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  &:hover {
    background-color: white;
    color: rgb(195,29,11);
    transition: background-color 0.3s;
  }
`;
