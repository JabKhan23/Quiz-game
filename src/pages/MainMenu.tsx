import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Main Menu</h1>
      <button onClick={() => navigate('/home')}>Enter</button>
      <button onClick={() => navigate('/info')}>Instructions</button>
    </div>
  );
};

export default MainMenu;