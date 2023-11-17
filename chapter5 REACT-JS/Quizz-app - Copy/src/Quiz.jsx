import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import quizQuestions from "./Questions";
import FinalScore from "./FinalScore";

const quizzes = ["HTML", "CSS", "JavaScript", "Accessibility"];

function Quiz() {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  const handleQuizSelection = (selectedQuiz) => {
    setCurrentQuiz(selectedQuiz);
    setScore(0);
    setCurrentQuestionIndex(0);
    setAllQuestionsAnswered(false);
  };

  const handleAnswerClick = (selectedAnswer) => {
    const currentQuestion = quizQuestions[currentQuiz][currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < quizQuestions[currentQuiz].length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setAllQuestionsAnswered(true);
    }
  };

  const renderQuizContent = () => {
    if (allQuestionsAnswered) {
      return (
        <FinalScoreContainer>
          <h1>Final Score</h1>
          <Score>
            <p>
              {score} out of {quizQuestions[currentQuiz].length}
            </p>
          </Score>
          <FinalScore totalScore={score} />
        </FinalScoreContainer>
      );
    }

    const currentQuestion = quizQuestions[currentQuiz][currentQuestionIndex];

    return (
      <QuizContainer>
        <h1>{currentQuiz} Quiz</h1>
        <Question>
          <p>{currentQuestion.question}</p>
        </Question>
        <Options>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              disabled={allQuestionsAnswered}
            >
              {option}
            </button>
          ))}
        </Options>
        <Score>
          <p>Score: {score}</p>
        </Score>
      </QuizContainer>
    );
  };

  return (
    <AppContainer>
      <LandingPage>
        <h1>Choose a Quiz</h1>
        <QuizOptions>
          {quizzes.map((quiz) => (
            <button key={quiz} onClick={() => handleQuizSelection(quiz)}>
              {quiz}
            </button>
          ))}
        </QuizOptions>
      </LandingPage>
      {currentQuiz && <>{renderQuizContent()}</>}
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LandingPage = styled.div`
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

const QuizOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const QuizContainer = styled.div`
  text-align: center;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;

  h1 {
    margin-bottom: 20px;
  }
`;

const Question = styled.div`
  margin-bottom: 20px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    padding: 10px;
    cursor: pointer;
  }
`;

const Score = styled.div`
  margin-top: 20px;
`;

const FinalScoreContainer = styled.div`
  text-align: center;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;

  h1 {
    margin-bottom: 20px;
  }
`;

export default Quiz;
