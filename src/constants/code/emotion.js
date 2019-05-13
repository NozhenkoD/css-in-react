export const emotion = `
  /** @jsx jsx */
  import React from 'react';
  import { jsx, css } from '@emotion/core';
  import styled from '@emotion/styled';
  
  const wrapperStyle = css\`
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
  
  const Button = styled('button')\`
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
  
  const ExampleEmotion = () => (
    <div css={wrapperStyle}>
      <Title>Example Emotion</Title>
      <Button>Button</Button>
    </div>
  );
  
  export default ExampleEmotion
`;
