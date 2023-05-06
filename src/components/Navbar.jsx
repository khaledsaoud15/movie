import styled from "styled-components";
import logo from "../images/pixar.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Logo src={logo} />
      <Links>
        <Link to="/">Home</Link>
        <Link to="/favorites">Movies</Link>
        <Link href="#">Features</Link>
        <Link href="#">Blog</Link>
      </Links>
      <Buttons>
        <Button>Sign Up</Button>
        <Button>Sign in</Button>
      </Buttons>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 9999;
`;
const Logo = styled.img`
  width: 150px;
  height: 100%;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #ffc107;
    transition: all 0.2s linear;
  }
  :hover::after {
    width: 100%;
    transition: all 0.2s linear;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Button = styled.button`
  padding: 5px 25px;
  border: none;
  border-radius: 4px;
  position: relative;
  ::after {
    content: "";
    background-color: #ffc10797;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    transition: all 0.2s linear;
    border-radius: 4px;
    color: #000;
  }

  :hover::after {
    width: 100%;
    color: #000;
    transition: all 0.2s linear;
  }
`;
