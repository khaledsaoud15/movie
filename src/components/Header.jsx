import styled from "styled-components";
import React from "react";
import img from "../images/header.jpeg";
import logo from "../images/header-logo.png";

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="" />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 100vh;
  position: relative;
  width: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  img {
    width: 30%;
    position: absolute;
    bottom: 30%;
    left: 50%;
    translate: -50%;
  }
`;
