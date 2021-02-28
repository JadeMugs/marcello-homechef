import { AppBar, IconButton, Menu, MenuItem, MenuList, Toolbar } from '@material-ui/core';
import React from 'react';
import logo from '../static/logo-font.png';
import { AuthContext } from '../utils/context';
import { FiMenu } from 'react-icons/fi';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import styled from 'styled-components';
import { theme as customTheme, colors } from '../style/colors.js';

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
  const largeDisplay = useMediaQuery(customTheme.breakpoints.up('md'));

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
      <StyledLink href={`#${el.link}`}>{el.text}</StyledLink>
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
    <StyledAppBar>
      <StyledToolbar disableGutters>
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
    </StyledAppBar>
  );
}
const StyledAppBar = styled(AppBar)`
  min-height: 60px;
  background-color: ${colors.white} !important;
`;

const StyledToolbar = styled(Toolbar)`
  position: absolute;
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
`;

// TODO fix position on hamburger click
const StyledHamburgerMenu = styled(Menu)``;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${colors.black};
`;
