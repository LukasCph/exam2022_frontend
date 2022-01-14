import React from "react";

// Routing
import { Link } from "react-router-dom";

// Styles
import { Wrapper, Content, Navs } from "./SideBar.styles";

function SideBar() {
  return (
    <Wrapper>
      <Content>
        <h2>EndPoints</h2>
        <Link to="/allAssistants">
          <Navs>View all washing assistants</Navs>
        </Link>
        <Link to="/makebooking">
          <Navs>Make a booking</Navs>
        </Link>
        <Link to="/third">
          <Navs>Third Endpoint</Navs>
        </Link>
        <Link to="/fourth">
          <Navs>Fourth Endpoint</Navs>
        </Link>
        {sessionStorage.getItem('roles') === '"admin"' && (
          <Link className="side_nav" to= "/admin">
            <Navs>Admin</Navs>
            </Link>
        )}
      </Content>
    </Wrapper>
  );
}

export default SideBar;
