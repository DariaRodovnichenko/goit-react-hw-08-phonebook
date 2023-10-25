import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authentication/authOperations';
import { useAuth } from 'components/hooks/useAuth';
import {
  LogOutBtn,
  LogoutIcon,
  UserMenuContainer,
  UserName,
} from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <UserName>Welcome {user.name}</UserName>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        <LogoutIcon />
      </LogOutBtn>
    </UserMenuContainer>
  );
}
