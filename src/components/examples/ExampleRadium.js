import React from 'react';
import Radium from 'radium';

function ExampleRadium() {
  const styles = {
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
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>Example Radium</h1>
      <button style={styles.button}>Button</button>
    </div>
  );
}
export default Radium(ExampleRadium);
