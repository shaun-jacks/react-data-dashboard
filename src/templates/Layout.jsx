import React, { useState } from "react";
import styled from "styled-components";
import TopNav from "./Navbar/Top/TopNav";
import Sidebar from "./Navbar/Side/Sidebar";
import { topnav, sidenav } from "./Navbar/styles";
const LayoutWrapper = styled.div`
  .content {
    margin-top: 7px;
    padding-top: ${topnav.height};
  }
  .sidebar-open-content {
    margin-top: 7px;
    padding-top: ${topnav.height};
  }
  @media only screen and (min-width: 900px) {
    .content {
      margin-top: 7px;
      padding-top: ${topnav.height};
      padding-left: ${sidenav.width};
    }
    .sidebar-open-content {
      margin-top: 7px;
      padding-top: ${topnav.height};
      padding-left: ${sidenav.width};
    }
  }
`;

const ContentWrapper = styled.div`
  background: var(--bgMore);
`;

const Content = styled.div`
  margin: 1em;
`;

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <LayoutWrapper>
      <TopNav toggleOpen={toggleOpen} isOpen={open} />
      <Sidebar isOpen={open} />
      <ContentWrapper className={open ? "sidebar-open-content" : "content"}>
        <Content>
          {children}
          <footer className="main-footer">The footer</footer>
        </Content>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
