export const inline = `
  import React from 'react';

  const ExampleInline = () => {
    const wrapper = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '50px',
      color: '#444',
      border: '1px solid #1890ff',
    };
    const button = {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      background: '#1890ff',
      color: '#fff',
      fontSize: '14px',
      cursor: 'pointer',
      transition: '.3s background',
      '&:hover': {
        background: '#40a9ff'
      }
    };
    
    return (
      <div style={wrapper}>
        <h1 style={{color: '#0d1a26', fontWeight: 400}}>Example Inline.</h1>
        <button style={button}>Button</button>
      </div>
    );
  };

  export default ExampleInline;
`;
