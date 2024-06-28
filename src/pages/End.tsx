import React from 'react';
import { useNavigate } from 'react-router-dom';

const End: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Thank you for playing</h1>
      <button onClick={() => navigate('/home')}>Back to Main Menu</button>
   
    </div>
  );
};

export default End;