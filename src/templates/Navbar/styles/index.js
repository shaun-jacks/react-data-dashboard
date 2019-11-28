import styled from "styled-components";

export const topnav = {
  height: "40px"
};

export const sidenav = {
  width: "200px"
};

export const TopFixedWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: var(--navColor);
  color: white;
  max-height: ${topnav.height};
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Nav = styled.nav`
  padding: 5px 0;
`;

export const NavList = styled.ul`
  margin: 0;
  padding-left: 25px;
  padding-right: 65px;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-content: center;
  color: var(--textColor);
  h1 {
    margin: 0;
  }
`;

export const NavItem = styled.li`
  list-style-type: none;
  transition: all 0.3s ease-out;
  margin-left: 2em;
  padding: 0 1em;
  a {
    text-decoration: none;
    color: var(--textColor);
    letter-spacing: 2px;
    &:hover {
      color: var(--accentColor);
      cursor: pointer;
    }
  }
  .active {
    color: var(--accentColor);
  }
  &:hover {
    color: var(--accentColor);
    cursor: pointer;
    background: var(--bgLess);
  }
`;

export const SideNavItems = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0em;
  .active {
    color: var(--bgLess);
    border-radius: 10px;
    border: 1px solid var(--accentColor);
    background: var(--accentColor);
    &:hover {
      color: var(--bgLess);
    }
  }
`;

export const SideNavItem = styled.li`
  transition: all 0.3s ease-out;
  border-radius: 10px;
  a {
    display: flex;
    text-decoration: none;
    color: var(--textColor);
    letter-spacing: 2px;
    &:hover {
      color: var(--accentColor);
      cursor: pointer;
    }
    padding: 1em;
  }
  margin: 1em;
  list-style-type: none;
  &:hover {
    color: var(--accentColor);
    cursor: pointer;
    background: var(--bgLess);
  }
`;
