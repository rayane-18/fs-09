import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LandingPageContainer = styled.div`
  text-align: center;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;

  h1 {
    margin-bottom: 20px;
  }

  button {
    padding: 10px;
    cursor: pointer;
    margin: 5px;
  }
`;

function LandingPage() {
  return (
    <LandingPageContainer>
      <h1>Choose a Quiz</h1>
      <Link to="/quiz">
        <button>HTML</button>
      </Link>
      {/* Add buttons for other quizzes as needed */}
    </LandingPageContainer>
  );
}

export default LandingPage;
