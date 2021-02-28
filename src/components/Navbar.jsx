import { AppBar, IconButton, Menu, MenuItem, MenuList, Toolbar } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles'; // TODO replace with custom theme
import React from 'react';
import logo from '../static/logo-font.png';
import { AuthContext } from '../utils/context';
import { FiMenu } from 'react-icons/fi';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import styled from 'styled-components';
import { colors } from '../style/colors.js';

const hamburgerMenuOptions = {
  anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
  getContentAnchorEl: null,
  elevation: 20,
  keepMounted: true,
  transformOrigin: { vertical: 'top', horizontal: 'right' },
};

const adminMenu = [
  {
    text: 'Overview',
    link: 'overview',
  },
  {
    text: 'Menu',
    link: 'menu',
  },
  {
    text: 'Piatti',
    link: 'dishes',
  },
];

const userMenu = [
  {
    text: 'Su di me',
    link: 'about',
  },
  {
    text: 'Menu',
    link: 'menu',
  },
  {
    text: 'Contatti',
    link: 'contacts',
  },
  {
    text: 'Materie prime',
    link: 'products',
  },
];

export default function Navbar() {
  const context = React.useContext(AuthContext);
  const [mobileAnchorElem, setMobileAnchorElem] = React.useState(null);
  const theme = useTheme();
  const largeDisplay = useMediaQuery(theme.breakpoints.up('md'));

  const loggedIn = React.useMemo(() => {
    return !!context?.state?.token;
  }, [context.state.token]);

  const handleMobileMenuOpen = (event) => {
    setMobileAnchorElem(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileAnchorElem(null);
  };

  const menuItems = (loggedIn ? adminMenu : userMenu).map((el) => (
    <MenuItem key={el.link}>
      <a href={`#${el.link}`}>{el.text}</a>
    </MenuItem>
  ));

  const hamburgerMenu = (
    <StyledHamburgerMenu
      anchorEl={mobileAnchorElem}
      id='menu'
      open={!!mobileAnchorElem}
      onClose={handleMobileMenuClose}
      {...hamburgerMenuOptions}>
      {menuItems}
    </StyledHamburgerMenu>
  );

  return (
    <AppBar position='static'>
      <StyledToolbar>
        <StyledLogo src={logo} alt='logo' />
        {!largeDisplay ? (
          <IconButton
            edge='start'
            color='primary'
            onClick={!!mobileAnchorElem ? handleMobileMenuClose : handleMobileMenuOpen}
            aria-label='menu'>
            <FiMenu />
          </IconButton>
        ) : (
          <StyledMenuList>{menuItems}</StyledMenuList>
        )}
      </StyledToolbar>
      {hamburgerMenu}
    </AppBar>
  );
}

const StyledToolbar = styled(Toolbar)`
  position: absolute;
  min-height: 60px;
  display: flex;
  width: inherit;
  width: -webkit-fill-available;
  flex-direction: row;
  vertical-align: middle;
  justify-content: space-between;
  z-index: 999;
  background: ${colors.white};
  // margin: 0 10px;
  // padding-left: 0;
`;

const StyledLogo = styled.img`
  height: 55px;
`;

const StyledMenuList = styled(MenuList)`
  display: flex;
  vertical-align: middle;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;

  a {
    text-decoration: none;
    color: ${colors.black};
  }
`;

const StyledHamburgerMenu = styled(Menu)`
  top: 50px;

  a {
    text-decoration: none;
    color: ${colors.black};
  }
`;

// li {
//   margin: auto;
//   padding-left: 1.5rem;
//   padding-right: 1.5rem;
//   display: inline;
