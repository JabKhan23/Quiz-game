import React from 'react';
import { useNavigate } from 'react-router-dom';

const End: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>The End</h1>
      <br/>
      <h2>Thank you for playing!</h2><br/><br/>
      <button onClick={() => navigate('/home')}>Back to Main Menu</button>
   
    </div>
  );
};

export default End;