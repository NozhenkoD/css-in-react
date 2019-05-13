export const styledComponents = `
  import React from 'react';
  import styled from 'styled-components';
  
  const Wrapper = styled.div\`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 50px;
    color: #444;
    border: 1px solid #1890ff;
  \`;
  
  const Title = styled.h1\`
    color: #0d1a26;
    font-weight: 400;
  \`;
  
  const Button = styled.button\`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #1890ff;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: .3s background;
    &:hover {
      background: #40a9ff;
    }
  \`;
  
  
  const ExampleStyledComponents = () => (
    <Wrapper>
      <Title>Example Styled-Components</Title>
      <Button>Button</Button>
    </Wrapper>
  );
  
  export default ExampleStyledComponents;
`;
