import { FileRoute, Link } from "@tanstack/react-router";
import styled from "styled-components";
import FormRow from "../components/formRow";

type Props = {}

export const Route = new FileRoute('/register').createRoute({
  component: Register,
});


function Register (props: Props) {
  return (
    <Wrapper>
      <form className="form">
        <h4>Register</h4>
        <FormRow name="firstname" defaultValue="Sarim" type="text" labelText="First Name" />
        <FormRow name="lastname" defaultValue="Ahmed" type="text" labelText="Last Name" />
        <FormRow name="email" defaultValue="sarim@gmail.com" type="email" labelText="Email" />
        <FormRow name="password" defaultValue="*****" type="password" labelText="Password" />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  align-items: center;

  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`;

