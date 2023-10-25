import AuthNav from 'components/AuthNavigation/AuthNavigation';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { useAuth } from 'components/hooks/useAuth';
import { Header } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const renderNavigation = () => {
    return isLoggedIn ? <UserMenu /> : <AuthNav />;
  };

  return (
    <Header>
      <Navigation />
      {renderNavigation()}
    </Header>
  );
};

export default AppBar;
