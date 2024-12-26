import styled from "styled-components";

export const TaskDetailsContainer = styled.div`
  width: 100%;
  min-width: 300px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${"" /* height: 100vh; */}
  width: 40%;
  border: 1px solid #ccc;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const TaskDetail = styled.p`
  font-size: 1.2em;
  color: #333;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;
export const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.5rem;
  }
`;
