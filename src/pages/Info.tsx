import React from 'react';
import { useNavigate } from 'react-router-dom';

const Info: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>BOSH</h1>
      <button onClick={() => navigate('/home')}>Back to Main Menu</button>
   
    </div>
  );
};

export default Info;