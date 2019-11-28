import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";
import { topnav } from "../styles";
import { topbarAuthRoutes, topbarUnAuthRoutes } from "../../../Routes";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import { NavItem, NavList, TopFixedWrapper, Nav } from "../styles";

const TopNavHorizontalItems = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopNav = ({ toggleOpen, isOpen }) => {
  console.log(topbarAuthRoutes);
  const isAuthenticated = true;
  return (
    <TopFixedWrapper>
      <Nav>
        <NavList>
          <div></div>
          <TopNavHorizontalItems>
            {isAuthenticated
              ? topbarAuthRoutes.map(route => {
                  return (
                    <NavItem>
                      <NavLink activeClassName="active" exact to={route.path}>
                        <IconContext.Provider value={{ size: "1.5em" }}>
                          <route.Icon />
                        </IconContext.Provider>
                      </NavLink>
                    </NavItem>
                  );
                })
              : topbarUnAuthRoutes.map(route => {
                  return (
                    <NavItem>
                      <NavLink activeClassName="active" exact to={route.path}>
                        <IconContext.Provider value={{ size: "1.5em" }}>
                          <route.Icon />
                        </IconContext.Provider>
                      </NavLink>
                    </NavItem>
                  );
                })}
          </TopNavHorizontalItems>
          <Hamburger isOpen={isOpen} toggleOpen={toggleOpen} />
        </NavList>
      </Nav>
    </TopFixedWrapper>
  );
};

export default TopNav;
