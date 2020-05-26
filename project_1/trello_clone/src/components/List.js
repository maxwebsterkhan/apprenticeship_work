import React from 'react';
import MainCard from './MainCard';

const List = ({title}) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      <MainCard />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#ccc',
    borderRadius: 3,
    width: 300,
    padding: 6,
  },
};

export default List
