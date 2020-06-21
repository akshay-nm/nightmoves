import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to='/settings'>Settings</Link><br />
      <Link to='/stats'>Stats</Link><br />
      <Link to='/overlay'>Overlay</Link>
    </div>
  );
};

export default Home;