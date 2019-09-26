import React, {useContext} from 'react';
import Increment from '../increment/increment';
import {counterContext} from '../context/context.js';

const Count = (props) => {

  const context = useContext(counterContext);

  const styles = {
    container: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '40%',
    },
    counter: {
      display: 'inline-block',
      fontSize: '1em',
      border: '2px solid #444',
      borderRadius: '50%',
      lineHeight: '5em',
      textAlign: 'center',
      width: '5em',
    },
    button: {
      height: '3em',
    },
  };

  return (
    <div style={styles.container}>
      
      <span style={styles.counter}>{context.counter}</span>
      
    </div>
  );
};

export default Count;
