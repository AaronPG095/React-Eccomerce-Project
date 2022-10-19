import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dataContext } from "../../functions/Context";
import "../../styles/main.scss";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  min-height: 80vh;
`;

function UserInfo() {
  const { userState, dispatchUserState } = useContext(dataContext);
  const navigate = useNavigate();

  const logOut = () => {
    dispatchUserState({ type: "IS_LOGOUT" });
    navigate("/");
  };
  return (
    <div>
      <Wrapper>
        <img
          className="img-styles-user-info"
          src="https://s1.reutersmedia.net/resources/r/?m=02&d=20110106&t=2&i=297909111&w=780&fh=&fw=&ll=&pl=&sq=&r=2011-01-06T234808Z_01_BTRE7051U4200_RTROPTP_0_USA"
          alt=""
        />
        <p class="email-text-user-info">email: {userState.users[0].email}</p>
        <div className="button-container-user-info">
          <button
            className="btn btn-dark button-styling-user-info"
            onClick={logOut}
          >
            log out
          </button>
          <button
            className="btn btn-primary button-styling-user-info"
            onClick={() => navigate("/")}
          >
            Back to home
          </button>
          <button class="btn btn-primary button-styling-user-info">
            Change password
          </button>
        </div>
      </Wrapper>
    </div>
  );
}

export default UserInfo;
