import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 1rem;
`;
export const Title = styled.h2`
  padding-bottom: 1rem;
`;

const Task = styled.div`
  width: 500px;
  background: ${({ theme }) => theme.colors.sideBarNav};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  padding: 1rem;
`;

const SectionTitle = styled.h3`
  padding: 1rem 0;
`;
const TasksWrapper = styled.div``;
const TaskItem = styled.li`
  width: 350px;
  //border: 1px solid ${({ theme }) => theme.colors.black};
  //background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 0.2rem;
  margin: 0.6rem 0.2rem;
  transition: 0.3s;
  :hover {
    background-color: ${({ theme }) => theme.colors.checkedNavSideBar};
  }
`;

const Tasks = () => {
  return (
    <Wrapper>
      <Title>Personal</Title>
      <Task>
        <SectionTitle>Today</SectionTitle>
        <TasksWrapper>
          <TaskItem>Pay the bills [600zl]</TaskItem>
          <TaskItem>Do shopping [List in notes in phone]</TaskItem>
          <TaskItem>Make dinner [Remember to buy meat]</TaskItem>
        </TasksWrapper>
        <SectionTitle>Tommorow</SectionTitle>
        <TasksWrapper>
          <TaskItem>Go to vet with Azor</TaskItem>
          <TaskItem>Grandmas b-day</TaskItem>
        </TasksWrapper>
        <SectionTitle>Upcoming</SectionTitle>
      </Task>
    </Wrapper>
  );
};

export default Tasks;
