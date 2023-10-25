import { FaSignOutAlt } from 'react-icons/fa';
import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: transparent;
  margin-left: 40px;
`;

export const UserName = styled.span`
  font-size: 30px;
`;

export const LogOutBtn = styled.button`
  display: flex;
  background-color: white;
  color: red;
  border: none;
  border-radius: 5px;
  padding: 6px 12px 6px 16px;
  cursor: pointer;
  box-shadow: 5px 5px 5px rgba(0.5, 0, 0, 0.3);
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(227, 37, 26, 255);
    color: white;
    transition: background-color 0.3s;
    transform: scale(0.9);
  }
`;

export const LogoutIcon = styled(FaSignOutAlt)`
  width: 20px;
  height: 20px;
`;
