import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FinalScoreContainer = styled.div`
  text-align: center;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;

  h1 {
    margin-bottom: 20px;
  }
`;

function FinalScore({ totalScore }) {
  return (
    <FinalScoreContainer>
      <h1>Final Score</h1>
      <p>Total Score: {totalScore}</p>
      {/* Additional details for each quiz can be added here */}
    </FinalScoreContainer>
  );
}

export default FinalScore;
