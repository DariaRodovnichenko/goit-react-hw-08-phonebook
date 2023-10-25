import { AuthNavContainer, AuthNavLink } from './AuthNavigation.styled';

export default function AuthNav() {
  return (
    <AuthNavContainer>
      <AuthNavLink to="/registration">Registration</AuthNavLink>
      <AuthNavLink to="/login">Login</AuthNavLink>
    </AuthNavContainer>
  );
}
