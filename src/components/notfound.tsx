
import { Link } from "@tanstack/react-router";
import styled from "styled-components";
import logo from "../assets/images/not-found.svg";

const NotFound = () => {
  return (
    <Wrapper>
      <div>
        <img src={logo} alt="not found" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't find the page you are looking for!</p>
        <Link to="/">Go Back</Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text-secondary-color);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default NotFound