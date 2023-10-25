import { useAuth } from 'components/hooks/useAuth';
import { Link, NavContainer } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavContainer>
      <Link to="/" end>
        Home
      </Link>
      {isLoggedIn && <Link to="/contacts">Phonebook</Link>}
    </NavContainer>
  );
};

export default Navigation;
