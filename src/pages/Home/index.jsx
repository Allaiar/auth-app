import React from "react";
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link  className="text-3xl font-bold underline" to='/register'>Register→</Link>
    </div>
  );
};

export default Home;
