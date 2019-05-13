import React from 'react';
import injectSheet from 'react-jss';

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
    '&:hover': {
      background: '#40a9ff'
    }
  }
};


const Jss = ({ classes }) => (
  <div className={classes.wrapper}>
    <h1 className={classes.title}>Example JSS.</h1>
    <button className={classes.button}>Button</button>
  </div>
);

export default injectSheet(styles)(Jss)
