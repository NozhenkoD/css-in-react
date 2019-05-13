export const aphrodite = `
  import React from 'react';
  import { StyleSheet, css } from 'aphrodite';
  
  const styles = StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '50px',
      color: '#444',
      border: '1px solid #1890ff',
    },
    title: {
      color: '#0d1a26',
      fontWeight: 400,
    },
    button: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      background: '#1890ff',
      color: '#fff',
      fontSize: '14px',
      cursor: 'pointer',
      transition: '.3s background',
      ':hover': {
        background: '#40a9ff'
      }
    }
  });
  
  const ExampleAphrodite = () => (
    <div className={css(styles.wrapper)}>
      <h1 className={css(styles.title)}>Example Aphrodite</h1>
      <button className={css(styles.button)}>Button</button>
    </div>
  );

  export default ExampleAphrodite;  
`;
