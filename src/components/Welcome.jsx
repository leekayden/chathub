import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import Logout from "./Logout";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);

  // useEffect(() => {
  //   async function setUserName() {
  //     await JSON.parse(
  //       localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
  //     ).username;
  //   }
  //   fetchData();
  // }, []); // Or [] if effect doesn't need props or state
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}</span>!
      </h1>
      <h3>Select a user to start messaging!</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
