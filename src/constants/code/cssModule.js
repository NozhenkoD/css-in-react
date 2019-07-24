export const cssModule = `
  import React from 'react';
  import styles from './css.module.css';
  
  const ExampleCssModule = () => {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Example Inline.</h1>
        <button className={styles.button}>Button</button>
      </div>
    );
  };
  
  export default ExampleCssModule;
`;
