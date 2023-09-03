import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Home = () => {
  return(
  <div>
    <h1 style={{color:'white',}}>Home</h1>
    <Link to='/store'>
      <Button className="btn-light">Go To Store=> </Button>
    </Link>
  </div>
  )
};

export default Home;
