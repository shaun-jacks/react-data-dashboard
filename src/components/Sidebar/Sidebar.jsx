import React from "react";
import styled from "styled-components";

const SidebarWrapper = styled.div`
  width: 260px;
  height: 100vh;
  position: fixed;
  overflow: auto;
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <NavItems>
        <li>Tables</li>
        <li>Profile</li>
      </NavItems>
    </SidebarWrapper>
  );
};

export default Sidebar;
