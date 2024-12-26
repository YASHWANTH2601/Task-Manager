import styled from "styled-components";

export const TaskListContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    height: auto;
    padding: 10px;
  }
`;

export const TaskListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${"" /* height: 100vh; */}

  @media (max-width: 600px) {
    flex-direction: column;
    ${"" /* align-items: center; */}
    text-align: center;
    height: auto;
  }
`;

export const TaskItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 10px;

  @media (max-width: 600px) {
    margin-bottom: 10px;
    padding: 5px;
    flex: 30%;
    min-width: 200px;
    max-width: 100%;
    ${"" /* flex-shrink: 10%; */}
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 600px) {
    color: black;
    padding: 10px;
    margin-bottom: 10px;
    flex: 30%;
    flex-basis: 30%;
    flex-shrink: 10%;
    text-align: center;
    overflow: hidden;
    margin-left: 10px;
    margin-bottom: 10px;
    max-width: 300px;
    max-height: 200px;
  }
`;

export const TaskItemTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #333;
  text-decrations: none;
  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;

export const TaskItemText = styled.p`
  margin: 5px 0;
  color: #333;
  text-decrations: none;

  @media (max-width: 600px) {
    font-size: 0.9em;
  }
`;

export const TaskButton = styled.button`
  margin-right: 10px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  background-color: transparent;
  ${"" /* background-color: rgb(28, 102, 181); */}
  cursor: pointer;

  @media (max-width: 600px) {
    margin-right: 5px;
    font-size: 0.9em;
  }
`;
export const DeteteButton = styled.button`
  margin-right: 10px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  ${"" /* background-color: orange; */}
  background-color: transparent;
  cursor: pointer;

  @media (max-width: 600px) {
    margin-right: 5px;
    font-size: 0.9em;
  }
`;

export const TaskAddButton = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  background-color: rgb(28, 102, 181);
  color: white;
  cursor: pointer;
  font-size: 1em;
  margin-bottom: 10px;
  margin-left: 10px;
  margin: 10px auto;
  @media (max-width: 600px) {
    font-size: 0.9em;
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.p`
  display: flex;
  justify-content: space-around;
`;

export const TaskItemTexts = styled.p`
  height: 20px;
  color: black;
  overflow: hidden;
`;
