import { HeaderLinks, NavLinks } from './Header.styled';

const Header = () => {
  return (
    <HeaderLinks>
      <nav>
        <NavLinks to="/">Home</NavLinks>
        <NavLinks to="/movies">Movies</NavLinks>
      </nav>
    </HeaderLinks>
  );
};

export default Header;
