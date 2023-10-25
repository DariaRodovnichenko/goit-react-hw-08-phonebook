import { FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';

export const ListOfContacts = styled.ul`
  width: 622px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const WatchWord = styled.p`
  color: white;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ContactInfo = styled.span`
  font-size: 20px;
  flex-grow: 1;
  margin-right: 12px;
`;

export const DeleteBtn = styled.button`
  display: flex;
  gap: 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 6px 12px 6px 16px;
  cursor: pointer;
  box-shadow: 5px 5px 5px rgba(0.5, 0, 0, 0.3);
  transition: background-color 0.3s;

  &:hover {
    background-color: white;
    color: red;
    transition: background-color 0.3s;
    transform: scale(0.9);
  }
`;
export const TrashIcon = styled(FaTrashAlt)`
  width: 20px;
  height: 20px;
`;
