import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dataContext } from "../../functions/Context";

const Wrapper = styled.div`
  max-width: 28rem;
  height: 30rem;
  margin: 2rem auto;
  
  width: 100vw;
  border: solid 1px rgb(0,0,0);
  border-radius: 4px;
  background-color: rgba(255,255,255);
  box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.2), 9px 9px 15px -2px rgba(0,0,0,0.1);
`;
const Header = styled.h2`
  margin: 2rem auto 3rem;
  text-align: center;
  letter-spacing: 4px
`;

function Login() {
  const { state, dispatch } = useContext(dataContext);
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  function submitData(e) {
    e.preventDefault();
    for (let user of state.users) {
      if (
        user.email === userInfo.email &&
        user.password === userInfo.password
      ) {
        dispatch({ type: "IS_LOGIN", payload: userInfo });
        navigate("/home");
      }
    }
  }

  return (
    <Wrapper>
      <Header>LOGIN</Header>
      <form onSubmit={submitData} onChange={handleChange}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input type="email" name="email" className="form-control" />
          <div className="form-text"></div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" name="password" className="form-control" />
        </div>
        <button type="submit" className="login-btn btn btn-outline-dark">
          Log in
        </button>
      </form>
      <Link className="login-link" to="/Registration">Not registered yet? Click here.</Link>
    </Wrapper>
  );
}

export default Login;
