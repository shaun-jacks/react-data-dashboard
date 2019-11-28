import React from "react";
import styled from "styled-components";
import { sidenav, topnav, SideNavItem, SideNavItems } from "../styles";
import { sidebarAuthRoutes, sidebarUnAuthRoutes } from "../../../Routes";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";

const SidebarWrapper = styled.nav`
  height: 100%;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: auto;
  width: ${sidenav.width};
  z-index: 1000;
  background: var(--navColor);
  color: white;
  transform: translateX(-100%);
  transition: transform 0.2s ease-out;
  &.open {
    transform: translateX(0);
  }
  &.close {
    transform: translateX(-100%);
  }
  @media only screen and (min-width: 901px) {
    transform: translateX(0);
    // This ensures it is always open
    &.close {
      transform: translateX(0);
    }
  }
`;

const SidebarPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  align-items: center;
  h1 {
    margin: 0;
  }
`;

const Sidebar = ({ isOpen }) => {
  const isAuthenticated = true;
  return (
    <SidebarWrapper className={isOpen ? "open" : "close"}>
      <SidebarPanel>
        <h1 style={{ color: "var(--accentColor)" }}>React Dashboard</h1>
        <SideNavItems>
          {isAuthenticated
            ? sidebarAuthRoutes.map(route => {
                return (
                  <SideNavItem>
                    <NavLink activeClassName="active" exact to={route.path}>
                      <IconContext.Provider value={{ size: "1.5em" }}>
                        <route.Icon />
                      </IconContext.Provider>
                      <div style={{ marginLeft: "10px" }}>{route.name}</div>
                    </NavLink>
                  </SideNavItem>
                );
              })
            : sidebarUnAuthRoutes.map(route => {
                return (
                  <SideNavItem>
                    <NavLink activeClassName="active" exact to={route.path}>
                      <IconContext.Provider value={{ size: "1.5em" }}>
                        <route.Icon />
                      </IconContext.Provider>
                      <div style={{ marginLeft: "10px" }}>{route.name}</div>
                    </NavLink>
                  </SideNavItem>
                );
              })}
        </SideNavItems>
      </SidebarPanel>
    </SidebarWrapper>
  );
};

export default Sidebar;
